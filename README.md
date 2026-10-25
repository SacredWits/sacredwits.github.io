# Sacred Wits

Islamic content site (lives of the Companions, tafseer, research, Q&A, news) built with [Astro](https://astro.build), in five languages: English (`en`), Arabic (`ar`), Urdu (`ur`), Roman Urdu (`ur-latn`) and Hindi (`hi`).

Live: https://sacredwits.github.io/

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # static site in dist/
npm run check    # type and content checks
```

## How the site is organised

```
Home
├─ Seerah & Lives ▾      Prophets · Companions · Women of Islam
├─ Quran ▾               Tafseer · Reflections
├─ Beliefs & Practice ▾  Beliefs (Aqeedah) · Worship · Shariah & Rights
├─ Books ▾               All books · Deeniyat · …
├─ Research
├─ Q&A
└─ News & Updates
```

There are two kinds of content:

| Kind | What it is | URL |
|---|---|---|
| **Article** | A single, complete piece that belongs to one topic (and one category if the topic has them) | `/<lang>/<topic>/<category>/<slug>/` |
| **Book** | A book studied chapter by chapter: a book page with the full contents, and one page per chapter | `/<lang>/books/<book>/` and `/<lang>/books/<book>/<chapter>/` |

Every card is labelled **Article** or **Book**, and every page has a breadcrumb (e.g. *Home › Books › Deeniyat › Chapter 3*). Books are also listed on their topic page (Deeniyat appears under *Beliefs & Practice › Beliefs*).

Topics and categories are defined in `src/config/taxonomy.ts` with labels in all five languages; a category added there appears in the menu automatically.

## Adding content

### An article

One folder per article, one file per language (a missing language is simply not listed in that language):

```
src/content/posts/<slug>/en.md   ar.md   ur.md   ur-latn.md   hi.md
```

```yaml
---
title: "..."
description: "One or two sentences for cards and search engines."
date: 2026-10-24
topic: seerah              # seerah | quran | beliefs | research | qna | news
category: women-of-islam   # required when the topic has categories
cover: ../../../assets/covers/my-cover.png   # optional, 1280x720
coverAlt: "..."
source: { author: "...", title: "...", url: https://... }   # optional
tags: [..]
---
```

### A book

1. Describe the book and its full contents once in `src/content/books/<book>.yaml` (see `deeniyat.yaml`): title, author and description in all five languages, topic/category, editions, preface, and chapters with their sections and page numbers.
2. Add notes for a chapter as a post with `book` and `chapter` (use `0` for the preface):

   ```
   src/content/posts/deeniyat-03-prophethood/en.md
   ```

   ```yaml
   ---
   title: "Prophethood"
   description: "..."
   date: 2026-10-25
   book: deeniyat
   chapter: 3
   ---
   ```

   Chapters without notes still have a page showing their sections, marked "Notes for this chapter are being prepared".

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
