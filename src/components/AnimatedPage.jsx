import { motion } from "framer-motion";

export default function AnimatedPage({ children, className = "page-shell" }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -15, filter: "blur(5px)", transition: { duration: 0.15 } }}
        transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>

      {/* Wipe in effect: Bottom to top cover */}
      <motion.div
        className="color-swipe swipe-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Wipe out effect: Top to bottom reveal */}
      <motion.div
        className="color-swipe swipe-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      <style>{`
        .color-swipe {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999999;
          pointer-events: none;
          background: linear-gradient(180deg, var(--accent) 0%, #a5b4fc 100%);
        }
        [data-theme="dark"] .color-swipe {
          background: linear-gradient(180deg, #1e3a8a 0%, var(--accent) 100%);
        }
        .swipe-in {
          transform-origin: bottom;
        }
        .swipe-out {
          transform-origin: top;
        }
      `}</style>
    </>
  );
}
