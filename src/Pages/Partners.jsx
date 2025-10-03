import React, { useEffect, useState } from "react";
import {
  Shield,
  Star,
  Medal,
  Camera,
  Phone,
  Gamepad, // Added import for Gamepad icon
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
          name: "Orkes",
          logo: "/img/Orkes.png",
          rank: "Diamond",
        },
      ],
    },
    // colonel: {
    //   title: "COLONEL",
    //   description: "Elite Tactical Division",
    //   icon: Star,
    //   partners: [
    //     {
    //       name: "Pathway Framework",
    //       logo: "/img/pathway.png",
    //       rank: "Platinum",
    //     },
    //   ],
    // },
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
        // add more as needed
      ],
    },
    inkind: {
      title: "In-Kind Partners",
      description: "Supporting our mission in-kind",
      icon: Camera, // reuse Camera icon for visual parity
      partners: [
        { name: "InterviewBuddy", logo: "/img/g29.png", rank: "InKind" },
        { name: "interview-cake", logo: "/img/interview-cake.png", rank: "InKind" },
        { name: "GiveMyCertificate", logo: "/img/GMC LogoS.png", rank: "InKind" },
        { name: "wolfram", logo: "/img/wolfram.png", rank: "InKind" },
        { name: "xyz", logo: "/img/xyz.svg", rank: "InKind" },
      ],
    },
    Gaming: {
      title: "Gaming Partners",
      description: "Broadcasting our mission to the world!",
      icon: Gamepad,
      partners: [
        {
          name: "Valorant",
          logo: "/img/V.png",
          rank: "Gaming",
        },
        {
          name: "FreeFire",
          logo: "/img/FF.png",
          rank: "Gaming",
        },
        // add more as needed
      ],
    },
    ecosystem: {
      title: "Ecosystem",
      description: "Ecosystem Partners",
      icon: Shield,
      partners: [{ name: "WIP", logo: "/img/WIP-logo .png", rank: "Ecosystem" }],
    },
  };

  // Cycle only military partners, not media
  useEffect(() => {
    const militaryKeys = Object.keys(partners).filter((k) => k !== "media");
    const interval = setInterval(() => {
      setActiveSection((currentSection) => {
        const currentIndex = militaryKeys.indexOf(currentSection);
        const nextIndex = currentIndex === militaryKeys.length - 1 ? 0 : currentIndex + 1;
        return militaryKeys[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [partners]);

  // helper to pick card sizing based on tier key (keeps diamond/platinum visually large)
  const getCardSizeClass = (tierKey) => {
    switch (tierKey) {
      case "general":
      case "colonel":
        // keep Diamond & Platinum visually big
        return "w-full max-w-[320px] h-[320px]";
      case "major":
        // gold / silver / bronze large
        return "w-full max-w-[320px] h-[320px]";
      case "media":
        // media cards moderate
        return "w-full max-w-[320px] h-[320px]";
      case "inkind":
        // in-kind compact boxes
        return "w-full max-w-[320px] h-[320px]";
      case "ecosystem":
        // ecosystem now same size as others
        return "w-full max-w-[320px] h-[320px]";
      default:
        return "w-full max-w-[320px] h-[320px]";
    }
  };

  // grid column helper for partner lists (kept for non-inkind tiers)
  const getGridColsForTier = (key, count) => {
    if (key === "major") return "grid-cols-1 md:grid-cols-3";
    if (key === "media")
      return count <= 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    if (key === "inkind") return "";
    if (key === "ecosystem") return "grid-cols-1 justify-center"; // center single ecosystem logo
    if (key === "colonel" || key === "general") return "grid-cols-1";
    return "grid-cols-1 md:grid-cols-2";
  };

  return (
    <div className="relative min-h-screen text-gray-100 overflow-hidden">
      {/* Uncomment DottedBg wrapper if needed */}
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
              Elite organizations united under our command, supporting the advancement of military
              technology and innovation
            </p>
          </div>

          {/* Partners Grid */}
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
                  {/* Uncomment if you want to show title */}
                  {/* {tier.title && (
                    <h2 className="text-3xl font-bold tracking-wider mb-2">{tier.title}</h2>
                  )} */}
                  {tier.description && <p className="text-green-500">{tier.description}</p>}
                </div>

                {/* Partners */}

                {/* InKind: render first row (3) centered, second row (2) centered */}
                {key === "inkind" ? (
                  <div className="space-y-6">
                    {/* first row: top 3 */}
                    <div className="flex flex-wrap justify-center gap-8">
                      {tier.partners.slice(0, 3).map((partner, idx) => (
                        <div
                          key={partner.name || partner.logo || idx}
                          className={`relative group ${getCardSizeClass(key)}`}
                        >
                          <div className="relative p-5 border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center h-full">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500" />

                            {/* Rank Badge remains visible */}
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

                            {/* Scanning Line Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* second row: bottom 2 centered (symmetry) */}
                    <div className="flex flex-wrap justify-center gap-8">
                      {tier.partners.slice(3).map((partner, idx) => (
                        <div
                          key={partner.name || partner.logo || idx + 3}
                          className={`relative group ${getCardSizeClass(key)}`}
                        >
                          <div className="relative p-5 border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center h-full">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500" />

                            {/* Rank Badge remains visible */}
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

                            {/* Scanning Line Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
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

                          {/* Rank Badge remains visible */}
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

                          {/* Scanning Line Effect */}
                          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Uncomment if Marquee or Footer needed */}
        {/* <div><Marquee /></div> */}
        {/* <Footer /> */}
      </div>
      {/* </DottedBg> */}
    </div>
  );
}

export default Partners;
