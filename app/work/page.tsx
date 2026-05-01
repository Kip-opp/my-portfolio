export default function Work() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-[var(--accent)]">Work</h1>
        <p className="text-lg mb-6">
          A showcase of my projects in AI, full-stack engineering, and autonomous systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
            <h2 className="text-xl font-semibold mb-2">AI Chatbot</h2>
            <p className="text-[var(--text-secondary)]">
              Conversational AI using RAG for accurate responses.
            </p>
          </div>
          <div className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
            <h2 className="text-xl font-semibold mb-2">Autonomous Agent</h2>
            <p className="text-[var(--text-secondary)]">
              Self-learning system for task automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}