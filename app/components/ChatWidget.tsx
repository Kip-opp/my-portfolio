"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

interface Message { role: 'user' | 'assistant'; content: string; }

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: "Hi! I'm Denis's AI Assistant. Ask me anything about his skills, projects, or experience." }]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [...messages, userMsg] }) });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    } catch { setMessages(prev => [...prev, { role: 'assistant', content: "I'm offline right now, but you can email Denis directly!" }]); }
    finally { setIsLoading(false); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.95 }} transition={{ duration: 0.2, ease: "easeOut" }} className="mb-4 w-[340px] rounded-2xl flex flex-col overflow-hidden h-[480px] shadow-2xl" style={{ background: 'rgba(10, 10, 20, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <div className="p-4 flex justify-between items-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center"><Bot size={16} className="text-white" /></div>
                <div><p className="text-white text-sm font-semibold">Denis's AI</p><div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /><span className="text-xs text-gray-500">Online</span></div></div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"><X size={16} /></button>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-br-sm' : 'text-gray-200 rounded-bl-sm'}`} style={m.role === 'assistant' ? { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' } : {}}>{m.content}</div>
                </div>
              ))}
              {isLoading && <div className="flex justify-start"><div className="px-4 py-3 rounded-2xl rounded-bl-sm" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}><div className="flex gap-1 items-center"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" /><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} /><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} /></div></div></div>}
            </div>
            <form onSubmit={handleSubmit} className="p-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex gap-2 items-center">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about Denis..." className="flex-1 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 placeholder-gray-600" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }} />
                <button type="submit" disabled={isLoading || !input.trim()} className="p-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 rounded-xl text-white transition-colors flex-shrink-0"><Send size={15} /></button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className="h-14 w-14 rounded-full text-white shadow-xl flex items-center justify-center transition-all duration-200" style={{ background: isOpen ? '#4f46e5' : 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 8px 32px rgba(99,102,241,0.4)' }}>
        <AnimatePresence mode="wait">
          {isOpen ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.span> : <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><MessageSquare size={22} /></motion.span>}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
