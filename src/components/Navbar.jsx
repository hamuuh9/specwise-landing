import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  /* Track scroll for shadow */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Main Nav ── */}
      <nav
        className="navbar-solid"
        style={{ boxShadow: scrolled ? '0 3px 0 #0B0B0B' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="no-underline flex items-center gap-2" id="nav-logo">
            {/* Yellow block accent */}
            <span
              className="inline-flex items-center justify-center bg-yellow border-2 border-ink px-2 py-0.5"
              style={{ boxShadow: '2px 2px 0 #0B0B0B' }}
            >
              <span className="font-bebas text-ink text-lg leading-none tracking-widest">SW</span>
            </span>
            <span className="font-bebas text-ink text-xl tracking-widest leading-none">
              SPECWISE<span className="text-muted font-bebas"> ESTIMATINGS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="font-grotesk font-600 text-sm text-ink hover:text-muted transition-colors no-underline"
              id="nav-home"
            >
              Home
            </Link>
            <Link
              to="/request"
              className="nb-btn-primary text-base px-6 py-2.5 no-underline"
              style={{ fontSize: '1rem' }}
              id="nav-cta"
            >
              GET ESTIMATE →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-mobile-menu-toggle"
          >
            <span
              className="block h-0.5 bg-ink transition-all duration-200"
              style={{
                width: '24px',
                transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
              }}
            />
            <span
              className="block h-0.5 bg-ink transition-all duration-200"
              style={{
                width: '24px',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 bg-ink transition-all duration-200"
              style={{
                width: '24px',
                transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu md:hidden"
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center gap-8">
              <Link
                to="/"
                className="font-bebas text-ink text-4xl tracking-widest no-underline hover:text-muted transition-colors"
                id="mobile-nav-home"
              >
                HOME
              </Link>
              <Link
                to="/request"
                className="nb-btn-primary text-lg no-underline"
                id="mobile-nav-cta"
              >
                GET ESTIMATE →
              </Link>

              {/* Trust mark */}
              <div className="flex gap-3 mt-4">
                <span className="nb-badge">48 HR DELIVERY</span>
                <span className="nb-badge">NATIONWIDE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
