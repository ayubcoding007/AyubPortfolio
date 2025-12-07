const About = () => {
  const scrollToContact = () => {
    const section = document.querySelector('#contact');
    if (section) {
      const offset = 70;
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I am a passionate software developer with strong fundamentals in programming and a dedicated focus on full-stack web development. My journey in technology began with my Bachelor's in Computer Applications, where I developed a solid foundation in computer science principles.</p>
            <p>I have hands-on experience creating full-stack applications, REST APIs, and interactive user interfaces using the MERN stack. Through my two MERN Stack courses, I've gained comprehensive knowledge of both frontend and backend development, with a particular interest in JavaScript-based technologies.</p>
            <p>I enjoy problem-solving and have a deep interest in creating efficient, scalable solutions. My dedication to continuous learning drives me to stay updated with the latest technologies and best practices in web development.</p>
            <p>My career goal is to join a reputed company as a full stack developer where I can contribute to meaningful projects, grow as a professional, and make a tangible impact through technology.</p>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Get In Touch
            </button>
          </div>
          <div className="about-visual">
            <div className="skill-bubble">
              <div className="skill-bubble-inner">
                MERN Stack Developer<br/>JavaScript Specialist
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;