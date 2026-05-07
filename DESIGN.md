# Design System - Arun ChatUI

## Product Context

- **What this is:** A personal portfolio presented as a messaging interface. Visitors explore Arun Sharma's work, skills, education, projects, and contact paths through a chat-style thread rather than a conventional portfolio grid.
- **Who it is for:** Recruiters, founders, operators, and peers who need to quickly understand Arun's strategy, growth, Chief of Staff, GTM, fundraising, and 0-to-1 operating experience.
- **Space:** Personal executive/operator portfolio. Competitive research showed most developer portfolios converge on proof grids, cards, and polished gallery layouts. This product should win by sharpening the chat metaphor instead.
- **Project type:** Static single-page web app, implemented in `index.html` with no build step.
- **Memorable thing:** This should feel like an operator channel: private, high-signal, decisive, and credible.

## Non-Negotiables

- The interface stays a chat UI.
- Preserve the single focused chat thread, profile/header bar, persona chips, topic buttons, chat bubbles, typing states, seen receipts, KPI toggle, timeline scrubber, light/dark toggle, and topic reveal behavior.
- Do not convert the page into a landing page, card grid, bento layout, resume page, or generic SaaS dashboard.
- Do not add decorative effects that compete with the conversation.

## Aesthetic Direction

- **Direction:** Executive darkroom.
- **Mood:** Private, precise, and outcome-oriented. It should feel like entering a serious operator thread, not browsing a playful developer showcase.
- **Decoration level:** Ambient texture.
- **Decoration rules:**
  - Keep subtle grain, blur, controlled glow, and depth.
  - Use atmosphere to support the chat shell, not as the main visual event.
  - Avoid decorative blob/orb systems as the primary identity.
  - Avoid purple gradients, bubbly SaaS visuals, generic glassmorphism overload, and centered marketing sections.
- **Reference research:** PortfolioGallery, Killer Portfolio, FolioGrid, Hedy D., Colorlib developer portfolios, and SiteBuilderReport portfolio examples.

## Typography

- **Primary family:** Geist.
- **Mono family:** Geist Mono.
- **Loading strategy:** Google Fonts with `display=swap`.

```html
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@500;600;700&display=swap" rel="stylesheet">
```

- **Body and chat text:** Geist, 400-600.
- **UI labels and buttons:** Geist, 500-700.
- **Name/header:** Geist, 700 or 800.
- **Metrics, dates, timeline years, compact proof elements:** Geist Mono, 500-700.
- **Fallback stack:** `Geist, ui-sans-serif, system-ui, sans-serif` and `Geist Mono, ui-monospace, SFMono-Regular, monospace`.

### Type Scale

| Role | Size | Weight | Line height | Usage |
| --- | ---: | ---: | ---: | --- |
| Header name | 14px | 700 | 1.2 | Profile/header identity |
| Header metadata | 11px | 500 | 1.3 | Availability and role |
| Chat body | 15px | 500 | 1.55 | Main bubbles |
| Secondary chat text | 13px | 500 | 1.5 | Timeline descriptions, helper copy |
| Topic buttons | 13px | 650 | 1.2 | Primary navigation chips |
| Sub-buttons | 12px | 600 | 1.2 | Nested chat actions |
| Section label | 10px | 700 | 1.2 | Uppercase reply labels |
| Metric proof | 18px | 700 | 1.2 | KPI and timeline proof |
| Receipt/microcopy | 10px | 500 | 1.2 | Seen receipts and tiny state text |

## Color

### Approach

- **System:** Dynamic contextual topic accents.
- **Intensity:** Subtle signals only.
- **Rule:** The dark operator shell remains stable. Only active states, reply rails, highlighted bubbles, focus outlines, metric chips, and small glows shift by topic.
- **Do not:** Use random color, time-based full-page color shifts, or high-saturation backgrounds.

### Base Tokens

