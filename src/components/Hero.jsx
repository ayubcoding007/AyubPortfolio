const Hero = () => {
  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      const offset = 70;
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  const downloadResume = () => {
    alert('Download feature would be implemented with a real resume PDF file.');
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ayub Siddiqui <span>— Full Stack Developer</span></h1>
            <p className="subtitle">BCA Graduate (Completed in 2025), Khwaja Moinuddin Chishti Language University, Lucknow</p>
            <p>I have completed my Bachelor of Computer Applications in 2025 and have strong expertise in modern full-stack development. I have completed two MERN Stack courses: MERN Stack (TutorialsPoint – 2025) and MERN Stack (Udemy), both contributing to my strong understanding of full-stack web development.</p>
            <p>I am passionate about building real-world applications, learning new technologies, and growing as a professional full stack developer. Actively seeking job opportunities in the IT/software industry.</p>
            <div className="hero-buttons">
              <button className="btn" onClick={() => scrollToSection('#projects')}>
                View My Work
              </button>
              <button className="btn btn-outline" onClick={downloadResume}>
                Download Resume
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-container">
              <div className="code-header">
                <div className="code-dots">
                  <div className="code-dot dot-red"></div>
                  <div className="code-dot dot-yellow"></div>
                  <div className="code-dot dot-green"></div>
                </div>
              </div>
              <div className="code-body">
                <div className="code-line">
                  <span className="code-keyword">const</span> <span className="code-var">portfolioInfo</span> = {'{'}
                </div>

                <div className="code-line">
                  &nbsp;&nbsp;<span className="code-function">name</span>: <span className="code-string">'Ayub Siddiqui'</span>,
                </div>

                <div className="code-line">
                  &nbsp;&nbsp;<span className="code-function">role</span>: <span className="code-string">'Full Stack Developer (MERN)'</span>,
                </div>

                <div className="code-line">
                  &nbsp;&nbsp;<span className="code-function">course</span>: <span className="code-string">'BCA'</span>,
                </div>

                <div className="code-line">
                  &nbsp;&nbsp;<span className="code-function">year</span>: <span className="code-string">'2022 - 2025'</span>,
                </div>

                <div className="code-line">
                  &nbsp;&nbsp;<span className="code-function">college</span>: <span className="code-string">'KMCLU'</span>,
                </div>

                <div className="code-line">
                  &nbsp;&nbsp;<span className="code-function">skills</span>: {'['}
                </div>

                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'JavaScript'</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'HTML'</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'CSS'</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Tailwind CSS'</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'React.js'</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Node.js'</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Express.js'</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'MongoDB'</span>
                </div>

                <div className="code-line">
                  &nbsp;&nbsp;{']'},
                </div>

                <div className="code-line">
                  {'}'};
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;