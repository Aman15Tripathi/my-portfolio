import  { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import profileImg from '../assets/profile.jpeg';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-[25px] z-[1000] mx-4 rounded-[50px] bg-[rgba(22,34,42,0.8)] backdrop-blur-md px-5 py-3 shadow-[0_2px_10px_rgba(0,212,255,0.1)] transition-all duration-300">
      
      {/* CONTAINER */}
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full shadow-[0_0_8px_#00d4ff] overflow-hidden">
            <img
              src={profileImg}
              alt="Aman Tripathi"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <a
            href="/"
            className="text-[#00d4ff] text-[1.2rem] font-bold no-underline drop-shadow-[0_0_5px_#00d4ff]"
          >
            Aman
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:block">
          <ul className="flex items-center">
            {["Home", "About", "Projects", "Resume", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="px-5 text-gray-300 font-medium hover:text-[#00d4ff] hover:drop-shadow-[0_0_8px_#00d4ff] transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP SOCIAL */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/Aman15tripathi" target="_blank" rel="noreferrer"
            className="text-[#00d4ff] text-xl hover:text-white hover:scale-110 hover:drop-shadow-[0_0_10px_#00d4ff] transition">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/aman-tripathi-b00564276" target="_blank" rel="noreferrer"
            className="text-[#00d4ff] text-xl hover:text-white hover:scale-110 hover:drop-shadow-[0_0_10px_#00d4ff] transition">
            <FaLinkedin />
          </a>

          <a href="mailto:amantripathineel@gmail.com"
            className="text-[#00d4ff] text-xl hover:text-white hover:scale-110 hover:drop-shadow-[0_0_10px_#00d4ff] transition">
            <FaEnvelope />
          </a>
        </div>

        {/* HAMBURGER */}
        <div
          className="md:hidden text-[1.8rem] text-[#00d4ff] cursor-pointer"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-[rgba(0,0,0,0.8)] backdrop-blur-md p-4 rounded-lg">
          
          <ul className="text-center space-y-3">
            {["Home", "About", "Projects", "Resume", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="text-[#00d4ff] text-lg"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* MOBILE SOCIAL */}
          <div className="flex justify-center gap-4 mt-4 text-[#00d4ff] text-xl">
            <a href="https://github.com/Aman15tripathi" target="_blank" onClick={toggleMenu}><FaGithub /></a>
            <a href="https://linkedin.com/in/aman-tripathi-b00564276" target="_blank" onClick={toggleMenu}><FaLinkedin /></a>
            <a href="mailto:amantripathineel@gmail.com" onClick={toggleMenu}><FaEnvelope /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;