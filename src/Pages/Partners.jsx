import React, { useEffect, useState } from "react";
import {
  Shield,
  Star,
  Medal,
  Camera,
} from "lucide-react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";
import Marquee from "../Components/Marquee.jsx";

function Partners() {
  const [activeSection, setActiveSection] = useState("general");

  const partners = {
    general: {
      title: "GENERAL",
      description: "Supreme Command Level Partners",
      icon: Shield,
      partners: [
        {
          name: "Orkes",
          // logo: "/img/Orkes.png",
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
          name: "Pathway Framework",
          logo: "/img/pathway.png",
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
          logo: "/img/GitHub.png",
          rank: "Gold",
        },
        {
          name: "Silver Solutions",
          logo: "/img/3.png",
          rank: "Silver",
        },
        {
          name: "Bronze Brigade",
          logo: "/img/4.png",
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
          logo: "/img/eventopia.png",
          rank: "Media",
        },
        {
          name: "NexFellow",
          logo: "/img/nexfellow2.jpg",
          rank: "Media",
        },
      ],
    },
    inkind: {
      title: "In-Kind Partners",
      description: "Supporting our mission in-kind",
      icon: Camera,
      partners: [
        { name: "InterviewBuddy", logo: "/img/g29.png", rank: "InKind" },
        { name: "interview-cake", logo: "/img/interview-cake.png", rank: "InKind" },
        { name: "GiveMyCertificate", logo: "/img/GMC LogoS.png", rank: "InKind" },
        { name: "wolfram", logo: "/img/wolfram.png", rank: "InKind" },
        { name: "xyz", logo: "/img/xyz.svg", rank: "InKind" },
      ],
    },
    ecosystem: {
      title: "Ecosystem",
      description: "Ecosystem Partners",
      icon: Shield,
      partners: [
        { name: "WIP", logo: "/img/WIP-logo .png", rank: "Ecosystem" },
      ],
    },
  };

  useEffect(() => {
    const militaryKeys = Object.keys(partners).filter((k) => k !== "media");
    const currentIndex = militaryKeys.indexOf(activeSection);
    const nextIndex =
      currentIndex === militaryKeys.length - 1 ? 0 : currentIndex + 1;
    const interval = setInterval(() => {
      setActiveSection(militaryKeys[nextIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSection]);

  const getCardSizeClass = (tierKey) => {
    return "w-full max-w-[320px] h-[320px]";
  };

  const getGridColsForTier = (key, count) => {
    if (key === "major") return "grid-cols-1 md:grid-cols-3";
    if (key === "media")
      return count <= 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    if (key === "inkind") return "";
    if (key === "ecosystem") return "grid-cols-1 justify-center";
    if (key === "colonel" || key === "general") return "grid-cols-1";
    return "grid-cols-1 md:grid-cols-3";
  };

  return (
    <div className="relative min-h-screen text-gray-100 overflow-hidden">
      <div className="relative z-10">
        <div className="relative flex flex-col items-center container mx-auto px-4 text-[#198f51] mb-10">
          <AnimatedTitle
            title=" <b>Sponsors</b>"
            containerClass="mt-8 !text-black text-center reveal-element "
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
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

          <div className="space-y-24">
            {Object.entries(partners).map(([key, tier]) => (
              <div
                key={key}
                className={`relative rounded-lg p-8 transition-all duration-500`}
              >
                {/* Tier Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-green-600 to-green-900 rounded-full mb-4">
                    <tier.icon className="w-8 h-8" />
                  </div>
                  {tier.description && (
                    <p className="text-green-500">{tier.description}</p>
                  )}
                </div>

                {/* Partners */}
                <div
                  className={`grid gap-8 justify-items-center ${getGridColsForTier(
                    key,
                    tier.partners.length
                  )}`}
                >
                  {tier.partners.map((partner, idx) => (
                    <div
                      key={partner.name || partner.logo || idx}
                      className={`relative group ${getCardSizeClass(key)}`}
                    >
                      <div className="relative p-5 border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center h-full">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500" />

                        {/* ✅ Bold loading text with bounce animation (only for DIAMOND) */}
                        {key === "general" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-green-500 font-extrabold text-xl animate-bounce">
                              LOADING...
                            </span>
                          </div>
                        )}

                        <div className="absolute top-4 right-4 px-3 py-1 bg-green-900/80 rounded-full border border-green-500/50 text-xs font-mono">
                          {partner.rank}
                        </div>

                        <img
                          src={partner.logo}
                          alt=""
                          className="max-h-[65%] max-w-full object-contain mb-0 rounded transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />

                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
