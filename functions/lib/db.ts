import type {
  ConsentEventType,
  SubscriberInterest,
  SubscriberRole,
  SubscriberStatus,
  TokenPurpose,
} from './subscriber-enums';
import { CONSENT_VERSION } from './subscriber-enums';

export interface SubscriberRow {
  id: string;
  email: string;
  email_normalized: string;
  email_verified_at: number | null;
  status: SubscriberStatus;
  locale: string;
  preferred_language: string;
  primary_role: string | null;
  secondary_roles_json: string | null;
  interests_json: string | null;
  marketing_consent: number;
  consent_version: string | null;
  consent_text_snapshot: string | null;
  source_url: string | null;
  created_at: number;
  updated_at: number;
  unsubscribed_at: number | null;
  deleted_at: number | null;
}

export interface TokenRow {
  token_hash: string;
  subscriber_id: string;
  purpose: TokenPurpose;
  expires_at: number;
  used_at: number | null;
  created_at: number;
}

export const TOKEN_EXPIRY_MS: Record<TokenPurpose, number> = {
  confirm: 48 * 60 * 60 * 1000,
  manage: 24 * 60 * 60 * 1000,
  unsubscribe: 90 * 24 * 60 * 60 * 1000,
  data_request: 48 * 60 * 60 * 1000,
};

export function nowMs(): number {
  return Date.now();
}

export async function getSubscriberByEmail(
  db: D1Database,
  emailNormalized: string,
): Promise<SubscriberRow | null> {
  return db
    .prepare('SELECT * FROM subscribers WHERE email_normalized = ? LIMIT 1')
    .bind(emailNormalized)
    .first<SubscriberRow>();
}

export async function getSubscriberById(
  db: D1Database,
  id: string,
): Promise<SubscriberRow | null> {
  return db.prepare('SELECT * FROM subscribers WHERE id = ? LIMIT 1').bind(id).first<SubscriberRow>();
}

export async function insertSubscriber(
  db: D1Database,
  row: {
    id: string;
    email: string;
    emailNormalized: string;
    locale: string;
    preferredLanguage: string;
    sourceUrl: string | null;
    consentTextSnapshot: string;
  },
): Promise<void> {
  const ts = nowMs();
  await db
    .prepare(
      `INSERT INTO subscribers (
        id, email, email_normalized, status, locale, preferred_language,
        marketing_consent, consent_version, consent_text_snapshot, source_url,
        created_at, updated_at
      ) VALUES (?, ?, ?, 'pending', ?, ?, 0, ?, ?, ?, ?, ?)`,
    )
    .bind(
      row.id,
      row.email,
      row.emailNormalized,
      row.locale,
      row.preferredLanguage,
      CONSENT_VERSION,
      row.consentTextSnapshot,
      row.sourceUrl,
      ts,
      ts,
    )
    .run();
}

export async function resetSubscriberPending(
  db: D1Database,
  subscriberId: string,
  locale: string,
  preferredLanguage: string,
  sourceUrl: string | null,
): Promise<void> {
  const ts = nowMs();
  await db
    .prepare(
      `UPDATE subscribers SET
        status = 'pending',
        locale = ?,
        preferred_language = ?,
        marketing_consent = 0,
        consent_version = ?,
        source_url = ?,
        unsubscribed_at = NULL,
        deleted_at = NULL,
        updated_at = ?
      WHERE id = ?`,
    )
    .bind(locale, preferredLanguage, CONSENT_VERSION, sourceUrl, ts, subscriberId)
    .run();
}

export async function activateSubscriber(db: D1Database, subscriberId: string): Promise<void> {
  const ts = nowMs();
  await db
    .prepare(
      `UPDATE subscribers SET
        status = 'active',
        email_verified_at = ?,
        marketing_consent = 1,
        updated_at = ?
      WHERE id = ?`,
    )
    .bind(ts, ts, subscriberId)
    .run();
}

export async function deleteSubscriberCompletely(
  db: D1Database,
  subscriberId: string,
  emailNormalized: string,
): Promise<void> {
  await db.prepare('DELETE FROM confirmation_tokens WHERE subscriber_id = ?').bind(subscriberId).run();
  await db.prepare('DELETE FROM consent_events WHERE subscriber_id = ?').bind(subscriberId).run();
  await db
    .prepare('DELETE FROM data_requests WHERE subscriber_id = ? OR email_normalized = ?')
    .bind(subscriberId, emailNormalized)
    .run();
  await db.prepare('DELETE FROM subscribers WHERE id = ?').bind(subscriberId).run();
}

export async function clearSubscriberPreferences(db: D1Database, subscriberId: string): Promise<void> {
  const ts = nowMs();
  await db
    .prepare(
      `UPDATE subscribers SET
        primary_role = NULL,
        secondary_roles_json = NULL,
        interests_json = NULL,
        updated_at = ?
      WHERE id = ?`,
    )
    .bind(ts, subscriberId)
    .run();
}

