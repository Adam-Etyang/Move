import { Link, useLocation } from 'react-router';

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Move
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors ${
                isActive('/')
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg font-medium transition-colors ${
                isActive('/about')
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;