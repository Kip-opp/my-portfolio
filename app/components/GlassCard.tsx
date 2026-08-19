"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "hover" | "interactive";
  glowColor?: "blue" | "teal";
}

const glowColors: { [k: string]: string } = {
  blue: 'rgba(14, 165, 233, 0.14)',
  teal: 'rgba(20, 184, 166, 0.14)',
};

export default function GlassCard({
  children,
  variant = "default",
  glowColor = "blue",
  className = "",
  ...props
}: GlassCardProps) {
  const baseClasses = `
    relative overflow-hidden rounded-2xl
    group
    bg-[var(--color-card)]/95 backdrop-blur-xl
    border border-[var(--border-color)]
    shadow-none
    transition-all duration-500
  `;

  const hoverClasses = variant === "hover" || variant === "interactive"
    ? "hover:border-[var(--text-accent)]/40 hover:bg-[var(--color-card-hover)]"
    : "";

  const interactiveClasses = variant === "interactive"
    ? "cursor-pointer active:scale-[0.98]"
    : "";

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${interactiveClasses} ${className}`}
      {...props}
    >
      {/* Quiet gradient wash keeps the card dimensional without a heavy shadow. */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${glowColors[glowColor]} 0%, transparent 50%, ${glowColors[glowColor]} 100%)`,
        }}
      />
      
      {/* Top highlight */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColors[glowColor]})`,
        }}
      />

      {/* Corner glow on hover */}
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-3xl"
        style={{
          background: `${glowColors[glowColor]}`,
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
      className={`relative rounded-2xl p-px ${className}`}
      style={{
        background: `linear-gradient(135deg, rgba(20,184,166,0.55), rgba(14,165,233,0.55))`,
      }}
      {...props}
    >
      <div 
        className="relative rounded-2xl h-full bg-[var(--color-card)]"
        style={{
          background: 'radial-gradient(circle at top left, rgba(20,184,166,0.08), transparent 50%)',
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
      <div className="relative rounded-[calc(0.75rem-1px)] bg-[var(--color-card)] m-px">
        {children}
      </div>
    </div>
  );
}