export async function updateSubscriberPreferences(
  db: D1Database,
  subscriberId: string,
  prefs: {
    primaryRole: SubscriberRole | null;
    secondaryRoles: SubscriberRole[];
    interests: SubscriberInterest[];
    preferredLanguage: string;
  },
): Promise<void> {
  const ts = nowMs();
  await db
    .prepare(
      `UPDATE subscribers SET
        primary_role = ?,
        secondary_roles_json = ?,
        interests_json = ?,
        preferred_language = ?,
        updated_at = ?
      WHERE id = ?`,
    )
    .bind(
      prefs.primaryRole,
      JSON.stringify(prefs.secondaryRoles),
      JSON.stringify(prefs.interests),
      prefs.preferredLanguage,
      ts,
      subscriberId,
    )
    .run();
}

export async function logConsentEvent(
  db: D1Database,
  event: {
    id: string;
    subscriberId: string;
    eventType: ConsentEventType;
    legalBasis?: string;
    payload?: Record<string, unknown>;
    ipHash?: string | null;
    userAgent?: string | null;
  },
): Promise<void> {
  await db
    .prepare(
      `INSERT INTO consent_events (
        id, subscriber_id, event_type, legal_basis, consent_version,
        payload_json, ip_hash, user_agent_truncated, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      event.id,
      event.subscriberId,
      event.eventType,
      event.legalBasis ?? null,
      CONSENT_VERSION,
      event.payload ? JSON.stringify(event.payload) : null,
      event.ipHash ?? null,
      event.userAgent ?? null,
      nowMs(),
    )
    .run();
}

export async function createConfirmationToken(
  db: D1Database,
  tokenHash: string,
  subscriberId: string,
  purpose: TokenPurpose,
): Promise<void> {
  const ts = nowMs();
  await db
    .prepare(
      `INSERT INTO confirmation_tokens (
        token_hash, subscriber_id, purpose, expires_at, created_at
      ) VALUES (?, ?, ?, ?, ?)`,
    )
    .bind(tokenHash, subscriberId, purpose, ts + TOKEN_EXPIRY_MS[purpose], ts)
    .run();
}

export async function getValidToken(
  db: D1Database,
  tokenHash: string,
  purpose: TokenPurpose,
): Promise<TokenRow | null> {
  const row = await db
    .prepare(
      `SELECT * FROM confirmation_tokens
       WHERE token_hash = ? AND purpose = ? AND used_at IS NULL AND expires_at > ?
       LIMIT 1`,
    )
    .bind(tokenHash, purpose, nowMs())
    .first<TokenRow>();
  return row ?? null;
}

export async function markTokenUsed(db: D1Database, tokenHash: string): Promise<void> {
  await db
    .prepare('UPDATE confirmation_tokens SET used_at = ? WHERE token_hash = ?')
    .bind(nowMs(), tokenHash)
    .run();
}

export async function invalidateSubscriberTokens(
  db: D1Database,
  subscriberId: string,
  purposes: TokenPurpose[],
): Promise<void> {
  if (purposes.length === 0) return;
  const ts = nowMs();
  const placeholders = purposes.map(() => '?').join(', ');
  await db
    .prepare(
      `UPDATE confirmation_tokens
       SET used_at = ?
       WHERE subscriber_id = ? AND purpose IN (${placeholders}) AND used_at IS NULL`,
    )
    .bind(ts, subscriberId, ...purposes)
    .run();
}

export async function createDataRequest(
  db: D1Database,
  row: {
    id: string;
    subscriberId: string | null;
    emailNormalized: string;
    requestType: string;
    tokenHash: string;
  },
): Promise<void> {
  await db
    .prepare(
      `INSERT INTO data_requests (
        id, subscriber_id, email_normalized, request_type, status, token_hash, created_at
      ) VALUES (?, ?, ?, ?, 'pending', ?, ?)`,
    )
    .bind(row.id, row.subscriberId, row.emailNormalized, row.requestType, row.tokenHash, nowMs())
    .run();
}

export async function getPendingDataRequest(
  db: D1Database,
  tokenHash: string,
): Promise<{
  id: string;
  subscriber_id: string | null;
  email_normalized: string;
  request_type: string;
} | null> {
  const row = await db
    .prepare(
      `SELECT id, subscriber_id, email_normalized, request_type FROM data_requests
       WHERE token_hash = ? AND status = 'pending' LIMIT 1`,
    )
    .bind(tokenHash)
    .first<{
      id: string;
      subscriber_id: string | null;
      email_normalized: string;
      request_type: string;
    }>();
  return row ?? null;
}

export async function completeDataRequest(db: D1Database, id: string): Promise<void> {
  await db
    .prepare('UPDATE data_requests SET status = ?, completed_at = ? WHERE id = ?')
    .bind('completed', nowMs(), id)
    .run();
}

export function parseJsonArray<T>(value: string | null): T[] {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

export function subscriberExportPayload(row: SubscriberRow): Record<string, unknown> {
  return {
    email: row.email,
    status: row.status,
    locale: row.locale,
    preferredLanguage: row.preferred_language,
    primaryRole: row.primary_role,
    secondaryRoles: parseJsonArray<string>(row.secondary_roles_json),
    interests: parseJsonArray<string>(row.interests_json),
    marketingConsent: row.marketing_consent === 1,
    consentVersion: row.consent_version,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    emailVerifiedAt: row.email_verified_at,
    unsubscribedAt: row.unsubscribed_at,
  };
}
