import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

export const metadata: Metadata = {
  title: "Denis Kipruto | Full Stack Engineer & AI Specialist",
  description: "Portfolio of Denis Kipruto — Full Stack Engineer and AI Specialist building autonomous agents, RAG systems, and high-impact software.",
  keywords: ["Full Stack Engineer", "AI Specialist", "Next.js", "LangChain", "RAG", "Denis Kipruto"],
  openGraph: {
    title: "Denis Kipruto | Full Stack Engineer & AI Specialist",
    description: "Building autonomous agents and RAG systems that solve expensive problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
        {children}
        <ChatWidget />
      </body>
    </html>
   );
}
