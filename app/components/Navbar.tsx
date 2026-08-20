"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light';
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    return savedTheme;
  });
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return () => unsub();
  }, [scrollY]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[var(--bg-nav)] backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
          : "py-4 bg-[var(--bg-nav)] backdrop-blur-xl"
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-[var(--accent-secondary)] opacity-80" />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between gap-4">
        <a href="#about" className="shrink-0 font-mono text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-[0.14em] uppercase hover:text-[var(--text-accent)] transition-colors">
          DENIS K<span className="text-[var(--accent)]">.</span>
        </a>

        <div className="flex items-center justify-end gap-3 sm:gap-6 md:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hidden sm:block text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] hover:border-[var(--text-accent)]/30 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-2 text-[var(--text-primary)] hover:border-[var(--text-accent)]/30 hover:text-[var(--text-accent)] transition-colors duration-200 sm:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-[var(--border-color)] px-4 pb-3 pt-2 sm:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[var(--border-color)] py-3 text-sm font-medium tracking-wide text-[var(--text-secondary)] last:border-b-0 hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
