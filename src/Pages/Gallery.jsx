"use client";

import { useEffect, useState } from "react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";
import DottedBg from "../Components/DottedBg";

export default function Gallery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  /**
   * Utility wrapper that adds pixel‑style green/white corner borders
   */
  const CornerBorderWrapper = ({ children }) => (
    <div className="relative">
      <div className="relative p-1 rounded-lg overflow-hidden border border-red">
        {children}
        {/* green outer corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 z-20" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500 z-20" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500 z-20" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500 z-20" />
        {/* white inner corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white z-10" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white z-10" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white z-10" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white z-10" />
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen text-white p-2 sm:p-4 overflow-hidden">
      {/* dotted background layer */}
      <DottedBg
        dotColor="rgba(255,255,255,.25)"
        bgColor="black"
        dotSize={2}
        baseSpacing={30}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      >
        <div className="relative z-10">
          {/* page title */}
          <div className="text-center mb-6 sm:mb-8 mt-2 sm:mt-4">
            <AnimatedTitle
              title="<b>Highlights</b>"
              containerClass="mt-4 sm:mt-8 !text-black text-center reveal-element"
            />
          </div>

          {/* ------------------ MOBILE LAYOUT ------------------ */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            <CornerBorderWrapper>
              <div className="bg-transparent h-48 sm:h-60">
                <img src="/img/img1.jpg" alt="Gallery image 1" className="w-full h-full object-cover rounded-md" />
              </div>
            </CornerBorderWrapper>

            <CornerBorderWrapper>
              <div className="bg-transparent h-48 sm:h-60">
                <img src="/img/img2.jpg" alt="Gallery image 2" className="w-full h-full object-cover rounded-md" />
              </div>
            </CornerBorderWrapper>

            {/* stats */}
            <div className="bg-transparent text-green-500 font-bold flex flex-col justify-center items-center py-4">
              <span className="text-5xl font-extrabold">500+</span>
              <span className="text-xl font-semibold mt-1">Hackers</span>
            </div>

            <CornerBorderWrapper>
              <div className="bg-transparent h-48 sm:h-60">
                <img src="/img/img3.jpg" alt="Gallery image 3" className="w-full h-full object-cover rounded-md" />
              </div>
            </CornerBorderWrapper>

            <div className="bg-transparent text-green-500 font-bold flex flex-col justify-center items-center py-4">
              <span className="text-5xl font-extrabold">24+</span>
              <span className="text-xl font-semibold mt-1">Hack Hours</span>
            </div>

            <CornerBorderWrapper>
              <div className="bg-transparent h-48 sm:h-60">
                <img src="/img/img4.jpg" alt="Gallery image 4" className="w-full h-full object-cover rounded-md" />
              </div>
            </CornerBorderWrapper>

            <CornerBorderWrapper>
              <div className="bg-transparent h-48 sm:h-60">
                <img src="/img/img5.jpg" alt="Gallery image 5" className="w-full h-full object-cover rounded-md" />
              </div>
            </CornerBorderWrapper>

            <div className="bg-transparent text-green-600 font-bold flex flex-col justify-center items-center py-4">
              <span className="text-5xl font-extrabold">50+</span>
              <span className="text-xl font-semibold mt-1">Partners</span>
            </div>

            <CornerBorderWrapper>
              <div className="bg-transparent h-48 sm:h-60">
                <img src="/img/img6.jpg" alt="Gallery image 6" className="w-full h-full object-cover rounded-md" />
              </div>
            </CornerBorderWrapper>

            <div className="bg-transparent text-green-500 font-bold flex flex-col justify-center items-center py-4">
              <span className="text-5xl font-extrabold">24+</span>
              <span className="text-xl font-semibold mt-1">Hack Hours</span>
            </div>

            <CornerBorderWrapper>
              <div className="bg-transparent h-48 sm:h-60">
                <img src="/img/game1.jpg" alt="Gallery game image" className="w-full h-full object-cover rounded-md" />
              </div>
            </CornerBorderWrapper>

            <CornerBorderWrapper>
              <div className="bg-transparent h-48 sm:h-60">
                <img src="/img/workshop1.jpg" alt="Gallery workshop image" className="w-full h-full object-cover rounded-md" />
              </div>
            </CornerBorderWrapper>

            <div className="bg-transparent text-green-600 font-bold flex flex-col justify-center items-center py-4">
              <span className="text-5xl font-extrabold">10+</span>
              <span className="text-xl font-semibold mt-1">Successful Events</span>
            </div>
          </div>

          {/* ------------------ DESKTOP LAYOUT ------------------ */}
          <div className="relative w-full mx-auto hidden md:block md:pl-24 px-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-5 md:gap-4">
              {/* card 1 */}
              <div className="md:col-span-5">
                <CornerBorderWrapper>
                  <img src="/img/img1.jpg" alt="Gallery image 1" className="w-full object-cover rounded-md h-60" />
                </CornerBorderWrapper>
              </div>

              {/* card 2 */}
              <div className="md:col-span-5 md:col-start-4 md:row-start-2">
                <CornerBorderWrapper>
                  <img src="/img/img2.jpg" alt="Gallery image 2" className="w-full object-cover rounded-md h-60" />
                </CornerBorderWrapper>
              </div>

              {/* card 3 */}
              <div className="md:col-span-5 md:col-start-7 md:row-start-3">
                <CornerBorderWrapper>
                  <img src="/img/img3.jpg" alt="Gallery image 3" className="w-full object-cover rounded-md h-60" />
                </CornerBorderWrapper>
              </div>

              {/* tall card */}
              <div className="md:col-span-3 md:row-span-3 md:col-start-9 md:row-start-1">
                <CornerBorderWrapper>
                  <img src="/img/img4.jpg" alt="Gallery image 4" className="w-full h-full object-cover rounded-md" />
                </CornerBorderWrapper>
              </div>

              {/* card 5 */}
              <div className="md:col-span-5 md:row-span-2 md:col-start-4 md:row-start-4">
                <CornerBorderWrapper>
                  <img src="/img/img5.jpg" alt="Gallery image 5" className="w-full object-cover rounded-md h-60" />
                </CornerBorderWrapper>
              </div>

              {/* tall card left */}
              <div className="md:col-span-3 md:row-span-3 md:col-start-1 md:row-start-3">
                <CornerBorderWrapper>
                  <img src="/img/img6.jpg" alt="Gallery image 6" className="w-full h-full object-cover rounded-md" />
                </CornerBorderWrapper>
              </div>

              {/* wide bottom-left game */}
              <div className="md:col-span-4 md:row-span-4 md:col-start-1 md:row-start-5">
                <CornerBorderWrapper>
                  <img src="/img/game1.jpg" alt="Gallery game image" className="w-full object-cover rounded-md h-60" />
                </CornerBorderWrapper>
              </div>

              {/* bottom‑right workshop */}
              <div className="md:col-span-5 md:row-span-2 md:col-start-7 md:row-start-5">
                <CornerBorderWrapper>
                  <img src="/img/workshop1.jpg" alt="Gallery workshop image" className="w-full  object-cover rounded-md h-60" />
                </CornerBorderWrapper>
              </div>

              {/* stats cluster */}
              <div className="md:col-span-3 md:col-start-6 md:row-start-1 flex flex-col justify-center items-center bg-transparent text-green-500 font-bold py-8">
                <span className="text-7xl font-extrabold">350+</span>
                <span className="text-xl font-semibold mt-1">Hackers</span>
              </div>

              <div className="md:col-span-3 md:col-start-1 md:row-start-2 flex flex-col justify-center items-center bg-transparent text-green-500 font-bold py-8">
                <span className="text-7xl font-extrabold">24+</span>
                <span className="text-xl font-semibold mt-1">Hack Hours</span>
              </div>

              <div className="md:col-span-3 md:col-start-4 md:row-start-3 flex flex-col justify-center items-center bg-transparent text-green-500 font-bold py-8">
                <span className="text-7xl font-extrabold">25+</span>
                <span className="text-xl font-semibold mt-1">Mentors</span>
              </div>

              <div className="md:col-span-2 md:row-span-3 md:col-start-9 md:row-start-3 flex flex-col justify-center items-center bg-transparent text-green-600 font-bold py-8">
                <span className="text-7xl font-extrabold">50+</span>
                <span className="text-xl font-semibold mt-1">Partners</span>
              </div>

              <div className="md:col-span-2 md:row-span-5 md:col-start-5 md:row-start-5 flex flex-col justify-center items-center bg-transparent text-green-600 font-bold py-8">
                <span className="text-7xl font-extrabold">10+</span>
                <span className="text-xl font-semibold mt-1">Successful Events</span>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </DottedBg>
    </div>
  );
}
