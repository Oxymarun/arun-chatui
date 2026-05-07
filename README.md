# Arun ChatUI — Chat-Style Portfolio

A personal portfolio that looks and feels like a messaging app. Dark operator-channel UI, glassmorphism bubbles, contextual topic accents, and interactive features that make it quick to explore.

## What it is

No walls of text. No boring grid layout. Your visitor opens it and gets a chat interface — intro messages stagger in, then topic buttons let them dig into Work, Skills, Education, and more. Built as a single `index.html` with zero dependencies.

## Features

### Core
- Staggered intro messages on load (chat-style)
- 6 topic buttons — Work, Skills, Education, About me, Things I've Built, Let's connect
- Accordion navigation — opening one topic closes others
- Typing indicator before replies appear
- ✓✓ Seen receipts after last message in each topic

### Interactive (v2.1)
- **Persona chips** — Recruiter / Founder / Peer shortcuts auto-expand the right topic. Supports `?persona=recruiter` URL param
- **KPI toggle** — "Show impact metrics" button highlights key numbers ($2M MRR, 500K DAU, etc.) in the timeline
- **Time-travel slider** — drag to a year (2017–2026) and the matching role highlights; others dim; background hue shifts
- **Mini music player** — bottom-right soundtrack widget with local CC0 tracks and a collapsible launcher

### Design
- Gradient mesh background (static radial gradients, no canvas/CPU overhead)
- Glassmorphism bubbles (`backdrop-filter: blur(12px)`)
- Operator-channel design system documented in `DESIGN.md`
- Geist + Geist Mono via Google Fonts
- Contextual topic accents via `data-active-topic` and `--topic-*` CSS tokens

## Stack

- Vanilla JS + CSS — no framework, no build step
- Google Fonts (Geist / Geist Mono) via CDN
- Single file: `index.html`

## Run it

```bash
open index.html
```

That's it. No install, no server, no build.

## Structure

```
index.html          — Entire site (HTML + CSS + JS)
assets/             — Headshot, CV PDF, and local audio files
README.md           — This file
CLAUDE.md           — AI coding instructions
DESIGN.md           — Design system source of truth
STATE.md            — Feature log and open todos
TODOS.md            — Backlog with context
```

## Roadmap

- [ ] Thoughts section — 3-4 real opinions/takes (currently scaffolded, awaiting copy)
- [ ] Wire Founder persona chip to Thoughts once content is live
- [ ] GitHub Pages deployment

---

**Open `index.html`. That's the whole thing.**
