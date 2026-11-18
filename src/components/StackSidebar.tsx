
import { Trash2, Layers } from "lucide-react";
import type { Technology } from "../types/technology";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

function StackSidebar({ stack, onRemove, onClear }: StackSidebarProps) {
  return (
    <aside className="stack-sidebar" id="my-stack">
      <div className="stack-header">
        <div>
          <h2>
            <Layers size={20} /> My Stack
          </h2>
          <p>{stack.length} technologies selected</p>
        </div>

        {stack.length > 0 && (
          <button className="clear-button" onClick={onClear}>
            Clear All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <Layers size={40} />
          <h3>Your stack is empty</h3>
          <p>Add technologies to build your stack.</p>
        </div>
      ) : (
        <div className="stack-items">
          {stack.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <img src={technology.image} alt={technology.name} />

              <div className="stack-item-info">
                <h4>{technology.name}</h4>
                <span>{technology.category}</span>
              </div>

              <button
                className="remove-button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
              >
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default StackSidebar;
