"use client";

import ProjectCard from './components/ProjectCard';
import ScrollReveal from './components/ScrollReveal';
import SolutionsSection from './components/SolutionsSection';
import Navbar from './components/Navbar';
import { skills } from './data/skills';
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight, Code2, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

// ─── Data ────────────────────────────────────────────────────────────────────

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
    image: '/qflow.svg',
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
  return (
    <main
      className="min-h-screen overflow-x-hidden selection:bg-[var(--accent)] selection:text-white"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}
    >
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">

        {/* ════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════ */}
        <section id="about" className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              className="mx-auto max-w-3xl"
            >
              {/* Name */}
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-7xl md:text-[92px] font-bold tracking-tight mb-6 leading-[1.05] text-[var(--text-primary)]"
              >
                Denis Kipruto<span className="text-[var(--text-accent)]">.</span>
              </motion.h1>

              {/* Role */}
              <div className="text-xl md:text-2xl mb-6 font-medium text-[var(--text-secondary)]">
                Software Engineer & Systems Developer
              </div>

              {/* Description */}
              <p
                className="text-base md:text-lg max-w-2xl leading-relaxed mb-10"
                style={{ color: 'var(--text-secondary)' }}
              >
                I build robust, high-performance software spanning{' '}
                <span className="text-[var(--text-primary)] font-semibold">desktop applications</span>,{' '}
                <span className="text-[var(--text-primary)] font-semibold">privacy-first web utilities</span>, and{' '}
                <span className="text-[var(--text-primary)] font-semibold">AI integration</span>. Turning complex engineering challenges into clean, production-ready applications.
              </p>

              {/* CTAs + Socials */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#work"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-[var(--accent)] hover:opacity-90 transition-all duration-200 shadow-lg shadow-[0_10px_30px_rgba(37,99,235,0.2)]"
                >
                  View My Work <ArrowUpRight size={16} />
                </a>
                <a
                  href="mailto:denis.dev.ke@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 bg-[var(--bg-secondary)] border border-[var(--border-color)]"
                >
                  <Mail size={16} /> Get in Touch
                </a>

                <div className="flex gap-3 ml-2 justify-center">
                  <a
                    href="https://github.com/Kip-opp"
                    target="_blank"
                    aria-label="GitHub"
                    className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-accent)] transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/denis-kipruto"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-accent)] transition-all"
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
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
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
            className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-6 text-center bg-[var(--color-card)]"
              >
                <span className="text-3xl md:text-4xl font-bold mb-1 text-[var(--text-accent)]">
                  {s.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-[var(--text-muted)]">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════
            SERVICES & EXPERTISE
        ═══════════════════════════════════════ */}
        <section id="skills" className="py-20 text-center">
          <div className="border-y border-[var(--border-color)] py-10 sm:py-12">
            <ScrollReveal direction="up" delay={0.1}>
              <p className="font-mono text-xs tracking-widest uppercase mb-3 text-[var(--text-accent)]">/ What I Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-10">Services & Expertise</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                    className="p-7 rounded-2xl bg-[var(--color-card)] border border-[var(--border-color)] flex flex-col justify-between hover:border-[var(--text-accent)]/35 hover:-translate-y-1 transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--text-accent)] flex items-center justify-center mb-6">
                      {srv.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{srv.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{srv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="py-6">
          <SolutionsSection />
        </div>

        {/* ═══════════════════════════════════════
            CORE TECHNOLOGIES & STACK
        ════════════════════════════════════════ */}
        <section className="py-10">
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--color-card)] p-6 sm:p-8">
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--text-accent)]">
                Core Technologies & Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--color-border-accent)] hover:text-[var(--text-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SELECTED WORKS (REPOSITORIES)
        ════════════════════════════════════════ */}
        <section id="work" className="py-24 text-center">
          <div className="border-y border-[var(--border-color)] py-10 sm:py-12">
            <ScrollReveal direction="up" delay={0.1}>
              <p className="font-mono text-xs tracking-widest uppercase mb-3 text-[var(--text-accent)]">/ Featured Projects</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16">Selected Repositories</h2>
            </ScrollReveal>

            <div className="space-y-24">
              {projects.map((project, index) => (
                <ScrollReveal key={project.title} direction="up" delay={index * 0.1}>
                  <ProjectCard {...project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CONTACT FOOTER
        ═══════════════════════════════════════ */}
        <footer id="contact" className="relative mt-20 border-t border-[var(--border-color)] py-14">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-[var(--accent-secondary)]" />
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
              Let&apos;s build something <span className="text-[var(--text-accent)]">remarkable.</span>
            </h2>
            <p className="mb-8 text-base text-[var(--text-secondary)]">
              Have a project in mind or want to discuss software architecture? I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:denis.dev.ke@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-[var(--accent)] hover:opacity-90 transition-all shadow-lg shadow-[0_10px_30px_rgba(37,99,235,0.2)]"
            >
              <Mail size={18} /> Send an Email
            </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[var(--text-secondary)]">
              <a href="https://github.com/Kip-opp" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-accent)] transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/denis-kipruto" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-accent)] transition-colors">LinkedIn</a>
              <a href="mailto:denis.dev.ke@gmail.com" className="hover:text-[var(--text-accent)] transition-colors">Email</a>
            </div>
          </div>
          <p className="mt-12 text-xs font-mono text-[var(--text-muted)]">© 2026 Denis Kipruto · Next.js & Tailwind CSS</p>
        </footer>

      </div>
    </main>
  );
}