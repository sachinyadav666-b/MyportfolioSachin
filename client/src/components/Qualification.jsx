import React from 'react';
import { motion } from 'framer-motion';

const qualifications = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Rama University, Kanpur, UttarPradesh, India',
    year: '2023 - 2026',
    description:
      'Pursuing BCA with a strong foundation in software development, web technologies, and data structures.',
  },
  {
    degree: 'Intermediate (12th)',
    institution: 'S.B.R.L Academy, Mainpuri, UttarPradesh, India',
    year: '2022 - 2023',
    description:
      'Completed senior secondary education with Physic, chemistery, Math and Computer Science.',
  },
  {
    degree: 'High School (10th)',
    institution: 'S.B.R.L Academy, Mainpuri, Uttarpradesh, India',
    year: '2020 - 2021',
    description:
      'Built a strong academic foundation and developed interest in computer science.',
  },
];

const Qualification = () => {
  return (
    <section
      id="qualification"
      className="relative py-20 px-6 sm:px-10 text-white overflow-hidden bg-[#0f172a]"
    >
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-[length:400%_400%] bg-gradient-to-r from-[#1e3a8a] via-[#4f46e5] to-[#9333ea]" />

      {/* Overlay Glass Effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

      <h2 className="text-4xl font-bold text-center relative z-10 mb-12 text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
          Qualifications
        </span>
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
        {qualifications.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-cyan-300">{item.degree}</h3>
            <p className="text-sm text-gray-200">{item.institution}</p>
            <p className="text-xs text-gray-400 italic mb-2">{item.year}</p>
            <p className="text-gray-100">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;
