"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-bold text-white tracking-widest uppercase hover:text-indigo-400 transition-colors">
          DK<span className="text-indigo-500">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium tracking-wide">
              {link.label}
            </a>
          ))}
        </div>
        <a href="mailto:denis.dev.ke@gmail.com" className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25">
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
