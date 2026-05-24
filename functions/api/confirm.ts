import { generateToken, hashToken } from '../lib/crypto';
import {
  activateSubscriber,
  createConfirmationToken,
  getSubscriberById,
  getValidToken,
  logConsentEvent,
  markTokenUsed,
} from '../lib/db';
import { redirectResponse } from '../lib/http';
import { sendEmail, siteUrl } from '../email/send';
import {
  buildManageUrl,
  buildUnsubscribeUrl,
  welcomeEmail,
} from '../email/templates';

function confirmedPath(locale: string): string {
  return locale === 'en' ? '/en/subscribe/confirmed/' : '/tilaa/vahvistettu/';
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const db = context.env.FAKTUM_DB;
  const baseSite = siteUrl(context.env);

  if (!db) {
    return redirectResponse(`${baseSite}/tilaa/vahvista/?error=service_unavailable`);
  }

  const token = new URL(context.request.url).searchParams.get('token');
  if (!token) {
    return redirectResponse(`${baseSite}/tilaa/vahvista/?error=missing_token`);
  }

  const tokenHash = await hashToken(token, context.env.TOKEN_SECRET);
  const tokenRow = await getValidToken(db, tokenHash, 'confirm');

  if (!tokenRow) {
    return redirectResponse(`${baseSite}/tilaa/vahvista/?error=invalid_token`);
  }

  const subscriber = await getSubscriberById(db, tokenRow.subscriber_id);
  if (!subscriber) {
    return redirectResponse(`${baseSite}/tilaa/vahvista/?error=invalid_token`);
  }

  const locale = subscriber.locale === 'en' ? 'en' : 'fi';
  const emailLocale = locale;

  await markTokenUsed(db, tokenHash);
  await activateSubscriber(db, subscriber.id);

  await logConsentEvent(db, {
    id: crypto.randomUUID(),
    subscriberId: subscriber.id,
    eventType: 'confirmed',
    legalBasis: 'consent',
  });

  const manageRaw = generateToken();
  const manageHash = await hashToken(manageRaw, context.env.TOKEN_SECRET);
  await createConfirmationToken(db, manageHash, subscriber.id, 'manage');

  const unsubRaw = generateToken();
  const unsubHash = await hashToken(unsubRaw, context.env.TOKEN_SECRET);
  await createConfirmationToken(db, unsubHash, subscriber.id, 'unsubscribe');

  const welcome = welcomeEmail(
    emailLocale,
    buildManageUrl(context.env, emailLocale, manageRaw),
    buildUnsubscribeUrl(context.env, emailLocale, unsubRaw),
  );

  context.waitUntil(
    sendEmail(context.env, {
      to: subscriber.email_normalized,
      subject: welcome.subject,
      html: welcome.html,
      text: welcome.text,
    }),
  );

  return redirectResponse(`${baseSite}${confirmedPath(locale)}`);
};
