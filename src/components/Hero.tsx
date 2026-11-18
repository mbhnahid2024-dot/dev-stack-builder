
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>Build your perfect tech stack</span>
        </div>

        <h1>
          Build Your Dream
          <br />
          <span>Developer Stack</span>
        </h1>

        <p>
          Discover the best technologies, choose your favorite tools,
          and create your own personalized developer stack.
        </p>

        <a href="#technologies" className="hero-button">
          Explore Technologies
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
