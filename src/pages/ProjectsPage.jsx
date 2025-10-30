import { useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

// Your project data
const projects = [
  {
    title: "MovieSocial - Cinephile's paradise",
    description: "A full-stack social platform connecting film enthusiasts through reviews, discussions, and a daily 'Modle' puzzle.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Helmet"],
    image: "/moviesocial-preview.png",
    github: "https://github.com/Thoufeek23", 
    live: "#",
  },
  {
    title: "iSteer Chat Assistant",
    description: "An AI-powered chatbot using Gemini API and RAG to provide real-time, context-aware support from 100+ company web pages.",
    tech: ["Gemini API", "LangChain", "FAISS", "Google Embeddings", "HTML/CSS/JS"],
    image: "/isteer-chat-preview.png",
    github: "https://github.com/iSteer-chatbot",
    live: "#",
  },
  {
    title: "iSteer Chat Assistant",
    description: "An AI-powered chatbot using Gemini API and RAG to provide real-time, context-aware support from 100+ company web pages.",
    tech: ["Gemini API", "LangChain", "FAISS", "Google Embeddings", "HTML/CSS/JS"],
    image: "/isteer-chat-preview.png",
    github: "https://github.com/iSteer-chatbot",
    live: "#",
  },
  {
    title: "iSteer Chat Assistant",
    description: "An AI-powered chatbot using Gemini API and RAG to provide real-time, context-aware support from 100+ company web pages.",
    tech: ["Gemini API", "LangChain", "FAISS", "Google Embeddings", "HTML/CSS/JS"],
    image: "/isteer-chat-preview.png",
    github: "https://github.com/iSteer-chatbot",
    live: "#",
  },
  {
    title: "C++ Search Engine",
    description: "A high-speed celebrity and person lookup tool built in C++, optimized with max heap, BST, and hashtable data structures.",
    tech: ["C++", "Data Structures", "Makefile", "Algorithms"],
    image: "/search-engine-preview.png",
    github: "https://github.com/Search_Engine",
    live: "#",
  },
  {
    title: "Relationship Finder",
    description: "A genealogy analysis tool supporting 100+ members per tree, enabling family relationship queries using Dijkstra's algorithm.",
    tech: ["C++", "Dijkstra's Algorithm", "Data Structures"],
    image: "/relationship-finder-preview.png",
    github: "https://github.com/Relationship_Finder",
    live: "#",
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


const ProjectsPage = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pb-16"
    >
      <Section>
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          My Projects
        </h2>
        
        {/* 1. Viewport: The visible area. It clips the content. */}
        <motion.div 
          ref={constraintsRef} 
          className="w-full overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          {/* 2. Draggable Container: Holds all the cards */}
          <motion.div
            className="flex gap-6" // Spacing between cards
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1} // Adds a little "bounce"
          >
            {/* 3. Map all projects */}
            {projects.map((project, index) => (
              // Wrapper to set a fixed width for each card
              <div key={index} className="w-96 flex-shrink-0">
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  image={project.image}
                  github={project.github}
                  live={project.live}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Interaction hint */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Drag or swipe to explore projects
        </p>

      </Section>
    </motion.div>
  );
};

export default ProjectsPage;