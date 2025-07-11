
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* Unique S Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-300 text-black font-extrabold text-2xl flex items-center justify-center shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] animate-pulse ring-2 ring-white/20 hover:scale-110 transition-transform duration-300 ease-in-out">
              <span className="z-10">S</span>
              <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm blur-sm"></div>
            </div>
            <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:brightness-125 transition">
              
            </h1>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <Github className="w-6 h-6 text-white hover:text-gray-400 transition" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <Linkedin className="w-6 h-6 text-white hover:text-gray-400 transition" />
            </a>
            <a href="mailto:sachin@example.com" className="hover:scale-110 transition">
              <Mail className="w-6 h-6 text-white hover:text-gray-400 transition" />
            </a>
          </div>

          {/* Scroll to Top */}
          <a
            href="#"
            className="inline-flex items-center space-x-1 text-gray-400 hover:text-white transition"
          >
            <ArrowUp className="w-5 h-5" />
            <span className="text-sm">Top</span>
          </a>
        </div>

        <hr className="my-6 border-gray-600/50" />

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Sachin Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
