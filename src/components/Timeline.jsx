import { useTranslation } from "react-i18next";
import { timeline } from "../data";
import { motion as Motion } from "framer-motion";

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="timeline-sect">
      <div className="section-head">
        <h2>
          {t("timeline.title")} <span className="text-accent">{t("timeline.exp")}</span>
        </h2>
        <span className="section-watermark">{t("timeline.watermark")}</span>
      </div>

      <div className="timeline-container">
        {timeline.map((item, i) => (
          <Motion.div
            key={item.key}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="timeline-icon">
              <i className={`bi ${item.type === "education" ? "bi-mortarboard-fill" : "bi-briefcase-fill"}`} />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{item.year}</span>
              <h4 className="timeline-h4">
                {t(`timeline.items.${item.key}.title`)}
                <span className="timeline-place"> - {t(`timeline.items.${item.key}.place`)}</span>
              </h4>
              <p className="timeline-p">{t(`timeline.items.${item.key}.desc`)}</p>
            </div>
          </Motion.div>
        ))}
      </div>

      <style>{`
        .timeline-sect {
          max-width: var(--max);
          margin: 0 auto;
          padding: 4rem 1.5rem 6rem;
        }
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 2rem;
          border-left: 2px solid var(--border);
        }
        [dir="rtl"] .timeline-container {
          padding-left: 0;
          padding-right: 2rem;
          border-left: none;
          border-right: 2px solid var(--border);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3.5rem;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-icon {
          position: absolute;
          left: calc(-2rem - 21px);
          top: 0;
          width: 42px;
          height: 42px;
          background: var(--accent);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          z-index: 2;
          box-shadow: 0 0 0 8px var(--bg);
        }
        [dir="rtl"] .timeline-icon {
          left: auto;
          right: calc(-2rem - 21px);
        }

        .timeline-date {
          display: inline-block;
          background: var(--bg3);
          padding: 0.35rem 1rem;
          border-radius: var(--radius-pill);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
          white-space: nowrap;
          border: 1px solid var(--border);
        }

        .timeline-h4 {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text);
        }
        .timeline-place {
          font-weight: 400;
          color: var(--muted);
          font-size: 0.95rem;
          opacity: 0.8;
        }
        .timeline-p {
          font-size: 0.95rem;
          color: var(--muted2);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline-container {
            margin-left: 1rem;
          }
          [dir="rtl"] .timeline-container {
            margin-left: 0;
            margin-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
