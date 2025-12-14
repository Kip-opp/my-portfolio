import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// We use the '@' alias to safely find the components folder
import ChatWidget from "./components/ChatWidget"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denis Kipruto | Full Stack Engineer",
  description: "Portfolio of Denis Kipruto, AI Specialist and Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}