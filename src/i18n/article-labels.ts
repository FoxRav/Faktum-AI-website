import type { Locale } from './config';

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
