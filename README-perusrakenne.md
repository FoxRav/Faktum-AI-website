# FaktumAI — perusrakenne (yksinkertainen)

## Mikä tämä on

FaktumAI on kaksikielinen (FI/EN) AI-uutis- ja analyysisivusto.

## Tekninen perusta

- Framework: Astro 6 (staattinen sivusto)
- Kieli/tyylit: TypeScript + Tailwind 4 + MDX
- Hosting: Cloudflare Pages

## Sisältörakenne

- `src/content/` = suomenkieliset artikkelit
- `src/content/en/` = englanninkieliset artikkelit
- `src/pages/` = sivureitit
- `public/` = kuvat ja muut staattiset tiedostot

## Dynaamiset toiminnot

- `functions/api/` = serverless API-endpointit (tilaus, vahvistus, peruutus, asetukset)
- D1 = tilaajarekisterin tietokanta
- KV = kävijälaskuri

## Julkaisupolku

1. Sisältö lisätään MDX-tiedostoina.
2. `npm run build` luo `dist/`-kansion.
3. Push `main`-haaraan.
4. Cloudflare Pages deployaa tuotantoon (`www.faktum-ai.com`).

## SEO-perusta

- `404.html` olemattomille sivuille
- `sitemap-index.xml` ja sitemapit
- `robots.txt`
- canonical + hreflang + metadata + JSON-LD
