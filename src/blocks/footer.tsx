import { Github } from 'lucide-react';

import { m } from '@/paraglide/messages.js';
import {
  SiteFooter,
  type FooterColumn,
  type FooterSocial,
} from '@/components/site-footer';

const GITHUB_URL = 'https://github.com/thinkany-ai/dscode';

export function Footer() {
  const columns: FooterColumn[] = [
    {
      title: m['landing.footer.product'](),
      links: [
        {
          label: m['landing.footer.github'](),
          href: GITHUB_URL,
          external: true,
        },
        {
          label: m['landing.footer.readme_zh'](),
          href: 'https://github.com/thinkany-ai/dscode/blob/main/README.zh-CN.md',
          external: true,
        },
      ],
    },
    {
      title: m['landing.footer.resources'](),
      links: [
        {
          label: m['landing.footer.blog'](),
          href: '/blog',
        },
        {
          label: m['landing.footer.docs'](),
          href: `${GITHUB_URL}#quick-start`,
          external: true,
        },
        {
          label: m['landing.footer.comparison'](),
          href: 'https://github.com/thinkany-ai/dscode/blob/main/docs/COMPARISON.en.md',
          external: true,
        },
      ],
    },
    {
      title: m['landing.footer.legal'](),
      links: [
        { label: m['landing.footer.privacy'](), href: '/privacy-policy' },
        { label: m['landing.footer.terms'](), href: '/terms-of-service' },
      ],
    },
  ];

  const socials: FooterSocial[] = [
    { icon: Github, href: GITHUB_URL, label: 'GitHub' },
  ];

  return (
    <SiteFooter
      tagline={m['landing.footer.tagline']()}
      columns={columns}
      socials={socials}
    />
  );
}
