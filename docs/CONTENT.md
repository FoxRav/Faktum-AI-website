# Sisältö ja julkaisu

## Kansiorakenne

| Kansio | URL |
| --- | --- |
| `src/content/news` | `/uutiset/` |
| `src/content/analysis` | `/analyysit/` |
| `src/content/interviews` | `/haastattelut/` |
| `src/content/tools` | `/tyokalut/` |

## Julkaisu

1. Lisää tai päivitä MDX/MD-tiedosto oikeaan `src/content/<kategoria>/`-kansioon.
2. Aseta frontmatterissa:
   - `status: published` (luonnos: `draft` — ei näy feedissä)
   - `date` ja `updated` julkaisupäivään
3. Pääkuva: `public/images/articles/<vuosi>/<kk>/<slug>/hero.webp` (16:9, webp)
4. `heroImage` frontmatterissa: `/images/articles/.../hero.webp`

## Järjestys

Etusivun päänosto ja kaikki listaukset: **uusin ensin**.

Järjestys: `updated` (tai `date` jos `updated` puuttuu). Saman päivän artikkelit tasatilanteessa slug-järjestyksellä.

`featured` ei enää määrää sijaintia — päänosto on aina uusin julkaisu.

## Toimituksellinen pipeline

Raakateksti → analyysi → luonnos → kuvat → MDX. Yksityiskohdat: [editorial/README.md](../editorial/README.md).

Mallit: `editorial/templates/` (`article-template.mdx`, `image-requests-template.md`, jne.).
