"use client";

import { useState, useEffect } from "react";
import ProjectCard from './components/ProjectCard';
import BentoGrid from './components/BentoGrid';
import ScrollReveal from './components/ScrollReveal';
import Navbar from './components/Navbar';
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight, Code2, Brain, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

// ─── Data ────────────────────────────────────────────────────────────────────

const skills = [
  'C#', '.NET 9', 'WPF', 'MVVM', 'React 18', 'TypeScript',
  'Tailwind CSS', 'Supabase', 'OpenAI API', 'Ollama', 'Zustand',
  'HTML5 Canvas', 'Node.js', 'Vite', 'Git & CI/CD', 'REST APIs',
];

const stats = [
  { value: '4+', label: 'Shipped Repositories' },
  { value: '100%', label: 'Client-Side Security' },
  { value: '2+', label: 'Core Tech Stacks (.NET & TS)' },
  { value: '0', label: 'Server Data Leaks' },
];

const services = [
  {
    icon: <Cpu size={22} />,
    title: 'Desktop & Systems Engineering',
    description: 'Building robust, high-performance desktop software in C# and WPF adhering to strict MVVM architecture.',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Full-Stack Web Development',
    description: 'Crafting responsive web applications with React, TypeScript, Vite, and Supabase backend integration.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Privacy-First Utilities',
    description: 'Engineering zero-upload browser tools and local AI inference pipelines (Ollama) to guarantee absolute data privacy.',
  },
];

