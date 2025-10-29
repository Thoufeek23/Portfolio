import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import TechStack from '../sections/TechStack';
import Projects from '../sections/Projects'; // This is your "Featured Projects"

// Animation settings for page transitions
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

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <About />
      <TechStack />
      <Projects /> {/* You might want to rename this to 'FeaturedProjects' */}
    </motion.div>
  );
};

export default Home;