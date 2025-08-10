import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Qualification from './components/Qualification';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Qualification />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;