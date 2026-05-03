import { useTranslation } from "react-i18next";
import Contact from "../components/Contact";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="page-shell">
      <title>Nouradine Zakaria — {t("nav.contact")}</title>
      <meta name="description" content={t("contact.intro")} />
      <p className="page-intro">{t("contact.intro")}</p>
      <Contact />
    </div>
  );
}
