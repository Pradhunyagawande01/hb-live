import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";
import { BiSolidChevronDown } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import About from "./About";
import Whyh4b from "./Whyh4b";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [pageLoad, setPageLoad] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const totalVideos = 3;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setPageLoad(false);
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }, 3000);
    return () => clearTimeout(loaderTimeout);
  }, []);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const handleDiscordClick = () => {
    window.open(
      "https://discord.gg/vPNPDAPgG5",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleRegistreClick = () => {
    window.open(
      "http://hack4brahmaputra.devfolio.co",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>{pageLoad && <Loader />}</AnimatePresence>
      <Navbar isVisible={showContent} />

      <div className="pl-1 md:pl-0 sm:pl-0 scrollbar-hide">
        <div className="relative h-dvh w-screen overflow-x-hidden bg-black">
          <motion.div
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <div
              id="video-frame"
              className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black pl-1 md:pl-0 sm:pl-0"
            >
              <div>
                <video
                  ref={nextVdRef}
                  src={getVideoSrc(currentIndex)}
                  loop
                  muted
                  id="next-video"
                  className="absolute-center invisible absolute z-20 size-32 sm:size-48 md:size-64 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
                <video
                  src={getVideoSrc(
                    currentIndex === totalVideos - 1 ? 1 : currentIndex
                  )}
                  autoPlay
                  loop
                  muted
                  className="absolute left-0 top-0 size-full object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>

              {/* Main Content Container */}
              <div className="absolute left-0 top-0 z-40 size-full flex flex-col justify-between p-4 lg:p-16">
                <div className="flex justify-between items-center gap-6 w-full flex-col md:flex-col lg:flex-row">
                  {/* Main Logo */}
                  <motion.div variants={itemVariants} className="special-font hero-heading text-white sm:pl-40 md:pl-36 font-bold text-9xl sm:text-7xl md:text-9xl lg:text-9xl pt-16">
                    <h1 className="special-font text-white font-bold text-7xl sm:text-9xl md:text-9xl lg:text-8xl xl:text-9xl leading-none ">
                      <b>
                        HACK<span className="text-[#198f51]">4</span>BRAHMA
                      </b>
                    </h1>
                  </motion.div>
                  {/* Sponsors - Top Right */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-4 lg:gap-4 sm:pl-7 md:pl-28 pt-10"
                  >
                    
                    <img
                      src="/img/DPIIT.png"
                      alt="DPIIT"
                      className="h-8 sm:h-10 lg:h-14 object-contain"
                    />
                    <img
                      src="/img/sayuj.png"
                      alt="Sayuj"
                      className="h-8 sm:h-10 lg:h-14 object-contain"
                    />
                  </motion.div>
                </div>

                {/* Middle Section - Buttons */}
                <div className="justify-center flex items-center ">
                  <motion.div               
                    variants={itemVariants}
                    className="flex justify-center items-center flex-col sm:flex-row flex-wrap gap-4 md:px-0 md:pr-[500px] lg:pt-4 lg:pb-0 "
                  >
                    <button
                      onClick={handleDiscordClick}
                      className="w-full sm:w-auto min-w-[250px] flex items-center justify-center px-6 py-3 bg-[#4B5320] hover:bg-[#5A6324] text-white font-bold rounded-xl shadow-lg border-2 border-[#8B9862] transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4B5320] to-[#3B4210] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <FaDiscord className="text-xl mr-2 relative z-10" />
                      <span className="relative z-10 uppercase tracking-wider">
                        Join Discord
                      </span>
                    </button>

                    <button
                      onClick={handleRegistreClick}
                      className="w-full sm:w-auto min-w-[250px] h-[60px] relative flex items-center justify-center bg-[#4B5320] hover:bg-[#5A6324] rounded-xl shadow-lg border-2 border-[#8B9862] transition-all duration-300 overflow-hidden group"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/img/04.jpg')" }}
                      ></div>
                      <span className="absolute inset-0 w-full h-full bg-[#4B5320] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></span>
                      <span className="relative z-20 text-white font-bold"></span>
                    </button>
                  </motion.div>
                </div>

                {/* Bottom Right - 24 HR HACKATHON */}
                <div className="md:flex md:justify-end">
                  <motion.h2
                    variants={itemVariants}
                    className=" pb-40 special-font text-[#198f51] font-bold text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none text-center  lg:text-right"
                  >
                    <b>24HR
                    <br />
                    HACKATHON</b>
                  </motion.h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Whyh4b />
        <About />
      </div>
    </>
  );
};

export default Hero;
