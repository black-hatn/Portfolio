import { useState, useEffect, useCallback } from "react";

const KONAMI_CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export default function KonamiCode() {
  const [input, setInput] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const activateHackerMode = useCallback(() => {
    setIsActive(true);
    document.body.classList.add("hacker-mode");
    
    // Play retro sound effect (optional)
    try {
      const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSA0PVanu87plHQUuh9Dz2YU2Bhxqv+zplkcODVGm5O+4ZSAEMYrO89CFNwYdcfDr4ZdJDQtPp+XysWUeBjiS1/LNfi0GI33R8tOENAcdcO/r4phJDQxPp+TwxGUhBjqT1/PQfS4GI3/R8tSFNwYdcfDr4phJDQxPp+TwxGUhBjqT1/PQfS4GI3/R8tSFNwYdcfDr4phJDQxPp+TwxGUhBjqT1/PQfS4GI3/R8tSFNwYdcfDr4phJDQw==");
      audio.volume = 0.3;
      audio.play().catch(() => {});
    } catch {}

    // Reset after 10 seconds
    setTimeout(() => {
      setIsActive(false);
      document.body.classList.remove("hacker-mode");
    }, 10000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newInput = [...input, e.key];
      
      // Keep only last 10 keys
      if (newInput.length > 10) {
        newInput.shift();
      }
      
      setInput(newInput);

      // Check if code matches
      if (newInput.join(",") === KONAMI_CODE.join(",")) {
        activateHackerMode();
        setInput([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input, activateHackerMode]);

  if (!isActive) return null;

  return (
    <>
      <div className="konami-overlay" aria-hidden="true">
        <div className="matrix-bg" />
        <div className="konami-text">HACKER MODE ACTIVATED</div>
      </div>
      <style>{`
        .hacker-mode {
          --accent: #00ff00 !important;
          --accent-hover: #00cc00 !important;
        }
        .hacker-mode * {
          text-shadow: 0 0 10px #00ff00;
        }
        .konami-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: konamiFade 0.5s ease;
        }
        @keyframes konamiFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .matrix-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, 
            rgba(0, 255, 0, 0.1) 0%, 
            transparent 50%
          );
          animation: matrixRain 2s linear infinite;
        }
        @keyframes matrixRain {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
        .konami-text {
          font-family: "Courier New", monospace;
          font-size: 2rem;
          font-weight: bold;
          color: #00ff00;
          text-shadow: 0 0 20px #00ff00;
          animation: konamiPulse 1s ease infinite;
          z-index: 1;
        }
        @keyframes konamiPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </>
  );
}
