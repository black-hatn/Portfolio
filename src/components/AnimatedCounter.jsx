import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function AnimatedCounter({ from = 0, to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          ref.current.textContent = Math.round(value) + suffix;
        }
      });
      return controls.stop;
    }
  }, [from, to, isInView, duration, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}
