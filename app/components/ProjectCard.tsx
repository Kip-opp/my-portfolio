"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
  align?: 'left' | 'right';
  index?: number;
}

export default function ProjectCard({ title, description, tags, githubLink, liveLink, image, align = 'left', index = 0 }: ProjectProps) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center mb-28 md:mb-36`}
    >
      <div className="w-full md:w-[58%] group relative">
        <span className="absolute -top-8 left-0 font-mono text-[80px] font-bold leading-none select-none pointer-events-none z-10" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(59,130,246,0.15)' }}>{num}</span>
        <div className="relative h-[280px] md:h-[420px] w-full rounded-2xl overflow-hidden bg-gray-900/40 shadow-2xl transition-all duration-500 group-hover:border-indigo-500/40 group-hover:shadow-indigo-500/10 group-hover:shadow-2xl" style={{ border: '1px solid var(--border-color)' }}>
          <Image src={image} alt={title} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-[3px]">
            {liveLink && <Link href={liveLink} target="_blank" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-100"><ExternalLink size={15} /> Live Demo</Link>}
            <Link href={githubLink} target="_blank" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-white/20"><Github size={15} /> Code</Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[42%]">
        <p className="font-mono text-xs text-blue-400 mb-3 tracking-widest uppercase">Project {num}</p>
        <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 tracking-tight leading-tight">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full" style={{ background: 'var(--bg-accent)', border: '1px solid var(--border-accent)', color: 'var(--text-accent)' }}>{tag}</span>
          ))}
        </div>
        <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>{description}</p>
        <div className="flex gap-5 items-center">
          <Link href={githubLink} target="_blank" className="group/link flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] hover:text-blue-400 transition-colors">
            <Github size={18} /><span>View Code</span><ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
          </Link>
          {liveLink && <Link href={liveLink} target="_blank" className="group/link flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: 'var(--text-muted)' }}><ExternalLink size={16} /><span>Live Demo</span></Link>}
        </div>
      </div>
    </motion.div>
  );
}
