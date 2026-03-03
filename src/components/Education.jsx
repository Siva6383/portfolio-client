import React from 'react';
import { FiAward } from 'react-icons/fi';

const educations = [
  {
    year: '2023 – Present',
    degree: 'B.E. Computer Science Engineering',
    institution: 'SNS College of Engineering',
    detail: 'CGPA: 8.18',
    icon: '🎓',
  },
  {
    year: '2020 – 2023',
    degree: 'Diploma in Computer Science',
    institution: 'Kalasalingam Polytechnic College',
    detail: 'Percentage: 80%',
    icon: '📚',
  },
  {
    year: '2019 – 2020',
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'G.S Hindu Higher Secondary School',
    detail: 'Percentage: 51%',
    icon: '🏫',
  },
  {
    year: '2017 – 2018',
    degree: 'SSLC (Secondary School)',
    institution: 'G.S Hindu Higher Secondary School',
    detail: 'Percentage: 68.2%',
    icon: '📖',
  },
];

const Education = () => (
  <section className="section" id="education">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="gold-line" />

      <div className="timeline">
        {educations.map((edu, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <div className="timeline-year">{edu.year}</div>
                <div className="timeline-title">{edu.degree}</div>
                <div className="timeline-subtitle">{edu.institution}</div>
              </div>
              <div style={{ fontSize: '28px' }}>{edu.icon}</div>
            </div>
            <div className="timeline-detail">
              <FiAward size={13} /> {edu.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;