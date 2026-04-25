"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

interface SplineViewerProps {
  sceneUrl?: string;
}

// SplineViewer - Optimized version with reduced animations
// Note: To enable actual Spline 3D, install the package: npm install @splinetool/react-spline
export default function SplineViewer({ 
  sceneUrl = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
}: SplineViewerProps) {
  const { scrollY } = useScroll();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Parallax effect for 3D element - optimized ranges
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  // Memoize animation configs
  const mainRingTransition = useMemo(() => ({
    duration: 30, 
    repeat: Infinity, 
    ease: "linear" as const
  }), []);

  const innerRingTransition = useMemo(() => ({
    duration: 25, 
    repeat: Infinity, 
    ease: "linear" as const
  }), []);

  // Reduced particles from 6 to 3
  const particles = useMemo(() => 
    Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      animate: {
        x: [0, Math.sin(i) * 80, 0],
        y: [0, Math.cos(i) * 80, 0],
        opacity: [0.3, 0.7, 0.3],
      },
      transition: {
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: i * 0.5,
      }
    }))
  , []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div 
      style={{ y, opacity, scale }}
      className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
    >
      {/* Fallback: Optimized animated geometric shapes */}
      <div className="relative w-[500px] h-[500px]">
        {/* Main ring - hardware accelerated with transform */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={mainRingTransition}
          className="absolute inset-0 rounded-full border border-indigo-500/10"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(99,102,241,0.3), transparent)',
            willChange: 'transform',
          }}
        />
        
        {/* Inner ring */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={innerRingTransition}
          className="absolute inset-8 rounded-full border border-purple-500/10"
          style={{
            background: 'conic-gradient(from 180deg, transparent, rgba(139,92,246,0.2), transparent)',
            willChange: 'transform',
          }}
        />
        
        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-32 h-32 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
            }}
          />
        </div>
        
        {/* Floating particles - reduced from 6 to 3 */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            animate={particle.animate}
            transition={particle.transition}
            style={{
              left: '50%',
              top: '50%',
              marginLeft: -4,
              marginTop: -4,
              background: particle.id % 2 === 0 ? '#6366f1' : '#8b5cf6',
              boxShadow: `0 0 10px ${particle.id % 2 === 0 ? '#6366f1' : '#8b5cf6'}`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// AnimatedShape - Single, optimized version (no duplicates)
// This is the main 3D-like element used in the hero section
export function AnimatedShape() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const y = useTransform(scrollY, [0, 500], [0, -80]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  // Memoize transitions
  const mainRingTransition = useMemo(() => ({
    duration: 30, 
    repeat: Infinity, 
    ease: "linear" as const
  }), []);

  const innerRingTransition = useMemo(() => ({
    duration: 25, 
    repeat: Infinity, 
    ease: "linear" as const
  }), []);

  // Reduced particles from 6 to 3
  const particles = useMemo(() => 
    Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      animate: {
        x: [0, Math.sin(i) * 80, 0],
        y: [0, Math.cos(i) * 80, 0],
        opacity: [0.3, 0.7, 0.3],
      },
      transition: {
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: i * 0.5,
      }
    }))
  , []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div 
      style={{ y, rotate }}
      className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden"
    >
      {/* Floating geometric shapes */}
      <div className="relative w-[500px] h-[500px]">
        {/* Main ring - hardware accelerated */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={mainRingTransition}
          className="absolute inset-0 rounded-full border border-indigo-500/10"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(99,102,241,0.3), transparent)',
            willChange: 'transform',
          }}
        />
        
        {/* Inner ring */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={innerRingTransition}
          className="absolute inset-8 rounded-full border border-purple-500/10"
          style={{
            background: 'conic-gradient(from 180deg, transparent, rgba(139,92,246,0.2), transparent)',
            willChange: 'transform',
          }}
        />
        
        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-32 h-32 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
            }}
          />
        </div>
        
        {/* Floating particles - reduced from 6 to 3 */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            animate={particle.animate}
            transition={particle.transition}
            style={{
              left: '50%',
              top: '50%',
              marginLeft: -4,
              marginTop: -4,
              background: particle.id % 2 === 0 ? '#6366f1' : '#8b5cf6',
              boxShadow: `0 0 10px ${particle.id % 2 === 0 ? '#6366f1' : '#8b5cf6'}`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}