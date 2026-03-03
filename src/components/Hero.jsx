import React, { useState, useEffect } from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const roles = [
  'Full Stack Developer',
  'MERN Stack Enthusiast',
  'React Developer',
  'Node.js Developer',
  'Software Developer'
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length === current.length - 1) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-grid">

          {/* ── Left: Text Content ── */}
          <div>
            {/* <div className="hero-badge animate-up">
              <span className="dot" />
              Available for Work
            </div> */}

            <h1 className="hero-name animate-up animate-delay-1">
              Hi, I'm<br /><span>Kishore S</span>
            </h1>

            <div className="hero-role animate-up animate-delay-2">
              <span className="typing-text">{displayText}</span>
              <span style={{ color: 'var(--gold)', marginLeft: '2px' }}>|</span>
            </div>

            <p className="hero-desc animate-up animate-delay-3">
              A passionate Full Stack Developer specializing in the MERN stack.
              I build scalable, production-ready web apps with clean code and elegant UI.
            </p>

            {/* ── Buttons ── */}
            <div className="hero-buttons animate-up animate-delay-4">
              <a
                href="/assets/Kishore_Resume.pdf"
                download="Kishore_S_Resume.pdf"
                className="btn btn-primary"
              >
                <FiDownload />
                Download CV
              </a>
              
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FiMail />
                Get in Touch
              </a>
            </div>

            {/* ── Stats ── */}
            <div className="hero-stats animate-up">
              {[
                { number: '4+',   label: 'Projects' },
                { number: '8.18', label: 'CGPA' },
                { number: '3',    label: 'Internships' },
                { number: '6+',   label: 'Technologies' },
              ].map((s, i) => (
                <div className="stat-item" key={i}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* ── Social Icons ── */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
              <a
                href="https://github.com/Siva6383"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kishore-s-1703482a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className="hero-image-wrapper animate-up animate-delay-2">
            <div className="hero-image-ring">
              <div className="hero-image-inner">
                <img
                  src="/assets/profile.jpg"
                  alt="Kishore S"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = '👨‍💻';
                    e.currentTarget.parentElement.style.fontSize = '80px';
                    e.currentTarget.parentElement.style.display = 'flex';
                    e.currentTarget.parentElement.style.alignItems = 'center';
                    e.currentTarget.parentElement.style.justifyContent = 'center';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;