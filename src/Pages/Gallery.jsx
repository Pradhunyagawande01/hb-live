"use client";

import { useEffect, useState } from "react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";

export default function Gallery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const CornerBorderWrapper = ({ children }) => (
    <div className="relative">
      <div className="relative p-1 rounded-lg overflow-hidden border border-red">
        {children}
        <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-green-500 z-20" />
        <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-green-500 z-20" />
        <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-green-500 z-20" />
        <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-green-500 z-20" />

        <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-white z-10" />
        <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-white z-10" />
        <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-white z-10" />
        <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-white z-10" />
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-black text-white p-2 sm:p-4 overflow-hidden">
      <div className="text-center mb-4 sm:mb-8 mt-2 sm:mt-4">
        <AnimatedTitle
          title="<b>Highlights</b>"
          containerClass="mt-4 sm:mt-8 !text-black text-center reveal-element"
        />
      </div>

      <div className="relative w-full mx-auto px-1 sm:px-2 md:pl-6 lg:pl-12 xl:pl-24">
        {/* Use CSS Grid with responsive adjustments, but maintain original layout */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 
                        sm:grid-cols-2 
                        md:grid-cols-6 
                        lg:grid-cols-12 lg:grid-rows-5">
          
          {/* Card 1 - Image */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-5">
            <CornerBorderWrapper>
              <div className="bg-transperent text-black font-bold text-xl flex justify-center items-center h-40 sm:h-48 md:h-60">
                <img
                  src="/img/img1.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 9 - Stats Card */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-3 lg:col-start-6 lg:row-start-1">
            <div className="bg-transperent text-green-500 font-bold flex flex-col justify-center items-center h-32 sm:h-40 md:h-full py-4 sm:py-6 md:py-0">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">500+</span>
              <span className="text-base sm:text-lg md:text-xl font-semibold mt-1">Hackers</span>
            </div>
          </div>

          {/* Card 4 - Tall Image */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-3 lg:row-span-3 lg:col-start-9 lg:row-start-1">
            <CornerBorderWrapper>
              <div className="h-40 sm:h-48 md:h-full w-full">
                <img
                  src="/img/img4.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 10 - Stats Card */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-3 lg:col-start-1 lg:row-start-2">
            <div className="bg-transperent text-green-500 font-bold flex flex-col justify-center items-center h-32 sm:h-40 md:h-full py-4 sm:py-6 md:py-0">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">24+</span>
              <span className="text-base sm:text-lg md:text-xl font-semibold mt-1">Hack Hours</span>
            </div>
          </div>

          {/* Card 2 - Image */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-5 lg:col-start-4 lg:row-start-2">
            <CornerBorderWrapper>
              <div className="bg-transperent text-black font-bold text-xl flex justify-center items-center h-40 sm:h-48 md:h-60">
                <img
                  src="/img/img2.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 6 - Tall Image */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-3 lg:col-start-1 lg:row-start-3">
            <CornerBorderWrapper>
              <div className="bg-transperent text-black font-bold text-xl flex justify-center items-center h-40 sm:h-48 md:h-full">
                <img
                  src="/img/img6.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 11 - Stats Card */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-3 lg:col-start-4 lg:row-start-3">
            <div className="bg-transperent text-green-500 font-bold flex flex-col justify-center items-center h-32 sm:h-40 md:h-full py-4 sm:py-6 md:py-0">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">24+</span>
              <span className="text-base sm:text-lg md:text-xl font-semibold mt-1">Hack Hours</span>
            </div>
          </div>

          {/* Card 3 - Image */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-5 lg:col-start-7 lg:row-start-3">
            <CornerBorderWrapper>
              <div className="bg-transperent text-black font-bold text-xl flex justify-center items-center h-40 sm:h-48 md:h-60">
                <img
                  src="/img/img3.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 12 - Stats Card */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-2 lg:row-span-3 lg:col-start-9 lg:row-start-3">
            <div className="bg-transperent text-green-600 font-bold flex flex-col justify-center items-center h-32 sm:h-40 md:h-full py-4 sm:py-6 md:py-0">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">50+</span>
              <span className="text-base sm:text-lg md:text-xl font-semibold mt-1">Partners</span>
            </div>
          </div>

          {/* Card 7 - Image */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-4 lg:row-span-2 lg:col-start-1 lg:row-start-5">
            <CornerBorderWrapper>
              <div className="bg-transperent text-black font-bold text-xl flex justify-center items-center h-40 sm:h-48 md:h-60">
                <img
                  src="/img/game1.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>
          
          {/* Card 13 - Stats Card */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-4">
            <div className="bg-transperent text-green-600 font-bold flex flex-col justify-center items-center h-32 sm:h-40 md:h-full py-4 sm:py-6 md:py-0">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">10+</span>
              <span className="text-base sm:text-lg md:text-xl font-semibold mt-1 text-center">
                Successful Events
              </span>
            </div>
          </div>

          {/* Card 5 - Image */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-5 lg:row-span-2 lg:col-start-4 lg:row-start-4">
            <CornerBorderWrapper>
              <div className="bg-transperent text-black font-bold text-xl flex justify-center items-center h-40 sm:h-48 md:h-60">
                <img
                  src="/img/img5.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 8 - Image */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-5 lg:row-span-2 lg:col-start-7 lg:row-start-5">
            <CornerBorderWrapper>
              <div className="bg-transperent text-black font-bold text-xl flex justify-center items-center h-40 sm:h-48 md:h-60">
                <img
                  src="/img/workshop1.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12">
        <Footer />
      </div>
    </div>
  );
}