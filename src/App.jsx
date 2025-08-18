import React, { useState } from 'react';
import ManinNav from './Components/MainNav';
import DottedBg from './Components/DottedBg';

// Import your page components
import Hero from './Pages/Hero';
import Gallery from "./Pages/Gallery";
import Partners from "./Pages/Partners";
import Humans from './Pages/Humans';
import Faqs from './Pages/Faqs';
import Tracks from './Pages/Tracks';
import Digitalswag from './Pages/Digitalswag';
import Venue from './Pages/Venue';
import About from './Pages/About';
import Footer from './Components/Footer';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // This function will be passed to Sidebar to notify App of expansion state
  const handleSidebarExpand = (expanded) => {
    setSidebarExpanded(expanded);
  };

  return (
    <div className="flex bg-black min-h-screen">
      <ManinNav onExpandChange={handleSidebarExpand} />
      <main 
        className={`
          transition-all duration-300 
          ${sidebarExpanded ? 'ml-46' : 'ml-0'} 
          w-full relative overflow-x-hidden
        `}
      >
        {/* Content wrapper with DottedBg covering entire page */}
        <DottedBg
          dotColor="rgba(255, 255, 255, 0.25)"
          bgColor="black"
          dotSize={2}
          baseSpacing={30}
          repelRadius={100}
          explodeStrength={25}
          returnSpeed={0.5}
        >
          <div className="relative z-10 w-full min-h-screen">
            {/* Hero Section */}
            <section id="home" >
              <Hero />
            </section>

            {/* About Section */}
            <section id="about" className="">
              <About />
            </section>

            {/* Gallery Section */}
            <section id="gallery" >
              <Gallery />
            </section>

            {/* Digital Swag Section */}
            <section id="digital-swag" >
              <Digitalswag />
            </section>

            {/* Partners Section */}
            <section id="partners" >
              <Partners />
            </section>

            {/* Humans Section */}
            <section id="humans" >
              <Humans />
            </section>

            {/* Tracks Section */}
            <section id="tracks" >
              <Tracks />
            </section>

            {/* Venue Section */}
            <section id="venue" >
              <Venue />
            </section>

            {/* FAQs Section */}
            <section id="faqs">
              <Faqs />
            </section>

            {/* Footer Section */}
            <section id="footer">
              <Footer />
            </section>
          </div>
        </DottedBg>
      </main>
    </div>
  );
}

export default App;