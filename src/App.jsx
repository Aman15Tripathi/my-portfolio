import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/page";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Home from "./components/Home";




const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
