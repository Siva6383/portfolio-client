import React from 'react';

const About = () => {
  const boxes = [
    { icon: '🎨', title: 'Frontend', desc: 'React.js, HTML5, CSS3, JavaScript' },
    { icon: '⚙️', title: 'Backend', desc: 'Node.js, Express.js, REST APIs' },
    { icon: '🗄️', title: 'Database', desc: 'MongoDB, MySQL' },
    { icon: '⚡', title: 'Strengths', desc: 'Hardworking, Self-Motivated' },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="gold-line" />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong style={{ color: 'var(--text)' }}>Kishore S</strong>, a Full Stack Developer
              pursuing B.E. in Computer Science Engineering at{' '}
              <strong style={{ color: 'var(--gold)' }}>SNS College of Engineering</strong> with a
              CGPA of <strong style={{ color: 'var(--gold)' }}>8.18</strong>.
            </p>
            <p>
              I specialize in the <strong style={{ color: 'var(--gold)' }}>MERN stack</strong> —
              building everything from responsive frontends to robust, secure backends. I enjoy turning
              complex problems into clean, elegant solutions.
            </p>
            <p>
              My approach combines <strong style={{ color: 'var(--text)' }}>technical precision</strong> with
              a strong attention to user experience. I'm always learning and pushing to deliver
              production-quality work.
            </p>
          </div>

          <div className="about-boxes">
            {boxes.map((box, i) => (
              <div className="about-box" key={i}>
                <div className="about-box-icon">{box.icon}</div>
                <h3>{box.title}</h3>
                <p>{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;