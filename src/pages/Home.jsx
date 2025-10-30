import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import TechStack from '../sections/TechStack';
import StartupSection from '../sections/StartupSection'; 
import Contact from '../sections/Contact'; // <-- 1. Import Contact

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
      <StartupSection /> 
      <Contact /> {/* <-- 2. Add Contact section here */}
    </motion.div>
  );
};

export default Home;