
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";

import type { Technology } from "./types/technology";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  // Add technology to My Stack
  const handleAddTechnology = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  
// Remove technology from My Stack
const handleRemoveTechnology = (id: number) => {
  const technologyToRemove = stack.find(
    (technology) => technology.id === id
  );

  if (!technologyToRemove) return;

  setStack((previousStack) =>
    previousStack.filter((technology) => technology.id !== id)
  );

  toast.info(`${technologyToRemove.name} removed from your stack!`);
};

// Clear all technologies
const handleClearStack = () => {
  if (stack.length === 0) return;

  setStack([]);
  toast.success("Your stack has been cleared!");
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

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
        newestOnTop
      />
    </>
  );
}

export default App;
