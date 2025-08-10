import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Medal, User, Code, Mail, Award, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Qualifications', href: '#qualification', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Award },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Achievements', href: '#achievements', icon: Medal },
    { name: 'Contact', href: '#contact', icon: Mail },
    
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#9333ea] shadow-md'
          : 'bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#9333ea] shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent hover:opacity-90 transition duration-300"
          >
            MyPortfolio
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                className="flex items-center px-4 py-2 text-sm font-medium text-white hover:text-cyan-300 rounded-full transition duration-300 hover:bg-white/10 hover:scale-105"
              >
                <Icon className="w-4 h-4 mr-2" />
                {name}
              </a>
            ))}
          </div>

          {/* Tablet Nav */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navItems.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                className="p-3 text-white hover:text-cyan-300 rounded-full transition hover:bg-white/10"
                title={name}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Hire Me CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 lg:px-6 py-2 rounded-full font-medium transition shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
            >
              <span className="hidden lg:inline">Hire Me</span>
              <span className="lg:hidden">Hire</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-cyan-300 hover:bg-white/10 rounded-lg transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-[#1e293b] to-[#3b0764] px-4 py-4 space-y-2">
          {navItems.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 text-base font-medium text-white hover:text-cyan-300 hover:bg-white/10 rounded-lg transition"
            >
              <Icon className="w-5 h-5 mr-3"/>
              {name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 block text-white text-center px-4 py-3 rounded-lg font-medium transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

