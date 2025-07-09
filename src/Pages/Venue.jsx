// import React from 'react';
// import { MapPin, Calendar, Clock, Wifi, Coffee, Users, Zap, Shield } from 'lucide-react';
// import AnimatedTitle from '../Components/AnimatedTitle';

// const Venue = () => {
//   return (
//     <main className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative w-full h-[300px] md:h-[400px] bg-black">
//         <div className="absolute inset-0 bg-black z-10" />
//         <div className="absolute inset-0 bg-[url('/images/camo-pattern.png')] opacity-30 z-0" />
//         <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
//           <AnimatedTitle
//             title="<b>MISSION HQ</b>"
//             containerClass="text-[96px] text-green-600 text-center mt-4 sm:mt-8 reveal-element"
//           />
//           <div className="w-20 h-1 bg-green-600 mb-4"></div>
//           <p className="text-xl md:text-2xl max-w-2xl">Your Base for Hack4Brahma Operations</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Venue Details */}
//           <div className="bg-[#111111] border-l-4 border-green-600 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-6 flex items-center">
//               <span className="inline-block w-8 h-8 mr-2 bg-green-600 rounded-full flex items-center justify-center">
//                 <MapPin size={20} />
//               </span>
//               VENUE COORDINATES
//             </h2>

//             <div className="space-y-4 mb-8">
//               <div className="flex items-start">
//                 <div className="bg-green-600/20 p-2 rounded mr-4">
//                   <MapPin className="text-green-500" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-green-500">LOCATION</h3>
//                   <p className="text-gray-300">Hack4Brahma Command Center</p>
//                   <p className="text-gray-300">Inform soon</p>
//                   <p className="text-gray-300"></p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-green-600/20 p-2 rounded mr-4">
//                   <Calendar className="text-green-500" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-green-500">DEPLOYMENT DATE</h3>
//                   <p className="text-gray-300">Inform Soon</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-green-600/20 p-2 rounded mr-4">
//                   <Clock className="text-green-500" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-green-500">OPERATION HOURS</h3>
//                   <p className="text-gray-300">24 hours</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-xl font-bold mb-4 text-green-500">MISSION BRIEFING</h3>
//               <p className="text-gray-300 mb-4">
//                 Assemble at our command center for 24 hours of innovation and strategy. The venue is equipped with
//                 high-speed tactical internet, power stations, and all necessary provisions for your mission.
//               </p>
//               <p className="text-gray-300">
//                 Reconnaissance teams have secured the area. All systems are go for the hackathon operation.
//               </p>
//             </div>

//             <div className="mt-8">
//               <a
//                 href="#"
//                 className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
//               >
//                 REGISTER FOR DEPLOYMENT
//               </a>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="bg-[#111111] p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-6 flex items-center">
//               <span className="inline-block w-8 h-8 mr-2 bg-green-600 rounded-full flex items-center justify-center">
//                 <MapPin size={20} />
//               </span>
//               TACTICAL MAP
//             </h2>

//             <div className="border-2 border-green-600 rounded-lg overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001234567890!2d77.5941234!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnMzkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
//                 width="100%"
//                 height="400"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//             <div className="mt-6 p-4 bg-green-600/10 border-l-4 border-green-600 rounded">
//               <h3 className="font-bold text-green-500 mb-2">NAVIGATION INSTRUCTIONS</h3>
//               <p className="text-gray-300">
//                 Use the tactical map above to navigate to our command center. The venue is located near major transport
//                 hubs and has ample parking facilities.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Facilities Section */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold mb-8 text-center">VENUE FACILITIES</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
//               <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
//                 <Wifi className="h-6 w-6 text-green-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">High-Speed Tactical Network</h3>
//               <p className="text-gray-300">Secure, high-speed internet connection for all operatives.</p>
//             </div>

//             <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
//               <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
//                 <Shield className="h-6 w-6 text-green-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Secure Perimeter</h3>
//               <p className="text-gray-300">24/7 security and access control for all participants.</p>
//             </div>

//             <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
//               <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
//                 <Users className="h-6 w-6 text-green-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Command Stations</h3>
//               <p className="text-gray-300">Dedicated workspaces for teams with power supplies.</p>
//             </div>

//             <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
//               <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
//                 <Zap className="h-6 w-6 text-green-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Power Stations</h3>
//               <p className="text-gray-300">Multiple charging points and power backup systems.</p>
//             </div>

//             <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
//               <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
//                 <Coffee className="h-6 w-6 text-green-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Ration Supplies</h3>
//               <p className="text-gray-300">Food and refreshments provided throughout the mission.</p>
//             </div>

