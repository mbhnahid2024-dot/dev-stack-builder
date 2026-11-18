
import technologies from "../data/technologies.json";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyListProps {
  onAdd: (technology: Technology) => void;
}

function TechnologyList({ onAdd }: TechnologyListProps) {
  return (
    <section className="technology-section" id="technologies">
      <div className="section-heading">
        <span>EXPLORE TOOLS</span>
        <h2>Choose Your Technologies</h2>
        <p>
          Explore popular technologies and select the tools
          you want in your developer stack.
        </p>
      </div>

      <div className="technology-grid">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
}

export default TechnologyList;
