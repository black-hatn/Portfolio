import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor({ theme }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 992) {
    return null;
  }

  const ringSize = 34;

  const ringVariants = {
    default: {
      x: mousePosition.x - ringSize / 2,
      y: mousePosition.y - ringSize / 2,
      scale: 1,
      backgroundColor: "transparent",
      borderColor: "var(--accent)",
    },
    hover: {
      x: mousePosition.x - ringSize / 2,
      y: mousePosition.y - ringSize / 2,
      scale: 1.5,
      backgroundColor: "rgba(65, 105, 225, 0.15)", /* var(--accent) light */
      borderColor: "rgba(65, 105, 225, 0.4)",
    },
  };

  return (
    <>
      <motion.div
        className="custom-cursor-ring"
        variants={ringVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.5 }}
      />
      <style>{`
        .custom-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: ${ringSize}px;
          height: ${ringSize}px;
          border-radius: 50%;
          border: 1px solid var(--accent);
          pointer-events: none;
          z-index: 9998;
        }
        @media (max-width: 991px) {
          .custom-cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
