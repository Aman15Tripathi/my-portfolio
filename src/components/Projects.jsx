import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectList = [
  {
    title: 'Portfolio Website',
    description: 'A sleek personal portfolio built with React, Node and styled with Bootstrap.',
    link: 'https://aman-tripathi15.vercel.app',
  },
  {
    title: 'E-commerce Store',
    description: 'Full-stack MERN application with cart, auth, and payment integration.',
    link: 'https://your-ecommerce-link.com',
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog system with Markdown support and user auth.',
    link: 'https://your-blog-link.com',
  },
];

const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-gradient-to-r from-[#16222a] to-[#3a6073] text-white px-5 py-20"
    >
      <div className="max-w-[1200px] mx-auto text-center w-full">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl text-[#00d4ff] mb-10 drop-shadow-[0_0_10px_#00d4ff]"
          data-aos="fade-up"
        >
          Projects
        </h2>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projectList.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-[0_0_10px_rgba(0,212,255,0.3)] hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] transition duration-300"
            >
              {/* TITLE */}
              <h3 className="text-[#00d4ff] text-xl mb-3">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* LINK */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d4ff] font-semibold hover:text-white transition"
              >
                View Project →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;