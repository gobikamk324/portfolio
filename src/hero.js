import React from "react";
import "./hero.css"; // we'll style separately

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">GN</div>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#skills">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Headline */}
    <div className="hero-content">
        <h3 style={{ fontWeight: "normal", fontSize: "20px", marginBottom: "10px" }}>
             I’m a fresher seeking
        </h3>
        <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
            Junior Data Analyst / Machine Learning Engineer
        </h1>
        <button className="gradient-btn" onClick={() => window.location.href="#projects"}>
             Previous Projects
        </button>
    </div>

      {/* Photo + About Me preview */}
      
    </section>
  );
}


export default Hero;
