<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project instructions

## Project overview

This repository is the source for Kushagra Agnihotri's personal portfolio website. The root application is a fresh migration target initialized with Next.js 16.4.2. The previous portfolio implementation is retained in `old-portfolio/` as a reference while the new site is rebuilt.

The current root app is still the default scaffold. Do not assume that the new site has already been migrated from the old implementation; copy or redesign functionality deliberately and verify each route as it is introduced.

## Repository layout

- `src/app/` — root Next.js App Router application. Routes and shared layout belong here.
- `src/app/layout.tsx` — root layout, metadata, Geist fonts, and global shell.
- `src/app/globals.css` — global Tailwind CSS entry point and theme variables.
- `src/app/page.tsx` — current placeholder home page; replace it as the new portfolio is built.
- `public/` — static assets for the new app. Add portfolio images, resumes, icons, and other browser-served files here.
- `old-portfolio/` — legacy Next.js 13.4.19 portfolio. Treat it as read-only reference unless a task explicitly asks to modify the legacy app.
- `sitemap.xml` — existing site sitemap; update it when public routes change.

The old implementation is also App Router-based and provides the migration inventory:

- `/` — hero, about, and featured projects
- `/work` — professional summary, builds, experience, certifications, skills, and resume links
- `/portfolio` — searchable/filterable project listing
- `/portfolio/[slug]` — project detail pages
- `/biography` — personal biography and hobbies
- `/contact` — contact form and social links
- `/links` and `/links/[platform]/[[...endpoint]]` — social/link landing pages
- `old-portfolio/src/app/api/` — route handlers backed by local dummy JSON data for projects, skills, experience, certifications, hobbies, socials, tags, and tech; contact is submitted to Formspree

Legacy content and assets live under `old-portfolio/src/dummyData/` and `old-portfolio/public/`. Reuse content only after checking whether it still reflects the current portfolio and personal information.

## Stack and conventions

- Next.js `16.4.2`, React `19.3.0`, TypeScript, and the App Router.
- Tailwind CSS `4` with `@tailwindcss/turbopack`; the root stylesheet currently imports Tailwind with `@import "tailwindcss"`.
- ESLint 10 with flat config in `eslint.config.ts`, using `eslint-config-next` core web vitals and TypeScript rules. `jiti` is required for Node to load the TypeScript config.
- Prettier is a separate formatter configured in `prettier.config.ts`; `eslint-config-prettier` disables conflicting formatting rules inside ESLint but does not run Prettier. The TypeScript Prettier config requires Node.js `>=22.6.0`.
- Package manager: pnpm `12.4.2`. There is currently no tracked lockfile; do not introduce a second package manager or commit generated dependency directories.
- TypeScript path alias: `@/*` resolves to `src/*`.
- Prefer server components by default. Add `"use client"` only for browser state, effects, event handlers, or other client-only APIs.
- Use `next/image` for local images and `next/link` for internal navigation. Keep meaningful alt text and accessible labels.
- Use App Router file conventions deliberately: `page.tsx` and `layout.tsx` expose UI routes, `loading.tsx` provides loading UI, `error.tsx` provides a route error boundary, `not-found.tsx` handles missing content, and `route.ts` is for API endpoints.
- Use `proxy.ts` for request proxying when needed. Do not introduce the older `middleware.ts` convention without checking the Next.js 16 migration guidance.
- Keep route-specific components/styles close to their route. Put genuinely shared UI in `src/components/`; put reusable data/domain helpers in appropriately named `src/lib/`, `src/data/`, or `src/types/` directories as they are introduced.
- Keep portfolio content separate from presentation so projects, experience, skills, certifications, hobbies, and social links can be updated without rewriting layout components.
- Preserve the existing visual identity only when it is an intentional migration choice. The old CSS is split across global, utility, component, and route-specific files; do not copy it wholesale without checking responsive behavior and accessibility.

## Next.js 16 workflow

Before changing Next.js APIs, routing, caching, metadata, or configuration, read the relevant guide under `node_modules/next/dist/docs/` from the repository root. Dependencies are not installed in every checkout, so run `pnpm install` first when that directory is absent. Follow the version-16 guidance and its deprecation notices rather than relying on older Next.js knowledge or the legacy app's patterns.

The current `next.config.ts` enables `cacheComponents`, `partialPrefetching`, and the Tailwind Turbopack loader. Review the Next.js 16 documentation before changing these options or introducing new caching, dynamic route, or prefetch behavior.

With Cache Components enabled:

- Use the `"use cache"` directive and `cacheLife`/`cacheTag` where data or rendered UI should be reusable. Make caching explicit rather than relying on older route-level `dynamic` or `revalidate` assumptions.
- Put uncached request-time work, including `cookies()`, `headers()`, or request-dependent data, behind an appropriate `<Suspense>` boundary so the static shell can prerender and stream dynamic content.
- Avoid carrying forward legacy `dynamic = "force-dynamic"`, `dynamic = "force-static"`, or `dynamic = "error"` settings from the old app without consulting the Cache Components migration guide.

With Partial Prefetching enabled, normal links prefetch a route's App Shell. Use `prefetch={true}` only when URL-specific cached content should also be prefetched, and use `prefetch={false}` when prefetching is undesirable. Validate navigation behavior in a production build; automatic prefetching does not run in the same way during `next dev`.

## Commands

Run from the repository root:

```bash
pnpm install       # install dependencies when needed
pnpm dev           # start local development
pnpm lint          # run ESLint
pnpm typecheck     # generate Next route types and run TypeScript checks
pnpm format        # format root source and configuration files with Prettier
pnpm format:check  # check formatting without changing files
pnpm build         # create a production build
pnpm start         # serve a successful production build
```

Run validation after meaningful changes. At minimum, use `pnpm lint`, `pnpm typecheck`, and `pnpm format:check`; use `pnpm build` when changing routes, metadata, images, configuration, or server/client boundaries.

Current validation note: `old-portfolio/` is intentionally excluded from the root ESLint and Prettier checks because it is a legacy reference implementation. Do not fix or modernize that code unless explicitly asked. New root-app code should be lint-clean and formatted.

## Migration guidance

- The root application is the only target for new work unless the user explicitly asks for a legacy change.
- Use `old-portfolio/` to understand existing content and behavior, but do not assume its Next.js 13.4.19 APIs, client/server boundaries, CSS, or data-fetching patterns are valid in Next.js 16.
- Migrate public routes intentionally and keep links, sitemap entries, resume files, and image paths synchronized.
- Prefer local typed data or a clearly documented data source for the new site. The old app's API routes are local adapters over JSON and are not evidence of a required backend.
- Do not expose secrets or commit `.env*.local` files. Treat external form, analytics, and deployment integrations as explicit configuration work.
- Avoid changing or deleting `old-portfolio/` assets during migration; they are the fallback reference and may be needed to compare visual/content parity.
