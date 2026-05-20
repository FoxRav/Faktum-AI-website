# Deploy — Cloudflare Pages

Julkaisu: **Cloudflare Pages** → [www.faktum-ai.com](https://www.faktum-ai.com)

| Asetus | Arvo |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22+ |

## Kävijälaskuri (Workers KV)

1. Cloudflare → **Workers KV** → luo namespace `FAKTUM_VISITS` (jos ei ole)
2. **Workers & Pages** → **faktum-ai-website** → **Settings** → **Bindings**
3. **+ Add** → **KV namespace**
   - Variable name: `FAKTUM_VISITS`
   - KV namespace: `FAKTUM_VISITS`
4. **Deployments** → **Retry deployment**

**Tärkeää:** älä lisää `wrangler.toml`-tiedostoa repoon — se lukitsee bindingit pois dashboardista.

### API

- `POST /api/visit` — kasvattaa globaalia laskuria
- `GET /api/visit` — palauttaa nykyisen luvun

Vain etusivu kutsuu API:a. Ei evästeitä, IP:itä eikä user agent -tietoja.
