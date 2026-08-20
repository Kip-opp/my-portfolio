"use client";

import ProjectCard, { type ProjectCardProps } from './components/ProjectCard';
import ScrollReveal from './components/ScrollReveal';
import SolutionsSection from './components/SolutionsSection';
import Navbar from './components/Navbar';
import { skills } from './data/skills';
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight, Code2, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '2', label: 'Q-flow workspaces' },
  { value: '3', label: 'Named qubit gates' },
  { value: '2', label: 'AI inference paths' },
  { value: '2', label: 'EventSphere providers' },
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
    description: 'Engineering zero-upload browser tools and local AI inference options that reduce server-side exposure.',
  },
  {
    icon: <Github size={22} />,
    title: 'Collaborative Delivery',
    description: 'Contributing across shared APIs, data models, code reviews, technical documentation, and asynchronous team workflows.',
  },
];

const projects: ProjectCardProps[] = [
  {
    align: 'left' as const,
    title: 'Q-flow',
    description:
      'A desktop simulator for exploring quantum operations and wavefunction evolution.',
    tags: ['C#', '.NET 9', 'WPF', 'MVVM'],
    problem:
      'Quantum mechanics is difficult to understand when its behavior is represented only through equations or static diagrams. Learners and developers need to see how quantum operations affect probability states and how wavefunctions evolve over time, while the application itself requires deterministic simulation logic and a maintainable desktop architecture.',
    solution:
      'Q-flow is a .NET 9 and WPF desktop simulator organized around strict MVVM separation. It provides 2 interactive workspaces: a Qubit Workspace for applying 3 named gates—H, X, and Z—and visualizing measurement probabilities in real time, and a Wavefunction Workspace for exploring particle-in-a-box energy levels and Gaussian wavepacket time evolution with live plotting. The repository separates the system into 6 documented solution projects—core physics models, shared utilities, services, view models, UI, and tests—so simulation logic remains modular and easier to extend.',
    metrics: [
      { value: '2', label: 'interactive workspaces' },
      { value: '3', label: 'qubit gates' },
      { value: '6', label: 'solution projects' },
    ],
    metricNote: 'Scope metrics from documented functionality; not user or performance outcomes.',
    githubLink: 'https://github.com/Kip-opp/Q-flow',
    liveLink: '#',
    image: '/qflow.svg',
  },
  {
    align: 'right' as const,
    title: 'Lumina',
    description:
      'A writing assistant combining contextual feedback, document analysis, and cloud or local inference.',
    tags: ['React', 'Supabase', 'OpenAI', 'Ollama'],
    problem:
      'Writers need contextual feedback that goes beyond basic spelling correction, but a single cloud-only AI path can limit privacy, model choice, and operational flexibility. A useful writing assistant should support different writing contexts while giving users a clear view of the quality and purpose of each suggested improvement.',
    solution:
      'Lumina is a React 18.2, Vite 6.1, TypeScript 5.8, Tailwind CSS, and Supabase writing assistant with integrations for both OpenAI cloud models and local Ollama inference. It provides real-time analysis across 3 feedback categories—grammar, style, and clarity—along with a 0–100 writing-quality score, contextual suggestions, reply generation, version history, document analysis for 3 file extensions (.txt, .md, and .docx), and 4 named tone variations: Formal, Casual, Enthusiastic, and Empathetic. Supabase authentication, row-level security, Zod validation, React Query, and production-safe logging support the application’s security and maintainability.',
    metrics: [
      { value: '2', label: 'AI inference paths' },
      { value: '0–100', label: 'writing score' },
      { value: '4', label: 'tone variations' },
      { value: '3', label: 'file extensions' },
    ],
    metricNote: 'Capability and architecture metrics from documented functionality; not accuracy, speed, productivity, or cost outcomes.',
    githubLink: 'https://github.com/Kip-opp/lumina',
    liveLink: 'https://lumina-zeta-swart.vercel.app',
    image: '/lumina.png',
  },
  {
    align: 'left' as const,
    title: 'VidForge-TSX',
    description:
      'A searchable discovery platform for generative AI video tools and models.',
    tags: ['TypeScript', 'React 18', 'Zustand', 'Tailwind'],
    problem:
      'The generative AI video ecosystem is expanding quickly, making it difficult for creators to discover, filter, and compare tools from a single reliable interface. A content-heavy exploration experience also needs centralized state and reusable UI patterns so that search, filtering, modals, and animations remain consistent as the catalog grows.',
    solution:
      'VidForge-TSX is a Vite, React 18, TypeScript, Tailwind CSS, Zustand, and Lucide React discovery platform for AI video-generation tools. It combines searchable content, category filtering, interactive model-detail and category-information modals, and 4 curated sections—Hero, Categories, Models, and Future Predictions. A centralized Zustand store manages application state, while reusable Tailwind-based components and the Aurora animation system create a consistent exploration experience. The current repository uses a documented mockData.ts source, making the catalog easy to replace or extend with live data later.',
    metrics: [
      { value: '4', label: 'curated sections' },
      { value: '2', label: 'modal flows' },
      { value: '2', label: 'discovery workflows' },
      { value: '1', label: 'Zustand store' },
    ],
    metricNote: 'Feature-scope metrics from the repository; not measured performance gains.',
    githubLink: 'https://github.com/Kip-opp/vidforge-tsx',
    liveLink: 'https://vidforge-tsx.vercel.app/',
    image: '/vidforge.png',
  },
  {
    align: 'right' as const,
    title: 'imgwatermaker',
    description:
      'A privacy-first browser utility for client-side image watermarking without uploads or transmissions by design.',
    tags: ['JavaScript', 'HTML5 Canvas', 'Security'],
    problem:
      'Uploading identity documents, passports, or other sensitive images to an online watermarking service exposes private data to a third-party server and creates an unnecessary security boundary. Watermarking should be possible without surrendering control of the original file.',
    solution:
      'imgwatermaker is a dependency-free HTML5, CSS3, and vanilla JavaScript security utility that uses the Canvas 2D API to process images entirely in the browser. It is designed around 0 image uploads or transmissions by design, supports 3 input formats—PNG, JPEG, and GIF—and provides 6 named watermark controls: text, color, opacity, angle, spacing, and font size. Users receive a real-time preview and can download the final result as a PNG file.',
    metrics: [
      { value: '0', label: 'image uploads by design' },
      { value: '3', label: 'input formats' },
      { value: '6', label: 'watermark controls' },
      { value: '0', label: 'external dependencies' },
    ],
    metricNote: 'Zero-upload behavior is a design property; it is not a legal security guarantee.',
    githubLink: 'https://github.com/Kip-opp/imgwatermaker',
    liveLink: 'https://kip-opp.github.io/imgwatermaker/',
    image: '/watermaker.png',
  },
  {
    align: 'left' as const,
    title: 'EventSphere',
    description:
      'A full-stack event discovery platform connecting external providers, local events, and role-based workflows.',
    tags: ['React', 'Vite', 'JavaScript', 'Flask', 'Python', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'REST APIs'],
    problem:
      'Event information is often distributed across multiple providers, while organizers and administrators need different workflows for creating, approving, monitoring, and managing events. Users also need a single place to search, filter, save, receive reminders for, and discover events without losing the context of their personal preferences.',
    solution:
      'EventSphere is a full-stack event discovery platform built with React, Vite, JavaScript, CSS3, Flask, Python, PostgreSQL, SQLAlchemy, and REST APIs. It consolidates data from 2 documented external providers—Ticketmaster and Eventbrite—alongside custom local events, then adds search, source filtering, event detail modals, saved events, reminders with looping sound alerts, category-based recommendations, and mobile-responsive interfaces. The backend uses JWT token authorization, password hashing, role-based access control, organizer approval workflows, Marshmallow validation, Flask-CORS, and global exception handling. The product includes 2 operational dashboards—Organizer and Admin—and supports 3 primary access roles: users, organizers, and administrators.',
    metrics: [
      { value: '2', label: 'external event providers' },
      { value: '3', label: 'primary access roles' },
      { value: '2', label: 'operational dashboards' },
      { value: '2', label: 'discovery workflows' },
    ],
    metricNote: 'Scope and architecture metrics from documented repository functionality; not API freshness, recommendation accuracy, delivery rates, or user counts.',
    teamContribution:
      'EventSphere was developed collaboratively by a four-person team. Denis owned the Ticketmaster API integration, frontend event-data fetching, ticket database models, schemas and repositories, ticket-purchase logic, and ticket API endpoints. This work connected the external integration, frontend, backend, and database layers while requiring coordination with parallel contributors.',
    githubLink: '#',
    liveLink: 'https://eventsphere-ten.vercel.app/',
    image: '/eventsphere.png',
    imageAspectRatio: '1680 / 820',
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════ */}
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative text-center">
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
                Software Engineer building reliable, maintainable systems—from API design and data pipelines to shipped products. I care about clean trade-offs, clear communication, and getting things done.
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
                    href="https://www.linkedin.com/in/denis-k-338a02395"
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

        <section id="about" className="scroll-mt-32 border-y border-[var(--border-color)] py-24 text-left">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--text-accent)]">/ About</p>
              <h2 className="mb-10 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">How I approach engineering</h2>
              <div className="space-y-6 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                <p>I&apos;m a Software Engineer who enjoys turning complex requirements into reliable, maintainable systems. My approach begins with understanding the real problem, asking the right questions, and separating essential requirements from unnecessary complexity. I use critical thinking to evaluate trade-offs across architecture, performance, security, maintainability, and delivery time before choosing a practical solution.</p>
                <p>My work spans API design, backend services, data pipelines, frontend applications, applied AI, and shipped products. I care about building systems that are clear to understand, dependable in use, and structured so they can evolve as requirements change. I pay close attention to precision—from data models and API contracts to validation, error handling, user experience, and the small implementation details that make software easier to trust and maintain.</p>
                <p>I also work effectively in collaborative environments. On EventSphere, I contributed as part of a four-person team, owning the Ticketmaster API integration, frontend event-data fetching, ticket database models and repositories, ticket-purchase logic, and ticket API endpoints. That experience involved coordinating across frontend, backend, database, and external-API workstreams while keeping shared interfaces and delivery goals aligned.</p>
                <p>Clear communication is central to how I work. I aim to explain technical decisions in a way that helps teammates, stakeholders, and future maintainers understand not only what was built, but why it was built that way. I organize work into clear priorities and manageable delivery steps, remain open to feedback, and focus on moving projects from an identified problem to a useful, working solution.</p>
              </div>
            </ScrollReveal>
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
              <a href="https://www.linkedin.com/in/denis-k-338a02395" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-accent)] transition-colors">LinkedIn</a>
              <a href="mailto:denis.dev.ke@gmail.com" className="hover:text-[var(--text-accent)] transition-colors">Email</a>
            </div>
          </div>
          <p className="mt-12 text-xs font-mono text-[var(--text-muted)]">© 2026 Denis Kipruto · Next.js & Tailwind CSS</p>
        </footer>

      </div>
    </main>
  );
}