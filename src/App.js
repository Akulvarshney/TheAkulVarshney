import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Publications from "./components/Publications/Publications";
import Certifications from "./components/Certification/Certifications";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Publications />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
