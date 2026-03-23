import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import './index.css'




const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




// import Page from "./pages/page";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
// import Contact from "./components/Contact";
//  <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/contact" element={<Contact />} /> 
