import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';

export function SeoGuide() {
  const jobs = [
    {
      n: '01',
      tag: m['landing.seo.restage'](),
      title: m['landing.seo.restage_title'](),
      body: m['landing.seo.restage_body'](),
      alt: m['landing.seo.restage_alt'](),
      src: '/imgs/edit-jobs/re-staging-with-likeness.webp',
    },
    {
      n: '02',
      tag: m['landing.seo.local'](),
      title: m['landing.seo.local_title'](),
      body: m['landing.seo.local_body'](),
      alt: m['landing.seo.local_alt'](),
      src: '/imgs/edit-jobs/local-object-edit.webp',
    },
    {
      n: '03',
      tag: m['landing.seo.composite'](),
      title: m['landing.seo.composite_title'](),
      body: m['landing.seo.composite_body'](),
      alt: m['landing.seo.composite_alt'](),
      src: '/imgs/edit-jobs/two-reference-scene.webp',
    },
    {
      n: '04',
      tag: m['landing.seo.v12_tag'](),
      title: m['landing.seo.v12_title'](),
      body: m['landing.seo.v12_body'](),
      alt: m['landing.seo.v12_alt'](),
      src: '/imgs/edit-jobs/inpaint-try-on.webp',
    },
  ] as const;

  return (
    <article className="relative z-10 border-t border-white/8 bg-[#0c0c0e]">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-foreground/90 text-lg leading-relaxed">
          <strong className="text-white">Krea2 Edit</strong>{' '}
          {m['landing.seo.intro_1']()}
        </p>

        <h2
          id="how-to"
          className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]"
        >
          {m['landing.seo.how_to_title']()}
        </h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          {m['landing.seo.how_to_intro']()}
        </p>

        <ol className="mt-8 space-y-6">
          {([1, 2, 3] as const).map((step) => (
            <li
              key={step}
              className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 sm:p-5"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                {step}
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold">
                  {m[`landing.seo.step_${step}_title`]()}
                </h3>
                <p className="text-muted-foreground mt-1.5 leading-relaxed">
                  {m[`landing.seo.step_${step}_body`]()}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
          {m['landing.seo.jobs_title']()}
        </h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          {m['landing.seo.jobs_intro']()}
        </p>

        <div className="mt-8 space-y-5">
          {jobs.map((job) => (
            <article
              key={job.n}
              className="group overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] transition-[border-color,background-color] duration-300 hover:border-white/14 hover:bg-white/[0.045]"
            >
              <figure className="relative overflow-hidden border-b border-white/8">
                <img
                  src={job.src}
                  alt={job.alt}
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0c0c0e]/70 to-transparent"
                />
                <span className="absolute top-3 left-3 font-mono text-[11px] tracking-[0.14em] text-white/75 tabular-nums sm:top-3.5 sm:left-3.5">
                  {job.n}
                </span>
                <span className="absolute top-3 right-3 rounded-md bg-black/55 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-white/80 uppercase ring-1 ring-white/12 backdrop-blur-sm sm:top-3.5 sm:right-3.5">
                  {job.tag}
                </span>
              </figure>
              <div className="p-4 sm:p-5">
                <h3 className="font-serif text-lg font-semibold tracking-tight">
                  {job.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-[0.95rem] leading-relaxed">
                  {job.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-muted-foreground mt-10 rounded-xl border border-white/8 bg-white/[0.03] p-5 leading-relaxed">
          {m['landing.seo.advanced_note']()}{' '}
          <Link
            href="/technical"
            title={m['landing.seo.advanced_link']()}
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            {m['landing.seo.advanced_link']()} →
          </Link>
        </p>

        <h2
          id="faq"
          className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]"
        >
          {m['landing.seo.faq_title']()}
        </h2>

        {([1, 2, 3, 4] as const).map((item) => (
          <section key={item}>
            <h3 className="mt-8 font-serif text-lg font-semibold">
              {m[`landing.seo.faq_${item}_question`]()}
            </h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              {m[`landing.seo.faq_${item}_answer`]()}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
