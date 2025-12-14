"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Cpu, Server, Terminal, Cloud, Layers, Box, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

export default function TechBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const icons = [Code, Database, Globe, Cpu, Server, Terminal, Cloud, Layers, Box, Smartphone];

  // Create 15 falling items
  const fallingItems = Array.from({ length: 15 }).map((_, i) => {
    const Icon = icons[i % icons.length];
    return {
      id: i,
      component: Icon,
      left: Math.floor(Math.random() * 90) + 5, // 5% to 95%
      duration: Math.floor(Math.random() * 15) + 10, // 10s - 25s fall time
      delay: Math.floor(Math.random() * 5),
      size: Math.floor(Math.random() * 20) + 20, // 20px - 40px
    };
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
            backgroundImage: `radial-gradient(#333 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      {/* Falling Icons */}
      {fallingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-gray-700" // Brighter gray so it's visible
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: "110vh", 
            opacity: [0, 0.4, 0.4, 0], 
            rotate: 360 
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            delay: item.delay,
          }}
          style={{
            left: `${item.left}%`,
          }}
        >
          <item.component size={item.size} />
        </motion.div>
      ))}
      
      {/* Gradient Overlay for Apple-like Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none" />
    </div>
  );
}