# Next.js UI Scaffold

## Purpose

This version adds a navigable Next.js App Router prototype to the product-definition bundle.

The goal is to validate product shape and workflow before connecting persistent infrastructure.

## Implemented routes

- `/login`
- `/dashboard`
- `/company`
- `/projects`
- `/projects/new`
- `/projects/[id]`
- `/projects/[id]/edit`
- `/projects/[id]/evidence`
- `/experience`
- `/experience/new`
- `/documents`
- `/share/[token]`

`/` redirects to `/dashboard`.

## Current behavior

The UI reads from typed mock data in `src/lib/mock-data.ts`.

Buttons that will eventually mutate data or generate PDFs are intentionally non-persistent placeholders.

This lets us refine:

- Navigation
- Page hierarchy
- Project presentation
- Evidence grouping
- Completeness language
- Portfolio-building workflow
- Mobile web layout

before adding Supabase complexity.

## Next implementation boundary

The next technical pass should wire, in order:

1. Supabase clients/environment
2. Auth
3. Organization creation/membership
4. RLS-tested project queries/mutations
5. Evidence storage
6. PDF generation

## Run locally

Requirements:

- Node.js 20.9+

Then:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful quality checks after dependencies are installed:

```bash
npm run typecheck
npm run lint
npm run build
```

## Important

The seed company and projects are fictional demo data. They must never be presented as real contractor history.
