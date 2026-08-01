import { ArrowRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { parseLocalizedItems } from '@/lib/marketing-content';
import { cn } from '@/lib/utils';
import { m } from '@/paraglide/messages.js';
import { FaqList, PageHero } from '@/components/marketing/marketing-primitives';
import { buttonVariants } from '@/components/ui/button';

import { Footer } from './footer';
import { Header } from './header';

const HF_MODEL = 'https://huggingface.co/conradlocke/krea2-identity-edit';
const COMFY_NODES = 'https://github.com/lbouaraba/comfyui-krea2edit';
const KREA2_PAGE = 'https://www.krea.ai/krea-2-open-source';
const SPACE = 'https://coderlim-krea2-identity-edit.hf.space';

const cell =
  'text-muted-foreground border border-white/10 px-3 py-2.5 text-left';

export function TechnicalGuide() {
  const faq = parseLocalizedItems(m['technical.faq.items']()).map((item) => ({
    question: item.title,
    answer: item.description,
  }));

  return (
    <div className="text-foreground min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow={m['technical.eyebrow']()}
          title={m['technical.h1']()}
        >
          {m['technical.intro']()}
        </PageHero>

        <article className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 sm:pb-28">
          <section>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {m['technical.weights.title']()}
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {m['technical.weights.body']()}
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-muted-foreground text-sm">Recommended file</p>
              <code className="mt-2 block overflow-x-auto text-sm text-cyan-300">
                krea2_identity_edit_v1_2.safetensors
              </code>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {m['landing.seo.settings_title']()}
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {m['technical.settings.note']()}
            </p>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm sm:text-[0.95rem]">
                <thead>
                  <tr className="bg-white/[0.06]">
                    <th className={cell}>
                      {m['landing.seo.table_job_type']()}
                    </th>
                    <th className={cell}>
                      {m['landing.seo.table_checkpoint']()}
                    </th>
                    <th className={cell}>{m['landing.seo.table_steps']()}</th>
                    <th className={cell}>CFG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cell}>
                      {m['landing.seo.table_turbo_job']()}
                    </td>
                    <td className={cell}>Krea 2 Turbo</td>
                    <td className={cell}>8–12</td>
                    <td className={cell}>1.0</td>
                  </tr>
                  <tr>
                    <td className={cell}>{m['landing.seo.table_raw_job']()}</td>
                    <td className={cell}>Krea 2 Raw</td>
                    <td className={cell}>~20</td>
                    <td className={cell}>3.0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="text-muted-foreground mt-6 list-disc space-y-3 pl-5 leading-relaxed">
              <li>
                <strong className="text-foreground">ref_boost ≈ 4</strong>{' '}
                {m['landing.seo.ref_boost_note']()}
              </li>
              <li>
                <strong className="text-foreground">grounding_px</strong>{' '}
                {m['landing.seo.grounding_note']()}
              </li>
              <li>
                <strong className="text-foreground">LoRA strength 1.0</strong>{' '}
                {m['landing.seo.lora_strength_note']()}
              </li>
              <li>
                {m['landing.seo.low_vram_before']()}{' '}
                <code className="bg-muted rounded px-1 text-sm">r128</code> ~
                0.91&nbsp;GB,{' '}
                <code className="bg-muted rounded px-1 text-sm">r64</code> ~
                0.46&nbsp;GB) {m['landing.seo.low_vram_after']()}
              </li>
            </ul>
          </section>

          <section className="mt-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {m['landing.seo.comparison_title']()}
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {m['technical.comparison.note']()}
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                <h3 className="font-serif text-lg font-semibold text-white">
                  {m['landing.seo.hosted_title']()}
                </h3>
                <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  <li>{m['landing.seo.hosted_item_1']()}</li>
                  <li>{m['landing.seo.hosted_item_2']()}</li>
                  <li>{m['landing.seo.hosted_item_3']()}</li>
                  <li>
                    <a
                      href={SPACE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-2 hover:underline"
                    >
                      {m['landing.seo.open_fullscreen']()} hf.space
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                <h3 className="font-serif text-lg font-semibold text-white">
                  {m['landing.seo.local_title_comparison']()}
                </h3>
                <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  <li>{m['landing.seo.local_item_1']()}</li>
                  <li>{m['landing.seo.local_item_2']()}</li>
                  <li>{m['landing.seo.local_item_3']()}</li>
                  <li>
                    <a
                      href={COMFY_NODES}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-2 hover:underline"
                    >
                      ComfyUI-Krea2Edit on GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {m['landing.seo.limits_title']()}
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {m['landing.seo.limits_body']()}
            </p>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {m['landing.seo.license_before']()}{' '}
              <a
                href={KREA2_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium underline-offset-2 hover:underline"
              >
                Krea 2 Community License
              </a>
              {m['landing.seo.license_after']()}{' '}
              <Link
                href="/privacy-policy"
                title={m['landing.seo.privacy_title']()}
                className="text-primary font-medium underline-offset-2 hover:underline"
              >
                {m['landing.seo.privacy_label']()}
              </Link>{' '}
              {m['landing.seo.license_and']()}{' '}
              <Link
                href="/terms-of-service"
                title={m['landing.seo.terms_title']()}
                className="text-primary font-medium underline-offset-2 hover:underline"
              >
                {m['landing.seo.terms_label']()}
              </Link>
              .
            </p>
          </section>

          <section className="mt-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {m['technical.sources.title']()}
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {m['technical.sources.intro']()}
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-cyan-300">
              <a
                href={HF_MODEL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Hugging Face model card
              </a>
              <a
                href={COMFY_NODES}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                ComfyUI node repository
              </a>
              <a
                href={KREA2_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Krea 2 open-source page
              </a>
              <a
                href={SPACE}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Hosted Space
              </a>
            </div>
          </section>
        </article>

        <FaqList
          title={m['technical.faq.title']()}
          intro={m['technical.faq.intro']()}
          items={faq}
        />

        <div className="mx-auto flex max-w-4xl justify-center px-4 pb-24 sm:px-6">
          <Link
            href="/#try"
            title={m['technical.back']()}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'gap-2 rounded-full px-7'
            )}
          >
            {m['technical.back']()}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
