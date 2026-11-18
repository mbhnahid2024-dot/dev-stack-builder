
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({ technology, onAdd }: TechnologyCardProps) {
  return (
    <article className="technology-card">
      <div className="technology-image">
        <img
          src={technology.image}
          alt={technology.name}
        />
      </div>

      <span className="technology-category">
        {technology.category}
      </span>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <button
        className="add-button"
        onClick={() => onAdd(technology)}
      >
        + Add to Stack
      </button>
    </article>
  );
}

export default TechnologyCard;
