
import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <a href="#home">
            <img src={logoText} alt="DevStack Logo" />
          </a>

          <p>
            Build your perfect developer stack with modern
            technologies and tools.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Developer</h3>
          <a
            href="https://github.com/mbhnahid2024-dot"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
          <a
            href="https://github.com/mbhnahid2024-dot/dev-stack-builder"
            target="_blank"
            rel="noreferrer"
          >
            Project Repository
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 DevStack. All rights reserved.</p>
        <p>Built with React and TypeScript.</p>
      </div>
    </footer>
  );
}

export default Footer;
