import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Hide default cursor globally
    document.body.style.cursor = "none";
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="cursor-dot"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
        style={{
          position: "fixed", top: 0, left: 0,
          width: "8px", height: "8px",
          backgroundColor: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="cursor-ring"
        animate={{ x: mousePosition.x - 15, y: mousePosition.y - 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.5 }}
        style={{
          position: "fixed", top: 0, left: 0,
          width: "30px", height: "30px",
          border: "1px solid var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
      <style>{`
        a:hover ~ * .cursor-ring, button:hover ~ * .cursor-ring {
          transform: scale(1.5) !important;
          background-color: rgba(37,99,235,0.1);
        }
      `}</style>
    </>
  );
}
