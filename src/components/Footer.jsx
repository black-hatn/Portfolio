import { info } from "../data";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "1rem",
      maxWidth: "var(--max)", margin: "0 auto",
    }}>
      <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} {info.name}
      </span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "GitHub", href: info.github },
          { label: "LinkedIn", href: info.linkedin },
          { label: "Email", href: `mailto:${info.email}` },
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
            fontSize: "0.85rem", color: "var(--muted)", transition: "color 0.2s",
          }}
            onMouseEnter={e => e.target.style.color = "var(--text)"}
            onMouseLeave={e => e.target.style.color = "var(--muted)"}
          >{s.label}</a>
        ))}
      </div>
    </footer>
  );
}
