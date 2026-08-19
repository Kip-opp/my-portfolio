"use client";

import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  align: 'left' | 'right';
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  image: string;
  problem?: string;
  solution?: string;
}

export default function ProjectCard({ 
  align, 
  title, 
  description, 
  tags, 
  githubLink, 
  liveLink, 
  image,
  problem = 'Identify key challenges in the development process.',
  solution = 'Explore how we solved these challenges with innovative architectural patterns.'
}: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={ref}
      className={`
        project-card p-0 overflow-hidden rounded-2xl border border-[var(--border-color)]
        bg-[var(--color-card)] transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
    >
      <div className="grid md:grid-cols-2 md:items-stretch">
        {/* Image Section */}
        <div className={`
          group relative aspect-video overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-secondary)] md:aspect-auto md:min-h-full
          ${align === 'left' ? 'md:order-1' : 'md:order-2'}
        `}>
          <div className="absolute inset-3 overflow-hidden rounded-xl border border-slate-300/30 bg-slate-950 shadow-none sm:inset-5">
            <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-slate-900 px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-3 h-4 flex-1 rounded bg-white/10 px-2 text-[9px] leading-4 text-slate-400">{title.toLowerCase()}.app</div>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <img
                src={image}
                alt={`${title} screenshot`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                  target.onerror = null;
                }}
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
          <div className={`
          p-6 sm:p-8 lg:p-7
          ${align === 'left' ? 'md:order-2' : 'md:order-1'}
          flex flex-col bg-[var(--bg-primary)]
        `}>
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] opacity-70" />
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[var(--text-primary)]">
              {title}
            </h3>
            
            <div className="mb-3">
              <p className="text-sm text-[var(--text-secondary)] italic">
                Problem: {problem}
              </p>
            </div>
            
            <div className="mb-3">
              <p className="text-sm text-[var(--text-secondary)]">
                Solution: {solution}
              </p>
            </div>
          </div>

          <p className="mb-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {description}
          </p>
          
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium 
                  bg-[var(--accent)]/10 text-[var(--text-accent)]
                  border border-[var(--border-color)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium 
                text-[var(--text-primary)] hover:text-[var(--text-accent)] 
                border border-[var(--border-color)] hover:border-[var(--text-accent)]/30
                transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            
            {liveLink !== '#' && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium 
                  text-[var(--text-primary)] hover:text-[var(--text-accent)] 
                  border border-[var(--border-color)] hover:border-[var(--text-accent)]/30
                  transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
            
            {liveLink === '#' && (
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium 
                  text-[var(--text-primary)]/50 border border-[var(--border-color)]/30
                  cursor-not-allowed"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}