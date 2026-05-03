import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import CustomCursor from "./components/CustomCursor";
import AnimatedPage from "./components/AnimatedPage";
import ScrollProgress from "./components/ScrollProgress";
import KonamiCode from "./components/KonamiCode";
import HomePage from "./pages/HomePage";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function RouteEffects({ pathname }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.classList.toggle("route-home", pathname === "/");
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
    
    return () => {
      document.body.classList.remove("route-home");
    };
  }, [pathname, t, i18n]);
  return null;
}

export default function App() {
  const location = useLocation();
  const mainRef = useRef(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <KonamiCode />
      <ScrollProgress />
      <CustomCursor theme={theme} />
      <a
        href="#main-content"
        className="skip-link"
        onClick={() => {
          queueMicrotask(() => mainRef.current?.focus({ preventScroll: true }));
        }}
      >
        Aller au contenu
      </a>
      <RouteEffects pathname={location.pathname} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main ref={mainRef} id="main-content" className="app-main" tabIndex={-1}>
        <Suspense fallback={<Spinner />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage><HomePage theme={theme} onThemeToggle={toggleTheme} /></AnimatedPage>} />
                <Route path="/a-propos" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
                <Route path="/portfolio" element={<AnimatedPage><PortfolioPage /></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <button
        type="button"
        className="theme-float"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
      >
        <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"}`} />
      </button>


    </>
  );
}
