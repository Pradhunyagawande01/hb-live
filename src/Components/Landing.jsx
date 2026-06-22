// src/components/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    // Main Wrapper - Full height, hides overflow, relative for absolute children
    <section className="relative w-full h-screen  overflow-hidden bg-[#f4f4f4] font-sans">
      {/* 
        ========================================
        1. PARALLAX BACKGROUND LAYER
        Replace URL with your light map/grid background
        bg-fixed creates the parallax effect when scrolling
        ========================================
      */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ backgroundImage: `url('../landingbg.png')` }}
      />

      {/* 
        ========================================
        2. CENTER MAP LAYER (Midground)
        ========================================
      */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-3xl aspect-video flex items-center justify-center">
          {/* REPLACE THIS DIV WITH YOUR MAP IMAGE TAG */}
          <div className=" bg-black/20   flex items-center justify-center ">
            <div
              className="absolute inset-0 bg-contain bg-center opacity-80 bg-no-repeat"
              style={{ backgroundImage: `url('../landingmap.png')` }}
            />
          </div>

          {/* Map Callout 1 (Top Right) */}
          <div className="absolute top-[20%] right-[-10%] flex items-end">
            <div className="w-3 h-3 bg-[#2a2a2a] border border-white" />
            <div className="w-16 border-b border-[#2a2a2a] mb-1 ml-1" />
            <div className="w-24 border-b border-[#2a2a2a] mb-1 -rotate-12 origin-bottom-left" />
            <p className="text-[10px] uppercase leading-tight ml-2 text-[#353535] max-w-[170px] text">
              Northeast India's Biggest 24-Hour Hackathon
            </p>
          </div>

          {/* Map Callout 2 (Left) */}
          <div className="absolute top-[40%] left-[9%] flex items-end flex-row-reverse">
            <div className="w-3 h-3 bg-[#2a2a2a] border border-white" />
            <div className="w-12 border-b border-[#2a2a2a] mb-1 mr-1" />
            <div className="w-16 border-b border-[#2a2a2a] mb-1 rotate-12 origin-bottom-right" />
            <p className="text-[10px] uppercase leading-tight mr-2 text-[#2a2a2a]  text">
              Guwahati, Assam
            </p>
          </div>
        </div>
      </div>

      {/* 
        ========================================
        3. FOREGROUND UI LAYER (Corners)
        ========================================
      */}
      <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto p-8 md:p-12 pointer-events-none">
        {/* TOP LEFT: Main Title */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-[#2c2f25] leading-[0.85] tracking-tighter title">
            Hack 4<br />
            Brahma.
          </h1>
        </div>

        {/* TOP RIGHT: Logo Badge */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          {/* REPLACE WITH YOUR LOGO IMAGE */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[#2c2f25] flex items-center justify-center pointer-events-auto">
            {/* <span className="text-xs font-bold text-center">H4B<br/>Logo</span> */}
            <img
              src="../Logo.png"
              alt="Hack4Brahma Logo"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
        </div>

        {/* BOTTOM LEFT: Season & Decor */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          {/* Decorative slanted lines */}
          <div className="flex gap-1 mb-4">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-4 bg-[#2c2f25] transform -skew-x-[30deg]"
              />
            ))}
            <div className="w-24 border-b-2 border-[#2c2f25] self-end ml-2 transform -translate-y-0.5" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase text-[#2c2f25] tracking-wide title">
            Season 2.
          </h2>
        </div>

        {/* BOTTOM RIGHT: Info Box */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 max-w-sm pointer-events-auto">
          {/* Box Header */}
          <div className="bg-[#2a2d24] text-white p-3 border border-[#2a2d24]">
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider subtitle">
              Northeast India's Biggest 24-Hour Hackathon
            </h3>
          </div>

          {/* Box Content */}
          <div className="bg-white/70 backdrop-blur-md border border-t-0 border-[#2a2d24] p-4">
            <ul className="space-y-3 text">
              {[
                "1st Major League Hacking Event of Northeast India",
                "Supported by DPIIT Startup India",
                "Supported by SAVUJ",
                "Highest Number of Participants Registered",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#2a2d24] text-sm leading-none mt-0.5">
                    →
                  </span>
                  <span className="text-[10px] md:text-xs font-bold uppercase text-[#2a2d24] tracking-wide">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
