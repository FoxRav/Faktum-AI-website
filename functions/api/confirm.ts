import { hashToken } from '../lib/crypto';
import { getSubscriberById, getValidToken } from '../lib/db';
import { redirectResponse } from '../lib/http';
import { siteUrl } from '../email/send';

function confirmedPath(locale: string): string {
  return locale === 'en' ? '/en/subscribe/?error=newsletter_discontinued' : '/tilaa/?error=newsletter_discontinued';
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

  return redirectResponse(`${baseSite}${confirmedPath(locale)}`);
};
