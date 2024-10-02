import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "TensorFlow",
    "PyTorch",
    "Project Leading",
    "Data Science"
  ];

  return (
    <section id="skills" className="mb-24 py-16 bg-gray-100/50 rounded-3xl">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Areas of Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill}
            className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-lg font-medium text-gray-800">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}