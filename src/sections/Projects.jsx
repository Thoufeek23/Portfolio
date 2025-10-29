import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

// Your project data, pulled from your resume
const projects = [
  {
    title: "MovieSocial - Cinephile's paradise",
    description: "A full-stack social platform connecting film enthusiasts through reviews, discussions, and a daily 'Modle' puzzle.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Helmet"],
    image: "/moviesocial-preview.png",
    github: "https://github.com/Thoufeek23", // Update with correct repo link
    live: "#", // Add live link if you have it
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
];

const Projects = () => {
  return (
    <Section>
      <h2 className="text-3xl font-bold text-center mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;