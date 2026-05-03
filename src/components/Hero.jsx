import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { info, homeContent } from "../data";
import profilePic from "../assets/profile.webp";
import Typewriter from "./Typewriter";

import "./Hero.css";

/** Accueil — rendu aligné sur le template type gnandal-elisee (fond noir, bandeaux bleus, typo) */
export default function Hero({ theme = "dark", onThemeToggle }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  const HERO_WORDS = t("hero.roles", { returnObjects: true });

  return (
    <section className="hero hero--gnandal" id="hero" data-appearance={theme}>
      <div className="hero-glow hero-glow--1" aria-hidden />
      <div className="hero-glow hero-glow--2" aria-hidden />

      <div className="hero-layout">
        <div className="hero-visual">
          <div className="hero-img-card">
            <img className="hero-photo-desk" src={profilePic} alt={info.name} />
          </div>
        </div>

        <div className="hero-copy">
          <img className="hero-photo-mobile" src={profilePic} alt="" />

          <h1 className="hero-h1">
            <span className="hero-line-accent" aria-hidden />
            <span className="hero-name-first">{info.firstName}</span>
            <span className="hero-name-rest">
              {info.lastName}
              <span className="hero-name-dot">.</span>
            </span>
            <span className="hero-role">
              {t("hero.iam")}
              <Typewriter words={HERO_WORDS} delay={85} cursor />
            </span>
          </h1>

          <p className="hero-lead">{t("info.heroLead")}</p>

          <div className="hero-desc">
            {t("info.home_paragraphs", { returnObjects: true }).map((p, i) => (
              <p key={i} className="hero-desc-p">
                {p}
              </p>
            ))}
          </div>

          <ul className="hero-highlights" aria-label={t("info.highlights_label") || "Points forts"}>
            <li className="hero-highlight">
              <i className="bi bi-code-slash" aria-hidden />
              <span>{t("info.highlights.dev")}</span>
            </li>
            <li className="hero-highlight">
              <i className="bi bi-shield-check" aria-hidden />
              <span>{t("info.highlights.cyber")}</span>
            </li>
            <li className="hero-highlight">
              <i className="bi bi-folder2-open" aria-hidden />
              <span>{t("info.highlights.projects")}</span>
            </li>
          </ul>

          <Link to="/a-propos" className="hero-cta">
            <span className="hero-cta-text">{t("hero.cta")}</span>
            <span className="hero-cta-icon" aria-hidden>
              <i className={`bi ${isRtl ? "bi-arrow-left" : "bi-arrow-right"}`} />
            </span>
          </Link>
        </div>
      </div>

      
    </section>
  );
}
