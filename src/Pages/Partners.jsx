import React, { useState } from "react";
import {
  Shield,
  Star,
  Medal,
  Camera,
  Gamepad,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import AnimatedTitle from "../Components/AnimatedTitle";

function PastSponsors() {
  const [expandedTier, setExpandedTier] = useState(null);

  const toggleTier = (key) => {
    setExpandedTier((prev) => (prev === key ? null : key));
  };

  // Past event data
  const eventInfo = {
    name: "Hack4Brahma",
    date: "2025",
    tagline:
      "We extend our heartfelt gratitude to all the sponsors who made our event a grand success.",
  };

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
      icon: Award,
      partners: [
        { name: "InterviewBuddy", logo: "/img/g29.png", rank: "InKind" },
        {
          name: "interview-cake",
          logo: "/img/interview-cake.png",
          rank: "InKind",
        },
        {
          name: "GiveMyCertificate",
          logo: "/img/GMC LogoS.png",
          rank: "InKind",
        },
        { name: "wolfram", logo: "/img/wolfram.png", rank: "InKind" },
        { name: "xyz", logo: "/img/xyz.svg", rank: "InKind" },
      ],
    },
    Gaming: {
      title: "Gaming Partners",
      description: "Our gaming allies",
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

  // Flatten all partners for the logo wall
  const allPartners = Object.values(partners).flatMap((tier) => tier.partners);

  const getRankColor = (rank) => {
    switch (rank) {
      case "Diamond":
        return "from-cyan-400 to-blue-500";
      case "Platinum":
        return "from-gray-300 to-gray-500";
      case "Gold":
        return "from-yellow-400 to-amber-600";
      case "Silver":
        return "from-gray-300 to-gray-400";
      case "Bronze":
        return "from-orange-400 to-orange-700";
      default:
        return "from-green-400 to-green-600";
    }
  };

  const getRankBorder = (rank) => {
    switch (rank) {
      case "Diamond":
        return "border-cyan-500/30";
      case "Platinum":
        return "border-gray-400/30";
      case "Gold":
        return "border-yellow-500/30";
      case "Silver":
        return "border-gray-300/30";
      case "Bronze":
        return "border-orange-500/30";
      default:
        return "border-green-500/30";
    }
  };

  return (
    <div className="relative min-h-screen text-gray-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative flex flex-col items-center container mx-auto px-4 pt-8 pb-4">
          <AnimatedTitle
            title="<b>Past Sponsors</b>"
            containerClass="mt-8 !text-black text-center reveal-element"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Event Badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-900/20 border border-green-500/30 rounded-full mb-6 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono text-sm tracking-wider">
                {eventInfo.name} • {eventInfo.date}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-500/50" />
              <Star className="w-5 h-5 text-green-500" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-500/50" />
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {eventInfo.tagline}
            </p>
          </div>

          {/* Logo Wall - Quick overview of all past sponsors */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gray-700" />
              <h3 className="text-sm font-mono text-gray-500 tracking-[0.3em] uppercase">
                All Partners
              </h3>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gray-700" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 p-36 bg-gray-900/30 rounded-2xl border border-gray-800/50 backdrop-blur-sm">
              {allPartners.map((partner, idx) => (
                <div
                  key={`wall-${partner.name}-${idx}`}
                  className="group relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-3 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-green-500/40 hover:bg-gray-800/70 transition-all duration-300 cursor-default"
                  title={partner.name}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Tier Sections */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gray-700" />
              <h3 className="text-sm font-mono text-gray-500 tracking-[0.3em] uppercase">
                By Category
              </h3>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gray-700" />
            </div>

            {Object.entries(partners).map(([key, tier]) => {
              const isExpanded = expandedTier === key;
              const TierIcon = tier.icon;

              return (
                <div
                  key={key}
                  className="rounded-xl border border-gray-800/60 bg-gray-900/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-gray-700/60"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleTier(key)}
                    className="w-full flex items-center justify-between px-6 py-5 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-gradient-to-br from-green-600/20 to-green-900/30 rounded-lg border border-green-500/20 group-hover:border-green-500/40 transition-colors">
                        <TierIcon className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold tracking-wide text-gray-200 group-hover:text-white transition-colors">
                          {tier.title}
                        </h3>
                        <p className="text-sm text-gray-500">{tier.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-gray-600 bg-gray-800/60 px-3 py-1 rounded-full">
                        {tier.partners.length}{" "}
                        {tier.partners.length === 1 ? "partner" : "partners"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="h-px w-full bg-gray-800/80 mb-6" />
                      <div className="flex flex-wrap justify-center gap-6">
                        {tier.partners.map((partner, idx) => (
                          <div
                            key={`${partner.name}-${idx}`}
                            className={`relative group/card w-full max-w-[260px] h-[220px] ${getRankBorder(
                              partner.rank
                            )}`}
                          >
                            <div className="relative h-full p-5 border border-gray-700/50 rounded-xl overflow-hidden flex flex-col items-center justify-center bg-gray-800/20 hover:bg-gray-800/40 transition-all duration-300">
                              {/* Corner Accents */}
                              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-green-500/40" />
                              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-green-500/40" />
                              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-green-500/40" />
                              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-green-500/40" />

                              {/* Rank Badge */}
                              <div
                                className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-white bg-gradient-to-r ${getRankColor(
                                  partner.rank
                                )} shadow-lg`}
                              >
                                {partner.rank}
                              </div>

                              {/* Past Badge */}
                              {/* <div className="absolute top-3 left-3 px-2 py-0.5 bg-gray-700/60 rounded-full text-[10px] font-mono text-gray-400 border border-gray-600/30">
                                {eventInfo.date}
                              </div> */}

                              {/* Logo */}
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-[55%] max-w-[80%] object-contain rounded transition-all duration-300 filter grayscale-[30%] group-hover/card:grayscale-0 group-hover/card:scale-105"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                }}
                              />

                              {/* Partner Name */}
                              <p className="mt-3 text-sm text-gray-400 font-medium tracking-wide group-hover/card:text-gray-200 transition-colors">
                                {partner.name}
                              </p>

                              {/* Scanning Line Effect */}
                              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-green-500/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        
          
        </div>
      </div>
    </div>
  );
}

export default PastSponsors;