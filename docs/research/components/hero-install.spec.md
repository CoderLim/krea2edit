# HeroInstall specification

## Overview

- Target files: `src/blocks/hero.tsx`, `src/components/install-command.tsx`
- Screenshot: `docs/design-references/opencode-ai/desktop-1440.png`
- Interaction model: click-driven install tabs and copy command

## Structure and exact styles

- Hero inside the 1080px frame, padding 96px 80px desktop and 48px 24px mobile.
- Announcement row: 12px gap, black rectangular badge, no pill shape.
- H1: 38px/57px desktop, 22px/33px at <=60rem, 700 weight, mono font.
- Paragraph: 16px/32px desktop, 15px/27px mobile, max-width 82% desktop, margin-bottom 32px.
- Installer fills available width. Tab list and command panel use #f7f6f6-like background, 1px weak border, 6px maximum radius.
- Tabs: 16px vertical padding, 40px gap desktop, 2px selected underline, muted unselected labels.
- Panel: 16px padding. Command is a single-line overflow-safe button with copy feedback.
- Support npm and curl states; keep actual DScode commands and requirements.

## States and behavior

- Clicking a tab swaps the command with a 180ms opacity transition.
- Clicking the command copies it and briefly swaps Copy to Copied.
- Focus indicators remain visible.

## Responsive

- Installer width is 100%; tab row may scroll horizontally on narrow screens.
- Mobile hero remains compact and never centers its text.
