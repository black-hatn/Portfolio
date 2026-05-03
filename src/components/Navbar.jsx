import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const isRtl = i18n.dir() === "rtl";

  const links = [
    { to: "/", label: t("nav.home"), icon: "bi-house-fill", end: true },
    { to: "/a-propos", label: t("nav.about"), icon: "bi-person-fill", end: false },
    { to: "/portfolio", label: t("nav.portfolio"), icon: "bi-briefcase-fill", end: false },
    { to: "/contact", label: t("nav.contact"), icon: "bi-envelope-open-fill", end: false },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className={`top-utilities ${isRtl ? "top-rtl" : ""}`}>
        <button
          type="button"
          className="theme-toggle-btn settings-btn"
          onClick={toggleTheme}
          title={theme === "dark" ? t("nav.toggle_theme_light") : t("nav.toggle_theme_dark")}
        >
          <i className="bi bi-gear-fill settings-gear" />
        </button>
        <LanguageSwitcher />
      </div>

      <header className={`side-header ${isRtl ? "side-rtl" : ""}`} id="navbar-collapse-toggle">
        <ul className="side-nav-desktop">
          {links.map((l) => (
            <li key={l.to} className="side-item">
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) => `side-link ${isActive ? "active" : ""}`}
                title={l.label}
              >
                <i className={`bi ${l.icon}`} />
                <span className="side-label">{l.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <nav className="mobile-nav-wrap" aria-label="Menu principal">
          <div className={`menu-toggle ${open ? "open" : ""}`}>
            <button
              type="button"
              className="menu-burger"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
            <ul className={`mobile-panel ${open ? "visible" : ""}`} role="menu">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={close}
                  >
                    <i className={`bi ${l.icon}`} />
                    <span>{l.label}</span>
                  </NavLink>
                </li>
              ))}
              <li className="mobile-extra">
                <LanguageSwitcher />
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-theme"
                  onClick={() => {
                    toggleTheme();
                    close();
                  }}
                >
                  <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"}`} />
                  <span>{theme === "dark" ? t("nav.toggle_theme_light") : t("nav.toggle_theme_dark")}</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
