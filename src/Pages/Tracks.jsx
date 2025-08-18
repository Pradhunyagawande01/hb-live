import React, { useState, useEffect, useRef, useMemo } from "react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";
import DottedBg from "../Components/DottedBg";

// Track Card Component for better code organization
const TrackCard = ({ track, isFocused }) => {
  return (
    <div
      className={`w-full max-w-md  ${track.title === "OPEN INNOVATION"} overflow-hidden shadow-lg`}
    >
      <div className="h-56 overflow-hidden relative">
        {/* {track.image ? ( */}
        <img
          src={track.image}
          alt={track.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/img/placeholder.png"; // Fallback image
          }}
        />
        {/* ) : ( */}
        {/* <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"> */}
        {/* <div className="px-6 py-4 bg-black bg-opacity-70 rounded-sm border border-gray-700 text-center"> */}
        {/* <div className="text-4xl font-bold text-green-500 mb-2">{`0${track.id}`}</div> */}
        {/* <div className="text-xs text-gray-400 uppercase tracking-widest">Track</div> */}
        {/* </div> */}
        {/* </div> */}
        {/* )} */}

        {/* Military-style overlay elements
        <div className="absolute top-0 left-0 w-16 h-1 bg-green-500"></div>
        <div className="absolute bottom-0 right-0 w-16 h-1 bg-green-500"></div> */}

        {/* Track ID badge */}
        {/* <div className="absolute top-3 right-3 bg-black bg-opacity-70 px-3 py-1 border border-gray-700">
          <span className="text-green-400 font-mono text-sm">{`TRACK ${track.id}/8`}</span>
        </div> */}
      </div>

      {/* <div className="p-6"> */}
      {/* Track name with military aesthetic */}
      {/* <div className="flex items-center mb-3">
          <div className="h-px w-6 bg-green-500 mr-3"></div>
          <h3 className={`text-xl font-bold font-mono uppercase ${track.title === "OPEN INNOVATION" ? 'text-yellow-500' : 'text-green-400'}`}>
            {track.title}
          </h3>
        </div> */}

      {/* Description */}
      {/* <p className="text-gray-400 mb-4">
          {track.description}
        </p> */}

      {/* Military-style footer */}
      {/* <div className="flex justify-between items-center mt-4">
          <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">
            Classification: Level {Math.floor(Math.random() * 3) + 1}
          </div>
          <div className="h-6 w-6 border border-gray-700 flex items-center justify-center">
            <div className="h-3 w-3 bg-green-500 opacity-50"></div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

const TracksSlider = () => {
  // Track data with army-themed titles
  const tracks = [
    // {
    //   id: 1,
    //   title: "Healthcare",
    //   description:
    //     "Bring your unique ideas and innovative solutions to address any challenge.",
    //   image: "/img/HC.png",
    // },
    {
      id: 2,
      title: "Cyber Security",
      description:
        "Develop solutions to protect critical digital infrastructure against evolving threats.",
      image: "/img/CS.png",
    },
    {
      id: 3,
      title: "Education",
      description:
        "Create technology to enhance tactical awareness and mission effectiveness.",
      image: "/img/AR.png",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      description:
        "Build tools for data analysis, pattern recognition, and information processing.",
      image: "/img/AI.png",
    },
    {
      id: 5,
      title: "Open innovative",
      description:
        "Foster a culture of open innovation and collaboration.",
      image: "/img/oi.png",
    },
    {
      id: 6,
      title: "IOT",
      description:
        "Innovate healthcare solutions for emergency response and field treatment.",
      image: "/img/IOT.png",
    },
    {
      id: 8,
      title: "GAme Development",
      description:
        "Create intelligent autonomous solutions for various mission applications.",
      image: "/img/GD.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef(null);
  const sliderRef = useRef(null);

  // Calculate indices for visible slides with useMemo for performance
  const visibleIndices = useMemo(() => {
    return [-2, -1, 0, 1, 2].map((offset) => {
      let index = currentIndex + offset;
      // Handle wrapping
      if (index < 0) index = tracks.length + index;
      if (index >= tracks.length) index = index - tracks.length;
      return index;
    });
  }, [currentIndex, tracks.length]);

  // Move to the previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
      );
      resetInterval();
    }
  };

  // Move to the next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
      );
      resetInterval();
    }
  };

  // Go to a specific slide
  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      resetInterval();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  // Reset transition state after animation completes
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Toggle auto-rotation pause state
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // Reset the auto-rotation interval
  const resetInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }

    if (!isPaused) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  // Set up auto-rotation and keyboard event listeners
  useEffect(() => {
    if (!isPaused) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    // Add keyboard event listeners
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPaused]);

  // Handle pause/resume when component state changes
  useEffect(() => {
    if (isPaused && slideInterval.current) {
      clearInterval(slideInterval.current);
    } else {
      resetInterval();
    }
  }, [isPaused]);

  // Add touch swipe functionality
  useEffect(() => {
    const slider = sliderRef.current;
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 75) {
        // Swipe left
        nextSlide();
      } else if (touchEndX - touchStartX > 75) {
        // Swipe right
        prevSlide();
      }
    };

    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
      slider.addEventListener("touchend", handleTouchEnd);

      return () => {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
        slider.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen text-gray-200 overflow-hidden">
      {/* Add DottedBg wrapper */}
      {/* <DottedBg
        dotColor="rgba(255, 255, 255, 0.25)"
        bgColor="black"
        dotSize={2}
        baseSpacing={30}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      > */}
        <div className="relative z-10">
          {/* Military-style header */}
          <div className="container mx-auto mb-12">
            <div className="flex flex-col items-center">
              <div className="relative flex flex-col items-center mx-auto text-[#198f51] mb-6 sm:mb-10">
                <AnimatedTitle
                  title="<b>Tracks</b>"
                  containerClass="mt-4 sm:mt-8 !text-black text-center reveal-element"
                />
              </div>
              {/* <div className="h-1 w-24 md:w-32 bg-green-500 mb-6 md:mb-8"></div>
          <p className="text-center text-gray-400 max-w-2xl mb-6 font-mono text-sm md:text-base">
            SELECT YOUR OBJECTIVE AND EXECUTE THE MISSION
          </p> */}

              {/* Military rank-style decoration */}
              <div className="flex items-center space-x-2 mb-6 md:mb-8">
                <div className="h-px w-12 md:w-16 bg-gray-700"></div>
                <div className="h-4 md:h-5 w-4 md:w-5 rotate-45 border-2 border-gray-700"></div>
                <div className="h-px w-12 md:w-16 bg-gray-700"></div>
              </div>
            </div>
          </div>

          {/* Track Slider */}
          <div
            className="relative w-full max-w-6xl mx-auto h-80 md:h-96"
            ref={sliderRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Mission Tracks Carousel"
          >
            {/* Track cards */}
            <div
              className="relative h-full"
              onTransitionEnd={handleTransitionEnd}
              aria-live="polite"
            >
              {tracks.map((track, index) => {
                // Calculate position in slider
                const position = visibleIndices.indexOf(index);
                if (position === -1) return null; // Don't render if not in visible range

                // Calculate styling based on position
                let zIndex = 10 - Math.abs(position - 2);
                let opacity =
                  position === 2 ? 1 : 0.7 - Math.abs(position - 2) * 0.2;
                let scale = 1 - Math.abs(position - 2) * 0.1;
                let translateX = (position - 2) * 50;

                if (position === 2) {
                  // Center card (focused)
                  translateX = 0;
                }

                const isFocused = position === 2;

                return (
                  <div
                    key={track.id}
                    className="absolute top-0 left-0 w-full h-full flex justify-center transition-all duration-500"
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={track.title}
                    aria-hidden={!isFocused}
                  >
                    <TrackCard track={track} isFocused={isFocused} />
                  </div>
                );
              })}
            </div>

            {/* Navigation controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-70 border border-green-900 p-1 md:p-2 text-green-500 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={isTransitioning}
              aria-label="Previous track"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-70 border border-green-900 p-1 md:p-2 text-green-500 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={isTransitioning}
              aria-label="Next track"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Pause/Play button */}
            {/* <button
          onClick={togglePause}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-4 z-20 bg-black bg-opacity-70 border border-green-900 p-1 md:p-2 text-green-500 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
        >
          {isPaused ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button> */}
          </div>

          {/* Track indicators */}
          <div className="container mx-auto mt-8">
            <div
              className="flex justify-center space-x-2 md:space-x-3"
              role="tablist"
              aria-label="Track selection"
            >
              {tracks.map((track, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1 md:w-2 h-6 md:h-8 transition-all ${
                    index === currentIndex
                      ? "bg-green-500"
                      : "bg-gray-700 hover:bg-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-green-500`}
                  aria-label={`Go to track ${index + 1}: ${track.title}`}
                  aria-selected={index === currentIndex}
                  role="tab"
                />
              ))}
            </div>
          </div>

          {/* Current Track Info - Mobile Responsive */}
          <div className="container mx-auto mt-6 px-4 md:hidden">
            <p className="text-center text-xs text-gray-500">
              <span className="text-green-500">{currentIndex + 1}/8</span> |{" "}
              {tracks[currentIndex].title}
            </p>
          </div>
        </div>
     
    </div>
  );
};

export default TracksSlider;
