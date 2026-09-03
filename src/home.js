// src/Home.js
import React from "react";

function Home() {
  return (
    <div>
      {/* Intro */}
      <section id="intro">
        <h1>Gobika Nanthini MK</h1>
        <p>Aspiring Backend & Web Developer | Java | SQL | React</p>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>
        <div>
          <h3>Legal AI Chatbot (Clegora)</h3>
          <p>FastAPI + React | <a href="https://github.com/yourgithub">GitHub</a></p>
        </div>
        <div>
          <h3>Smart Parking System</h3>
          <p>Java + SQL + React | <a href="https://github.com/yourgithub">GitHub</a></p>
        </div>
      </section>

      {/* Resume */}
      <section id="resume">
        <h2>Resume</h2>
        <a href="/resume.pdf" download>Download Resume</a>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
        <p>Connect with me:</p>
        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a> | 
        <a href="https://github.com/yourgithub">GitHub</a>
      </section>
    </div>
  );
}

export default Home;
