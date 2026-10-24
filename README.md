# Sacred Wits

Islamic content site (lives of the Companions, tafseer, research, Q&A, news) built with [Astro](https://astro.build), in five languages: English (`en`), Arabic (`ar`), Urdu (`ur`), Roman Urdu (`ur-latn`) and Hindi (`hi`).

Live: https://sacredwits.github.io/sacred-data/

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321/sacred-data/
npm run build    # static site in dist/
npm run check    # type and content checks
```

## Menu structure

| Menu item | What it lists |
|---|---|
| Seerah & Lives ▾ (Prophets, Companions, Women of Islam) | Standalone pieces and series in that section/category |
| Quran & Tafseer ▾ (Tafseer, Quranic Reflections) | Same |
| **Articles** | Every **standalone** piece, from all sections |
| **Series** | Every multi-part **series** |
| Research · Q&A · News & Updates | Pieces in that section |

Sections and categories live in `src/config/taxonomy.ts`, with labels in all five languages. A category added there appears in the menu automatically.

## Adding content

### A standalone article

One folder per article, one file per language:

```
src/content/posts/<slug>/en.md
src/content/posts/<slug>/ar.md
src/content/posts/<slug>/ur.md
src/content/posts/<slug>/ur-latn.md
src/content/posts/<slug>/hi.md
```

A missing language is simply not listed in that language.

```yaml
---
title: "..."
description: "One or two sentences for cards and search engines."
date: 2026-10-24
section: seerah            # seerah | quran | research | qna | news
category: women-of-islam   # optional, must exist in taxonomy.ts for that section
format: standalone
cover: ../../../assets/covers/my-cover.png   # optional, 1280x720
coverAlt: "..."
source:                    # optional attribution
  author: "..."
  title: "..."
  url: https://...
tags: [..]
draft: false
---
```

URL: `/<lang>/articles/<slug>/`

### A series

1. Describe the series once in `src/content/series/<series-slug>.yaml`:

   ```yaml
   title:
     en: Life of Abu Bakr
     ur: سیرتِ ابو بکر صدیقؓ
   description:
     en: The first Caliph, from Makkah to Madinah.
     ur: ...
   section: seerah
   category: companions
   order: 1
   ```

2. Add each part as a post with `format: series`, the `series` slug and its `part` number:

   ```yaml
   format: series
   series: life-of-abu-bakr
   part: 1
   ```

URLs: `/<lang>/series/<series-slug>/` and `/<lang>/series/<series-slug>/<part-slug>/`

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
