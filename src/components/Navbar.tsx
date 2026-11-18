
import logoText from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#home" className="nav-logo">
        <img src={logoText} alt="DevStack Logo" />
      </a>

      {/* Navigation links */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Authentication buttons */}
      <div className="nav-actions">
        <button type="button" className="signin-button">
          Sign In
        </button>

        <button type="button" className="signup-button">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
