import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Your project data
const projects = [
  {
    title: "MovieSocial - Cinephile's paradise",
    description: "A full-stack social platform connecting film enthusiasts through reviews, discussions, and a daily 'Modle' puzzle.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Helmet"],
    image: "/moviesocial-preview.png",
    github: "https://github.com/Thoufeek23", 
  },
  {
    title: "iSteer Chat Assistant",
    description: "An AI-powered chatbot using Gemini API and RAG to provide real-time, context-aware support from 100+ company web pages.",
    tech: ["Gemini API", "LangChain", "FAISS", "Google Embeddings", "HTML/CSS/JS"],
    image: "/isteer-chat-preview.png",
    github: "https://github.com/iSteer-chatbot",
  },
  {
    title: "C++ Search Engine",
    description: "A high-speed celebrity and person lookup tool built in C++, optimized with max heap, BST, and hashtable data structures.",
    tech: ["C++", "Data Structures", "Makefile", "Algorithms"],
    image: "/search-engine-preview.png",
    github: "https://github.com/Search_Engine",
  },
  {
    title: "Relationship Finder",
    description: "A genealogy analysis tool supporting 100+ members per tree, enabling family relationship queries using Dijkstra's algorithm.",
    tech: ["C++", "Dijkstra's Algorithm", "Data Structures"],
    image: "/relationship-finder-preview.png",
    github: "https://github.com/Relationship_Finder",
  },
];

// Page transition animation settings
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

// Accordion animation variants
const accordionVariants = {
  collapsed: { 
    opacity: 0, 
    height: 0, 
    marginTop: 0,
    transition: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }
  },
  open: {
    opacity: 1,
    height: 'auto',
    marginTop: '1rem',
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
  }
};


const ProjectsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pb-16" // Added padding to the bottom of the whole page
    >
      {/* --- Projects Accordion Section --- */}
      {/* Using motion.div directly to apply pt-16 */}
      <motion.div
        className="pt-16 pb-16" // Use pt-16 here instead of <Section>
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          My Projects
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700/50"
              layout
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.8)" }} // bg-gray-700 with opacity
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-green-400">{project.title}</h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400"
                >
                  {/* Chevron Down Icon */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.button>
              
              <AnimatePresence initial={false}>
                {expandedIndex === index && (
                  <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={accordionVariants}
                    className="px-6 pb-6 border-t border-gray-700/50"
                  >
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tag) => (
                        <span key={tag} className="bg-gray-700 text-green-300 text-xs font-mono px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-gray-900 font-semibold rounded-lg"
                        whileHover={{ scale: 1.05, backgroundColor: "#16a34a" }} // Tailwind green-600
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub /> GitHub
                      </motion.a>
                    )}
                  </motion.section>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;