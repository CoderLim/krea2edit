import { Check } from 'lucide-react';

import { m } from '@/paraglide/messages.js';

const GITHUB_URL = 'https://github.com/thinkany-ai/dscode';

export function Features() {
  const features = [
    {
      title: m['landing.features.deepseek.title'](),
      description: m['landing.features.deepseek.description'](),
    },
    {
      title: m['landing.features.cost.title'](),
      description: m['landing.features.cost.description'](),
    },
    {
      title: m['landing.features.parallel.title'](),
      description: m['landing.features.parallel.description'](),
    },
    {
      title: m['landing.features.local.title'](),
      description: m['landing.features.local.description'](),
    },
    {
      title: m['landing.features.sandbox.title'](),
      description: m['landing.features.sandbox.description'](),
    },
    {
      title: m['landing.features.workflow.title'](),
      description: m['landing.features.workflow.description'](),
    },
    {
      title: m['landing.features.opensource.title'](),
      description: m['landing.features.opensource.description'](),
    },
  ];

  return (
    <section id="features" className="px-5 py-12 sm:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-foreground font-mono text-base leading-6 font-bold">
          {m['landing.features.title']()}
        </h2>
        <p className="text-muted-foreground mt-2 max-w-3xl font-mono text-base leading-8">
          {m['landing.features.description']()}
        </p>

        <div className="mt-8 max-w-5xl">
          {features.map(({ title, description }, index) => (
            <div
              key={`${title}-${index}`}
              className="mb-4 flex items-start font-mono text-sm leading-[1.8] last:mb-0 md:text-base md:leading-8"
            >
              <span
                aria-hidden="true"
                className="text-brand mt-1 mr-4 inline-flex size-5 shrink-0 items-center justify-center"
              >
                <Check className="size-4" strokeWidth={2.4} />
              </span>
              <p>
                <strong className="mr-3 font-medium">{title}</strong>
                <span className="text-muted-foreground">{description}</span>
              </p>
            </div>
          ))}
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-brand-soft text-brand-soft-foreground focus-visible:outline-brand mt-8 inline-flex items-center gap-3 rounded-[4px] px-3 py-2 font-mono text-xs font-semibold transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {m['landing.footer.github']()}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
