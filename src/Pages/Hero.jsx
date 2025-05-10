// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import { TiLocationArrow } from "react-icons/ti";
// import { FaDiscord } from "react-icons/fa"; // Added Discord icon
// import { BiSolidChevronDown } from "react-icons/bi"; // Added chevron down icon for Learn More
// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// // import Button from "../Components/Button";
// // import VideoPreview from "../Components/VideoPreview";
// import About from "./About";
// import Whyh4b from "./Whyh4b";
// import Loader from "../Components/Loader";
// import Navbar from "../Components/Navbar";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [hasClicked, setHasClicked] = useState(false);

//   const [loading, setLoading] = useState(true);
//   const [loadedVideos, setLoadedVideos] = useState(0);
//   const [pageLoad, setPageLoad] = useState(true); // For Loader
//   const [showContent, setShowContent] = useState(false); // For fading in content after loader

//   const totalVideos = 3;
//   const nextVdRef = useRef(null);

//   const handleVideoLoad = () => {
//     setLoadedVideos((prev) => prev + 1);
//   };

//   useEffect(() => {
//     if (loadedVideos === totalVideos - 1) {
//       setLoading(false);
//     }
//   }, [loadedVideos]);

//   useEffect(() => {
//     // First hide loader
//     const loaderTimeout = setTimeout(() => {
//       setPageLoad(false);
//       // Then show content with a slight delay
//       setTimeout(() => {
//         setShowContent(true);
//       }, 300);
//     }, 3000); // Loader duration

//     return () => clearTimeout(loaderTimeout);
//   }, []);

//   const handleMiniVdClick = () => {
//     setHasClicked(true);
//     setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
//   };

//   useGSAP(
//     () => {
//       if (hasClicked) {
//         gsap.set("#next-video", { visibility: "visible" });
//         gsap.to("#next-video", {
//           transformOrigin: "center center",
//           scale: 1,
//           width: "100%",
//           height: "100%",
//           duration: 1,
//           ease: "power1.inOut",
//           onStart: () => nextVdRef.current.play(),
//         });
//         gsap.from("#current-video", {
//           transformOrigin: "center center",
//           scale: 0,
//           duration: 1.5,
//           ease: "power1.inOut",
//         });
//       }
//     },
//     {
//       dependencies: [currentIndex],
//       revertOnUpdate: true,
//     }
//   );

//   useGSAP(() => {
//     gsap.set("#video-frame", {
//       clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
//       borderRadius: "0% 0% 40% 10%",
//     });
//     gsap.from("#video-frame", {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       borderRadius: "0% 0% 0% 0%",
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: "#video-frame",
//         start: "center center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });
//   });

//   const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

//   // Content animation variants
//   const contentVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1,
//         ease: "easeInOut",
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//       },
//     },
//   };

//   // Handle Discord button click
//   const handleDiscordClick = () => {
//     window.open(
//       "https://discord.gg/vPNPDAPgG5",
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };

//   const handleRegistreClick = () => {
//     window.open(
//       "http://hack4brahmaputra.devfolio.co",
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };

//   // Handle Learn More button click
//   const handleLearnMoreClick = () => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <AnimatePresence>{pageLoad && <Loader />}</AnimatePresence>

//       {/* Navbar - only appears after loader is gone */}
//       <Navbar isVisible={showContent} />

//       <div className="pl-1 md:pl-0 sm:pl-0 scrollbar-hide">
//         <div className="relative h-dvh w-screen overflow-x-hidden">
//           {/* {loading && (
//             <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
//               <div className="three-body">
//                 <div className="three-body__dot"></div>
//                 <div className="three-body__dot"></div>
//                 <div className="three-body__dot"></div>
//               </div>
//             </div>
//           )} */}

//           <motion.div
//             initial="hidden"
//             animate={showContent ? "visible" : "hidden"}
//             variants={contentVariants}
//           >
//             <div
//               id="video-frame"
//               className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black pl-1 md:pl-0 sm:pl-0"
//             >
//               <div>
//                 {/* <div className="mask-clip-path absolute-center absolute z-50 size-32 sm:size-48 md:size-64 cursor-pointer overflow-hidden rounded-lg pl-1"> */}
//                   {/* <VideoPreview>
//                     <div
//                       onClick={handleMiniVdClick}
//                       className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
//                     >
//                       <video
//                         ref={nextVdRef}
//                         src={getVideoSrc((currentIndex % totalVideos) + 1)}
//                         loop
//                         muted
//                         id="current-video"
//                         className="size-32 sm:size-48 md:size-64 origin-center scale-150 object-cover object-center"
//                         onLoadedData={handleVideoLoad}
//                       />
//                     </div>
//                   </VideoPreview> */}
//                 {/* </div> */}

//                 <video
//                   ref={nextVdRef}
//                   src={getVideoSrc(currentIndex)}
//                   loop
//                   muted
//                   id="next-video"
//                   className="absolute-center invisible absolute z-20 size-32 sm:size-48 md:size-64 object-cover object-center"
//                   onLoadedData={handleVideoLoad}
//                 />
//                 <video
//                   src={getVideoSrc(
//                     currentIndex === totalVideos - 1 ? 1 : currentIndex
//                   )}
//                   autoPlay
//                   loop
//                   muted
//                   className="absolute left-0 top-0 size-full object-cover object-center"
//                   onLoadedData={handleVideoLoad}
//                 />
//               </div>

