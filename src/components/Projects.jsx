import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    category: 'mern',
    title: 'Price Comparison System',
    // Put your image in: client/public/assets/projects/price-comparison.jpg
    image: '/assets/projects/price-comparison.jpg',
    emoji: '💰',
    fallbackGradient: 'linear-gradient(135deg, #1a1200 0%, #2e2000 50%, #1a1200 100%)',
    desc: 'Real-time price comparison platform aggregating product prices from multiple sources.',
    features: [
      'Real-time price aggregation',
      'Search & filter products',
      'Price history charts',
      'User wishlist & alerts',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    category: 'ai',
    title: 'Plant Leaf Disease Detection',
    image: '/assets/projects/plant-disease.jpg',
    emoji: '🌿',
    fallbackGradient: 'linear-gradient(135deg, #001a08 0%, #002e10 50%, #001a08 100%)',
    desc: 'AI-based system to detect plant diseases from leaf images using deep learning classification.',
    features: [
      'Image classification (CNN)',
      'Disease identification',
      'Treatment suggestions',
      'Upload & instant result',
    ],
    tech: ['Python', 'TensorFlow', 'React', 'Flask'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    category: 'mern',
    title: 'Digital Complaint Box',
    image: '/assets/projects/complaint-box.jpg',
    emoji: '📬',
    fallbackGradient: 'linear-gradient(135deg, #0a0a18 0%, #12122a 50%, #0a0a18 100%)',
    desc: 'Platform for college students to submit complaints anonymously with admin tracking panel.',
    features: [
      'Anonymous submission',
      'Admin dashboard',
      'Status tracking',
      'Email notifications',
    ],
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    category: 'frontend',
    title: 'Personal Portfolio Website',
    image: '/assets/projects/portfolio.jpg',
    emoji: '🌐',
    fallbackGradient: 'linear-gradient(135deg, #1a1200 0%, #2a1e00 50%, #1a1200 100%)',
    desc: 'This portfolio — dark glossy design with full MERN authentication system.',
    features: [
      'JWT Authentication',
      'Google OAuth',
      'OTP Password Reset',
      'Dark / Light mode',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
  },
];

/* ── ProjectImage: shows real image, falls back to emoji ── */
const ProjectImage = ({ src, emoji, fallbackGradient, title }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="project-img"
      style={{
        background: fallbackGradient,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glossy overlay on top of image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(0,0,0,0.5) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {!imgError ? (
        <img
          src={src}
          alt={title}
          onError={() => setImgError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            transition: 'transform 0.5s ease',
          }}
        />
      ) : (
        /* Fallback: emoji + subtle label */
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '52px', lineHeight: 1 }}>{emoji}</span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: '700',
              color: 'rgba(212,175,55,0.7)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Preview
          </span>
        </div>
      )}

      {/* Gold shimmer bar at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--gold-gradient)',
          zIndex: 4,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
        className="project-img-bar"
      />
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="gold-line" />

        {/* Filter Buttons — unchanged */}
        <div className="project-filters">
          {['all', 'mern', 'ai', 'frontend'].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Project Grid — same layout as before */}
        <div className="projects-grid">
          {filtered.map((p) => (
            <div className="project-card" key={p.id}>
              <ProjectImage
                src={p.image}
                emoji={p.emoji}
                fallbackGradient={p.fallbackGradient}
                title={p.title}
              />

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-features">
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="tech-badges">
                  {p.tech.map((t, i) => (
                    <span className="badge" key={i}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-github"
                  >
                    <FiGithub /> GitHub
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-demo"
                  >
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