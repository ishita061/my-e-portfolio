// client/src/pages/skills/skill.js
import React from 'react';
import './skill.css';

const skillGroupsRow1 = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js']
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL']
  }
];

const skillGroupsRow2 = [
  {
    category: 'Programming Languages',
    skills: ['C++', 'Java', 'Python']
  },
  {
    category: 'Tools & Platforms',
    skills: ['GitHub', 'AWS']
  },
  {
    category: 'Other Skills',
    skills: ['UI/UX', 'Flutter']
  }
];

const Skills = () => {
  return (
    <div className="skills">
      <h1>My Skills</h1>

      <div className="skill-row">
        {skillGroupsRow1.map((group, index) => (
          <div className="skill-box" key={index}>
            <h2>{group.category}</h2>
            <ul>
              {group.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="skill-row">
        {skillGroupsRow2.map((group, index) => (
          <div className="skill-box" key={index}>
            <h2>{group.category}</h2>
            <ul>
              {group.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
