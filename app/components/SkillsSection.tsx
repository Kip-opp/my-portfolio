'use client';

import { skills } from '../data/skills';
import ScrollReveal from './ScrollReveal';

interface SkillSectionProps {
  onSkillClick?: (skill: string) => void;
}

export default function SkillsSection({ onSkillClick }: SkillSectionProps) {
  const handleSkillClick = (skill: string) => {
    if (onSkillClick) {
      onSkillClick(skill);
    } else {
      // Default behavior: scroll to projects section
      const element = document.getElementById('work');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text)]">
            Core Technologies & Stack
          </h2>
          <p className="text-lg mb-12 text-[var(--color-text-secondary)]">
            Proficiency in modern tools and languages essential for building robust, high-performance software.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill} direction="up" delay={index * 0.05}>
              <div
                className="skill-badge rounded-xl p-4 text-center group"
                onClick={() => handleSkillClick(skill)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSkillClick(skill);
                  }
                }}
                aria-label={`View projects using ${skill}`}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <span className="text-lg font-bold text-[var(--color-accent)]">
                    {skill.substring(0, 1).toUpperCase()}
                  </span>
                </div>
                <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  {skill}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}