# Mon Portfolio — React + Vite

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrez http://localhost:5173

## ✏️ Personnalisation

**Tout modifier dans un seul fichier :**
```
src/data.js
```

Ce fichier contient :
- Vos infos personnelles (nom, email, GitHub, LinkedIn…)
- Vos compétences
- Vos projets
- Votre timeline / parcours

## 📁 Structure du projet

```
src/
├── data.js              ← MODIFIER ICI VOS INFOS
├── App.jsx              ← Point d'entrée principal
├── index.css            ← Styles globaux & variables CSS
└── components/
    ├── Navbar.jsx        ← Barre de navigation
    ├── Hero.jsx          ← Section d'accueil
    ├── About.jsx         ← À propos + stats
    ├── Skills.jsx        ← Compétences par catégorie
    ├── Projects.jsx      ← Grille de projets
    ├── Timeline.jsx      ← Parcours chronologique
    ├── Contact.jsx       ← Liens de contact
    └── Footer.jsx        ← Pied de page
```

## 🎨 Personnaliser les couleurs

Dans `src/index.css`, modifiez les variables CSS :
```css
:root {
  --accent: #7fff6e;   /* Couleur principale (vert par défaut) */
  --accent2: #4fd8d0;  /* Couleur secondaire (turquoise) */
  --bg: #0a0a0a;       /* Fond principal */
}
```

## 🌐 Déploiement sur Vercel (gratuit)

1. Pushez votre code sur GitHub
2. Connectez-vous sur vercel.com
3. Importez votre repo → Deploy automatique !

## 📄 CV

Placez votre CV en PDF dans le dossier `public/` sous le nom `cv.pdf`.
