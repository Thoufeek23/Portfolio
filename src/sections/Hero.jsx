import { motion } from 'framer-motion';
// Assume you have these icons in src/assets/
// import GithubIcon from '../assets/github-icon.svg';
// import LinkedinIcon from '../assets/linkedin-icon.svg';

// A simple container for text animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Makes items appear one by one
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-start"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h3 className="text-lg text-green-400" variants={item}>
        Hi, my name is
      </motion.h3>

      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-white my-4"
        variants={item}
      >
        Mohamed Thoufeek Ali.
      </motion.h1>

      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-gray-400"
        variants={item}
      >
        I build things for the web.
      </motion.h2>

      <motion.p className="text-gray-300 max-w-lg mt-6 text-lg" variants={item}>
        I'm a computer science student at <strong>Binghamton University </strong>
        in the <strong>B.S./M.S. (4+1) program</strong>, passionate about building
        scalable, AI-driven web applications.
      </motion.p>

      <motion.div className="mt-8 flex gap-4" variants={item}>
        <a 
          href="https://github.com/Thoufeek23"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
        >
          View My GitHub
        </a>
        <a 
          href="https://linkedin.com/in/mohamedta/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-green-500 text-green-500 font-bold rounded-lg hover:bg-green-500 hover:text-gray-900 transition-colors"
        >
          Connect on LinkedIn
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;