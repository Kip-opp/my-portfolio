"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Cpu, Server, Terminal, Smartphone, Cloud, Layers, Box } from "lucide-react";
import { useEffect, useState } from "react";

export default function TechBackground() {
  const [isMounted, setIsMounted] = useState(false);

  // We wait for mount to avoid hydration mismatch errors with random values
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Configuration for the falling icons
  const icons = [
    Code, Database, Globe, Cpu, Server, Terminal, Smartphone, Cloud, Layers, Box
  ];

  // Create 20 falling items with random properties
  const fallingItems = Array.from({ length: 20 }).map((_, i) => {
    const Icon = icons[i % icons.length];
    const randomLeft = Math.floor(Math.random() * 100); // 0% to 100%
    const randomDuration = Math.floor(Math.random() * 20) + 10; // 10s to 30s
    const randomDelay = Math.floor(Math.random() * 10); // 0s to 10s
    const randomSize = Math.floor(Math.random() * 20) + 15; // 15px to 35px

    return {
      id: i,
      component: Icon,
      left: `${randomLeft}%`,
      duration: randomDuration,
      delay: randomDelay,
      size: randomSize,
    };
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* 1. STATIC STARS (Simple CSS dots) */}
      <div className="absolute inset-0 opacity-40" 
           style={{
             backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
             backgroundSize: '50px 50px' 
           }}>
      </div>
      
      {/* 2. FALLING TECH ICONS */}
      {fallingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-blue-900/40" // Very subtle color
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: "110vh", 
            opacity: [0, 1, 1, 0], // Fade in, stay visible, fade out at bottom
            rotate: 360 // Slow rotation
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            delay: item.delay,
          }}
          style={{
            left: item.left,
            width: item.size,
            height: item.size,
          }}
        >
          <item.component size={item.size} />
        </motion.div>
      ))}
      
      {/* 3. GRADIENT OVERLAY (To ensure text remains readable) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
    </div>
  );
}