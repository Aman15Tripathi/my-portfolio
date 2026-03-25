import  { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-5 py-12 overflow-hidden"
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto gap-10 flex-wrap w-full">
        
        {/* TEXT */}
        <div className="flex-1 min-w-[280px]" data-aos="fade-right">
          
          <h1 className="text-4xl md:text-5xl mb-2">
            Hi, I'm{" "}
            <span className="text-[#00d4ff] drop-shadow-[0_0_10px_#00d4ff]">
              Aman Tripathi
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-light mb-5 text-gray-300 min-h-[40px]">
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

          <p className="text-gray-300 max-w-[500px]">
            I build modern, responsive, and high-performance web applications using the latest technologies.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-4 py-2 bg-[#00d4ff] text-black font-bold rounded-lg shadow-[0_0_15px_#00d4ff] hover:bg-white hover:shadow-[0_0_25px_#00d4ff] transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#skill"
              className="px-4 py-2 bg-[#00d4ff] text-black font-bold rounded-lg shadow-[0_0_15px_#00d4ff] hover:bg-white hover:shadow-[0_0_25px_#00d4ff] transition duration-300"
            >
              My Tech Skills
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="flex-1 min-w-[280px] text-center"
          data-aos="fade-left"
        >
          <img
            src={profileImg}
            alt="Aman Tripathi"
            className="w-full max-w-[350px] mx-auto rounded-full border-4 border-[#00d4ff] shadow-[0_0_30px_rgba(0,212,255,0.6)] hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;