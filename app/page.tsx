import ProjectCard from './components/ProjectCard';
import TechBackground from './components/TechBackground'; // <--- IMPORT THIS
import { Github, Linkedin, Mail, Terminal, Cpu, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100 selection:bg-blue-500 selection:text-white relative">
      
      {/* THE BACKGROUND COMPONENT */}
      <TechBackground />

      {/* CONTENT WRAPPER - VERY IMPORTANT */}
      {/* This 'relative z-10' ensures your text floats ABOVE the stars */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto pt-24 pb-12 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Denis Kipruto
          </h1>
          {/* ... REST OF YOUR CODE (Hero text, Social Links) ... */}
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Full Stack Developer & AI Engineer. I don't just write code—I ship products.
        </p>
        
        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" className="hover:text-blue-400 transition">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" className="hover:text-blue-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="mailto:denis.dev.ke@gmail.com" className="hover:text-blue-400 transition">
            <Mail size={24} />
          </a>
        </div>
        </section>

        {/* Why Hire Me Section */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
             {/* ... PASTE YOUR "WHY HIRE ME" CODE HERE ... */}
             <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-10 backdrop-blur-sm"> 
             {/* Added backdrop-blur-sm above to make text pop against moving background */}
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Terminal className="text-blue-500" />
                    Why Hire Me?
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                    I am a <strong className="text-white">Junior Developer with a bias for action.</strong> 
                    While many peers are stuck in "tutorial hell," I am out here building and shipping 
                    complex applications like RAG systems and autonomous scrapers.
                    </p>
                    <p>
                    I am hungry to learn, I am not afraid to break things to understand how they work, 
                    and I am looking for a team where I can get my hands dirty immediately.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold">
                        <Zap size={18} /> Speed
                    </div>
                    <p className="text-sm text-gray-500">I move fast. From idea to deployment in days, not months.</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center gap-2 mb-2 text-purple-400 font-bold">
                        <Cpu size={18} /> AI Native
                    </div>
                    <p className="text-sm text-gray-500">I don't just use APIs; I build agents, scrapers, and RAG pipelines.</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center gap-2 mb-2 text-green-400 font-bold">
                        <Terminal size={18} /> Grit
                    </div>
                    <p className="text-sm text-gray-500">I debug until it works. I don't stop at the first error message.</p>
                    </div>
                </div>
                </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-4xl mx-auto pb-20 px-6">
          <h2 className="text-3xl font-bold mb-12 border-b border-gray-800 pb-4">Featured Applications</h2>
          <div className="grid md:grid-cols-1 gap-10">
             {/* ... PASTE YOUR PROJECT CARDS HERE ... */}
            <ProjectCard 
            title="Omnibrain: Enterprise Document Intelligence"
            description="A Retrieval-Augmented Generation (RAG) system that transforms static documents into interactive knowledge bases. Users upload proprietary PDFs or docs, and the AI indexes the content for precise Q&A."
            tags={['Next.js 14', 'RAG Pipeline', 'Vector Database', 'Vercel']}
            githubLink="https://github.com/YOUR_USERNAME/omnibrain"
            liveLink="https://omnibrain-v1-qfbrh63ad-denis-projects-3311cb8d.vercel.app"
            image="/omnibrain.png" 
          />

          
            <ProjectCard 
            title="Autonomous Lead & Data Scraper"
            description="A high-velocity prospecting engine. It autonomously scans target websites to extract high-value contact details—emails, phone numbers, and business leads."
            tags={['Python', 'Streamlit', 'Web Scraping', 'Data Mining']}
            githubLink="https://github.com/YOUR_USERNAME/lead-scraper"
            liveLink="https://lead-scrappergit-dqouwxzdgeyrewjhqqcy9v.streamlit.app/"
            image="/scraper.png"
          />

          <ProjectCard 
            title="Career OS: Smart Resume Optimizer"
            description="An AI-powered career accelerator that bridges the gap between candidates and ATS algorithms. By analyzing specific job descriptions, it regenerates targeted resumes."
            tags={['Python', 'Streamlit', 'LLM Engineering', 'Prompt Engineering']}
            githubLink="https://github.com/YOUR_USERNAME/career-os"
            liveLink="https://career-os-dcpgmvkhbl7zggmsxhmyev.streamlit.app/"
            image="/careeros.png"
          />
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
             {/* ... PASTE YOUR CONTACT SECTION HERE ... */}
             <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-900/50 rounded-2xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start immediately.</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                I am currently looking for a full-time Junior Developer role. 
                If you need someone who can jump in and start shipping code on Day 1, let's talk.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a 
                href="mailto:denis.dev.ke@gmail.com" 
                className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition"
                >
                <Mail size={20} />
                Email Me: denis.dev.ke@gmail.com
                </a>
                
                <a 
                href="https://github.com/YOUR_GITHUB_USERNAME" 
                target="_blank"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-gray-700 hover:border-white transition text-white"
                >
                <Github size={20} />
                Check my Code
                </a>
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900/50">
          © {new Date().getFullYear()} Denis Kipruto. Built with Next.js & Tailwind.
        </footer>
      
      </div>
    </main>
  );
}