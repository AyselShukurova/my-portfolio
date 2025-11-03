import React from "react";
import "./index.css";

const Education: React.FC = () => {
  const educations = [
    {
      degree: "Master degree: Geophysics Engineering",
      university: "Azerbaijan State Oil and Industry University",
      location: "Baku, Azerbaijan",
      date: "09/2023 – 06/2025",
    },
    {
      degree: "Bachelor degree: Geological Engineering",
      university: "Azerbaijan State Oil and Industry University",
      location: "Baku, Azerbaijan",
      date: "09/2019 – 06/2023",
    },
  ];

  return (
    <div className="education-container">
      <div className="education-section">
        {educations.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="education-date">{edu.date}</span>
            </div>
            <p className="education-university">{edu.university}</p>
            <p className="education-location">{edu.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
