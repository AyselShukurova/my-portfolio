import React, { useState } from "react";
import About from "../Section/components/About";
import Skills from "../Section/components/Skills";
import Education from "../Section/components/Education";
import Experiences from "../Section/components/Experiences";
import Certificates from "../Section/components/Certificates";
import "./index.css";

type Tab = "about" | "skills" | "education" | "experiences" | "certificates";

const Section: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <div className="section-container">
      <div className="tab-menu">
        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "experiences" ? "active" : ""}
          onClick={() => setActiveTab("experiences")}
        >
          Experiences
        </button>
        <button
          className={activeTab === "certificates" ? "active" : ""}
          onClick={() => setActiveTab("certificates")}
        >
          Certificates
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "about" && <About />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "education" && <Education />}
        {activeTab === "experiences" && <Experiences />}
        {activeTab === "certificates" && <Certificates />}
      </div>
    </div>
  );
};

export default Section;
