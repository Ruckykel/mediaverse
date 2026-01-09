<!-- .github/copilot-instructions.md: Guidance for AI coding agents working on the Mediaverse Next.js site -->
# Mediaverse — AI Agent Instructions

This file gives focused, actionable information for AI coding agents contributing to this repository.

## Big picture
- This is a client-focused Next.js app using the App Router located under `src/app`.
- UI components live in `src/components` and are composed in `src/app/page.tsx` and nested route pages (e.g., `src/app/services/*`).
- Static content/data: small data arrays live under `src/data` (example: `src/data/services.ts`).
- Styling uses Tailwind (see `tailwind.config.js`) with design tokens exposed as CSS variables (e.g. `--color-bg`, `--color-text`) and global CSS in `src/app/globals.css`.

## Primary workflows & commands
- Development (fast refresh, turbopack): `npm run dev` (uses `next dev --turbopack`).
- Build: `npm run build` (uses `next build --turbopack`).
- Start production locally: `npm run start`.
- Lint: `npm run lint` (uses `eslint`).

If you need to run other package managers, the project was scaffolded with create-next-app so `yarn`/`pnpm` are likely compatible.

## Project-specific conventions to follow
- App Router: add pages under `src/app`. A folder `src/app/foo/page.tsx` maps to `/foo`.
- Client components: files that import React hooks or browser APIs include the directive `"use client"` at the top (example: `src/components/Navbar.tsx`).
- Reusable presentational components live in `src/components/*` (examples: `Navbar.tsx`, `Footer.tsx`, `Button.tsx`, `Container.tsx`). Prefer adding small focused components here.
- Fonts are loaded in `src/app/layout.tsx` via `next/font`; prefer using existing variables (e.g., `--font-geist-sans`) rather than adding new global font injections.
- Navigation patterns: internal links use `next/link` and `next/image` for images in `public/`.
- Dropdown/hover interactions: the project uses state-driven hover with careful relatedTarget checks (see `onServicesLeave` in `src/components/Navbar.tsx`) — mirror this approach to avoid flicker.

## Styling and design tokens
- Tailwind config targets `./src/app/**/*` and `./src/components/**/*` (see `tailwind.config.js`). Keep class usage consistent with existing utilities.
- Theme tokens are implemented as CSS variables (see `tailwind.config.js` colors and `src/app/globals.css` for variable definitions). Prefer using these CSS variables when adding color or token changes.

## Dependencies and integrations
- Key dependencies: `next` (v15), `react` (v19), `tailwindcss`, `postcss`, `eslint`.
- No backend code or APIs are present in the repo; features are implemented client-side and route-based. If you need API routes, add them in the appropriate Next.js location and note that none exist currently.

## Tests and CI
- There are no test scripts or CI workflows in the repository. Do not assume tests exist; if adding tests, include scripts in `package.json` and a simple GitHub Actions workflow.

## When editing code — checklist for agents
- Use the App Router and route-folder structure under `src/app`.
- Prefer small, focused component files in `src/components` and reuse `Container`, `Button` where applicable.
- Respect `"use client"` boundaries; move server-only logic to server components (default without `"use client"`).
- Keep Tailwind classes consistent with the project's design tokens.
- Update `README.md` or add short notes if you introduce new developer commands or environment requirements.

## Files to inspect for context
- `src/app/layout.tsx` — app shell, fonts, global layout.
- `src/app/page.tsx` — main homepage composition.
- `src/components/Navbar.tsx` — example of client component + hover/dropdown handling.
- `src/data/services.ts` — canonical small data-format example.
- `tailwind.config.js`, `package.json`, `README.md` — build and styling configuration.

If anything in this file is unclear or you want more examples (component patterns, preferred commit messages, or CI setup), request clarification and I will expand or merge changes.
