import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import { Hero } from '@/blocks/hero';
import { SeoGuide } from '@/blocks/seo-guide';

function buildJsonLd(canonical: string) {
  const webApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Krea2 Edit',
    url: canonical,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript and HTML5',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Browser tool for identity-preserving instruction-based image edits using the community Krea 2 Identity Edit LoRA.',
    creator: {
      '@type': 'Organization',
      name: 'Krea2 Edit',
      email: 'support@krea2edit.app',
      url: canonical,
    },
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to use Krea2 Edit in the browser',
    description:
      'Run an identity-preserving image edit with the embedded Hugging Face Space.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Upload a clear single-subject photo',
        text: 'Use a sharp face and readable outfit. Prefer sources around or under 2 megapixels.',
      },
      {
        '@type': 'HowToStep',
        name: 'Write one concrete instruction',
        text: 'Use a clear verb such as restage, recolor, or replace. Omit details you want preserved.',
      },
      {
        '@type': 'HowToStep',
        name: 'Generate and adjust likeness',
        text: 'Start with Turbo-style short runs (8–12 steps, CFG 1.0). Raise ref_boost near 4 if likeness drifts.',
      },
    ],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Krea2 Edit an official Krea feature?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. This page wraps a community LoRA and Hugging Face Space. It is not affiliated with or endorsed by Krea.ai, Inc.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which weight should I assume the Space uses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prefer v1.2 (krea2_identity_edit_v1_2.safetensors) when available. Confirm the pinned version on the Space before comparing sessions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I run the same stack offline after trying Krea2 Edit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Use ComfyUI with native Krea 2 support, the ComfyUI-Krea2Edit node pack, and the LoRA file with a shipped workflow.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I try first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A clear single-subject photo, a Turbo-length run, and one restage or recolor instruction.',
        },
      },
    ],
  };

  return [webApp, howTo, faq];
}

function HomePage() {
  return (
    <div className="text-foreground flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <SeoGuide />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/')({
  loader: () => {
    const locale = getLocale();
    return {
      locale,
      title: m['landing.meta.title']({}, { locale }),
      description: m['landing.meta.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'en';
    const title =
      loaderData?.title ?? m['landing.meta.title']({}, { locale: 'en' });
    const description =
      loaderData?.description ??
      m['landing.meta.description']({}, { locale: 'en' });
    const urlFor = (loc: string) =>
      localizeUrl(`${envConfigs.app_url}/`, { locale: loc as 'en' | 'zh' })
        .href;
    const canonical = urlFor(locale);
    const jsonLd = buildJsonLd(envConfigs.app_url || 'https://krea2edit.app');

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: canonical },
        {
          property: 'og:image',
          content: `${envConfigs.app_url}/logo-og.png`,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
      ],
      links: [
        { rel: 'canonical', href: canonical },
        ...locales.map((loc) => ({
          rel: 'alternate',
          hrefLang: loc,
          href: urlFor(loc),
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: urlFor('en') },
      ],
      scripts: jsonLd.map((data, i) => ({
        type: 'application/ld+json',
        children: JSON.stringify(data),
        key: `ld-${i}`,
      })),
    };
  },
  component: HomePage,
});
