import { motion } from 'framer-motion';

// This is a reusable component for scroll-based animations
const Section = ({ children }) => {
  return (
    <motion.section
      className="py-16" // Add padding between sections
      initial={{ opacity: 0, y: 75 }} // Start invisible and slightly down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% visible
    >
      {children}
    </motion.section>
  );
};

export default Section;