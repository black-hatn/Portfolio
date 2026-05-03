// ============================================================
// MODIFIEZ CE FICHIER AVEC VOS PROPRES INFORMATIONS
// (E-mail : préférez VITE_CONTACT_EMAIL dans .env — voir .env.example)
// ============================================================

import spormatesImg from "./assets/spormates.webp";
import ecommerceImg from "./assets/ecommerce-premium.webp";

const contactEmailFromEnv = (import.meta.env.VITE_CONTACT_EMAIL || "").trim();

export const info = {
  firstName: "Nouradine",
  lastName: "Zakaria Mahamat",
  name: "Nouradine Zakaria Mahamat",
  title: "Étudiant en L2 Informatique",
  email: contactEmailFromEnv || "contact@nouradine.dev",
  phone: "+235 60 90 90 92",
  location: "N'Djamena, Tchad",
  age: "20 ans",
  nationality: "Tchadien",
  freelance: "Disponible (stage / projets)",
  githubUser: "black-hatn",
  languages: "Français, Anglais,Arabe",
  github: "https://github.com/black-hatn",
  linkedin:
    "https://www.linkedin.com/in/nouradine-zakaria-mahamat-a1186a329?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  cv: "/cv.pdf",
  about: `Je suis étudiant en informatique passionné par la création
d'applications web modernes et performantes et de la cybersécurité. J'aime résoudre
des problèmes complexes et apprendre constamment de nouvelles
technologies .`,
  /** Texte court — page d'accueil uniquement (pas le reste du site) */
  heroLead:
    "Étudiant en L2 informatique — développement web, cybersécurité et projets concrets.",
};

/** Texte enrichi pour la page d'accueil (modifiable à volonté) */
export const homeContent = {
  /** Paragraphes de description (affichés sous l'accroche) */
  paragraphs: [
    `La cybersécurité fait partie de mon parcours : sensibilisation aux bonnes pratiques, curiosité pour l'analyse et la veille. Ce site regroupe mon profil, mes compétences et des projets que je suis fier de présenter.`,
    `Je suis ouvert aux échanges autour d'un stage, d'un projet étudiant ou d'une collaboration — parcourez les pages « À propos », « Portfolio » et « Contact » pour en savoir plus.`,
  ],
  /** Points forts en une ligne (icônes Bootstrap Icons : bi-*) */
  highlights: [
    { icon: "bi-code-slash", label: "Front & back (React, PHP, JS)" },
    { icon: "bi-shield-check", label: "Cybersécurité & Ethical Hacking" },
    { icon: "bi-folder2-open", label: "Projets web & base de données" },
  ],
};

/** Textes d'introduction par page (routes séparées) */
export const pageTexts = {
  about: {
    intro:
      "Cette page regroupe mes informations personnelles, mes compétences techniques et mon parcours scolaire.",
  },
  portfolio: {
    intro: "Projets realisés : applications web, exercices et réalisations récentes.",
  },
  contact: {
    intro: "Pour un stage, un projet ou une question — laissez-moi un message.",
  },
};

/** Chiffres clés (section À propos) — showPlus: décor « + » comme le site de référence */
export const aboutStats = [
  { key: "years", value: 2, suffix: "+", label: "Années d'études sup.", showPlus: true },
  { key: "projects", value: 5, suffix: "+", label: "Projets réalisés", showPlus: true },
  { key: "certs", value: 2, suffix: "+", label: "Formations certifiantes", showPlus: true },
  { key: "motivation", value: 100, suffix: "%", label: "Motivation", showPlus: false },
];

/** Compétences avec pourcentage (anneaux, style référence) */
export const skillLevels = [
  { key: "frontend", name: "Frontend", percent: 70 },
  { key: "backend", name: "Backend", percent: 50 },
  { key: "databases", name: "Bases de données", percent: 75 },
  { key: "cyber", name: "Cybersécurité", percent: 55 },
  { key: "tools", name: "Git & outils", percent: 85 },
  { key: "php", name: "PHP / Web", percent: 70 },
  { key: "python", name: "Python", percent: 50 },
  { key: "linux", name: "Linux", percent: 65 },
];

