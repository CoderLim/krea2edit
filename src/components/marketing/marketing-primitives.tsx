import type { ReactNode } from 'react';

const SPACE_URL = 'https://coderlim-krea2-identity-edit.hf.space';

export function EditorEmbed({
  title,
  note,
  openLabel,
}: {
  title: string;
  note: string;
  openLabel: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
      <div className="overflow-hidden rounded-2xl bg-[#0b0b0d] shadow-[0_32px_100px_-36px_rgba(34,211,238,0.3)] ring-1 ring-white/12">
        <div className="flex items-center gap-2 border-b border-white/8 bg-[#121214] px-4 py-3">
          <span className="size-2.5 rounded-full bg-rose-400/60" />
          <span className="size-2.5 rounded-full bg-amber-300/60" />
          <span className="size-2.5 rounded-full bg-emerald-300/60" />
          <span className="text-muted-foreground ml-2 truncate font-mono text-[11px] tracking-wide">
            krea2edit.app / live editor
          </span>
        </div>
        <iframe
          className="block h-[min(1400px,85vh)] min-h-[720px] w-full bg-[#0b0b0d] sm:h-[1400px] sm:min-h-0"
          title={title}
          src={SPACE_URL}
          loading="eager"
          allow="clipboard-read; clipboard-write; fullscreen"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-muted-foreground mt-3 text-sm">
        {note}{' '}
        <a
          href={SPACE_URL}
          target="_blank"
          rel="noopener noreferrer"
          title={openLabel}
          className="text-foreground font-medium underline underline-offset-4"
        >
          {openLabel}
        </a>
      </p>
    </div>
  );
}

export function FaqList({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: readonly { question: string; answer: ReactNode }[];
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-cyan-300 uppercase">
            FAQ
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {items.map((item) => (
            <article key={item.question} className="py-6">
              <h3 className="font-serif text-lg font-semibold">
                {item.question}
              </h3>
              <div className="text-muted-foreground mt-2 leading-relaxed">
                {item.answer}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type GalleryItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export function BeforeAfterGallery({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly GalleryItem[];
}) {
  return (
    <section className="border-y border-white/8 bg-white/[0.018] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-cyan-300 uppercase">
            Before / after
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">{intro}</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <figure
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute top-3 left-3 rounded-full bg-black/65 px-2.5 py-1 font-mono text-[10px] tracking-widest text-white uppercase backdrop-blur">
                  0{index + 1}
                </span>
              </div>
              <figcaption className="p-5">
                <h3 className="font-serif text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StepList({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly { title: string; description: ReactNode }[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-[0.18em] text-cyan-300 uppercase">
          Workflow
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">{intro}</p>
      </div>
      <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.title} className="bg-background p-6 sm:p-8">
            <span className="font-mono text-xs text-cyan-300">
              0{index + 1}
            </span>
            <h3 className="mt-8 font-serif text-xl font-semibold">
              {item.title}
            </h3>
            <div className="text-muted-foreground mt-3 leading-relaxed">
              {item.description}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden" aria-labelledby="page-title">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-16rem] left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20 sm:pb-12">
        <p className="font-mono text-xs tracking-[0.18em] text-cyan-300 uppercase">
          {eyebrow}
        </p>
        <h1
          id="page-title"
          className="mt-4 max-w-4xl font-serif text-[clamp(2.35rem,7vw,5.7rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-white"
        >
          {title}
        </h1>
        <div className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
          {children}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly { title: string; description: ReactNode }[];
}) {
  return (
    <section className="border-y border-white/8 bg-white/[0.018] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {intro}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="min-h-48 rounded-2xl border border-white/10 bg-black/20 p-6 transition-colors hover:border-cyan-300/25"
              >
                <span className="font-mono text-xs text-cyan-300">
                  0{index + 1}
                </span>
                <h3 className="mt-8 font-serif text-xl font-semibold">
                  {item.title}
                </h3>
                <div className="text-muted-foreground mt-3 leading-relaxed">
                  {item.description}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComparisonTable({
  title,
  intro,
  columns,
  rows,
}: {
  title: string;
  intro: string;
  columns: readonly [string, string];
  rows: readonly { label: string; values: readonly [string, string] }[];
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-2xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">{intro}</p>
      </div>
      <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead className="bg-white/[0.055]">
            <tr>
              <th className="px-5 py-4 font-medium">&nbsp;</th>
              {columns.map((column) => (
                <th key={column} className="px-5 py-4 font-serif font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row) => (
              <tr key={row.label} className="bg-black/15">
                <th scope="row" className="px-5 py-4 font-semibold">
                  {row.label}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.label}-${index}`}
                    className="text-muted-foreground px-5 py-4"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions: ReactNode;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.055] px-6 py-12 text-center sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="absolute inset-x-20 -top-24 h-40 bg-cyan-300/15 blur-3xl"
        />
        <div className="relative">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExplorePages({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly { href: string; title: string; description: string }[];
}) {
  return (
    <section className="border-y border-white/8 bg-[#090b0d] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-cyan-300 uppercase">
              Directory
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              {title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            {intro}
          </p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              title={item.title}
              className="group min-h-52 bg-[#0d0f12] p-6 no-underline transition-colors hover:bg-cyan-300/[0.06]"
            >
              <span className="font-mono text-xs text-cyan-300">
                0{index + 1}
              </span>
              <h3 className="mt-12 font-serif text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {item.description}
              </p>
              <span className="mt-5 inline-block text-cyan-300 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
