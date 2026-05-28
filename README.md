# TenantTrails — CSCI 4177/5709 Lab 2

Apartment review platform for Halifax tenants.  
Built with **React 18 + Vite + React Router v6**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:5173
```

**Demo login:** `alex@dal.ca` / `password123`

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Landing.jsx          Public landing page
│   ├── Login.jsx            Sign-in form (validation + auth)
│   ├── Signup.jsx           Register form (4 fields + validation)
│   ├── Dashboard.jsx        Protected — search / filter / sort cards
│   └── ApartmentDetail.jsx  Protected — useParams, reviews
├── components/
│   ├── ProtectedRoute.jsx   Redirects to /login if no user
│   └── StarDisplay.jsx      Reusable star rating component
├── context/
│   └── AuthContext.jsx      createContext + Provider + useAuth hook
├── data/
│   └── mockData.js          5 apartments, 13 reviews, 4 neighbourhoods
├── App.jsx                  BrowserRouter + Routes + ProtectedRoute wiring
├── main.jsx                 React entry point
└── index.css                All styles (CSS variables, no Tailwind)
```

---

## ✅ Lab 2 Rubric Coverage

| Topic | Where |
|---|---|
| **useState** | Login, Signup, Dashboard (search, filter, sort, welcome) |
| **useEffect** | Dashboard (auto-dismiss banner), ApartmentDetail (page title) |
| **Conditional rendering** | Errors, welcome banner, empty state, AI summary, tags |
| **React Router** | App.jsx — BrowserRouter, Routes, Route |
| **Link** | Navbar, cards, back links, landing CTA |
| **useNavigate** | Login → /dashboard, Signup → /dashboard, logout → /login |
| **useParams** | ApartmentDetail reads `:id` from `/apartment/:id` |
| **Navigation state** | Login/Signup pass `{ message }`, Dashboard reads via `useLocation` |
| **Context (create + provide + consume)** | AuthContext.jsx + useAuth hook |
| **Forms & Validation** | Login (2 fields), Signup (4 fields), per-field + global errors |
| **Protected Routes** | ProtectedRoute wraps Dashboard + ApartmentDetail |

---

## 🌐 Deploy to Netlify

```bash
# Build for production
npm run build

# The output is in dist/ — drag-and-drop to Netlify
# OR use the Netlify CLI:
npx netlify deploy --prod --dir=dist
```

**Important — fix client-side routing on Netlify:**  
Create `public/_redirects` with:
```
/*  /index.html  200
```

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy
vercel --prod
```

Vercel auto-detects Vite and sets the build command / output dir correctly.

---

## 🐙 Git Setup

```bash
# Initialise (if not already done)
git init
git add .
git commit -m "feat: Lab 2 — state, routing, auth, protected routes"

# Push to GitHub
git remote add github https://github.com/YOUR_USERNAME/tenanttrails.git
git push -u github main

# Push to GitLab
git remote add gitlab https://gitlab.com/YOUR_USERNAME/tenanttrails.git
git push -u gitlab main
```

> **Reminder:** Exclude `node_modules/` from your submission zip (it's in `.gitignore`).

---

## 📦 Submission Checklist

- [ ] Source code zipped (no `node_modules/`)
- [ ] GitHub repo link (commit history visible)
- [ ] GitLab repo link (commit history visible)
- [ ] Live Netlify or Vercel URL
