import React, { useEffect, useState } from 'react';
import { Shield, Star, Medal, Target, Crosshair, Award, Sword } from 'lucide-react';
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from '../Components/Footer';

function Partners() {
  const [activeSection, setActiveSection] = useState(null);

  // Partner data with military ranks
  const partners = {
    general: {
      // title: "GENERAL",
      // description: "Supreme Command Level Partners",
      icon: Shield,
      partners: [
        {
          name: "Diamond",
          logo: "img/1.png",
          // description: "Strategic Operations Command",
          // rank: "5-Star General"
        },
        
      ]
    },
    colonel: {
      // title: "COLONEL",
      // description: "Elite Tactical Division",
      icon: Star,
      partners: [
        // {
        //   name: "",
        //   logo: "img/colenal.png",
        //   // description: "Advanced Combat Solutions",
        //   // rank: "Colonel"
        // },
        {
          name: "Platinum",
          logo: "img/2.png",
          // description: "Tactical Defense Unit",
          // rank: "Lieutenant Colonel"
        }
      ]
    },
    major: {
      icon: Medal,
      partners: [
        {
          name: "Gold",
          logo: "img/3.png",
          description: "Specialized Operations",
          rank: "Major"
        },
        {
          name: "Silver",
          logo: "img/4.png",
          description: "Tactical Intelligence",
          rank: "Major"
        },
        {
          name: "Bronze",
          logo: "img/5.png",
          description: "Combat Systems",
          rank: "Major"
        }
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const sections = Object.keys(partners);
      const currentIndex = sections.indexOf(activeSection);
      const nextIndex = currentIndex === sections.length - 1 ? 0 : currentIndex + 1;
      setActiveSection(sections[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
    <div className="relative flex flex-col items-center container mx-auto px-4 text-[#198f51] mb-10">
          <AnimatedTitle
            title=" <b>Partners</b>"
            containerClass="mt-8 !text-black text-center reveal-element "
          />
        </div>
      {/* Background Radar Animation */}
      {/* <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-[800px] h-[800px]">
            <div className="absolute inset-0 border-2 border-green-500/10 rounded-full animate-ping" />
            <div className="absolute inset-0 border border-green-500/20 rounded-full" />
            <div 
              className="absolute w-full h-1 bg-gradient-to-r from-green-500/30 to-transparent origin-left"
              style={{
                animation: 'radar-sweep 4s linear infinite',
                transformOrigin: 'left center',
              }}
            />
          </div>
        </div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20">
           
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-12 bg-green-500/50" />
            <Star className="w-6 h-6 text-green-500" />
            <div className="h-px w-12 bg-green-500/50" />
          </div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Elite organizations united under our command, supporting the advancement of military technology and innovation
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
                <h2 className="text-3xl font-bold tracking-wider mb-2">{tier.title}</h2>
                <p className="text-green-500">{tier.description}</p>
              </div>

              {/* Partners */}
              <div className={`
                grid gap-8 justify-items-center
                ${key === 'general' ? 'grid-cols-1' : 
                  key === 'colonel' ? 'grid-cols-1 md:grid-cols-1' : 
                  'grid-cols-1 md:grid-cols-3'}
              `}>
                {tier.partners.map((partner) => (
                  <div 
                    key={partner.name}
                    className="relative w-full max-w-md group"
                  >
                     
                    <div className="relative p-6 border border-gray-700 rounded-lg overflow-hidden h-[450px]">
                      {/* Military Corner Decorations */}
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
                        className="w-full h-49 object-cover mb-6 rounded transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                        <p className="text-gray-400">{partner.description}</p>
                      </div>
                      
                      {/* Scanning Line Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Military Footer Decoration */}
         
      </div>

       <Footer />
    </div>
  );
}

export default Partners;