"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "hover" | "interactive";
  glowColor?: "blue" | "emerald";
}

const glowColors = {
  indigo: "rgba(99, 102, 241,",

  blue: "rgba(59, 130, 246,",
  emerald: "rgba(16, 185, 129,",
};

export default function GlassCard({
  children,
  variant = "default",
  glowColor = "blue",
  className = "",
  ...props
}: GlassCardProps) {
  const baseClasses = `
    relative overflow-hidden rounded-3xl
    bg-white/[0.02] backdrop-blur-xl
    border border-white/[0.06]
    transition-all duration-500
  `;

  const hoverClasses = variant === "hover" || variant === "interactive"
    ? "hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-xl"
    : "";

  const interactiveClasses = variant === "interactive"
    ? "cursor-pointer active:scale-[0.98]"
    : "";

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${interactiveClasses} ${className}`}
      {...props}
    >
      {/* Glass highlight */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${glowColors[glowColor]}0.08) 0%, transparent 50%, ${glowColors[glowColor]}0.03) 100%)`,
        }}
      />
      
      {/* Top highlight */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColors[glowColor]}0.5), transparent)`,
        }}
      />

      {/* Corner glow on hover */}
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-3xl"
        style={{
          background: `${glowColors[glowColor]}0.15)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

// Gradient border variant
export function GradientBorderCard({ 
  children, 
  className = "",
  ...props 
}: { children: ReactNode; className?: string }) {
  return (
    <div 
      className={`relative rounded-3xl p-px ${className}`}
      style={{
        background: `linear-gradient(135deg, rgba(99,102,241,0.5), rgba(139,92,246,0.5))`,
      }}
      {...props}
    >
      <div 
        className="relative rounded-3xl h-full bg-[#030712]"
        style={{
          background: 'radial-gradient(circle at top left, rgba(99,102,241,0.05), transparent 50%)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

// Animated border variant
export function AnimatedBorderCard({ 
  children, 
  className = "",
  ...props 
}: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-3xl ${className}`} {...props}>
      {/* Animated gradient border */}
      <div 
        className="absolute inset-0 rounded-3xl animate-gradient-xy"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8, #2563eb, #3b82f6)',
          backgroundSize: '300% 300%',
        }}
      />
      
      {/* Inner content */}
      <div className="relative rounded-[calc(0.75rem-1px)] bg-[#030712] m-px">
        {children}
      </div>
    </div>
  );
}