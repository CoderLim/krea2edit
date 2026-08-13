# AgentPreview specification

## Overview

- Target file: `src/components/agent-preview.tsx`
- Consumed by: `src/blocks/hero.tsx`
- Screenshot: `docs/design-references/opencode-ai/desktop-1440.png`
- Interaction model: static product preview with a subtle caret animation

## Structure

- Full-bleed within the page frame directly after hero copy/install content.
- Aspect ratio 16:9 desktop; auto height with a minimum of 240px mobile.
- Black background, white/gray mono content, no rounded outer corners.
- Top status row: `dscode`, repository path, model label.
- Main prompt line describes a concrete repository task.
- Result stream shows plan, patch, tests, and token/cost summary.
- Bottom hints show keyboard actions in very muted text.

## Exact visual targets

- Desktop stage height near 607px in a 1078px frame.
- Inner content max-width about 760px and vertically centered.
- Use only neutral gray plus one thin cool-blue caret/rule borrowed from DScode branding.
- No window traffic-light dots, gradients, glow, glass, cards, or fake OS chrome.

## Responsive

- At 390px, stage is full width and approximately 220–280px tall.
- Hide secondary status details and reduce content to the essential prompt/result lines.
