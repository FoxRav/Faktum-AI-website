const fiDateFormatter = new Intl.DateTimeFormat('fi-FI', {
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

export function formatDate(date: Date): string {
  return fiDateFormatter.format(date);
}

/** Publication moment — use when several articles share the same calendar day. */
export function formatDateTime(date: Date): string {
  return fiDateTimeFormatter.format(date);
}

export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0] ?? '';
}

/** Full ISO 8601 for schema.org and Open Graph article times. */
export function formatDateTimeISO(date: Date): string {
  return date.toISOString();
}
