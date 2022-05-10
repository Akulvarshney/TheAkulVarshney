import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Publications from "./components/Publications/Publications";
import Certifications from "./components/Certification/Certifications";
import Footer from "./components/Footer/Footer";
import ProjectTabs from "./components/Projects/ProjectTabs";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <ProjectTabs />
      <Publications />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
