import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section'; // We can reuse this for the intro!

// Your project data, now including all projects from resume
const projects = [
  // ... (your project data remains the same)
  {
    title: "MovieSocial - Cinephile's paradise",
    description: "A full-stack social platform connecting film enthusiasts through reviews, discussions, and a daily 'Modle' puzzle.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Helmet"],
    image: "/moviesocial-preview.png", // You will need to add this image to your /public folder
    github: "https://github.com/Thoufeek23", // Update with correct repo link if different
  },
  {
    title: "iSteer Chat Assistant",
    description: "An AI-powered chatbot using Gemini API and RAG to provide real-time, context-aware support from 100+ company web pages.",
    tech: ["Gemini API", "LangChain", "FAISS", "Google Embeddings", "HTML/CSS/JS"],
    image: "/isteer-chat-preview.png", // You will need to add this image to your /public folder
    github: "https://github.com/iSteer-chatbot",
  },
  {
    title: "C++ Search Engine",
    description: "A high-speed celebrity and person lookup tool built in C++, optimized with max heap, BST, and hashtable data structures.",
    tech: ["C++", "Data Structures", "Makefile", "Algorithms"],
    image: "/search-engine-preview.png", // You will need to add this image to your /public folder
    github: "https://github.com/Search_Engine",
  },
  {
    title: "Relationship Finder",
    description: "A genealogy analysis tool supporting 100+ members per tree, enabling family relationship queries using Dijkstra's algorithm.",
    tech: ["C++", "Dijkstra's Algorithm", "Data Structures"],
    image: "/relationship-finder-preview.png", // You will need to add this image to your /public folder
    github: "https://github.com/Relationship_Finder",
  },
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

// Variants for the grid and cards
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
          Here's a gallery of my work, including class projects, and personal endeavors.
        </p>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={gridVariants}
          initial="hidden"
          animate="visible" // Animate this grid when the page animates in
        >
          {projects.map((project, index) => (
            // ProjectCard is already a motion.div, so we just add variants
            <ProjectCard key={index} {...project} variants={cardVariants} />
          ))}
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default ProjectsPage;