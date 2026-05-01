export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-[var(--accent)]">Contact</h1>
        <p className="text-lg mb-6">
          Get in touch for collaborations, projects, or discussions on AI and full-stack development.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-[var(--text-secondary)]">your.email@example.com</p>
          </div>
          <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <p className="text-[var(--text-secondary)]">linkedin.com/in/yourprofile</p>
          </div>
          <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
            <h2 className="text-xl font-semibold mb-2">GitHub</h2>
            <p className="text-[var(--text-secondary)]">github.com/yourusername</p>
          </div>
        </div>
      </div>
    </div>
  );
}