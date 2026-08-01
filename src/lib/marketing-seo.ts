type LocaleLink = {
  rel: string;
  href: string;
  hrefLang?: string;
};

type MetaTag = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
};

type Schema = Record<string, unknown>;

function pageUrl(appUrl: string, path: string, locale: string): string {
  const origin = appUrl.replace(/\/$/, '');
  const pathname = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en'
    ? `${origin}${pathname}`
    : `${origin}/${locale}${pathname}`;
}

export function createMarketingHead(input: {
  appUrl: string;
  path: string;
  locale: string;
  locales: readonly string[];
  title: string;
  description: string;
  image: string;
  schemas: readonly Schema[];
}) {
  const canonical = pageUrl(input.appUrl, input.path, input.locale);
  const image = input.image.startsWith('http')
    ? input.image
    : `${input.appUrl.replace(/\/$/, '')}/${input.image.replace(/^\//, '')}`;
  const links: LocaleLink[] = [
    { rel: 'canonical', href: canonical },
    ...input.locales.map((locale) => ({
      rel: 'alternate',
      hrefLang: locale,
      href: pageUrl(input.appUrl, input.path, locale),
    })),
    {
      rel: 'alternate',
      hrefLang: 'x-default',
      href: pageUrl(input.appUrl, input.path, 'en'),
    },
  ];
  const meta: MetaTag[] = [
    { title: input.title },
    { name: 'description', content: input.description },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: input.title },
    { property: 'og:description', content: input.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: input.title },
    { name: 'twitter:description', content: input.description },
  ];

  return {
    meta,
    links,
    scripts: input.schemas.map((schema, index) => ({
      type: 'application/ld+json',
      children: JSON.stringify(schema),
      key: `marketing-schema-${index}`,
    })),
  };
}

export function buildFaqSchema(
  items: readonly { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function buildHowToSchema(
  name: string,
  description: string,
  steps: readonly { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildArticleSchema(input: {
  headline: string;
  description: string;
  url: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: input.url,
    image: input.image,
    author: { '@type': 'Organization', name: 'Krea2 Edit' },
    publisher: { '@type': 'Organization', name: 'Krea2 Edit' },
  };
}

export function buildWebApplicationSchema(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: input.name,
    description: input.description,
    url: input.url,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript and HTML5',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}
