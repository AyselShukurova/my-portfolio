import React from "react";
import "./index.css";
import profileImg from "../../../../assets/images/profile.png";

const Main: React.FC = () => {
  return (
    <div className="main-container">
      <div className="main-left">
        <img src={profileImg} alt="Aysel Shukurova" className="profile-img" />
      </div>

      <div className="main-right">
        <div className="info-section">
          <a
            href="mailto:ayselshukurovaa@gmail.com"
            className="link-item"
            target="_blank"
            rel="noreferrer"
          >
            <div className="info-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <span>Email</span>
            </div>
            <span>ayselshukurovaa@gmail.com</span>
          </a>

          <a href="tel:+994559063153" className="link-item">
            <div className="info-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.83.37 1.64.72 2.42a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.66-1.26a2 2 0 0 1 2.11-.45 11.36 11.36 0 0 0 2.42.72A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Phone</span>
            </div>
            <span>+994 55 906 31 53</span>
          </a>

           <a
            href="#"
            className="link-item"
            onClick={(e) => e.preventDefault()} 
          >
            <div className="info-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8v4" />
                <path d="M8 10h8" />
                <path d="M21 19H3v-7h18z" />
                <path d="M16 3l-4 4-4-4" />
              </svg>
              <span>Birthday</span>
            </div>
            <span>9 August 2002</span>
          </a>

          <a
            href="http://linkedin.com/in/ayselshukurova"
            target="_blank"
            rel="noreferrer"
            className="link-item"
          >
            <div className="info-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </div>
            <span>linkedin.com/in/aysel</span>
          </a>

    
          <a
            href="https://github.com/AyselShukurova"
            target="_blank"
            rel="noreferrer"
            className="link-item"
          >
            <div className="info-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61C16.14 15.07 17 13.4 17 11.5c0-1.43-.37-2.78-1.5-3.5.14-.37.5-1.27-.14-2.64 0 0-1.06-.34-3.36 1.28A11.38 11.38 0 0 0 8 6c-2.3-1.62-3.36-1.28-3.36-1.28C4 6.73 4.36 7.63 4.5 8c-1.13.72-1.5 2.07-1.5 3.5 0 1.9.86 3.57 2.38 4.52a3.37 3.37 0 0 0-.94 2.61V22" />
              </svg>
              <span>GitHub</span>
            </div>
            <span>github.com/aysel</span>
          </a>

         
        </div>
      </div>
    </div>
  );
};

export default Main;
