import React from 'react';

const skillCategories = [
  {
    icon: '🎨', title: 'Frontend',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
    ],
  },
  {
    icon: '⚙️', title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'Java', level: 82 },
      { name: 'REST APIs', level: 75 },
    ],
  },
  {
    icon: '🗄️', title: 'Database',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'Mongoose', level: 75 },
      { name: 'MySQL', level: 70 },
      { name: 'Atlas Cloud', level: 72 },
    ],
  },
  {
    icon: '🛠️', title: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 65 },
    ],
  },
];

const Skills = () => (
  <section className="section" id="skills" style={{ background: 'rgba(212,175,55,0.01)' }}>
    <div className="container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="gold-line" />

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div className="skill-category" key={i}>
            <h3>{cat.icon} {cat.title}</h3>
            {cat.skills.map((skill, j) => (
              <div className="skill-item" key={j}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;