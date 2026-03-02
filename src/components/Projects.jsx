import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Price Comparison System',
    category: 'mern',
    emoji: '💰',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    desc: 'A real-time price comparison platform that aggregates product prices from multiple sources, helping users find the best deals.',
    features: [
      'Real-time price aggregation',
      'Search & filter products',
      'Price history charts',
      'User wishlist & alerts'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Axios'],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Grocery QR Code Tracker',
    category: 'mern',
    emoji: '📦',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    desc: 'Smart inventory management system using QR codes to track grocery stock levels and manage sales efficiently.',
    features: [
      'QR code generation & scanning',
      'Real-time stock management',
      'Sales analytics dashboard',
      'Low stock notifications'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'QR Library', 'Chart.js'],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Digital Complaint Box',
    category: 'mern',
    emoji: '📬',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    desc: 'A digital platform for college students to submit complaints anonymously, with admin panel for tracking and resolution.',
    features: [
      'Anonymous complaint submission',
      'Admin management panel',
      'Status tracking system',
      'Email notifications'
    ],
    tech: ['React', 'Express', 'MongoDB', 'JWT', 'Nodemailer'],
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    category: 'frontend',
    emoji: '🌐',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    desc: 'This very portfolio — a modern, responsive developer portfolio built with React, featuring glassmorphism design and authentication.',
    features: [
      'Glassmorphism UI design',
      'JWT Authentication system',
      'Google OAuth integration',
      'Dark/Light mode toggle'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'CSS3'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Things I've built with passion and dedication</p>

        <div className="project-filters">
          {['all', 'mern', 'frontend'].map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-img" style={{ background: project.gradient }}>
                <span style={{ fontSize:'56px', position:'relative', zIndex:1 }}>{project.emoji}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <ul className="project-features">
                  {project.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div className="tech-badges">
                  {project.tech.map((t, i) => <span className="badge" key={i}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-github">
                    <FiGithub /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-demo">
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