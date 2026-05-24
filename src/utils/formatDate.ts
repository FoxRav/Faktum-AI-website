import type { Locale } from '../i18n/config';

const fiDateFormatter = new Intl.DateTimeFormat('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const enDateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const fiDateTimeFormatter = new Intl.DateTimeFormat('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

const enDateTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

function formatters(locale: Locale = 'fi') {
  return locale === 'en'
    ? { date: enDateFormatter, dateTime: enDateTimeFormatter }
    : { date: fiDateFormatter, dateTime: fiDateTimeFormatter };
}

export function formatDate(date: Date, locale: Locale = 'fi'): string {
  return formatters(locale).date.format(date);
}

export function formatDateTime(date: Date, locale: Locale = 'fi'): string {
  return formatters(locale).dateTime.format(date);
}

export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0] ?? '';
}

export function formatDateTimeISO(date: Date): string {
  return date.toISOString();
}

export function schemaLanguage(locale: Locale): string {
  return locale === 'en' ? 'en' : 'fi-FI';
}
