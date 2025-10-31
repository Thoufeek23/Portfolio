// src/components/CertificateCard.jsx
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const CertificateCard = ({ title, issuer, date, image, url }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      {/* Image container: 16:9 aspect ratio */}
      <div className="w-full aspect-video overflow-hidden bg-gray-700">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-green-400 mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 font-mono">{issuer} &bull; {date}</p>
        
        {/* Verify Link */}
        <div className="mt-auto">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            aria-label={`Verify ${title}`}
          >
            <FiExternalLink size={18} /> Verify
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;