# State

## Status
In progress — not yet pushed to GitHub.

## Done
- [x] Starfield canvas background
- [x] Avatar + header (emoji placeholder)
- [x] 4 staggered intro messages on load
- [x] 5 topic buttons (Work, Skills, Education, About me, Let's connect)
- [x] All reply blocks with content
- [x] Toggle open/close on buttons
- [x] Canvas resize after expand
- [x] Fix implicit `event` global in `openTopic()` — now passed explicitly
- [x] Remove dead `display:flex` on `.typing` element
- [x] Star twinkle perf — replaced `Math.random()` per frame with `Math.sin` phase drift
- [x] No star reinit on topic expand — `resizeCanvas()` only, stars persist
- [x] Reply block messages stagger in (150ms each) instead of appearing instantly

## Done (this session)
- [x] Typing indicator (bouncing dots) before each reply appears
- [x] Mobile polish — 480px breakpoint, smaller buttons/bubbles
- [x] Replace emoji avatar with "AS" initials
- [x] Red glow on avatar (box-shadow)
- [x] "Available now" green pulsing dot in header
- [x] Page title + OG/meta tags for sharing
- [x] Accordion behavior — opening one topic closes others
- [x] CV sync: $2M MRR, 5 months (was $1.5M, 4 months)

## Todo / Improvements
- [ ] Push to GitHub Pages

## Known Issues
- Canvas console error on first load (minor, doesn't affect UX)
