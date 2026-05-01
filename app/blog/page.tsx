export default function Blog() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-[var(--accent)]">Blog</h1>
        <p className="text-lg mb-6">
          Welcome to my blog. Here I share insights on AI, full-stack development, autonomous agents, and RAG systems.
        </p>
        <div className="space-y-6">
          <article className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
            <h2 className="text-2xl font-semibold mb-2">Building Autonomous Agents</h2>
            <p className="text-[var(--text-secondary)]">
              Exploring the architecture and implementation of autonomous AI agents...
            </p>
          </article>
          <article className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
            <h2 className="text-2xl font-semibold mb-2">RAG Systems Deep Dive</h2>
            <p className="text-[var(--text-secondary)]">
              Understanding retrieval-augmented generation for better AI responses...
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}