import React from "react";
import {
  FaDiscord,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFileAlt,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://discord.gg/vPNPDAPgG5",
      icon: <FaDiscord size={20} />,
      label: "Discord",
    },
    {
      href: "https://x.com/hack4brahma?t=jhqT75ofTIqomxNi-RwD5w&s=09",
      icon: <FaTwitter size={20} />,
      label: "Twitter",
    },
    {
      href: "https://www.linkedin.com/company/hack4brahma/",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/hack4brahma?igsh=MWd3bnR0MTRmNGZrYw==",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
    },
  ];

  const documentLinks = [
    {
      href: "https://drive.google.com/file/d/1wyl6-JPD4In_83x03K6vC9fygyn0hXZM/view?usp=sharing",
      icon: <FaFileAlt />,
      label: "Event Brochure",
    },
  ];

  return (
    <footer className="bg-transparent from-green-950 via-green-900 to-green-800 text-white pt-16 pb-8 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h3 className="text-2xl md:text-4xl font-medium text-white mb-4 mt-2">Hack<span className="font-semibold text-[#06AD63] text-[5rem]">4</span>Brahma</h3>
          <p className="text-green-100 leading-relaxed">
            A hackathon dedicated to honoring and supporting our brave soldiers
            through innovative technological solutions.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-lime-400 mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-full bg-green-700 hover:bg-lime-400 hover:text-green-950 transition duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact & Docs */}
        <div>
          <h3 className="text-2xl font-semibold text-lime-400 mb-4">Get in Touch</h3>
          <ul className="text-green-100 mb-6 space-y-2">
            <li>
              📧{" "}
              <a
                href="mailto:hack4brahma@gmail.com"
                className="hover:text-emerald-300 transition-colors"
              >
                hack4brahma@gmail.com
              </a>
            </li>
            <li>
              📱{" "}
              <a
                href="tel:+917820931587"
                className="hover:text-emerald-300 transition-colors"
              >
                +91 7820931587
              </a>
            </li>
          </ul>

          {/* <h4 className="text-lg text-emerald-300 font-semibold mb-2">Important Documents</h4>
          <ul className="space-y-2">
            {documentLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-200 hover:text-lime-300 transition group"
                >
                  <span className="mr-2 text-emerald-400">{link.icon}</span>
                  {link.label}
                  <FaChevronRight
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    size={12}
                  />
                </a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-green-700 mt-12 pt-6 text-center text-sm text-green-400">
        &copy; {currentYear} Hack4Brahma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;