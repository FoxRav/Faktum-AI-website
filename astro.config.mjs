// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { shouldIncludeInSitemap } from './src/utils/sitemap-filter.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.faktum-ai.com',
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => shouldIncludeInSitemap(page),
    }),
  ],
});
