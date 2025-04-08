import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Target, Award } from "lucide-react";
import AnimatedTitle from "../Components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const AboutCard = ({ icon: Icon, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      card,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg 
      transform transition-all hover:scale-105 hover:shadow-xl 
      will-change-transform overflow-hidden"
    >
      <div className="flex justify-center items-center mb-4">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 transform transition-transform duration-300 group-hover:rotate-12 text-[#ba9150]" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-center mb-2 font-general">
        {title}
      </h3>
      <p className="text-gray-700 text-sm sm:text-base text-center font-robert-regular">
        {description}
      </p>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      // Performance-optimized text reveal
      gsap.fromTo(
        section.querySelectorAll(".text-reveal"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect for background
      gsap.to(section, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      id="about"
      className="min-h-screen w-screen 
      bg-fixed bg-cover bg-center py-8 sm:py-16 px-4 sm:pl-20
      will-change-transform"
    >
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div className="relative flex flex-col items-center mx-auto text-[#198f51] mb-6 sm:mb-10">
          <AnimatedTitle
            title="<b>About</b> the <br /> <b>Regiment</b>"
            containerClass="mt-4 sm:mt-8 !text-black text-center reveal-element"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <AboutCard
            icon={Target}
            title="Mission"
            description="Mobilize innovation and establish a stronghold for the brightest tech minds."
          />
          <AboutCard
            icon={Star}
            title="Vision"
            description="Lead the digital revolution through strategic collaboration and cutting-edge technologies."
          />
          <AboutCard
            icon={Award}
            title="Approach"
            description="Create a dynamic war room of mentors, tactical networking, and hands-on combat training."
          />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto font-robert-regular mb-3 sm:mb-4 text-reveal">
            Hack4Brahma: Northeast India's Ultimate Code Battleground
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed text-reveal font-robert-regular">
            We are more than a hackathon—we are a strategic ecosystem where
            elite tech warriors deploy their skills, strategize with allies, and
            execute high-stakes missions to conquer universal challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;