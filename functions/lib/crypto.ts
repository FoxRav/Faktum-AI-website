export function generateToken(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export async function hashToken(token: string, secret: string): Promise<string> {
  const data = new TextEncoder().encode(`${secret}:${token}`);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export async function hashIp(ip: string, secret: string): Promise<string> {
  return hashToken(ip, `${secret}:ip`);
}

export function truncateUserAgent(userAgent: string | null, maxLength = 120): string | null {
  if (!userAgent) return null;
  return userAgent.length > maxLength ? userAgent.slice(0, maxLength) : userAgent;
}
