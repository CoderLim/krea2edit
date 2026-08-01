import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { parseLocalizedItems } from '@/lib/marketing-content';
import {
  buildFaqSchema,
  buildHowToSchema,
  buildWebApplicationSchema,
  createMarketingHead,
} from '@/lib/marketing-seo';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales } from '@/paraglide/runtime.js';
import { NoComfyUiPage } from '@/blocks/seo-pages';

export const Route = createFileRoute('/no-comfyui')({
  loader: () => {
    const locale = getLocale();
    return {
      locale,
      title: m['nocomfy.meta.title']({}, { locale }),
      description: m['nocomfy.meta.description']({}, { locale }),
      steps: parseLocalizedItems(m['nocomfy.start.items']({}, { locale })),
      faq: parseLocalizedItems(m['nocomfy.faq.items']({}, { locale })),
    };
  },
  head: ({ loaderData }) => {
    const d = loaderData!;
    const url = `${envConfigs.app_url}/no-comfyui`;
    return createMarketingHead({
      appUrl: envConfigs.app_url,
      path: '/no-comfyui',
      locale: d.locale,
      locales,
      title: d.title,
      description: d.description,
      image: '/imgs/edit-jobs/re-staging-with-likeness.webp',
      schemas: [
        buildWebApplicationSchema({
          name: d.title,
          description: d.description,
          url,
        }),
        buildHowToSchema(
          d.title,
          d.description,
          d.steps.map((x) => ({ name: x.title, text: x.description }))
        ),
        buildFaqSchema(
          d.faq.map((x) => ({ question: x.title, answer: x.description }))
        ),
      ],
    });
  },
  component: NoComfyUiPage,
});
