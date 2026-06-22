// src/components/CtaSection.jsx
import React from "react";

const OLIVE = "#3B4421";

export default function CtaSection() {
  return (
    <section className="relative min-h-[100vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // img="../Buttom.png"
        >
     <img src="../Buttom1.jpg" alt="Background" /> 
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-16 md:pb-24 w-full">
        <div className="flex flex-col items-center">
          {/* SUBMIT Button */}
          <a
            href="#register"
            className="bg-white hover:bg-gray-100 transition-colors text-black font-bold uppercase tracking-[3px] text-xl px-16 py-5 mb-8 inline-block text
                       [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_20px)] shadow-2xl"
          >
            SUBMIT
          </a>

          {/* Main Headline */}
          <h2 className="text-white text-center font-black uppercase  leading-[0.92] text-[42px] md:text-[58px] lg:text-[68px] xl:text-[78px] title ">
            BE PART OF HACK4BRAHMA JOURNEY
          </h2>

          {/* <div className="h-1 w-24 bg-white/60 mt-8 rounded" /> */}
        </div>
      </div>
    </section>
  );
}