| Token | Dark | Light | Usage |
| --- | --- | --- | --- |
| `--bg` | `#090806` | `#faf7f0` | Page background |
| `--surface` | `#12100c` | `#ffffff` | Bubbles and raised surfaces |
| `--surface-2` | `#19150f` | `#f5efe4` | Header and nested surfaces |
| `--text-primary` | `#f7f1e8` | `#17130d` | Main text |
| `--text-secondary` | `#b5a489` | `#6d5d45` | Secondary text |
| `--text-muted` | `rgba(247,241,232,0.38)` | `rgba(23,19,13,0.42)` | Receipts, labels, hints |
| `--border-soft` | `rgba(255,255,255,0.08)` | `rgba(23,19,13,0.08)` | Neutral borders |
| `--shadow-deep` | `rgba(0,0,0,0.34)` | `rgba(49,39,24,0.12)` | Surface depth |

### Topic Accent Tokens

Each topic should define RGB plus solid, hover, soft background, border, and glow tokens. Keep saturation restrained.

| Topic | Solid | RGB | Soft background | Border | Glow | Meaning |
| --- | --- | --- | --- | --- | --- | --- |
| Work | `#d99a2b` | `217,154,43` | `rgba(217,154,43,0.10)` | `rgba(217,154,43,0.34)` | `rgba(217,154,43,0.18)` | Commercial proof and outcomes |
| Skills | `#6f9ecb` | `111,158,203` | `rgba(111,158,203,0.10)` | `rgba(111,158,203,0.34)` | `rgba(111,158,203,0.16)` | Capability and precision |
| Education | `#8aa77a` | `138,167,122` | `rgba(138,167,122,0.10)` | `rgba(138,167,122,0.34)` | `rgba(138,167,122,0.15)` | Foundation and range |
| About | `#b8754a` | `184,117,74` | `rgba(184,117,74,0.10)` | `rgba(184,117,74,0.34)` | `rgba(184,117,74,0.15)` | Personal warmth |
| Built | `#4fa66f` | `79,166,111` | `rgba(79,166,111,0.10)` | `rgba(79,166,111,0.34)` | `rgba(79,166,111,0.16)` | Shipping and momentum |
| Contact | `#6ca8d8` | `108,168,216` | `rgba(108,168,216,0.10)` | `rgba(108,168,216,0.34)` | `rgba(108,168,216,0.16)` | Clear action |

### Semantic Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--success` | `#4fa66f` | Contact availability and positive states |
| `--warning` | `#d99a2b` | Important but non-error emphasis |
| `--error` | `#d45f5f` | Validation or broken state only |
| `--info` | `#6ca8d8` | Neutral informational states |

## Dynamic Color Contract

Future UI implementation should introduce a topic-aware token layer without changing the page structure.

```css
:root {
  --topic-rgb: 217,154,43;
  --topic-accent: #d99a2b;
  --topic-accent-hover: #e6af52;
  --topic-accent-soft: rgba(var(--topic-rgb), 0.10);
  --topic-accent-border: rgba(var(--topic-rgb), 0.34);
  --topic-accent-glow: rgba(var(--topic-rgb), 0.18);
}

html[data-active-topic="work"] { --topic-rgb: 217,154,43; --topic-accent: #d99a2b; }
html[data-active-topic="skills"] { --topic-rgb: 111,158,203; --topic-accent: #6f9ecb; }
html[data-active-topic="education"] { --topic-rgb: 138,167,122; --topic-accent: #8aa77a; }
html[data-active-topic="about"] { --topic-rgb: 184,117,74; --topic-accent: #b8754a; }
html[data-active-topic="built"] { --topic-rgb: 79,166,111; --topic-accent: #4fa66f; }
html[data-active-topic="contact"] { --topic-rgb: 108,168,216; --topic-accent: #6ca8d8; }
```

Implementation rule: `openTopic(topic, event)` may set `document.documentElement.dataset.activeTopic = topic`. Closing all topics should fall back to `work` or remove the attribute. Do not use color changes that obscure which content is active.

## Spacing

- **Base unit:** 4px.
- **Density:** Compact but breathable.
- **Principle:** The page should feel like an efficient conversation, not a padded marketing layout.

| Token | Value | Usage |
| --- | ---: | --- |
| `--space-2xs` | 2px | Hairline separations |
| `--space-xs` | 4px | Micro gaps |
| `--space-sm` | 8px | Button groups, inline chips |
| `--space-md` | 12px | Message gaps |
| `--space-lg` | 16px | Bubble padding, grouped controls |
| `--space-xl` | 24px | Header to first message |
| `--space-2xl` | 32px | Major reply sections |
| `--space-3xl` | 48px | Top page padding |

