function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Move
        </h1>
        <div className="space-y-6 text-gray-300">
          <p className="text-xl leading-relaxed">
            Move is a modern React starter template built with the latest tools and best practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">React 19</h3>
              <p className="text-gray-400">Latest version with improved performance and features.</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Tailwind CSS v4</h3>
              <p className="text-gray-400">Modern utility-first CSS framework.</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">React Router</h3>
              <p className="text-gray-400">Declarative routing for React applications.</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">TypeScript</h3>
              <p className="text-gray-400">Type-safe development experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
