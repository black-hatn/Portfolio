import { useTranslation } from "react-i18next";
import { cyberCertifications, cyberBadges } from "../data";
import { motion as Motion } from "framer-motion";

export default function CyberBadges() {
  const { t } = useTranslation();

  return (
    <div className="cyber-section">
      <hr className="sep" />
      <h3 className="cyber-title">
        <i className="bi bi-shield-check text-accent" /> {t("cyber.title")}
      </h3>

      <div className="cyber-grid">
        {/* Certifications Card */}
        <div className="cyber-card certs">
          <h4>{t("cyber.certs_title")}</h4>
          <div className="cert-list">
            {cyberCertifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-item"
              >
                <div className="cert-icon">
                  <i className={`bi ${cert.icon}`} />
                </div>
                <div className="cert-info">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-issuer">{cert.issuer} • {cert.date}</span>
                </div>
                <i className="bi bi-box-arrow-up-right ms-auto" />
              </a>
            ))}
          </div>
        </div>

        {/* Cyber Skills / Badges Card */}
        <div className="cyber-card status">
          <h4>{t("cyber.lab_status")}</h4>
          <div className="bar-list">
            {cyberBadges.map((badge, i) => (
              <div key={badge.name} className="bar-item">
                <div className="bar-label">
                  <span>{t(`cyber.badges.${badge.key}`)}</span>
                  <span>{badge.percent}%</span>
                </div>
                <div className="bar-track">
                  <Motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${badge.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    style={{ backgroundColor: badge.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="cyber-note">
            <i className="bi bi-info-circle" /> {t("cyber.note")}
          </p>
        </div>
      </div>

      <style>{`
        .cyber-section {
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 1.25rem 4rem;
        }
        .cyber-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 600;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 2.25rem;
          color: var(--text);
        }
        .cyber-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .cyber-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        .cyber-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: var(--accent);
        }
        .cyber-card h4 {
          font-family: var(--font-display);
          font-size: 1.1rem;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }
        
        /* List Certs */
        .cert-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cert-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .cert-item:hover {
          transform: translateX(5px);
          border-color: var(--accent);
        }
        .cert-icon {
          width: 40px;
          height: 40px;
          background: var(--bg3);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--accent);
          font-size: 1.1rem;
        }
        .cert-info {
          display: flex;
          flex-direction: column;
        }
        .cert-name {
          font-weight: 600;
          font-size: 0.9rem;
        }
        .cert-issuer {
          font-size: 0.75rem;
          color: var(--muted);
        }

        /* Bars Cyber */
        .bar-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .bar-track {
          height: 6px;
          background: var(--bg3);
          border-radius: 10px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(65, 105, 225, 0.3);
        }
        .cyber-note {
          margin-top: 1.5rem;
          font-size: 0.75rem;
          color: var(--muted);
          font-style: italic;
          border-top: 1px solid var(--border);
          padding-top: 1rem;
        }

        @media (max-width: 900px) {
          .cyber-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
