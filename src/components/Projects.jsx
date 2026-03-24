import { useState, useRef } from "react";
import { projects } from "../data";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

function Tag({ text }) {
  return (
    <span style={{
      padding: "0.25rem 0.6rem",
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: "100px",
      fontSize: "0.7rem",
      color: "var(--muted)",
      backdropFilter: "blur(4px)",
      fontWeight: 500,
    }}>{text}</span>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  
  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    cardRef.current.style.setProperty('--x', `${mouseX}px`);
    cardRef.current.style.setProperty('--y', `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      style={{ perspective: "1000px" }}
    >
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          display: "flex", flexDirection: "column",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          backdropFilter: "blur(12px)",
          boxShadow: project.featured 
            ? "0 15px 35px -12px rgba(37, 99, 235, 0.12)" 
            : "0 8px 30px -15px rgba(0, 0, 0, 0.4)",
        }}
        className="premium-project-card spotlight-hover"
      >
        {/* Glow effect for featured projects */}
        {project.featured && (
          <div style={{
            position: "absolute", inset: "-1px",
            borderRadius: "20px",
            padding: "1px",
            background: "linear-gradient(135deg, var(--accent), transparent, var(--accent))",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: 0.4,
            pointerEvents: "none"
          }} />
        )}

        {/* Image Section */}
        <div style={{
          width: "100%", height: project.featured ? "220px" : "180px",
          overflow: "hidden", position: "relative",
          background: "#0a0a0a"
        }}>
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
              className="card-image"
            />
          ) : (
            <div style={{
              width: "100%", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "linear-gradient(135deg, rgba(37,99,235,0.05), rgba(0,0,0,1))",
              color: "rgba(255,255,255,0.15)", fontSize: "3rem"
            }} className="card-image">
              <i className="bi bi-briefcase"></i>
            </div>
          )}
          
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(13, 13, 13, 0.7))",
            pointerEvents: "none"
          }} />

          {project.featured && (
            <div style={{
              position: "absolute", top: "1rem", left: "1rem",
              background: "var(--accent)", color: "white",
              padding: "0.4rem 0.8rem", borderRadius: "100px",
              fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.1em",
              boxShadow: "0 5px 15px rgba(37, 99, 235, 0.3)",
              backdropFilter: "blur(8px)",
              zIndex: 10
            }}>
              VEDETTE
            </div>
          )}
        </div>

        {/* Content Section */}
        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", flexGrow: 1 }}>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "1.3rem", letterSpacing: "-0.02em", margin: 0,
            color: "var(--text)"
          }}>{project.title}</h3>
          
          <p style={{ 
            color: "var(--muted)", fontSize: "0.9rem", 
            lineHeight: 1.6, flexGrow: 1, margin: 0,
            fontWeight: 400
          }}>
            {project.description}
          </p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tech.map(t => <Tag key={t} text={t} />)}
          </div>
          
          <div style={{ marginTop: "0.25rem" }}>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                padding: "0.7rem 1.4rem", background: "#fff", color: "#000",
                borderRadius: "12px", fontSize: "0.85rem", fontWeight: 700,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                textDecoration: "none",
                boxShadow: "0 3px 0px #ccc"
              }}
                className="premium-btn"
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 15px rgba(255, 255, 255, 0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 3px 0px #ccc"; }}
              >
                Explorer <i className="bi bi-arrow-right"></i>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const MeshGradient = () => (
  <div style={{
    position: "absolute", inset: 0,
    zIndex: -1, overflow: "hidden",
    opacity: 0.1, pointerEvents: "none"
  }}>
    <div style={{
      position: "absolute", top: "-10%", left: "-5%",
      width: "50vw", height: "50vw",
      background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
      borderRadius: "100%", filter: "blur(100px)",
      animation: "float-1 20s infinite alternate ease-in-out"
    }} />
    <div style={{
      position: "absolute", bottom: "-5%", right: "-2%",
      width: "40vw", height: "40vw",
      background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
      borderRadius: "100%", filter: "blur(120px)",
      animation: "float-2 25s infinite alternate-reverse ease-in-out"
    }} />
  </div>
);

const categories = ["Tous", "Web", "Outils", "Cybersécurité"];

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  
  const filteredProjects = projects.filter(p => 
    filter === "Tous" || p.category === filter
  );

  return (
    <section id="projects" style={{ 
      padding: "6rem 2rem", position: "relative",
      background: "var(--bg1)", overflow: "hidden" 
    }}>
      <MeshGradient />
      
      <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
        <header style={{ marginBottom: "3rem", maxWidth: "600px" }}>
          <motion.p 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ 
              color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.3rem", 
              marginBottom: "1rem", fontFamily: "var(--font-display)", fontWeight: 800,
              textTransform: "uppercase"
            }}
          >
            Portfolio
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em",
              marginBottom: "1.5rem", lineHeight: 1.1,
              color: "var(--text)"
            }}
          >
            Projets <span style={{ opacity: 0.3 }}>Sélectionnés</span>
          </motion.h2>
          
          {/* Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: "flex", flexWrap: "wrap", gap: "0.75rem", 
              marginTop: "2.5rem", padding: "0.5rem",
              background: "var(--bg2)", borderRadius: "16px",
              width: "fit-content", border: "1px solid var(--border)",
              backdropFilter: "blur(10px)"
            }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "0.6rem 1.25rem",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: filter === cat ? "var(--accent)" : "transparent",
                  color: filter === cat ? "#fff" : "var(--muted)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative"
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </header>

        {/* Projects Grid */}
        <motion.div 
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.75rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "6rem" }}
        >
          <a href="https://github.com/black-hatn" target="_blank" rel="noreferrer" style={{
            fontSize: "0.95rem", color: "var(--text)", 
            padding: "1rem 2.5rem", borderRadius: "100px",
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "0.75rem"
          }}
            className="explore-more-btn"
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.transform = "none"; }}
          >
            <i className="bi bi-github"></i> Explorer tout sur GitHub
          </a>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes float-1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 10%) scale(1.05); }
          100% { transform: translate(-3%, -3%) scale(0.95); }
        }
        @keyframes float-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10%, -5%) rotate(10deg); }
          100% { transform: translate(5%, 3%) rotate(-5deg); }
        }
        .premium-project-card:hover .card-image {
          transform: scale(1.08);
        }
        .spotlight-hover::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(350px circle at var(--x) var(--y), rgba(255, 255, 255, 0.06), transparent);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .premium-project-card:hover::before {
          opacity: 1;
        }
        .premium-btn:active {
          transform: translateY(0px) !important;
          box-shadow: none !important;
        }
      `}</style>
    </section>
  );
}