//               <motion.h1
//                 variants={itemVariants}
//                 className="special-font hero-heading font-bold text-3xl sm:text-5xl md:text-7xl lg:text-9xl absolute bottom-7 right-5 z-40 text-[#198f51] pr-20"
//               >
//                 <b>24 Hr</b>
//                 <br />
//                 <span>
//                   <b>Hackathon</b>
//                 </span>
//               </motion.h1>

//               <div className="absolute left-0 top-0 z-40 size-full">
//                 <div className="mt-10 sm:mt-48 md:mt-24 px-2 sm:px-5 md:px-10 pl-4">
//                   <motion.h1
//                     variants={itemVariants}
//                     className="special-font hero-heading text-white sm:pl-7 md:pl-52 font-bold sm:text-9xl"
//                   >
//                     Hack<b className="text-[#198f51]">4</b>Brahma
//                   </motion.h1>

//                   <motion.div
//                     variants={itemVariants}
//                     className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-start px-4 md:px-0 md:pl-52"
//                   >
//                     {/* Discord Button */}
//                     <button
//                       onClick={handleDiscordClick}
//                       className="w-full sm:w-auto min-w-[250px] flex items-center justify-center px-6 py-3 bg-[#4B5320] hover:bg-[#5A6324] text-white font-bold rounded shadow-md border-2 border-[#8B9862] transition-all duration-300 relative overflow-hidden group"
//                     >
//                       <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4B5320] to-[#3B4210] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                       <FaDiscord className="text-xl mr-2 relative z-10" />
//                       <span className="relative z-10 uppercase tracking-wider">
//                         Join Discord
//                       </span>
//                       <span className="absolute top-0 right-0 bottom-0 w-1 bg-[#8B9862]"></span>
//                       <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#8B9862]"></span>
//                     </button>

//                     {/* Image-only Button */}
//                     <button
//                       onClick={handleRegistreClick}
//                       className="w-full sm:w-auto min-w-[250px] h-[60px] relative flex items-center justify-center bg-[#4B5320] hover:bg-[#5A6324] rounded shadow-md border-2 border-[#8B9862] transition-all duration-300 overflow-hidden group"
//                     >
//                       {/* Background image */}
//                       <div
//                         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//                         style={{
//                           backgroundImage: "url('/img/04.jpg')",
//                         }}
//                       ></div>


                      

//                       {/* Hover overlay */}
//                       <span className="absolute inset-0 w-full h-full bg-[#4B5320] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></span>

//                       {/* Border lines */}
//                       <span className="absolute top-0 right-0 bottom-0 w-1 bg-[#8B9862] z-20"></span>
//                       <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#8B9862] z-20"></span>
//                     </button>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>

//             <motion.h1
//               variants={itemVariants}
//               className="special-font hero-heading font-bold text-3xl sm:text-5xl md:text-7xl lg:text-9xl absolute bottom-5 right-5 text-white pr-20"
//             >
//               <b>24 Hr</b>
//               <br />
//               <span>
//                 <b>Hackathon</b>
//               </span>
//             </motion.h1>
//           </motion.div>
//         </div>
//         <Whyh4b />
//         <About />
        
//       </div>
//     </>
//   );
// };

// export default Hero;





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

  useGSAP(() => {
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
  }, { dependencies: [currentIndex], revertOnUpdate: true });

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
    window.open("https://discord.gg/vPNPDAPgG5", "_blank", "noopener,noreferrer");
  };

  const handleRegistreClick = () => {
    window.open("http://hack4brahmaputra.devfolio.co", "_blank", "noopener,noreferrer");
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
        <div className="relative h-dvh w-screen overflow-x-hidden">
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
                  src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                  autoPlay
                  loop
                  muted
                  className="absolute left-0 top-0 size-full object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>

              <motion.h1
                variants={itemVariants}
                className="special-font hero-heading font-bold text-3xl sm:text-5xl md:text-7xl lg:text-9xl absolute bottom-7 right-5 z-40 text-[#198f51] pr-20"
              >
                <b>24 Hr</b><br /><b>Hackathon</b>
              </motion.h1>

              <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-10 sm:mt-48 md:mt-24 px-2 sm:px-5 md:px-10 pl-4">
                  <motion.h1
                    variants={itemVariants}
                    className="special-font hero-heading text-white sm:pl-7 md:pl-52 font-bold sm:text-9xl"
                  >
                    Hack<b className="text-[#198f51]">4</b>Brahma
                  </motion.h1>

                  <motion.div
                    variants={itemVariants}
                    className="mt-3 flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-start px-4 md:px-0 md:pl-52"
                  >
                    <button
                      onClick={handleDiscordClick}
                      className="w-full sm:w-auto min-w-[250px] flex items-center justify-center px-6 py-3 bg-[#4B5320] hover:bg-[#5A6324] text-white font-bold rounded-xl shadow-lg border-2 border-[#8B9862] transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4B5320] to-[#3B4210] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <FaDiscord className="text-xl mr-2 relative z-10" />
                      <span className="relative z-10 uppercase tracking-wider">Join Discord</span>
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
