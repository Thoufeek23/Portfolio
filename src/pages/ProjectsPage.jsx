// src/pages/ProjectsPage.jsx
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProjectCarousel from '../components/ProjectCarousel';
import CertificateBrowser from '../components/CertificateBrowser'; // <-- 1. Import new component

// Your project data
const projects = [
  {
    title: "iSteer Chat Assistant",
    description: "An AI-powered chatbot using Gemini API and RAG to provide real-time, context-aware support from 100+ company web pages.",
    tech: ["Gemini API", "LangChain", "FAISS", "Google Embeddings", "HTML/CSS/JS"],
    image: "/isteerchatbot.png",
    github: "https://github.com/iSteer-chatbot",
    live: "#",
  },
  {
    title: "C++ Search Engine",
    description: "A high-speed celebrity and person lookup tool built in C++, optimized with max heap, BST, and hashtable data structures.",
    tech: ["C++", "Data Structures", "Makefile", "Algorithms"],
    image: "/searchengine.png",
    github: "https://github.com/Search_Engine",
    live: "#",
  },
  {
    title: "Relationship Finder",
    description: "The \"Relationship Finder\" is a Python project using weighted graphs and Dijkstra's algorithm to map and analyze relationships. It finds the strongest connection paths between individuals and calculates overall relationship scores. Perfect for understanding family, social, or organizational networks, the project provides clear insights into complex interconnections, represented by its interconnected logo.",
    tech: ["C++", "Dijkstra's Algorithm", "Data Structures"],
    image: "/Rel_find_logo.png",
    github: "https.github.com/Relationship_Finder",
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
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pb-16"
    >
      {/* --- MY PROJECTS SECTION --- */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          My Projects
        </h2>
        
        <ProjectCarousel projects={projects} />

      </Section>

      {/* --- 2. NEW CERTIFICATES SECTION --- */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          My Certificates
        </h2>

        <CertificateBrowser />
      </Section>
    </motion.div>
  );
};

export default ProjectsPage;