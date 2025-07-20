import React, { useEffect, useState } from "react";
import {
  Shield,
  Star,
  Medal,
  Camera, // Use a different icon imported from lucide-react if Camera isn't present
} from "lucide-react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";
import Marquee from "../Components/Marquee.jsx";
import DottedBg from "../Components/DottedBg";

function Partners() {
  const [activeSection, setActiveSection] = useState("general");

  // Partner data with military and media partners
  const partners = {
    general: {
      title: "GENERAL",
      description: "Supreme Command Level Partners",
      icon: Shield,
      partners: [
        {
          name: "Diamond Corp",
          logo: "img/1.png",
          rank: "Diamond",
        },
      ],
    },
    colonel: {
      title: "COLONEL",
      description: "Elite Tactical Division",
      icon: Star,
      partners: [
        {
          name: "Platinum Inc",
          logo: "img/2.png",
          rank: "Platinum",
        },
      ],
    },
    major: {
      title: "MAJOR",
      description: "Specialized Support Units",
      icon: Medal,
      partners: [
        {
          name: "Gold Systems",
          logo: "img/3.png",
          rank: "Gold",
        },
        {
          name: "Silver Solutions",
          logo: "img/4.png",
          rank: "Silver",
        },
        {
          name: "Bronze Brigade",
          logo: "img/5.png",
          rank: "Bronze",
        },
      ],
    },
    media: {
      title: "Media Partners",
      description: "Broadcasting our mission to the world!",
      icon: Camera,
      partners: [
        {
          name: "Eventopia",
          logo: "img/eventopia.png",
          rank: "Media",
        },
        {
          name: "NexFellow",
          logo: "img/nexfellow2.jpg",
          rank: "Media",
        },
        // add more as needed
      ],
    },
  };

  // Cycle only military partners, not media
  useEffect(() => {
    const militaryKeys = Object.keys(partners).filter((k) => k !== "media");
    const currentIndex = militaryKeys.indexOf(activeSection);
    const nextIndex = currentIndex === militaryKeys.length - 1 ? 0 : currentIndex + 1;
    const interval = setInterval(() => {
      setActiveSection(militaryKeys[nextIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSection]); // only needs to update when activeSection changes

  return (
    <div className="relative min-h-screen text-gray-100 overflow-hidden">
      {/* Dotted background */}
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.25)"
        bgColor="black"
        dotSize={2}
        baseSpacing={30}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      >
        <div className="relative z-10">
          <div className="relative flex flex-col items-center container mx-auto px-4 text-[#198f51] mb-10">
            <AnimatedTitle
              title=" <b>Sponsors</b>"
              containerClass="mt-8 !text-black text-center reveal-element "
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="h-px w-12 bg-green-500/50" />
                <Star className="w-6 h-6 text-green-500" />
                <div className="h-px w-12 bg-green-500/50" />
              </div>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Elite organizations united under our command, supporting the
                advancement of military technology and innovation
              </p>
            </div>

            {/* Partners Grid */}
            <div className="space-y-24">
              {Object.entries(partners).map(([key, tier]) => (
                <div
                  key={key}
                  className={`
                    relative rounded-lg p-8
                    transition-all duration-500
                  `}
                >
                  {/* Tier Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-green-600 to-green-900 rounded-full mb-4">
                      <tier.icon className="w-8 h-8" />
                    </div>
                    {tier.title && (
                      <h2 className="text-3xl font-bold tracking-wider mb-2">
                        {tier.title}
                      </h2>
                    )}
                    {tier.description && (
                      <p className="text-green-500">{tier.description}</p>
                    )}
                  </div>

                  {/* Partners */}
                  <div
                    className={`
                      grid gap-8 justify-items-center
                      ${
                        key === "general"
                          ? "grid-cols-1"
                          : key === "colonel"
                          ? "grid-cols-1 md:grid-cols-1"
                          : key === "media"
                          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
                          : "grid-cols-1 md:grid-cols-3"
                      }
                    `}
                  >
                    {tier.partners.map((partner, idx) => (
                      <div
                        key={partner.name || partner.logo || idx}
                        className="relative w-full max-w-md group"
                      >
                        <div className="relative p-6 border border-gray-700 rounded-lg overflow-hidden h-[400px] align-middle flex items-center justify-center">
                          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500" />
                          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500" />
                          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500" />
                          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500" />

                          {/* Rank Badge */}
                          <div className="absolute top-4 right-4 px-3 py-1 bg-green-900/80 rounded-full border border-green-500/50 text-xs font-mono">
                            {partner.rank}
                          </div>

                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full object-cover mb-6 rounded transition-transform duration-300 group-hover:scale-105"
                          />

                          {/* Scanning Line Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* You can enable this if needed */}
          {/* <div>
            <Marquee />
          </div> */}
          <Footer />
        </div>
      </DottedBg>
    </div>
  );
}

export default Partners;
