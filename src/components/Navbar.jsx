import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-md"
      // Add animation variants
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
          Mohamed Thoufeek Ali
        </Link>
        
        <div className="flex items-center gap-6">
          {/* Use Link component for internal navigation */}
          <Link to="/" className="text-lg text-gray-300 hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-lg text-gray-300 hover:text-green-400 transition-colors">
            Projects
          </Link>
          <Link to="/experience" className="text-lg text-gray-300 hover:text-green-400 transition-colors">
            Experience
          </Link>
          
          <span className="w-px h-6 bg-gray-700"></span>

          {/* External links using icons */}
          <motion.a
            href="https://github.com/Thoufeek23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition-colors"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.2, y: -2 }} // Add hover effect
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/mohamedta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition-colors"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.2, y: -2 }} // Add hover effect
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;