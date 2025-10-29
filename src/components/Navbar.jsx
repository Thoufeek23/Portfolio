import { Link } from 'react-router-dom';
// You might need to install react-icons: npm install react-icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-md">
      <nav className="container mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-400">
          MTA
        </Link>
        
        <div className="flex items-center gap-6 text-lg">
          {/* Use Link component for internal navigation */}
          <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-green-400 transition-colors">
            Projects
          </Link>
          <Link to="/experience" className="text-gray-300 hover:text-green-400 transition-colors">
            Experience
          </Link>
          
          {/* External links still use <a> tags */}
          <a href="https://github.com/Thoufeek23" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/mohamedta/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
            <FaLinkedin size={22} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;