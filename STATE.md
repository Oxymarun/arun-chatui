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

## Todo / Improvements
- [ ] Typing indicator (bouncing dots) before each reply appears
- [ ] Mobile polish — check button/bubble sizing on 390px
- [ ] Replace emoji avatar with pixel-art style or photo
- [ ] Add subtle red glow to avatar
- [ ] "Available now" green dot in header
- [ ] Page title / meta tags for sharing
- [ ] Push to GitHub Pages

## Known Issues
- Canvas console error on first load (minor, doesn't affect UX)
