import { hashIp, hashToken, truncateUserAgent } from '../lib/crypto';
import {
  filterInterests,
  filterRoles,
  isPreferredLanguage,
  isSubscriberRole,
} from '../lib/subscriber-enums';
import {
  getSubscriberById,
  getValidToken,
  logConsentEvent,
  parseJsonArray,
  updateSubscriberPreferences,
} from '../lib/db';
import { getClientIp, jsonResponse } from '../lib/http';

function preferencesPayload(subscriber: Awaited<ReturnType<typeof getSubscriberById>>) {
  if (!subscriber) return null;
  return {
    email: subscriber.email,
    locale: subscriber.locale,
    preferredLanguage: subscriber.preferred_language,
    primaryRole: subscriber.primary_role,
    secondaryRoles: parseJsonArray<string>(subscriber.secondary_roles_json),
    interests: parseJsonArray<string>(subscriber.interests_json),
    status: subscriber.status,
  };
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const db = context.env.FAKTUM_DB;
  if (!db) return jsonResponse({ ok: false, error: 'service_unavailable' }, 503);

  const token = new URL(context.request.url).searchParams.get('token');
  if (!token) return jsonResponse({ ok: false, error: 'missing_token' }, 400);

  const tokenHash = await hashToken(token, context.env.TOKEN_SECRET);
  const tokenRow = await getValidToken(db, tokenHash, 'manage');
  if (!tokenRow) return jsonResponse({ ok: false, error: 'invalid_token' }, 403);

  const subscriber = await getSubscriberById(db, tokenRow.subscriber_id);
  if (!subscriber) return jsonResponse({ ok: false, error: 'invalid_token' }, 403);
  if (subscriber.status !== 'active') {
    return jsonResponse({ ok: false, error: 'subscription_inactive' }, 403);
  }

  return jsonResponse({ ok: true, preferences: preferencesPayload(subscriber) });
};

interface PreferencesBody {
  token?: string;
  primaryRole?: string | null;
  secondaryRoles?: string[];
  interests?: string[];
  preferredLanguage?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const db = context.env.FAKTUM_DB;
  if (!db) return jsonResponse({ ok: false, error: 'service_unavailable' }, 503);

  let body: PreferencesBody;
  try {
    body = (await context.request.json()) as PreferencesBody;
  } catch {
    return jsonResponse({ ok: false, error: 'invalid_json' }, 400);
  }

  const token = typeof body.token === 'string' ? body.token : null;
  if (!token) return jsonResponse({ ok: false, error: 'missing_token' }, 400);

  const tokenHash = await hashToken(token, context.env.TOKEN_SECRET);
  const tokenRow = await getValidToken(db, tokenHash, 'manage');
  if (!tokenRow) return jsonResponse({ ok: false, error: 'invalid_token' }, 403);

  const subscriber = await getSubscriberById(db, tokenRow.subscriber_id);
  if (!subscriber) return jsonResponse({ ok: false, error: 'invalid_token' }, 403);
  if (subscriber.status !== 'active') {
    return jsonResponse({ ok: false, error: 'subscription_inactive' }, 403);
  }

  const primaryRole =
    body.primaryRole && isSubscriberRole(body.primaryRole) ? body.primaryRole : null;
  const secondaryRoles = filterRoles(Array.isArray(body.secondaryRoles) ? body.secondaryRoles : []);
  const interests = filterInterests(Array.isArray(body.interests) ? body.interests : []);
  const preferredLanguage =
    typeof body.preferredLanguage === 'string' && isPreferredLanguage(body.preferredLanguage)
      ? body.preferredLanguage
      : subscriber.preferred_language;

  await updateSubscriberPreferences(db, subscriber.id, {
    primaryRole,
    secondaryRoles,
    interests,
    preferredLanguage,
  });

  const ip = getClientIp(context.request);
  const ipHash = ip ? await hashIp(ip, context.env.TOKEN_SECRET) : null;
  const userAgent = truncateUserAgent(context.request.headers.get('user-agent'));

  await logConsentEvent(db, {
    id: crypto.randomUUID(),
    subscriberId: subscriber.id,
    eventType: 'preference_update',
    legalBasis: 'consent',
    payload: { primaryRole, secondaryRoles, interests, preferredLanguage },
    ipHash,
    userAgent,
  });

  const updated = await getSubscriberById(db, subscriber.id);
  return jsonResponse({ ok: true, preferences: preferencesPayload(updated) });
};
