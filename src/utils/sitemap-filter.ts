/** Exact paths excluded from @astrojs/sitemap (index pages, thin pages). */
const EXCLUDED_EXACT_PATHS = [
  '/haastattelut',
  '/en/interviews',
  '/mediakortti',
  '/en/media-kit',
  '/mainosta',
  '/en/advertise',
] as const;

export function shouldIncludeInSitemap(pageUrl: string): boolean {
  const pathname = new URL(pageUrl).pathname.replace(/\/$/, '') || '/';
  if (EXCLUDED_EXACT_PATHS.includes(pathname as (typeof EXCLUDED_EXACT_PATHS)[number])) {
    return false;
  }

  return true;
}
