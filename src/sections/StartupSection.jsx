import { motion } from 'framer-motion';
import Section from '../components/Section';
import { MdOutlineRateReview } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { BsBookmarkFill } from "react-icons/bs";
import { FaSearch, FaUserCircle, FaGlobeAmericas, FaComments } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { GoVerified } from "react-icons/go";

// Data for the MovieSocial project
const movieSocialData = {
  logo: "/MS_logo.png", // The logo file from your 'public' folder
  title: "Cinephile's Paradise",
  features: [
    { icon: <FiLogIn />, text: "Become a Movie Insider" }, // (Login/Join)
    { icon: <FaSearch />, text: "The Ultimate Movie Finder" }, // (Search)
    { icon: <MdOutlineRateReview />, text: "Be the Critic" }, // (Write reviews)
    { icon: <BsBookmarkFill />, text: "Curate Your Film Life" }, // (Watchlist/Save)
    { icon: <FaUserCircle />, text: "Build Your Film Persona" }, // (Profile)
    { icon: <FaGlobeAmericas />, text: "The Global Reel" }, // (Global feed)
    { icon: <FaComments />, text: "Engage in discussions" }, // (Comments/Forum)
    { icon: <GoVerified />, text: "Connect with cine celebrities" },
  ],
  live: "https://mail.google.com/mail/u/0/?fs=1&to=thoufeek2306@gmail.com&tf=cm", 
};

// Animation variants for the container
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger the animation of children
      delayChildren: 0.3,  // Wait a moment before starting
    },
  },
};

// Animation variants for each item inside
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const StartupSection = () => {
  const { logo, title, features, live } = movieSocialData;

  return (
    // Use the reusable Section component for the initial fade-in on scroll
    <Section>
      <div className="text-center">
        {/* Your new heading */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Startup
        </motion.h2>

        {/* This container mimics the dark card from your screenshot */}
        <motion.div
          className="bg-gray-800 rounded-2xl shadow-2xl max-w-4xl mx-auto p-6 md:p-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* 1. Logo */}
          <motion.img
            src={logo}
            alt="MovieSocial Logo"
            className="w-72 md:w-96 mx-auto mb-6"
            variants={itemVariants}
          />

          {/* 2. Tagline */}
          <motion.h3
            className="text-3xl md:text-5xl font-extrabold text-green-400 mb-10 tracking-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h3>

          {/* 3. Feature Pills */}
          <motion.div
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 my-8"
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-700/60 rounded-full px-5 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium text-gray-200"
              >
                <span className="text-green-400">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* 4. Live Prototype Button (GitHub button removed) */}
          <motion.div variants={itemVariants}>
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-green-500 text-gray-900 text-base md:text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform"
              whileHover={{ scale: 1.05}}
              whileTap={{ scale: 0.98 }}
              aria-label="Live Prototype for MovieSocial"
            >
              <FiExternalLink size={20} />
              Connect with me to view the prototype!
            </motion.a>
          </motion.div>
          
        </motion.div>
      </div>
    </Section>
  );
};

export default StartupSection;