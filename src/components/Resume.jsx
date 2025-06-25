import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Resume.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <h2 className="section-title" data-aos="fade-up">Resume</h2>

        <div className="resume-download" data-aos="fade-up" data-aos-delay="200">
          <a href="/Aman_Tripathi_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
            📄 Download Resume
          </a>
        </div>

        <div className="resume-content">

          <div className="education" data-aos="fade-up" data-aos-delay="300">
            <h3>🎓 Education</h3>
            <p><strong>Bachelor of Technology (B.Tech)</strong> - Computer Science & Engineering</p>
            <p>AKTU University, Expected(2026)</p>
          </div>

          <div className="skills" data-aos="fade-up" data-aos-delay="400">
            <h3>🛠️ Skills</h3>
            <ul>
              <li><strong>Frontend:</strong> React, HTML, CSS, JavaScript, Bootstrap</li>
              <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, MySQL</li>
              <li><strong>Tools:</strong> Git, GitHub, Postman, VS Code</li>
            </ul>
          </div>

          <div className="experience" data-aos="fade-up" data-aos-delay="500">
            <h3>💼 Experience</h3>
            <p><strong>Internship - MERN Stack Developer</strong></p>
            <p>Staqo, April 2024 - July 2024</p>
            <ul>
              <li>Worked on full-stack features for internal dashboard systems</li>
              <li>Built reusable components with React</li>
              <li>Integrated APIs and handled backend routes with Express</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
