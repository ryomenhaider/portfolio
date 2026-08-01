# haideralidev.xyz

Portfolio + documentation site for all projects, built with [Astro](https://astro.build), MDX, and Tailwind CSS 4.

## Routes

| URL | Page |
|-----|------|
| `/` | Portfolio home (about, skills, projects, blog, contact) |
| `/hermes` | Hermes — single-page docs |
| `/aegis` | Aegis — single-page docs |
| `/atlas` | Atlas — single-page docs |
| `/aletheia` | Aletheia — single-page docs |
| `/vecta` | Vecta — single-page docs |
| `/blog` | Blog index |
| `/blog/<slug>` | Individual posts |

## Content

- **Docs** — MDX files in `src/content/docs/<project>/`. Each file becomes one section on the project's single page. Frontmatter:

```yaml
---
title: Section Title
order: 10           # sidebar position (lower first)
section: Connectors # optional: groups sections under a sidebar heading
description: Meta description
---
```

- **Blog** — MDX files in `src/content/blog/`. Frontmatter: `title`, `description`, `date`, `tags`, `draft`.
- **Socials** — profile URLs (GitHub / LinkedIn / X) live in `src/config/projects.ts`.

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the built site
```

## Deploy

Static output — deploy `dist/` anywhere. For Vercel, import the repo root (or this
folder if it's a subdirectory) and Vercel auto-detects Astro via `vercel.json`.

Subpaths (`/hermes`, `/aegis`, ...) are plain static directories, so no rewrites
or redirect config is needed.
