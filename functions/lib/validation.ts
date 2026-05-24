const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string): boolean {
  if (email.length > 254) return false;
  return EMAIL_PATTERN.test(email);
}

export function parseJsonBody<T extends Record<string, unknown>>(body: unknown): T | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  return body as T;
}
