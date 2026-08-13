import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { CTA } from '@/blocks/cta';
import { DeepSeekHarness } from '@/blocks/deepseek-harness';
import { FAQ } from '@/blocks/faq';
import { Features } from '@/blocks/features';
import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import { Hero } from '@/blocks/hero';
import { HowItWorks } from '@/blocks/how-it-works';

/**
 * DSCode official website — open-source coding agent powered by DeepSeek.
 */
function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-screen font-mono text-[15px] lg:pb-16 lg:text-base">
      <Header />
      <main className="mx-auto w-full max-w-6xl">
        <Hero />
        <DeepSeekHarness />
        <Features />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/')({
  loader: async () => {
    const locale = getLocale();
    const title = m['landing.seo.title']({}, { locale });
    const description = m['landing.seo.description']({}, { locale });
    const imageAlt = m['landing.harness.screenshot_alt']({}, { locale });
    const faq = [
      {
        question: m['landing.faq.harness.question']({}, { locale }),
        answer: m['landing.faq.harness.answer']({}, { locale }),
      },
      {
        question: m['landing.faq.desktop.question']({}, { locale }),
        answer: m['landing.faq.desktop.answer']({}, { locale }),
      },
      {
        question: m['landing.faq.install.question']({}, { locale }),
        answer: m['landing.faq.install.answer']({}, { locale }),
      },
      {
        question: m['landing.faq.model.question']({}, { locale }),
        answer: m['landing.faq.model.answer']({}, { locale }),
      },
      {
        question: m['landing.faq.compare.question']({}, { locale }),
        answer: m['landing.faq.compare.answer']({}, { locale }),
      },
      {
        question: m['landing.faq.free.question']({}, { locale }),
        answer: m['landing.faq.free.answer']({}, { locale }),
      },
      {
        question: m['landing.faq.contribute.question']({}, { locale }),
        answer: m['landing.faq.contribute.answer']({}, { locale }),
      },
    ];

    return { locale, title, description, imageAlt, faq };
  },
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'en';
    const title =
      loaderData?.title ??
      m['landing.seo.title']({}, { locale: locale as any });
    const description =
      loaderData?.description ??
      m['landing.seo.description']({}, { locale: locale as any });
    const imageAlt =
      loaderData?.imageAlt ??
      m['landing.harness.screenshot_alt']({}, { locale: locale as any });
    const appUrl = envConfigs.app_url.replace(/\/$/, '');
    const socialImage = `${appUrl}/imgs/product/dscode-desktop-preview.webp`;
    const urlFor = (loc: string) =>
      localizeUrl(`${appUrl}/`, { locale: loc as any }).href;
    const canonicalUrl = urlFor(locale);

    return {
      meta: [
        { title },
        {
          name: 'description',
          content: description,
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:image', content: socialImage },
        { property: 'og:image:width', content: '1468' },
        { property: 'og:image:height', content: '932' },
        { property: 'og:image:alt', content: imageAlt },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: socialImage },
        {
          'script:ld+json': {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'SoftwareApplication',
                '@id': `${canonicalUrl}#software`,
                name: 'DSCode',
                applicationCategory: 'DeveloperApplication',
                description,
                url: canonicalUrl,
                codeRepository: 'https://github.com/thinkany-ai/dscode',
                license: 'https://opensource.org/license/mit',
                isAccessibleForFree: true,
                softwareRequirements: 'Node.js 22.19+ and Git',
                image: socialImage,
              },
              {
                '@type': 'FAQPage',
                '@id': `${canonicalUrl}#faq`,
                mainEntity: (loaderData?.faq ?? []).map((item) => ({
                  '@type': 'Question',
                  name: item.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                  },
                })),
              },
            ],
          },
        },
      ],
      links: [
        { rel: 'canonical', href: urlFor(locale) },
        ...locales.map((loc) => ({
          rel: 'alternate',
          hrefLang: loc,
          href: urlFor(loc),
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: urlFor('en') },
      ],
    };
  },
  component: HomePage,
});
