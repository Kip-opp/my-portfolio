export default function About() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-[var(--accent)]">About</h1>
        <p className="text-lg mb-6">
          I&apos;m a full-stack engineer specializing in AI, autonomous agents, and RAG systems.
          Passionate about building intelligent systems that solve real-world problems.
        </p>
        <div className="space-y-4">
          <p className="text-[var(--text-secondary)]">
            With expertise in Next.js, React, TypeScript, and Python, I create robust applications
            that leverage the latest AI technologies for enhanced user experiences.
          </p>
          <p className="text-[var(--text-secondary)]">
            My focus is on developing autonomous agents and retrieval-augmented generation systems
            that can learn and adapt to complex tasks.
          </p>
        </div>
      </div>
    </div>
  );
}