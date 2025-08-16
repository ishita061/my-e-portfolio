// client/src/pages/About/about.js
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p className="intro">
        Hi there! 👋 I'm Ishita, a passionate Full-Stack Developer and a third-year Computer Science Engineering student at Graphic Era Hill University.

        I specialize in building scalable and efficient web applications using the MERN stack, with a strong interest in solving complex coding challenges.

        As a dedicated and ambitious learner, I am driven by a relentless curiosity and a commitment to continuous growth. I strive for excellence by blending academic knowledge with hands-on project experience, ensuring that I deliver impactful and practical solutions in every endeavor.
      </p>

      <div className="about-row">
        <section className="about-section">
          <h2>👩‍💻 Who I Am</h2>
          <ul>
            <li>Full-stack developer with strong engineering fundamentals.</li>
            <li>Focused on modular layouts and recruiter-friendly design.</li>
            <li>Always learning and adapting to new tech.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>🛠️ What I Do</h2>
          <ul>
            <li>Build MERN stack apps with clean architecture.</li>
            <li>Practice DSA for problem-solving and interviews.</li>
            <li>Design interactive UI effects and animations.</li>
          </ul>
        </section>
      </div>

      <div className="about-row">
        <section className="about-section">
          <h2>🎯 My Goals</h2>
          <ul>
            <li>Secure a product-based internship.</li>
            <li>Refine my portfolio for technical depth and creativity.</li>
            <li>Contribute to open-source and real-world projects.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>💡 My Philosophy</h2>
          <ul>
            <li>Code should be clean, modular, and purposeful.</li>
            <li>Design matters—great UX makes great tech usable.</li>
            <li>Every bug is a hidden lesson.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
