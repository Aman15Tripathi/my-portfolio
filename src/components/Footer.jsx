import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#16222a] to-[#3a6073] text-gray-300 py-8 text-center border-t border-white/10 shadow-[0_-2px_10px_rgba(0,212,255,0.1)]">
      
      <div className="max-w-[1000px] mx-auto">

        {/* NAME */}
        <h4 className="text-[1.2rem] text-[#00d4ff] mb-3 drop-shadow-[0_0_10px_#00d4ff]">
          Aman Tripathi
        </h4>

        {/* ICONS */}
        <div className="flex justify-center gap-6 text-[#00d4ff] text-xl">
          <a href="https://github.com/Aman15tripathi" target="_blank" rel="noopener noreferrer"
            className="hover:text-white hover:drop-shadow-[0_0_15px_#00d4ff] transition">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/aman-tripathi-b00564276" target="_blank" rel="noopener noreferrer"
            className="hover:text-white hover:drop-shadow-[0_0_15px_#00d4ff] transition">
            <FaLinkedin />
          </a>

          <a href="mailto:amantripathineel@gmail.com"
            className="hover:text-white hover:drop-shadow-[0_0_15px_#00d4ff] transition">
            <FaEnvelope />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm mt-4 text-gray-400">
          &copy; {new Date().getFullYear()} Aman Tripathi. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;