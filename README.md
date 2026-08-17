# Denis Kipruto |  Software Engineer & Systems Developer

A clean, minimalist portfolio website built with Next.js 16+, showcasing systems engineering expertise, privacy-first web utilities, and AI integration projects.

## 🚀 Features

- **Professional Branding** - Clean, typography-driven layout with "DENIS K." branding
- **Systems Engineering Focus** - Emphasis on desktop applications, distributed systems, and architecture
- **Project Showcase** - Clean project cards displaying verified repositories with live/demo links
- **Responsive Design** - Optimized for all screen sizes with modern CSS
- **Performance Optimized** - Built with Next.js 16+ App Router and modern best practices
- **TypeScript** - Full type safety across the codebase
- **Glassmorphism UI** - Modern frosted-glass design elements
- **Dark/Light Theme** - Automatic theme detection with manual toggle

## 🛠️ Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Primitives:** Custom glassmorphism components
- **Fonts:** System UI + Space Grotesk (via next/font)
- **Build:** Turbopack (Next.js native)

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with theme support
│   └── page.tsx                # Home page
├── components/
│   ├── BentoGrid.tsx           # Skills/services display
│   ├── GlassCard.tsx           # Glassmorphism card component
│   ├── Navbar.tsx              # Navigation bar with theme toggle
│   ├── ProjectCard.tsx         # Project showcase card
│   ├── Reveal.tsx              # Scroll reveal animation
│   └── ScrollReveal.tsx        # Scroll-based animation wrapper
├── globals.css                 # Global styles with CSS variables
├── public/                     # Static assets (images, icons)
├── .env.local                  # Environment variables
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:Kip-opp/my-portfolio.git
    cd my-portfolio
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Customization

- **Projects:** Edit [`app/page.tsx`](app/page.tsx) to update project cards
- **Skills:** Update the `skills` array in [`app/page.tsx`](app/page.tsx)
- **Services:** Update the `services` array in [`app/page.tsx`](app/page.tsx)
- **Stats:** Update the `stats` array in [`app/page.tsx`](app/page.tsx)
- **Styling:** Customize CSS variables in [`app/globals.css`](app/globals.css)
- **Theme:** Adjust theme colors in `globals.css` `:root` and `[data-theme='light']` sections

## 💼 Services & Expertise

- **Desktop & Systems Engineering** - Building robust, high-performance desktop software in C# and WPF adhering to strict MVVM architecture
- **Full-Stack Web Development** - Crafting responsive web applications with React, TypeScript, Vite, and Supabase backend integration
- **Privacy-First Utilities** - Engineering zero-upload browser tools and local AI inference pipelines (Ollama) to guarantee absolute data privacy

## 📂 Featured Projects

- **Q-flow** - Sophisticated quantum mechanics simulation desktop app built with .NET 9 and WPF. Features real-time probability visualization for qubit gate operations and wavepacket motion, adhering to strict MVVM architecture.
- **Lumina** - AI-powered writing assistant built with React and Supabase. Offers real-time text analysis, grammar correction, and tone adaptation with dual-provider architecture supporting cloud OpenAI and local Ollama models.
- **VidForge-TSX** - Centralized discovery platform for generative AI video models. Built with React 18 and TypeScript, leveraging Zustand for high-performance state management and custom Tailwind animation system.
- **imgwatermaker** - Privacy-first security utility performing 100% client-side image watermarking via HTML5 Canvas API. Designed for sensitive document protection with zero data transmission to external servers.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Deploy! (No environment variables required for base functionality)

### Other Platforms

```bash
npm run build
npm start
```

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Connect

- **GitHub:** [github.com/Kip-opp](https://github.com/Kip-opp)
- **Email:** denis.dev.ke@gmail.com

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies