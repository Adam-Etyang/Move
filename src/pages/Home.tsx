function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Move
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Your Next Project
        </p>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Everything is configured and ready to go.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
