import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import profileImg from '../assets/profile.jpeg'; // Update as needed

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="text-content" data-aos="fade-right">
          <h1>
            Hi, I'm <span className="highlight">Aman Tripathi</span>
          </h1>
          <h2 className="typed-text">
            <Typewriter
              words={[
                'MERN Stack Developer',
                'UI/UX Enthusiast',
                'React & Node Expert'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </h2>
          <p>
            I build modern, responsive, and high-performance web applications using the latest technologies.
          </p>
          <a href="#projects" className="cta-btn">View Projects</a>
        </div>
        <div className="image-content" data-aos="fade-left">
          <img src={profileImg} alt="Aman Tripathi" />
        </div>
      </div>
    </section>
  );
};

export default Home;
