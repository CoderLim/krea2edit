import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';

export function DeepSeekHarness() {
  const layers = [
    {
      title: m['landing.harness.code.title'](),
      description: m['landing.harness.code.description'](),
    },
    {
      title: m['landing.harness.runtime.title'](),
      description: m['landing.harness.runtime.description'](),
    },
    {
      title: m['landing.harness.result.title'](),
      description: m['landing.harness.result.description'](),
    },
  ];

  return (
    <section
      id="deepseek-harness"
      className="border-border border-y px-5 py-12 sm:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-brand font-mono text-[11px] font-semibold tracking-[0.16em] uppercase">
          {m['landing.harness.eyebrow']()}
        </p>

        <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="max-w-lg font-mono text-xl leading-8 font-bold tracking-[-0.02em] md:text-2xl md:leading-9">
              {m['landing.harness.title']()}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-[15px] leading-8">
              {m['landing.harness.description']()}
            </p>
            <Link
              href="/blog/what-is-a-deepseek-harness"
              className="text-foreground focus-visible:ring-ring mt-5 inline-flex font-mono text-sm font-semibold underline underline-offset-4 outline-none hover:no-underline focus-visible:ring-2"
            >
              {m['landing.harness.guide']()}
            </Link>
          </div>

          <dl className="border-border divide-border divide-y border-y">
            {layers.map((layer) => (
              <div
                key={layer.title}
                className="grid gap-2 py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="font-mono text-sm font-semibold">
                  {layer.title}
                </dt>
                <dd className="text-muted-foreground text-sm leading-7">
                  {layer.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="mt-12">
          <div className="border-border bg-muted overflow-hidden rounded-[18px] border p-1 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)]">
            <img
              src="/imgs/product/dscode-artifact-preview.webp"
              width="1660"
              height="939"
              loading="lazy"
              decoding="async"
              alt={m['landing.harness.artifact_alt']()}
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
    </section>
  );
}
