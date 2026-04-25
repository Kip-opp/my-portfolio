# Portfolio Design System

This document outlines the modern, high-end design components created for the portfolio. All components follow modern UI/UX principles with glassmorphism, aurora effects, and smooth animations.

---

## Table of Contents

1. [Aurora Background](#aurora-background)
2. [Bento Grid](#bento-grid)
3. [Spline Viewer / Animated Shape](#spline-viewer--animated-shape)
4. [Glass Card Components](#glass-card-components)
5. [Scroll Reveal Animations](#scroll-reveal-animations)
6. [Usage Examples](#usage-examples)

---

## Aurora Background

A dynamic background with mesh gradients, aurora blur effects, and falling tech icons.

### Component: `AuroraBackground.tsx`

**Features:**
- Animated aurora blobs with parallax scrolling
- Mesh gradient overlay that shifts colors
- Falling tech icons (Code, Database, Globe, etc.)
- Grid pattern overlay
- Noise texture for depth

**Usage:**
```tsx
import AuroraBackground from './components/AuroraBackground';

export default function Page() {
  return (
    <div className="relative">
      <AuroraBackground />
      <div className="relative z-10">
        {/* Your content */}
      </div>
    </div>
  );
}
```

---

## Bento Grid

A modern grid layout for showcasing skills with varying sizes and hover effects.

### Component: `BentoGrid.tsx`

**Features:**
- Responsive grid (1 column mobile, 3 columns desktop)
- Variable item sizes (small, medium, large)
- Gradient backgrounds per item
- Hover animations with glow effects
- Tag pills for skills

**Usage:**
```tsx
import BentoGrid from './components/BentoGrid';

export default function SkillsSection() {
  return (
    <section className="py-20">
      <BentoGrid />
    </section>
  );
}
```

---

## Spline Viewer / Animated Shape

Interactive 3D elements with parallax effects. Includes a Spline integration and a fallback animated shape.

### Component: `SplineViewer.tsx`

**Features:**
- Dynamic Spline 3D scene loading
- Fallback animated geometric shapes
- Parallax scrolling effect
- Smooth opacity transitions

**Usage:**
```tsx
import SplineViewer, { AnimatedShape } from './components/SplineViewer';

// With Spline (requires @splinetool/react-spline)
<SplineViewer sceneUrl="your-spline-scene-url" />

// Fallback animated shape (no dependencies)
<AnimatedShape />
```

**Dependencies:**
```bash
npm install @splinetool/react-spline
```

---

## Glass Card Components

Enhanced glassmorphism cards with various border effects.

### Component: `GlassCard.tsx`

**Variants:**

1. **GlassCard** - Basic glassmorphism with hover effects
```tsx
import GlassCard from './components/GlassCard';

<GlassCard variant="hover" glowColor="indigo">
  Content here
</GlassCard>
```

2. **GradientBorderCard** - Gradient border effect
```tsx
import { GradientBorderCard } from './components/GlassCard';

<GradientBorderCard>
  Content here
</GradientBorderCard>
```

3. **AnimatedBorderCard** - Animated gradient border
```tsx
import { AnimatedBorderCard } from './components/GlassCard';

<AnimatedBorderCard>
  Content here
</AnimatedBorderCard>
```

**Props:**
- `variant`: "default" | "hover" | "interactive"
- `glowColor`: "indigo" | "purple" | "blue" | "emerald"

---

## Scroll Reveal Animations

A collection of scroll-triggered animation components.

### Component: `ScrollReveal.tsx`

**Components:**

1. **ScrollReveal** - Basic reveal animation
```tsx
import ScrollReveal from './components/ScrollReveal';

<ScrollReveal direction="up" delay={0.2} distance={30}>
  Your content
</ScrollReveal>
```

2. **StaggerContainer** + **StaggerChild** - Staggered animations
```tsx
import { StaggerContainer, StaggerChild } from './components/ScrollReveal';

<StaggerContainer staggerDelay={0.1}>
  <StaggerChild>Item 1</StaggerChild>
  <StaggerChild>Item 2</StaggerChild>
  <StaggerChild>Item 3</StaggerChild>
</StaggerContainer>
```

3. **ScaleReveal** - Scale up animation
```tsx
import { ScaleReveal } from './components/ScrollReveal';

<ScaleReveal delay={0.3}>
  Your content
</ScaleReveal>
```

4. **TextReveal** - Character by character reveal
```tsx
import { TextReveal } from './components/ScrollReveal';

<TextReveal text="Hello World" delay={0.5} />
```

**Props:**
- `direction`: "up" | "down" | "left" | "right" | "none"
- `delay`: number (seconds)
- `duration`: number (seconds)
- `distance`: number (pixels)
- `once`: boolean (default: true)

---

## Usage Examples

### Hero Section with Aurora Background and Animated Shape

```tsx
import AuroraBackground from './components/AuroraBackground';
import { AnimatedShape } from './components/SplineViewer';
import ScrollReveal from './components/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <AuroraBackground />
      <AnimatedShape />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <h1>Your Name</h1>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

### Skills Section with Bento Grid

```tsx
import BentoGrid from './components/BentoGrid';
import ScrollReveal from './components/ScrollReveal';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <ScrollReveal direction="up">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
      </ScrollReveal>
      <BentoGrid />
    </section>
  );
}
```

### Project Card with Glass Effect

```tsx
import GlassCard from './components/GlassCard';

export default function ProjectCard({ title, description }) {
  return (
    <GlassCard variant="hover" glowColor="indigo" className="p-6">
      <h3>{title}</h3>
      <p>{description}</p>
    </GlassCard>
  );
}
```

---

## CSS Animations

Add these to your `globals.css` for additional animations:

```css
/* Aurora pulse */
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

/* Mesh gradient shift */
@keyframes mesh-shift {
  0% { background-position: 0% 0%; transform: translate(0, 0); }
  25% { background-position: 100% 0%; transform: translate(-20px, 10px); }
  50% { background-position: 100% 100%; transform: translate(10px, -10px); }
  75% { background-position: 0% 100%; transform: translate(20px, 20px); }
  100% { background-position: 0% 0%; transform: translate(0, 0); }
}

/* Animated gradient border */
@keyframes gradient-xy {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-xy {
  animation: gradient-xy 3s ease infinite;
}
```

---

## Dependencies

Required packages:

```bash
npm install framer-motion lucide-react
```

Optional (for 3D elements):

```bash
npm install @splinetool/react-spline
```

---

## Best Practices

1. **Performance**: Use `once: true` for scroll animations to prevent re-triggering
2. **Accessibility**: Ensure sufficient contrast for text over dynamic backgrounds
3. **Responsiveness**: Test all animations on mobile devices
4. **Optimization**: Use `will-change` sparingly for complex animations
5. **Fallbacks**: Always provide fallback for 3D elements (the AnimatedShape component)

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#030712` | Main background |
| Primary | `#6366f1` | Indigo - main accent |
| Secondary | `#8b5cf6` | Purple - secondary accent |
| Tertiary | `#3b82f6` | Blue - additional accent |
| Text Primary | `#ffffff` | Main text |
| Text Secondary | `#9ca3af` | Gray text |
| Border | `rgba(255,255,255,0.06)` | Subtle borders |

---

## Typography

- **Headings**: Space Grotesk (bold, tracking-tight)
- **Body**: Space Grotesk (regular)
- **Code/Tags**: JetBrains Mono

Font imports are handled in `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');