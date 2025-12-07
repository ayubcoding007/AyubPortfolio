import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
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

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/ayubcoding007', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/ayub-sheikh-738757321/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:ayubpop007@gmail.com', label: 'Email' }
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* Social Icons */}
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="social-icon"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Internal Footer Links */}
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="copyright">
            <p>© 2025 Ayub Siddiqui. All Rights Reserved.</p>
            <p className="api-info">
              Portfolio with Real Backend Integration | API:{" "}
              <code>https://submit-form-api.vercel.app</code>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
