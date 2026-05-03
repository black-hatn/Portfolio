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

### Render (Recommandé - Gratuit)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/black-hatn/Portfolio)

**Manuellement:**
1. Créez un compte sur [render.com](https://render.com)
2. Connectez votre repo GitHub
3. Sélectionnez **Static Site**
4. Configurez :
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Ajoutez la variable d'environnement `VITE_SITE_URL` avec votre URL Render
6. Cliquez **Create Static Site**

**Avec Blueprint (Infrastructure as Code):**
Le fichier `render.yaml` est déjà configuré. Render détectera automatiquement la configuration.

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Manuel
1. `npm run build`
2. Upload du dossier `dist/` sur votre serveur

---

## 📄 License

[MIT](LICENSE) © Nouradine Zakaria Mahamat
