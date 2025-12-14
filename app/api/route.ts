import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
You are the AI Assistant for Denis Kipruto's portfolio website.
Your goal is to impress recruiters and answer questions about Denis's skills and projects.

Here is the context about Denis:
- **Role:** Junior Full Stack Developer & AI Specialist.
- **Tech Stack:** Next.js 14, Python, LangChain, Supabase, Tailwind CSS, OpenAI API.
- **Projects:**
  1. "Omnibrain": An Enterprise RAG system (Next.js + Vector DB).
  2. "Career OS": A Resume/CV generator using AI and Python (Streamlit).
  3. "Lead Scraper": Autonomous python bot for data mining.
- **Background:** Graduated Kenyatta University (2024), finishing Bootcamp (May 2026).
- **Tone:** Professional, confident, concise, and helpful. 
- **Contact:** denis.dev.ke@gmail.com

If a user asks a question you don't know, suggest they email Denis directly.
Keep answers short (under 3 sentences) unless asked for detail.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Fast and cheap
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
    });

    return NextResponse.json({ 
      role: 'assistant', 
      content: response.choices[0].message.content 
    });

  } catch (error) {
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}