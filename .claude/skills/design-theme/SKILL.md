---
name: design-theme
description: Give the site a distinctive visual identity — palette, typography, and a signature element derived from the product brief. Use for EVERY new website build (as part of the quick-start flow) and whenever the user asks to restyle, 美化, 换风格, or complains the site looks generic/templated. Never ship the template's default look.
---

# Design Theme — make it unmistakable

You are the design lead. The template's stock look (warm cream background,
high-contrast serif display, terracotta accent) is a PLACEHOLDER, not a
design. Shipping it unchanged — or lightly tinted — is a failure, no matter
how clean it looks. Every site you build must have a visual identity derived
from ITS OWN product, audience, and brief.

## 1. Ground the direction in the subject

Before touching code, decide and state (in the user's language):

- **Subject & audience** — what is this product, who uses it?
- **One-line direction** — e.g. "AI 视频站 → 影院暗场:近黑底、荧光青点缀、宽银幕比例的卡片" not "modern and clean".
- If the brief specifies style ("深色 + 紫色渐变"), that wording WINS —
  follow it exactly and completely (dark means `:root` defaults to the dark
  palette, not just a toggle).

The subject's own world (film, music, code, food, finance…) is where
distinctive choices come from. Avoid the three AI-default looks unless the
brief asks: cream+serif+terracotta / near-black+single acid accent /
newspaper hairlines+zero radius.

## 2. Plan tokens before editing

Write a compact plan first:

- **Palette**: 4–6 named colors with oklch values (背景 / 前景 / 主色 /
  强调 / 静音)。Light AND dark variants — or commit to one mode if the brief
  demands it.
- **Type pairing**: a characterful display face + a complementary body face
  (NOT the default Inter + Libre Baskerville pair). Pick from Google Fonts
  available via `@fontsource-*` packages; check availability with
  `pnpm add @fontsource-variable/<name>` or `@fontsource/<name>`.
- **Signature**: ONE memorable element that embodies the brief (a hero
  treatment, an ambient motion, a distinctive card geometry, a type moment).
  Spend your boldness there; keep everything else quiet.

Critique the plan once: if any part would appear for ANY similar brief, it's
a default, not a choice — revise it.

## 3. Apply — where things live

- **Colors**: `src/styles/globals.css` — all tokens are oklch CSS variables
  in `:root` (light) and `.dark`. Update BOTH blocks coherently:
  `--background --foreground --card --popover --primary --secondary --muted
  --accent --border --input --ring --radius` and the `--sidebar-*` family.
  Dark-by-default briefs: put the dark palette in `:root` and set
  `defaultTheme="dark"` on the ThemeProvider in `src/routes/__root.tsx`.
- **Fonts**: install via `pnpm add @fontsource-variable/<font>`, import in
  `src/routes/__root.tsx`, update `--font-sans` / `--font-serif-display` in
  `globals.css`. Remove imports of fonts you no longer use.
- **Blocks**: rewrite `src/blocks/*` (hero, features, pricing, header,
  footer) to carry the direction — hero is the thesis, open with the most
  characteristic thing in the product's world. Blocks are disposable; the
  primitives in `src/components/` are not.
- **Radius / density / motion**: `--radius`, section spacing, and at most a
  couple of deliberate animations. Respect `prefers-reduced-motion`.

## 4. Verify

- Load the homepage in BOTH light and dark (or confirm the single committed
  mode) — no unreadable text, no default-cream leftovers.
- Check text contrast on primary buttons and muted text.
- Screenshot-level self-critique: would this be mistaken for the stock
  template? If yes, iterate once more.
