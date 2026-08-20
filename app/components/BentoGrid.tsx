"use client";
import { Code2, Database, Layers, Server } from "lucide-react";
import GlassCard from "./GlassCard";

const skillGroups = [
  { label: "Languages", icon: Code2, items: ["Python", "JavaScript", "TypeScript", "C#"] },
  { label: "Frontend", icon: Layers, items: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { label: "Backend & systems", icon: Server, items: [".NET", "Node.js", "REST APIs", "MVVM"] },
  { label: "Data & AI", icon: Database, items: ["Supabase", "OpenAI API", "Ollama", "Zustand"] },
];

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {skillGroups.map(({ label, icon: Icon, items }) => (
        <GlassCard key={label} className="p-5" variant="hover" glowColor={label === "Frontend" ? "blue" : "teal"}>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-accent)]">
              <Icon size={19} />
            </div>
            <h3 className="font-semibold text-[var(--text-primary)]">{label}</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {items.map((item) => (
              <span key={item} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-sm font-medium text-[var(--text-primary)]">
                {item}
              </span>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  );
}

