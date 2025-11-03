import React from "react";
import "./index.css";

const Certificates: React.FC = () => {
  const certificates = [
    { title: "Responsive Web Design", source: "freeCodeCamp" },
    {
      title: "Front End Development Libraries (React, Redux, Bootstrap, jQuery, Sass)",
      source: "freeCodeCamp",
    },
    { title: "Front-End Engineer Career Path", source: "Codecademy" },
    { title: "Front-End Development", source: "Algorithmics" },
    { title: "Angular", source: "Udemy" },
    { title: "Getting Started with Angular", source: "Coursera" },
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      source: "Coursera",
    },
    {
      title: "Modern Frontend Web Development: Sass, JS & TypeScript",
      source: "Coursera",
    },
    {
      title: "Advanced Data Handling and Reactive Programming Concepts",
      source: "Coursera",
    },
    { title: "Short Time and Effective Problem Solving", source: "Udemy" },
  ];

  return (
    <div className="certificates-container">
      <div className="certificates-section">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-source">{cert.source}</p>
          </div>
        ))}
      </div>
    </div>
  ); 
};

export default Certificates;


