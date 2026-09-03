import React from "react";
import Hero from "./hero";
import About from "./about";
import Certificates from "./certificate";
import Projects from "./project";
import Skills from "./skills";
import Contact from "./contact";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />   {/* now after Skills */}
      <Contact />
    </div>
  );
}

export default App;
