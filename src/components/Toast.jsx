import { useEffect } from "react";

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <>
      <div className="toast" role="status" aria-live="polite">
        <i className="bi bi-check-circle-fill" aria-hidden />
        <span>{message}</span>
      </div>
      <style>{`
        .toast {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: #fff;
          padding: 12px 24px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          z-index: 9999;
          animation: toastIn 0.3s ease;
        }
        @keyframes toastIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .toast i {
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