const projects = [
  {
    align: 'left' as const,
    title: 'Q-flow',
    description:
      'A sophisticated quantum mechanics simulation desktop app built with .NET 9 and WPF. Features real-time probability visualization for qubit gate operations (H, X, Z) and wavepacket motion, adhering to strict MVVM architecture and modular design.',
    tags: ['C#', '.NET 9', 'WPF', 'MVVM'],
    githubLink: 'https://github.com/Kip-opp/Q-flow',
    liveLink: '#',
    image: '/qflow.png',
  },
  {
    align: 'right' as const,
    title: 'Lumina',
    description:
      'An AI-powered writing assistant built with React and Supabase. Offers real-time text analysis, grammar correction, and tone adaptation with a dual-provider architecture supporting cloud OpenAI and local Ollama models.',
    tags: ['React', 'Supabase', 'OpenAI', 'Ollama'],
    githubLink: 'https://github.com/Kip-opp/lumina',
    liveLink: 'https://lumina-zeta-swart.vercel.app',
    image: '/lumina.png',
  },
  {
    align: 'left' as const,
    title: 'VidForge-TSX',
    description:
      'A centralized discovery platform for generative AI video models. Built with React 18 and TypeScript, leveraging Zustand for high-performance state management and a custom Tailwind animation system.',
    tags: ['TypeScript', 'React 18', 'Zustand', 'Tailwind'],
    githubLink: 'https://github.com/Kip-opp/vidforge-tsx',
    liveLink: '#',
    image: '/vidforge.png',
  },
  {
    align: 'right' as const,
    title: 'imgwatermaker',
    description:
      'A privacy-first security utility performing 100% client-side image watermarking via the HTML5 Canvas API. Designed for sensitive document protection (IDs, passports) with zero data transmission to external servers.',
    tags: ['JavaScript', 'HTML5 Canvas', 'Security'],
    githubLink: 'https://github.com/Kip-opp/imgwatermaker',
    liveLink: 'https://kip-opp.github.io/imgwatermaker/',
    image: '/watermaker.png',
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark';
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    return savedTheme;
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden selection:bg-indigo-500 selection:text-white"
      style={{ background: 'var(--bg-primary, #09090b)', color: 'var(--text-primary, #f4f4f5)', fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════ */}
        <section id="about" className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            >
              {/* Name */}
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-7xl md:text-[92px] font-bold tracking-tight mb-6 leading-[1.05] text-[var(--text-primary, #f4f4f5)]"
              >
                Denis Kipruto<span className="text-indigo-500">.</span>
              </motion.h1>

              {/* Role */}
              <div className="text-xl md:text-2xl mb-6 font-medium text-[var(--text-secondary, #a1a1aa)]">
                Software Engineer & Systems Developer
              </div>

              {/* Description */}
              <p
                className="text-base md:text-lg max-w-2xl leading-relaxed mb-10"
                style={{ color: 'var(--text-secondary, #a1a1aa)' }}
              >
                I build robust, high-performance software spanning{' '}
                <span className="text-[var(--text-primary, #f4f4f5)] font-semibold">desktop applications</span>,{' '}
                <span className="text-[var(--text-primary, #f4f4f5)] font-semibold">privacy-first web utilities</span>, and{' '}
                <span className="text-[var(--text-primary, #f4f4f5)] font-semibold">AI integration</span>. Turning complex engineering challenges into clean, production-ready applications.
              </p>

              {/* CTAs + Socials */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-500/20"
                >
                  View My Work <ArrowUpRight size={16} />
                </a>
                <a
                  href="mailto:denis.dev.ke@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[var(--text-secondary, #a1a1aa)] hover:text-[var(--text-primary, #f4f4f5)] transition-all duration-200 bg-[var(--bg-secondary, #18181b)] border border-[var(--border-color, #27272a)]"
                >
                  <Mail size={16} /> Get in Touch
                </a>

                <div className="flex gap-3 ml-2">
                  <a
                    href="https://github.com/Kip-opp"
                    target="_blank"
                    aria-label="GitHub"
                    className="p-3 rounded-full bg-[var(--bg-secondary, #18181b)] border border-[var(--border-color, #27272a)] text-[var(--text-secondary, #a1a1aa)] hover:text-[var(--text-primary, #f4f4f5)] hover:border-indigo-500 transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/denis-kipruto"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="p-3 rounded-full bg-[var(--bg-secondary, #18181b)] border border-[var(--border-color, #27272a)] text-[var(--text-secondary, #a1a1aa)] hover:text-[var(--text-primary, #f4f4f5)] hover:border-indigo-500 transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute bottom-6 left-0 flex flex-col items-center gap-2 text-[var(--text-muted, #71717a)]"
          >
            <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
            <ArrowDown size={14} />
          </motion.div>
        </section>

        {/* ════════════════════════════════════════
            STATS STRIP
        ════════════════════════════════════════ */}
        <section className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[var(--border-color, #27272a)] bg-[var(--bg-secondary, #18181b)]"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-6 text-center bg-[var(--bg-primary, #09090b)]"
              >
                <span className="text-3xl md:text-4xl font-bold mb-1 text-indigo-400">
                  {s.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-[var(--text-muted, #71717a)]">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════
            SERVICES & EXPERTISE
        ═══════════════════════════════════════ */}
        <section id="skills" className="py-20">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-mono text-xs tracking-widest uppercase mb-3 text-indigo-400">/ What I Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary, #f4f4f5)] mb-10">Services & Expertise</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[var(--bg-secondary, #18181b)] border border-[var(--border-color, #27272a)] flex flex-col justify-between hover:border-indigo-500/50 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary, #f4f4f5)]">{srv.title}</h3>
                  <p className="text-sm text-[var(--text-secondary, #a1a1aa)] leading-relaxed">{srv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SKILLS MARQUEE / BADGES
        ════════════════════════════════════════ */}
        <section className="py-10">
          <div className="p-6 rounded-2xl bg-[var(--bg-secondary, #18181b)] border border-[var(--border-color, #27272a)]">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted, #71717a)] mb-4">Core Technologies & Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[var(--bg-primary, #09090b)] border border-[var(--border-color, #27272a)] text-[var(--text-secondary, #a1a1aa)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SELECTED WORKS (REPOSITORIES)
        ════════════════════════════════════════ */}
        <section id="work" className="py-24">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-mono text-xs tracking-widest uppercase mb-3 text-indigo-400">/ Featured Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary, #f4f4f5)] mb-16">Selected Repositories</h2>
          </ScrollReveal>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} direction="up" delay={index * 0.1}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CONTACT FOOTER
        ═══════════════════════════════════════ */}
        <footer id="contact" className="py-24 border-t border-[var(--border-color, #27272a)] mt-20">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary, #f4f4f5)]">
              Let&apos;s build something <span className="text-indigo-400">remarkable.</span>
            </h2>
            <p className="mb-8 text-base text-[var(--text-secondary, #a1a1aa)]">
              Have a project in mind or want to discuss software architecture? I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:denis.dev.ke@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              <Mail size={18} /> Send an Email
            </a>
          </div>

          <p className="mt-20 text-center text-xs font-mono text-[var(--text-muted, #71717a)]">
            © 2026 Denis Kipruto — Built with Next.js & Tailwind CSS
          </p>
        </footer>

      </div>
    </main>
  );
}