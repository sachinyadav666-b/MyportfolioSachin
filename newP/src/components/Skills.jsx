import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaJava,
  FaPython,
  FaPhp,
} from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
  { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { name: 'Node.js', icon: <FaNode />, color: 'text-green-500' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-300' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400' },
  { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
  { name: 'Python', icon: <FaPython />, color: 'text-yellow-300' },
  { name: 'PHP', icon: <FaPhp />, color: 'text-indigo-300' },
  { name: 'Database', icon: <FaDatabase />, color: 'text-purple-400' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className=" relative py-20 px-6 sm:px-10 text-white overflow-hidden bg-[#0f172a]"
    >
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-[length:400%_400%] bg-gradient-to-r from-[#27527f] via-[#1e3a8a] to-[#ea3385]" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

      <h2 className="text-4xl font-bold text-center relative z-10 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
          My Skills
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all"
          >
            <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
            <p className="text-white text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;



