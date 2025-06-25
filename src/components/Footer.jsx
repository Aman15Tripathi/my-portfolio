import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>Aman Tripathi</h4>
        <div className="footer-icons">
          <a href="https://github.com/Aman15tripathi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/aman-tripathi-b00564276" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:amantripathineel@gmail.com"><FaEnvelope /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Aman Tripathi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
