import React from "react";
import LinkedInCard from "./LinkedInCard";
import BigPhoto from "./BigPhoto";
import CalloutBox from "./CalloutBox";
import { OLIVE } from "./constants";

export default function LinkedInWallSection() {
  const cards = [
    {
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
      name: "RISHU K SINGH",
      text: "NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST",
      className: "lg:col-span-4 lg:col-start-1 lg:row-start-1"
    },
    {
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
      name: "SUMIT",
      text: "NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST",
      className: "lg:col-span-4 lg:col-start-5 lg:row-start-1"
    },
    {
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      name: "SUMIT",
      text: "NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      className: "lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-2"
    },
    {
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80",
      name: "SUMIT",
      text: "NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      className: "lg:col-span-6 lg:col-start-7 lg:row-start-3"
    }
  ];

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

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-16 items-start">
          {/* Cards */}
          {cards.map((card, index) => (
            <LinkedInCard key={index} {...card} />
          ))}

          {/* Big Photo */}
          <BigPhoto
            className="lg:col-span-5 lg:col-start-1 lg:row-start-2"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
          />

          {/* Callout */}
          <CalloutBox
            className="lg:col-span-4 lg:col-start-6 lg:row-start-2"
            text="NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON  NORTHEAST INDIA'S BIGGEST 24-HOUR HACKATHON"
          />
        </div>
      </div>
    </section>
  );
}