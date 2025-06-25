import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

const projectList = [
  {
    title: 'Portfolio Website',
    description: 'A sleek personal portfolio built with React and styled with Bootstrap.',
    link: 'https://your-portfolio-link.com',
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
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title" data-aos="fade-up">Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" data-aos="zoom-in" data-aos-delay={index * 150} key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
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
