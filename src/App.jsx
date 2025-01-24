import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
// import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
