import { motion } from 'framer-motion';
import Section from '../components/Section';

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
  <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]">
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
  </div>
);

const ExperiencePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Section>
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          Work Experience
        </h1>
        <div className="relative">
          {workExperience.map((job, index) => (
            <ExperienceItem key={index} {...job} />
          ))}
        </div>
      </Section>
      
      <Section>
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          Leadership & Activities
        </h1>
        <div className="relative">
          {leadershipExperience.map((job, index) => (
            <ExperienceItem key={index} {...job} />
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default ExperiencePage;