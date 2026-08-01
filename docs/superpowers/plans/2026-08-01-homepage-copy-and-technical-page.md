# Homepage Copy and Technical Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the English homepage for ordinary browser-tool users and move its advanced model and ComfyUI material to a new `/technical` page without changing the homepage hero, TDK, layout, or editor behavior.

**Architecture:** Keep `SeoGuide` as the homepage content block but remove advanced sections from its render tree and replace them with one localized link. Add a dedicated `TechnicalPage` block and route following the existing marketing route/head helpers, with content supplied by Paraglide message keys. Update homepage JSON-LD independently so no technical filename or tuning recipe remains in homepage structured data.

**Tech Stack:** TanStack Start file routes, React 19, TypeScript, Paraglide JS, Tailwind CSS 4, Node test runner, existing marketing SEO helpers.

---

### Task 1: Add regression tests for the content boundary

**Files:**

- Create: `src/lib/homepage-content.test.ts`

- [ ] **Step 1: Write a source-level regression test**

  Add a Node test that reads `src/blocks/seo-guide.tsx`, `src/routes/index.tsx`, and `messages/en.json`; assert the homepage title/description remain their current values, the new free-use FAQ exists, and homepage-rendered source/message values no longer expose the model filename or advanced setting sections.

- [ ] **Step 2: Run the test and verify it fails**

  Run: `pnpm exec tsx --test src/lib/homepage-content.test.ts`

  Expected: FAIL because the homepage still renders settings/comparison content and still includes the model-weight FAQ.

### Task 2: Rewrite the English homepage copy and structured data

**Files:**

- Modify: `messages/en.json`
- Modify: `src/blocks/seo-guide.tsx`
- Modify: `src/routes/index.tsx`

- [ ] **Step 1: Update English user-facing messages**

  Set `landing.seo.intro_1` to the approved browser-tool positioning. Rewrite the how-to copy and four use-case card titles/descriptions in ordinary-user language. Replace FAQ item 2 with “Is Krea2 Edit free to use?” and “Yes, the browser editor is completely free. No sign-up required.” Add an English advanced-user note and technical-guide link label.

- [ ] **Step 2: Remove advanced sections from the homepage render tree**

  Delete the technical source links paragraph, settings table/list, browser-versus-ComfyUI comparison, technical limits/license section, and model filename code span from `SeoGuide`. Preserve the article wrapper, how-to, four cards, FAQ, and final support/legal content. Insert the advanced-user note linking to `/technical` where the technical material previously began.

- [ ] **Step 3: Rewrite homepage JSON-LD**

  Keep `landing.meta.title` and `landing.meta.description` untouched. Replace developer terminology in the WebApplication description, simplify HowTo steps to upload/instruct/review, and replace the weight question in FAQPage with the approved free-use question and answer.

- [ ] **Step 4: Run the regression test**

  Run: `pnpm exec tsx --test src/lib/homepage-content.test.ts`

  Expected: PASS.

### Task 3: Add the technical guide page

**Files:**

- Create: `src/blocks/technical-guide.tsx`
- Create: `src/routes/technical.tsx`
- Modify: `messages/en.json`
- Modify: `messages/zh.json`
- Modify: `messages/zh-TW.json`
- Modify: `messages/ja.json`
- Modify: `messages/ko.json`

- [ ] **Step 1: Add technical guide messages**

  Add `technical.*` metadata, hero, settings, comparison, weights, limits/license, FAQ, and source-link messages. Use final English copy in `messages/en.json`; copy the English strings into the other four locale files as temporary fallback so Paraglide compiles all locales.

- [ ] **Step 2: Build the technical block**

  Create `TechnicalGuide` with the existing `Header`, `Footer`, marketing typography, responsive tables/cards, external source links, and a locale-aware link back to the online editor. This is the only homepage-adjacent block allowed to render the model filename, CFG/steps, `ref_boost`, `grounding_px`, SVD ranks, and ComfyUI comparison.

- [ ] **Step 3: Add `/technical` route and schemas**

  Create a file route with localized loader metadata, `createMarketingHead`, Article schema, and FAQ schema. Use the existing logo OG image and canonical/alternate patterns.

- [ ] **Step 4: Run focused route/content tests**

  Run: `pnpm exec tsx --test src/lib/homepage-content.test.ts src/lib/marketing-seo.test.ts`

  Expected: PASS.

### Task 4: Publish and verify the route

**Files:**

- Modify: `src/routes/sitemap[.]xml.ts`
- Generated during build: `src/routeTree.gen.ts`

- [ ] **Step 1: Add `/technical` to static sitemap paths**

  Insert `'/technical'` alongside the five existing P0 marketing routes.

- [ ] **Step 2: Run formatting and focused tests**

  Run: `pnpm exec prettier --write src/lib/homepage-content.test.ts src/blocks/seo-guide.tsx src/blocks/technical-guide.tsx src/routes/index.tsx src/routes/technical.tsx 'src/routes/sitemap[.]xml.ts' messages/*.json docs/superpowers/plans/2026-08-01-homepage-copy-and-technical-page.md`

  Run: `pnpm exec tsx --test src/lib/homepage-content.test.ts src/lib/marketing-seo.test.ts src/lib/marketing-content.test.ts src/components/marketing/marketing-primitives.test.tsx`

  Expected: all tests PASS.

- [ ] **Step 3: Run production build**

  Run: `pnpm build`

  Expected: Vite/Nitro production build exits 0 and regenerates the route tree with `/technical`.

- [ ] **Step 4: Verify final content boundary**

  Search homepage source and homepage English message values for `krea2_identity_edit_v1_2.safetensors`, `ref_boost`, `grounding_px`, `r128`, and the removed settings/comparison headings. Expected: none are reachable from `SeoGuide` or `src/routes/index.tsx`; all retained advanced terms appear on the technical page only.

- [ ] **Step 5: Review the final diff**

  Run: `git diff --check` and `git status --short`.

  Expected: no whitespace errors; only planned implementation, generated route-tree, translation, test, and plan files are changed.
