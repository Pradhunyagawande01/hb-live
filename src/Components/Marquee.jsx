import { useEffect, useRef, useState } from "react";
import skillList from "../data/data.js";

const Marquee = ({ skills = skillList }) => {
  const skillsElementRef = useRef(null);
  const animationRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (skillsElementRef.current && windowWidth > 0) {
      const elementWidth = skillsElementRef.current.getBoundingClientRect().width;
      
      if (animationRef.current) {
        animationRef.current.cancel();
      }

      animationRef.current = skillsElementRef.current.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(${windowWidth - elementWidth}px)` }
        ],
        {
          duration: 20000,
          easing: "linear",
          iterations: Infinity
        }
      );

      // Pause/resume based on hover state
      if (isHovered) {
        animationRef.current.pause();
      } else {
        animationRef.current.play();
      }
    }
  }, [windowWidth, isHovered]);

  return (
    <div className="relative overflow-x-hidden py-8 bg-black border-t border-b border-green-900/50">
      <div
        ref={skillsElementRef}
        className="w-max whitespace-nowrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-6 px-4">
          {[...skills, ...skills].map(({ name, logo }, index) => (
            <div 
              key={index} 
              className="relative group flex items-center justify-center p-6 border border-green-900/50 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 overflow-hidden"
              style={{ width: '240px', height: '120px' }}
            >
              {/* Military corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-green-500/80" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-green-500/80" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-green-500/80" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-green-500/80" />
              
              {/* Scanning line effect */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,hsla(120,100%,50%,0.1),transparent)] opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
              
              {/* Pulse animation dot */}
              <div className="absolute bottom-3 right-3 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              
              <img 
                src={logo} 
                alt={name} 
                className="w-16 h-16 object-contain mr-4 group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="text-green-400 font-mono text-sm tracking-wider">
                {name}
              </span>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(120,100%,50%,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;