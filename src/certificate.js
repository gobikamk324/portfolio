import React from "react";
import "./certificate.css";

function Certificates() {
  return (
    <>
      {/* Certificates Section */}
      <section id="certificates" className="certificates-section">
        <div className="certificates-heading">
          <p className="section-kicker">Learning Journey</p>
          <h2>Certificates & Achievements</h2>
          <p>Workshops and certifications that strengthened my technical foundation.</p>
        </div>

        <ul className="certificate-list">
          <li>
            <span className="certificate-year">2026</span>
            <p>AI & ML Certification – i-HUB IIT Patna</p>
          </li>
          <li>
            <span className="certificate-year">2024</span>
            <p>Web Development Training – SoftYuga Technology</p>
          </li>
          <li>
            <span className="certificate-year">2024</span>
            <p>SQL Certification – CodeChef</p>
          </li>
          <li>
            <span className="certificate-year">2023</span>
            <p>Power BI Workshop</p>
          </li>
        </ul>
      </section>

      {/* Resume Section (separate) */}
      <section id="resume" className="resume-section">
        <div className="resume-heading">
          <p className="section-kicker">Professional Profile</p>
          <h2>Resume</h2>
          <p>Download my full resume to explore my skills, projects, and achievements.</p>
        </div>

        <a
          href="/resume.pdf"
          download="Gobika_Resume.pdf"
          className="resume-download-btn"
        >
          📄 View Resume
        </a>
      </section>
    </>
  );
}

export default Certificates;
