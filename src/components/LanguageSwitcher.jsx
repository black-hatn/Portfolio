import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find((l) => l.code === (i18n.language || "fr")) || languages[0];

  const toggle = () => setIsOpen(!isOpen);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lng-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className={`lng-main-btn ${isOpen ? "open" : ""}`}
        onClick={toggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="lng-flag">{currentLang.flag}</span>
        <span className="lng-label-main">{currentLang.code.toUpperCase()}</span>
        <i className={`bi bi-chevron-down lng-arrow ${isOpen ? "rotate" : ""}`} />
      </button>

      {isOpen && (
        <ul className="lng-menu" role="menu">
          {languages.map((lng) => (
            <li key={lng.code} role="none">
              <button
                type="button"
                className={`lng-item ${i18n.language === lng.code ? "active" : ""}`}
                role="menuitem"
                onClick={() => changeLanguage(lng.code)}
              >
                <span className="lng-flag">{lng.flag}</span>
                <span className="lng-text">{lng.label}</span>
                {i18n.language === lng.code && <i className="bi bi-check2 lng-check" />}
              </button>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        .lng-dropdown {
          position: relative;
          display: inline-block;
          z-index: 100;
        }

        .lng-main-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: transparent;
          border: none;
          color: var(--text);
          padding: 0 1rem;
          height: 42px;
          border-radius: var(--radius-pill);
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          min-width: 90px;
          justify-content: center;
        }

        .lng-main-btn:hover,
        .lng-main-btn.open {
          background: var(--bg4);
          color: var(--accent);
        }

        .lng-flag {
          font-size: 1.2rem;
          line-height: 1;
        }

        .lng-label-main {
          letter-spacing: 0.05em;
        }

        .lng-arrow {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
          opacity: 0.7;
        }
        .lng-arrow.rotate {
          transform: rotate(180deg);
        }

        .lng-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          list-style: none;
          padding: 0.5rem;
          margin: 0;
          min-width: 170px;
          animation: slideIn 0.25s ease forwards;
        }

        [dir="rtl"] .lng-menu {
          right: auto;
          left: 0;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .lng-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          background: transparent;
          border: none;
          color: var(--text);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        [dir="rtl"] .lng-item {
          text-align: right;
        }

        .lng-item:hover {
          background: var(--bg3);
          color: var(--accent);
        }

        .lng-item.active {
          color: var(--accent);
          font-weight: 700;
        }

        .lng-check {
          margin-left: auto;
          font-size: 1rem;
        }
        [dir="rtl"] .lng-check {
          margin-left: 0;
          margin-right: auto;
        }

        @media (max-width: 991px) {
          .lng-menu {
            position: relative;
            top: 0;
            right: 0;
            width: 100%;
            box-shadow: none;
            border: none;
            background: transparent;
            padding: 0;
          }
          .lng-main-btn {
            width: 100%;
            justify-content: flex-start;
            background: var(--bg3);
          }
        }
      `}</style>
    </div>
  );
}