## Layout

- **Approach:** Focused column.
- **Primary width:** 640px max for the chat thread.
- **Desktop:** Center the chat column. Avoid side panels unless a later feature explicitly needs persistent context.
- **Mobile:** Full-width thread with 16px side padding and no horizontal overflow.
- **Bubbles:** Use asymmetric chat radii to preserve message identity.
- **Cards:** Avoid card-in-card composition. Repeated content should still read as nested chat content, not separate dashboard cards.

### Radius Scale

| Token | Value | Usage |
| --- | ---: | --- |
| `--radius-xs` | 4px | Focus outlines, tiny badges |
| `--radius-sm` | 8px | Metric chips, nested elements |
| `--radius-md` | 12px | Avatar, header controls |
| `--radius-lg` | 16px | Header shell |
| `--radius-chat` | `4px 18px 18px 18px` | Incoming chat bubbles and typing |
| `--radius-pill` | 999px | Pills only |

## Motion

- **Approach:** Fast, precise.
- **Goal:** Motion should make state changes legible and responsive, not theatrical.

| Token | Value | Usage |
| --- | --- | --- |
| `--ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Message and topic entrance |
| `--ease-exit` | `cubic-bezier(0.7, 0, 0.84, 0)` | Collapse and fade out |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Hover and state changes |
| `--duration-micro` | 80ms | Button press feedback |
| `--duration-short` | 160ms | Hover and active state |
| `--duration-medium` | 260ms | Typing fade, bubble reveal |
| `--duration-long` | 420ms | Initial staggered intro |

### Motion Rules

- Keep initial intro message stagger.
- Keep typing indicators before reply reveal.
- Keep seen receipts after message groups.
- Keep topic button active feedback.
- Reduce or remove decorative background motion.
- Honor `prefers-reduced-motion: reduce` by disabling nonessential transitions and animations.

## Component Usage Rules

- **Header:** The header should feel like a contact card inside a messaging app. Keep profile photo, name, availability, call action, and theme toggle visible.
- **Persona chips:** Use as shortcuts into intent-specific threads. Active persona may influence selected topic but should not fully restyle the page.
- **Topic buttons:** Keep right-aligned message-app action chips. Active topic should use the current topic accent.
- **Reply rail:** The left rail marks the active conversation branch. It should use `--topic-accent-border`.
- **Highlighted bubbles:** Use for proof and major claims. Do not highlight every bubble.
- **Metrics:** Use Geist Mono and topic accent backgrounds. Numbers should feel like evidence, not decoration.
- **Timeline scrubber:** Keep compact. Color changes should reinforce the selected year or active topic without turning the page into a full atmospheric color shift.

## Accessibility

- Maintain visible focus states on all interactive controls.
- Preserve text contrast in dark and light themes.
- Do not rely on color alone for active state; keep active borders, weight, or shadow.
- Ensure touch targets are at least 36px high where practical.
- Respect reduced-motion preferences.

## Implementation Notes

- `index.html` should load Geist and Geist Mono from Google Fonts.
- `index.html` should use base tokens plus topic-aware tokens instead of amber-only component styling.
- `html` should default to `data-active-topic="work"`.
- `openTopic(topic, event)` should update `document.documentElement.dataset.activeTopic = topic`.
- Keep all existing topic IDs and interaction functions unless a later plan explicitly changes behavior.
- Do not introduce a build step or dependency.

## Decisions Log

| Date | Decision | Rationale |
| --- | --- | --- |
| 2026-05-07 | Created initial design system | Competitive research showed portfolio grids are table stakes; Arun ChatUI should stay chat-first and sharpen the operator-channel metaphor. |
| 2026-05-07 | Chose Executive darkroom | Fits strategy/growth credibility while avoiding generic developer portfolio polish. |
| 2026-05-07 | Kept chat UI as hard constraint | The messaging interface is the product's memorable advantage. |
| 2026-05-07 | Chose subtle contextual topic color | Delivers dynamic color without distracting from the conversation. |
| 2026-05-07 | Chose Geist family | User selected Geist for crisp executive typography. |
| 2026-05-07 | Applied design system to `index.html` | Added Geist loading, topic-aware tokens, and the `data-active-topic` interaction hook while preserving the chat UI. |
