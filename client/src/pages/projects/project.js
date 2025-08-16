// client/src/pages/projects/projects.js
import React from 'react';
import './project.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Data-Structure-based Conversational AI Chatbot',
      description: 'Data-Structure-based Conversational AI Chatbot is an innovative chatbot system that leverages core data structures and algorithms to manage conversations, response retrieval, and dialogue flow. Built with Python for AI logic, PHP for backend integration, and HTML for the frontend interface, this project demonstrates how fundamental data structures (like trees, stacks, and graphs) can power efficient and intelligent conversational agents.',
      tech: 'HTML, CSS, Javascript, PHP, Python,Machine Learning, Trie data structure',
      github: 'https://github.com/ishita061/Data-Structure-based-Conversational-AI-Chatbot'
    },
    {
      title: 'Fraud-det-Algorithim',
      description: 'A Python-based real-time fraud detection system leveraging Random Forest and XGBoost models, achieving 98% accuracy through strong preprocessing, feature engineering, and alerting, with a focus on minimizing false positives while complying with GDPR and PCI-DSS.',
      tech: 'Python, Machine Learning, Pandas, NumPy, Scikit-learn, Matplotlib',
      github: 'https://github.com/ishita061/fraud-det-algorithm'
    },
    {
      title: 'CryptoCaesar',
      description: 'CryptoCaesar is a beginner-friendly implementation of the classic Caesar Cipher, enabling message encryption and decryption via simple character shifting. It’s a perfect hands-on introduction to how basic cryptographic transformations work.',
      tech: 'Python, Core Concepts(like String & Character Encoding, Basic Algorithims, Mathematical Modulo Operation), HTML, CSS',
      github: 'https://github.com/ishita061/CryptoCaesar'
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-stack">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="tech-stack"><strong>Tech Stack:</strong> {project.tech}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
