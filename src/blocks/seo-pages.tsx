import { ArrowRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import {
  parseComparisonRows,
  parseLocalizedItems,
  parsePromptRows,
} from '@/lib/marketing-content';
import { cn } from '@/lib/utils';
import { m } from '@/paraglide/messages.js';
import {
  BeforeAfterGallery,
  ComparisonTable,
  CtaBand,
  EditorEmbed,
  FaqList,
  FeatureGrid,
  PageHero,
  StepList,
} from '@/components/marketing/marketing-primitives';
import { buttonVariants } from '@/components/ui/button';

import { Footer } from './footer';
import { Header } from './header';

const primaryLink = (href: string, label: string) => (
  <Link
    href={href}
    title={label}
    className={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-full px-7')}
  >
    {label}
    <ArrowRight className="size-4" />
  </Link>
);

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-foreground min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

const faqItems = (
  key: 'identity.faq.items' | 'image.faq.items' | 'guide.problems.items'
) =>
  parseLocalizedItems(m[key]()).map((item) => ({
    question: item.title,
    answer: item.description,
  }));

export function IdentityEditPage() {
  const examples = parseLocalizedItems(m['identity.examples.items']());
  const alts = m['identity.examples.alts']().split('|||');
  const images = [
    '/imgs/edit-jobs/re-staging-with-likeness.webp',
    '/imgs/edit-jobs/inpaint-try-on.webp',
    '/imgs/edit-jobs/two-reference-scene.webp',
  ];
  return (
    <Frame>
      <PageHero eyebrow={m['identity.eyebrow']()} title={m['identity.h1']()}>
        {m['identity.intro']()}
      </PageHero>
      <EditorEmbed
        title={m['marketing.editor.title']()}
        note={m['marketing.editor.note']()}
        openLabel={m['marketing.editor.open']()}
      />
      <BeforeAfterGallery
        title={m['identity.examples.title']()}
        intro={m['identity.examples.intro']()}
        items={examples.map((item, i) => ({
          ...item,
          image: images[i]!,
          alt: alts[i]!,
        }))}
      />
      <StepList
        title={m['identity.how.title']()}
        intro={m['identity.how.intro']()}
        items={parseLocalizedItems(m['identity.how.items']())}
      />
      <FeatureGrid
        title={m['identity.use.title']()}
        intro={m['identity.use.intro']()}
        items={parseLocalizedItems(m['identity.use.items']())}
      />
      <FaqList
        title={m['identity.faq.title']()}
        intro={m['identity.faq.intro']()}
        items={faqItems('identity.faq.items')}
      />
      <CtaBand
        title={m['identity.cta.title']()}
        description={m['identity.cta.description']()}
        actions={primaryLink(
          '/identity-edit#page-title',
          m['identity.cta.button']()
        )}
      />
    </Frame>
  );
}

export function GuidePage() {
  const prompts = parsePromptRows(m['guide.prompts.items']());
  const headers = m['guide.prompts.headers']().split('|||');
  return (
    <Frame>
      <article>
        <PageHero eyebrow={m['guide.eyebrow']()} title={m['guide.h1']()}>
          {m['guide.intro']()}
        </PageHero>
        <FeatureGrid
          title={m['guide.needs.title']()}
          intro={m['guide.needs.body']()}
          items={parseLocalizedItems(m['guide.needs.items']())}
        />
        <StepList
          title={m['guide.tutorial.title']()}
          intro={m['guide.tutorial.intro']()}
          items={parseLocalizedItems(m['guide.tutorial.items']())}
        />
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            {m['guide.prompts.title']()}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            {m['guide.prompts.intro']()}
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[680px]">
              <thead className="bg-white/[.05]">
                <tr>
                  <th className="px-5 py-4 text-left">{headers[0]}</th>
                  <th className="px-5 py-4 text-left">{headers[1]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {prompts.map((row) => (
                  <tr key={row.useCase}>
                    <th
                      scope="row"
                      className="px-5 py-4 text-left font-semibold"
                    >
                      {row.useCase}
                    </th>
                    <td className="text-muted-foreground px-5 py-4 font-mono text-sm">
                      {row.prompt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <FaqList
          title={m['guide.problems.title']()}
          intro={m['guide.problems.intro']()}
          items={faqItems('guide.problems.items')}
        />
        <CtaBand
          title={m['guide.try.title']()}
          description={m['guide.try.body']()}
          actions={primaryLink('/identity-edit', m['guide.try.button']())}
        />
        <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold">
            {m['guide.compare.title']()}
          </h2>
          <p className="text-muted-foreground mt-4">
            {m['guide.compare.body']()}
          </p>
          <Link
            href="/vs-krea"
            title={m['guide.compare.link']()}
            className="mt-5 inline-flex text-cyan-300 underline underline-offset-4"
          >
            {m['guide.compare.link']()}
          </Link>
        </section>
      </article>
    </Frame>
  );
}

export function ImageEditorPage() {
  const columns = m['image.compare.columns']().split('|||') as [string, string];
  const rows = parseComparisonRows(m['image.compare.rows']());
  return (
    <Frame>
      <PageHero eyebrow={m['image.eyebrow']()} title={m['image.h1']()}>
        {m['image.intro']()}
      </PageHero>
      <EditorEmbed
        title={m['marketing.editor.title']()}
        note={m['marketing.editor.note']()}
        openLabel={m['marketing.editor.open']()}
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          {m['image.what.title']()}
        </h2>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          {m['image.what.body']()}
        </p>
        <p className="mt-5 text-sm text-cyan-300">
          <Link href="/identity-edit" title={m['marketing.common.try']()}>
            {m['image.powered']()}
          </Link>
        </p>
      </section>
      <FeatureGrid
        title={m['image.use.title']()}
        intro={m['image.use.intro']()}
        items={parseLocalizedItems(m['image.use.items']())}
      />
      <ComparisonTable
        title={m['image.compare.title']()}
        intro={m['image.compare.intro']()}
        columns={columns}
        rows={rows}
      />
      <FaqList
        title={m['image.faq.title']()}
        intro={m['image.faq.intro']()}
        items={faqItems('image.faq.items')}
      />
      <CtaBand
        title={m['image.cta.title']()}
        description={m['image.cta.description']()}
        actions={primaryLink('/identity-edit', m['image.cta.button']())}
      />
    </Frame>
  );
}

export function VsKreaPage() {
  const columns = m['vs.compare.columns']().split('|||') as [string, string];
  return (
    <Frame>
      <PageHero eyebrow={m['vs.eyebrow']()} title={m['vs.h1']()}>
        {m['vs.intro']()}
      </PageHero>
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="font-mono text-xs tracking-[.18em] text-cyan-300 uppercase">
          Decision
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
          {m['vs.status.title']()}
        </h2>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          {m['vs.status.body']()}
        </p>
      </section>
      <ComparisonTable
        title={m['vs.compare.title']()}
        intro={m['vs.compare.intro']()}
        columns={columns}
        rows={parseComparisonRows(m['vs.compare.rows']())}
      />
      <FeatureGrid
        title={m['vs.choose.title']()}
        intro={m['vs.choose.intro']()}
        items={parseLocalizedItems(m['vs.choose.items']())}
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          {m['vs.sources.title']()}
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed">
          {m['vs.sources.body']()}
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm text-cyan-300">
          <a
            href="https://www.krea.ai/blog/krea-edit"
            target="_blank"
            rel="noopener noreferrer"
            title="Krea official Edit product overview"
            className="underline underline-offset-4"
          >
            Krea Edit overview
          </a>
          <a
            href="https://www.krea.ai/features/ai-image-editor"
            target="_blank"
            rel="noopener noreferrer"
            title="Krea official AI image editor features"
            className="underline underline-offset-4"
          >
            Krea AI editor features
          </a>
          <a
            href="https://www.krea.ai/krea-2-open-source"
            target="_blank"
            rel="noopener noreferrer"
            title="Krea 2 official open-source model page"
            className="underline underline-offset-4"
          >
            Krea 2 open source
          </a>
        </div>
      </section>
      <FaqList
        title={m['vs.faq.title']()}
        intro={m['vs.faq.intro']()}
        items={parseLocalizedItems(m['vs.faq.items']()).map((x) => ({
          question: x.title,
          answer: x.description,
        }))}
      />
      <CtaBand
        title={m['vs.cta.title']()}
        description={m['vs.cta.description']()}
        actions={
          <>
            {primaryLink('/identity-edit', m['marketing.common.try']())}
            <Link
              href="/guide"
              title={m['vs.guide.button']()}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'rounded-full px-7'
              )}
            >
              {m['vs.guide.button']()}
            </Link>
          </>
        }
      />
    </Frame>
  );
}

export function NoComfyUiPage() {
  const columns = m['nocomfy.compare.columns']().split('|||') as [
    string,
    string,
  ];
  return (
    <Frame>
      <PageHero eyebrow={m['nocomfy.eyebrow']()} title={m['nocomfy.h1']()}>
        {m['nocomfy.intro']()}
      </PageHero>
      <EditorEmbed
        title={m['marketing.editor.title']()}
        note={m['marketing.editor.note']()}
        openLabel={m['marketing.editor.open']()}
      />
      <ComparisonTable
        title={m['nocomfy.compare.title']()}
        intro={m['nocomfy.compare.intro']()}
        columns={columns}
        rows={parseComparisonRows(m['nocomfy.compare.rows']())}
      />
      <StepList
        title={m['nocomfy.start.title']()}
        intro={m['nocomfy.start.intro']()}
        items={parseLocalizedItems(m['nocomfy.start.items']())}
      />
      <FaqList
        title={m['nocomfy.faq.title']()}
        intro={m['nocomfy.faq.intro']()}
        items={parseLocalizedItems(m['nocomfy.faq.items']()).map((x) => ({
          question: x.title,
          answer: x.description,
        }))}
      />
      <CtaBand
        title={m['nocomfy.cta.title']()}
        description={m['nocomfy.cta.description']()}
        actions={
          <>
            {primaryLink('/identity-edit', m['marketing.common.try']())}
            <Link
              href="/guide"
              title={m['marketing.common.guide']()}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'rounded-full px-7'
              )}
            >
              {m['marketing.common.guide']()}
            </Link>
          </>
        }
      />
    </Frame>
  );
}
