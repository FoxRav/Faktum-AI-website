/** Exact paths excluded from @astrojs/sitemap (index pages, thin pages). */
const EXCLUDED_EXACT_PATHS = [
  '/tilaa',
  '/en/subscribe',
  '/haastattelut',
  '/en/interviews',
  '/mediakortti',
  '/en/media-kit',
  '/mainosta',
  '/en/advertise',
] as const;

/** Prefix paths excluded from @astrojs/sitemap (transactional/non-indexable flows). */
const EXCLUDED_PREFIXES = [
  '/tilaa/vahvista',
  '/tilaa/vahvistettu',
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
] as const;

export function shouldIncludeInSitemap(pageUrl: string): boolean {
  const pathname = new URL(pageUrl).pathname.replace(/\/$/, '') || '/';
  if (EXCLUDED_EXACT_PATHS.includes(pathname as (typeof EXCLUDED_EXACT_PATHS)[number])) {
    return false;
  }

  return !EXCLUDED_PREFIXES.some((prefix) => {
    const normalized = prefix.replace(/\/$/, '');
    return pathname === normalized || pathname.startsWith(`${normalized}/`);
  });
}
