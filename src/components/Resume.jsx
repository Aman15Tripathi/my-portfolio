import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="resume"
      className="min-h-screen flex items-center bg-gradient-to-r from-[#1f1c2c] to-[#928dab] text-white px-5 py-20"
    >
      <div className="max-w-[900px] mx-auto w-full text-center">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl text-[#00d4ff] mb-8 drop-shadow-[0_0_10px_#00d4ff]"
          data-aos="fade-up"
        >
          Resume
        </h2>

        {/* DOWNLOAD BUTTON */}
        <div data-aos="fade-up" data-aos-delay="200">
          <a
            href="/Aman_Tripathi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block px-6 py-3 bg-[#00d4ff] text-black font-bold rounded-lg shadow-[0_0_15px_#00d4ff] hover:bg-white hover:shadow-[0_0_25px_#00d4ff] transition duration-300 mb-8"
          >
            📄 Download Resume
          </a>
        </div>

        {/* CONTENT */}
        <div className="text-left mt-6 space-y-8">

          {/* EDUCATION */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-[#00d4ff] text-xl mb-2">🎓 Education</h3>
            <p className="text-gray-300">
              <strong>Bachelor of Technology (B.Tech)</strong> - Computer Science & Engineering
            </p>
            <p className="text-gray-300">
              AKTU University, Expected (2026)
            </p>
          </div>

          {/* SKILLS */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-[#00d4ff] text-xl mb-2">🛠️ Skills</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li><strong>Frontend:</strong> React, HTML, CSS, JavaScript, Bootstrap</li>
              <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, MySQL</li>
              <li><strong>Tools:</strong> Git, GitHub, Postman, VS Code</li>
            </ul>
          </div>

          {/* EXPERIENCE */}
          <div data-aos="fade-up" data-aos-delay="500">
            <h3 className="text-[#00d4ff] text-xl mb-2">💼 Experience</h3>
            <p className="text-gray-300">
              <strong>Internship - MERN Stack Developer</strong>
            </p>
            <p className="text-gray-300">
              Staqo, April 2024 - July 2024
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-2">
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