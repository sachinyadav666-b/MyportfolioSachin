import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaAward } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const achievements = [
  {
    title: 'Frontend Internship at Unified Mentor',
    icon: <MdSchool />,
    color: 'text-cyan-400',
    description: 'Completed 2-month internship in frontend development. In this internship i build three projects for Enhancing my skills. ',
  },
  {
    title: 'DSA Certification - IIT Kharagpur',
    icon: <FaCertificate />,
    color: 'text-yellow-300',
    description: 'Certified in Data Structures & Algorithms using Java through nptel exam conducted by iit kharagpur.',
  },
  {
    title: 'FullStack development ',
    icon: <FaAward />,
    color: 'text-red-400',
    description: 'Completed FullStack MERN Web Application development  course through Delta batch of apna college with practical Knowledge and projects.',
  },
  {
    title: 'Startup-Idea Competition',
    icon: <FaTrophy />,
    color: 'text-green-400',
    description: 'Participated in this competition  and get IInd runner-up position',
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-20 px-6 sm:px-10 text-white overflow-hidden bg-[#0f172a]"
    >
      {/* 🌈 Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-[length:400%_400%] bg-gradient-to-r from-[#27527f] via-[#1e3a8a] to-[#ea3385]" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

      <h2 className="text-4xl font-bold text-center relative z-10 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
          Academic Achievements & Certificates
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 relative z-10">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center mb-3">
              <div className={`text-3xl mr-4 ${item.color}`}>{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-white/90 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
