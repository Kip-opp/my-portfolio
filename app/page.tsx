"use client";
import { useRef, useMemo, useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import ProjectCard from './components/ProjectCard';
import BentoGrid from './components/BentoGrid';
import ScrollReveal from './components/ScrollReveal';
import { SpotlightNavbar } from './components/SpotlightNavbar';
import { FlipText } from './components/FlipText';
import TypewriterText from './components/TypewriterText';
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight, Sparkles, Code2, Brain, Layers, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

// Lazy load heavy visual components for better initial load time
const NeuralNetworkBackground = dynamic(() => import('./components/NeuralNetworkBackground'), {
  ssr: false,
  loading: () => null,
});

const Spotlight = dynamic(() => import('./components/Spotlight'), {
  ssr: false,
  loading: () => null,
});



// ─── Data ────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Blog", href: "#blog" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#about" },
];

const skills = [
  'Next.js', 'React', 'TypeScript', 'Python', 'LangChain', 'OpenAI',
  'Pinecone', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'FastAPI', 'Docker',
  'Node.js', 'RAG Systems', 'Vector DBs', 'Autonomous Agents',
];

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '3+', label: 'Projects Shipped' },
  { value: '3+', label: 'AI Systems Built' },
  { value: '70%+', label: 'Client Satisfaction'}
];

const services = [
  {
    icon: <Brain size={22} />,
    title: 'AI & RAG Systems',
    description: 'Enterprise-grade retrieval-augmented generation pipelines with zero hallucinations.',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Full Stack Development',
    description: 'End-to-end web applications with Next.js, TypeScript, and scalable backends.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Autonomous Agents',
    description: 'LLM-powered agents that automate complex workflows and replace manual processes.',
  },
];

