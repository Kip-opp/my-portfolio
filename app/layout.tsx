import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denis Kipruto | Software Engineer & Systems Developer",
  description: "Portfolio of Denis Kipruto, a Software Engineer and Systems Developer building Python and Flask backends, .NET, React and TypeScript, AI, and privacy-first software.",
  keywords: ["Software Engineer", "Systems Developer", "React", ".NET", "Python", "Flask", "AI", "Denis Kipruto"],
  openGraph: {
    title: "Denis Kipruto | Software Engineer & Systems Developer",
    description: "Building Python and Flask backends, .NET, React and TypeScript, AI, and privacy-first software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" style={{ paddingTop: '96px' }}>
        {children}
      </body>
    </html>
  );
}
