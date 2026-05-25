# Muhammad Areeb Zahid — Portfolio

A clean, professional, single-page portfolio built around the tech stack from my CV. Designed to feel soft, refined, and modern while staying snappy.

## Stack

Every dependency below is something I actively use day-to-day:

- **React 18** + **TypeScript**
- **Vite** (build & dev server)
- **Tailwind CSS** (utility-first styling, custom design tokens)
- **Material UI Icons** (icon set)
- **Apache ECharts** + **echarts-for-react** (radar visualization for core proficiency)
- **Leaflet** + **react-leaflet** (location map with custom branded marker)
- **TanStack Table** (sortable projects table view)

## Sections

1. **Hero** — headline, available-for-hire pill, core toolbelt, animated code card with stats.
2. **About** — professional summary, three pillars, education, languages, and domains shipped in.
3. **Skills** — ECharts radar chart of core proficiency + categorized chips for the full stack.
4. **Experience** — vertical timeline with current role highlighted and detailed bullet points.
5. **Projects** — grid/table toggle (TanStack Table), category filters, expandable project cards.
6. **Contact** — direct contact rows, animated Leaflet map of Karachi, mailto CTA.

## Getting started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├─ components/        # All section components
├─ data/portfolio.ts  # Single source of truth for CV content
├─ App.tsx
├─ main.tsx
└─ index.css          # Tailwind base + custom design tokens
```

## Design notes

- **Palette** — calm brand blue + soft accent indigo on near-white ink, accented by emerald & amber sparingly.
- **Typography** — `Plus Jakarta Sans` for display, `Inter` for body, `JetBrains Mono` for code.
- **Motion** — subtle fade-up, float, and pulse animations only — nothing flashy.
- **A11y** — semantic landmarks, focus-visible rings, sufficient contrast, keyboard-friendly toggles.
