# FaktumAI

FaktumAI is a bilingual website for software products, automation, AI-assisted software development, and editorial content including news, analysis, interviews, and tool reviews: [www.faktum-ai.com](https://www.faktum-ai.com)

## Stack

- [Astro](https://astro.build/) 6 (static site)
- TypeScript, Tailwind CSS 4
- MDX content (`src/content/`, `src/content/en/`)
- Cloudflare Pages hosting

## Build

```bash
npm install
npm run build
```

Output: `dist/`

## Content structure

- Finnish (default): `src/content/*`
- English: `src/content/en/*` (`/en/` routes)

## Repository scope

Published site code: `src/`, `public/`, `functions/`.
