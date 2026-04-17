# Arun ChatUI

Chat-style personal portfolio. Dark starfield bg, red accents, messages appear on load, topic buttons expand inline.

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
5. **Let's connect** — email, phone, LinkedIn, CV link

## JS Patterns
- Messages stagger in on load via `setTimeout` + `.show` class
- Topic buttons toggle `.open` on `.reply-block` divs; pass `event` explicitly: `openTopic('work', event)`
- Reply block messages stagger in at 150ms each via `querySelectorAll('.msg')` + `setTimeout`
- Starfield: canvas, `requestAnimationFrame`, twinkle via `Math.sin` phase drift (not `Math.random` per frame)
- Canvas resizes on `window.resize` and after topic expand — `initStars()` only on resize, not expand

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
