import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data";
import { motion as Motion, AnimatePresence } from "framer-motion";

import "./Projects.css";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("All");
  const isRtl = i18n.dir() === "rtl";

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const getCatLabel = (cat) => {
    if (cat === "All") return isRtl ? "الكل" : "Tous";
    if (cat === "Web") return "Web";
    if (cat === "Outils") return t("skills.levels.tools");
    return cat;
  };

  return (
    <section id="portfolio" className="projects-sect">
      <div className="section-head">
        <h2>
          {t("portfolio.title")} <span className="text-accent">{t("portfolio.work")}</span>
        </h2>
        <span className="section-watermark">{t("portfolio.watermark")}</span>
      </div>

      <div className="filter-wrap">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={`filter-btn ${filter === c ? "active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {getCatLabel(c)}
          </button>
        ))}
      </div>

      <div className="projects-grid-container">
        <AnimatePresence mode="popLayout">
          <Motion.div layout className="projects-grid">
            {filtered.map((p) => (
              <Motion.div
                key={p.key}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="proj-card"
              >
                <div className="proj-image-wrap">
                  {p.image ? (
                    <img src={p.image} alt={t(`portfolio.projects.${p.key}.title`)} loading="lazy" />
                  ) : (
                    <div className="proj-no-img">
                      <i className="bi bi-code-slash" />
                    </div>
                  )}
                  <div className="proj-overlay">
                    <span className="proj-overlay-txt">
                      {t(`portfolio.projects.${p.key}.overlay`)}
                    </span>
                  </div>
                </div>
                <div className="proj-content">
                  <h4 className="proj-h4">{t(`portfolio.projects.${p.key}.title`)}</h4>
                  <p className="proj-desc">{t(`portfolio.projects.${p.key}.desc`)}</p>
                  <div className="proj-tech">
                    {p.tech.map((v) => (
                      <span key={v} className="tech-tag">
                        {v}
                      </span>
                    ))}
                  </div>
                  <div className="proj-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" title="GitHub">
                        <i className="bi bi-github" />
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" title="Demo">
                        <i className={`bi ${isRtl ? "bi-link-45deg" : "bi-link"}`} />
                      </a>
                    )}
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </AnimatePresence>
      </div>

      
    </section>
  );
}
