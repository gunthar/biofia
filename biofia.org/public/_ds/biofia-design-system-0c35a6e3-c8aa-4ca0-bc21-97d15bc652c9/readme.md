# BioFIA Design System

The Biodiversity Finance Innovation Alliance (BioFIA) is a global network designing financial instruments that treat ecosystems as living infrastructure — unlocking investment in nature, routing power and capital to the people who protect it, and building a post-carbon economy. This system translates that mission into a consistent visual and interaction language: a crisp, institutional register on white — near-black type, a deep navy/indigo pairing, and a single muted clay accent — closer to a capital-markets nonprofit (cf. CREO Syndicate) crossed with a technical conservation studio (cf. Capacity) than a typical green-and-gold eco-nonprofit.

**Sources.** No codebase, Figma file, or existing deck was provided. This system was built from: the company description and color/token spec supplied directly by the user, and `uploads/BIOFIA Logo.png` (the only visual asset provided). Everything else — type pairing, component set, UI kit content — was designed from scratch to fit the brief; there is no existing product to reconcile against. If a Figma file, site, or deck exists, attach it and this system should be reconciled against it.

## Content fundamentals

BioFIA writes like a policy institution, not a startup: declarative, systemic sentences that name mechanisms (`instruments`, `capital`, `governance`, `stewardship`) rather than adjectives. Example from the brand's own copy: *"we design and prototype next-generation financial instruments that recognize ecosystems as living infrastructure."*

- **Voice**: first-person plural ("we design," "we aim to make") — BioFIA speaks as a network taking collective action, never "I" and rarely direct second-person "you" except in calls to action ("Join the Alliance").
- **Tone**: serious, structural, hopeful without being promotional. No hype adjectives ("game-changing," "revolutionary"); ambition is expressed through scale and mechanism ("rewire the flow of capital," "shift power to those who protect nature").
- **Casing**: sentence case for headlines and buttons (not Title Case); short, uppercase, letter-spaced eyebrows label section context (e.g. "A GLOBAL NETWORK FOR NATURE-POSITIVE CAPITAL").
- **Vocabulary anchors**: "instrument" (not "product"), "stewards"/"stewardship" (not "users"), "capital" (not "money"), "verified"/"verification" (credibility through measurement, not marketing claims).
- **Emoji**: never used — the register is institutional finance/policy, not consumer social.
- **Numbers**: headline metrics are used sparingly and always paired with plain-language context (e.g. "17M ha of forest brought into investable structures"), never a bare stat.

## Visual foundations

- **Palette**: pure white base (`#FFFFFF`), near-black ink for primary text (`#14151A`), cool charcoal for secondary text (`#53565C`) — deliberately less "warm off-white nonprofit" and more crisp institutional paper. No green, no literal gold: two structural accents carry distinct meanings — deep slate-navy `#1E2A3C` (primary: headings, CTAs, structure) and a darker muted indigo `#332F4E` (BioFIA-specific identity, systems diagrams). A single warm clay/copper `#9C6B44` is reserved exclusively for headline metrics, key figures, and calls to action — never decorative. Stone gray `#ADA9A0` handles dividers, chart axes, captions. Max two accent colors visible on any one screen at full saturation.
- **Dark mode**: near-black `#101114` background with white text, limited to one or two high-impact moments (Vision, The Ask) — never the default surface.
- **Type**: Manrope (geometric sans, in the spirit of Inter/Proxima Nova) for display/headlines — bold weights carry the institutional weight. Public Sans (sans) for all UI, body copy, and navigation. IBM Plex Mono for metrics and data, reinforcing that a number is measured, not decorative.
- **Backgrounds**: flat color fields only — no gradients, no photography-driven hero imagery (none was supplied), no repeating patterns or textures. Section rhythm comes from alternating `surface-page` / `surface-sunken` / dark bands, not imagery.
- **Animation**: minimal and functional — 120–360ms ease-standard transitions on hover/focus only (color/opacity shifts, a toggle thumb sliding). No bounce, no decorative motion.
- **Hover states**: buttons darken via `brightness(0.92)`; ghost/outline controls pick up `surface-sunken`. No color inversion.
- **Press states**: buttons scale to 0.97 — a subtle physical press, not a color change.
- **Borders & shadows**: 1px hairline borders (`--border-default` / `--border-strong`) define structure before shadows do. Cards use a soft two-layer shadow (`--shadow-card`) plus a hairline border; popovers/dialogs use a stronger `--shadow-popover`. No colored or inner shadows.
- **Radius**: small controls 4–8px (inputs, small cards); cards/dialogs 8–14px; pills (buttons, badges, tags) fully rounded. Nothing sharp-cornered at the button/badge scale, nothing oversized/bubbly at the card scale.
- **Transparency/blur**: none — the brand favors flat, legible surfaces over glass/blur effects.
- **Imagery**: none supplied. Placeholder note: if photography is added, prefer warm-neutral, documentary (not glossy/stock) tone consistent with the base palette — request real photography before using stock.
- **Corner radii recap**: sm 4px / md 8px / lg 14px / xl 22px / pill 999px.
- **Cards**: white raised surface, 1px hairline border, soft shadow, 8px radius, optional 3px top accent stripe in navy/indigo/clay signaling category — never a left-border accent (avoided as an overused AI-slop pattern).

