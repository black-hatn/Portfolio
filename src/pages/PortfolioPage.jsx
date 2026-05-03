import { useTranslation } from "react-i18next";
import Projects from "../components/Projects";

export default function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <div className="page-shell">
      <title>Nouradine Zakaria — {t("nav.portfolio")}</title>
      <meta name="description" content={t("portfolio.intro")} />
      <p className="page-intro">{t("portfolio.intro")}</p>
      <Projects />
    </div>
  );
}
