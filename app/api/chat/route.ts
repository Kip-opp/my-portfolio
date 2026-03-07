import { NextResponse } from 'next/server';
import OpenAI from 'openai';

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
  // Check for API key
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('[Chat] OpenAI API key not configured');
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  try {
    const body = await req.json();
    
    // Validate messages array
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Limit message history to prevent cost explosion
    const recentMessages = body.messages.slice(-10);

    // Initialize OpenAI inside handler (prevents serverless cold start issues)
    const openai = new OpenAI({ apiKey });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...recentMessages,
      ],
      max_tokens: 150, // Prevent long responses
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('Empty response from OpenAI');
    }

    return NextResponse.json({ 
      role: 'assistant', 
      content 
    });

  } catch (error) {
    console.error("[Chat Error]:", error);
    
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json({ error: 'AI service error' }, { status: 502 });
    }
    
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
