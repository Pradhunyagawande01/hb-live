import React from 'react';
import { Users, Clock, Calendar, Handshake, CheckCircle } from 'lucide-react';
import AnimatedTitle from "../Components/AnimatedTitle";

const CornerBorderWrapper = ({ children }) => (
  <div className="relative">
  <div className="relative p-1 rounded-lg overflow-hidden border border-white">
    {children}
     
    {/* Green border */}
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 z-20" />
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500 z-20" />
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500 z-20" />
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500 z-20" />

    {/* White border behind green */}
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white z-10" />
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white z-10" />
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white z-10" />
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white z-10" />
  </div>
  </div>
);

const Gallery = () => {
  const stats = [
    {
      text: "500+ Hackers",
      icon: <Users className="w-6 h-6" />
    },
    {
      text: "24+ Hack Hours",
      icon: <Clock className="w-6 h-6" />
    },
    {
      text: "10+ Events",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      text: "50+ Partners",
      icon: <Handshake className="w-6 h-6" />
    },
    {
      text: "10+ Successful Events",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const images = [
    { image: "img/img1.jpg" },
    { image: "img/img2.jpg" },
    { image: "img/img3.jpg" },
    { image: "img/img4.jpg" },
    { image: "img/img5.jpg" },
    { image: "img/img6.jpg" },
    { image: "img/game1.jpg" },
    { image: "img/game2.jpg" },
    { image: "img/workshop1.jpg" },
    { image: "img/workshop2.jpg" },
    { image: "img/talk.jpg" },
    { image: "img/trophy.jpg" }
  ];

  // Mobile view component - shown only on small screens
  const MobileGallery = () => (
    <div className="block md:hidden">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <CornerBorderWrapper>
            <img src={images[0].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[0].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[0].text}</p>
          </div>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[2].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[1].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[1].text}</p>
          </div>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[3].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[1].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[2].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[2].text}</p>
          </div>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[4].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[3].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[3].text}</p>
          </div>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[5].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[6].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[4].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[4].text}</p>
          </div>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[7].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[8].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
      </div>
    </div>
  );

  // Tablet view component
  const TabletGallery = () => (
    <div className="hidden sm:block md:hidden">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <CornerBorderWrapper>
            <img src={images[0].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[2].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[0].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[0].text}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[1].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[1].text}</p>
          </div>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[3].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[1].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[5].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[4].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[2].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[2].text}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[3].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[3].text}</p>
          </div>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[6].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[7].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[4].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[4].text}</p>
          </div>
        </div>
        <div>
          <CornerBorderWrapper>
            <img src={images[8].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-2 py-10">
      <div className="relative flex flex-col items-center text-[#198f51] mb-8">
        <AnimatedTitle
          title="<b>highlights</b>"
          containerClass="mt-4 !text-black text-center reveal-element"
        />
      </div>

      {/* Mobile view */}
      <MobileGallery />
      
      {/* Tablet view */}
      <TabletGallery />

      {/* Desktop layout - EXACT SAME as original */}
      <div className="hidden md:grid grid-cols-11 grid-rows-25 gap-4">
        {/* Image Cards */}
        <div className="col-span-5 row-span-2">
          <CornerBorderWrapper>
            <img src={images[0].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>

        <div className="col-span-4 row-span-2 col-start-5 row-start-3">
          <CornerBorderWrapper>
            <img src={images[1].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>

        <div className="col-span-4 row-span-2 col-start-8 row-start-1">
          <CornerBorderWrapper>
            <img src={images[2].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>

        {/* Stat Block */}
        <div className="col-span-2 row-span-2 col-start-6 row-start-1">
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[0].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[0].text}</p>
          </div>
        </div>

        <div className="col-span-4 row-span-2 col-start-1 row-start-3">
          <CornerBorderWrapper>
            <img src={images[3].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>

        <div className="col-span-4 row-span-2 col-start-8 row-start-5">
          <CornerBorderWrapper>
            <img src={images[4].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>

        {/* Stat Block */}
        <div className="col-span-3 row-span-2 col-start-9 row-start-3">
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[1].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[1].text}</p>
          </div>
        </div>

        <div className="col-span-4 row-span-3 col-start-1 row-start-5">
          <CornerBorderWrapper>
            <img src={images[5].image} className="w-full h-56 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>

        <div className="col-span-2 row-span-2 col-start-6 row-start-5">
          <CornerBorderWrapper>
            <img src={images[6].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>

        <div className="col-span-3 row-span-2 col-start-9 row-start-7">
          <CornerBorderWrapper>
            <img src={images[7].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>

        <div className="col-span-4 row-span-2 col-start-5 row-start-7">
          <CornerBorderWrapper>
            <img src={images[8].image} className="w-full h-48 object-cover rounded-lg" />
          </CornerBorderWrapper>
        </div>

        {/* Stat Block */}
        <div className="row-span-2 col-start-5 row-start-5">
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[3].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[3].text}</p>
          </div>
        </div>

        {/* Stat Block */}
        <div className="row-span-3 col-start-2 row-start-7">
          <div className="flex flex-col justify-center items-center h-full bg-transparent rounded-lg">
            {stats[4].icon}
            <p className="text-2xl font-semibold mt-2 text-green-800 text-center" style={{ fontFamily: 'Zentry-Regular' }}>{stats[4].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;