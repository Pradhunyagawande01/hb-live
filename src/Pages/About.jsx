import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Target, Award } from "lucide-react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";
import DottedBg from "../Components/DottedBg";

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
    <div className="relative w-full">
     
      <div
        ref={sectionRef}
        id="about"
        className="relative w-full sm:py-16 px-4 sm:pl-20
          will-change-transform"
      >
        <div className="relative w-full max-w-7xl overflow-hidden">
          <div className="relative flex flex-col items-center mx-auto text-[#198f51] sm:mb-10">
            <AnimatedTitle
              title="<b>About</b> <b>us</b> "
              containerClass="sm:mt-8 !text-black text-center reveal-element"
            />
          </div>

          <div className=" mx-auto text-center px-4 text-white/70 text-2xl mb-24">
            <p>
              Hack4Brahma is Northeast India’s biggest hackathon, supported by
              Startup India and SAYUJ, powered by Orkes, hosted at Assam down town University (ADTU) Guwahati
              on 10th–11th October 2025. Students will collaborate, build
              real-world tech projects, and connect with industry experts,
              immersing themselves in a dynamic community of innovators.
              Alongside hands-on coding and mentorship, participants will enjoy
              workshops, fun activities, and the unique opportunity to launch
              impactful ideas with lasting community value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
