import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { localizeHref } from '@/paraglide/runtime.js';
import { LocaleSelector } from '@/components/locale-selector';

const MODEL_CARD = 'https://huggingface.co/conradlocke/krea2-identity-edit';

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      href: localizeHref('/identity-edit'),
      label: m['marketing.nav.editor'](),
    },
    { href: localizeHref('/guide'), label: m['marketing.nav.guide']() },
    { href: localizeHref('/blog'), label: m['landing.nav.blog']() },
  ];

  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b border-white/8 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="text-foreground flex items-center gap-2.5 no-underline"
          title="Krea2 Edit home"
        >
          <img
            src={envConfigs.app_logo || '/logo.webp'}
            alt="Krea2 Edit logo"
            width={32}
            height={32}
            className="size-8 rounded-md object-contain ring-1 ring-white/10"
          />
          <span className="font-serif text-base font-semibold tracking-tight sm:text-lg">
            Krea2 Edit
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              title={link.label}
              className="text-muted-foreground hover:text-foreground rounded-md px-3 py-1.5 text-sm font-medium no-underline transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href={MODEL_CARD}
            target="_blank"
            rel="noopener noreferrer"
            title="Open the Krea2 Identity Edit model card on Hugging Face"
            className="bg-primary text-primary-foreground hover:bg-primary/90 ml-2 rounded-md px-3.5 py-1.5 text-sm font-semibold no-underline transition-colors"
          >
            {m['landing.nav.model_card']()}
          </a>
          <div className="ml-1">
            <LocaleSelector />
          </div>
        </nav>

        <button
          type="button"
          className="text-foreground rounded-md p-2 hover:bg-white/5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="bg-background absolute inset-x-0 top-full border-b border-white/8 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                title={link.label}
                className="text-muted-foreground hover:text-foreground rounded-md px-3 py-2.5 text-sm font-medium hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={MODEL_CARD}
              target="_blank"
              rel="noopener noreferrer"
              title="Open the Krea2 Identity Edit model card on Hugging Face"
              className="text-foreground px-3 py-2.5 text-sm font-medium"
            >
              {m['landing.nav.model_card']()}
            </a>
            <div className="px-3 pt-2">
              <LocaleSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
