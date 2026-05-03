import { useTranslation } from "react-i18next";
import { info } from "../data";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} <strong>{info.firstName} {info.lastName}</strong>. {t("footer.rights")}
        </p>
      </div>
      
      <style>{`
        .footer {
          padding: 2.5rem 1.5rem;
          background: var(--bg2);
          border-top: 1px solid var(--border);
          padding: 2rem 1.25rem;
          background: var(--bg);
        }
        .footer-inner {
          max-width: var(--max);
          margin: 0 auto;
          text-align: center;
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--muted);
        }
      `}</style>
    </footer>
  );
}
