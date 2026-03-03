import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const internships = [
  {
    year: '2024',
    company: 'Codesoft',
    role: 'Web Development Intern',
    color: '#d4af37',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    contributions: [
      'Built responsive web pages from Figma designs',
      'Created reusable React components',
      'Integrated REST APIs using Axios',
      'Participated in agile sprints & code reviews',
    ],
  },
  {
    year: '2024',
    company: 'Octonet Technologies',
    role: 'Web Developer Intern',
    color: '#d4af37',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    contributions: [
      'Developed full-stack features end-to-end',
      'Implemented JWT-based authentication',
      'Optimized MongoDB queries for performance',
      'Deployed applications to cloud platforms',
    ],
  },
  {
    year: '2023',
    company: 'CodSoft Technologies',
    role: 'UI/UX Design Intern',
    color: '#d4af37',
    tech: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    contributions: [
      'Designed wireframes and high-fidelity mockups',
      'Conducted user research and usability testing',
      'Created design systems and component libraries',
      'Collaborated closely with development teams',
    ],
  },
];

const Internship = () => (
  <section className="section" id="internship" style={{ background: 'rgba(212,175,55,0.01)' }}>
    <div className="container">
      <h2 className="section-title">Internship Experience</h2>
      <div className="gold-line" />

      <div className="timeline">
        {internships.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-title">{item.role}</div>
            <div className="timeline-subtitle">{item.company}</div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '12px 0' }}>
              {item.tech.map((t, j) => <span className="badge" key={j}>{t}</span>)}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {item.contributions.map((c, j) => (
                <div key={j} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <FiCheckCircle size={13} color="var(--gold)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Internship;