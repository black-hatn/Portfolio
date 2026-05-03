import { useTranslation } from "react-i18next";
import { info, aboutStats } from "../data";
import AnimatedCounter from "./AnimatedCounter";

import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  return (
    <section id="about" className="about">
      <Reveal>
        <div className="section-head">
          <h2>
            {t("about.title")} <span className="text-accent">{t("about.me")}</span>
          </h2>
          <span className="section-watermark">{t("about.watermark")}</span>
        </div>
      </Reveal>

      <div className="about-wrap">
        <Reveal delay={0.2}>
          <div className="about-row">
            <div className="about-col">
              <h3 className="about-h3">{t("about.personal_info")}</h3>
              <dl className="about-grid-info">
                <div className="about-col-half">
                  <div className="info-row">
                    <dt className="info-k">{t("about.f_name")} :</dt>
                    <dd className="info-v">{info.firstName}</dd>
                  </div>
                  <div className="info-row">
                    <dt className="info-k">{t("about.l_name")} :</dt>
                    <dd className="info-v">{info.lastName}</dd>
                  </div>
                  <div className="info-row">
                    <dt className="info-k">{t("about.age_label")} :</dt>
                    <dd className="info-v">{t("info.age")}</dd>
                  </div>
                  <div className="info-row">
                    <dt className="info-k">{t("about.nationality_label")} :</dt>
                    <dd className="info-v">{t("info.nationality")}</dd>
                  </div>
                  <div className="info-row">
                    <dt className="info-k">{t("about.freelance_label")} :</dt>
                    <dd className="info-v">{t("info.freelance")}</dd>
                  </div>
                </div>
                <div className="about-col-half">
                  <div className="info-row">
                    <dt className="info-k">{t("about.address_label")} :</dt>
                    <dd className="info-v">{t("info.location")}</dd>
                  </div>
                  <div className="info-row">
                    <dt className="info-k">{t("about.phone_label")} :</dt>
                    <dd className="info-v">{info.phone}</dd>
                  </div>
                  <div className="info-row">
                    <dt className="info-k">{t("about.email_label")} :</dt>
                    <dd className="info-v">{info.email}</dd>
                  </div>
                  <div className="info-row">
                    <dt className="info-k">GitHub :</dt>
                    <dd className="info-v">{info.githubUser}</dd>
                  </div>
                  <div className="info-row">
                    <dt className="info-k">{t("about.lang_label")} :</dt>
                    <dd className="info-v">{t("info.languages")}</dd>
                  </div>
                </div>
              </dl>

              <a href={info.cv} target="_blank" rel="noreferrer" className="btn-slide about-cv">
                <span>{t("about.cv_btn")}</span>
                <span className="btn-slide-icon" aria-hidden>
                  <i className="bi bi-download" />
                </span>
              </a>
            </div>

            <div className="about-col about-stats">
              <div className="stats-grid">
                {aboutStats.map((s, idx) => (
                  <div key={idx} className="stat-box">
                    <h3 className={`stat-num text-accent ${s.showPlus ? "has-plus" : ""}`}>
                      <AnimatedCounter from={0} to={s.value} suffix={s.suffix} duration={1.6} />
                    </h3>
                    <p className="stat-cap">{t(`about.stats.${s.key}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="about-bio">{t("info.about")}</p>
        </Reveal>
      </div>


    </section>
  );
}
