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
  align?: 'left' | 'right'; // New prop to alternate layout
}

export default function ProjectCard({ title, description, tags, githubLink, liveLink, image, align = 'left' }: ProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center mb-24`}
    >
      {/* IMAGE SIDE (Interactive Tilt) */}
      <div className="w-full md:w-3/5 group">
        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 shadow-2xl transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-blue-500/20">
            {/* The Image */}
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                {liveLink && (
                  <Link href={liveLink} target="_blank" className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink size={18} /> Live Demo
                  </Link>
                )}
            </div>
        </div>
      </div>

      {/* TEXT SIDE */}
      <div className="w-full md:w-2/5">
        <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-mono text-blue-300 bg-blue-900/20 rounded-full border border-blue-900/50">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {description}
        </p>

        <div className="flex gap-6 items-center">
            <Link href={githubLink} target="_blank" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 pb-1">
                <Github size={20} /> <span className="font-semibold">View Code</span>
            </Link>
        </div>
      </div>
    </motion.div>
  );
}