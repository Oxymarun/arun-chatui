# TODOS

## ~~P2 — CSS Accent Token~~ DONE (2026-04-19)

**What:** Extract `rgba(192,57,43,...)` accent color to a CSS custom property: `--accent-rgb: 192, 57, 43`. Replace all ~8+ inline usages with `rgba(var(--accent-rgb), 0.15)` etc.

**Why:** Color value is duplicated 8+ times across the stylesheet. One change to the accent color currently requires finding and updating every instance. One CSS variable makes it a single-line change.

**Pros:** Consistency guaranteed, easy to reskin, standard CSS practice.

**Cons:** Minor refactor — no behavior change, pure cleanup.

**Context:** Surfaced during v2 redesign review (2026-04-18). All new glassmorphism values in Track 2 add more `rgba(192,57,43,...)` instances, so the duplication grows with v2.

**Effort:** S (human: ~30min / CC: ~5min)

**Priority:** P2

**Depends on:** None. Can be done any time, ideally in v2 PR.

---

## P2 — Thoughts Section (Real Opinions)

**What:** Add a "Thoughts" topic button with 3-4 sharp takes on growth, product, or AI. Each take as a bubble: one-line opinion + 1-2 sentences of supporting evidence.

**Why:** The original v2 spec identified opinions as the #1 differentiator. No other portfolio does this. The Thoughts button was scaffolded and then removed (2026-04-19) pending copy. When you have the takes, the structure is a 10-min build.

**Pros:** Strongest personality signal in the portfolio — people screenshot opinions, not bios.

**Cons:** Requires committing to public opinions. Copy must not sound generic.

**Context:** Removed from the 2026-04-19 diff because the placeholder (social redirect) was duplicating "Let's connect." Add back once you have 3-4 real takes. Write like you'd text a smart friend at 11pm, not a LinkedIn post.

**Effort:** S (human: ~30min once copy exists / CC: ~5min)

**Priority:** P2

**Depends on:** Content (opinions) from Arun.

---

## P4 — `setThemeBtn` Null Guard

**What:** Add `if (!btn) return;` at the top of `setThemeBtn()`.

**Why:** If `#theme-toggle` is ever removed from the HTML, `setThemeBtn` throws silently breaking theme restore. Structurally impossible now but costs 1 line to guard.

**Effort:** XS

**Depends on:** None.

---

## P2 — Wire Founder Persona to Thoughts Topic

**What:** Change `PERSONAS.founder.primary` from `'built'` to `'thoughts'` once Thoughts content is live.

**Why:** Founder persona should fast-track to opinions/takes — that's the strongest signal for a founder audience. Currently maps to 'built' as placeholder.

**Effort:** XS (1-line JS change)

**Depends on:** Thoughts section content.

---

## P3 — Remove Orphaned `data-time` Attributes

**What:** Remove `data-time="just now"` attributes from all `.bubble` elements in index.html.

**Why:** Timestamp feature was intentionally removed (2026-04-19 diff). The `data-time` attributes are now dead markup with no JS consumer.

**Pros:** Cleaner HTML, no confusion for future maintainers.

**Cons:** None — purely cosmetic cleanup.

**Context:** ~30+ bubbles have `data-time="just now"` baked in from the original timestamp spec. Safe to batch-remove.

**Effort:** XS (CC: ~2min)

**Priority:** P3

**Depends on:** None.
