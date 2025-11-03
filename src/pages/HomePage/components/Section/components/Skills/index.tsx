import React from "react";
import "./index.css";

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <div className="skills-column">
        <h3>Soft Skills</h3>
        <ul className="skills-list">
          <li>Leadership</li>
          <li>Team Building</li>
          <li>Teamwork</li>
          <li>Adaptability</li>
          <li>Flexibility</li>
          <li>Critical Thinking</li>
          <li>Analytical Problem-Solving</li>
        </ul>
      </div>

     
      <div className="skills-column">
        <h3>Tech Skills</h3>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Angular</li>
          <li>React JS</li>
          <li>Redux Toolkit</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Rest API</li>
          <li>Tailwind CSS</li>
          <li>GitLab/GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
