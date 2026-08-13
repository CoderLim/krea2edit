# FaqAndCta specification

## Overview

- Target files: `src/blocks/faq.tsx`, `src/blocks/cta.tsx`
- Screenshot: `docs/design-references/opencode-ai/mobile-390.png`
- Interaction model: click-driven FAQ; static CTA

## FAQ

- One ruled section with 64px 80px desktop / 48px 24px mobile padding.
- Section heading: 16px/24px, 700.
- Disclosure rows are plain text, not cards. Question spacing: 24px.
- Question button: plus/minus icon, 16px gap, 500 weight, left aligned.
- Answer: 40px left indent, 32px bottom margin, 200% line-height.
- No accordion container border, rounded background, shadows, or hover fill.

## CTA

- Follow FAQ with a compact ruled privacy/quick-start section.
- Strong label above one paragraph. Paragraph max-width 90% desktop.
- Secondary outlined quick-start button: 1px border, 4px radius, 8px 12px 8px 20px padding.
- Keep the existing DScode copy and GitHub quick-start destination.

## Responsive

- Preserve the vertical text flow. Reduce section padding to 48px 24px.
