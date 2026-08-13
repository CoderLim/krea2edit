# OpenCode page topology and DScode mapping

## Reference order

1. Sticky header inside a centered 1080px frame.
2. Hero announcement, product statement, short description, and install tabs.
3. Full-width 16:9 black product video.
4. "What is OpenCode?" explanation with seven inline feature rows.
5. Open-source proof section with one paragraph and three line-art figures.
6. Compact privacy section.
7. FAQ disclosure list.
8. Model-access CTA.
9. Email signup.
10. Utility footer and legal line.

Every flow section is separated by a single 1px horizontal rule. The header is the only sticky element. All other sections are static except the looping product video, install tabs, and FAQ disclosures.

## DScode page order

1. `Header`: sticky DScode wordmark, compact anchor navigation, locale/theme controls, and a black install action.
2. `Hero`: open-source badge, "The DeepSeek coding agent" statement, description, install tabs, and a DScode repository session preview.
3. `Features`: concise "What is DScode?" copy followed by seven feature rows.
4. `HowItWorks`: three real workflow stages with restrained line diagrams instead of invented adoption metrics.
5. `CTA`: privacy/local-control statement and quick-start link.
6. `FAQ`: compact disclosure rows.
7. `Footer`: framed resource grid, attribution, and legal links.

The route remains a composition of blocks. Content stays in Paraglide message files and reusable rendering behavior stays in components.
