import React from 'react';
import { motion } from 'framer-motion';
import Netflix from ".././assets/./images/Netflix.png";
import weather from ".././assets/./images/weather.png";
import StudentM from ".././assets/./images/StudentM.png";
import ShoeCompany from ".././assets/./images/ShoeCompany.png";
import contactBook from ".././assets/./images/contactBook.png";
import WorldMap from ".././assets/./images/WorldMap.png";

const projects = [
  {
    title: 'Netflix Clone',
    description: 'A responsive Netflix clone using HTML, CSS, and JavaScript with a beautiful UI and dynamic content.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: Netflix, // Place this image in the /public/images/ folder
    link: 'https://sachinyadav666-b.github.io/Netflix-Website/',
  },
  {
    title: 'Weather App',
    description: 'Weather forecast web app using OpenWeatherMap API with real-time location support.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: weather,
    link: 'https://weathersite-sachin-youtiao-5f015e.netlify.app/',
  },
  {
    title: 'Student Management System',
    description: 'Real-time chat application using React.js, Node.js, and Mysql.',
    tech: ['React.js', 'Node.js', 'Mysql'],
    image: StudentM,
    link: 'https://github.com/sachinyadav666-b/student-management-system.git',
  },
  {
    title: 'The Shoe Company Website',
    description: 'The Shoe company official website for the company',
    tech: ['Tailwind-css', 'javascript'],
    image: ShoeCompany,
    link: 'https://visionary-lolly-a49321.netlify.app/',
  },
  {
    title: 'The World Map',
    description: 'This project iclude world map information of the country',
    tech: ['html', 'javascript', 'css', 'Api', 'gsap'],
    image: WorldMap,
    link: 'https://effortless-sable-4eea10.netlify.app/',
  },
  {
    title: 'contactBook',
    description: 'This project is the online version of contactBook in which user make account and save their important contacts for their own purpose',
    tech: ['html', 'Bootstrap', 'PHP', 'SessionManagement'],
    image: contactBook,
    link: 'https://effortless-sable-4eea10.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 sm:px-10 text-white overflow-hidden bg-[#0f172a]"
    >
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-[length:400%_400%] bg-gradient-to-r from-[#1e3a8a] via-[#4f46e5] to-[#9333ea]" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

      <h2 className="text-4xl font-bold text-center relative z-10 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
          My Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-200 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-white/20 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
