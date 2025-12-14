"use client";
import ProjectCard from './components/ProjectCard';
import Spotlight from './components/Spotlight'; // Import the new Spotlight
import TechBackground from './components/TechBackground'; // Keep the falling tech too if you want, or remove it for cleaner look.
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. LAYERS OF BACKGROUND */}
      <div className="fixed inset-0 z-0">
         <TechBackground /> {/* Falling Icons */}
         <Spotlight />      {/* Mouse Follower */}
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION (Screen Height) */}
        <section className="h-screen flex flex-col justify-center items-start pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono backdrop-blur-md">
                    ● Available for hire
                </div>
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-600 bg-clip-text text-transparent">
                  DENIS.<br/>KIPRUTO.
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                  Full Stack Engineer & AI Specialist. <br/>
                  I build <span className="text-white font-semibold">autonomous agents</span> and <span className="text-white font-semibold">RAG systems</span> that solve expensive problems.
                </p>

                <div className="flex gap-6">
                    <SocialBtn href="https://github.com/YOUR_USERNAME" icon={<Github />} />
                    <SocialBtn href="https://linkedin.com/in/YOUR_USERNAME" icon={<Linkedin />} />
                    <SocialBtn href="mailto:denis.dev.ke@gmail.com" icon={<Mail />} />
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 2, duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-6 md:left-auto text-gray-500 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDown size={16} />
            </motion.div>
        </section>

        {/* SKILLS MARQUEE (A Strip of tech) */}
        <section className="py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm">
             <div className="flex justify-between md:justify-around text-gray-500 font-bold text-xl md:text-3xl select-none opacity-50">
                 <span>NEXT.JS 14</span>
                 <span>PYTHON</span>
                 <span>LANGCHAIN</span>
                 <span>SUPABASE</span>
                 <span>TAILWIND</span>
             </div>
        </section>

        {/* SELECTED WORKS (The Alternating Layout) */}
        <section className="py-32">
          <h2 className="text-sm font-mono text-blue-400 mb-20 tracking-widest uppercase">/ Selected Works</h2>
          
          <div className="flex flex-col">
            
            {/* PROJECT 1 (Left Image) */}
            <ProjectCard 
              align="left"
              title="Omnibrain"
              description="An Enterprise-grade RAG system that indexes complex PDFs into vector databases. It allows companies to chat with their documentation with zero hallucinations. Built with Next.js, Pinecone, and OpenAI."
              tags={['Next.js', 'Vector DB', 'LangChain', 'AI Engineering']}
              githubLink="https://github.com/YOUR_USERNAME/omnibrain"
              liveLink="https://omnibrain-v1-qfbrh63ad-denis-projects-3311cb8d.vercel.app"
              image="/omnibrain.png" 
            />

            {/* PROJECT 2 (Right Image) */}
            <ProjectCard 
              align="right"
              title="Career OS"
              description="A SaaS-ready career acceleration tool. It uses LLMs to analyze job descriptions and rewrite resumes instantly. Features a custom PDF generation engine with multiple visual templates."
              tags={['Python', 'Streamlit', 'OpenAI', 'PDF Generation']}
              githubLink="https://github.com/YOUR_USERNAME/career-os"
              liveLink="https://career-helper-app-link.streamlit.app" 
              image="/careeros.png"
            />

            {/* PROJECT 3 (Left Image) */}
            <ProjectCard 
              align="left"
              title="Lead Scraper"
              description="Autonomous prospecting engine. It scrapes high-value leads from target websites, bypasses anti-bot protections, and structures the data for sales teams. Replaces hours of manual data entry."
              tags={['Python', 'Automation', 'Data Mining', 'Puppeteer']}
              githubLink="https://github.com/YOUR_USERNAME/lead-scraper"
              liveLink="https://lead-scrappergit-dqouwxzdgeyrewjhqqcy9v.streamlit.app/"
              image="/scraper.png"
            />

          </div>
        </section>

        {/* FOOTER */}
        <footer className="pb-20 pt-32 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Let's build something.</h2>
            <a href="mailto:denis.dev.ke@gmail.com" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                Get in Touch
            </a>
            <p className="mt-12 text-gray-600 text-sm">© 2025 Denis Kipruto.</p>
        </footer>

      </div>
    </main>
  );
}

// Simple helper component for social buttons
function SocialBtn({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
        >
            {icon}
        </a>
    )
}