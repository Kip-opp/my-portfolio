"use client";

import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from "lucide-react";
import Image from 'next/image';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectCardProps {
  align?: 'left' | 'right';
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  image: string;
  problem: string;
  solution: string;
  metrics: ProjectMetric[];
  metricNote: string;
  teamContribution?: string;
  imageAspectRatio?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  githubLink, 
  liveLink, 
  image,
  problem,
  solution,
  metrics,
  metricNote,
  teamContribution,
  imageAspectRatio,
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
    <article
      ref={ref}
      className={`
        project-card mx-auto w-full max-w-[1440px] overflow-hidden rounded-2xl border border-[var(--border-color)]
        bg-[var(--color-card)] transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
    >
      <div className="relative bg-[var(--bg-primary)] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] opacity-70" />
        <header className="mb-8 flex flex-col gap-5 border-b border-[var(--border-color)] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl text-left">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-accent)]">Featured project</p>
            <h3 className="mb-2 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">{description}</p>
          </div>
          <div className="flex shrink-0 gap-3">
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
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)] lg:gap-12">
          <div className="space-y-7 text-left">
            <section aria-labelledby={`${title}-problem`}>
              <h4 id={`${title}-problem`} className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-accent)]">Problem</h4>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">{problem}</p>
            </section>
            <section aria-labelledby={`${title}-solution`}>
              <h4 id={`${title}-solution`} className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-accent)]">Solution</h4>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">{solution}</p>
            </section>
            {teamContribution && (
              <section aria-labelledby={`${title}-contribution`} className="border-l-2 border-[var(--accent)] pl-4">
                <h4 id={`${title}-contribution`} className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-accent)]">Team contribution</h4>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{teamContribution}</p>
              </section>
            )}
          </div>

          <aside className="space-y-7 text-left">
            <div>
              <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-accent)]">Technology stack</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[var(--border-color)] bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--text-accent)]">{tag}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-accent)]">Documented scope</h4>
              <div className="flex flex-wrap gap-2">
                {metrics.map((metric) => (
                  <div key={`${metric.value}-${metric.label}`} className="min-w-[120px] rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-left">
                    <span className="block text-lg font-bold text-[var(--text-primary)]">{metric.value}</span>
                    <span className="text-xs text-[var(--text-muted)]">{metric.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">{metricNote}</p>
            </div>
          </aside>
        </div>

        <div className="group relative mt-10 overflow-hidden rounded-xl border border-[var(--border-color)] bg-slate-950 shadow-sm">
          <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-slate-900 px-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-3 h-4 flex-1 rounded bg-white/10 px-2 text-[9px] leading-4 text-slate-400">{title.toLowerCase()}.app</div>
          </div>
          <div
            className="relative aspect-[16/7] overflow-hidden bg-[var(--bg-secondary)]"
            style={imageAspectRatio ? { aspectRatio: imageAspectRatio } : undefined}
          >
            <Image
              src={image}
              alt={`${title} project interface screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
                target.onerror = null;
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}