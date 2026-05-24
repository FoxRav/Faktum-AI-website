export const SUBSCRIBER_STATUSES = [
  'pending',
  'active',
  'unsubscribed',
  'bounced',
  'deleted',
] as const;

export type SubscriberStatus = (typeof SUBSCRIBER_STATUSES)[number];

export const PREFERRED_LANGUAGES = ['fi', 'en', 'both'] as const;
export type PreferredLanguage = (typeof PREFERRED_LANGUAGES)[number];

export const SUBSCRIBER_ROLES = [
  'general_reader',
  'ai_curious_citizen',
  'student',
  'it_professional',
  'software_developer',
  'ai_ml_builder',
  'entrepreneur',
  'business_decision_maker',
  'public_sector',
  'media_communications',
  'investor',
  'other',
] as const;

export type SubscriberRole = (typeof SUBSCRIBER_ROLES)[number];

export const SUBSCRIBER_INTERESTS = [
  'ai_news',
  'ai_tools',
  'ai_for_everyday_people',
  'ai_at_work',
  'ai_and_economy',
  'ai_and_regulation',
  'eu_ai_act',
  'privacy_gdpr',
  'open_models',
  'rag_agents',
  'ai_bubble_market',
  'finnish_ai_solutions',
  'english_analysis',
  'finnish_analysis',
] as const;

export type SubscriberInterest = (typeof SUBSCRIBER_INTERESTS)[number];

export const CONSENT_EVENT_TYPES = [
  'signup_started',
  'confirm_sent',
  'confirmed',
  'preference_update',
  'consent_changed',
  'unsubscribe',
  'resubscribe',
  'export_request',
  'delete_request',
  'deleted',
] as const;

export type ConsentEventType = (typeof CONSENT_EVENT_TYPES)[number];

export const TOKEN_PURPOSES = ['confirm', 'manage', 'unsubscribe', 'data_request'] as const;
export type TokenPurpose = (typeof TOKEN_PURPOSES)[number];

export const DATA_REQUEST_TYPES = ['export', 'delete'] as const;
export type DataRequestType = (typeof DATA_REQUEST_TYPES)[number];

export const CONSENT_VERSION = '2026-05-24-v1';

export function isSubscriberRole(value: string): value is SubscriberRole {
  return (SUBSCRIBER_ROLES as readonly string[]).includes(value);
}

export function isSubscriberInterest(value: string): value is SubscriberInterest {
  return (SUBSCRIBER_INTERESTS as readonly string[]).includes(value);
}

export function isPreferredLanguage(value: string): value is PreferredLanguage {
  return (PREFERRED_LANGUAGES as readonly string[]).includes(value);
}

export function filterRoles(values: string[]): SubscriberRole[] {
  return values.filter(isSubscriberRole);
}

export function filterInterests(values: string[]): SubscriberInterest[] {
  return values.filter(isSubscriberInterest);
}
