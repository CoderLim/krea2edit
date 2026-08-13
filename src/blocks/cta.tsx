import { ArrowUpRight } from 'lucide-react';

import { m } from '@/paraglide/messages.js';

export function CTA() {
  return (
    <section className="px-5 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-base leading-6 font-bold">
          {m['landing.cta.headline']()}
        </h2>
        <p className="text-muted-foreground mt-3 max-w-[90%] text-base leading-8">
          {m['landing.cta.subheadline']()}
        </p>
        <a
          href="https://github.com/thinkany-ai/dscode#quick-start"
          target="_blank"
          rel="noopener noreferrer"
          className="border-border hover:bg-muted focus-visible:ring-ring mt-6 inline-flex min-h-10 items-center gap-2 rounded-[4px] border bg-transparent py-2 pr-3 pl-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          {m['landing.cta.button']()}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
