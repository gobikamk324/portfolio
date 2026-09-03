import React from "react";
import "./skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-heading">
        <p className="section-kicker">Core Expertise</p>
        <h2>Skills</h2>
        <p>Technical stack and tools I use to build scalable, data-driven applications.</p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <p>Java, Python, JavaScript</p>
        </div>
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <p>React.js, HTML, CSS, Responsive Design</p>
        </div>
        <div className="skill-card">
          <h3>Backend & Database</h3>
          <p>Node.js, SQL, REST APIs</p>
        </div>
        <div className="skill-card">
          <h3>Data & Visualization</h3>
          <p>Power BI, Machine Learning (CNN, Regression Models)</p>
        </div>
        <div className="skill-card">
          <h3>Tools & Version Control</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
