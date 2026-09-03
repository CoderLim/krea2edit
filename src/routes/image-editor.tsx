import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { parseLocalizedItems } from '@/lib/marketing-content';
import {
  buildFaqSchema,
  buildWebApplicationSchema,
  createMarketingHead,
  localePageUrl,
} from '@/lib/marketing-seo';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales } from '@/paraglide/runtime.js';
import { ImageEditorPage } from '@/blocks/seo-pages';

export const Route = createFileRoute('/image-editor')({
  loader: () => {
    const locale = getLocale();
    return {
      locale,
      title: m['image.meta.title']({}, { locale }),
      description: m['image.meta.description']({}, { locale }),
      faq: parseLocalizedItems(m['image.faq.items']({}, { locale })),
    };
  },
  head: ({ loaderData }) => {
    const d = loaderData!;
    const url = localePageUrl(envConfigs.app_url, '/image-editor', d.locale);
    return createMarketingHead({
      appUrl: envConfigs.app_url,
      path: '/image-editor',
      locale: d.locale,
      locales,
      title: d.title,
      description: d.description,
      image: '/imgs/edit-jobs/inpaint-try-on.webp',
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
  component: ImageEditorPage,
});
