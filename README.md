# Denis Kipruto | Full Stack Engineer & AI Specialist

A modern, interactive portfolio website built with Next.js 14, featuring AI-powered chat functionality, smooth animations, and a responsive design tailored for recruiters and clients.

![Portfolio Preview](./public/og-image.png)

## 🚀 Features

- **Interactive Hero Section** - Animated spotlight effects and falling tech icons
- **AI Chat Assistant** - OpenAI-powered chatbot to answer questions about skills and projects
- **Project Showcase** - Animated project cards with hover effects and live/demo links
- **Responsive Design** - Optimized for all screen sizes
- **Performance Optimized** - Built with Next.js 14 App Router and modern best practices
- **TypeScript** - Full type safety across the codebase

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **AI:** OpenAI API (GPT-3.5 Turbo)
- **Fonts:** Inter (via next/font)

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # AI Chat API endpoint
│   ├── components/
│   │   ├── ChatWidget.tsx      # AI Chat widget
│   │   ├── ProjectCard.tsx     # Project showcase card
│   │   ├── Spotlight.tsx       # Mouse follower effect
│   │   └── TechBackground.tsx  # Animated tech icons
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun
- OpenAI API key (for AI chat functionality)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Add your OpenAI API key to `.env.local`:
   ```env
   OPENAI_API_KEY=sk-your-api-key-here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for AI chat | Yes |

### Customization

- **Projects:** Edit [`app/page.tsx`](app/page.tsx) to update project cards
- **Skills:** Update the marquee section in [`app/page.tsx`](app/page.tsx)
- **AI Persona:** Modify the system prompt in [`app/api/chat/route.ts`](app/api/chat/route.ts)
- **Styling:** Customize Tailwind config and [`app/globals.css`](app/globals.css)

## 📱 Features Breakdown

### AI Chat Widget
- Located in [`app/components/ChatWidget.tsx`](app/components/ChatWidget.tsx)
- Powered by OpenAI GPT-3.5 Turbo
- Context-aware responses about skills and projects
- Error handling with fallback messages

### Animated Backgrounds
- **Spotlight:** Mouse-following gradient effect ([`app/components/Spotlight.tsx`](app/components/Spotlight.tsx))
- **Tech Icons:** Falling tech-related icons ([`app/components/TechBackground.tsx`](app/components/TechBackground.tsx))

### Project Cards
- Staggered fade-in animations
- Interactive hover states
- Live demo and GitHub links

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Add `OPENAI_API_KEY` in Vercel environment variables
4. Deploy!

### Other Platforms

```bash
npm run build
npm start
```

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Connect

- **GitHub:** [github.com/YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- **LinkedIn:** [linkedin.com/in/YOUR_USERNAME](https://linkedin.com/in/YOUR_USERNAME)
- **Email:** denis.dev.ke@gmail.com

---

Built with ❤️ using Next.js and Tailwind CSS
