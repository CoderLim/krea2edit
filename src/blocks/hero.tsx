import { m } from '@/paraglide/messages.js';
import { InstallCommand } from '@/components/install-command';

export function Hero() {
  return (
    <section>
      <div>
        <div className="px-5 py-12 sm:px-8 min-[60.0625rem]:pt-20 min-[60.0625rem]:pb-24">
          <div className="mb-5 flex items-center gap-3 font-mono text-xs">
            <span className="bg-brand-soft text-brand-soft-foreground px-2 py-1 font-semibold">
              DScode
            </span>
            <span className="text-muted-foreground">
              {m['landing.hero.badge']()}
            </span>
          </div>

          <h1 className="font-mono text-[22px] leading-[33px] font-bold tracking-[-0.025em] min-[60.0625rem]:text-[38px] min-[60.0625rem]:leading-[57px]">
            {m['landing.hero.headline']()}
          </h1>
          <p className="text-muted-foreground mt-2 mb-8 max-w-[82%] text-[15px] leading-[27px] min-[60.0625rem]:text-base min-[60.0625rem]:leading-8">
            {m['landing.hero.subheadline']()}
          </p>

          <InstallCommand
            copyLabel={m['landing.hero.copy']()}
            copiedLabel={m['landing.hero.copied']()}
            title={m['landing.hero.command_title']()}
            hint={m['landing.hero.requirements']()}
            followUpLabel={m['landing.hero.next_step']()}
            followUpCommand="dscode -C ."
            installAlt={m['landing.hero.install_alt']()}
            installAltCommand={m['landing.hero.install_alt_cmd']()}
          />

          <figure className="mt-10">
            <div className="border-border bg-muted overflow-hidden rounded-[18px] border p-1 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)]">
              <img
                src="/imgs/product/dscode-desktop-preview.webp"
                srcSet="/imgs/product/dscode-desktop-preview-480.webp 480w, /imgs/product/dscode-desktop-preview-720.webp 720w, /imgs/product/dscode-desktop-preview-960.webp 960w, /imgs/product/dscode-desktop-preview.webp 1468w"
                sizes="(max-width: 48rem) calc(100vw - 2.5rem), (max-width: 75rem) calc(100vw - 4rem), 70rem"
                width="1468"
                height="932"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                alt={m['landing.harness.screenshot_alt']()}
                className="bg-background h-auto w-full rounded-[14px]"
              />
            </div>
            <figcaption className="mt-4 flex flex-col items-start gap-3 text-xs leading-6 sm:flex-row sm:items-center">
              <span className="bg-brand-soft text-brand-soft-foreground shrink-0 rounded-[3px] px-2 py-1 font-mono font-semibold">
                {m['landing.harness.screenshot_badge']()}
              </span>
              <span className="text-muted-foreground">
                {m['landing.harness.screenshot_caption']()}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
