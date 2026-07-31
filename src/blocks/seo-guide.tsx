import { Link } from '@/core/i18n/navigation';

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
  return (
    <article className="relative z-10 border-t border-white/8 bg-[#0c0c0e]">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-foreground/90 text-lg leading-relaxed">
          <strong className="text-white">Krea2 Edit</strong> is the browser
          entry point for instruction-based, identity-preserving image edits on
          the open Krea 2 stack. Upload a source photo, describe the change in
          plain English, and regenerate only what you asked for — face, outfit
          cues, and unmentioned regions stay put. The live panel above embeds a
          Hugging Face Space so you can validate prompts before installing
          ComfyUI or downloading LoRA weights.
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          This Krea2 Edit site is a community convenience layer, not an official
          Krea.ai product. Under the hood it relies on the unofficial LoRA{' '}
          <a
            href={HF_MODEL}
            target="_blank"
            rel="noopener noreferrer"
            title="Krea 2 Identity Edit LoRA on Hugging Face"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            conradlocke/krea2-identity-edit
          </a>{' '}
          (a fine-tune of Krea 2 Raw) and the matching{' '}
          <a
            href={COMFY_NODES}
            target="_blank"
            rel="noopener noreferrer"
            title="ComfyUI-Krea2Edit node pack on GitHub"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            ComfyUI-Krea2Edit
          </a>{' '}
          dual-conditioning nodes. Official Krea 2 foundation-model docs live at{' '}
          <a
            href={KREA2_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            title="Official Krea 2 foundation model page"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            krea.ai/krea-2
          </a>
          .
        </p>

        {/* —— How-to —— */}
        <h2
          id="how-to"
          className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]"
        >
          How to use Krea2 Edit in the browser
        </h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Search intent for Krea2 Edit is transactional: people want a working
          editor, not a history lesson. Follow this loop against the embedded
          Space (or open it full-screen if the iframe is queued).
        </p>

        <ol className="mt-8 space-y-6">
          <li className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
              1
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold">
                Drop a clear single-subject photo
              </h3>
              <p className="text-muted-foreground mt-1.5 leading-relaxed">
                Sharp faces and readable outfits transfer better on Krea2 Edit.
                The published LoRA guidance prefers generating at or under about
                2 megapixels; oversized sources tend to bleed or duplicate
                detail. Avoid heavily compressed social-media crops when
                likeness matters.
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
              2
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold">
                Write one concrete instruction verb
              </h3>
              <p className="text-muted-foreground mt-1.5 leading-relaxed">
                Examples that match the training card: “create a photo of this
                person at a night market,” “recolor the jacket to rust orange,”
                “replace the coffee cup with a ceramic bowl.” Vague wishes like
                “make it better” waste a queue slot. Leave everything you want
                untouched out of the sentence — Krea2 Edit is trained to
                preserve what you did not name.
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
              3
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold">
                Generate, compare, then dial likeness
              </h3>
              <p className="text-muted-foreground mt-1.5 leading-relaxed">
                Start with the Turbo-style short run the model card recommends
                for most jobs (about 8–12 steps, CFG 1.0). If the face drifts,
                raise reference fidelity carefully (the v1.2{' '}
                <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                  ref_boost
                </code>{' '}
                dial starts near 4 on published workflows). If a deletion fails,
                switch to the Raw recipe (~20 steps, CFG 3.0) and expect
                occasional re-renders instead of clean removals — that limit is
                documented upstream, not a Space bug.
              </p>
            </div>
          </li>
        </ol>

        {/* —— Capabilities —— */}
        <h2 className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
          Edit jobs Krea2 Edit is trained to handle
        </h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          The Hugging Face card groups skills by outcome. Use this taxonomy when
          you decide whether hosted Krea2 Edit is enough, or whether you need a
          local graph with stacked character LoRAs.
        </p>

        <div className="mt-8 space-y-5">
          {(
            [
              {
                n: '01',
                tag: 'Restage',
                title: 'Person re-staging with likeness',
                body: (
                  <>
                    Keep the same face and outfit cues (down to moles and fabric
                    marks on good references) while changing scene, lighting,
                    pose, or camera. Night-market restages are a reliable smoke
                    test: if identity holds after a full relight, your prompt
                    wording is on track for other Krea2 Edit restyles.
                  </>
                ),
                src: '/imgs/edit-jobs/re-staging-with-likeness.webp',
                alt: 'Krea2 Edit person re-staging: same likeness moved from indoor daylight to a night market',
              },
              {
                n: '02',
                tag: 'Local',
                title: 'Local object and attribute edits',
                body: (
                  <>
                    Recolor, add, remove, or replace a region while the rest of
                    the frame stays near the source — a classic Krea2 Edit local
                    job. The trained “replace” verb helps locality. Still
                    compare against the original — local jobs can occasionally
                    shift grade or touch an unintended edge, especially on busy
                    backgrounds.
                  </>
                ),
                src: '/imgs/edit-jobs/local-object-edit.webp',
                alt: 'Krea2 Edit local object edits: jacket, mug, and bag changed while identity stays fixed',
              },
              {
                n: '03',
                tag: 'Composite',
                title: 'Two-reference scene + person composites',
                body: (
                  <>
                    Feed a scene as image 1 and a person as image 2 inside Krea2
                    Edit. That order matches training; swapping them sharply
                    degrades results. For two people, upstream guidance is to
                    chain single-reference inserts rather than force both faces
                    in one pass (faces otherwise drift toward each other).
                  </>
                ),
                src: '/imgs/edit-jobs/two-reference-scene.webp',
                alt: 'Krea2 Edit two-reference composite: rooftop scene plus person reference merged into one shot',
              },
              {
                n: '04',
                tag: 'v1.2',
                title: 'v1.2 extras: sheets, swaps, inpaint, try-on',
                body: (
                  <>
                    The recommended weight{' '}
                    <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                      krea2_identity_edit_v1_2.safetensors
                    </code>{' '}
                    adds character reference-sheet workflows,
                    head/face/eye/person swap (trained partly on stablellama’s
                    MIT swap dataset), outpainting, inpainting, and virtual
                    try-on, plus FIT geometry so mismatched aspect ratios no
                    longer stretch. Confirm the Space’s pinned version before
                    you compare sessions — hosted demos can lag the latest card.
                  </>
                ),
                src: '/imgs/edit-jobs/inpaint-try-on.webp',
                alt: 'Krea2 Edit v1.2 extras UI showing inpaint and try-on tools with before-after slider',
              },
            ] as const
          ).map((job) => (
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

        {/* —— Settings —— */}
        <h2 className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
          Settings that change Krea2 Edit results
        </h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Numbers below come from the public model card and ComfyUI-Krea2Edit
          changelog — use them as defaults when Krea2 Edit exposes matching
          controls, or when you graduate to a local workflow.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm sm:text-[0.95rem]">
            <thead>
              <tr className="bg-white/[0.06]">
                <th className="text-foreground border border-white/10 px-3 py-2.5 text-left font-semibold">
                  Job type
                </th>
                <th className="text-foreground border border-white/10 px-3 py-2.5 text-left font-semibold">
                  Checkpoint
                </th>
                <th className="text-foreground border border-white/10 px-3 py-2.5 text-left font-semibold">
                  Steps
                </th>
                <th className="text-foreground border border-white/10 px-3 py-2.5 text-left font-semibold">
                  CFG
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted-foreground border border-white/10 px-3 py-2.5">
                  Add / recolor / restyle / re-stage
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
                  Removals / large deletions
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
            <strong className="text-foreground">ref_boost ≈ 4</strong> — strong
            likeness starting point on v1.2 nodes; above ~10 starts breaking
            removals; below 1 loosens creativity.
          </li>
          <li>
            <strong className="text-foreground">grounding_px</strong> — lower
            follows the edit more uniformly; higher protects identity. Duplicate
            “split picture” frames usually mean the value is far above the
            trained range (v1.1 docs cite 384–768 as the comfort band).
          </li>
          <li>
            <strong className="text-foreground">LoRA strength 1.0</strong> —
            published default. At CFG above 1, ground the negative with an empty
            prompt plus the same image.
          </li>
          <li>
            Low-VRAM SVD cuts of v1.2 (
            <code className="bg-muted rounded px-1 text-sm">r128</code> ~
            0.91&nbsp;GB,{' '}
            <code className="bg-muted rounded px-1 text-sm">r64</code> ~
            0.46&nbsp;GB) retain &gt;99% of weight energy per the card — useful
            when you leave browser Krea2 Edit for a laptop GPU.
          </li>
        </ul>

        {/* —— Comparison —— */}
        <h2 className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
          Browser Krea2 Edit vs local ComfyUI
        </h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Pick the path that matches your constraint — queue time and zero
          install versus pinned weights and LoRA stacking.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
            <h3 className="font-serif text-base font-semibold text-white">
              Hosted Space (this page)
            </h3>
            <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed">
              <li>No checkpoint download; try Krea2 Edit in minutes</li>
              <li>Good for prompt R&amp;D and client demos on Krea2 Edit</li>
              <li>Depends on Space uptime and shared GPU queues</li>
              <li>
                Open full-screen:{' '}
                <a
                  href={SPACE}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Krea2 Edit Hugging Face Space"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  hf.space
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
            <h3 className="font-serif text-base font-semibold text-white">
              Local ComfyUI-Krea2Edit
            </h3>
            <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed">
              <li>Pin v1.2 weights and FIT / ref_boost node versions</li>
              <li>Stack character, body, or style LoRAs on top</li>
              <li>Needs native Krea 2 + Qwen3-VL encoder support</li>
              <li>
                Nodes:{' '}
                <a
                  href={COMFY_NODES}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ComfyUI-Krea2Edit GitHub repository"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  github.com/lbouaraba/comfyui-krea2edit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          A practical workflow many creators use: prototype copy on Krea2 Edit
          here, log the winning instruction + seed notes, then reproduce locally
          for batch frames. Closed web editors cannot stack arbitrary community
          LoRAs the same way — that composability is why open Krea 2 + this LoRA
          exists.
        </p>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          Limits, license, and responsible use of Krea2 Edit
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          Likeness on Krea2 Edit is described upstream as texture-faithful and
          proportion-conservative: skin and lighting often transfer well, while
          strongly unusual facial geometry may read like a close relative.
          Outfit swaps are hit-or-miss; removals need the Raw recipe and still
          fail sometimes. Extreme hair or body types may need a subject LoRA on
          top.
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Weights are a Derivative Model under the{' '}
          <a
            href="https://www.krea.ai/krea-2-open-source"
            target="_blank"
            rel="noopener noreferrer"
            title="Krea 2 open-source and community license information"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            Krea 2 Community License
          </a>
          . Commercial use is allowed under the published revenue threshold
          (model-card summary: under $1M/year); above that, contact Krea for
          enterprise terms. Deployments should moderate content; AI disclosure
          may apply. The LoRA is SFW-trained — do not create non-consensual or
          harmful likenesses of real people. Read our{' '}
          <Link
            href="/privacy-policy"
            title="Krea2 Edit privacy policy"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link
            href="/terms-of-service"
            title="Krea2 Edit terms of service"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            Terms of Service
          </Link>
          , or read the deep dive on the{' '}
          <Link
            href="/blog/krea2-edit-model"
            title="Krea2 Edit Model community guide"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            Krea2 Edit Model
          </Link>
          . Email{' '}
          <a
            href="mailto:support@krea2edit.app"
            title="Email Krea2 Edit support"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            support@krea2edit.app
          </a>
          .
        </p>

        {/* —— FAQ —— */}
        <h2
          id="faq"
          className="mt-14 font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]"
        >
          FAQ about Krea2 Edit
        </h2>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          Is Krea2 Edit an official Krea feature?
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          No. Official Krea apps ship their own edit surfaces. This Krea2 Edit
          page wraps a community LoRA and Hugging Face Space. It is not
          affiliated with or endorsed by Krea.ai, Inc.
        </p>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          Which weight should I assume the Space uses?
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          Prefer v1.2 when available — it is the recommended build on the model
          card. Always check the Space README or UI footer for the exact
          filename before A/B testing Krea2 Edit across days.
        </p>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          Can I run the same stack offline after trying Krea2 Edit?
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          Yes. Install ComfyUI with native Krea 2 support, add the
          ComfyUI-Krea2Edit pack, load the LoRA, and open a shipped workflow.
          That path is the full twin of the online preview.
        </p>

        <h3 className="mt-8 font-serif text-lg font-semibold">
          What should I try first?
        </h3>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          One clear subject, a Turbo-length run, and a single restage or recolor
          instruction — the safest first Krea2 Edit session. Save prompts that
          work. When you need an account-backed dashboard later, you can{' '}
          <Link
            href="/sign-up"
            title="Create a Krea2 Edit account"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            create an account
          </Link>{' '}
          — the editor above stays usable without signing in.
        </p>
      </div>
    </article>
  );
}
