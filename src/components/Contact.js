import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="text-center">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Get in Touch</h2>
      <p className="text-lg text-gray-600 mb-8">
        Interested in collaborating or have a project in mind? Let's connect and explore the possibilities.
      </p>
      
      {/* Flex container for both buttons */}
      <div className="flex justify-center space-x-4">
        
        {/* Contact Me Button */}
        <motion.a 
          href="mailto:alakbarlirasul@gmail.com"
          className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>

        {/* Download Resume Button - Same Shape and Layout */}
        <motion.a 
          href="/resume.pdf" 
          download 
          className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>
      </div>
    </section>
  );
}
