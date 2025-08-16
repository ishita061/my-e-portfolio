import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="intro">
          <h1 className="typewriter">Hi, I'm Ishita Chaturvedi</h1>
          <h2>Full-Stack Developer | MERN Specialist | DSA Enthusiast</h2>
          <p>
            I build scalable web applications, craft interactive UIs, and solve complex problems with clean code.
          </p>
          <div className="social-links">
            <a href="https://github.com/ishita061" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ishita-chaturvedi-943441303/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>

          <button onClick={() => window.location.href = '/about'}>Know About Me 🚀
</button>
        </div>

        <div className="image-container">
          <img src="/image/profile.png" alt="Ishita Chaturvedi" />
        </div>
      </div>
    </div>
  );
};

export default Home;
