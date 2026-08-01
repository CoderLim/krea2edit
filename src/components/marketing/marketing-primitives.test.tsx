import assert from 'node:assert/strict';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';

import {
  BeforeAfterGallery,
  ComparisonTable,
  EditorEmbed,
  ExplorePages,
  FaqList,
  FeatureGrid,
  PageHero,
  StepList,
} from './marketing-primitives';

test('EditorEmbed renders the live editor with an accessible title', () => {
  const html = renderToStaticMarkup(
    <EditorEmbed
      title="Krea2 Identity Edit online editor"
      note="The live editor runs on Hugging Face."
      openLabel="Open full-screen"
    />
  );

  assert.match(html, /<iframe/);
  assert.match(html, /title="Krea2 Identity Edit online editor"/);
  assert.match(html, /coderlim-krea2-identity-edit\.hf\.space/);
  assert.match(html, /loading="eager"/);
});

test('FaqList renders one section heading and question subheadings', () => {
  const html = renderToStaticMarkup(
    <FaqList
      title="Frequently asked questions"
      items={[
        { question: 'Do I need ComfyUI?', answer: 'No.' },
        { question: 'Is it free?', answer: 'Yes.' },
      ]}
    />
  );

  assert.equal((html.match(/<h2/g) ?? []).length, 1);
  assert.equal((html.match(/<h3/g) ?? []).length, 2);
});

test('BeforeAfterGallery keeps explicit image dimensions and descriptive alt text', () => {
  const html = renderToStaticMarkup(
    <BeforeAfterGallery
      title="Real identity edit examples"
      intro="Compare source and result."
      items={[
        {
          title: 'Background replacement',
          description: 'The face remains recognizable.',
          image: '/imgs/edit-jobs/re-staging-with-likeness.webp',
          alt: 'Krea2 identity edit before and after background replacement',
        },
      ]}
    />
  );

  assert.match(html, /width="1672"/);
  assert.match(html, /height="941"/);
  assert.match(
    html,
    /alt="Krea2 identity edit before and after background replacement"/
  );
});

test('StepList emits ordered steps with semantic subheadings', () => {
  const html = renderToStaticMarkup(
    <StepList
      title="How it works"
      intro="Three steps."
      items={[
        { title: 'Upload', description: 'Choose a portrait.' },
        { title: 'Prompt', description: 'Describe one change.' },
        { title: 'Generate', description: 'Review the result.' },
      ]}
    />
  );

  assert.match(html, /<ol/);
  assert.equal((html.match(/<h3/g) ?? []).length, 3);
});

test('PageHero provides exactly one primary heading', () => {
  const html = renderToStaticMarkup(
    <PageHero eyebrow="Online tool" title="Identity Preserving Image Editor">
      Edit your photos. Keep the people.
    </PageHero>
  );

  assert.equal((html.match(/<h1/g) ?? []).length, 1);
  assert.match(html, /Identity Preserving Image Editor/);
});

test('FeatureGrid and ComparisonTable preserve semantic structure', () => {
  const grid = renderToStaticMarkup(
    <FeatureGrid
      title="Use cases"
      intro="Four practical edits."
      items={[
        { title: 'Restage', description: 'Move the person.' },
        { title: 'Try-on', description: 'Change the outfit.' },
      ]}
    />
  );
  const table = renderToStaticMarkup(
    <ComparisonTable
      title="How it compares"
      intro="A direct comparison."
      columns={['Regular editor', 'Identity preserving']}
      rows={[{ label: 'Face', values: ['May drift', 'Reference anchored'] }]}
    />
  );

  assert.equal((grid.match(/<h3/g) ?? []).length, 2);
  assert.match(table, /<table/);
  assert.match(table, /<th[^>]*scope="row"/);
});

test('ExplorePages renders visible crawlable links for every featured page', () => {
  const html = renderToStaticMarkup(
    <ExplorePages
      title="Explore Krea2 Edit"
      intro="Choose a starting point."
      items={[
        {
          href: '/identity-edit',
          title: 'Editor',
          description: 'Use the tool.',
        },
        { href: '/guide', title: 'Guide', description: 'Learn the workflow.' },
      ]}
    />
  );

  assert.equal((html.match(/<a /g) ?? []).length, 2);
  assert.match(html, /href="\/identity-edit"/);
  assert.match(html, /href="\/guide"/);
});
