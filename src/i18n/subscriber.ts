import type { Locale } from './config';

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

export const ROLE_LABELS: Record<Locale, Record<SubscriberRole, string>> = {
  fi: {
    general_reader: 'Tavallinen lukija',
    ai_curious_citizen: 'AI:sta kiinnostunut kansalainen',
    student: 'Opiskelija',
    it_professional: 'IT-ammattilainen',
    software_developer: 'Ohjelmistokehittäjä',
    ai_ml_builder: 'AI / ML -rakentaja',
    entrepreneur: 'Yrittäjä',
    business_decision_maker: 'Yrityspäättäjä',
    public_sector: 'Kunta / julkinen sektori',
    media_communications: 'Media / viestintä',
    investor: 'Sijoittija',
    other: 'Muu',
  },
  en: {
    general_reader: 'General reader',
    ai_curious_citizen: 'AI-curious citizen',
    student: 'Student',
    it_professional: 'IT professional',
    software_developer: 'Software developer',
    ai_ml_builder: 'AI / ML builder',
    entrepreneur: 'Entrepreneur',
    business_decision_maker: 'Business decision-maker',
    public_sector: 'Municipality / public sector',
    media_communications: 'Media / communications',
    investor: 'Investor',
    other: 'Other',
  },
};

export const INTEREST_LABELS: Record<Locale, Record<SubscriberInterest, string>> = {
  fi: {
    ai_news: 'AI-uutiset',
    ai_tools: 'AI-työkalut',
    ai_for_everyday_people: 'AI tavalliselle ihmiselle',
    ai_at_work: 'AI työelämässä',
    ai_and_economy: 'AI ja talous',
    ai_and_regulation: 'AI ja regulaatio',
    eu_ai_act: 'EU AI Act',
    privacy_gdpr: 'Tietosuoja / GDPR',
    open_models: 'Avoimet mallit',
    rag_agents: 'RAG / agentit',
    ai_bubble_market: 'AI-kupla / markkina',
    finnish_ai_solutions: 'Suomalaiset AI-ratkaisut',
    english_analysis: 'Englanninkieliset analyysit',
    finnish_analysis: 'Suomenkieliset analyysit',
  },
  en: {
    ai_news: 'AI news',
    ai_tools: 'AI tools',
    ai_for_everyday_people: 'AI for everyday people',
    ai_at_work: 'AI at work',
    ai_and_economy: 'AI and economy',
    ai_and_regulation: 'AI and regulation',
    eu_ai_act: 'EU AI Act',
    privacy_gdpr: 'Privacy / GDPR',
    open_models: 'Open models',
    rag_agents: 'RAG / agents',
    ai_bubble_market: 'AI bubble / market',
    finnish_ai_solutions: 'Finnish AI solutions',
    english_analysis: 'English analysis',
    finnish_analysis: 'Finnish analysis',
  },
};

export const AI_ASSISTANCE_LABELS: Record<
  Locale,
  Record<'none' | 'assisted' | 'substantial', string>
> = {
  fi: {
    none: 'Ei AI-avusteista tuotantoa',
    assisted: 'AI-avusteinen tuotanto',
    substantial: 'Merkitty AI-avusteinen sisältö',
  },
  en: {
    none: 'No AI-assisted production',
    assisted: 'AI-assisted production',
    substantial: 'Substantial AI-assisted content',
  },
};

export const COMMERCIAL_LABELS: Record<
  Locale,
  Record<'none' | 'sponsored' | 'affiliate' | 'partner' | 'advertisement', string>
> = {
  fi: {
    none: '',
    sponsored: 'Kaupallinen yhteistyö',
    affiliate: 'Affiliate-linkki',
    partner: 'Kumppanuus',
    advertisement: 'Mainos',
  },
  en: {
    none: '',
    sponsored: 'Sponsored content',
    affiliate: 'Affiliate link',
    partner: 'Partnership',
    advertisement: 'Advertisement',
  },
};