export const skills = [
  {
    key: "frontend",
    category: "Frontend",
    items: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    key: "backend",
    category: "Backend",
    items: ["Node.js", "Python", "Java", "PHP"],
  },
  {
    key: "databases",
    category: "Bases de données",
    items: ["MySQL", "PostgreSQL", "SQL"],
  },
  {
    key: "tools",
    category: "Outils & DevOps",
    items: ["Git", "GitHub", "VS Code", "Linux", "Kali Linux"],
  },
  {
    key: "cyber",
    category: "Cybersécurité",
    items: ["Ethical Hacking", "Pentest", "OSINT", "CTF"],
  },
];

export const projects = [
  {
    key: "sportmates",
    title: "Sportmates",
    image: spormatesImg,
    description: "Plateforme communautaire sportive...",
    tech: ["PHP", "MySQL", "CSS"],
    category: "Web",
    overlay: "COMMUNAUTÉ SPORTIVE",
    github: "",
    demo: "https://sportmates.rf.gd/",
    featured: true,
  },
  {
    key: "ecommerce",
    title: "Projet E-commerce",
    image: ecommerceImg,
    description: "Application web de vente en ligne...",
    tech: ["HTML/CSS", "PHP", "MySQL"],
    category: "Web",
    overlay: "E-COMMERCE",
    github: "https://github.com/black-hatn/projet-ecommerce",
    demo: "https://mon-projet.vercel.app",
    featured: true,
  },
  {
    key: "weather",
    title: "Application Météo",
    description: "App météo utilisant l'API OpenWeatherMap...",
    tech: ["JavaScript", "API REST", "CSS"],
    category: "Web",
    overlay: "API & JS",
    github: "https://github.com/black-hatn/app-meteo",
    demo: "",
    featured: true,
  },
  {
    key: "todo",
    title: "Gestionnaire de tâches",
    description: "Application de gestion de tâches...",
    tech: ["React", "LocalStorage"],
    category: "Web",
    overlay: "REACT",
    github: "https://github.com/black-hatn/todo-app",
    demo: "",
    featured: false,
  },
  {
    key: "sort",
    title: "Algorithmes de tri",
    description: "Visualisateur d'algorithmes de tri...",
    tech: ["JavaScript", "Canvas API"],
    category: "Outils",
    overlay: "ALGORITHME",
    github: "https://github.com/black-hatn/sort-visualizer",
    demo: "https://sort-viz.vercel.app",
  },
];

export const cyberCertifications = [
  {
    key: "thm",
    name: "TryHackMe - Pre-Security",
    issuer: "TryHackMe",
    date: "2025",
    icon: "bi-shield-lock",
    link: "https://tryhackme.com/p/black-hatn",
  },
  {
    key: "eth",
    name: "Initiation Ethical Hacking",
    issuer: "Mahrasoft Innovation (N'Djamena)",
    date: "2025",
    icon: "bi-bug",
    link: "#",
  },
  {
    key: "cisco",
    name: "Cisco Networking Academy",
    issuer: "Cisco",
    date: "2025",
    icon: "bi-hdd-network",
    link: "https://www.netacad.com/",
  },
];

export const cyberBadges = [
  { key: "networking", name: "Networking", percent: 65, color: "#4169e1" },
  { key: "linux", name: "Linux", percent: 80, color: "#f8fafc" },
  { key: "web_hacking", name: "Web Hacking", percent: 45, color: "#ef4444" },
  { key: "osint", name: "OSINT", percent: 50, color: "#10b981" },
];

export const timeline = [
  {
    key: "l2",
    year: "2025/2026",
    title: "Licence 2 Informatique",
    place: "École Nationale Supérieure des TIC (ENASTIC N'Djamena)",
    type: "education",
    desc: "Approfondissement en développement logiciel, réseaux et sécurité.",
  },
  {
    key: "cyber_f",
    year: "Été 2025",
    title: "Formation en Cybersécurité",
    place: "Mahrasoft Innovation",
    type: "formation",
    desc: "Introduction aux fondamentaux de la sécurité offensive et défensive.",
  },
  {
    key: "web_f",
    year: "Été 2025",
    title: "Formation en Développement Web",
    place: "Mahrasoft Innovation",
    type: "formation",
    desc: "Projets web et bonnes pratiques front/back.",
  },
  {
    key: "l1",
    year: "2024/2025",
    title: "Licence 1 Informatique",
    place: "École Nationale Supérieure des TIC (ENASTIC N'Djamena)",
    type: "education",
    desc: "Fondamentaux de la programmation et des systèmes.",
  },
  {
    key: "bac",
    year: "2022/2023",
    title: "Baccalauréat Scientifique série D",
    place: "Lycée Les Faucons",
    type: "education",
    desc: "",
  },
];
