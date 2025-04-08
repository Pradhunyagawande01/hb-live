import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Radio,
  Compass,
  Radar,
  Cog,
  Code,
  ChevronLeft,
  ChevronRight,
  Upload,
  Star,
} from "lucide-react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";

const TracksPage = () => {
  const [hoveredTrack, setHoveredTrack] = useState(null);
  const [animatedTracks, setAnimatedTracks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);

  const tracks = [
    {
      id: 1,
      title: "Cyber Security",
      description:
        "Build solutions to protect military networks and sensitive data from cyber threats. Develop advanced defense systems against digital warfare.",
      icon: <Shield className="w-12 h-12 mb-4 text-green-400" />,
      textColor: "text-white",
      image: "/api/placeholder/400/250",
      bgGradient: "from-green-900/40 to-black/60",
    },
    {
      id: 2,
      title: "Communications",
      description:
        "Develop innovative communication systems for battlefield coordination and intelligence sharing. Create secure channels resistant to enemy interference.",
      icon: <Radio className="w-12 h-12 mb-4 text-blue-400" />,
      textColor: "text-white",
      image: "/api/placeholder/400/250",
      bgGradient: "from-blue-900/40 to-black/60",
    },
    {
      id: 3,
      title: "Field Operations",
      description:
        "Create tools to enhance soldier performance, safety, and effectiveness in the field. Design solutions for tactical advantage in diverse environments.",
      icon: <Compass className="w-12 h-12 mb-4 text-amber-400" />,
      textColor: "text-white",
      image: "/api/placeholder/400/250",
      bgGradient: "from-amber-900/40 to-black/60",
    },
    {
      id: 4,
      title: "Intelligence & Reconnaissance",
      description:
        "Design solutions for data collection, analysis, and actionable intelligence. Develop systems that provide tactical advantage through information superiority.",
      icon: <Radar className="w-12 h-12 mb-4 text-purple-400" />,
      textColor: "text-white",
      image: "/api/placeholder/400/250",
      bgGradient: "from-purple-900/40 to-black/60",
    },
    {
      id: 5,
      title: "Logistics & Supply Chain",
      description:
        "Optimize resource management and supply delivery systems for military operations. Create innovative solutions for maintaining operational readiness.",
      icon: <Cog className="w-12 h-12 mb-4 text-red-400" />,
      textColor: "text-white",
      image: "/api/placeholder/400/250",
      bgGradient: "from-red-900/40 to-black/60",
    },
    {
      id: 6,
      title: "Open Track",
      description:
        "Your innovative solution addressing any military or defense challenge not covered by other tracks. Think outside the box to solve critical military problems.",
      icon: <Code className="w-12 h-12 mb-4 text-cyan-400" />,
      textColor: "text-white",
      image: "/api/placeholder/400/250",
      bgGradient: "from-cyan-900/40 to-black/60",
    },
  ];

  // Animation for cards appearing on page load
  useEffect(() => {
    // Set page as loaded after a small delay
    setTimeout(() => setIsLoaded(true), 500);

    const timeout = setTimeout(() => {
      const trackIds = [];
      const interval = setInterval(() => {
        if (trackIds.length < tracks.length) {
          trackIds.push(tracks[trackIds.length].id);
          setAnimatedTracks([...trackIds]);
        } else {
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  // Auto rotation for slider
  useEffect(() => {
    autoplayRef.current = setTimeout(() => {
      if (!isTransitioning) {
        handleNextSlide();
      }
    }, 6000);

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [activeSlide, isTransitioning]);

  const handleSlideChange = (index) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveSlide(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevSlide = () => {
    const newIndex = activeSlide === 0 ? tracks.length - 1 : activeSlide - 1;
    handleSlideChange(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = activeSlide === tracks.length - 1 ? 0 : activeSlide + 1;
    handleSlideChange(newIndex);
  };

  // Touch swipe functionality
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 100) {
      // Swipe left
      handleNextSlide();
    } else if (touchEndX.current - touchStartX.current > 100) {
      // Swipe right
      handlePrevSlide();
    }
  };

  return (
    <div
      className={`min-h-screen text-white py-12 md:py-20 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Military grid pattern background with scanner effect
      <div className="fixed inset-0 pointer-events-none">
        <div className="bg-grid opacity-5 absolute inset-0"></div>
        <div className="scanner-line"></div>
      </div> */}

      <div className="container mx-auto px-4">
        {/* Header with enhanced animation */}
        <div className="text-center mb-16 relative">
          <div className="military-text-effect relative inline-block">
            {/* <div
              className="glow-effect absolute -inset-2 rounded-lg opacity-30 blur-xl"
              style={{ backgroundColor: "#198f51" }}
            >

            </div> */}
            <div className="relative flex flex-col items-center mx-auto text-[#198f51] mb-6 sm:mb-10">
              <AnimatedTitle
                title="<b>Tracks</b>"
                containerClass="mt-4 sm:mt-8 !text-black text-center reveal-element"
              />
            </div>
          </div>
          {/* <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 typewriter-text">
            Choose your mission objective. Each track presents unique challenges
            that require innovative solutions to support our troops and enhance
            military capabilities.
          </p> */}
        </div>

        {/* Enhanced slider for tracks with manual navigation */}
        <div
          className="relative max-w-4xl mx-auto mb-20"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden rounded-lg slider-container">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? "slider-transitioning" : ""}`}
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {tracks.map((track) => (
                <div key={track.id} className="min-w-full px-4">
                  <div
                    className={`rounded-lg overflow-hidden border border-white/50 shadow-2xl backdrop-blur-md bg-black bg-opacity-30 relative
                      transform transition-all duration-700 ease-out hover:shadow-glow
                      ${animatedTracks.includes(track.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                      ${hoveredTrack === track.id ? "scale-102" : ""}`}
                    onMouseEnter={() => setHoveredTrack(track.id)}
                    onMouseLeave={() => setHoveredTrack(null)}
                  >
                    <div className="relative">
                      {/* Track Image with improved gradient overlay */}
                      <div className="w-full h-56 relative overflow-hidden">
                        <img
                          src={track.image}
                          alt={track.title}
                          className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-b ${track.bgGradient} opacity-90`}
                        ></div>

                        {/* Badge */}
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-xs border border-white/30 flex items-center">
                          <Star size={12} className="mr-1 text-green-400" />
                          <span>Track {track.id}</span>
                        </div>
                      </div>

                      <div className="p-8 relative z-10">
                        <div className="flex flex-col items-center text-center">
                          <div className="rounded-full p-4 mb-5 bg-black/60 backdrop-blur-md border border-white/30 transform transition-all duration-300 hover:scale-110 hover:shadow-glow">
                            {track.icon}
                          </div>
                          <h3
                            className={`text-2xl md:text-3xl font-bold mb-3 ${track.textColor} znetry-font tracking-wide`}
                          >
                            {track.title}
                          </h3>
                          <div
                            className="w-16 h-0.5 mb-5 shimmer-line"
                            style={{ backgroundColor: "#198f51" }}
                          ></div>
                          <p
                            className={`${track.textColor} opacity-90 mb-6 leading-relaxed`}
                          >
                            {track.description}
                          </p>

                          {/* Enhanced Image Upload Section
                          <div className="w-full mt-5 p-5 border border-dashed border-white/50 rounded-lg bg-black/40 backdrop-blur-md hover:border-green-400 transition-colors">
                            <p className="text-sm text-gray-300 mb-3">Upload track-specific resources</p>
                            <div className="flex items-center justify-center w-full">
                              <label className="w-full flex flex-col items-center px-4 py-4 bg-black/70 text-white rounded-lg cursor-pointer hover:bg-green-900/30 transition-colors group">
                                <Upload size={20} className="mb-2 group-hover:text-green-400 transition-colors" />
                                <span className="text-sm">Select file</span>
                                <input type="file" className="hidden" />
                              </label>
                            </div>
                          </div> */}
                        </div>
                      </div>

                      {/* Enhanced card corner decoration */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div
                          style={{ backgroundColor: "#198f51" }}
                          className="rotate-45 transform origin-bottom-left w-20 h-20 -translate-y-10 translate-x-5 opacity-80 pulse-subtle"
                        ></div>
                      </div>

                      {/* Bottom decoration line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced navigation buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2 md:px-0 md:-mx-6">
            <button
              onClick={handlePrevSlide}
              className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-green-900/5 transition-all duration-300 focus:outline-none transform hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNextSlide}
              className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-green-900/50 hover:border-green-400 transition-all duration-300 focus:outline-none transform hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Enhanced slider indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {tracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 hover:bg-green-400 hover:scale-125 focus:outline-none ${
                  activeSlide === index ? "bg-green-500 w-6" : "bg-gray-600"
                }`}
                style={
                  activeSlide === index ? { backgroundColor: "#198f51" } : {}
                }
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      
        <Footer />
      </div>

      {/* Enhanced CSS with more advanced animations */}
      <style jsx>{`
     

        .znetry-font {
          font-family: "Black Ops One", cursive;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        /* Enhanced animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        /* Scale transformation for hover */
        .scale-102 {
          transform: scale(1.02);
        }

        /* Enhanced military grid background */
        .bg-grid {
          background-image: linear-gradient(
              rgba(25, 143, 81, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(25, 143, 81, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: center center;
        }

        /* Scanner effect */
        .scanner-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            #198f51,
            transparent
          );
          opacity: 0.5;
          animation: scan 8s linear infinite;
          box-shadow: 0 0 10px 2px rgba(25, 143, 81, 0.5);
        }

        @keyframes scan {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }

        /* Enhanced typewriter effect for subtitle */
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .typewriter-text {
          overflow: hidden;
          border-right: 3px solid #198f51;
          white-space: nowrap;
          animation:
            typing 3.5s steps(50, end) forwards,
            blink-caret 0.75s step-end infinite;
          max-width: 100%;
          display: inline-block;
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #198f51;
          }
        }

        /* Enhanced fade in items for detail lists */
        @keyframes fadeInItem {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-item {
          opacity: 0;
          animation: fadeInItem 0.6s ease-out forwards;
        }

        /* Light bar animation */
        .light-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 30%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(25, 143, 81, 0.8),
            transparent
          );
          animation: lightMove 2s infinite linear;
        }

        @keyframes lightMove {
          0% {
            left: -30%;
          }
          100% {
            left: 100%;
          }
        }

        /* Pulsing dot */
        .pulse-dot {
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Subtle pulse animation */
        .pulse-subtle {
          animation: pulseSubtle 3s infinite ease-in-out;
        }

        @keyframes pulseSubtle {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }

        /* Shimmer line effect */
        .shimmer-line {
          position: relative;
          overflow: hidden;
        }

        .shimmer-line::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        /* Radar sweep animation */
        .radar-sweep {
          background: conic-gradient(rgba(25, 143, 81, 0.3), transparent);
          border-radius: 50%;
          animation: sweep 4s infinite linear;
          transform-origin: bottom right;
        }

        @keyframes sweep {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Glitch effect */
        .glitch-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(25, 143, 81, 0.2);
          opacity: 0;
          pointer-events: none;
        }

        .glitch-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: -10px;
          width: 5px;
          height: 100%;
          background: rgba(25, 143, 81, 0.5);
          animation: glitch 3s infinite;
        }

        @keyframes glitch {
          0% {
            opacity: 0;
            left: -10px;
          }
          1% {
            opacity: 1;
            left: 10px;
          }
          2% {
            opacity: 0;
            left: -10px;
          }
          55% {
            opacity: 0;
            left: -10px;
          }
          56% {
            opacity: 1;
            left: 10px;
          }
          57% {
            opacity: 0;
            left: -10px;
          }
          100% {
            opacity: 0;
            left: -10px;
          }
        }

        /* Shadow glow effect */
        .shadow-glow {
          box-shadow: 0 0 15px 2px rgba(25, 143, 81, 0.4);
        }

        /* Slider transition enhancement */
        .slider-transitioning {
          transition-timing-function: cubic-bezier(0.45, 0, 0.2, 1);
        }

        .slider-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }
      `}</style>
    </div>
  );
};

export default TracksPage;
