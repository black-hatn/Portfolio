// ============================================================
// MODIFIEZ CE FICHIER AVEC VOS PROPRES INFORMATIONS
// ============================================================

import spormatesImg from "./assets/spormates.png";
import ecommerceImg from "./assets/E-commerce.png";

export const info = {
  name: "Nouradine Zakaria Mahamat ",
  title: "Étudiant en L2 Informatique",
  subtitle: "Passionné par le développement web & le cybersecurite",
  email: "[EMAIL_ADDRESS]",
  location: "N'Djamena, Tchad",
  github: "https://github.com/black-hatn",
  linkedin: "https://www.linkedin.com/in/nouradine-zakaria-mahamat-a1186a329?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  cv: "/cv.pdf", // Placez votre CV dans le dossier public/
  about: `Je suis étudiant en informatique passionné par la création
    d'applications web modernes et performantes. J'aime résoudre
    des problèmes complexes et apprendre constamment de nouvelles
    technologies et surtout dans le domaine de la cybersécurité`,
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "SQL"],
  },
  {
    category: "Outils",
    items: ["Git", "GitHub", "VS Code", "Linux", "Cybersecurite", "Pentest", "Hacking", "Ethical Hacking", "Kali Linux" ,"Bureautiques"],
  },
  {
    category: "Bases de données",
    items: ["MySQL", "PostgreSQL"],
  },
];

export const projects = [
  {
    title: "Sportmates",
    image: spormatesImg,
    description:
      "Plateforme communautaire sportive avec tableau de bord administrateur (gestion des utilisateurs, publications et statistiques en temps réel).",
    tech: ["PHP", "MySQL", "CSS"],
    category: "Web",
    github: "", // À remplir avec le lien du repo si disponible
    demo: "https://sportmates.rf.gd/",
    featured: true,
  },
  {
    title: "Projet E-commerce",
    image: ecommerceImg,
    description:
      "Application web de vente en ligne avec panier, authentification et paiement. Projet réalisé en équipe de 3 personnes.",
    tech: ["HTML/CSS", "PHP", "MySQL"],
    category: "Web",
    github: "https://github.com/votre-username/projet-ecommerce",
    demo: "https://mon-projet.vercel.app",
    featured: true,
  },
  {
    title: "Application Météo",
    description:
      "App météo utilisant l'API OpenWeatherMap avec géolocalisation et prévisions sur 7 jours.",
    tech: ["JavaScript", "API REST", "CSS"],
    category: "Web",
    github: "https://github.com/votre-username/app-meteo",
    demo: "",
    featured: true,
  },
  {
    title: "Gestionnaire de tâches",
    description:
      "Application de gestion de tâches avec drag & drop, catégories et synchronisation locale.",
    tech: ["React", "LocalStorage"],
    category: "Web",
    github: "https://github.com/votre-username/todo-app",
    demo: "",
    featured: false,
  },
  {
    title: "Algorithmes de tri",
    description:
      "Visualisateur d'algorithmes de tri (bubble sort, quicksort, merge sort) avec animations.",
    tech: ["JavaScript", "Canvas API"],
    category: "Outils",
    github: "https://github.com/votre-username/sort-visualizer",
    demo: "https://sort-viz.vercel.app",
    featured: false,
  },
];

export const timeline = [
  {
    year: "2025/2026",
    title: "Licence 2 Informatique",
    place: "École Nationale Supérieure des TIC (ENASTIC N'Djamena)",
    type: "education",
  },

  {
    year: "Été 2025",
    title: "Formation en Cybersécurité",
    place: "Mahrasoft Innovation",
    type: "formation",
  },
  {
    year: "Été 2025",
    title: "Formation en Developpement Web",
    place: "Mahrasoft Innovation",
    type: "formation",
  },
  {
    year: "2024/2025",
    title: "Licence 1 Informatique",
    place: "École Nationale Supérieure des TIC (ENASTIC N'Djamena)",
    type: "education",
  },
  
 
  {
    year: "2022/2023",
    title: "Baccalauréat Scientifique serie D ",
    place: "Lycée Les faucons",
    type: "education",
  },
];
