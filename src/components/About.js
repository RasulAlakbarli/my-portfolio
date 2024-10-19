import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="mb-24">
      <motion.h1 
        className="text-[2.75rem] sm:text-6xl font-bold mb-6 text-center text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Rasul Alakbarli
      </motion.h1>
      <motion.p 
        className="text-xl text-center text-gray-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        AI Engineer & Computer Vision Specialist
      </motion.p>
      <motion.p 
        className="text-xl text-center max-w-2xl mx-auto text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I enjoy automating tasks that involve human labor and probabilistic outcomes. 🧠🤖🤔
      </motion.p>
    </section>
  );
}
