import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';

const HF_MODEL = 'https://huggingface.co/conradlocke/krea2-identity-edit';
const COMFY_NODES = 'https://github.com/lbouaraba/comfyui-krea2edit';
const KREA2_PAGE = 'https://www.krea.ai/krea-2';
const SPACE = 'https://coderlim-krea2-identity-edit.hf.space';

/**
 * Fresh SEO body — researched from public sources (HF model card,
 * ComfyUI-Krea2Edit README/CHANGELOG, Krea 2 product page).
 * Structure differs from any prior clone: how-to first, then capability
 * taxonomy, dials, browser-vs-local comparison, FAQ.
 */
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
  ] as const;

  return (
    <article className="relative z-10 border-t border-white/8 bg-[#0c0c0e]">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-foreground/90 text-lg leading-relaxed">
          <strong className="text-white">Krea2 Edit</strong>{' '}
          {m['landing.seo.intro_1']()}
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          {m['landing.seo.intro_2_before']()}{' '}
          <a
            href={HF_MODEL}
            target="_blank"
            rel="noopener noreferrer"
            title={m['landing.seo.hf_model_title']()}
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            conradlocke/krea2-identity-edit
          </a>{' '}
          {m['landing.seo.intro_2_mid_1']()}{' '}
          <a
            href={COMFY_NODES}
            target="_blank"
            rel="noopener noreferrer"
            title={m['landing.seo.comfy_nodes_title']()}
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            ComfyUI-Krea2Edit
          </a>{' '}
          {m['landing.seo.intro_2_mid_2']()}{' '}
          <a
            href={KREA2_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            title={m['landing.seo.krea_page_title']()}
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            krea.ai/krea-2
          </a>
          {m['landing.seo.intro_2_after']()}
        </p>

        {/* —— How-to —— */}
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
          <li className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
              1
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold">
                {m['landing.seo.step_1_title']()}
              </h3>
              <p className="text-muted-foreground mt-1.5 leading-relaxed">
                {m['landing.seo.step_1_body']()}
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
              2
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold">
                {m['landing.seo.step_2_title']()}
              </h3>
              <p className="text-muted-foreground mt-1.5 leading-relaxed">
                {m['landing.seo.step_2_body']()}
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
              3
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold">
                {m['landing.seo.step_3_title']()}
              </h3>
              <p className="text-muted-foreground mt-1.5 leading-relaxed">
                {m['landing.seo.step_3_before_code']()}{' '}
                <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                  ref_boost
                </code>{' '}
                {m['landing.seo.step_3_after_code']()}
              </p>
            </div>
          </li>
        </ol>

        {/* —— Capabilities —— */}
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
          <article className="group overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] transition-[border-color,background-color] duration-300 hover:border-white/14 hover:bg-white/[0.045]">
            <figure className="relative overflow-hidden border-b border-white/8">
              <img
                src="/imgs/edit-jobs/inpaint-try-on.webp"
                alt={m['landing.seo.v12_alt']()}
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
                04
              </span>
              <span className="absolute top-3 right-3 rounded-md bg-black/55 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-white/80 uppercase ring-1 ring-white/12 backdrop-blur-sm sm:top-3.5 sm:right-3.5">
                v1.2
              </span>
            </figure>
            <div className="p-4 sm:p-5">
              <h3 className="font-serif text-lg font-semibold tracking-tight">
                {m['landing.seo.v12_title']()}
              </h3>
              <p className="text-muted-foreground mt-2 text-[0.95rem] leading-relaxed">
                {m['landing.seo.v12_before_code']()}{' '}
                <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                  krea2_identity_edit_v1_2.safetensors
                </code>{' '}
                {m['landing.seo.v12_after_code']()}
              </p>
            </div>
          </article>
        </div>

        {/* —— Settings —— */}
        <h2 className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
          {m['landing.seo.settings_title']()}
        </h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          {m['landing.seo.settings_intro']()}
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm sm:text-[0.95rem]">
            <thead>
              <tr className="bg-white/[0.06]">
                <th className="text-foreground border border-white/10 px-3 py-2.5 text-left font-semibold">
                  {m['landing.seo.table_job_type']()}
                </th>
                <th className="text-foreground border border-white/10 px-3 py-2.5 text-left font-semibold">
                  {m['landing.seo.table_checkpoint']()}
                </th>
                <th className="text-foreground border border-white/10 px-3 py-2.5 text-left font-semibold">
                  {m['landing.seo.table_steps']()}
                </th>
                <th className="text-foreground border border-white/10 px-3 py-2.5 text-left font-semibold">
                  CFG
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted-foreground border border-white/10 px-3 py-2.5">
                  {m['landing.seo.table_turbo_job']()}
                </td>
                <td className="text-muted-foreground border border-white/10 px-3 py-2.5">
                  Krea 2 Turbo
                </td>
                <td className="text-muted-foreground border border-white/10 px-3 py-2.5">
                  8–12
                </td>
                <td className="text-muted-foreground border border-white/10 px-3 py-2.5">
                  1.0
                </td>
              </tr>
              <tr>
                <td className="text-muted-foreground border border-white/10 px-3 py-2.5">
                  {m['landing.seo.table_raw_job']()}
                </td>
                <td className="text-muted-foreground border border-white/10 px-3 py-2.5">
                  Krea 2 Raw
                </td>
                <td className="text-muted-foreground border border-white/10 px-3 py-2.5">
                  ~20
                </td>
                <td className="text-muted-foreground border border-white/10 px-3 py-2.5">
                  3.0
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="text-muted-foreground mt-5 list-disc space-y-2 pl-5 leading-relaxed">
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

        {/* —— Comparison —— */}
        <h2 className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
          {m['landing.seo.comparison_title']()}
        </h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          {m['landing.seo.comparison_intro']()}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
            <h3 className="font-serif text-base font-semibold text-white">
              {m['landing.seo.hosted_title']()}
            </h3>
            <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed">
              <li>{m['landing.seo.hosted_item_1']()}</li>
              <li>{m['landing.seo.hosted_item_2']()}</li>
              <li>{m['landing.seo.hosted_item_3']()}</li>
              <li>
                {m['landing.seo.open_fullscreen']()}{' '}
                <a
                  href={SPACE}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={m['landing.seo.space_title']()}
                  className="text-primary underline-offset-2 hover:underline"
                >
                  hf.space
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
            <h3 className="font-serif text-base font-semibold text-white">
              {m['landing.seo.local_title_comparison']()}
            </h3>
            <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed">
              <li>{m['landing.seo.local_item_1']()}</li>
              <li>{m['landing.seo.local_item_2']()}</li>
              <li>{m['landing.seo.local_item_3']()}</li>
              <li>
                {m['landing.seo.nodes_label']()}{' '}
                <a
                  href={COMFY_NODES}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={m['landing.seo.comfy_repo_title']()}
                  className="text-primary underline-offset-2 hover:underline"
                >
                  github.com/lbouaraba/comfyui-krea2edit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          {m['landing.seo.workflow_note']()}
        </p>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          {m['landing.seo.limits_title']()}
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          {m['landing.seo.limits_body']()}
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          {m['landing.seo.license_before']()}{' '}
          <a
            href="https://www.krea.ai/krea-2-open-source"
            target="_blank"
            rel="noopener noreferrer"
            title={m['landing.seo.license_link_title']()}
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
          {m['landing.seo.license_or']()}{' '}
          <Link
            href="/blog/krea2-edit-model"
            title={m['landing.seo.model_guide_title']()}
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            {m['landing.seo.model_guide_label']()}
          </Link>
          {m['landing.seo.email_before']()}{' '}
          <a
            href="mailto:support@krea2edit.app"
            title={m['landing.seo.email_title']()}
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            support@krea2edit.app
          </a>
          {m['landing.seo.email_after']()}
        </p>

        {/* —— FAQ —— */}
        <h2
          id="faq"
          className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]"
        >
          {m['landing.seo.faq_title']()}
        </h2>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          {m['landing.seo.faq_1_question']()}
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          {m['landing.seo.faq_1_answer']()}
        </p>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          {m['landing.seo.faq_2_question']()}
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          {m['landing.seo.faq_2_answer']()}
        </p>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          {m['landing.seo.faq_3_question']()}
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          {m['landing.seo.faq_3_answer']()}
        </p>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          {m['landing.seo.faq_4_question']()}
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          {m['landing.seo.faq_4_before_link']()}{' '}
          <Link
            href="/sign-up"
            title={m['landing.seo.signup_title']()}
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            {m['landing.seo.signup_label']()}
          </Link>{' '}
          {m['landing.seo.faq_4_after_link']()}
        </p>
      </div>
    </article>
  );
}
