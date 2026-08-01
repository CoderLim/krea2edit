import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { parseLocalizedItems } from '@/lib/marketing-content';
import {
  buildArticleSchema,
  buildFaqSchema,
  createMarketingHead,
} from '@/lib/marketing-seo';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales } from '@/paraglide/runtime.js';
import { TechnicalGuide } from '@/blocks/technical-guide';

export const Route = createFileRoute('/technical')({
  loader: () => {
    const locale = getLocale();
    return {
      locale,
      title: m['technical.meta.title']({}, { locale }),
      description: m['technical.meta.description']({}, { locale }),
      faq: parseLocalizedItems(m['technical.faq.items']({}, { locale })),
    };
  },
  head: ({ loaderData }) => {
    const data = loaderData!;
    const url = `${envConfigs.app_url}/technical`;
    return createMarketingHead({
      appUrl: envConfigs.app_url,
      path: '/technical',
      locale: data.locale,
      locales,
      title: data.title,
      description: data.description,
      image: '/logo-og.png',
      schemas: [
        buildArticleSchema({
          headline: data.title,
          description: data.description,
          url,
          image: `${envConfigs.app_url}/logo-og.png`,
        }),
        buildFaqSchema(
          data.faq.map((item) => ({
            question: item.title,
            answer: item.description,
          }))
        ),
      ],
    });
  },
  component: TechnicalGuide,
});
