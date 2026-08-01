import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildArticleSchema,
  buildFaqSchema,
  buildHowToSchema,
  buildWebApplicationSchema,
  createMarketingHead,
} from './marketing-seo';

test('createMarketingHead emits canonical, five locale alternates, and social metadata', () => {
  const head = createMarketingHead({
    appUrl: 'https://krea2edit.app',
    path: '/identity-edit',
    locale: 'ja',
    locales: ['en', 'zh', 'zh-TW', 'ja', 'ko'],
    title: 'Krea2 Identity Edit Online',
    description: 'Edit images online while preserving identity.',
    image: '/logo-og.png',
    schemas: [],
  });

  const canonical = head.links.find((link) => link.rel === 'canonical');
  const alternates = head.links.filter((link) => link.rel === 'alternate');

  assert.equal(canonical?.href, 'https://krea2edit.app/ja/identity-edit');
  assert.equal(alternates.length, 6);
  assert.ok(
    alternates.some(
      (link) =>
        link.hrefLang === 'zh-TW' &&
        link.href === 'https://krea2edit.app/zh-TW/identity-edit'
    )
  );
  assert.ok(
    head.meta.some(
      (meta) =>
        meta.property === 'og:image' && meta.content.endsWith('/logo-og.png')
    )
  );
  assert.ok(
    head.meta.some(
      (meta) =>
        meta.name === 'twitter:card' && meta.content === 'summary_large_image'
    )
  );
});

test('schema builders return the requested Google-supported content types', () => {
  const faq = buildFaqSchema([
    { question: 'Do I need ComfyUI?', answer: 'No, it runs online.' },
  ]);
  const howTo = buildHowToSchema('Use Krea2 Edit', 'A short guide', [
    { name: 'Upload', text: 'Upload a clear portrait.' },
  ]);
  const article = buildArticleSchema({
    headline: 'Krea2 Identity Edit Guide',
    description: 'A complete guide.',
    url: 'https://krea2edit.app/guide',
    image: 'https://krea2edit.app/logo-og.png',
  });
  const app = buildWebApplicationSchema({
    name: 'Krea2 Identity Edit Online',
    description: 'Identity-preserving image editor.',
    url: 'https://krea2edit.app/identity-edit',
  });

  assert.equal(faq['@type'], 'FAQPage');
  assert.equal(faq.mainEntity[0]?.acceptedAnswer.text, 'No, it runs online.');
  assert.equal(howTo['@type'], 'HowTo');
  assert.equal(howTo.step[0]?.position, 1);
  assert.equal(article['@type'], 'Article');
  assert.equal(app['@type'], 'WebApplication');
  assert.equal(app.offers.price, '0');
});
