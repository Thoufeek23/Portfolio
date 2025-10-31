import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FiDownload } from 'react-icons/fi'; // <-- Icon is already imported

// Data from your resume
const workExperience = [
  {
    company: 'iSteer',
    role: 'Software Internship',
    date: 'June 2025 - July 2025',
    description: [
      'Used Workato to design and automate cross-platform workflows, completing 2 certifications and enabling a 25% faster onboarding process through streamlined integrations.',
      'Built an AI-powered chatbot using Gemini API and RAG architecture, scraping and indexing 100+ pages from the iSteer website to enable real-time, context-aware support.',
      'Developed a Resource Allocation App with AppSteer and Google AppSheet, digitizing manual processes and reducing resource assignment time by 40%.'
    ]
  },
];

const leadershipExperience = [
  {
    company: 'Binghamton University',
    role: 'Course Assistant - Ethical, social, and global issues in computing',
    date: 'January 2025 - Present',
    description: [
      'Used hands-on mentorship to guide 15 students in project development, strengthening their problem-solving and technical skills.',
      'Organized weekly study groups and academic events, increasing peer collaboration and raising average class performance by 10%.'
    ]
  },
  {
    company: 'ColorStack',
    role: 'Hackathon Treasurer',
    date: 'January 2025 - August 2025',
    description: [
      'Used Google Sheets to track and allocate a $5,000 hackathon budget, ensuring transparent expense tracking and reducing overspending by 15%.',
      'Collaborated with the Student Association Head to conduct 3+ campus fundraisers, raising 100% of required funds ahead of schedule.'
    ]
  }
];

// Your timeline data
const timelineEvents = [
  { year: 2022, text: "Started to code." },
  { year: 2023, text: "Started exploring fullstack." },
  { year: 2024, text: "Played with LLMs - integrating it in my apps." },
  { year: 2025, text: "Building applications (MovieSocial)." },
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

// A reusable component for timeline items
const ExperienceItem = ({ role, company, date, description }) => (
  <motion.div
    className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg"
    // Remove Tailwind transitions and use Framer Motion
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-2xl font-bold text-green-400">{role}</h3>
      <span className="text-sm font-mono text-gray-400">{date}</span>
    </div>
    <h4 className="text-xl font-semibold text-gray-300 mb-4">{company}</h4>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

// Stagger variants for the experience list
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};


const ExperiencePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      
      {/* --- Highlights Timeline Section (Horizontal) --- */}
      {/* --- BUTTON WAS REMOVED FROM HERE --- */}
      <motion.div
        className="pt-16 pb-16" 
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-16 text-green-400">
          Highlights
        </h2>
        {/* Horizontal Timeline Container */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* The Horizontal Line */}
          {/* Positioned to be in the middle of the "dot" */}
          <div className="absolute left-10 right-10 top-11 h-1 bg-gray-700 rounded-full" />
          
          {/* Timeline Items Container */}
          <div className="relative flex justify-between">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index} 
                className="relative flex flex-col items-center w-48" // w-48 for spacing
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Year above the dot */}
                <h3 className="text-2xl font-semibold text-white mb-2">{event.year}</h3>
                {/* Timeline dot (sits on top of the line) */}
                <div className="w-5 h-5 bg-green-500 rounded-full border-4 border-gray-900 z-10 mb-2" />
                {/* Text below the dot */}
                <p className="text-lg text-gray-400 text-center">{event.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BUTTON MOVED HERE --- */}
        <motion.div 
          className="text-center pt-16" // Added padding-top
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors text-base md:text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload size={20} />
            View Full Resume
          </motion.a>
        </motion.div>
      </motion.div>

      <Section>
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          Work Experience
        </h1>
        <motion.div
          className="relative"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {workExperience.map((job, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ExperienceItem {...job} />
            </motion.div>
          ))}
        </motion.div>
      </Section>
      
      <Section>
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          Leadership & Activities
        </h1>
        <motion.div
          className="relative"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {leadershipExperience.map((job, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ExperienceItem {...job} />
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default ExperiencePage;