# Kuvapyyntö — "Rakenteellinen poikkeama" -analyysi

**Artikkeli:** `src/content/analysis/ai-kupla-rakenteellinen-poikkeama.mdx`
**Julkaisupolku frontmatterissa:** `/images/articles/2026/05/ai-kupla-rakenteellinen-poikkeama/hero.webp`

## Tallennuspolku (lopullinen)

```
f:\-DEV-\86.Faktum-AI.com\faktum-ai-site\public\images\articles\2026\05\ai-kupla-rakenteellinen-poikkeama\hero.webp
```

Kansio pitää luoda ensin:

```
f:\-DEV-\86.Faktum-AI.com\faktum-ai-site\public\images\articles\2026\05\ai-kupla-rakenteellinen-poikkeama\
```

Tallenna myös alkuperäinen PNG samaan kansioon nimellä `hero.png` (vertailupiste edelliseen artikkeliin `ed-zitron-ai-kupla/`, jossa molemmat formaatit on rinnakkain).

## Tekniset vaatimukset

| Parametri | Arvo |
| --- | --- |
| Kuvasuhde | 16:9 |
| Minimiresoluutio | 1600 × 900 px |
| Suositus | 1920 × 1080 px tai 2560 × 1440 px |
| Tiedostomuoto | `.png` (lähde), `.webp` (julkaistava versio) |
| Tiedostokoko julkaistava | < 400 KB (webp) |
| Tekstiä kuvassa | EI lainkaan |
| Logoja, brändejä | EI (NVIDIA, AWS, OpenAI jne. pois) |

WebP-pakkaus esim. `cwebp -q 82 hero.png -o hero.webp` tai sama mitä käytettiin `ed-zitron-ai-kupla/hero.webp`-tiedostossa (n. 290 kt).

## Visuaalinen suunta

Tyyli noudattaa sivuston aiempaa linjaa (vrt. `landing-hero.webp` ja `ed-zitron-ai-kupla/hero.webp`): **insinöörimäinen, uskottava, datajournalistinen**. Ei "AI-aivoja", ei sinistä loistetta, ei holografisia neuroverkkoja. Lähempänä Bloombergin, Reutersin tai Financial Timesin pääartikkelikuvitusta.

**Tunnelma:** teollinen iltahämärä, hiljainen rakennustyömaa, mittakaavan kontrasti.

**Värimaailma:** muted teollisuusharmaat ja betoninbeiget, taivaalla viileän sinisen ja oranssin sekoitus (golden hour / blue hour -siirtymä). Yksi hillitty syaaninhohto (matchaa sivuston `cyan-400`-aksenttiväriä) esim. yksittäisessä datakeskuksen sisävalossa. Ei räikeitä neonsävyjä.

## Sisältö — mitä kuvassa näkyy

**Pääaihe:** ilmakuva tai matala kalteva drone-näkökulma laajaan hyperscale-datakeskuskampukseen, jossa rakentaminen on **selvästi puolitiehen jäänyt**.

Etualalla (alaoikealla tai keskellä) **kaksi tai kolme valmista, operoivaa rakennusta** — pitkiä matalia rakennuksia, joiden katolla kookkaita jäähdytysyksiköitä, sivuilla generaattorivarjoja. Yhdestä rakennuksesta hohtaa hillitty syaani sisävalo ikkunoista.

Taustalla ja sivuilla **kymmenkunta puolivalmista tai vasta perustusvaiheessa olevaa rakennusta**: betonilaatat valettu, teräsrunkoja pystyssä, nostokurkia, kasoja rakennusmateriaalia, presujen alla makaavia GPU-rack-kontteja. Vähintään kaksi kurkia jähmettyneen näköisinä (ei toimintaa työmaalla — vihjaa hiljentyneeseen tahtiin).

**Taivas:** iltahämärä, pilvi-/sumukerros joka korostaa mittakaavaa. Voimajohtoja kulkee horisontissa.

**Mittakaavan vihje:** yksi pienenpieni työmaa-auto tai pari kaukana näkyvää työntekijän hahmoa, jotka osoittavat kuinka valtava kampus on.

Ei tekstiä, ei numeroita, ei logoja, ei lentolentokoneita, ei brändättyjä elementtejä.

## GPT-prompt (englanniksi — GPT-image-1 / DALL·E 3 / Sora Image)

```
Editorial documentary-style aerial photograph of a vast hyperscale data
center campus at industrial blue hour. Two or three long, low-profile data
center buildings in the foreground are clearly operational — large rooftop
cooling units, generator yards along the side, a faint cyan glow leaking
from one row of internal lighting. Stretching beyond them, a much larger
field of half-built and unbuilt structures: poured concrete foundations,
exposed steel skeletons, idle tower cranes silhouetted against the sky,
stacks of construction materials, server rack containers under tarpaulins.
No visible workers, no activity — the construction has clearly paused.
Distant high-voltage transmission lines on the horizon. Muted industrial
palette of concrete grey, beige, deep slate blue sky with a band of muted
orange at the horizon. Cinematic depth of field, sharp foreground, slight
atmospheric haze in the distance. Photorealistic, 16:9 widescreen
composition, Bloomberg / Reuters / Financial Times editorial photography
aesthetic. No text, no logos, no brand markings, no AI imagery clichés
(no glowing brains, no holographic neural networks, no abstract data
streams). Aspect ratio 16:9, ultra-high detail, 1920x1080 minimum.
```

**Vaihtoehtoinen lyhyt prompt** (jos GPT:n kuva liian täynnä):

```
Aerial editorial photograph of a partially built hyperscale data center
campus at dusk. Two finished buildings glowing faint cyan in the
foreground, surrounded by a wider expanse of unfinished concrete
foundations, exposed steel frames and idle cranes. Industrial blue
hour palette, no people, no text, no logos. Photorealistic, 16:9.
```

## Alt-teksti (frontmatterissa jo)

```
Puolivalmiit datakeskukset, GPU-rivistöt ja rahoitusvirrat — kuvitus
tekoälyteollisuuden rakenteelliseen analyysiin
```

Jos kuva valitaan, jossa rahoitusvirrat eivät visualisoidu, alt-teksti kannattaa lyhentää:

```
Puolivalmis hyperscale-datakeskuskampus iltahämärässä — kuvitus
tekoälyteollisuuden rakenteelliseen analyysiin
```

## Hyväksymiskriteerit (checklist ennen julkaisua)

- [ ] Kuvasuhde 16:9, vähintään 1600 × 900 px
- [ ] Ei tekstiä, logoja tai brändielementtejä
- [ ] Ei AI-kliseitä (aivot, neuroverkot, holografiat)
- [ ] Selvä kontrasti: osa rakennuksista valmiita, osa kesken
- [ ] Tunnelma: hiljentynyt, ei hektinen
- [ ] Webp-versio < 400 KB
- [ ] Tallennettu polkuun `public/images/articles/2026/05/ai-kupla-rakenteellinen-poikkeama/hero.webp`
- [ ] Frontmatter `imageRequestsCompleted: true` artikkelissa, kun valmis

## Sisäiset kuvat artikkeliin

Tässä artikkelissa **ei tarvita** sisäisiä kuvituskuvia. Visualisointi tapahtuu olemassa olevilla komponenteilla:

- `SimpleBarChart` × 4
- `MetricCards` × 1

Lisäkuvia voi harkita myöhemmin, jos artikkeli laajenee tai siitä tehdään seurantakappale.
