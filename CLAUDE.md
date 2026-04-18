# Arun ChatUI

Chat-style personal portfolio. Dark starfield bg, red accents, glassmorphism bubbles, messages appear on load, topic buttons expand inline. v2 shipped 2026-04-18. v2.1 shipped 2026-04-19 (persona chips, KPI toggle, time-travel slider).

## Stack
- Single `index.html` — no build step, no framework
- Vanilla JS + CSS
- Google Fonts (Inter) via CDN
- Canvas starfield (inline JS)

## Design
| Token | Value |
|---|---|
| Background | `#0d1117` |
| Accent | `#c0392b` (default), `#e74c3c` (hover/highlight) |
| Bubble bg | `rgba(255,255,255,0.06)` |
| Highlight bubble | `rgba(192,57,43,0.12)` |
| Text | `#e8eaf0` (primary), `#c8ccd4` (secondary) |
| Font | Inter |

## Structure
```
index.html   # Entire site
CLAUDE.md    # This file
STATE.md     # Current state & todos
```

## Sections (topic buttons)
1. **Work** — mini timeline, 6 roles chronological
2. **Skills** — chip tags
3. **Education** — IIM Calcutta + NITK
4. **About me** — personal facts, availability
5. **Things I've Built** — GitHub projects (Dopamine, ChatUI, CV website)
6. **Let's connect** — email, phone, LinkedIn, CV link
7. **Thoughts** — scaffolded, awaiting real copy (3-4 sharp opinions)

## Design (v2 tokens)
| Token | Value |
|---|---|
| Accent RGB var | `--accent-rgb: 192, 57, 43` — single source, use `rgba(var(--accent-rgb), α)` |
| Bubble bg | `rgba(255,255,255,0.06)` + `backdrop-filter: blur(12px)` |
| Bubble shadow | `0 2px 12px rgba(0,0,0,0.3)` |
| Header | frosted glass (`backdrop-filter: blur(16px)`) |
| Nebula blobs | decorative `position:fixed` radial gradients, pointer-events none |

## JS Patterns
- Messages stagger in on load via `setTimeout` + `.show` class
- Topics array data-driven — topic config in JS object, not hardcoded per button
- Topic buttons toggle `.open` on `.reply-block` divs; accordion closes others; `scrollIntoView({block:'start'})`
- Reply block messages stagger in at 150ms each via `querySelectorAll('.msg')` + `setTimeout`
- Starfield: canvas, `requestAnimationFrame`, twinkle via `Math.sin` phase drift; paused on `visibilitychange`; null-guarded
- Canvas resizes on `window.resize` — `initStars()` only on resize, not expand
- Emoji reactions: click to toggle, persist to `localStorage`, key = `reaction-{topic}-{emoji}`
- ✓✓ Seen receipts: `.seen` class added after last message stagger completes
- Persona chips: `.persona-bar` shows at 2750ms; `selectPersona(name)` calls `openTopic()` with synthetic event `{currentTarget: btn}`; idempotency guard; `history.replaceState` sets `?persona=`; URL param auto-fires at 3200ms on load
- KPI toggle: `toggleMetrics()` toggles `.metrics-visible` on `#tl-metrics-container`; `.metric` spans highlight red via CSS; button text flips
- Time-travel slider: `scrubTimeline(year)` matches `.mini-tl-item[data-start][data-end]`; adds `.tl-active`/`.tl-dim`; hue-rotates `.nebula` via JS `style.filter` (not CSS var — avoids permanent rotation at load)

## Running
Open `index.html` in browser. No server needed.

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health
