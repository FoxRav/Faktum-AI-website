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

### Kävijälaskuri (KV)

1. Cloudflare → **Workers KV** → luo namespace `FAKTUM_VISITS` (jos ei ole)
2. **Workers & Pages** → **faktum-ai-website** → **Settings** → **Bindings**
3. **+ Add** → **KV namespace**
   - Variable name: `FAKTUM_VISITS`
   - KV namespace: `FAKTUM_VISITS`
4. **Deployments** → **Retry deployment**

Huom: älä lisää `wrangler.toml`-tiedostoa repoon — se lukitsee bindingit pois dashboardista.

Endpointit:

- `POST /api/visit` — kasvattaa globaalia laskuria
- `GET /api/visit` — palauttaa nykyisen luvun

Ei evästeitä, IP:itä eikä user agent -tietoja. Vain etusivu kutsuu API:a.

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
