# Features specification

## Overview

- Target file: `src/blocks/features.tsx`
- Screenshot: `docs/design-references/opencode-ai/desktop-1440.png`
- Interaction model: static text list with link hover

## Structure and exact styles

- One ruled section, padding 64px 80px desktop and 48px 24px mobile.
- Section heading: 16px, 700. Intro paragraph: 16px/32px, muted.
- Replace bento cards with seven plain list rows.
- Each row: `[＊]` marker, bold inline feature name, sentence description.
- Row gap/margin: 16px. Line-height: 200% desktop, 180% mobile.
- Feature name uses 500 weight and 12px right margin.
- End with one compact black documentation/GitHub action, 4px radius.

## Content

- DeepSeek-native runtime
- Cost visibility
- Parallel agents
- Local JSONL sessions
- Sandboxed commands
- Repository instructions and skills
- Open-source MIT codebase

## Responsive

- Same single-column list on all widths.
- Never convert into cards or a multi-column grid.
