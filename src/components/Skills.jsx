const Skills = () => {
  const technicalSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js',
    'MongoDB', 'React.js', 'REST API Development', 'JSON Handling',
    'Authentication & Authorization', 'Deployment & Hosting'
  ];

  const tools = [
    { name: 'VSCode', icon: 'VS' },
    { name: 'Thunder Client', icon: 'TC' },
    { name: 'Postman', icon: 'PM' },
    { name: 'GitHub', icon: 'GH' }
  ];

  const additionalSkills = [
    'C Programming', 'C++', 'MS Excel', 'MS Word', 'MS PowerPoint',
    'Version Control', 'Teamwork', 'Communication', 'Problem Solving'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {/* Technical Skills */}
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="tools-list">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                  <div className="tool-icon">{tool.icon}</div>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Skills */}
          <div className="skill-category">
            <h3>Basic & Additional Skills</h3>
            <div className="skills-list">
              {additionalSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;