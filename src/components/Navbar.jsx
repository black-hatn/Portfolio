import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { info } from "../data";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/skills", label: "Compétences" },
  { href: "/projects", label: "Projets" },
  { href: "/timeline", label: "Parcours" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 2rem",
      background: scrolled ? "var(--bg2)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.3s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "64px",
    }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>{info.name.split(" ")[0]}<span style={{ color: "var(--accent)" }}>.</span></Link>
      </span>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }}
          className="nav-desktop">
        {links.map(l => (
          <li key={l.href}>
            <Link to={l.href} style={{
              fontSize: "0.9rem", 
              color: location.pathname === l.href ? "var(--accent)" : "var(--muted)",
              transition: "color 0.2s",
              fontWeight: location.pathname === l.href ? 600 : 400,
              textDecoration: "none"
            }}
              onMouseEnter={e => { if (location.pathname !== l.href) e.target.style.color = "var(--text)"; }}
              onMouseLeave={e => { if (location.pathname !== l.href) e.target.style.color = "var(--muted)"; }}
            >{l.label}</Link>
          </li>
        ))}
        <li>
          <a href={info.cv} target="_blank" rel="noreferrer" style={{
            padding: "0.45rem 1rem", border: "1px solid var(--accent)",
            color: "var(--accent)", borderRadius: "6px", fontSize: "0.85rem",
            fontWeight: 500, transition: "all 0.2s", textDecoration: "none"
          }}
            onMouseEnter={e => { e.target.style.background = "var(--accent)"; e.target.style.color = "#ffffff"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "var(--accent)"; }}
          >CV</a>
        </li>
        <li>
          <button onClick={toggleTheme} style={{
            background: "transparent", border: "none", cursor: "pointer",
            fontSize: "1.2rem", color: "var(--text)", display: "flex",
            alignItems: "center", justifyContent: "center",
            padding: "0.4rem", borderRadius: "50%",
            transition: "background 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--border)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill" style={{ color: "#fbbf24" }}></i>}
          </button>
        </li>
      </ul>

      {/* Mobile burger */}
      <button onClick={() => setOpen(!open)} style={{
        display: "none", background: "none", border: "none", cursor: "pointer",
        color: "var(--text)", fontSize: "1.4rem",
      }} className="burger">☰</button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "absolute", top: "64px", left: 0, right: 0,
          background: "var(--bg2)", borderBottom: "1px solid var(--border)",
          padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1rem",
        }}>
          {links.map(l => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)}
              style={{ 
                color: location.pathname === l.href ? "var(--accent)" : "var(--text)", 
                fontSize: "1rem",
                textDecoration: "none",
                fontWeight: location.pathname === l.href ? 600 : 400
              }}>{l.label}</Link>
          ))}
          <div style={{ borderTop: "1px solid var(--border)", margin: "0.5rem 0" }}></div>
          <button onClick={() => { toggleTheme(); setOpen(false); }} style={{
            background: "transparent", border: "none", cursor: "pointer",
            fontSize: "1rem", color: "var(--text)", display: "flex",
            alignItems: "center", gap: "0.8rem", padding: "0.5rem 0",
            textAlign: "left", width: "100%", fontFamily: "var(--font-body)",
          }}>
            {theme === "light" ? <><i className="bi bi-moon-fill"></i> Mode Sombre</> : <><i className="bi bi-sun-fill" style={{ color: "#fbbf24" }}></i> Mode Clair</>}
          </button>
          <a href={info.cv} target="_blank" rel="noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none", marginTop: "0.5rem", fontWeight: 500 }}>
            <i className="bi bi-file-earmark-pdf-fill"></i> Télécharger le CV
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
