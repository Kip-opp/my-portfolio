"use client";
import { motion, Variants } from "framer-motion";
import { 
  Code2, 
  Brain, 
  Database, 
  Globe, 
  Cpu, 
  Server, 
  Terminal, 
  Cloud, 
  Layers, 
  Box, 
  Zap,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  size: "small" | "medium" | "large";
  gradient: string;
  tags?: string[];
}

const bentoItems: BentoItem[] = [
  {
    title: "AI & RAG Systems",
    description: "Enterprise-grade retrieval-augmented generation pipelines with zero hallucinations. Vector databases, embeddings, and intelligent retrieval.",
    icon: <Brain size={28} />,
    size: "large",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    tags: ["LangChain", "Pinecone", "OpenAI", "Vector DB"],
  },
  {
    title: "Full Stack",
    description: "End-to-end web applications with modern frameworks and scalable backends.",
    icon: <Code2 size={24} />,
    size: "medium",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Autonomous Agents",
    description: "LLM-powered agents that automate complex workflows.",
    icon: <Zap size={24} />,
    size: "medium",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    tags: ["Agents", "Automation", "LLMs"],
  },
  {
    title: "Database",
    description: "Vector & relational databases for AI and traditional applications.",
    icon: <Database size={24} />,
    size: "small",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    tags: ["PostgreSQL", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    description: "Deployment, containers, and cloud infrastructure.",
    icon: <Cloud size={24} />,
    size: "small",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    tags: ["Docker", "AWS"],
  },
  {
    title: "Backend APIs",
    description: "Scalable APIs with FastAPI and Node.js.",
    icon: <Server size={24} />,
    size: "small",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    tags: ["FastAPI", "Node.js"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export default function BentoGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 auto-rows-[minmax(140px,auto)]"
    >
      {bentoItems.map((item, index) => (
        <motion.div
          key={item.title}
          variants={itemVariants}
          className={`
            relative group rounded-3xl overflow-hidden border border-white/[0.06]
            bg-gradient-to-br ${item.gradient}
            hover:border-indigo-500/30 transition-all duration-500
            ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
            ${item.size === "medium" ? "md:col-span-1 md:row-span-1" : ""}
            ${item.size === "small" ? "md:col-span-1 md:row-span-1" : ""}
          `}
          whileHover={{ 
            y: -4,
            transition: { duration: 0.2 }
          }}
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="relative z-10 p-6 h-full flex flex-col">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
              {item.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed flex-1">
              {item.description}
            </p>
            
            {/* Tags */}
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full text-indigo-300/80 bg-indigo-500/10 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Hover arrow */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <ArrowUpRight size={18} className="text-indigo-400" />
            </div>
          </div>
          
          {/* Corner glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </motion.div>
  );
}