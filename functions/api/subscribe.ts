import { generateToken, hashIp, hashToken, truncateUserAgent } from '../lib/crypto';
import {
  createConfirmationToken,
  getSubscriberByEmail,
  insertSubscriber,
  logConsentEvent,
  resetSubscriberPending,
} from '../lib/db';
import { getClientIp, jsonResponse } from '../lib/http';
import { isPreferredLanguage } from '../lib/subscriber-enums';
import { isValidEmail, normalizeEmail, parseJsonBody } from '../lib/validation';
import { sendEmail } from '../email/send';
import {
  buildConfirmUrl,
  buildPrivacyUrl,
  confirmEmail,
} from '../email/templates';

interface SubscribeBody {
  email?: string;
  locale?: string;
  preferredLanguage?: string;
  consentMarketing?: boolean;
  sourceUrl?: string;
  honeypot?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const db = context.env.FAKTUM_DB;
  if (!db) {
    return jsonResponse({ ok: false, error: 'service_unavailable' }, 503);
  }

  let body: SubscribeBody;
  try {
    body = parseJsonBody<SubscribeBody>(await context.request.json()) ?? {};
  } catch {
    return jsonResponse({ ok: false, error: 'invalid_json' }, 400);
  }

  if (body.honeypot) {
    return jsonResponse({ ok: true, message: 'check_email' });
  }

  const emailRaw = typeof body.email === 'string' ? body.email : '';
  const emailNormalized = normalizeEmail(emailRaw);

  if (!isValidEmail(emailNormalized)) {
    return jsonResponse({ ok: false, error: 'invalid_email' }, 400);
  }

  if (body.consentMarketing !== true) {
    return jsonResponse({ ok: false, error: 'consent_required' }, 400);
  }

  const locale = body.locale === 'en' ? 'en' : 'fi';
  const preferredLanguage =
    typeof body.preferredLanguage === 'string' && isPreferredLanguage(body.preferredLanguage)
      ? body.preferredLanguage
      : locale;
  const sourceUrl = typeof body.sourceUrl === 'string' ? body.sourceUrl.slice(0, 500) : null;
  const consentSnapshot = `briefing_v1_${locale}`;

  const ip = getClientIp(context.request);
  const ipHash = ip ? await hashIp(ip, context.env.TOKEN_SECRET) : null;
  const userAgent = truncateUserAgent(context.request.headers.get('user-agent'));

  const existing = await getSubscriberByEmail(db, emailNormalized);

  if (existing?.status === 'active') {
    return jsonResponse({ ok: true, message: 'check_email' });
  }

  let subscriberId: string;

  if (!existing || existing.status === 'deleted') {
    subscriberId = crypto.randomUUID();
    await insertSubscriber(db, {
      id: subscriberId,
      email: emailRaw.trim(),
      emailNormalized,
      locale,
      preferredLanguage,
      sourceUrl,
      consentTextSnapshot: consentSnapshot,
    });
    await logConsentEvent(db, {
      id: crypto.randomUUID(),
      subscriberId,
      eventType: 'signup_started',
      legalBasis: 'consent',
      payload: { locale, preferredLanguage, sourceUrl },
      ipHash,
      userAgent,
    });
  } else {
    subscriberId = existing.id;
    await resetSubscriberPending(db, subscriberId, locale, preferredLanguage, sourceUrl);
    await logConsentEvent(db, {
      id: crypto.randomUUID(),
      subscriberId,
      eventType: existing.status === 'unsubscribed' ? 'resubscribe' : 'signup_started',
      legalBasis: 'consent',
      payload: { locale, preferredLanguage, sourceUrl, previousStatus: existing.status },
      ipHash,
      userAgent,
    });
  }

  const rawToken = generateToken();
  const tokenHash = await hashToken(rawToken, context.env.TOKEN_SECRET);
  await createConfirmationToken(db, tokenHash, subscriberId, 'confirm');

  const emailLocale = locale === 'en' ? 'en' : 'fi';
  const template = confirmEmail({
    confirmUrl: buildConfirmUrl(context.env, rawToken),
    privacyUrl: buildPrivacyUrl(context.env, emailLocale),
    locale: emailLocale,
  });

  const sent = await sendEmail(context.env, {
    to: emailNormalized,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });

  if (!sent) {
    return jsonResponse({ ok: false, error: 'email_send_failed' }, 502);
  }

  await logConsentEvent(db, {
    id: crypto.randomUUID(),
    subscriberId,
    eventType: 'confirm_sent',
    legalBasis: 'consent',
    ipHash,
    userAgent,
  });

  return jsonResponse({ ok: true, message: 'check_email' });
};
