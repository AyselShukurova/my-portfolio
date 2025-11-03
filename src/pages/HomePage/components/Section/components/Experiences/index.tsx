import React, { useState } from "react";
import "./index.css";

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "UNIBANK",
      role: "Front-End Developer Intern",
      date: "02/2025 – 08/2025",
      location: "Baku, Azerbaijan",
      details: [
        "Contributed to the development of web applications for the banking sector using the Angular framework.",
        "Applied reactive programming techniques with RxJS to build dynamic and responsive UI components.",
        "Utilized GitHub for version control and Jira for agile project management.",
        "Participated in code reviews and refactoring processes to improve code quality, readability, and maintainability.",
        "Collaborated closely with backend developers to integrate RESTful APIs and resolve technical issues efficiently.",
        "Participated in the development of the MUT questionnaire module.",
        "Contributed to automating the document verification process in the loan application workflow by implementing functionality that utilizes QR code technology."
      ],
    },
    {
      company: "The International Bank of Azerbaijan",
      role: "Digital Awareness Program Intern",
      date: "07/2024 – 01/2025",
      location: "Sumgait, Azerbaijan",
      details: [
        "Participated in training sessions and projects aimed at increasing awareness of the bank’s digital products and services.",
        "Gained practical knowledge on digital banking concepts, user experience, and digital security.",
        "Took part in team-based presentations and contributed to customer-focused digital projects."
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="experience-container">
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-card ${
              activeIndex === index ? "active" : ""
            }`}
          >  
            <div
              className="experience-header"
              onClick={() => toggleAccordion(index)}
            >
              <div>
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
              </div>
              <div className="date">{exp.date}</div>
            </div>

            {activeIndex === index && (
              <div className="experience-content">
                <p className="location">{exp.location}</p>
                <ul>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
