# Krea2 Edit

Free browser tool for identity-preserving AI image edits — restage subjects, swap objects, and keep likeness without installing ComfyUI.

**Live site:** [krea2edit.app](https://krea2edit.app)

> **Disclaimer:** This is an unofficial community demo. It wraps the community Krea 2 identity-edit LoRA and a [Hugging Face Space](https://huggingface.co/spaces/coderlim/krea2-identity-edit). It is not affiliated with or endorsed by Krea.ai, Inc.

## What it does

- **In-browser editor** — embedded Hugging Face Space on the homepage; no checkpoint downloads required
- **Identity-preserving edits** — change backgrounds, outfits, lighting, or local objects while keeping recognizable faces
- **SEO landing pages** — `/technical`, `/guide`, `/identity-edit`, `/image-editor`, `/no-comfyui`, `/vs-krea`, and more
- **Multi-language** — English, 简体中文, 繁體中文, 日本語, 한국어 (Paraglide JS)
- **Accounts & billing** — optional sign-up, credits, subscriptions, and admin panel (built on the ShipAny SaaS engine)

## Quick Start (local dev)

```bash
pnpm install
cp .env.example .env.development   # set AUTH_SECRET, VITE_APP_NAME, etc.
pnpm db:push
pnpm rbac:init --admin-email=admin@example.com --admin-password=your-password
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Default admin after `rbac:init` can sign in at `/admin`.

> Local env lives in `.env.development` (gitignored). Both Vite and `db:*` scripts load it. Minimum to boot: `VITE_APP_URL`, `VITE_APP_NAME`, `DATABASE_PROVIDER`, `DATABASE_URL`, `AUTH_SECRET`.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (Vite 8 + Nitro, React 19, TypeScript)
- shadcn/ui v4, Tailwind CSS 4
- TanStack Query, Form, Table
- better-auth + Drizzle ORM (SQLite / PostgreSQL / MySQL / D1)
- Paraglide JS for i18n

## Project Structure

```
src/
├── blocks/           # Page sections (hero, header, footer, seo-guide, …)
├── components/       # Reusable UI (marketing primitives, site chrome, shadcn)
├── routes/           # File-based routes
│   ├── index.tsx     # Homepage with embedded editor
│   ├── technical.tsx # Model & workflow guide
│   ├── guide.tsx     # How-to page
│   └── api/          # REST endpoints
├── content/pages/    # MDX static pages (privacy, terms)
├── messages/         # i18n source (en, zh, zh-TW, ja, ko)
├── core/             # Auth, db, payment, email, storage, AI
└── modules/          # Business logic (credits, subscriptions, rbac, …)
```

The live editor iframe points at the Hugging Face Space (`src/blocks/hero.tsx`). Update `SPACE_URL` there (and in `src/components/marketing/marketing-primitives.tsx`) if you host your own Space.

## Commands

| Command            | Description                                    |
| ------------------ | ---------------------------------------------- |
| `pnpm dev`         | Start dev server (port 3000)                   |
| `pnpm build`       | Production build                               |
| `pnpm start`       | Run production server                          |
| `pnpm cf:build`    | Build for Cloudflare Workers                   |
| `pnpm cf:deploy`   | Deploy to Cloudflare (reads `.env.production`) |
| `pnpm db:push`     | Push schema to database (dev)                  |
| `pnpm db:generate` | Generate migration SQL (production)            |
| `pnpm db:migrate`  | Run migrations (production)                    |
| `pnpm db:studio`   | Drizzle Studio GUI                             |
| `pnpm rbac:init`   | Create roles, permissions, optional admin user |

## Deploy (Cloudflare)

Production uses Cloudflare Workers + D1 (`wrangler.jsonc`). See `.claude/skills/deploy-cloudflare/SKILL.md` for the full checklist.

```bash
cp .env.example .env.production   # production secrets
pnpm cf:deploy
```

## Environment Variables

```env
# Required
VITE_APP_URL=http://localhost:3000
VITE_APP_NAME=Krea2 Edit
DATABASE_PROVIDER=sqlite
DATABASE_URL=file:data/local.db
AUTH_SECRET=generate-with-openssl-rand-base64-32

# Optional
VITE_DEFAULT_LOCALE=en
CONFIG_ENCRYPTION_KEY=           # encrypts admin Settings secrets in DB
```

Payment, OAuth, email, storage, and AI provider keys are configured in the admin panel → Settings (not in `.env`).

## License

Proprietary. See [LICENSE](./LICENSE).
