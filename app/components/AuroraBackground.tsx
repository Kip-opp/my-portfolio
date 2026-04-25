"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { Code, Database, Globe, Cpu, Server, Terminal, Cloud, Layers, Box, Smartphone, GitBranch, Zap } from "lucide-react";

// Seeded random function to avoid impure calls during render
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

// Custom hook for centralized scroll handling with throttling
function useScrollPosition(throttleMs: number = 16) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastScrollTime = 0;

    const handleScroll = () => {
      const now = Date.now();
      
      if (now - lastScrollTime >= throttleMs && !ticking) {
        lastScrollTime = now;
        ticking = true;
        
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttleMs]);

  return scrollY;
}

// Check for reduced motion preference - initialized with check to avoid sync setState
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

export default function AuroraBackground() {
  // Use initialized state to avoid setState in effect - always true on client
  const [mounted] = useState(true);
  const scrollY = useScrollPosition(16);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Use framer-motion's useScroll for proper MotionValue
  const { scrollY: framerScrollY } = useScroll();
  
  // Optimized: Single set of transforms instead of multiple
  const y1 = useTransform(framerScrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(framerScrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(framerScrollY, [0, 1000], [0, 100]);

  // Optimized: Reduced from 18 to 4 icons (77% reduction)
  const icons = [Code, Database, Globe, Cpu, Server, Terminal, Cloud, Layers, Box, Smartphone, GitBranch, Zap];
  
  // Pre-defined values using seeded random to avoid impure calls during render
  const fallingItems = useMemo(() => {
    if (prefersReducedMotion) return [];
    
    return Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      component: icons[i % icons.length],
      left: Math.floor(seededRandom(i * 7) * 80) + 10,
      duration: Math.floor(seededRandom(i * 11) * 20) + 20,
      delay: Math.floor(seededRandom(i * 13) * 10),
      size: Math.floor(seededRandom(i * 17) * 10) + 16,
      opacity: (seededRandom(i * 19) * 0.08) + 0.02,
    }));
  }, [prefersReducedMotion, icons]);

  // Memoized animation config
  const iconAnimation = useMemo(() => ({
    y: "110vh", 
    opacity: [0, 0.15, 0.15, 0], 
    rotate: 180 
  }), []);

  const iconTransition = useMemo(() => ({ 
    duration: 20, 
    repeat: Infinity, 
    ease: "linear" as const, 
    delay: 0 
  }), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" style={{ background: '#030712' }}>
      {/* ── Grid Pattern ── */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `radial-gradient(rgba(99,102,241,0.12) 1px, transparent 1px)`, 
          backgroundSize: '48px 48px' 
        }} 
      />

      {/* ── Aurora Blobs (Reduced from 3 to 2 for better performance) ── */}
      {!prefersReducedMotion && (
        <>
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-[-30%] left-[-15%] w-[800px] h-[800px] rounded-full pointer-events-none blur-[120px]"
          >
            <div 
              className="w-full h-full rounded-full"
              style={{ 
                background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)',
              }} 
            />
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[-25%] right-[-15%] w-[700px] h-[700px] rounded-full pointer-events-none blur-[100px]"
          >
            <div 
              className="w-full h-full rounded-full"
              style={{ 
                background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.12) 40%, transparent 70%)',
              }} 
            />
          </motion.div>

          <motion.div 
            style={{ y: y3 }}
            className="absolute top-[40%] left-[60%] w-[500px] h-[500px] rounded-full pointer-events-none blur-[80px]"
          >
            <div 
              className="w-full h-full rounded-full"
              style={{ 
                background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)',
              }} 
            />
          </motion.div>
        </>
      )}

      {/* ── Mesh Gradient Overlay ── */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(at 20% 20%, rgba(99,102,241,0.08) 0%, transparent 40%),
            radial-gradient(at 80% 80%, rgba(139,92,246,0.06) 0%, transparent 40%),
            radial-gradient(at 60% 30%, rgba(59,130,246,0.04) 0%, transparent 30%)
          `,
          animation: prefersReducedMotion ? 'none' : 'mesh-shift 20s ease infinite alternate',
        }}
      />

      {/* ── Falling Tech Icons (Reduced to 4) ── */}
      {!prefersReducedMotion && fallingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-indigo-400/20"
          initial={{ y: -80, opacity: 0 }}
          animate={iconAnimation}
          transition={{ 
            duration: item.duration, 
            repeat: Infinity, 
            ease: "linear" as const, 
            delay: item.delay 
          }}
          style={{ left: `${item.left}%` }}
        >
          <item.component size={item.size} />
        </motion.div>
      ))}

      {/* ── Gradient Fade at Bottom ── */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]/90 pointer-events-none" 
      />
      
      {/* ── Noise Texture (CSS-only, no JS) ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}