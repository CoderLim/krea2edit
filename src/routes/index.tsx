import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { ExplorePageLinks } from '@/blocks/explore-pages';
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
      'Free browser tool for changing backgrounds, swapping outfits, restyling photos, and preserving recognizable faces and identities.',
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
        name: 'Upload a clear photo',
        text: 'Choose a sharp photo with one clearly visible person.',
      },
      {
        '@type': 'HowToStep',
        name: 'Describe one change',
        text: 'Ask for one focused change, such as a new background, outfit color, or object replacement.',
      },
      {
        '@type': 'HowToStep',
        name: 'Generate and review',
        text: 'Compare the result with the original and simplify your instruction if too much changed.',
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
        name: 'Is Krea2 Edit free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the browser editor is completely free. No sign-up required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to download or install anything?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Open the editor in a modern browser, upload a photo, and describe the change you want.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I try first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start with a clear photo of one person and ask for one simple change, such as a new background or jacket color.',
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
        <ExplorePageLinks />
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
