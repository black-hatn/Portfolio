import { useState } from "react";
import { useTranslation } from "react-i18next";
import { info } from "../data";

import "./Contact.css";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [status, setStatus] = useState(null);
  const isRtl = i18n.dir() === "rtl";

  const formEndpoint = (import.meta.env.VITE_CONTACT_FORM_URL || "").trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    
    if (formEndpoint) {
      setStatus("sending");
      try {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(Object.fromEntries(fd))
        });
        
        if (response.ok) {
          setStatus("success");
          e.target.reset();
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    } else {
      // mailto fallback
      const name = fd.get("name");
      const sub = fd.get("subject") || "Portfolio Contact";
      const msg = fd.get("message");
      window.location.href = `mailto:${info.email}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(`De: ${name}\n\n${msg}`)}`;
      setStatus("success");
      e.target.reset();
    }
  };

  return (
    <section id="contact" className="contact-sect">
      <div className="section-head">
        <h2>
          {t("contact.title")} <span className="text-accent">{t("contact.touch")}</span>
        </h2>
        <span className="section-watermark">{t("contact.watermark")}</span>
      </div>

      <div className="contact-wrap">
        <div className="contact-row">
          <div className="contact-col info">
            <h3 className="contact-h3">{t("contact.sub")}</h3>
            <p className="contact-lead">{t("contact.lead")}</p>

            <ul className="contact-details">
              <li>
                <div className="icon">
                  <i className="bi bi-envelope-open" />
                </div>
                <div className="txt">
                  <span>{t("contact.email_me")}</span>
                  <strong>{info.email}</strong>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className={`bi ${isRtl ? "bi-telephone-inbound" : "bi-telephone"}`} />
                </div>
                <div className="txt">
                  <span>{t("contact.call_me")}</span>
                  <strong>{info.phone}</strong>
                </div>
              </li>
            </ul>

            <div className="contact-social">
              <a href={info.linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin" />
              </a>
              <a href={info.github} target="_blank" rel="noreferrer">
                <i className="bi bi-github" />
              </a>
            </div>
          </div>

          <div className="contact-col form">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input name="name" type="text" placeholder={t("contact.form.name")} required />
                <input name="email" type="email" placeholder={t("contact.form.email")} required />
              </div>
              <div className="form-group">
                <input name="subject" type="text" placeholder={t("contact.form.subject")} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder={t("contact.form.message")} rows={5} required />
              </div>

              <button type="submit" className="btn-slide" disabled={status === "sending"}>
                <span>{status === "sending" ? t("contact.form.sending") : t("contact.form.send")}</span>
                <span className="btn-slide-icon">
                  <i className={`bi ${isRtl ? "bi-send-fill mirror" : "bi-send-fill"}`} />
                </span>
              </button>

              {status === "success" && <p className="form-success">{t("contact.form.success")}</p>}
              {status === "error" && <p className="form-error">{t("contact.form.error")}</p>}
            </form>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}
