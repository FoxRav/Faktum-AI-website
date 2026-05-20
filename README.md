# Faktum AI — www.faktum-ai.com

Suomenkielinen AI-uutis- ja analyysisivusto. Astro + TypeScript + Tailwind + MDX.

## Kehitys

```bash
npm install
npm run dev
```

Avaa http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Cloudflare Pages

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 22+
- **Custom domain:** www.faktum-ai.com

## Sisältörakenne

| Kansio | Sivu |
| --- | --- |
| `src/content/news` | `/uutiset/` |
| `src/content/analysis` | `/analyysit/` |
| `src/content/interviews` | `/haastattelut/` |
| `src/content/tools` | `/tyokalut/` |

Etusivun feed näyttää kaikki `status: published` -artikkelit uusimmasta vanhimpaan. Kategoriasivut suodattavat saman listan.

## Editorial pipeline

Katso `editorial/README.md`.
