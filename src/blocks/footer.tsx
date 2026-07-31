import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';

const MODEL_CARD = 'https://huggingface.co/conradlocke/krea2-identity-edit';

/** Reciprocal / partner badges — append more entries as exchanges land. */
const PARTNER_BADGES = [
  {
    href: 'https://saasgrow.app?ref=krea2edit.app',
    img: 'https://saasgrow.app/api/badge?type=featured&style=dark',
    alt: 'Krea2 Edit on SaaSGrow',
    width: 240,
    height: 54,
  },
  {
    href: 'https://submitaitools.org',
    img: 'https://submitaitools.org/static_submitaitools/images/submitaitools.png',
    alt: 'Submit AI Tools',
    width: 200,
    height: 60,
  },
  {
    href: 'https://neeed.directory',
    img: 'https://neeed.directory/badges/neeed-badge-dark.svg',
    alt: 'Featured on neeed.directory',
    width: 139,
    height: 40,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 px-4 py-12 sm:px-6">
      <div className="text-muted-foreground mx-auto max-w-6xl text-sm leading-relaxed">
        <p className="text-foreground font-serif text-base font-semibold tracking-tight">
          {m['landing.footer.brand']()}
        </p>
        <p className="mt-3 max-w-2xl">{m['landing.footer.disclaimer']()}</p>
        <p className="mt-2 max-w-2xl">
          {m['landing.footer.model_link_label']()}{' '}
          <a
            href={MODEL_CARD}
            target="_blank"
            rel="noopener noreferrer"
            title="Krea 2 Identity Edit model card"
            className="text-foreground underline-offset-2 hover:underline"
          >
            conradlocke/krea2-identity-edit
          </a>
        </p>
        <p className="mt-2 max-w-2xl">{m['landing.footer.responsible']()}</p>
        <p className="mt-2">
          {m['landing.footer.contact']()}{' '}
          <a
            href="mailto:support@krea2edit.app"
            title="Email Krea2 Edit support"
            className="text-foreground underline-offset-2 hover:underline"
          >
            support@krea2edit.app
          </a>
        </p>

        <div className="mt-8 border-t border-white/10 pt-6">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <Link
              href="/blog"
              title="Krea2 Edit blog"
              className="hover:text-foreground transition-colors"
            >
              {m['landing.nav.blog']()}
            </Link>
            <Link
              href="/privacy-policy"
              title="Privacy Policy"
              className="hover:text-foreground transition-colors"
            >
              {m['landing.footer.privacy']()}
            </Link>
            <Link
              href="/terms-of-service"
              title="Terms of Service"
              className="hover:text-foreground transition-colors"
            >
              {m['landing.footer.terms']()}
            </Link>
            <Link
              href="/#how-to"
              title="How to use Krea2 Edit"
              className="hover:text-foreground transition-colors"
            >
              {m['landing.nav.how']()}
            </Link>
            <Link
              href="/#faq"
              title="Krea2 Edit FAQ"
              className="hover:text-foreground transition-colors"
            >
              {m['landing.nav.faq']()}
            </Link>
          </nav>
          <p className="text-muted-foreground/70 mt-4 text-xs">
            © {new Date().getFullYear()} Krea2 Edit
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-muted-foreground/80 text-[11px] tracking-[0.12em] uppercase">
            {m['landing.footer.partners']()}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
            {PARTNER_BADGES.map((badge) => (
              <a
                key={badge.href}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                title={badge.alt}
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <img
                  src={badge.img}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  loading="lazy"
                  decoding="async"
                  className="h-[54px] w-auto max-w-[240px] rounded-[10px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
