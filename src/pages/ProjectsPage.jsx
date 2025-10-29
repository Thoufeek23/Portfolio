import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section'; // We can reuse this for the intro!

// Your project data
const projects = [
  // Add ALL your projects here
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
  },
  {
    title: "C++ Search Engine",
    description: "A high-speed celebrity and person lookup tool built in C++, optimized with max heap, BST, and hashtable data structures.",
    tech: ["C++", "Data Structures", "Makefile", "Algorithms"],
    image: "/search-engine-preview.png",
    github: "https://github.com/Search_Engine",
  },
  // Add your "Relationship Finder" project here too
];

// Re-use the same page transition animation settings
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
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Section>
        <h1 className="text-4xl font-bold text-center mb-4 text-white">
          My Projects
        </h1>
        <p className="text-lg text-gray-400 text-center mb-12">
          Here's a gallery of my best work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default ProjectsPage;