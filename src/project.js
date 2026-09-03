import React, { useState } from "react";
import "./project.css";
import legalAiImg from "./images/legal-ai.jpg";
import stockDashboardImg from "./images/stock-dashboard.jpg";
import smartParkingImg from "./images/smart-parking.jpg";


function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (project) => {
    setActiveProject(activeProject === project ? null : project);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <p className="section-kicker">WORK DONE</p>
        <h2>Projects</h2>
        <p>Projects where data, thoughtful interfaces, and practical problem-solving meet.</p>
      </div>

      {/* Project 1 (image left, text right) */}
      <div className="project-row">
        <div className="project-media">
          <img src={legalAiImg} alt="Legal AI Chatbot" className="project-img"/>
          <span className="project-number">01</span>
        </div>
        <div className="project-text">
          <p className="project-label">AI / Full-stack</p>
          <h3>Legal AI Chatbot (Clegora)</h3>
          <p>AI‑powered assistant that simplifies Indian consumer and civil law by retrieving relevant acts through a secure RAG pipeline, built with React.js, FastAPI, Chroma DB, and Groq Llama 3.2.</p>
          <button className="project-toggle" onClick={() => toggleProject("legal")} aria-expanded={activeProject === "legal"}>
            {activeProject === "legal" ? "Hide Details" : "Read More"}
          </button>
          <div className={`project-details ${activeProject === "legal" ? "show" : ""}`}>
              <p>
                <h1>
                   🌐 Purpose and Motivation:
                </h1>
                CLEGORA was designed to address the justice gap in India, where complex legal jargon and fragmented information make it difficult for citizens to understand their rights. Professional legal services are often concentrated in urban areas and expensive, leaving rural and underserved communities without access to affordable guidance. The chatbot aims to democratize legal knowledge by providing plain‑language answers on consumer rights, RTI procedures, and civil law, empowering citizens to make informed decisions.
                <h1>
                  ⚙️Technical Approach and Result:
                </h1>
              
              Unlike general AI models that risk hallucinations, CLEGORA uses a Retrieval‑Augmented Generation (RAG) framework. It integrates the Groq Llama 3.2 language model with a ChromaDB vector database containing over 3,000 curated Indian legal documents. When a user submits a query, the system retrieves relevant legal fragments and generates grounded responses with citations. The backend is built with FastAPI for asynchronous processing, while the frontend uses React.js for a responsive, user‑friendly interface secured with Firebase Authentication.
              Performance evaluations show that CLEGORA delivers answers in under five seconds, with high accuracy and clarity. It achieved a Mean Reciprocal Rank (MRR) of 0.833 and a generation quality score of 4.7/5, outperforming existing Indian legal AI systems in relevance, completeness, and speed.
                </p>
              <img src="/images/legal-ai-demo1.jpg" alt="Legal AI Demo" className="detail-img" />
          </div>
        </div>
      </div>

      {/* Project 2 (text left, image right) */}
      <div className="project-row reverse">
        <div className="project-media">
          <img src={stockDashboardImg} alt="Stock Dashboard" className="project-img" />
          <span className="project-number">02</span>
        </div>
        <div className="project-text">
          <p className="project-label">Data / Machine learning</p>
          <h3>Real-Time Stock Screening Dashboard</h3>
          <p>Interactive trading platform built with Streamlit and Angel One SmartAPI, featuring live market data, order book visualization, and ML‑driven trading signals.</p>
          <button className="project-toggle" onClick={() => toggleProject("stock")} aria-expanded={activeProject === "stock"}>
            {activeProject === "stock" ? "Hide Details" : "Read More"}
          </button>
          <div className={`project-details ${activeProject === "stock" ? "show" : ""}`}>
            <p>
              The Real‑Time Stock Screening Dashboard is an interactive platform designed to help traders and investors monitor live market activity with clarity and speed. Built using Streamlit and integrated with the Angel One SmartAPI, it provides instant access to stock prices, order book data, and trading signals. The dashboard emphasizes usability, offering a clean interface where users can filter, search, and visualize market trends in real time without delays.
                <h1>The Technical Stack</h1>
On the technical side, the system leverages Python for data handling, machine learning models for predictive insights, and REST API integration for continuous updates from the brokerage. This combination ensures that users not only see raw market data but also gain actionable insights through charts, indicators, and alerts. By merging live feeds with analytical tools, the dashboard empowers users to make informed trading decisions and enhances transparency in fast‑moving financial environments.
              Accuracy is a core focus: the system validates incoming data streams, minimizes lag, and ensures that trading indicators reflect real market conditions. By combining speed, precision, and analytical depth, the dashboard empowers users to make confident, well‑informed trading decisions in fast‑moving financial environments.  
            </p>
            <img src="/images/stock-dashboard-demo1.jpg" alt="Stock Dashboard Demo" className="detail-img" />
          </div>
        </div>
      </div>

      {/* Project 3 (image left, text right again) */}
      <div className="project-row">
        <div className="project-media">
          <img src={smartParkingImg} alt="Smart Parking System" className="project-img" />
          <span className="project-number">03</span>
        </div>
        <div className="project-text">
          <p className="project-label">Computer vision / Web</p>
          <h3>Smart Parking System</h3>
          <p>ML‑powered solution using a CNN model to classify parking slots as empty or occupied, integrated with TensorFlow.js for real‑time browser inference and a Node.js backend for multi‑user booking and synchronization.</p>
          <button className="project-toggle" onClick={() => toggleProject("parking")} aria-expanded={activeProject === "parking"}>
            {activeProject === "parking" ? "Hide Details" : "Read More"}
          </button>
          <div className={`project-details ${activeProject === "parking" ? "show" : ""}`}>
              <p>
               The Smart Parking System is an ML‑powered solution designed to reduce traffic congestion and save drivers time by automatically detecting parking slot availability. Using a Convolutional Neural Network (CNN) model, the system classifies each slot as either empty or occupied in real time. This information is then displayed through a responsive web interface, allowing users to quickly identify available spaces and book them digitally.
                    <h1>The Technical Working:</h1>
On the technical side, the project integrates TensorFlow.js for in‑browser machine learning inference and a Node.js backend to handle multi‑user requests, synchronization, and booking management. By combining computer vision with modern web technologies, the Smart Parking System not only improves urban mobility but also demonstrates practical application of AI in everyday infrastructure, making it a strong showcase of both data science and full‑stack development skills.
                 Accuracy was a key focus: the CNN model achieved over 82% detection accuracy during testing, ensuring reliable slot classification even under varying lighting and environmental conditions. By combining speed, precision, and usability, the Smart Parking System demonstrates how AI can be applied to everyday infrastructure to improve urban mobility and efficiency.
              </p>
              <img src="/images/parking-demo1.jpg" alt="Parking Slot Detection" className="detail-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
