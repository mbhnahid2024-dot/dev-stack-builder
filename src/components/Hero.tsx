
import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-tag">BUILD YOUR DEVELOPER JOURNEY</span>

        <h1>
          Build Your Perfect
          <span> Developer Stack</span>
        </h1>

        <p>
          Discover modern technologies, explore development tools,
          and build your own personalized technology stack.
        </p>

        <div className="hero-buttons">
          <a href="#technologies" className="primary-button">
            Explore Technologies
          </a>

          <a href="#projects" className="secondary-button">
            View Projects
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={bannerStack} alt="DevStack technology banner" />
      </div>
    </section>
  );
}

export default Hero;
