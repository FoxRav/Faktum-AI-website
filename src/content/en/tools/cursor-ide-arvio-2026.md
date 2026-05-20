---
title: "Cursor and a solo builder: how Faktum AI was built with agents"
description: "Case study: bilingual AI publishing at www.faktum-ai.com — Astro, Cloudflare, and Cursor agents. One person directs; the work moves."
date: 2026-05-12T16:00:00
updated: 2026-05-20T22:08:24
author: "Faktum AI"
category: "Tools"
tags:
  - Cursor
  - IDE
  - AI development
  - Astro
  - solo developer
status: published
readingTime: "9 min"
heroImage: "/images/articles/2026/05/2026-05-20-220824_cursor-ide-arvio-2026/hero5.webp"
heroAlt: "Solo developer orchestrating a publishing site with an AI-assisted editor"
heroCaption: "Illustration · Faktum AI"
needsFactCheck: false
imageRequestsCompleted: true
featured: false
sources:
  - title: "Cursor documentation"
    url: "https://docs.cursor.com/"
    publisher: "Cursor"
  - title: "Astro documentation"
    url: "https://docs.astro.build/"
    publisher: "Astro"
  - title: "Cloudflare Pages"
    url: "https://developers.cloudflare.com/pages/"
    publisher: "Cloudflare"
keyClaims:
  - "Faktum AI is a bilingual publishing site run by one builder steering Cursor agents — no separate backend or editorial engineering team."
  - "Stack: Astro 6, TypeScript, Tailwind 4, MDX, Cloudflare Pages + KV visit counter, GitHub deploy."
  - "Cursor works best as orchestrator when the repo has a clear handbook, a publishing path from raw material to production, and the same repeatable commands every session."
  - "The tool fits small operators who master basics: repo hygiene, successful builds, and content approval."
  - "Agents accelerate routine work; humans keep authority over publishing, fact-checking, and production."
---

## What Cursor is — and what this article proves

**Cursor** is an AI-assisted code editor (VS Code–based) where chat, Composer, and agents see full project context. It is not magic — it is an **orchestrator** when a human knows where the project should go.

