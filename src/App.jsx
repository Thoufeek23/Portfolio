import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const location = useLocation(); // <-- This line will work now

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Navbar />
      
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <main key={location.pathname} className="container mx-auto max-w-5xl px-4">
            {/* Outlet is where React Router renders the current page (Home, ProjectsPage, etc.) */}
            <Outlet />
          </main>
        </AnimatePresence>
      </ErrorBoundary>
    </div>
  );
}

export default App;