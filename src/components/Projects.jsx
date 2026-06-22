// src/components/ProjectsSection.jsx
import React from "react";

function ProjectCard({ img, title, subtitle, dark = false }) {
  return (
    <div>
      <div
        className={[
          "w-full border border-black/20",
          "h-[320px] md:h-[360px] lg:h-[420px]",
          "flex items-center justify-center overflow-hidden",
          dark ? "bg-[#3B4421]" : "bg-white",
        ].join(" ")}
      >
        <img
          src={img}
          alt={title}
          className="max-h-[55%] max-w-[55%] object-contain"
          loading="lazy"
        />
      </div>

      <div className="mt-5">
        <div className="text-[#3B4421] uppercase tracking-wide leading-none title">
          {title}
        </div>
        <div className="mt-2 text-[#8A8A8A] uppercase tracking-wide text">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1500px] px-6 ">
        {/* Heading */}
        <div>
          <h2 className="text-[#3B4421] font-extrabold title uppercase leading-[0.95] tracking-wide text-[30px] md:text-[20px] lg:text-[50px]">
            PROJECTS
          </h2>
          <p className="mt-4 text-black uppercase tracking-wide text-[20px] md:text-[10px] lg:text-[20px] text">
            FROM INNOVATION TO GLOBAL RECOGNITION
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          <ProjectCard
            img="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            title="MICROSOFT"
            subtitle="SERVICE BASED PLATFORM"
          />
          <ProjectCard
            img="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            title="GOOGLE"
            subtitle="SERVICE BASED PLATFORM"
            dark
          />
          <ProjectCard
            img="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            title="FACEBOOK"
            subtitle="SERVICE BASED PLATFORM"
          />
        </div>

        {/* Button */}
        <div className="mt-16">
          <a
            href="#projects"
            className="bg-[#3B4421] text-white uppercase tracking-wider px-10 py-5 text-[16px] inline-flex items-center justify-center
                       text [clip-path:polygon(18px_0,100%_0,100%_100%,0_100%,0_18px)]"
          >
            VIEW&nbsp;&nbsp;OUR&nbsp;PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
}