import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FractalTree from '../components/FractalTree/FractalTree'; // 1. Import your new component

// --- Define your text and timings here ---
const title = "Hi, I am Mohamed Thoufeek Ali";
const titleSteps = title.length;
const titleCharDuration = 0.1;
const titleDuration = titleSteps * titleCharDuration;

const subtitle = "Full-Stack Developer | Building MovieSocial | Learnig business";
// Split subtitle into words for staggering
const subtitleWords = subtitle.split(" ");

// Base delay for hero section to appear (waits for navbar)
const heroDelay = 0.5; 
// Delay for subtitle container to *fade in* (after title finishes + a pause)
const subtitleContainerDelay = 0; // 0.5 + 2.9 + 0.5 = 3.9s

// --- Animation Variants ---

// Stagger the hero elements (Tree, h1-wrapper, p-wrapper, button-wrapper)
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: heroDelay,
      staggerChildren: 0.2, // Stagger Tree, h1, p, and buttons
    },
  },
};

// Simple fade-in for top-level children
const heroItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// Custom variant for the subtitle <p> container to delay its fade-in
const subtitleContainerVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: subtitleContainerDelay, // This is the key
      duration: 0.3,
      staggerChildren: 0.05, // Stagger each word
    }
  },
};

// Variant for each word in the subtitle
const wordVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// Create a motion-wrapped version of the Link component
const MotionLink = motion(Link);

const Hero = () => {
  return (
    <motion.section
      className="pt-8 pb-12 text-center" 
      id="hero"
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 2. Add FractalTree component here, wrapped in motion.div */}
      {/* This will be the first child to animate in */}
      <motion.div variants={heroItemVariants}>
        <FractalTree />
      </motion.div>
      
      {/* 3. The rest of your hero content will be staggered after the tree */}
      
      {/* H1 container */}
      <motion.div 
        variants={heroItemVariants} 
        className="mb-4 inline-block" 
        style={{ minHeight: '2.5rem' /* smaller minHeight to reduce vertical space */ }}
      >
        <h1 
          // Responsive text size added
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white inline-block overflow-hidden whitespace-nowrap border-r-4 border-r-green-400 align-middle"
          style={{
            width: "0", 
            animation: 
              `typing ${titleDuration}s steps(${titleSteps}, end) forwards, ` +
              `blink .75s step-end infinite`
          }}
        >
          {title}
        </h1>
      </motion.div>
      
      {/* Subtitle container */}
      <motion.p 
        variants={subtitleContainerVariant} 
        // Responsive text size added
        className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6"
        style={{ minHeight: '3rem' /* smaller minHeight to reduce vertical space */ }}
      >
        {subtitleWords.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariant}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>

      {/* Button div */}
      <motion.div
        // Stack buttons on mobile, row on sm+
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
        variants={heroItemVariants}
      >
        <MotionLink
          to="/projects"
          className="px-6 py-3 bg-green-500 text-gray-900 rounded font-semibold w-full sm:w-auto" // Make button full-width on mobile
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See Projects
        </MotionLink>
        
        <motion.a
          href="#contact" 
          className="px-6 py-3 border border-gray-600 rounded text-gray-200 w-full sm:w-auto" // Make button full-width on mobile
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;