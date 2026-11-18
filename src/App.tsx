
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";
import type { Technology } from "./types/technology";
import "./App.css";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddTechnology = (technology: Technology) => {
    setStack((previousStack) => [...previousStack, technology]);
  };

  const handleRemoveTechnology = (id: number) => {
    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id)
    );
  };

  const handleClearStack = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div className="builder-layout">
          <TechnologyList onAdd={handleAddTechnology} />

          <StackSidebar
            stack={stack}
            onRemove={handleRemoveTechnology}
            onClear={handleClearStack}
          />
        </div>
      </main>
    </>
  );
}

export default App;
