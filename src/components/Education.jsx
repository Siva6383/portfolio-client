import React from 'react';
import { FiBook, FiAward } from 'react-icons/fi';

const educations = [
  {
    year: '2022 – Present',
    degree: 'B.E. Computer Science Engineering',
    institution: 'SNS College of Engineering',
    detail: 'Lateral Entry | CGPA: 8.18',
    icon: '🎓',
    color: 'linear-gradient(135deg, #667eea, #764ba2)'
  },
  {
    year: '2019 – 2022',
    degree: 'Diploma in Computer Science',
    institution: 'Kalasalingam Polytechnic College',
    detail: 'Percentage: 80%',
    icon: '📚',
    color: 'linear-gradient(135deg, #f093fb, #f5576c)'
  }
];

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic foundation that drives my technical journey</p>

        <div className="timeline">
          {educations.map((edu, i) => (
            <div className="timeline-item" key={i}>
              <div style={{ position:'absolute', left:'-52px', top:'24px', width:'40px', height:'40px', background:edu.color, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', boxShadow:'0 4px 15px rgba(0,0,0,0.3)' }}>
                {edu.icon}
              </div>
              <div className="timeline-year">{edu.year}</div>
              <div className="timeline-title">{edu.degree}</div>
              <div className="timeline-subtitle">{edu.institution}</div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'6px', padding:'6px 14px', background:'rgba(102,126,234,0.1)', border:'1px solid rgba(102,126,234,0.3)', borderRadius:'50px', fontSize:'13px', fontWeight:'600', color:'var(--primary)' }}>
                <FiAward size={13} /> {edu.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;