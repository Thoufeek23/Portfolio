import { motion } from 'framer-motion';

// --- Define your text and timings here ---
const title = "Hi I am Mohamed Thoufeek Ali";
const titleSteps = title.length;
const titleCharDuration = 0.1; // Slower typing (0.1s per char)
const titleDuration = titleSteps * titleCharDuration; // 2.9s

const subtitle = "I'm a computer science student building web apps and AI integrations. Welcome to my portfolio.";
// Split subtitle into words for staggering
const subtitleWords = subtitle.split(" ");

// Base delay for hero section to appear (waits for navbar)
const heroDelay = 0.5; 
// Delay for subtitle container to *fade in* (after title finishes + a pause)
const subtitleContainerDelay = heroDelay + titleDuration + 0.5; // 0.5 + 2.9 + 0.5 = 3.9s

// --- Animation Variants ---

// Stagger the hero elements (h1-wrapper, p-wrapper, button-wrapper)
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: heroDelay,
      staggerChildren: 0.2, // Stagger h1, p, and buttons
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


const Hero = () => {
  return (
    <motion.section
      // Fixes the navbar overlap AND centers its children
      className="pt-28 pb-16 text-center" 
      id="hero"
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. H1 container. This div MUST be inline-block to shrink-wrap the h1 */}
      <motion.div 
        variants={heroItemVariants} 
        className="mb-4 inline-block" 
        style={{ minHeight: '3.75rem' /* h-15, prevents layout jump */ }}
      >
        <h1 
          // The h1 itself is also inline-block
          className="text-5xl font-extrabold text-white inline-block overflow-hidden whitespace-nowrap border-r-4 border-r-green-400 align-middle"
          style={{
            width: "0", 
            // 1. Typing animation (runs once, stays at 100% width)
            // 2. Blink animation (runs forever)
            animation: 
              `typing ${titleDuration}s steps(${titleSteps}, end) forwards, ` +
              `blink .75s step-end infinite` // <-- This is the fix
          }}
        >
          {title}
        </h1>
      </motion.div>
      
      {/* 2. Subtitle container. This now uses Framer Motion, not CSS typing */}
      <motion.p 
        variants={subtitleContainerVariant} 
        className="text-lg text-gray-300 max-w-2xl mx-auto mb-6" // <-- Layout constraints
        style={{ minHeight: '4.5rem' /* h-18, prevents layout jump for 2 lines */ }}
      >
        {subtitleWords.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariant}
            className="inline-block" // Make sure span is the element fading
          >
            {word}&nbsp; {/* Add space back */}
          </motion.span>
        ))}
      </motion.p>

      {/* 3. Button div fades in (staggered) */}
      <motion.div
        className="flex justify-center gap-4"
        variants={heroItemVariants}
      >
        <motion.a
          href="projects"
          className="px-6 py-3 bg-green-500 text-gray-900 rounded font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See Projects
        </motion.a>
        <motion.a
          href="contact"
          className="px-6 py-3 border border-gray-600 rounded text-gray-200"
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