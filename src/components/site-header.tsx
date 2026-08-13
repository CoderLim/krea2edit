import { useState } from 'react';
import { ArrowDownToLine, Github, Menu, X } from 'lucide-react';

import { useSession } from '@/core/auth/client';
import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { cn } from '@/lib/utils';
import { DscodeLogo } from '@/components/dscode-logo';
import { LocaleSelector } from '@/components/locale-selector';
import { SiteUserMenu } from '@/components/site-user-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';

export interface NavLink {
  href: string;
  label: string;
  /** Open in a new tab. Off-site (http) hrefs always open in a new tab. */
  external?: boolean;
}

/** Off-site URLs render as plain <a>; internal paths use the locale-aware Link. */
const isExternalHref = (href: string) => /^https?:\/\//.test(href);
const GITHUB_URL = 'https://github.com/thinkany-ai/dscode';

export function SiteHeader({
  navLinks,
  ctaHref = '/settings',
  ctaLabel,
}: {
  navLinks?: NavLink[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="focus-visible:ring-ring flex items-center outline-none focus-visible:ring-2"
        >
          <DscodeLogo className="mr-0.5 size-9" />
          <span className="text-base font-bold tracking-[-0.04em]">
            {envConfigs.app_name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 min-[56rem]:flex">
          {navLinks?.map((link) =>
            isExternalHref(link.href) ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring text-[13px] font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-2"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring text-[13px] font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-2"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-1 min-[56rem]:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DSCode on GitHub"
            className="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring inline-flex size-9 items-center justify-center rounded transition-colors outline-none focus-visible:ring-2"
          >
            <Github className="size-[18px]" />
          </a>
          <LocaleSelector />
          <ThemeToggle />
          {user ? (
            <SiteUserMenu
              name={user.name || 'User'}
              email={user.email}
              image={user.image}
            />
          ) : ctaLabel ? (
            <Link
              href={ctaHref}
              className={cn(
                buttonVariants(),
                'bg-brand-soft text-brand-soft-foreground hover:bg-brand/20 dark:hover:bg-brand/25 ml-2 h-9 gap-1.5 rounded px-3 text-xs font-semibold shadow-none'
              )}
            >
              {ctaLabel}
              <ArrowDownToLine className="size-3.5" />
            </Link>
          ) : null}
        </div>

        {/* Mobile toggle */}
        <button
          className="hover:bg-muted focus-visible:ring-ring -mr-2 p-2 outline-none focus-visible:ring-2 min-[56rem]:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-background absolute inset-x-0 top-20 min-h-[calc(100dvh-5rem)] shadow-lg min-[56rem]:hidden">
          <nav className="flex flex-col">
            {navLinks?.map((link) =>
              isExternalHref(link.href) ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:bg-muted px-6 py-5 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  className="text-foreground hover:bg-muted px-6 py-5 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="flex items-center gap-2 px-6 py-5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DSCode on GitHub"
              className="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring inline-flex size-9 items-center justify-center rounded transition-colors outline-none focus-visible:ring-2"
            >
              <Github className="size-[18px]" />
            </a>
            <LocaleSelector />
            <ThemeToggle />
            <div className="flex-1" />
            {user ? (
              <SiteUserMenu
                name={user.name || 'User'}
                email={user.email}
                image={user.image}
              />
            ) : ctaLabel ? (
              <Link
                href={ctaHref}
                className={cn(
                  buttonVariants(),
                  'bg-brand-soft text-brand-soft-foreground hover:bg-brand/20 dark:hover:bg-brand/25 h-9 gap-1.5 rounded px-3 text-xs font-semibold shadow-none'
                )}
                onClick={() => setMobileOpen(false)}
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
}
