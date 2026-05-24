import { generateToken, hashIp, hashToken, truncateUserAgent } from '../lib/crypto';
import {
  completeDataRequest,
  createConfirmationToken,
  createDataRequest,
  deleteSubscriberCompletely,
  getPendingDataRequest,
  getSubscriberByEmail,
  logConsentEvent,
  markTokenUsed,
  subscriberExportPayload,
} from '../lib/db';
import { getClientIp, jsonResponse, redirectResponse } from '../lib/http';
import { isValidEmail, normalizeEmail } from '../lib/validation';
import { sendEmail, siteUrl } from '../email/send';
import { buildDataRequestVerifyUrl, dataRequestEmail } from '../email/templates';

interface DataRequestBody {
  email?: string;
  requestType?: string;
  locale?: string;
  honeypot?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const db = context.env.FAKTUM_DB;
  if (!db) return jsonResponse({ ok: false, error: 'service_unavailable' }, 503);

  let body: DataRequestBody;
  try {
    body = (await context.request.json()) as DataRequestBody;
  } catch {
    return jsonResponse({ ok: false, error: 'invalid_json' }, 400);
  }

  if (body.honeypot) {
    return jsonResponse({ ok: true, message: 'request_received' });
  }

  const emailNormalized = normalizeEmail(typeof body.email === 'string' ? body.email : '');
  if (!isValidEmail(emailNormalized)) {
    return jsonResponse({ ok: false, error: 'invalid_email' }, 400);
  }

  const requestType = body.requestType === 'delete' ? 'delete' : 'export';
  const locale = body.locale === 'en' ? 'en' : 'fi';

  const subscriber = await getSubscriberByEmail(db, emailNormalized);
  if (!subscriber) {
    return jsonResponse({ ok: true, message: 'request_received' });
  }

  const rawToken = generateToken();
  const tokenHash = await hashToken(rawToken, context.env.TOKEN_SECRET);
  const requestId = crypto.randomUUID();

  await createDataRequest(db, {
    id: requestId,
    subscriberId: subscriber.id,
    emailNormalized,
    requestType,
    tokenHash,
  });

  await createConfirmationToken(db, tokenHash, subscriber.id, 'data_request');

  const template = dataRequestEmail(locale, buildDataRequestVerifyUrl(context.env, rawToken), requestType);

  context.waitUntil(
    sendEmail(context.env, {
      to: emailNormalized,
      subject: template.subject,
      html: template.html,
      text: template.text,
    }),
  );

  const ip = getClientIp(context.request);
  const ipHash = ip ? await hashIp(ip, context.env.TOKEN_SECRET) : null;
  const userAgent = truncateUserAgent(context.request.headers.get('user-agent'));

  await logConsentEvent(db, {
    id: crypto.randomUUID(),
    subscriberId: subscriber.id,
    eventType: requestType === 'delete' ? 'delete_request' : 'export_request',
    legalBasis: 'legal_obligation',
    ipHash,
    userAgent,
  });

  return jsonResponse({ ok: true, message: 'request_received' });
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const db = context.env.FAKTUM_DB;
  const baseSite = siteUrl(context.env);
  const localeParam = new URL(context.request.url).searchParams.get('locale');
  const locale = localeParam === 'en' ? 'en' : 'fi';
  const donePath = locale === 'en' ? '/en/privacy/your-data/done/' : '/tietosuoja/oma-tieto/valmis/';

  if (!db) {
    return redirectResponse(`${baseSite}${donePath}?error=service_unavailable`);
  }

  const token = new URL(context.request.url).searchParams.get('token');
  if (!token) {
    return redirectResponse(`${baseSite}${donePath}?error=missing_token`);
  }

  const tokenHash = await hashToken(token, context.env.TOKEN_SECRET);
  const pending = await getPendingDataRequest(db, tokenHash);

  if (!pending) {
    return redirectResponse(`${baseSite}${donePath}?error=invalid_token`);
  }

  const subscriber = pending.subscriber_id
    ? await getSubscriberByEmail(db, pending.email_normalized)
    : null;

  await markTokenUsed(db, tokenHash);
  await completeDataRequest(db, pending.id);

  if (pending.request_type === 'delete' && pending.subscriber_id && subscriber) {
    await deleteSubscriberCompletely(db, pending.subscriber_id, subscriber.email_normalized);
    return redirectResponse(`${baseSite}${donePath}?result=deleted`);
  }

  if (subscriber && pending.request_type === 'export') {
    const payload = subscriberExportPayload(subscriber);
    return jsonResponse({ ok: true, data: payload });
  }

  return redirectResponse(`${baseSite}${donePath}?result=export_sent`);
};
