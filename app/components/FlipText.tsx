"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FlipTextProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export function FlipText({
  children,
  duration = 2.2,
  delay = 0,
  className = "",
}: FlipTextProps) {
  const text = typeof children === "string" ? children : "";
  const characters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8 },
    },
    hidden: {
      opacity: 0,
      rotateX: -90,
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}