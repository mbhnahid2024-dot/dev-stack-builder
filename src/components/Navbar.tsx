
import { Code2 } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <Code2 size={28} />
        <span>DevStack</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#my-stack">My Stack</a>
      </div>

    <a
  href="https://github.com/mbhnahid2024-dot/dev-stack-builder"
  target="_blank"
  rel="noreferrer"
  className="github-link"
>
  <span>GitHub ↗</span>
</a>
    </nav>
  );
}

export default Navbar;
