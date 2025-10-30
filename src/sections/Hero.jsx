import { motion } from 'framer-motion';
import Section from '../components/Section';

const heroVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <Section className="pt-20" id="hero">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold text-white mb-4">Hi, I'm Mohamed Thoufeek</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          I'm a computer science student building web apps and AI integrations. Welcome to my portfolio.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 bg-green-500 text-gray-900 rounded font-semibold">See Projects</a>
          <a href="#contact" className="px-6 py-3 border border-gray-600 rounded text-gray-200">Contact</a>
        </div>
      </motion.div>
    </Section>
  );
};

export default Hero;