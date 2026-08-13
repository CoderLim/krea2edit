# Footer specification

## Overview

- Target files: `src/components/site-footer.tsx`, `src/blocks/footer.tsx`
- Screenshot: `docs/design-references/opencode-ai/mobile-390.png`
- Interaction model: static links with hover underline

## Structure

- Footer shares the 1080px frame and 1px rules.
- Desktop utility links form equal-width cells; mobile stacks one link per row.
- Bottom legal/locale row uses centered muted 12px text.
- Keep `BuiltWithShipAny` beside the copyright/legal content.
- Use the existing DScode logo and content; do not reuse OpenCode assets.

## Styling

- Monochrome only, transparent background, no dark footer band.
- Cell padding: 24px desktop and 28px mobile.
- Border between cells: 1px weak rule.
- Hover: underline or slight text darkening; no pill backgrounds.
