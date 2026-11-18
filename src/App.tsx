
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";
import Projects from "./components/Projects";
import AboutContact from "./components/AboutContact";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [stack, setStack] = useState<Technology[]>(() => {
    try {
      const savedStack = localStorage.getItem("myStack");
      return savedStack ? JSON.parse(savedStack) as Technology[] : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("myStack", JSON.stringify(stack));
  }, [stack]);

  const handleAddTechnology = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

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

        <Projects />

        <AboutContact />
      </main>

      <Footer />

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
