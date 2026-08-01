import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { parseLocalizedItems } from '@/lib/marketing-content';
import {
  buildArticleSchema,
  buildFaqSchema,
  buildHowToSchema,
  createMarketingHead,
} from '@/lib/marketing-seo';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales } from '@/paraglide/runtime.js';
import { GuidePage } from '@/blocks/seo-pages';

export const Route = createFileRoute('/guide')({
  loader: () => {
    const locale = getLocale();
    return {
      locale,
      title: m['guide.meta.title']({}, { locale }),
      description: m['guide.meta.description']({}, { locale }),
      steps: parseLocalizedItems(m['guide.tutorial.items']({}, { locale })),
      faq: parseLocalizedItems(m['guide.problems.items']({}, { locale })),
    };
  },
  head: ({ loaderData }) => {
    const d = loaderData!;
    const url = `${envConfigs.app_url}/guide`;
    return createMarketingHead({
      appUrl: envConfigs.app_url,
      path: '/guide',
      locale: d.locale,
      locales,
      title: d.title,
      description: d.description,
      image: '/imgs/edit-jobs/local-object-edit.webp',
      schemas: [
        buildHowToSchema(
          d.title,
          d.description,
          d.steps.map((x) => ({ name: x.title, text: x.description }))
        ),
        buildFaqSchema(
          d.faq.map((x) => ({ question: x.title, answer: x.description }))
        ),
        buildArticleSchema({
          headline: d.title,
          description: d.description,
          url,
          image: `${envConfigs.app_url}/imgs/edit-jobs/local-object-edit.webp`,
        }),
      ],
    });
  },
  component: GuidePage,
});
