import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export default function AnimatedCounter({ from = 0, to, suffix = "", duration = 2 }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (prefersReducedMotion || !ref.current || !isInView) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) ref.current.textContent = Math.round(value) + suffix;
      },
    });
    return () => controls.stop;
  }, [from, to, isInView, duration, suffix, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span>{Math.round(to)}{suffix}</span>;
  }

  return <span ref={ref}>{from}{suffix}</span>;
}
