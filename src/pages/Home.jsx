import React from 'react'
import Header from '../components/Header';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';
import Hero from '../components/Hero';
import MySkills from '../components/MySkills';


const Home = () => {
    return (
        <div className='wrapper'>
            <div className="container">
                <Header />
                <section id="home">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="resume">
                    <Resume />
                </section>
                <section id="work">
                    <TechStack />
                </section>
                <section id="skill">
                    <MySkills />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <Footer/>

            </div>
        </div>
    )
}

export default Home;