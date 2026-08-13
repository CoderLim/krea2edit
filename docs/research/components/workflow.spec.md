# Workflow specification

## Overview

- Target file: `src/blocks/how-it-works.tsx`
- Screenshot: `docs/design-references/opencode-ai/desktop-1440.png`
- Interaction model: static

## Structure

- One ruled section, padding 64px 80px desktop and 48px 24px mobile.
- Heading and intro use the same small mono hierarchy as Features.
- Show three equal workflow figures on desktop: install, connect, run.
- Each figure uses thin monochrome line art or command traces, never a rounded marketing card.
- Figure caption format: `Fig 1. install`, `Fig 2. connect`, `Fig 3. patch`.
- Include the real commands and workflow text already present in translations.

## Exact visual targets

- Diagram row starts 48px after the intro.
- 48–64px horizontal gap; figures share the available width.
- Line art is 1px and low contrast. Caption is 13px with muted label and strong keyword.
- Do not invent user, star, or contributor counts.

## Responsive

- At <=40rem, replace large diagrams with three compact ruled command rows.
