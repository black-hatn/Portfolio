import { skills } from "../data";

const icons = {
  "Frontend": <i className="bi bi-laptop"></i>,
  "Backend": <i className="bi bi-server"></i>,
  "Outils": <i className="bi bi-tools"></i>,
  "Bases de données": <i className="bi bi-database"></i>
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        <div className="section-header fade-up delay-1">
          <p className="section-subtitle">
            02 — COMPÉTENCES
          </p>
          <h2 className="section-title">
            Mon arsenal technique
          </h2>
          <p className="section-desc">
            Voici les technologies, langages et outils avec lesquels je travaille pour construire des applications performantes, sécurisées et modernes.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div 
              key={i} 
              className={`skill-card spotlight-hover fade-up delay-${(i % 5) + 2}`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
              }}
            >
              <div className="card-header">
                <div className="icon-wrapper">
                  {icons[group.category] || "✨"}
                </div>
                <h3 className="card-title">
                  {group.category}
                </h3>
              </div>
              
              <div className="skill-tags">
                {group.items.map((skill, j) => (
                  <span key={j} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 120px 2rem 6rem;
          min-height: calc(100vh - 64px);
          background: var(--bg2);
          position: relative;
        }

        .skills-container {
          max-width: var(--max);
          margin: 0 auto;
          width: 100%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-subtitle {
          color: var(--accent);
          font-size: 0.9rem;
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
          font-family: var(--font-display);
          font-weight: 600;
        }

        .section-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: var(--text);
        }

        .section-desc {
          color: var(--muted);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
          align-items: start;
        }

        .skill-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
          border-color: rgba(37,99,235,0.2);
        }

        .skill-card:hover::before {
          transform: scaleX(1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .icon-wrapper {
          background: rgba(37,99,235,0.08); /* light accent */
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          font-size: 1.5rem;
          color: var(--accent);
        }

        .card-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.3rem;
          color: var(--text);
          letter-spacing: -0.01em;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: var(--bg3);
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text);
          border: 1px solid var(--border);
          transition: all 0.2s ease;
        }

        .skill-card:hover .skill-tag {
          background: rgba(37,99,235,0.08); /* light accent background */
          color: var(--accent);
          border-color: rgba(37,99,235,0.3);
        }

        @media (max-width: 768px) {
          .skills-section {
            padding-top: 100px;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
