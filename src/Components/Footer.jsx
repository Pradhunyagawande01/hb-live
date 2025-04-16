import React from "react";
import { FaDiscord, FaTwitter, FaLinkedin, FaInstagram, FaFileAlt, FaHandshake, FaChevronRight } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: "https://discord.gg/vPNPDAPgG5", icon: <FaDiscord size={24} />, label: "Discord" },
    { href: "https://x.com/hack4brahma?t=jhqT75ofTIqomxNi-RwD5w&s=09", icon: <FaTwitter size={24} />, label: "Twitter" },
    { href: "https://www.linkedin.com/company/hack4brahma/", icon: <FaLinkedin size={24} />, label: "LinkedIn" },
    { href: "https://www.instagram.com/hack4brahma?igsh=MWd3bnR0MTRmNGZrYw==", icon: <FaInstagram size={24} />, label: "Instagram" },
  ];

  const documentLinks = [
    { href: "https://drive.google.com/drive/folders/1SdToxbTVp6fibqF-IsLYCUdPZQI_KhLf", icon: <FaFileAlt />, label: "Event Brochure" },
    // { href: "/code-of-conduct.pdf", icon: <FaHandshake />, label: "Code of Conduct" },
  ];

  return (
    <footer className=" text-white ">
      
      
      <div className="container mx-auto px-12 pl-24 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Branding */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold mb-4 text-green-500">Hack4Brahma</h3>
            <p className="text-gray-300 mb-6">
              A hackathon dedicated to honoring and supporting our brave soldiers
              through innovative technological solutions.
            </p>
            
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
          
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-green-500 relative">
                Connect With Us
                
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-gray-300 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-500 relative">
              Get in Touch
              
            </h3>
            <div className="text-gray-300 space-y-4">
              <p className="flex items-center">
                <span className="mr-2 text-green-500">📧</span>
                <a href="mailto:hack4brahma@gmail.com" className="hover:text-green-400 transition-colors">
                  hack4brahma@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-green-500">📱</span>
                <a href="tel:+917776955168" className="hover:text-green-400 transition-colors">
                  +91 7776955168
                </a>
              </p>
            </div>
            <div className="mt-auto">
              <h4 className="text-xl font-semibold mb-3 text-green-400">Important Documents</h4>
              <ul className="space-y-2">
                {documentLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                    >
                      <span className="mr-2 text-green-500">{link.icon}</span>
                      {link.label}
                      <FaChevronRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      {/* <div className="border-t border-gray-800 mt-8">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Hack4Brahma. All rights reserved.
          </p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;