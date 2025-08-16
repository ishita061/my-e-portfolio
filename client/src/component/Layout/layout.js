// client/src/component/Layout/layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <nav className="top-menu">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/certifications">Certifications</a></li>
          <li><a href="/accadmics">Accadmics</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <ul className="social-links">
          <li><a href="https://github.com/your-github-id" target="_blank"><i className="fab fa-github"></i></a></li>
          <li><a href="https://linkedin.com/in/your-linkedin-id" target="_blank"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://instagram.com/your-instagram-id" target="_blank"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://wa.me/your-whatsapp-number" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
        </ul>

        <div className="action-buttons">
          <a href="/ishita_resume_paypal.pdf" target="_blank" className="btn">Resume</a>
        </div>
      </nav>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
