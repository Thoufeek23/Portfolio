import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors"
          onClick={() => setIsOpen(false)} // Close menu on logo click
        >
          Mohamed Thoufeek Ali
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-lg text-gray-300 hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-lg text-gray-300 hover:text-green-400 transition-colors">
            Milestones
          </Link>
          <Link to="/experience" className="text-lg text-gray-300 hover:text-green-400 transition-colors">
            Experience
          </Link>
          {/* --- ADDED THIS LINK --- */}
          <a
            href="/Mohamed_Thoufeek_Ali.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-300 hover:text-green-400 transition-colors"
          >
            Resume
          </a>
          
          <span className="w-px h-6 bg-gray-700"></span>

          {/* Desktop Social Icons */}
          <motion.a
            href="https://github.com/Thoufeek23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition-colors"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/mohamedta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition-colors"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/thoufeek.23/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition-colors"
            aria-label="Instagram Profile"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <FaInstagram size={20} />
          </motion.a>
          <motion.a
            href="https://x.com/Thoufeekhere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition-colors"
            aria-label="X Profile"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <SiX size={20} />
          </motion.a>
        </div>

        {/* 4. Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      {/* 5. Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="container mx-auto max-w-5xl px-4 pb-4 flex flex-col items-center gap-4">
              <Link 
                to="/" 
                className="text-lg text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="text-lg text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Milestones
              </Link>
              <Link 
                to="/experience" 
                className="text-lg text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
              {/* --- ADDED THIS LINK --- */}
              <a
                href="/Mohamed_Thoufeek_Ali.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
              
              <span className="w-1/2 h-px bg-gray-700 my-2"></span>

              {/* Mobile Social Icons */}
              <div className="flex items-center gap-6">
                <motion.a
                  href="https://github.com/Thoufeek23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                  aria-label="GitHub Profile"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/mohamedta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                  aria-label="LinkedIn Profile"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/thoufeek.mem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                  aria-label="Instagram Profile"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <FaInstagram size={20} />
                </motion.a>
                <motion.a
                  href="https://x.com/Thoufeekhere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                  aria-label="X Profile"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <SiX size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;