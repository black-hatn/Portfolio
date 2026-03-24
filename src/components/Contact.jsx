import { info } from "../data";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
          05 — CONTACT
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em",
          marginBottom: "1rem", lineHeight: 1.1,
        }}>
          Travaillons ensemble
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: "500px", marginBottom: "3.5rem", fontSize: "1.05rem" }}>
          Ouvert aux opportunités de stage, d'alternance ou de projets freelance.
          N'hésitez pas à me contacter !
        </p>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem",
        }} className="contact-grid">
          {/* Email */}
          <a href={`mailto:${info.email}`} style={{
            background: "var(--bg2)", border: "1px solid var(--border)",
            borderRadius: "14px", padding: "1.8rem",
            transition: "border-color 0.25s, transform 0.25s",
            display: "block",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--accent)" }}><i className="bi bi-envelope-fill"></i></div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "0.3rem" }}>Email</div>
            <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{info.email}</div>
          </a>

          {/* LinkedIn */}
          <a href={info.linkedin} target="_blank" rel="noreferrer" style={{
            background: "var(--bg2)", border: "1px solid var(--border)",
            borderRadius: "14px", padding: "1.8rem",
            transition: "border-color 0.25s, transform 0.25s",
            display: "block",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(79,70,229,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--accent)" }}><i className="bi bi-linkedin"></i></div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "0.3rem" }}>LinkedIn</div>
            <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Voir mon profil <i className="bi bi-arrow-right"></i></div>
          </a>

          {/* GitHub */}
          <a href={info.github} target="_blank" rel="noreferrer" style={{
            background: "var(--bg2)", border: "1px solid var(--border)",
            borderRadius: "14px", padding: "1.8rem",
            transition: "border-color 0.25s, transform 0.25s",
            display: "block",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--accent)" }}><i className="bi bi-github"></i></div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "0.3rem" }}>GitHub</div>
            <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Voir mes repos <i className="bi bi-arrow-right"></i></div>
          </a>

          {/* CV */}
          <a href={info.cv} target="_blank" rel="noreferrer" style={{
            background: "rgba(37,99,235,0.05)", border: "1px solid rgba(37,99,235,0.2)",
            borderRadius: "14px", padding: "1.8rem",
            transition: "background 0.25s, transform 0.25s",
            display: "block",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(37,99,235,0.1)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(37,99,235,0.05)"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--accent)" }}><i className="bi bi-file-earmark-pdf-fill"></i></div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "0.3rem", color: "var(--accent)" }}>Télécharger mon CV</div>
            <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Format PDF <i className="bi bi-arrow-right"></i></div>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
