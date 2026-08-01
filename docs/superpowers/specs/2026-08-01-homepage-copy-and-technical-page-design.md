# Homepage Copy Rewrite and Technical Page Design

## Goal

Reposition the English homepage from developer-facing documentation for a Krea 2/ComfyUI workflow to a plain-language introduction for people who want to edit images online. Preserve the existing homepage structure, hero, metadata, and editor behavior. Move advanced implementation details to a dedicated `/technical` page instead of deleting them.

## Scope

### Homepage

- Keep the current hero title, H1, description, layout, and functionality unchanged.
- Keep the existing English TDK unchanged.
- Replace the first body paragraph with:

  > Krea2 Edit lets you edit images with AI directly in your browser — change backgrounds, swap outfits, restyle photos, all while keeping faces and identities intact. No download, no setup, no ComfyUI.

- Rewrite the four use-case cards in user language. The scenarios will cover:
  - placing the same person in a new location while keeping their face and clothing;
  - changing or removing one object while leaving the rest of the image untouched;
  - combining a person with another scene for concepts and social content;
  - changing outfits or selected image regions without technical model terminology.
- Remove technical tuning guidance from the homepage, including CFG, step counts, `ref_boost`, `grounding_px`, LoRA strength, SVD cuts, rank variants, and model filenames.
- Remove the browser-versus-ComfyUI technical comparison from the homepage.
- Replace the removed technical sections with one concise advanced-user note linking to `/technical`:

  > Advanced users: Krea2 Edit runs on the open-source Krea 2 stack with community LoRA. Read the technical guide →

- Replace the model-weight FAQ with:
  - Question: “Is Krea2 Edit free to use?”
  - Answer: “Yes, the browser editor is completely free. No sign-up required.”
- Update visible FAQ content and homepage FAQ structured data together so they communicate the same user-facing answer.
- Remove model filenames and parameter recipes from homepage HowTo structured data.

### Technical page

- Add a public `/technical` route using the existing marketing-page header, footer, typography, and locale-aware navigation patterns.
- Move the removed technical material to this page:
  - recommended settings and tuning controls;
  - hosted browser versus local ComfyUI comparison;
  - model weight/version guidance;
  - LoRA strength, SVD/rank, VRAM, limits, license, and responsible-use notes;
  - links to the Hugging Face model, ComfyUI node repository, Krea 2 page, and hosted Space.
- Give the page its own English metadata and relevant Article/FAQ structured data.
- Add `/technical` to the XML sitemap.
- Link to `/technical` from the homepage advanced-user note. P0 page routes remain unchanged.

## Localization

- Rewrite only the English homepage copy in this release.
- Keep existing non-English homepage copy unchanged.
- Add the new translation keys required for compilation to every locale file. English contains the reviewed source copy; other locales temporarily use English fallback copy for the new `/technical` page and advanced-user link.

## Implementation boundaries

- Preserve the current homepage section order and visual component structure.
- Do not alter authentication, payment, editor embedding, API behavior, database schema, or P0 page behavior.
- Do not introduce new dependencies.
- Keep translation reads in blocks and content rendering in reusable components, following the repository architecture.

## Verification

- Run focused tests for marketing content/SEO helpers when affected.
- Run `pnpm build`.
- Inspect the built or rendered English homepage source to confirm it no longer contains:
  - `krea2_identity_edit_v1_2.safetensors`;
  - CFG/step recipes;
  - `ref_boost`, `grounding_px`, SVD, or rank/VRAM guidance.
- Confirm `/technical` builds, is linked from the homepage, and appears in the sitemap.
- Confirm the homepage title and meta description are byte-for-byte unchanged in `messages/en.json`.

## Out of scope

- Redesigning homepage sections or cards.
- Changing the hero or homepage TDK.
- Translating the new copy into Chinese, Traditional Chinese, Japanese, or Korean.
- Reworking the five P0 inner pages already present in the repository.
