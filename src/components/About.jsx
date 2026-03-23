import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <p className="about-text" data-aos="fade-up" data-aos-delay="200">
          I'm a passionate <span className="highlight">MERN Stack Developer</span> with a focus on building elegant, fast, and scalable web apps.
          I enjoy solving problems through code and creating seamless user experiences. Whether it’s React on the front-end or Node.js on the back-end,
          I’m always excited to build and learn something new.
        </p>
        <p className="about-text" data-aos="fade-up" data-aos-delay="400">
          Beyond coding, I enjoy contributing to open source, designing UI/UX prototypes, and staying current with the latest tech trends.
        </p>
      </div>
    </section>
  );
};

export default About;



