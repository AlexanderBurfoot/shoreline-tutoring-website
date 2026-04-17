# Shoreline Tutoring — Web

Marketing and content site for Shoreline Tutoring, built with [Next.js](https://nextjs.org) (App Router), React 19, and TypeScript.

## Requirements

- Node.js 20.9 or later (Next.js 16 requirement)
- npm

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app will be available at http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server with hot reload |
| `npm run build` | Build the production bundle |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint across the project |

## Project structure

```
src/
  app/           # App Router routes, layouts, and API handlers
    api/         # Route handlers (e.g. contact form)
    resources/   # Resources index and article pages
    subjects/    # Subject landing pages
    ...
  components/    # Shared React components
  data/          # Static content (blog posts, subject metadata)
public/          # Static assets served at the site root
```

TypeScript paths are configured so `@/` resolves to `src/` (see [tsconfig.json](tsconfig.json)).

## Tooling

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Linting:** ESLint with `eslint-plugin-react-hooks` and `typescript-eslint` (see [eslint.config.js](eslint.config.js))
- **Config:** Next.js config lives in [next.config.ts](next.config.ts)
