// src/components/LinkedInWallSection.jsx
import React from "react";

const OLIVE = "#3B4421";

function LinkedInBadge() {
  return (
    <div className="h-10 w-10 shrink-0 rounded-[4px] bg-white/10 flex items-center justify-center">
      <div className="h-8 w-8 rounded-[3px] bg-white flex items-center justify-center">
        <span className="text-[18px] font-black leading-none text-[#2b2b2b]">
          in
        </span>
      </div>
    </div>
  );
}

function CutCornerBox({ className = "", children }) {
  return (
    <div
      className={[
        "border border-black/50 bg-white",
        // bottom-left cut corner
        "[clip-path:polygon(0_0,100%_0,100%_100%,44px_100%,0_calc(100%-44px))]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function LinkedInCard({
  avatar,
  name,
  text,
  image, // optional
  className = "",
}) {
  return (
    <div className={["flex items-start gap-4", className].join(" ")}>
      <div className="h-[86px] w-[86px] shrink-0 border border-black/50 bg-neutral-200 overflow-hidden">
        <img src={avatar} alt={name} className="h-full w-full object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        {/* header bar */}
        <div
          className="h-12 w-full flex items-center gap-4 px-4"
          style={{ backgroundColor: OLIVE }}
        >
          <LinkedInBadge />
          <div className="text-white uppercase tracking-wide subtitle text-[8px] leading-none font-medium ">
            {name}
          </div>
        </div>

        {/* body */}
        <CutCornerBox className="mt-4">
          <div className="p-5  leading-relaxed uppercase tracking-wide text-black text">
            {text}
          </div>

          {image ? (
            <div className="px-5 pb-5">
              <div className="border border-black/40 overflow-hidden bg-neutral-200">
                <img
                  src={image}
                  alt=""
                  className="h-[180px] w-full object-cover"
                />
              </div>
            </div>
          ) : null}
        </CutCornerBox>
      </div>
    </div>
  );
}

function BigPhoto({ src, className = "" }) {
  return (
    <div className={className}>
      <div className="border border-black/50 bg-neutral-200 overflow-hidden">
        <img src={src} alt="" className="w-full h-[260px] object-cover" />
      </div>
    </div>
  );
}

function CalloutBox({ text, className = "" }) {
  return (
    <div className={["relative", className].join(" ")}>
      <CutCornerBox className="w-full">
        <div className="p-6 text leading-snug uppercase tracking-wide text-black">
          {text}
        </div>
      </CutCornerBox>

      {/* little square + connector line (bottom-left) */}
      <div className="absolute -left-[78px] bottom-[18px] flex items-center">
        <div className="h-[2px] w-[64px] bg-black/80" />
        <div className="ml-3 h-7 w-7 border border-black/70 bg-white flex items-center justify-center">
          <div className="h-3 w-3 bg-black" />
        </div>
      </div>
    </div>
  );
}

export default function LinkedInWallSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1500px] px-6 py-20">
        {/* Heading */}
        <h2
          className="font-extrabold uppercase tracking-wide leading-[0.95] text-[30px] md:text-[20px] lg:text-[50px] title"
          style={{ color: OLIVE }}
        >
          @HACK4BRAHMA
        </h2>
        <div className="mt-3 text-[#777] uppercase tracking-wide text-[20px] md:text-[10px] lg:text-[20px] text">
          LINKEDIN.COM 
        </div>

        {/* Collage grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-16 items-start">
          {/* Top row cards */}
          <LinkedInCard
            className="lg:col-span-4 lg:col-start-1 lg:row-start-1"
            avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
            name="RISHU K SINGH"
            text="NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST"
          />

          <LinkedInCard
            className="lg:col-span-4 lg:col-start-5 lg:row-start-1"
            avatar="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
            name="SUMIT"
            text="NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST"
          />

          {/* Right card (taller, with image inside) */}
          <LinkedInCard
            className="lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-2"
            avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
            name="SUMIT"
            text="NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST"
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          />

          {/* Bottom-left big photo */}
          <BigPhoto
            className="lg:col-span-5 lg:col-start-1 lg:row-start-2"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
          />

          {/* Middle callout box */}
          <CalloutBox
            className="lg:col-span-4 lg:col-start-6 lg:row-start-2"
            text="NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON"
          />

          {/* Bottom-center/right card (with image) */}
          <LinkedInCard
            className="lg:col-span-6 lg:col-start-7 lg:row-start-3"
            avatar="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80"
            name="SUMIT"
            text="NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA’S BIGGEST"
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          />
        </div>
      </div>
    </section>
  );
}