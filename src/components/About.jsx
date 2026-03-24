import { Link } from "react-router-dom";
import { info } from "../data";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="about" style={{
      padding: "7rem 2rem",
      maxWidth: "var(--max)", margin: "0 auto",
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem",
        alignItems: "center",
      }} className="about-grid">
        {/* Left: text */}
        <div>
          <p style={{ color: "var(--accent)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
            01 — À PROPOS
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em",
            marginBottom: "1.5rem", lineHeight: 1.1,
          }}>
            Qui suis-je ?
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
            {info.about}
          </p>
          
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <span style={{
              padding: "0.4rem 1rem", borderRadius: "999px",
              background: "var(--bg3)", border: "1px solid var(--border)",
              fontSize: "0.85rem", color: "var(--muted)",
            }}><i className="bi bi-geo-alt-fill" style={{ marginRight: "0.4rem" }}></i> {info.location}</span>
            <span style={{
              padding: "0.4rem 1rem", borderRadius: "999px",
              background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)",
              fontSize: "0.85rem", color: "var(--accent)", display: "flex", alignItems: "center", gap: "0.4rem"
            }}>
              <i className="bi bi-circle-fill" style={{ fontSize: "0.5rem" }}></i> Disponible
            </span>
          </div>

          <Link to="/timeline" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.8rem 1.5rem", background: "var(--accent)", color: "#ffffff",
            borderRadius: "8px", fontSize: "0.95rem", fontWeight: 600,
            textDecoration: "none", transition: "transform 0.2s, background 0.2s",
            boxShadow: "0 4px 14px 0 rgba(37,99,235,0.3)"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "none"}
          >
            Voir mon parcours détaillé <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        {/* Right: Bento Grid Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem",
        }}>
          {[
            { to: 7, suffix: "+", label: "Projets réalisés", icon: "bi-code-slash" },
            { to: 5, suffix: "+", label: "Technologies maîtrisées", icon: "bi-cpu" },
          ].map((s, i) => (
            <div 
              key={i} 
              className="spotlight-hover fade-up"
              style={{
                background: "var(--bg2)", border: "1px solid var(--border)",
                borderRadius: "16px", padding: "1.5rem",
                display: "flex", flexDirection: "column", gap: "0.5rem",
                animationDelay: `${0.2 + (i * 0.1)}s`
              }}
              onMouseMove={handleMouseMove}
            >
              <i className={`bi ${s.icon}`} style={{ fontSize: "1.5rem", color: "var(--accent)", marginBottom: "0.5rem" }}></i>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "2rem", color: "var(--text)", lineHeight: 1
              }}>
                <AnimatedCounter from={0} to={s.to} suffix={s.suffix} duration={1.5 + (i * 0.2)} />
              </span>
              <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
        }
      `}</style>
    </section>
  );
}
