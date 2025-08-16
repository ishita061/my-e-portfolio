import React from 'react';
import './menu.css';
import { useNavigate } from 'react-router-dom';

const Menus = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-img"
        />
        <h3>Ishita</h3>
        <p>Full-Stack Developer</p>
      </div>
      <nav className="nav-links">
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/accadmics')}>Accadmics</li>
          <li onClick={() => navigate('/skills')}>Skills</li>
          <li onClick={() => navigate('/projects')}>Projects</li>
          <li onClick={() => navigate('/certifications')}>Certifications</li>
          <li onClick={() => navigate('/achievements')}>Achievements</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Menus;
