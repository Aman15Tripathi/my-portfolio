// import React from 'react';
// // import { Link } from 'react-router-dom';
// import './Header.css';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <>
//       <header className='header'>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-3 ">
//               <div className="brand-logo">
//                 <div className="Profile-img"></div>
//                 <a className="brand-name" href="/">
//                   Aman </a>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="header-links">
//                 <ul className="list-unstyled">
//                   <li><a href="/" className="nav-link">Home</a></li>
//                   <li><a href="#about" className="nav-link">About</a></li>
//                   <li><a href="#projects" className="nav-link">Projects</a></li>
//                   <li><a href="#resume" className="nav-link">Resume</a></li>
//                   <li><a href="#contact" className="nav-link">Contact</a></li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="social-links">
//                 <a href="https://github.com/Aman15tripathi" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
//                 <a href="https://linkedin.com/in/aman-tripathi-b00564276" target="_blank" rel="noopener noreferrer" className="\"> <FaLinkedin /> </a>
//                 <a href="mailto:amantripathineel@gmail.com" className=""> <FaEnvelope /> </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import './Header.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import profileImg from '../assets/profile.jpeg';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="Profile-img"><img src={profileImg} alt="Aman Tripathi" /></div>
            <a className="brand-name" href="/">Aman</a>
          </div>

          {/* Desktop Nav Links */}
          <div className="header-links desktop-only">
            <ul className="list-unstyled">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#resume" className="nav-link">Resume</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>

          {/* Desktop Social Icons */}
          <div className="social-links desktop-only">
            <a href="https://github.com/Aman15tripathi" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/aman-tripathi-b00564276" target="_blank"><FaLinkedin /></a>
            <a href="mailto:amantripathineel@gmail.com"><FaEnvelope /></a>
          </div>

          {/* Hamburger Menu (Right-Aligned on Mobile) */}
          <div className="hamburger" onClick={toggleMenu}>
            {isMobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li><a href="/" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#resume" onClick={toggleMenu}>Resume</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
            <div className="mobile-socials">
              <a href="https://github.com/Aman15tripathi" target="_blank" onClick={toggleMenu}><FaGithub /></a>
              <a href="https://linkedin.com/in/aman-tripathi-b00564276" target="_blank" onClick={toggleMenu}><FaLinkedin /></a>
              <a href="mailto:amantripathineel@gmail.com" onClick={toggleMenu}><FaEnvelope /></a>
            </div>
          </div>
        )}

      </header>

    </>
  );
};

export default Header;
