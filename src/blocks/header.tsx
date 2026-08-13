import { m } from '@/paraglide/messages.js';
import { SiteHeader } from '@/components/site-header';

export function Header() {
  const navLinks = [
    { href: '/#deepseek-harness', label: m['landing.nav.harness']() },
    { href: '/#features', label: m['landing.nav.features']() },
    { href: '/#how-it-works', label: m['landing.nav.how']() },
    { href: '/#faq', label: m['landing.nav.faq']() },
  ];

  return (
    <SiteHeader
      navLinks={navLinks}
      ctaHref="/#how-it-works"
      ctaLabel={m['landing.nav.install']()}
    />
  );
}
