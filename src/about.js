import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about">
      <div className="about-preview">
        <img src="/myphoto.jpg" alt="Gobika Nanthini MK" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am Gobika Nanthini MK, a passionate B.Tech CSE student specializing in Data Science with a strong foundation in Java, JavaScript, Python, SQL, and React.js. My journey in technology began with curiosity and has grown into a drive to build impactful solutions that combine analytical thinking with practical implementation.

I am eager to contribute to teams where innovation, collaboration, and problem‑solving drive success, and I aim to grow as a software engineer who bridges data analysis with scalable application development.
          </p>
          {/* Buttons go here */}
          <div className="about-buttons">
  <button className="gradient-btn" onClick={() => window.location.href="#contact"}>
    Hire Me
  </button>
  
  <a 
    href="/resume.pdf" 
    download="Gobika_Resume.pdf" 
    className="gradient-btn"
  >
    Resume
  </a>
</div>

        </div>
      </div>
    </section>
  );
}

export default About;
