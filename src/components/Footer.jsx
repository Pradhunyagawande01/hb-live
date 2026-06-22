// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  const socials = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      label: "LINKEDIN.COM/HACK4BRAHMA",
      href: "https://linkedin.com/hack4brahma",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      label: "INSTAGRAM.COM/HACK4BRAHMA",
      href: "https://instagram.com/hack4brahma",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: "HACK4BRAHMA@GMAIL.COM",
      href: "mailto:hack4brahma@gmail.com",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      label: "DISCORD.COM/HACK4BRAHMA",
      href: "https://discord.com/hack4brahma",
    },
  ];

  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10 w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">

        {/* Logo Row */}
        <div className="flex items-center gap-3 mb-10 md:mb-12">
          {/* Logo Circle */}
          <div className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center shrink-0">
            <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center">
              <div className="w-2 h-2 bg-white/80 rounded-full" />
            </div>
          </div>

          {/* Brand Name */}
          <span className="text-white font-black uppercase tracking-[4px] text-lg md:text-xl title">
            HACK4BRAHMA.
          </span>
        </div>

        {/* Bottom Content Row */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 md:gap-32">

          {/* Drop a Hi */}
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-[11px] uppercase tracking-[2px] font-medium subtitle">
              DROP A HI
            </p>
            <a
              href="mailto:hack4brahma@gmail.com"
              className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-200 tracking-wide text"
            >
              hack4brahma.com
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p className="text-white/40 text-[11px] uppercase tracking-[2px] font-medium subtitle">
              SOCIALS
            </p>

            <div className="flex flex-col gap-3 text">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  {/* Icon Box */}
                  <span className="w-7 h-7 border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors duration-200 shrink-0">
                    {social.icon}
                  </span>

                  {/* Label */}
                  <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[1.5px] font-medium">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-white/10">
          <p className="text-white/30 text-[11px] uppercase tracking-[2px] text-center text">
            © 2025 HACK4BRAHMA. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}