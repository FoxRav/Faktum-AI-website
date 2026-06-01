/** Paths excluded from @astrojs/sitemap (transactional, thin, or non-indexable). */
const EXCLUDED_PREFIXES = [
  '/tilaa/vahvista',
  '/tilaa/peruutettu',
  '/tilaa/peru',
  '/tilaa/asetukset',
  '/en/subscribe/confirm',
  '/en/subscribe/confirmed',
  '/en/subscribe/unsubscribed',
  '/en/subscribe/unsubscribe',
  '/en/subscribe/preferences',
  '/tietosuoja/oma-tieto',
  '/en/privacy/your-data',
  '/projektit',
  '/en/projects',
  '/haastattelut',
  '/en/interviews',
  '/mediakortti',
  '/en/media-kit',
  '/mainosta',
  '/en/advertise',
] as const;

export function shouldIncludeInSitemap(pageUrl: string): boolean {
  const pathname = new URL(pageUrl).pathname.replace(/\/$/, '') || '/';
  return !EXCLUDED_PREFIXES.some((prefix) => {
    const normalized = prefix.replace(/\/$/, '');
    return pathname === normalized || pathname.startsWith(`${normalized}/`);
  });
}
