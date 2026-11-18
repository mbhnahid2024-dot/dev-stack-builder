
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({ technology, onAdd }: TechnologyCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    if (isAdding) return;

    setIsAdding(true);

    onAdd(technology);

    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

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
        onClick={handleAdd}
        disabled={isAdding}
      >
        {isAdding ? (
          <>
            <LoaderCircle size={17} className="loading-icon" />
            Adding...
          </>
        ) : (
          "+ Add to Stack"
        )}
      </button>
    </article>
  );
}

export default TechnologyCard;
