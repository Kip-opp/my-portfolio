"use client";

import { ShieldCheck, GitBranch, Cpu, Zap } from "lucide-react";
import GlassCard from "./GlassCard";

const solutions = [
  {
    id: 1,
    title: "Security",
    challenge: "Privacy leaks when uploading sensitive IDs to cloud watermarking services.",
    architecture: "100% client-side Canvas API processing; zero data egress.",
    impact: "Absolute user data sovereignty for document protection.",
    icon: <ShieldCheck className="w-6 h-6 text-teal-500" />,
    bgColor: "bg-teal-500/10 text-teal-700 dark:text-teal-300",
  },
  {
    id: 2,
    title: "AI Orchestration",
    challenge: "Vendor lock-in and privacy risks with single-provider cloud LLMs.",
    architecture: "Dual-provider abstraction (OpenAI Cloud + Ollama Local).",
    impact: "Flexible, cost-optimized, and privacy-first AI assistants.",
    icon: <GitBranch className="w-6 h-6 text-sky-500" />,
    bgColor: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  },
  {
    id: 3,
    title: "Systems Simulation",
    challenge: "Abstract complexity of quantum physics and wavepacket dynamics.",
    architecture: "Deterministic MVVM simulation engine in .NET 9.",
    impact: "Real-time visual validation of complex scientific models.",
    icon: <Cpu className="w-6 h-6 text-sky-400" />,
    bgColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  },
  {
    id: 4,
    title: "State Performance",
    challenge: "UI latency and state fragmentation in high-density data explorers.",
    architecture: "Optimized React 18 component trees with Zustand global state.",
    impact: "Seamless, high-performance discovery interfaces.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    bgColor: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
          Solving Production Constraints
        </h2>
        <p className="text-base md:text-lg max-w-2xl text-[var(--text-secondary)] mb-12">
          Moving beyond sandbox prototypes to build resilient software that meets enterprise constraints.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((sol) => (
            <GlassCard
              key={sol.id}
              className="p-6 border border-[var(--border-color)] bg-[var(--color-card)]/95 transition-colors"
              variant="hover"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${sol.bgColor}`}
                >
                  {sol.icon}
                </div>
                <h3 className="ml-4 text-xl font-bold text-[var(--text-primary)]">
                  {sol.title}
                </h3>
              </div>
              <p className="mb-2 font-medium text-[var(--text-primary)]">Challenge:</p>
              <p className="mb-4 text-[var(--text-secondary)]">{sol.challenge}</p>
              <p className="mb-2 font-medium text-[var(--text-primary)]">Architecture:</p>
              <p className="mb-4 text-[var(--text-secondary)]">{sol.architecture}</p>
              <p className="mb-2 font-medium text-[var(--text-primary)]">Impact:</p>
              <p className="text-[var(--text-secondary)]">{sol.impact}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}