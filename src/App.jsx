import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import Linkedin from "./components/Linkedin";
import Botum from "./components/Botum";
import Footer from "./components/Footer";
import LinkedInWallSection from "./components/LinkedInWall";

const App = () => {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <Partners />
      <LinkedInWallSection />
      <Botum />
      <Footer />
    </div>
  );
};

export default App;
