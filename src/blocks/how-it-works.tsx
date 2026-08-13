import { m } from '@/paraglide/messages.js';

export function HowItWorks() {
  const steps = [
    {
      caption: 'Fig 1. install',
      title: m['landing.how.install.title'](),
      description: m['landing.how.install.description'](),
      lines: ['$ npm i -g @thinkany/dscode', '✓ dscode installed'],
    },
    {
      caption: 'Fig 2. connect',
      title: m['landing.how.login.title'](),
      description: m['landing.how.login.description'](),
      lines: ['$ dscode login', '✓ DeepSeek connected'],
    },
    {
      caption: 'Fig 3. patch',
      title: m['landing.how.run.title'](),
      description: m['landing.how.run.description'](),
      lines: ['$ dscode -C ./repo', '› inspect → edit → test'],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 px-5 py-12 sm:px-8 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-foreground font-mono text-base leading-6 font-bold">
          {m['landing.how.title']()}
        </h2>
        <p className="text-muted-foreground mt-2 max-w-3xl font-mono text-base leading-8">
          {m['landing.how.description']()}
        </p>

        <div className="mt-12 grid gap-0 sm:grid-cols-3 sm:gap-12 xl:gap-16">
          {steps.map(({ caption, title, description, lines }) => (
            <figure key={caption} className="py-5 sm:py-0">
              <div className="border-border text-foreground flex min-h-24 flex-col justify-center border-y py-4 font-mono text-xs sm:h-40 sm:py-0">
                <div className="border-border text-muted-foreground border-b px-3 pb-3 sm:mb-4">
                  {caption.replace('Fig ', 'trace_').replace('. ', '/')}
                </div>
                <div className="space-y-2 px-3 pt-3 sm:pt-0">
                  {lines.map((line, lineIndex) => (
                    <p
                      key={line}
                      className={
                        lineIndex === 0
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <figcaption className="text-muted-foreground mt-3 font-mono text-[13px] leading-5">
                {caption}
              </figcaption>
              <h3 className="text-foreground mt-4 font-mono text-sm leading-6 font-medium">
                {title}
              </h3>
              <p className="text-muted-foreground mt-1 text-sm leading-6">
                {description}
              </p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
