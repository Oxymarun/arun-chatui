# State

## Status
Ready to ship — v2.2 design-system refresh on `design-consultation`.

## Done (all-time)
- [x] Static gradient mesh background with subtle grain
- [x] Avatar headshot with accent glow
- [x] "Available now" green pulsing dot in header
- [x] 4 staggered intro messages on load
- [x] 6 topic buttons (Work, Skills, Education, About me, Things I've Built, Let's connect)
- [x] All reply blocks with content
- [x] Accordion behavior — opening one topic closes others
- [x] Typing indicator (bouncing dots) before each reply
- [x] Reply block messages stagger in (150ms each)
- [x] Mobile polish — 480px breakpoint
- [x] Page title + OG/meta tags
- [x] CV sync: $2M MRR, 5 months
- [x] Bubble font 14→15px, touch targets 41→45px, h1 semantic heading

## Done — v2 redesign (2026-04-18)
- [x] Glassmorphism: bubble blur 12px + box-shadow, frosted header
- [x] Topic btn glow on hover
- [x] `@supports` fallback for non-backdrop-filter browsers
- [x] ✓✓ Seen receipts on messages
- [x] "Arun is typing" label (persistent)
- [x] Button press scale animation
- [x] `scrollIntoView` on topic open
- [x] "Things I've Built" section (GitHub projects: Dopamine, ChatUI, CV website)
- [x] Thoughts section scaffolded (removed placeholder, awaiting real copy)
- [x] `rel=noopener` on all external links
- [x] CSS accent token (`--accent-rgb`) extracted — single source of truth

## Done — v2.1 interactive features (2026-04-19)
- [x] **Persona Fast-Tracks** — 3 chips (Recruiter/Founder/Peer) appear after intro stagger (2750ms); click auto-expands primary topic; `?persona=recruiter` URL param triggers on load at 3200ms; idempotency guard; `history.replaceState` (no history pollution)
- [x] **KPI Dashboard** — "✦ Show impact metrics" toggle in Timeline sub-view; wraps 8 key numbers in `.metric` spans; `.metrics-visible` class reveals red highlight via CSS transition; button text flips on toggle
- [x] **Time-Travel Slider** — range input (2017–2026) in Timeline; `scrubTimeline(year)` highlights matching `.mini-tl-item` via `data-start`/`data-end`; dims non-matching roles; hue-rotates all `.nebula` elements via JS (not CSS, to avoid permanent rotation at load)

## Done — v2.2 design system (2026-05-07)
- [x] `DESIGN.md` created as the design source of truth.
- [x] Geist / Geist Mono replace Inter / JetBrains Mono.
- [x] `data-active-topic` drives contextual topic accents for Work, Skills, Education, About, Built, and Contact.
- [x] Base shell, chat bubbles, reply rails, chips, metrics, links, focus states, and motion tokens now follow the operator-channel design system.

## Todo / Open
- [x] Remove orphaned `data-time` attributes
- [ ] Push to GitHub Pages (not just GitHub repo)
- [ ] Thoughts section — parked, revisit later

## Known Issues
- Slider default state shows "—" until first interaction (intentional — no forced active state)
