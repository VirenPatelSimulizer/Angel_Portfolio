# Angel Singh — Portfolio

Personal portfolio website for Angel Singh — Class 12 student (Biology, Chemistry & Physics), Seth M.R. Jaipuria School.

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) (`HashRouter`) for multi-page navigation — hash-based routing needs no server config on GitHub Pages
- [Vite](https://vite.dev/) for build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Framer Motion](https://motion.dev/) for animation and page transitions
- Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Site structure

Each nav item is its own route, rendered from [`src/pages/`](src/pages):

| Route | Page |
|---|---|
| `/` | Home (hero + about) |
| `/portfolio` | Experience & activities |
| `/projects` | Projects |
| `/achievements` | Awards & recognition |
| `/contact` | Contact |

Shared layout pieces live in [`src/components/`](src/components) — [`Navbar.tsx`](src/components/Navbar.tsx), [`PageHero.tsx`](src/components/PageHero.tsx) (per-page banner), [`PageTransition.tsx`](src/components/PageTransition.tsx) (route-change animation), [`Background.tsx`](src/components/Background.tsx), [`Footer.tsx`](src/components/Footer.tsx), and [`PlaceholderBadge.tsx`](src/components/PlaceholderBadge.tsx) (marks entries still waiting to be filled in). Routes are wired up in [`src/App.tsx`](src/App.tsx).

## Editing content

All page content (bio, education, portfolio entries, projects, achievements, skills, contact info) lives in one place: [`src/data/content.ts`](src/data/content.ts). Edit that file to update the site — no need to touch the components.

Entries still marked `placeholder: true` render with a dashed border and a "Placeholder — edit me" badge. Fill in the real details and remove that flag to make an entry look like the rest of the site.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages.

**One-time setup:** in the repo's Settings → Pages, set **Source** to "GitHub Actions".
