"use client";
import { motion } from "framer-motion";
import { Code, Database, Globe, Cpu, Server, Terminal, Cloud, Layers, Box, Smartphone, GitBranch, Zap } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

export default function TechBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const icons = [Code, Database, Globe, Cpu, Server, Terminal, Cloud, Layers, Box, Smartphone, GitBranch, Zap];
  const fallingItems = useMemo(() => Array.from({ length: 18 }).map((_, i) => ({ id: i, component: icons[i % icons.length], left: Math.floor(Math.random() * 90) + 5, duration: Math.floor(Math.random() * 20) + 15, delay: Math.floor(Math.random() * 8), size: Math.floor(Math.random() * 14) + 14, opacity: (Math.random() * 0.15) + 0.05, })), []);
  if (!mounted) return null;
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" style={{ background: '#030712' }}>
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(rgba(99,102,241,0.15) 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />
      {fallingItems.map((item) => (
        <motion.div key={item.id} className="absolute text-indigo-400/20" initial={{ y: -80, opacity: 0 }} animate={{ y: "110vh", opacity: [0, item.opacity, item.opacity, 0], rotate: 180 }} transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: item.delay }} style={{ left: `${item.left}%` }}><item.component size={item.size} /></motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]/80 pointer-events-none" />
    </div>
  );
}