const projects = [
  {
    align: 'left' as const,
    title: 'Lumina',
    description:
      'A web-based writing assistant that harnesses the power of Large Language Models (LLMs) to provide intelligent, context-aware writing feedback and enhancements. Built with modern web technologies, it offers real-time AI-driven analysis for grammar, style, clarity, and tone improvements, making it an indispensable tool for writers, professionals, and content creators.',
    tags: ['Next.js', 'AI Engineering'],
    githubLink: 'https://github.com/Kip-opp/lumina',
    liveLink: 'lumina-zeta-swart.vercel.app',
    image: '',
  },
  {
    align: 'right' as const,
    title: 'Career OS',
    description:
      'A SaaS-ready career acceleration tool. It uses LLMs to analyze job descriptions and rewrite resumes instantly. Features a custom PDF generation engine with multiple visual templates.',
    tags: ['Python', 'Streamlit', 'OpenAI', 'PDF Generation'],
    githubLink: 'https://github.com/Kip-opp/career-os',
    liveLink: 'https://career-helper-app-link.streamlit.app',
    image: '/careeros.png',
  },
  {
    align: 'left' as const,
    title: 'Lead Scraper',
    description:
      'Autonomous prospecting engine. It scrapes high-value leads from target websites, bypasses anti-bot protections, and structures the data for sales teams. Replaces hours of manual data entry.',
    tags: ['Python', 'Automation', 'Data Mining', 'Puppeteer'],
    githubLink: 'https://github.com/Kip-opp/lead-scraper',
    liveLink: 'https://lead-scrappergit-dqouwxzdgeyrewjhqqcy9v.streamlit.app/',
    image: '/scraper.png',
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0 ) => ({
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
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
    >
      {/* ── Background layers ── */}
      <div className="fixed inset-0 z-0">
        <NeuralNetworkBackground />
        <Spotlight />
      </div>

      {/* ── Navbar ── */}
      <SpotlightNavbar items={navLinks} />

      {/* Fixed Logo */}
      <div className="fixed top-10 left-6 z-50">
        <a href="#" className="font-mono text-base font-bold text-[var(--text-primary)] tracking-widest uppercase hover:text-[var(--text-accent)] transition-colors">
          DK<span className="text-[var(--accent)]">.</span>
        </a>
      </div>

      {/* Fixed Theme Toggle */}
      <div className="fixed top-10 right-6 z-50">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full hover:bg-[var(--bg-secondary)] transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ════════════════════════════════════════
            HERO
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
                className="text-6xl sm:text-8xl md:text-[108px] font-bold tracking-tighter mb-4 leading-[0.9] text-[var(--text-primary)]"
              >
                Hello World... <TypewriterText />
              </motion.h1>

              {/* Role */}
              <div className="text-xl md:text-2xl mb-8 text-[var(--text-secondary)]">
                Full Stack Engineer & AI Specialist
              </div>

             {/* Description */}
             <p
               className="text-lg md:text-xl max-w-xl leading-relaxed mb-10"
               style={{ color: 'var(--text-secondary)' }}
             >
               I build{' '}
               <span className="text-[var(--text-primary)] font-semibold">autonomous agents</span> and{' '}
               <span className="text-[var(--text-primary)] font-semibold">RAG systems</span> that solve expensive problems.
               Turning complex AI into clean, production-ready software.
             </p>

            {/* CTAs + Socials */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[var(--text-primary)] transition-all duration-200 hover:scale-105"
                style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  boxShadow: '0 4px 24px var(--accent-glow)',
                }}
              >
                View My Work <ArrowUpRight size={16} />
              </a>
              <a
                href="mailto:denis.dev.ke@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Mail size={16} /> Get in Touch
              </a>

              <div className="flex gap-3 ml-2">
                <SocialBtn href="https://github.com/Kip-opp" icon={<Github size={18} />} label="GitHub" />
                <SocialBtn href="https://linkedin.com/in/denis-kipruto" icon={<Linkedin size={18} />} label="LinkedIn" />
              </div>
            </motion.div>
          </motion.div>
          </ScrollReveal>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ delay: 2.5, duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute bottom-10 left-6 flex flex-col items-center gap-2"
            style={{ color: 'var(--text-muted)' }}
          >
            <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
            <ArrowDown size={14} />
          </motion.div>
        </section>

        {/* ════════════════════════════════════════
            STATS STRIP
        ════════════════════════════════════════ */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-10 px-6 text-center"
                style={{ background: 'var(--bg-primary)' }}
              >
                <span
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, var(--text-accent), var(--accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.value}
                </span>
                <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ════════════════════════════════════════
            SERVICES - BENTO GRID
        ════════════════════════════════════════ */}
        <section id="skills" className="py-20">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-accent)' }}>/ What I Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-14">Services & Expertise</h2>
          </ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl p-8 md:p-12">
            <BentoGrid />
          </div>
        </section>

        {/* ════════════════════════════════════════
            SKILLS MARQUEE
        ════════════════════════════════════════ */}
        <section className="py-10 overflow-hidden">
          <div
            className="py-6 rounded-2xl overflow-hidden"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
            }}
          >
            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 mx-6 text-sm font-mono font-medium transition-colors cursor-default"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-accent)', opacity: '0.5' }} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SELECTED WORKS
        ════════════════════════════════════════ */}
        <section id="work" className="py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-accent)' }}>/ Selected Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">Things I've Built</h2>
          </motion.div>

          <div className="flex flex-col">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} index={i} />
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTACT / FOOTER
        ════════════════════════════════════════ */}
        <footer id="contact" className="pb-24 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
            style={{
              background: 'var(--bg-accent)',
              border: '1px solid var(--border-accent)',
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">


              <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Let's build something  

                <span style={{
                  background: 'linear-gradient(135deg, var(--text-accent), var(--accent))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>remarkable.</span>
              </h2>

              <p className="mb-10 max-w-md mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                Have a project in mind or want to discuss AI solutions? I'd love to hear from you.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:denis.dev.ke@gmail.com"
                  className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[var(--text-primary)] transition-all duration-200 hover:scale-105"
                  style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                    boxShadow: '0 4px 32px var(--accent-glow)',
                  }}
                >
                  <Mail size={18} /> Send an Email
                </a>
                <a
                  href="https://github.com/Kip-opp"
                  target="_blank"
                  className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.05 )',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Github size={18} /> GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>

          <p className="mt-12 text-center text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
            © 2026 Denis Kipruto — Built with Next.js & Tailwind CSS
          </p>
        </footer>

      </div>
    </main>
  );
}

// ─── Social Button ────────────────────────────────────────────────────────────

function SocialBtn({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={label}
      className="p-2.5 rounded-full transition-all duration-200 hover:scale-110"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        color: 'var(--text-secondary)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = 'var(--bg-accent)';
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-accent)';
        (e.currentTarget as HTMLElement).style.color = 'var(--text-accent)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
        (e.currentTarget as HTMLElement).style.color = '#9ca3af';
      }}
    >
      {icon}
    </a>
  );
}
