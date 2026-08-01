import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const homepageBlock = readFileSync(
  new URL('../blocks/seo-guide.tsx', import.meta.url),
  'utf8'
);
const homepageRoute = readFileSync(
  new URL('../routes/index.tsx', import.meta.url),
  'utf8'
);
const englishMessages = JSON.parse(
  readFileSync(new URL('../../messages/en.json', import.meta.url), 'utf8')
) as Record<string, string>;

test('keeps the approved homepage TDK unchanged', () => {
  assert.equal(
    englishMessages['landing.meta.title'],
    'Krea2 Edit - Identity AI Image Editor | Free Online'
  );
  assert.equal(
    englishMessages['landing.meta.description'],
    'Krea2 Edit: identity-preserving AI image edits in-browser. Restage subjects, swap objects, keep likeness. No ComfyUI needed—try the live editor above now.'
  );
});

test('presents the English homepage as a browser tool for ordinary users', () => {
  assert.equal(
    englishMessages['landing.seo.intro_1'],
    'lets you edit images with AI directly in your browser — change backgrounds, swap outfits, restyle photos, all while keeping faces and identities intact. No download, no setup, no ComfyUI.'
  );
  assert.equal(
    englishMessages['landing.seo.faq_2_question'],
    'Is Krea2 Edit free to use?'
  );
  assert.equal(
    englishMessages['landing.seo.faq_2_answer'],
    'Yes, the browser editor is completely free. No sign-up required.'
  );
});

test('keeps advanced implementation details off the homepage render tree', () => {
  for (const term of [
    'landing.seo.settings_title',
    'landing.seo.comparison_title',
    'landing.seo.limits_title',
    'krea2_identity_edit_v1_2.safetensors',
    'ref_boost',
    'grounding_px',
  ]) {
    assert.doesNotMatch(homepageBlock, new RegExp(term));
    assert.doesNotMatch(homepageRoute, new RegExp(term));
  }

  assert.match(homepageBlock, /href="\/technical"/);
});

test('publishes advanced implementation details on the technical guide', () => {
  const technicalBlockUrl = new URL(
    '../blocks/technical-guide.tsx',
    import.meta.url
  );
  const technicalRouteUrl = new URL('../routes/technical.tsx', import.meta.url);

  assert.ok(
    existsSync(technicalBlockUrl),
    'technical guide block should exist'
  );
  assert.ok(existsSync(technicalRouteUrl), 'technical route should exist');

  const technicalBlock = readFileSync(technicalBlockUrl, 'utf8');
  const technicalRoute = readFileSync(technicalRouteUrl, 'utf8');
  const sitemap = readFileSync(
    new URL('../routes/sitemap[.]xml.ts', import.meta.url),
    'utf8'
  );

  for (const term of [
    'krea2_identity_edit_v1_2.safetensors',
    'ref_boost',
    'grounding_px',
    'r128',
    'ComfyUI',
  ]) {
    assert.match(technicalBlock, new RegExp(term));
  }

  assert.match(technicalBlock, /href="\/#try"/);
  assert.match(technicalRoute, /createFileRoute\('\/technical'\)/);
  assert.match(sitemap, /'\/technical'/);
});
