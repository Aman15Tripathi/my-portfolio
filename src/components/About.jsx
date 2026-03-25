import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-r from-[#1c1f26] to-[#1a2b36] text-white px-5 py-20"
    >
      <div className="max-w-[1000px] mx-auto text-center">
        
        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl mb-8 text-[#00d4ff] drop-shadow-[0_0_10px_#00d4ff]"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* TEXT 1 */}
        <p
          className="text-[1.1rem] leading-7 md:leading-8 text-gray-300 mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I'm a passionate{" "}
          <span className="text-[#00d4ff] font-bold">
            MERN Stack Developer
          </span>{" "}
          with a focus on building elegant, fast, and scalable web apps.
          I enjoy solving problems through code and creating seamless user experiences.
          Whether it’s React on the front-end or Node.js on the back-end,
          I’m always excited to build and learn something new.
        </p>

        {/* TEXT 2 */}
        <p
          className="text-[1.1rem] leading-7 md:leading-8 text-gray-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Beyond coding, I enjoy contributing to open source, designing UI/UX prototypes,
          and staying current with the latest tech trends.
        </p>
      </div>
    </section>
  );
};

export default About;

