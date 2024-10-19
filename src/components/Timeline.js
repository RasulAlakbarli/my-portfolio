import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    date: "2024 - 2026",
    title: "M.S. in Artificial Intelligence",
    description: "University of Paris-Saclay",
    details: "Diving deeper into Artificial Intelligence and NLP World"
  },
  {
    date: "2023 - 2024",
    title: "Machine Learning Engineer",
    description: "Space Agency of the Republic of Azerbaijan (Azercosmos)",
    details: "I was part of the GIS team where our aim was to automate repetative tasks. This included in-house data labeling, training of several computer vision models for object detection, segmentation and generation, and deployment in production."
  },
  {
    date: "2023 - 2023",
    title: "Machine Learning Intern",
    description: "AZAI",
    details: "In this Startup We Developed a Face Recognition App for Mobile Devices, Automatic Number Plate Recognition for Azerbaijani number plates, and a Speed Enforcement solution. Despite being an intern, I led a team of five, including me"
  },
  {
    date: "2023 - 2023",
    title: "Deep Learning Engineer",
    description: "Freelance",
    details: "Worked on Sign language recognition and sign language translation models. Developed the action recognition model for videos using I3D (Inflated 3D Networks)."
  },
  {
    date: "2020 - 2024",
    title: "B.S. in Petroleum Engineering",
    description: "French-Azerbaijani University",
    details: "Found friends and partners with similar mindset and built awesome projects together."
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="mb-24">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">My Journey</h2>
      <div className="relative">
        {/* Line in the center of the timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
        {timelineData.map((item, index) => (
          <motion.div
            key={item.date}
            className={`relative mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:w-[calc(65%-2rem)] lg:w-[calc(50%-2rem)] mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Date marker */}
            {index % 2 == 0 ?
              <div className="whitespace-nowrap bg-white p-2 rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-600 absolute bottom-1.5 right-2 md:static transform  lg:-translate-x-4/5">
                {item.date}
              </div>
              :
              <div className="whitespace-nowrap bg-white p-2 rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-600 absolute bottom-1.5 right-2 md:static transform lg:translate-x-4/5">
                {item.date}
              </div>
            }
            {/* Timeline content */}
            <div className={`bg-white p-12 md:p-6 rounded-lg shadow-md w-full md:w-96 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-sm text-gray-500">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
