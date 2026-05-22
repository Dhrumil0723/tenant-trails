# TenantTrails

A React + Vite app: honest tenant reviews for apartments in Halifax, Nova Scotia.

Three pages:
- `/` — Landing page
- `/login` — Sign-in page
- `/home` — Apartments listing (requires sign-in)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

Demo credentials (anything works in dev, these are the seeded values shown on the form):

```
Email:    alex@dal.ca
Password: password123
```

## Build

```bash
npm run build
npm run preview
```

The production bundle is emitted to `dist/`.

## Deployment

### Netlify

Drag the `dist/` folder onto https://app.netlify.com/drop, or connect this repo and use:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

The included `netlify.toml` already handles client-side routing fallback.

### Vercel

Run `npx vercel` in the project root, or import the repo on https://vercel.com — Vercel auto-detects Vite. No extra config needed.

## Project structure

```
src/
├── App.jsx                  Router + protected route guard
├── main.jsx                 Entry
├── context/
│   └── AuthContext.jsx      Demo sign-in state
├── pages/
│   ├── Landing.jsx / .css
│   ├── Login.jsx   / .css
│   └── Home.jsx    / .css
├── components/
│   └── ApartmentCard.jsx / .css
├── data/
│   └── apartments.js        Seed data for the home page
└── styles/
    └── global.css           Design tokens + base styles
```

## Tech

- React 18
- Vite 5
- React Router 6
- Plus Jakarta Sans (Google Fonts)
- No CSS framework — plain CSS with CSS variables
