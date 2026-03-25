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
        <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Resume />
            <TechStack />
            <MySkills />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;