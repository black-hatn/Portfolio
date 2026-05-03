import { useTranslation } from "react-i18next";
import { skillLevels, skills } from "../data";
import { motion as Motion } from "framer-motion";

import Reveal from "./Reveal";
import "./Skills.css";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-block">
      <Reveal>
        <hr className="sep" />
        <h3 className="skills-title">{t("skills.title")}</h3>
        <div className="skills-grid">
          {skillLevels.map((s, i) => (
            <Motion.div
              key={s.name}
              className="skill-cell"
              initial={{ "--p": 0 }}
              whileInView={{ "--p": s.percent }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            >
              <div className="skill-ring" style={{ "--p": s.percent }}>
                <div className="skill-ring-inner">{s.percent}%</div>
              </div>
              <h6 className="skill-name">{t(`skills.levels.${s.key}`)}</h6>
            </Motion.div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="skills-list-grid">
          {skills.map((cat) => (
            <div key={cat.category} className="skill-cat-card">
              <h4 className="skill-cat-title">{t(`skills.categories.${cat.key}`)}</h4>
              <ul className="skill-list" role="list">
                {cat.items.map((it) => (
                  <li key={it} className="skill-tag">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>


    </section>
  );
}
