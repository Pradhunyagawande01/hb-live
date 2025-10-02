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

const Venue = () => {
  return (
    <main className="min-h-screen text-white px-10">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center">
          <AnimatedTitle
            title="<b>MISSION HQ</b>"
            containerClass="text-[96px] text-green-600 text-center sm:mt-8 reveal-element"
          />
          
          
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Venue Details */}
          <div className="p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className=" w-8 h-8 mr-2 bg-green-600 rounded-full flex items-center justify-center">
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
                  <h3 className="font-bold text-green-500 text-lg">LOCATION</h3>
                  <p className="text-gray-300 text-lg">
                    Hack4Brahma Command Center
                  </p>
                  <p className="text-gray-300 text-lg">
                    Assam down town University (ADTU)
                  </p>
                  <p className="text-gray-300 text-lg">Guwahati, Assam</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-600/20 p-2 rounded mr-4">
                  <Calendar className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-green-500 text-lg">
                    DEPLOYMENT DATE
                  </h3>
                  <p className="text-gray-300 text-lg">10 - 11 October 2025</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-600/20 p-2 rounded mr-4">
                  <Clock className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-green-500 text-lg">
                    OPERATION HOURS
                  </h3>
                  <p className="text-gray-300 text-lg">24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className=" w-8 h-8 mr-2 bg-green-600 rounded-full flex items-center justify-center">
                <MapPin size={20} />
              </span>
              TACTICAL MAP
            </h2>

            <div className="border-2 border-green-600 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5711372446317!2d91.8614645!3d26.2017968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375af77400000001%3A0xfa44ca580f29ec15!2sAssam%20down%20town%20University!5e1!3m2!1sen!2sin!4v1759425175481!5m2!1sen!2sin"
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
      </div>
    </main>
  );
};

export default Venue;
