import { useRef } from "react";
import { timeline } from "../data";
import { motion, useScroll, useSpring } from "framer-motion";

const Icon = ({ type }) => {
  switch (type) {
    case "education":
      return <i className="bi bi-mortarboard-fill"></i>;
    case "formation":
      return <i className="bi bi-code-square"></i>;
    default:
      return <i className="bi bi-star-fill"></i>;
  }
};

function TimelineItem({ item, index }) {
  return (
    <div style={{
      display: "flex",
      gap: "2rem",
      position: "relative",
      paddingBottom: "4rem",
    }}>
      {/* Date / Year Side */}
      <div style={{
        flex: "0 0 100px",
        textAlign: "right",
        paddingTop: "0.25rem"
      }}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{
            fontSize: "0.9rem",
            fontWeight: 800,
            color: "var(--accent)",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.05em",
            display: "block"
          }}
        >
          {item.year}
        </motion.span>
      </div>

      {/* Central Point */}
      <div style={{ 
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: index * 0.1 
          }}
          style={{
            width: "40px",
            height: "40px",
            background: "var(--bg3)",
            border: "2px solid var(--accent)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent)",
            fontSize: "1.1rem",
            zIndex: 2,
            boxShadow: "0 0 20px var(--border)",
            backdropFilter: "blur(10px)"
          }}
        >
          <Icon type={item.type} />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        style={{
          flex: 1,
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          padding: "1.75rem",
          backdropFilter: "blur(12px)",
          position: "relative",
          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
          transition: "border-color 0.3s, transform 0.3s"
        }}
        className="timeline-card"
      >
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.25rem",
          marginBottom: "0.5rem",
          color: "var(--text)"
        }}>{item.title}</h3>
        
        <p style={{
          fontSize: "0.9rem",
          color: "var(--accent)",
          fontWeight: 600,
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <i className="bi bi-geo-alt-fill"></i> {item.place}
        </p>

        {item.desc && (
          <p style={{
            color: "var(--muted)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            margin: 0
          }}>
            {item.desc}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="timeline" style={{ 
      padding: "8rem 2rem", 
      background: "var(--bg1)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative Background Element */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "-10%",
        width: "40vw",
        height: "40vw",
        background: "radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(80px)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <header style={{ marginBottom: "5rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              color: "var(--accent)", 
              fontSize: "0.8rem", 
              letterSpacing: "0.3rem", 
              marginBottom: "1rem", 
              fontFamily: "var(--font-display)", 
              fontWeight: 800,
              textTransform: "uppercase" 
            }}
          >
            04 — PARCOURS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text)"
            }}
          >
            Expérience & <span style={{ opacity: 0.3 }}>Éducation</span>
          </motion.h2>
        </header>

        <div ref={containerRef} style={{ position: "relative" }}>
          {/* Animated Progress Line */}
          <div style={{
            position: "absolute",
            left: "119px", // Aligned with the center of the points (100px + 2rem/2 + adjust)
            // Centering math: Side (100px) + Gap (2rem = 32px) + Dot (40px)
            // Point center is at 100 + 32 + 20 = 152px
            // Wait, let's just use flex layout for points and position the line absolutely relative to the grid
          }} />
          
          {/* Simpler absolute positioned line for centering accuracy */}
          <div style={{
            position: "absolute",
            left: "151px", // (100px width + 32px gap + 40px/2 point) - 1px width/2
            top: "20px",
            bottom: "40px",
            width: "2px",
            background: "var(--border)",
            borderRadius: "10px"
          }}>
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                background: "var(--accent)",
                scaleY,
                originY: 0,
                boxShadow: "0 0 15px var(--accent)"
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-card:hover {
          border-color: var(--accent) !important;
          transform: translateX(5px);
          background: var(--bg3) !important;
        }
        @media (max-width: 768px) {
          #timeline { padding: 4rem 1rem !important; }
          .timeline-card { padding: 1.25rem !important; }
          /* Mobile layout adjustments could be added here if needed, 
             e.g., hiding the year side and moving year inside card */
        }
      `}</style>
    </section>
  );
}
