# Changelog

## [0.0.4.1] - 2026-05-08

### Changed
- Propeller plane in the light-mode sky now uses a clean Cessna-like side profile: cream fuselage, blue and red accent stripes, high wing with strut, vertical tail fin, horizontal stabilizer, and cabin windows. Crash fragments updated to match.

## [0.0.4.0] - 2026-05-08

### Added
- Small bottom-right music player with local CC0 tracks, custom play/previous/next controls, and a collapsible music-note launcher.
- Local audio track support under `assets/audio/` with documented CC0 source credits.

### Changed
- Kept the soundtrack experience out of the main chat flow so the portfolio remains focused on the conversation.

## [0.0.3.0] - 2026-05-07

### Added
- Aurora drift: 3 large blurred blobs (topic-rgb colored) drift in slow 38–53s orbital paths across the background. Color updates automatically with each topic switch via CSS vars.
- Constellation: ~88 faint stars on a fixed canvas with gentle drift and subtle twinkle. Star color tracks active topic accent with a 60ms CSS var read after each topic open.
- Reduced motion support: aurora animations stop, stars freeze to static on `prefers-reduced-motion`.
- Light mode treatment: aurora at 0.10 opacity, stars at 0.35 with sepia+brightness filter for warm paper feel.

### Changed
- `z-index` hierarchy updated: aurora/canvas at z=1, chat-wrap at z=2, depth counter at z=20.
- Aurora opacity increased to 0.22 for dark mode visibility on near-black background.

## [0.0.2.0] - 2026-05-07

### Added
- Numeric mono prefixes (`01`–`06`) on topic buttons replace decorative emoji for an executive table-of-contents feel.
- `§` glyph prefix on all six section labels inside reply blocks.
- `.bubble.proof` modifier class — reserved rare glow for headline metric bubbles (intro bubble only).
- Depth counter: fixed top-right pill showing `00 / 06 explored`, updates as topics open.
- Sign-off bubble: `— Arun · sent from Bombay · 2026` fades in after all six topics are opened.
- `.company-name` and `.btn-glyph` utility classes for typography hierarchy.

### Changed
- Light theme retoned to warm paper dossier: `#f4ece0` background, `#fbf6ec` surface, `#e8dcc6` hairline borders, no shadow.
- `.bubble.highlight` glow stripped — keeps tint and border only; glow is now the rare `.proof` reward.
- Online dot pulse slowed from 2.5s to 4s, amplitude softened.
- Avatar glow fires once on load (was infinite repeat).
- Theme toggle button changed from `🌙` emoji to mono `DARK` / `LIGHT` text label.
- Focus ring inside chat column: hairline `1px solid` accent at 4px offset instead of 2px OS-default outline.
- `tl-impact-metric` sizing and tabular-nums applied across timeline and metric spans.
- Edu degree row uses `all-small-caps` with wider tracking.
- Intro headline bubble promoted from `.highlight` to `.highlight.proof`; company names wrapped in `.company-name`.

### Fixed
- Removed `box-shadow` glow from `.bubble.highlight` in light mode; replaced with left-rule annotation treatment consistent with paper dossier aesthetic.

## [0.0.1.0] - 2026-05-07

### Added
- Added `DESIGN.md` as the source of truth for the chat UI's operator-channel design system.
- Added release metadata with `VERSION` and `CHANGELOG.md`.

### Changed
- Updated the chat UI to use Geist / Geist Mono typography and topic-aware accent tokens.
- Added contextual color switching for Work, Skills, Education, About, Built, and Contact while preserving the chat interface.
- Synced project docs and TODO tracking with the implemented design-system refresh.
