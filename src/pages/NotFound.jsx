import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="not-found-content"
      >
        <div className="not-found-code">
          <span className="digit">4</span>
          <span className="digit digit-accent">0</span>
          <span className="digit">4</span>
        </div>
        
        <h1 className="not-found-title">
          {t("notfound.title", "Page introuvable")}
        </h1>
        
        <p className="not-found-desc">
          {t("notfound.desc", "La page que vous recherchez n'existe pas ou a été déplacée.")}
        </p>

        <Link to="/" className="btn-slide not-found-btn">
          <span>{t("notfound.back", "Retour à l'accueil")}</span>
          <span className="btn-slide-icon" aria-hidden>
            <i className="bi bi-house-fill" />
          </span>
        </Link>
      </motion.div>

      <style>{`
        .not-found {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }

        .not-found::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          opacity: 0.05;
          border-radius: 50%;
          pointer-events: none;
        }

        .not-found-content {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .not-found-code {
          font-family: var(--font-display);
          font-size: clamp(6rem, 15vw, 12rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .digit {
          color: var(--text);
          opacity: 0.3;
        }

        .digit-accent {
          background: linear-gradient(135deg, var(--accent) 0%, #8ca6f9 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 1;
        }

        .not-found-title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1rem;
        }

        .not-found-desc {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--muted);
          max-width: 400px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .not-found-btn {
          margin-top: 1rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .not-found::before {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
