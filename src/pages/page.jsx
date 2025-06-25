import React from 'react'
import Header from '../components/Header';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Home from '../components/Home';
import Resume from '../components/Resume';
import Footer from '../components/Footer';


const Page = () => {
    return (
        <div className='wrapper'>
            <div className="container">
                <Header />
                <section id="home">
                    <Home />
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
                <section id="contact">
                    <Contact />
                </section>
                <Footer/>

            </div>
        </div>
    )
}

export default Page;