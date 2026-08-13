# HeaderShell specification

## Overview

- Target files: `src/components/site-header.tsx`, `src/blocks/header.tsx`
- Screenshot: `docs/design-references/opencode-ai/desktop-1440.png`
- Interaction model: static sticky header; click-driven mobile menu

## Structure and exact styles

- Center inside the same 1080px page frame as the landing content.
- Height: 80px. Padding: 24px 80px desktop, 24px mobile.
- Position: sticky, top 0, z-index 50.
- Background: opaque page background. Border-bottom: 1px solid weak border. No blur or shadow.
- Brand uses the existing DscodeLogo plus mono wordmark. Do not copy OpenCode's logo.
- Desktop nav gap: 28–32px, 13px text. Hover uses underline, never a pill background.
- Primary action: near-black fill, white text, 4px radius, 40px height.
- Mobile breakpoint: 40rem. Menu button is square and menu panel is full-width with 1px dividers.

## States

- No visual change after scrolling.
- Hover links: underline with 4px underline offset.
- Mobile toggle: menu opens below header; each item is separated by a 1px rule.

## Responsive

- Desktop: full nav and controls.
- Tablet: hide the primary action before nav collision.
- Mobile: only brand and menu toggle in the top row.
