import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1, category: 'mern',
    title: 'Price Comparison System',
    emoji: '💰',
    gradient: 'linear-gradient(135deg, #1a1400, #3a2e00)',
    desc: 'Real-time price comparison platform aggregating product prices from multiple sources.',
    features: ['Real-time price aggregation', 'Search & filter', 'Price history', 'User wishlist'],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#', demo: '#',
  },
  {
    id: 2, category: 'ai',
    title: 'Plant Leaf Disease Detection',
    emoji: '🌿',
    gradient: 'linear-gradient(135deg, #001a0a, #003015)',
    desc: 'AI-based system to detect plant diseases from leaf images using deep learning classification.',
    features: ['Image classification', 'CNN model', 'Disease report', 'Cure suggestions'],
    tech: ['Python', 'TensorFlow', 'React', 'Flask'],
    github: '#', demo: '#',
  },
  {
    id: 3, category: 'mern',
    title: 'Digital Complaint Box',
    emoji: '📬',
    gradient: 'linear-gradient(135deg, #0a0a1a, #151530)',
    desc: 'Platform for college students to submit complaints anonymously with admin tracking panel.',
    features: ['Anonymous submission', 'Admin dashboard', 'Status tracking', 'Email alerts'],
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    github: '#', demo: '#',
  },
  {
    id: 4, category: 'frontend',
    title: 'Personal Portfolio Website',
    emoji: '🌐',
    gradient: 'linear-gradient(135deg, #1a1400, #2a2000)',
    desc: 'This portfolio — glassmorphism design with full authentication system.',
    features: ['JWT Auth', 'Google OAuth', 'Dark mode', 'OTP Reset'],
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    github: '#', demo: '#',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="gold-line" />

        <div className="project-filters">
          {['all', 'mern', 'ai', 'frontend'].map((f) => (
            <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p) => (
            <div className="project-card" key={p.id}>
              <div className="project-img" style={{ background: p.gradient }}>
                <span style={{ fontSize: '56px', position: 'relative', zIndex: 1 }}>{p.emoji}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-features">
                  {p.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div className="tech-badges">
                  {p.tech.map((t, i) => <span className="badge" key={i}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-github">
                    <FiGithub /> GitHub
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="link-demo">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;