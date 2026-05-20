const fiFormatter = new Intl.DateTimeFormat('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatDate(date: Date): string {
  return fiFormatter.format(date);
}

export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0] ?? '';
}
