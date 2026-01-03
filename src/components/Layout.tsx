import { Outlet } from 'react-router';
import Navigation from './Navigation';

function Layout() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;