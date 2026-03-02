import React, { useState, useEffect } from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const roles = [
  'Full Stack Developer',
  'MERN Stack Enthusiast',
  'React Developer',
  'Node.js Developer',
  'Problem Solver'
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length - 1) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Available for Work
          </div>

          <h1 className="hero-name">
            Hi, I'm <span>Kishore S</span>
          </h1>

          <div className="hero-role">
            <span className="typing-text">{displayText}</span>
            <span style={{ color: 'var(--primary)', animation: 'pulse 1s infinite' }}>|</span>
          </div>

          <p className="hero-desc">
            A passionate Full Stack Developer specializing in the MERN stack. 
            I build scalable web applications with clean code, modern UI, and exceptional user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }}>
              <FiMail /> Get in Touch
            </a>
            <a href="/Kishore_S_Resume.pdf" download className="btn btn-outline">
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="hero-stats">
            {[
              { number: '4+', label: 'Projects Built' },
              { number: '8.18', label: 'CGPA' },
              { number: '6+', label: 'Technologies' },
              { number: '1', label: 'Internship' }
            ].map((stat, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', gap:'12px', marginTop:'32px' }}>
            <a href="https://github.com/kishoreshub" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/kishore-s" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;