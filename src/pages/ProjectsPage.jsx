// src/pages/ProjectsPage.jsx
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProjectCarousel from '../components/ProjectCarousel';
import CertificateBrowser from '../components/CertificateBrowser'; // <-- 1. Import new component

// Your project data
const projects = [
  {
    title: "iSteer Chat Assistant",
    description: "An AI-powered chatbot built for real-time, context-aware support using Gemini API, LangChain, and FAISS. Indexed over 100 company web pages to enable instant, accurate responses within two seconds. Developed a clean chat interface and integrated intelligent user intent handling for a seamless experience.",
    tech: ["Gemini API", "LangChain", "FAISS", "Google Embeddings", "HTML/CSS/JS"],
    image: "/isteerchatbot.png",
    github: "https://github.com/Thoufeek23/iSteer-chatbot",
    live: "#",
  },
  {
    title: "C++ Search Engine",
    description: "A high-speed C++ search engine enabling lightning-fast celebrity and person lookups in under 10ms. Implemented optimized data structures like heaps and hash tables for efficient search and retrieval. Built a modular architecture with a custom Makefile ensuring clean, stable builds.",
    tech: ["C++", "Data Structures", "Makefile", "Algorithms"],
    image: "/searchengine.png",
    github: "https://github.com/Thoufeek23/Search_Engine",
    live: "#",
  },
  {
    title: "Relationship Finder",
    description: "A genealogy analysis tool that identifies family relationships and shortest connection paths across large family trees. Used Dijkstra’s algorithm to achieve quick, accurate results for 100+ member networks. Validated through user testing to ensure smooth and relevant query handling.",
    tech: ["C++", "Dijkstra's Algorithm", "Data Structures"],
    image: "/Rel_find_logo.png",
    github: "https.github.com/Thoufeek23/Relationship_Finder",
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