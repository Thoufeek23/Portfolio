// src/components/CertificateBrowser.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CertificateCard from './CertificateCard';

// --- IMPORTANT ---
// This is where you should add your certificate data.
// I've added placeholders based on your request.
// Make sure to add the images to /public/certs/
const certificateData = {
  google: [
    { 
      id: 'g1', 
      title: 'Foundations of Cybersecurity', 
      issuer: 'Google (Coursera)', 
      date: 'Oct 2025', 
      image: 'foundations_of_cybersec.png', // <-- Update this path
      url: 'https://www.coursera.org/account/accomplishments/certificate/0BI3RWLRCFGN' // <-- Update this link
    },
    { 
      id: 'g2', 
      title: 'Play It Safe: Manage Security Risks', 
      issuer: 'Google (Coursera)', 
      date: 'Oct 2025', 
      image: 'play_it_safe.png', // <-- Update this path
      url: 'https://www.coursera.org/account/accomplishments/certificate/9U4J6SAVQTJY' // <-- Update this link
    },
  ],
  workato: [
    { 
      id: 'w1', 
      title: 'Workato Automation Pro I', 
      issuer: 'Workato', 
      date: 'Jun 2025', 
      image: '/workato_pro1.png', // <-- Update this path
      url: 'https://credentials.workato.com/9f667a68-df9a-4d58-8f83-0406c5e1f848#acc.Oz9cjDtn' // <-- Update this link
    },
    { 
      id: 'w2', 
      title: 'Workato Automation Pro II', 
      issuer: 'Workato', 
      date: 'Jul 2025', 
      image: '/workato_pro2.png', // <-- Update this path
      url: 'https://credentials.workato.com/551597cf-be14-48ac-abae-08e369de176b#acc.kglGZcRt' // <-- Update this link
    },
    { 
      id: 'w3', 
      title: 'Workato Automation Pro III', 
      issuer: 'Workato', 
      date: 'Jul 2025', 
      image: '/workato_pro3.png', // <-- Update this path
      url: 'https://credentials.workato.com/551597cf-be14-48ac-abae-08e369de176b#acc.kglGZcRt' // <-- Update this link
    },
  ],
  accenture: [
    { 
      id: 'a1', 
      title: 'Accenture Virtual Experience', 
      issuer: 'Accenture', 
      date: 'Sep 2024', 
      image: 'accenture.png', // <-- Update this path
      url: 'https://www.theforage.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_mc6iEAB5SorxcSLNF_1725746133230_completion_certificate.pdf' // <-- Update this link
    },
  ]
};

// This creates the tabs in order
const categories = ['google', 'workato', 'accenture'];

const CertificateBrowser = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="w-full">
      {/* 1. Tab Navigation */}
      <div className="flex justify-center items-center gap-3 mb-8 bg-gray-800 p-2 rounded-lg max-w-md mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative w-full px-4 py-2 rounded-md text-sm font-semibold transition-colors
              ${activeCategory === category 
                ? 'text-gray-900' 
                : 'text-gray-300 hover:bg-gray-700'
              }
            `}
          >
            {/* Animated layout highlight */}
            {activeCategory === category && (
              <motion.div
                layoutId="activeCertTab"
                className="absolute inset-0 bg-green-500 rounded-md z-0"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10 capitalize">{category}</span>
          </button>
        ))}
      </div>

      {/* 2. Certificate Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          // This key is crucial for AnimatePresence to detect changes
          key={activeCategory} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {certificateData[activeCategory].map(cert => (
            <CertificateCard key={cert.id} {...cert} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CertificateBrowser;