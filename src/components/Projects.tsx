
import { Code2, Layers, Monitor } from "lucide-react";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <span>MY WORK</span>
        <h2>Featured Projects</h2>
        <p>Explore some projects built with modern technologies.</p>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <Code2 size={32} />
          <h3>Technology Explorer</h3>
          <p>
            A platform to explore popular web development technologies.
          </p>
        </article>

        <article className="project-card">
          <Layers size={32} />
          <h3>Personal Stack Builder</h3>
          <p>
            A tool to create and manage your own developer technology stack.
          </p>
        </article>

        <article className="project-card">
          <Monitor size={32} />
          <h3>Developer Workspace</h3>
          <p>
            A workspace for organizing development tools and resources.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Projects;
