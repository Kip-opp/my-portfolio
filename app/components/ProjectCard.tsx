"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import GlassCard from "./GlassCard";

interface ProjectCardProps {
  align: 'left' | 'right';
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  image: string;
}

export default function ProjectCard({ 
  align, 
  title, 
  description, 
  tags, 
  githubLink, 
  liveLink, 
  image 
}: ProjectCardProps) {
  return (
    <div className="grid gap-6 md:grid-cols-[{align===left?'1fr 350px':'350px 1fr'}] items-center">
      {/* Image Section */}
      <div className="relative">
        <img 
          src={image} 
          alt={`${title} screenshot`}
          className="rounded-2xl w-[350px] h-[220px] object-cover border border-[var(--border-color)] bg-[var(--bg-secondary)]"
          onError={(e) => {
            e.target.src = '/placeholder.png'; 
            e.target.onerror = null; 
          }}
        />
        {/* Image overlay for better text visibility */}
        <div className="absolute inset-0 rounded-2xl bg-black/30"></div>
      </div>

      {/* Content Section */}
      <GlassCard className="p-6">
        <h2 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">
          {title}
        </h2>
        
        <p className="mb-5 text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
        
        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
{tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-color)]"
              >
                {tag}
              </span>
            ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all"
          >
            <Github className="h-4 w-4" /> Github
          </a>
          
          {liveLink !== '#' && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
          
          {liveLink === '#' && (
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-[var(--text-muted)] border border-[var(--border-color)]/50"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </GlassCard>
    </div>
  );
}