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
import { VsKreaPage } from '@/blocks/seo-pages';

export const Route = createFileRoute('/vs-krea')({
  loader: () => {
    const locale = getLocale();
    return {
      locale,
      title: m['vs.meta.title']({}, { locale }),
      description: m['vs.meta.description']({}, { locale }),
      faq: parseLocalizedItems(m['vs.faq.items']({}, { locale })),
    };
  },
  head: ({ loaderData }) =>
    createMarketingHead({
      appUrl: envConfigs.app_url,
      path: '/vs-krea',
      locale: loaderData!.locale,
      locales,
      title: loaderData!.title,
      description: loaderData!.description,
      image: '/logo-og.png',
      schemas: [
        buildArticleSchema({
          headline: loaderData!.title,
          description: loaderData!.description,
          url: `${envConfigs.app_url}/vs-krea`,
          image: `${envConfigs.app_url}/logo-og.png`,
        }),
        buildFaqSchema(
          loaderData!.faq.map((x) => ({
            question: x.title,
            answer: x.description,
          }))
        ),
      ],
    }),
  component: VsKreaPage,
});
