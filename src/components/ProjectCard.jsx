import { motion } from 'framer-motion';
// Imports are now active since 'react-icons' is in package.json 
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, tech, image, github, live }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl flex flex-col"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Set a fixed height for the image container */}
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-green-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tag) => (
            <span key={tag} className="bg-gray-700 text-green-300 text-xs font-mono px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 items-center mt-auto">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
              aria-label={`GitHub for ${title}`}
            >
              <FaGithub size={20} /> GitHub
            </a>
          )}
          {live && live !== "#" && (
            <a 
              href={live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <FiExternalLink size={20} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;