# Arun ChatUI

Chat-style personal portfolio. Dark operator-channel UI, contextual topic accents, glassmorphism bubbles, messages appear on load, topic buttons expand inline. v2 shipped 2026-04-18. v2.1 shipped 2026-04-19 (persona chips, KPI toggle, time-travel slider). v2.2 applies the `DESIGN.md` system.

## Stack
- Single `index.html` — no build step, no framework
- Vanilla JS + CSS
- Google Fonts (Geist / Geist Mono) via CDN
- Static radial-gradient background with subtle grain

## Design
| Token | Value |
|---|---|
| Source of truth | `DESIGN.md` |
| Background | `#090806` dark shell, `#faf7f0` light shell |
| Accent | Contextual `--topic-*` tokens driven by `data-active-topic` |
| Bubble bg | `rgba(18,16,12,0.88)` dark, `rgba(255,255,255,0.92)` light |
| Text | `#f7f1e8` dark primary, `#17130d` light primary |
| Font | Geist / Geist Mono |

## Structure
```
index.html   # Entire site
CLAUDE.md    # This file
DESIGN.md    # Design system source of truth
STATE.md     # Current state & todos
```

## Sections (topic buttons)
1. **Work** — mini timeline, 6 roles chronological
2. **Skills** — chip tags
3. **Education** — IIM Calcutta + NITK
4. **About me** — personal facts, availability
5. **Things I've Built** — GitHub projects (Dopamine, ChatUI, CV website)
6. **Let's connect** — email, phone, LinkedIn, CV link

## Design System
Always read `DESIGN.md` before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that does not match `DESIGN.md`.

## JS Patterns
- Messages stagger in on load via GSAP
- Topic buttons toggle `.open` on `.reply-block` divs; accordion closes others; `scrollIntoView({block:'start'})`
- `openTopic(topic, event)` updates `document.documentElement.dataset.activeTopic` for contextual color accents
- Reply block messages stagger in via `querySelectorAll('.msg')` + GSAP
- ✓✓ Seen receipts: `.seen` class added after last message stagger completes
- Persona chips: `.persona-bar` shows at 2750ms; `selectPersona(name)` calls `openTopic()` with synthetic event `{currentTarget: btn}`; idempotency guard; `history.replaceState` sets `?persona=`; URL param auto-fires at 3200ms on load
- KPI toggle: `toggleMetrics()` toggles `.metrics-visible` on `#tl-metrics-container`; `.metric` spans highlight via topic accent CSS; button text flips
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
