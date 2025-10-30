import { motion } from 'framer-motion'; // Import motion
import Section from '../components/Section';

// Variants for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Each child will animate 0.05s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const TechStack = () => {
    // Expanded list based on your resume's technical skills
	const tech = [
        'JavaScript (ES6+)',
        'TypeScript',
		'React',
		'Node.js',
        'Python',
		'Flask',
        'C',
        'C++',
        'Java',
        'LangChain',
        'Git',
        'FAISS',
        'REST APIs',
        'Google Cloud',
        'Workato',
		'MongoDB',
		'TailwindCSS',
		'Framer Motion',
	];

	return (
		<Section>
			<h2 className="text-3xl font-bold text-center mb-8">My Tech Stack</h2>
			<motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible" // Use whileInView to trigger animation on scroll
              viewport={{ once: true, amount: 0.2 }} // Match settings from Section
            >
				{tech.map((t) => (
					<motion.span
                      key={t}
                      className="px-4 py-2 bg-gray-800 text-green-300 rounded-lg text-sm font-mono shadow-md"
                      variants={itemVariants} // Apply item animation
                      whileHover={{ y: -3, scale: 1.05 }} // Add a little hover lift
                    >
						{t}
					</motion.span>
				))}
			</motion.div>
		</Section>
	);
};

export default TechStack;