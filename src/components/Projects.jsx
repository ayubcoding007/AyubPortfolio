const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MERN Restaurant App',
      description:
        'MERN Restaurant App is a modern and feature-rich restaurant management web application built using the MERN stack. It includes user authentication, an interactive food menu, detailed item pages, order placement, and a smooth, responsive UI.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
      icon: '📊',
      github: 'https://github.com/ayubcoding007/my-project',
      demo: '#',
    },
    {
      id: 2,
      title: 'Contact Form Backend API',
      description:
        'A production-ready Node.js/Express backend deployed on Vercel that handles contact form submissions and sends email notifications. Currently live and processing form data.',
      tech: ['Node.js', 'Express', 'Nodemailer', 'Vercel', 'CORS'],
      icon: '📧',
      github: 'https://github.com/ayubcoding007/submitFormAPI',
      demo: 'https://submit-form-api.vercel.app',
      external: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A responsive weather application that fetches real-time weather data from an API. Features location-based forecasts, interactive charts, and a clean, user-friendly interface.',
      tech: ['JavaScript', 'CSS3', 'API Integration', 'Chart.js', 'Local Storage'],
      icon: '🌦️',
      github: 'https://github.com/ayubcoding007/my-project/tree/main/Weather',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <span>{project.icon}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {/* ✔ GitHub link now works correctly */}
                  <a
                    href={project.github}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  {/* Live Demo / API Button */}
                  <a
                    href={project.demo}
                    className="btn"
                    target={project.external ? '_blank' : '_self'}
                    rel={project.external ? 'noopener noreferrer' : undefined}
                  >
                    {project.external ? 'View API' : 'Live Demo'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
