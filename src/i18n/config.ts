export type Locale = 'fi' | 'en';

export const defaultLocale: Locale = 'fi';

export const locales: Locale[] = ['fi', 'en'];

export const localeNames: Record<Locale, string> = {
  fi: 'Suomi',
  en: 'English',
};

export const htmlLang: Record<Locale, string> = {
  fi: 'fi',
  en: 'en',
};
