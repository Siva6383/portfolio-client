import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Internship from '../components/Internship';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internship />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;