This is not a generic feature list. It is a **case study** of the project you are reading: **[Faktum AI](https://www.faktum-ai.com)** — a bilingual AI news and analysis site built and maintained by one person with Cursor. The site is small in scale but honest: articles, images, two languages, SEO, RSS, and production deploy. That is enough to show how productive the workflow can be once you internalise the tool’s role.

> **Faktum AI editorial note:** Based on our own usage. We do not officially represent Cursor — but this project is concrete evidence of why the tool deserves serious attention from small operators too.

## What is Faktum AI?

In short: a **Finnish-first AI publishing site** with English at `/en/`. Content spans four types:

| Type | Finnish | English |
| --- | --- | --- |
| News | `/uutiset/` | `/en/news/` |
| Analysis | `/analyysit/` | `/en/analysis/` | 
| Interviews | `/haastattelut/` | `/en/interviews/` |
| Tools | `/tyokalut/` | `/en/tools/` |

Articles live as Markdown/MDX in the repo. The site builds to static HTML — fast, cheap to host, simple to deploy. The audience is IT and AI professionals who want readable analysis without hype.

This is not a 15-engineer startup. It is **publishing one person can run** when the tool handles repetitive heavy lifting.

## How the site is built

The stack is modern but not exotic — on purpose:

| Layer | Choice | Why |
| --- | --- | --- |
| **Framework** | Astro 6 + TypeScript | Fast static site, MDX articles, minimal JS for readers |
| **Styles** | Tailwind CSS 4 | Consistent look without a heavy component library |
| **Content** | Content Collections + Zod | Frontmatter validated at build time |
| **Hosting** | Cloudflare Pages | `git push` → automatic build → www.faktum-ai.com |
| **Counter** | Cloudflare Workers KV | Simple `/api/visit` — no cookies, no analytics scripts |
| **Source** | GitHub (`FoxRav/Faktum-AI-website`) | Single branch (`main`), clear history |
| **Node** | ≥ 22.12 | Astro 6 requirement |

Visitors do not see the publishing infrastructure, but it is there:

- **hreflang** and language switcher (FI | ENG)
- **sitemap**, **RSS**, **JSON-LD** (NewsArticle, BreadcrumbList)
- **Open Graph** images from articles
- **`npm run prepare-hero`** — timestamped hero paths
- **`editorial/` folder** — inbox, analysis, drafts, image requests (not deployed as site content)
- **internal handbook** — the Cursor agent’s rulebook from raw material to publish

All of this was built **step by step** with Cursor — not bought as a turnkey template.

## Cursor as orchestrator — how work actually moves

You could build the same project without Cursor — slower and lonelier. Faktum AI’s core value from the tool is not “write a line for me” but **managing whole context**:

1. **Agent reads the repo** — `src/`, `content.config.ts`, layouts, i18n paths.
2. **Agent reads the handbook** — publishing rules, frontmatter, bilingual workflow, commit discipline.
3. **User supplies raw material** — transcript, PDF, or topic.
4. **Agent runs the pipeline** — extracted notes → article → image request → MDX → `npm run build`.
5. **Human reviews** — language, facts, tone, illustration image, push to production.

A typical article session (like our [EU AI Act news piece](/en/news/eu-ai-act-suomi-tulkinta/)) covers source review, bilingual copy, editorial files, illustration image path, build verification, and commit — about **one hour from the agent**; most time still goes to **reviewing the text**. **One director.**

That is different from “ask ChatGPT for a draft”. Cursor **edits files in the repo**, runs commands, and remembers project structure.

### What one person does vs. what the agent does

| Human | Cursor agent |
| --- | --- |
| Chooses topic and tone | Reads source material and handbook |
| Approves publish | Writes and updates MDX/MD |
| Fixes language nuance | Suggests structure, tags, SEO fields |
| Picks illustration image (GPT + export) | Creates image brief and illustration path |
| Pushes the finished site to production (`git push`) | Runs build, prepares commit on request |

This split matters: **Cursor does not replace editorial judgment**. It replaces reinventing every Astro route and frontmatter field alone.

## Why this works for a small operator

Three reasons Faktum AI is a good example — and why Cursor earns praise:

### 1. The bar is low if you know the basics

You do not need a machine-learning PhD. You need:

- understanding what the repo contains (`git status`, branches)
- ability to run `npm install`, `npm run dev`, `npm run build`
- willingness to review the agent's output before commit
- a clear source of truth (for us: internal handbook)

With that in place, **almost any motivated builder** can orchestrate a similar publishing pipeline. Cursor dramatically lowers friction for “the first real article”.

### 2. The scale is right for learning

Faktum AI is not a giant platform. It is a **small publishing site** that still runs for real on the web — its own address, two languages, and real articles. You learn:

- content modelling (collections)
- i18n routing
- deploy-style CI/CD (Cloudflare)
- agent discipline (handbook, checklist)

Small project, **real production requirements** — exactly where Cursor fits best.

### 3. Speed becomes motivation

Before agent tools, building a comparable publishing service from an empty desk — own domain, two languages, production deploy — would be a **weeks-long project**. **The Faktum AI skeleton was built in a day.** A single article with the agent takes **about an hour**; most time is still text review. Once the foundation exists, publishing cadence is competitive advantage for small media.

## Limitations — honestly

Cursor does not remove responsibility:

- **Cloud model** — code and context handled under Cursor’s policy; read terms for enterprise use.
- **Fact-checking** — agents hallucinate; `needsFactCheck` and sources are mandatory for analysis.
- **Language** — Finnish nuance still needs a human eye. Day-to-day work runs on Composer 2.5, not top-tier models, so the agent still needed help getting the language right — the EU AI Act article edits are a good example.
- **Not a replacement architect** — large product design still needs experience; Cursor accelerates execution.

A good tool surfaces limits faster — and leaves time to fix them.

## Conclusion: why Cursor deserves a seat at the table

Faktum AI is evidence, not a promise: **one person can run bilingual AI publishing** on a modern stack when Cursor handles context, repetition, and the build path.

We are not claiming every project is this straightforward. We are claiming **the bar drops for small operators** — and the tool is mature enough for production when you steer it yourself, not when you expect it to know everything for you.

If you build content, tools, or niche media alone or in a tiny team, Cursor is currently an **underrated edge**. Faktum AI is built on it — and you can see the result at the URL you are on.

*We hope to explore a more formal Cursor partnership in the future. This article explains why that would be a natural next step — not an ad, but documented experience.*
