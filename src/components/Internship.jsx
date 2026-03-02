import React from 'react';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const Internship = () => {
  const contributions = [
    'Developed responsive web pages using HTML5, CSS3, and JavaScript',
    'Built interactive UI components with React.js',
    'Integrated RESTful APIs using Axios',
    'Participated in code reviews and agile sprints',
    'Optimized frontend performance and cross-browser compatibility',
    'Collaborated with senior developers on real-world projects'
  ];

  return (
    <section className="section" id="internship" style={{ background:'rgba(99,102,241,0.02)' }}>
      <div className="container">
        <h2 className="section-title">Internship Experience</h2>
        <p className="section-subtitle">Real-world experience that shaped my skills</p>

        <div style={{ maxWidth:'800px', margin:'0 auto' }}>
          <div className="glass-card" style={{ padding:'40px', borderLeft:'4px solid', borderImageSource:'var(--gradient)', borderImageSlice:1 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'16px', marginBottom:'24px' }}>
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px' }}>
                  <FiBriefcase color="var(--primary)" size={20} />
                  <h3 style={{ fontSize:'20px', fontWeight:'800' }}>Web Development Intern</h3>
                </div>
                <p style={{ fontSize:'18px', fontWeight:'700', background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  Codesoft
                </p>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:'8px', padding:'8px 16px', background:'rgba(102,126,234,0.1)', border:'1px solid rgba(102,126,234,0.3)', borderRadius:'50px', color:'var(--primary)', fontSize:'13px', fontWeight:'600' }}>
                <FiCalendar size={14} /> Web Development Track
              </div>
            </div>

            <div style={{ marginBottom:'24px' }}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design', 'Git'].map((tech, i) => (
                  <span className="badge" key={i}>{tech}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize:'15px', fontWeight:'700', marginBottom:'16px', color:'var(--text-muted)' }}>KEY CONTRIBUTIONS</h4>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
                {contributions.map((item, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'10px' }}>
                    <FiCheckCircle size={16} color="var(--primary)" style={{ marginTop:'2px', flexShrink:0 }} />
                    <span style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:'1.6' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;