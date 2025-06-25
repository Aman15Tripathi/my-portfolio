import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        <p className="contact-text" data-aos="fade-up" data-aos-delay="200">
          Whether you have a question, want to collaborate, or just want to say hi — I’ll try my best to get back to you!
        </p>

        <form className="contact-form" data-aos="fade-up" data-aos-delay="400">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-icons" data-aos="fade-up" data-aos-delay="600">
          <a href="mailto:amantripathineel@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/Aman15tripathi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/AmanTripathi" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
