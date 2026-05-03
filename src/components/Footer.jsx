import { useTranslation } from "react-i18next";
import { info } from "../data";

// Date de dernière mise à jour du build
const LAST_UPDATED = "2026-05-03";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copyright">
          © {new Date().getFullYear()} <strong>{info.firstName} {info.lastName}</strong>. {t("footer.rights")}
        </p>
        <div className="footer-links">
          <a href={info.github} target="_blank" rel="noreferrer" className="footer-link">
            <i className="bi bi-github" />
            <span>View Source</span>
          </a>
          <span className="footer-divider">|</span>
          <span className="footer-updated">Dernière mise à jour: {LAST_UPDATED}</span>
        </div>
      </div>
      
      <style>{`
        .footer {
          padding: 2rem 1.25rem;
          background: var(--bg);
          border-top: 1px solid var(--border);
        }
        .footer-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--muted);
        }
        .footer-copyright {
          margin: 0;
        }
        .footer-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.8rem;
        }
        .footer-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: var(--accent);
        }
        .footer-divider {
          opacity: 0.4;
        }
        .footer-updated {
          font-size: 0.75rem;
          opacity: 0.7;
        }
        @media (max-width: 480px) {
          .footer-links {
            flex-direction: column;
            gap: 0.5rem;
          }
          .footer-divider {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}
