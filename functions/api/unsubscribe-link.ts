import { generateToken, hashToken } from '../lib/crypto';
import { createConfirmationToken, getSubscriberByEmail } from '../lib/db';
import { jsonResponse } from '../lib/http';
import { isValidEmail, normalizeEmail, parseJsonBody } from '../lib/validation';
import { sendEmail } from '../email/send';
import { buildUnsubscribeUrl, unsubscribeLinkEmail } from '../email/templates';

interface UnsubscribeLinkBody {
  email?: string;
  locale?: string;
  honeypot?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const db = context.env.FAKTUM_DB;
  if (!db) {
    return jsonResponse({ ok: false, error: 'service_unavailable' }, 503);
  }

  let body: UnsubscribeLinkBody;
  try {
    body = parseJsonBody<UnsubscribeLinkBody>(await context.request.json()) ?? {};
  } catch {
    return jsonResponse({ ok: false, error: 'invalid_json' }, 400);
  }

  if (body.honeypot) {
    return jsonResponse({ ok: true, message: 'check_email' });
  }

  const emailNormalized = normalizeEmail(typeof body.email === 'string' ? body.email : '');
  if (!isValidEmail(emailNormalized)) {
    return jsonResponse({ ok: false, error: 'invalid_email' }, 400);
  }

  const existing = await getSubscriberByEmail(db, emailNormalized);
  if (existing && (existing.status === 'active' || existing.status === 'pending')) {
    const emailLocale = existing.locale === 'en' ? 'en' : 'fi';
    const rawToken = generateToken();
    const tokenHash = await hashToken(rawToken, context.env.TOKEN_SECRET);
    await createConfirmationToken(db, tokenHash, existing.id, 'unsubscribe');

    const template = unsubscribeLinkEmail({
      unsubscribeUrl: buildUnsubscribeUrl(context.env, emailLocale, rawToken),
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
  }

  return jsonResponse({ ok: true, message: 'check_email' });
};
