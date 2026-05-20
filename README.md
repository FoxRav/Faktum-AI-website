# Faktum AI

Suomenkielinen tekoälyuutis- ja analyysisivusto: [www.faktum-ai.com](https://www.faktum-ai.com)

Stack: Astro, TypeScript, Tailwind CSS, MDX.

## Kehitys

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Sisältö

Julkaistavat artikkelit: `src/content/{news,analysis,interviews,tools}/`.

Vain `status: published` näkyy sivustolla. Uusin julkaisu on aina ylimpänä (järjestys: `updated`, tai `date`).

## Dokumentaatio

- [docs/CONTENT.md](docs/CONTENT.md) — artikkelit, frontmatter, kuvat
- [editorial/README.md](editorial/README.md) — toimituksellinen pipeline (sisäinen)

Ylläpito ja deploy: [docs/DEPLOY.md](docs/DEPLOY.md) (sisäinen).
