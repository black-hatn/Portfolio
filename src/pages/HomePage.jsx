import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";

export default function HomePage({ theme, onThemeToggle }) {
  const { t } = useTranslation();
  return (
    <>
      <title>Nouradine Zakaria — {t("nav.home")}</title>
      <meta name="description" content={t("info.heroLead")} />
      <Hero theme={theme} onThemeToggle={onThemeToggle} />
    </>
  );
}
