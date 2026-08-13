# OpenCode reference behavior notes

Source: https://opencode.ai/
Captured: 2026-08-01 with Playwright at 1440×1000, 768×1024, and 390×844.

## Interaction sweep

- The 80px header is `position: sticky; top: 0; z-index: 10`. Its background, size, border, and opacity remain unchanged at scroll positions 0, 320, 900, and 1800px.
- There are no global scroll-reveal animations, parallax layers, or scroll-snap containers. The page uses native scrolling.
- Install options are click-driven tabs. The selected tab gains a 2px bottom border; the panel changes with a 180ms opacity transition. The command row is also a copy button.
- The product stage is time-driven: a 16:9 muted, looping, autoplay video on a black background.
- FAQ rows are click-driven disclosure items. The plus/minus icon switches and the answer appears below with a 40px left indent.
- Text links underline on hover. Primary actions invert to a near-black fill with a slightly lighter hover fill. Secondary actions keep a 1px outline.
- The navigation swaps to a menu button below 40rem. The mobile menu covers the viewport below the sticky header.

## Responsive sweep

- Desktop (1440px): the framed content column is 1080px wide with 1px side borders. Section padding is 80px horizontally and 64px vertically; the hero uses 96px vertical padding.
- Tablet (768px): the outer frame loses its side borders, page typography drops to 15px, and section padding becomes 24px horizontal / 48px vertical.
- Mobile (390px): the hero is 462px tall, title is 22px/33px, product media becomes full-bleed, and navigation collapses. Install tabs remain horizontally arranged in a clipped/scrollable row.
- Breakpoints observed: 60rem for type/padding, 40rem for navigation and growth illustrations, and 30rem for tighter hero/banner behavior.

## DScode translation

- Keep the static sticky shell and low-motion behavior.
- Preserve the click-to-switch installer and copy interaction.
- Replace OpenCode's video with a real HTML DScode session preview because no product video asset is available.
- Keep the framed single-column topology, 1px rules, square geometry, monochrome palette, and disclosure FAQ behavior.
