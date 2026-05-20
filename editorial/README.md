# Faktum AI — toimituksellinen pipeline

Tämä kansio ei julkaista sivustolle. Se on Cursor-orchestration -tuotantotila.

## Työjärjestys

1. Liitä raakateksti → `00_inbox/`
2. Aja analyysi → tulokset `01_extracted/`
3. Luonnos → `02_article_drafts/`
4. Visuaalit → `03_visual_plan/`
5. Hyväksytty MDX → `04_ready_to_publish/` → kopioi `src/content/<kategoria>/`
6. Arkisto → `99_archive/`

Julkaisu ja frontmatter: [docs/CONTENT.md](../docs/CONTENT.md).

## Mallit

- `templates/raw-analysis-template.md`
- `templates/article-template.mdx`
- `templates/claims-template.json`
- `templates/numbers-template.json`
- `templates/chart-plan-template.json`
- `templates/image-requests-template.md`
