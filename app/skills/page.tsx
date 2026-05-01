export default function Skills() {
  const skills = [
    "Next.js", "React", "TypeScript", "Python", "LangChain", "OpenAI",
    "Pinecone", "Supabase", "PostgreSQL", "Tailwind CSS", "FastAPI", "Docker",
    "Node.js", "RAG Systems", "Vector DBs", "Autonomous Agents",
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-[var(--accent)]">Skills</h1>
        <p className="text-lg mb-6">
          Technologies and frameworks I work with to build modern AI-powered applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] text-center"
            >
              <span className="text-[var(--text-primary)] font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}