## Iconography

No icon library, sprite, or font was supplied. `components/core/Icon.jsx` is an **intentional addition**: a small hand-built stroke-icon set (24×24, 2px round-cap strokes) matching Lucide's visual geometry, covering the glyphs the UI kit needed (check, x, chevron, arrow-right, info, leaf, menu, plus). This is a substitution — if BioFIA has or prefers an existing icon system (Lucide, a custom set), swap `Icon.jsx`'s path data and flag any visual mismatch. No emoji or unicode glyphs are used as icons anywhere in the system.

## Assets

- `assets/logo-full.png` — full BioFIA lockup (wordmark + rooted-leaf mark + tagline), transparent background.
- `assets/logo-mark.png` — cropped rooted-leaf mark only, transparent background, for compact/favicon-style placements.

No other illustrations, photography, or background imagery were supplied — none were invented.

## Fonts — flag for the user

No font files were supplied. Typefaces were chosen fresh to fit the brief (Manrope / Public Sans / IBM Plex Mono, loaded from Google Fonts in `tokens/typography.css`). If BioFIA has existing brand fonts, please share the files/license and this system will be updated to self-host them.

## Index

- `styles.css` — root stylesheet, imports every token file below. Link this one file from any consuming project.
- `tokens/` — `colors.css`, `typography.css` (+ Google Fonts import), `spacing.css`, `radius.css`, `shadows.css` (+ motion durations/easings), `base.css` (resets, link colors).
- `assets/` — logo files (see above).
- `guidelines/` — 12 specimen cards: `colors-core`, `colors-neutral`, `colors-semantic`, `colors-dark`, `type-display`, `type-ui`, `type-mono`, `type-metric-pattern`, `spacing-scale`, `spacing-cards`, `brand-logo`, `brand-accent-rules`.
- `components/core/` — Icon, Button, IconButton, Badge, Tag, Card.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Tooltip, Dialog, Toast.
- `components/navigation/` — Tabs.
- `ui_kits/website/` — BioFIA marketing site recreation: `Chrome.jsx` (header/footer), `Home.jsx`, `Programs.jsx`, `About.jsx`, `index.html` (click-through demo, tagged as a Starting Point).
- `SKILL.md` — portable skill file for using this system in Claude Code or elsewhere.

### Intentional additions
- **Icon** (`components/core/Icon.jsx`) — no icon source was supplied; see Iconography above.
- Standard component set (Button, IconButton, Badge, Tag, Card, Input, Select, Checkbox, Radio, Switch, Tooltip, Dialog, Toast, Tabs) — authored from scratch since no existing component library or Figma file defines BioFIA's inventory.

## Ask

This is a from-scratch system built only from a company description and one logo file — please treat it as a strong first draft, not ground truth. To make it precise:
1. **Confirm or replace the fonts** (Manrope / Public Sans / IBM Plex Mono are placeholder choices, not BioFIA's actual brand fonts).
2. **Share any existing site, deck, or Figma file** so the UI kit and component set can be reconciled against real screens instead of invented ones.
3. **Share real photography/illustration** if BioFIA uses any — right now the system is intentionally flat-color-only.
4. Flag anything in the component set that doesn't match how BioFIA actually talks about its programs (program names in the Programs UI kit page are illustrative, not real).
