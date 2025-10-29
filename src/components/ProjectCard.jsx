import { motion } from 'framer-motion';
// import { FaGithub } from 'react-icons/fa'; // You can install react-icons for icons
// import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, tech, image, github, live }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
      // This is the "god level" hover animation!
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tag) => (
            <span key={tag} className="bg-gray-700 text-green-300 text-xs font-mono px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {/* <FaGithub size={24} /> */} GitHub
            </a>
          )}
          {live && (
            <a 
              href={live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {/* <FiExternalLink size={24} /> */} Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;