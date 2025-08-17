import React from 'react';
import './accadmic.css';

const Accadmics = () => {
  return (
    <div className="accadmics">
      <h1>Academic Background</h1>

      <div className="academic-card">
        <h2>BTech in Computer Science and Engineering</h2>
        <p><strong>Institution:</strong> Graphic Era Hill University, Dehradun</p>
        <p><strong>Duration:</strong> 2023 – 2027</p>
        <p><strong>CGPA:</strong> 7.4</p>
        <ul>
          <li>Core subjects: Data Structures, Algorithms, Operating Systems, DBMS, Networking</li>
          <li>Projects in MERN stack, Full Stack-Development and Machine Learning </li>
          <li>Active Participation in Coding Challanges, Hackathons, and Webinars</li>
        </ul>
      </div>

      <div className="academic-card">
        <h2>Class 12th</h2>
        <p><strong>Institution:</strong> ST. Thomas School, Loni</p>
        <p><strong>Year of Completion:</strong> 2023</p>
        <p><strong>Percentage:</strong> 72%</p>
        <ul>
          <li>Core subjects: Physics, Chemistry, Mathematics, Computer Science</li>
        </ul>
      </div>

      <div className="academic-card">
        <h2>Class 10th</h2>
        <p><strong>Institution:</strong> ST. Thomas School, Sahibabad</p>
        <p><strong>Year of Completion:</strong> 2021</p>
        <p><strong>Percentage:</strong> 80%</p>
        <ul>
          <li>Core subjects: Mathematics, Science, English, Social Studies, Computer Science</li>
        </ul>
      </div>
    </div>
  );
};

export default Accadmics;
