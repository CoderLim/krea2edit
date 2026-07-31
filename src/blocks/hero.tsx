import { m } from '@/paraglide/messages.js';

const SPACE_URL = 'https://coderlim-krea2-identity-edit.hf.space';

export function Hero() {
  return (
    <section className="relative z-10" id="try" aria-labelledby="hero-title">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-5 sm:px-6 sm:pt-10">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-emerald-400 uppercase ring-1 ring-emerald-500/20">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
            {m['landing.hero.eyebrow']()}
          </span>
        </div>
        <h1
          id="hero-title"
          className="font-serif text-[clamp(1.85rem,4.2vw,2.85rem)] leading-[1.08] font-semibold tracking-tight text-white"
        >
          {m['landing.hero.headline']()}
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed sm:text-lg">
          {m['landing.hero.subheadline']()}
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_80px_-20px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
          <div className="flex items-center gap-2 border-b border-white/8 bg-[#121214] px-3 py-2.5">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="text-muted-foreground ml-2 truncate font-mono text-[11px] tracking-wide">
              krea2edit.app / editor
            </span>
          </div>
          <iframe
            className="block h-[min(1400px,85vh)] min-h-[720px] w-full bg-[#0b0b0d] sm:h-[1400px] sm:min-h-0"
            title={m['landing.hero.iframe_title']()}
            src={SPACE_URL}
            loading="eager"
            allow="clipboard-read; clipboard-write; fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-muted-foreground mt-3 text-sm">
          {m['landing.hero.iframe_note']()}{' '}
          <a
            href={SPACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Open the Krea2 Edit Hugging Face Space in a new tab"
            className="text-foreground font-medium underline-offset-2 hover:underline"
          >
            coderlim-krea2-identity-edit.hf.space
          </a>
        </p>
      </div>
    </section>
  );
}
