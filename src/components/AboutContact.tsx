
import { Code2, Mail } from "lucide-react";

function AboutContact() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-content">
          <span className="section-label">ABOUT DEVSTACK</span>

          <h2>
            One Place to Build
            <span> Your Developer Stack</span>
          </h2>

          <p>
            DevStack helps developers discover popular programming
            languages, frameworks, libraries, and development tools.
            Choose your favorite technologies and organize them into
            your own personalized stack.
          </p>

          <div className="about-features">
            <div>
              <Code2 size={25} />
              <h3>Explore Technologies</h3>
              <p>Discover useful tools for modern development.</p>
            </div>

            <div>
              <Code2 size={25} />
              <h3>Build Your Stack</h3>
              <p>Select and organize your preferred technologies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <span className="section-label">GET IN TOUCH</span>

        <h2>Let's Connect</h2>

        <p>
          Have a suggestion, feedback, or an idea to improve DevStack?
          Feel free to contact us.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="contact-button"
        >
          <Mail size={19} />
          Contact Us
        </a>
      </section>
    </>
  );
}

export default AboutContact;
