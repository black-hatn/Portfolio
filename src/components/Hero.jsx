import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { info } from "../data";
import profilePic from "../assets/profile.png";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background decoration */}
      <div className="hero-bg-blob" />

      <div className="hero-content">
        <p className="fade-up delay-1 greeting">
          Bonjour, je suis
        </p>

        <h1 className="fade-up delay-2 name-title">
          {info.name.split(" ")[0]} <br/>
          <span>{info.name.split(" ").slice(1).join(" ")}</span>
        </h1>

        <h2 className="fade-up delay-3 job-title" style={{ minHeight: "3rem" }}>
          <Typewriter words={["Étudiant en Informatique", "Développeur Web", "Passionné de Cybersécurité"]} />
          <span className="cursor-blink">|</span>
        </h2>

        <p className="fade-up delay-4 description">
          {info.subtitle}
        </p>

        <div className="fade-up delay-5 cta-container">
          <Link to="/projects" className="cta-primary">
            Voir mes projets <i className="bi bi-arrow-right" style={{ marginLeft: "0.2rem" }}></i>
          </Link>
          <Link to="/contact" className="cta-secondary">
            Me contacter
          </Link>
        </div>

        {/* Social links */}
        <div className="fade-up delay-5 social-container">
          <span className="social-label">Suivez-moi</span>
          <div className="social-line"></div>
          {[
            { label: "GitHub", href: info.github },
            { label: "LinkedIn", href: info.linkedin },
            { label: "Email", href: `mailto:${info.email}` },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="fade-up delay-3 hero-image-container">
        <div className="photo-wrapper">
          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", top: "-5%", left: "-15%", zIndex: 10,
              fontSize: "2.5rem", color: "#61DAFB", background: "var(--bg2)",
              borderRadius: "50%", padding: "10px", boxShadow: "0 10px 25px var(--border)"
            }}
          >
            <i className="bi bi-filetype-jsx"></i>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              position: "absolute", bottom: "5%", right: "-15%", zIndex: 10,
              fontSize: "2.5rem", color: "#facc15", background: "var(--bg2)",
              borderRadius: "50%", padding: "10px", boxShadow: "0 10px 25px var(--border)"
            }}
          >
            <i className="bi bi-shield-lock-fill"></i>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{
              position: "absolute", top: "50%", left: "-25%", zIndex: 10,
              fontSize: "2rem", color: "#3b82f6", background: "var(--bg2)",
              borderRadius: "50%", padding: "8px", boxShadow: "0 10px 25px var(--border)"
            }}
          >
            <i className="bi bi-database-fill"></i>
          </motion.div>

          {/* Decorative shapes behind image */}
          <div className="photo-backdrop-outline" />
          <div className="photo-backdrop-solid" />

          <img src={profilePic} alt={info.name} className="profile-img" />
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 120px 2rem 4rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          gap: 4rem;
        }

        @keyframes blobBounce {
          0% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .hero-bg-blob {
          position: absolute;
          top: 5%;
          left: -5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
          animation: blobBounce 20s infinite ease-in-out;
        }

        .hero-content {
          flex: 1 1 500px;
          position: relative;
          z-index: 1;
        }

        .greeting {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--accent);
          margin-bottom: 1.2rem;
          letter-spacing: 0.08em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .name-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(3rem, 8vw, 5.5rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
          color: var(--text);
        }
        .name-title span { color: var(--accent); }

        .job-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(1.4rem, 4vw, 2.2rem);
          line-height: 1.2;
          color: var(--muted);
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .cursor-blink { animation: blink 1s step-end infinite; margin-left: 4px; color: var(--accent); }

        .description {
          color: var(--muted);
          max-width: 520px;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        .cta-container {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-primary {
          padding: 0.9rem 2.5rem;
          background: var(--accent);
          color: #ffffff;
          border-radius: 12px;
          font-weight: 600;
          font-family: var(--font-display);
          font-size: 1rem;
          transition: all 0.2s ease;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(37,99,235,0.2);
        }
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(37,99,235,0.3);
        }

        .cta-secondary {
          padding: 0.9rem 2.5rem;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.2s ease;
          text-decoration: none;
          color: var(--text);
        }
        .cta-secondary:hover {
          border-color: var(--muted);
          transform: translateY(-3px);
        }

        .social-container {
          display: flex;
          gap: 1.5rem;
          margin-top: 3.5rem;
          align-items: center;
        }
        .social-label {
          font-size: 0.85rem;
          color: var(--muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .social-line {
          width: 40px;
          height: 1px;
          background: var(--border);
        }
        .social-link {
          font-size: 0.95rem;
          color: var(--muted);
          font-weight: 500;
          transition: color 0.2s;
        }
        .social-link:hover { color: var(--accent); }

        .hero-image-container {
          flex: 1 1 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .photo-wrapper {
          position: relative;
          width: 100%;
          max-width: 320px;
        }

        .photo-backdrop-outline {
          position: absolute;
          top: 20px; right: -20px; bottom: -20px; left: 20px;
          border: 2px solid var(--accent);
          border-radius: 24px;
          z-index: 0;
          transition: transform 0.3s ease;
        }

        .photo-backdrop-solid {
          position: absolute;
          top: -15px; right: 20px; bottom: 15px; left: -20px;
          background: var(--bg3);
          border-radius: 24px;
          z-index: 0;
        }

        .profile-img {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
          object-position: top;
          border-radius: 24px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.06);
          position: relative;
          z-index: 1;
          display: block;
          transition: transform 0.4s ease;
        }

        .photo-wrapper:hover .profile-img { transform: translate(-5px, -5px); }
        .photo-wrapper:hover .photo-backdrop-outline { transform: translate(10px, 10px); }

        @media (max-width: 968px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding-top: 100px;
            gap: 3rem;
          }
          .hero-image-container {
            order: -1; /* Puts image at the top */
            margin-bottom: 1rem;
            width: 100%;
          }
          .photo-wrapper {
            max-width: 250px;
          }
          .cta-container {
            justify-content: center;
          }
          .social-container {
            justify-content: center;
          }
          .description {
            margin: 0 auto 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
