import { hashToken } from '../lib/crypto';
import {
  deleteSubscriberCompletely,
  getSubscriberById,
  getValidToken,
  markTokenUsed,
} from '../lib/db';
import { jsonResponse, redirectResponse } from '../lib/http';
import { siteUrl } from '../email/send';

async function processUnsubscribe(
  db: D1Database,
  env: Env,
  request: Request,
  token: string,
): Promise<Response> {
  const tokenHash = await hashToken(token, env.TOKEN_SECRET);
  const tokenRow = await getValidToken(db, tokenHash, 'unsubscribe');

  if (!tokenRow) {
    return jsonResponse({ ok: false, error: 'invalid_token' }, 400);
  }

  const subscriber = await getSubscriberById(db, tokenRow.subscriber_id);
  if (!subscriber) {
    return jsonResponse({ ok: false, error: 'invalid_token' }, 400);
  }

  const locale = subscriber.locale === 'en' ? 'en' : 'fi';
  const emailNormalized = subscriber.email_normalized;

  await markTokenUsed(db, tokenHash);
  await deleteSubscriberCompletely(db, subscriber.id, emailNormalized);

  const base = siteUrl(env);
  const path = locale === 'en' ? '/en/subscribe/unsubscribed/' : '/tilaa/peruutettu/';

  if (request.method === 'GET') {
    return redirectResponse(`${base}${path}`);
  }

  return jsonResponse({ ok: true, message: 'unsubscribed' });
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const db = context.env.FAKTUM_DB;
  if (!db) return jsonResponse({ ok: false, error: 'service_unavailable' }, 503);

  const token = new URL(context.request.url).searchParams.get('token');
  if (!token) return jsonResponse({ ok: false, error: 'missing_token' }, 400);

  return processUnsubscribe(db, context.env, context.request, token);
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const db = context.env.FAKTUM_DB;
  if (!db) return jsonResponse({ ok: false, error: 'service_unavailable' }, 503);

  let token: string | null = new URL(context.request.url).searchParams.get('token');
  if (!token) {
    try {
      const body = (await context.request.json()) as { token?: string };
      token = typeof body.token === 'string' ? body.token : null;
    } catch {
      token = null;
    }
  }

  if (!token) return jsonResponse({ ok: false, error: 'missing_token' }, 400);

  return processUnsubscribe(db, context.env, context.request, token);
};
