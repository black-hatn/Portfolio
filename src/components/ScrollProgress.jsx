import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      <div className="scroll-progress" role="progressbar" aria-valuenow={Math.round(progress)} aria-label="Progression de lecture">
        <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <style>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: transparent;
          z-index: 9999;
        }
        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), #8ca6f9);
          transition: width 0.1s ease;
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-progress-bar {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
