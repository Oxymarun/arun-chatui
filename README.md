# Arun ChatUI — Chat-Style Portfolio

A personal portfolio that looks and feels like a messaging app. Dark starfield, glassmorphism bubbles, red accents, and interactive features that make it actually fun to explore.

## What it is

No walls of text. No boring grid layout. Your visitor opens it and gets a chat interface — intro messages stagger in, then topic buttons let them dig into Work, Skills, Education, and more. Built as a single `index.html` with zero dependencies.

## Features

### Core
- Staggered intro messages on load (chat-style)
- 7 topic buttons — Work, Skills, Education, About me, Things I've Built, Let's connect, Thoughts (coming soon)
- Accordion navigation — opening one topic closes others
- Typing indicator before replies appear
- ✓✓ Seen receipts after last message in each topic
- Emoji reactions with localStorage persistence
- Light/dark theme toggle with saved preference

### Interactive (v2.1)
- **Persona chips** — Recruiter / Founder / Peer shortcuts auto-expand the right topic. Supports `?persona=recruiter` URL param
- **KPI toggle** — "Show impact metrics" button highlights key numbers ($2M MRR, 500K DAU, etc.) in the timeline
- **Time-travel slider** — drag to a year (2017–2026) and the matching role highlights; others dim; background hue shifts

### Design
- Canvas starfield background (twinkle via `Math.sin` phase drift, not `Math.random`)
- Glassmorphism bubbles (`backdrop-filter: blur(12px)`)
- Nebula blob decorations (fixed radial gradients)
- CSS accent token system (`--accent-rgb: 192, 57, 43`) — single source of truth for the red
- Full `[data-theme]` light/dark token system

## Stack

- Vanilla JS + CSS — no framework, no build step
- Google Fonts (Inter) via CDN
- Single file: `index.html`

## Run it

```bash
open index.html
```

That's it. No install, no server, no build.

## Structure

```
index.html    — Entire site (HTML + CSS + JS)
README.md     — This file
CLAUDE.md     — AI coding instructions
STATE.md      — Feature log and open todos
TODOS.md      — Backlog with context
```

## Roadmap

- [ ] Thoughts section — 3-4 real opinions/takes (currently scaffolded, awaiting copy)
- [ ] Wire Founder persona chip to Thoughts once content is live
- [ ] GitHub Pages deployment
- [ ] Clean up orphaned `data-time` attributes (~30 bubbles)

---

**Open `index.html`. That's the whole thing.**
