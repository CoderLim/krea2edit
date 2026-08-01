import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { parseLocalizedItems } from '@/lib/marketing-content';
import {
  buildFaqSchema,
  buildWebApplicationSchema,
  createMarketingHead,
} from '@/lib/marketing-seo';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales } from '@/paraglide/runtime.js';
import { IdentityEditPage } from '@/blocks/seo-pages';

export const Route = createFileRoute('/identity-edit')({
  loader: () => {
    const locale = getLocale();
    return {
      locale,
      title: m['identity.meta.title']({}, { locale }),
      description: m['identity.meta.description']({}, { locale }),
      faq: parseLocalizedItems(m['identity.faq.items']({}, { locale })),
    };
  },
  head: ({ loaderData }) => {
    const d = loaderData!;
    const url = `${envConfigs.app_url}/identity-edit`;
    return createMarketingHead({
      appUrl: envConfigs.app_url,
      path: '/identity-edit',
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
        buildFaqSchema(
          d.faq.map((x) => ({ question: x.title, answer: x.description }))
        ),
      ],
    });
  },
  component: IdentityEditPage,
});
