CREATE TABLE IF NOT EXISTS subscribers (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  email_normalized TEXT NOT NULL UNIQUE,
  email_verified_at INTEGER,
  status TEXT NOT NULL DEFAULT 'pending',
  locale TEXT NOT NULL DEFAULT 'fi',
  preferred_language TEXT NOT NULL DEFAULT 'fi',
  primary_role TEXT,
  secondary_roles_json TEXT,
  interests_json TEXT,
  marketing_consent INTEGER NOT NULL DEFAULT 0,
  consent_version TEXT,
  consent_text_snapshot TEXT,
  source_url TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  unsubscribed_at INTEGER,
  deleted_at INTEGER
);

CREATE INDEX IF NOT EXISTS idx_subscribers_status_locale
ON subscribers(status, locale);

CREATE INDEX IF NOT EXISTS idx_subscribers_email_normalized
ON subscribers(email_normalized);

CREATE TABLE IF NOT EXISTS consent_events (
  id TEXT PRIMARY KEY,
  subscriber_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  legal_basis TEXT,
  consent_version TEXT,
  payload_json TEXT,
  ip_hash TEXT,
  user_agent_truncated TEXT,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (subscriber_id) REFERENCES subscribers(id)
);

CREATE INDEX IF NOT EXISTS idx_consent_events_subscriber_created
ON consent_events(subscriber_id, created_at);

CREATE TABLE IF NOT EXISTS confirmation_tokens (
  token_hash TEXT PRIMARY KEY,
  subscriber_id TEXT NOT NULL,
  purpose TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  used_at INTEGER,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (subscriber_id) REFERENCES subscribers(id)
);

CREATE INDEX IF NOT EXISTS idx_confirmation_tokens_subscriber_purpose
ON confirmation_tokens(subscriber_id, purpose);

CREATE TABLE IF NOT EXISTS data_requests (
  id TEXT PRIMARY KEY,
  subscriber_id TEXT,
  email_normalized TEXT NOT NULL,
  request_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  token_hash TEXT,
  payload_json TEXT,
  created_at INTEGER NOT NULL,
  completed_at INTEGER
);

CREATE INDEX IF NOT EXISTS idx_data_requests_email_status
ON data_requests(email_normalized, status);
