import React from 'react';
import { Users, Clock, Calendar } from 'lucide-react';
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from '../Components/Footer';
 

const Gallery = () => {
  const stats = [
    {
      text: "500+ Hackers",
      icon: <Users className="w-8 h-8" />
    },
    {
      text: "24+ Hack Hours",
      icon: <Clock className="w-8 h-8" />
    },
    {
      text: "10+ Events",
      icon: <Calendar className="w-8 h-8" />
    }
  ];

  const images = [
    {
      image: "img/img1.jpg",
      
    },
    {
      image: "img/img2.jpg",
      
    },
    {
      image: "img/img5.jpg",
      
    },
    {
      image: "img/workshop2.jpg",
 
    },
    {
      image: " img/game1.jpg",
       
    },
    {
      image: "img/img6.jpg",
     
    },
    {
      image: "img/workshop1.jpg",
      
    },
    {
      image: "img/game2.jpg",
       
    },
    {
      image: "img/img4.jpg",
       
    },
    {
      image: "img/img3.jpg",
       
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative flex flex-col items-center container mx-auto px-4 text-[#198f51] mb-10">
          <AnimatedTitle
            title=" <b>higlights</b>"
            containerClass="mt-8 !text-black text-center reveal-element "
          />
        </div>
         
          
     
      
      {/* First Row */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="relative group overflow-hidden rounded-2xl  h-[400px]">
          <img
            src={images[0].image}
            alt="Gallery"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[0].className}`}
          />
           <div className="text-center">
            {stats[0].icon}
            <p className="text-3xl font-bold mt-4 text-green-800">{stats[0].text}</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-2xl shadow-xl w-full h-[400px]">
  <img
    src={images[1].image}
    alt="Gallery"
    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[1].className}`}
  />
</div>

<div className="relative group overflow-hidden rounded-2xl shadow-xl w-full h-[400px]">
  <img
    src={images[9].image}
    alt="Gallery"
    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[9].className}`}
  />
</div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-3 gap-8 mb-8">
      <div className="relative group overflow-hidden rounded-2xl shadow-xl w-full h-[400px]">
          <img
            src={images[2].image}
            alt="Gallery"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[2].className}`}
          />
        </div>
        <div className="relative group overflow-hidden rounded-2xl shadow-xl w-full h-[400px]">
          <div className="text-center mt-40">
            {stats[1].icon}
            <p className="text-3xl font-bold mt-4 text-green-800">{stats[1].text}</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img
            src={images[3].image}
            alt="Gallery"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[3].className}`}
          />
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-3 gap-8">
      <div className="relative group overflow-hidden rounded-2xl shadow-xl w-full h-[400px]">
        <img
            src={images[5].image}
            alt="Gallery"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[5].className}`}
          />
        </div>
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img
            src={images[4].image}
            alt="Gallery"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[4].className}`}
          />
          <div className="text-center">
            {stats[2].icon}
            <p className="text-3xl font-bold mt-4 text-green-800">{stats[2].text}</p>
          </div>
        </div>
          <div className="relative group overflow-hidden rounded-2xl shadow-xl w-full h-[400px]">
          <img
            src={images[5].image}
            alt="Gallery"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[5].className}`}
          />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img
            src={images[6].image}
            alt="Gallery"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[6].className}`}
          />
        </div>
        <div className="relative group overflow-hidden rounded-2xl shadow-xl w-full h-[400px]">
          <img
            src={images[7].image}
            alt="Gallery"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[7].className}`}
          />
        </div>

        <div className="relative group overflow-hidden rounded-2xl shadow-xl w-full h-[400px] mb-40">
          <img
            src={images[8].image}
            alt="Gallery"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${images[7].className}`}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;