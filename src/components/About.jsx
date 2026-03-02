import React from 'react';
import { FiCode, FiServer, FiDatabase, FiZap } from 'react-icons/fi';

const About = () => {
  const highlights = [
    { icon: <FiCode />, title: 'Frontend', desc: 'React.js, HTML5, CSS3, JavaScript' },
    { icon: <FiServer />, title: 'Backend', desc: 'Node.js, Express.js, REST APIs' },
    { icon: <FiDatabase />, title: 'Database', desc: 'MongoDB, MySQL' },
    { icon: <FiZap />, title: 'Strength', desc: 'Hardworking, Self-Motivated' }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate developer on a mission to build impactful web applications</p>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', alignItems:'center' }}>
          <div>
            <p style={{ fontSize:'16px', lineHeight:'1.9', color:'var(--text-muted)', marginBottom:'20px' }}>
              I'm <strong style={{ color:'var(--text)' }}>Kishore S</strong>, a dedicated Full Stack Developer pursuing B.E. in Computer Science Engineering at SNS College of Engineering with an impressive <strong style={{ color:'var(--primary)' }}>CGPA of 8.18</strong>.
            </p>
            <p style={{ fontSize:'16px', lineHeight:'1.9', color:'var(--text-muted)', marginBottom:'20px' }}>
              My journey in tech started with a <strong style={{ color:'var(--text)' }}>Diploma from Kalasalingam Polytechnic College (80%)</strong>, which gave me a strong foundation before diving into the MERN stack.
            </p>
            <p style={{ fontSize:'16px', lineHeight:'1.9', color:'var(--text-muted)', marginBottom:'32px' }}>
              I specialize in building full-stack web applications — from clean, responsive frontends to robust, secure backends. My goal is to create software that solves real problems while delivering outstanding user experiences.
            </p>

            <div style={{ display:'flex', gap:'16px', flexWrap:'wrap' }}>
              {[
                { label: 'B.E. CSE', value: '8.18 CGPA' },
                { label: 'Diploma', value: '80%' },
                { label: 'Focus', value: 'MERN Stack' }
              ].map((item, i) => (
                <div key={i} style={{ padding:'14px 20px', background:'var(--glass)', border:'1px solid var(--glass-border)', borderRadius:'12px', textAlign:'center' }}>
                  <div style={{ fontSize:'18px', fontWeight:'800', color:'var(--primary)' }}>{item.value}</div>
                  <div style={{ fontSize:'12px', color:'var(--text-muted)', marginTop:'4px' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px' }}>
            {highlights.map((item, i) => (
              <div key={i} className="glass-card" style={{ padding:'28px 20px', textAlign:'center' }}>
                <div style={{ fontSize:'28px', color:'var(--primary)', marginBottom:'14px', display:'flex', justifyContent:'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize:'15px', fontWeight:'700', marginBottom:'8px' }}>{item.title}</h3>
                <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:'1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;