import Hero from "./Component/Hero";
import NavBarr from "./Component/Navbar/NavBarr";
import { useEffect, useRef, useState } from "react";
import Technology from "./Component/Technolog/Technology";
import Project from "./Component/Project/Project";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";

import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saveMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(saveMode);
    if (saveMode) {
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className="selection min-h-screen text-day-text  dark:text-night-text">
      <NavBarr toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero />
      <About />
      <Technology />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
