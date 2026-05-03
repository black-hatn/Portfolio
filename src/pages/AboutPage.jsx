import { useTranslation } from "react-i18next";
import About from "../components/About";
import Skills from "../components/Skills";
import CyberBadges from "../components/CyberBadges";
import Timeline from "../components/Timeline";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="page-shell">
      <title>Nouradine Zakaria — {t("nav.about")}</title>
      <meta name="description" content={t("about.intro")} />
      <p className="page-intro">{t("about.intro")}</p>
      <About />
      <Skills />
      <CyberBadges />
      <Timeline />
    </div>
  );
}
