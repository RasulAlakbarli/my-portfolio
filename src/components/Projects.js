import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projectData = [
  {
    title: "Forest Segmentation from Satellite Imagery",
    description: "Developed a Deep Learning-based Approach for Monitoring Deforestation. The project utilizes the U-Net model implemented in Keras to perform the segmentation task. After training the model, a validation accuracy of 98% was achieved.",
    image: "/images/forest-seg.png?height=400&width=600"
  },
  {
    title: "Tennis Matches Predictions",
    description: "Built a Tennis Match Predictor from Scratch. From with Parsing the Data from Internet using BeautifulSoup4, Preprocessing it, to Training a XGBoost Model with 85% Accuracy.",
    image: "/images/tennis-pred.png?height=400&width=600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Featured Projects</h2>
      <div className="space-y-12">
        {projectData.map((project, index) => (
          <motion.div 
            key={project.title}
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-full md:w-1/2">
              <img src={project.image} alt={project.title} className="rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
