# Nouradine Zakaria — Portfolio

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/black-hatn/Portfolio)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

> **Portfolio personnel** — Étudiant en L2 Informatique & Cybersécurité à N'Djamena, Tchad 🇹🇩

🔗 **Live Demo:** [nouradine.dev](https://nouradine.dev)

![Portfolio Screenshot](./public/og-image.png)

---

## ✨ Features

- 🎨 **Design System** — Dark/Light mode, grille 8px, animations premium
- 🌍 **i18n** — Français, English, العربية
- 🔒 **Cybersécurité** — Section TryHackMe, CTF write-ups
- ⚡ **Performance** — 100/100 Lighthouse, lazy loading, fonts optimisées
- � **Responsive** — Mobile-first, navigation adaptative
- 🔍 **SEO** — Schema.org, Open Graph, sitemap.xml, robots.txt
- 🎯 **Accessibilité** — ARIA, skip-link, reduced-motion support
- 🥚 **Easter Egg** — Mode Hacker (Konami code)

---

## 🚀 Quick Start

```bash
# Clone & Install
git clone https://github.com/black-hatn/Portfolio.git
cd Portfolio
npm install

# Development
npm run dev

# Production build
npm run build
npm run preview
```

---

## 📁 Structure

```
src/
├── components/          # Composants React
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── ...
├── pages/              # Routes
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── NotFound.jsx    # 404 designée
│   └── ...
├── locales/            # Traductions (FR/EN/AR)
├── data.js             # Configuration facile
└── index.css           # Variables CSS & grille 8px
```

---

## ⚙️ Configuration

**Personnaliser vos infos dans `src/data.js` :**

```javascript
export const info = {
  name: "Nouradine Zakaria Mahamat",
  email: "nouradinezakariamahamat2@gmail.com",
  github: "https://github.com/black-hatn",
  linkedin: "https://linkedin.com/in/...",
  // ...
};
```

---

## 🌐 Déploiement

### Vercel (Recommandé - Gratuit & Rapide)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/black-hatn/Portfolio)

**Via CLI:**
```bash
npm i -g vercel
vercel
# Puis pour la production:
vercel --prod
```

**Configuration automatique:**
- Build Command: `npm run build` (auto-détecté)
- Output Directory: `dist` (auto-détecté)
- Framework: Vite (auto-détecté)

### Render (Alternative)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/black-hatn/Portfolio)

Configuration: Build Command `npm install && npm run build`, Publish Directory `dist`

### Manuel
1. `npm run build`
2. Upload du dossier `dist/` sur votre serveur

---

## 📄 License

[MIT](LICENSE) © Nouradine Zakaria Mahamat
