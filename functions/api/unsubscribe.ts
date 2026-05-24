import { hashIp, hashToken, truncateUserAgent } from '../lib/crypto';
import {
  getSubscriberById,
  getValidToken,
  logConsentEvent,
  markTokenUsed,
  unsubscribeSubscriber,
} from '../lib/db';
import { getClientIp, jsonResponse, redirectResponse } from '../lib/http';
import { siteUrl } from '../email/send';

async function auditUnsubscribe(
  db: D1Database,
  subscriberId: string,
  env: Env,
  request: Request,
): Promise<void> {
  const ip = getClientIp(request);
  const ipHash = ip ? await hashIp(ip, env.TOKEN_SECRET) : null;
  const userAgent = truncateUserAgent(request.headers.get('user-agent'));

  await logConsentEvent(db, {
    id: crypto.randomUUID(),
    subscriberId,
    eventType: 'unsubscribe',
    legalBasis: 'consent_withdrawal',
    ipHash,
    userAgent,
  });
}

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

  await markTokenUsed(db, tokenHash);
  await unsubscribeSubscriber(db, subscriber.id);
  await auditUnsubscribe(db, subscriber.id, env, request);

  const locale = subscriber.locale === 'en' ? 'en' : 'fi';
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
