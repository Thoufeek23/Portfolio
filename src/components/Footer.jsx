import React from 'react';

const Footer = () => {
  return (
    <footer className="container mx-auto max-w-5xl px-4 py-8 mt-12 text-center text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} Mohamed Thoufeek Ali. All rights reserved.
      </p>
      <p className="text-sm mt-2">
        Built with React, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;