//             <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
//               <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
//                 <Users className="h-6 w-6 text-green-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Briefing Rooms</h3>
//               <p className="text-gray-300">Dedicated spaces for presentations and team discussions.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-[#111111] py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">READY FOR DEPLOYMENT?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Secure your position at Hack4Brahma. Join forces with the brightest minds and tackle challenges head-on.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="#"
//               className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out"
//             >
//               REGISTER NOW
//             </a>
//             <a
//               href="#"
//               className="bg-transparent hover:bg-white/10 text-white border-2 border-green-600 font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out"
//             >
//               CONTACT COMMAND
//             </a>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Venue;

// !new code with updated dotted  bg

import React from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Wifi,
  Coffee,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import AnimatedTitle from "../Components/AnimatedTitle";
import DottedBg from "../Components/DottedBg";

const Venue = () => {
  return (
    <DottedBg
      dotColor="rgba(46, 204, 113, 0.5)"
      bgColor="black"
      dotSize={2}
      baseSpacing={20}
      repelRadius={80}
      explodeStrength={15}
      returnSpeed={0.5}
    >
      <main className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div className="absolute inset-0 bg-[url('/images/camo-pattern.png')] opacity-30 z-0" />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <AnimatedTitle
              title="<b>MISSION HQ</b>"
              containerClass="text-[96px] text-green-600 text-center mt-4 sm:mt-8 reveal-element"
            />
            <div className="w-20 h-1 bg-green-600 mb-4"></div>
            <p className="text-xl md:text-2xl max-w-2xl">
              Your Base for Hack4Brahma Operations
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Venue Details */}
            <div className="bg-[#111111] border-l-4 border-green-600 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 mr-2 bg-green-600 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </span>
                VENUE COORDINATES
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-600/20 p-2 rounded mr-4">
                    <MapPin className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-500">LOCATION</h3>
                    <p className="text-gray-300">Hack4Brahma Command Center</p>
                    <p className="text-gray-300">Inform soon</p>
                    <p className="text-gray-300"></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600/20 p-2 rounded mr-4">
                    <Calendar className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-500">
                      DEPLOYMENT DATE
                    </h3>
                    <p className="text-gray-300">Inform Soon</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600/20 p-2 rounded mr-4">
                    <Clock className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-500">
                      OPERATION HOURS
                    </h3>
                    <p className="text-gray-300">24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-green-500">
                  MISSION BRIEFING
                </h3>
                <p className="text-gray-300 mb-4">
                  Assemble at our command center for 24 hours of innovation and
                  strategy. The venue is equipped with high-speed tactical
                  internet, power stations, and all necessary provisions for
                  your mission.
                </p>
                <p className="text-gray-300">
                  Reconnaissance teams have secured the area. All systems are go
                  for the hackathon operation.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
                >
                  REGISTER FOR DEPLOYMENT
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-[#111111] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="inline-block w-8 h-8 mr-2 bg-green-600 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </span>
                TACTICAL MAP
              </h2>

              <div className="border-2 border-green-600 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001234567890!2d77.5941234!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnMzkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="mt-6 p-4 bg-green-600/10 border-l-4 border-green-600 rounded">
                <h3 className="font-bold text-green-500 mb-2">
                  NAVIGATION INSTRUCTIONS
                </h3>
                <p className="text-gray-300">
                  Use the tactical map above to navigate to our command center.
                  The venue is located near major transport hubs and has ample
                  parking facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              VENUE FACILITIES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  High-Speed Tactical Network
                </h3>
                <p className="text-gray-300">
                  Secure, high-speed internet connection for all operatives.
                </p>
              </div>

              <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Perimeter</h3>
                <p className="text-gray-300">
                  24/7 security and access control for all participants.
                </p>
              </div>

              <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Command Stations</h3>
                <p className="text-gray-300">
                  Dedicated workspaces for teams with power supplies.
                </p>
              </div>

              <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Power Stations</h3>
                <p className="text-gray-300">
                  Multiple charging points and power backup systems.
                </p>
              </div>

              <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ration Supplies</h3>
                <p className="text-gray-300">
                  Food and refreshments provided throughout the mission.
                </p>
              </div>

              <div className="bg-[#111111] p-6 rounded-lg border-t-2 border-green-600">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Briefing Rooms</h3>
                <p className="text-gray-300">
                  Dedicated spaces for presentations and team discussions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#111111] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">READY FOR DEPLOYMENT?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Secure your position at Hack4Brahma. Join forces with the
              brightest minds and tackle challenges head-on.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out"
              >
                REGISTER NOW
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-green-600 font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out"
              >
                CONTACT COMMAND
              </a>
            </div>
          </div>
        </div>
      </main>
    </DottedBg>
  );
};

export default Venue;
