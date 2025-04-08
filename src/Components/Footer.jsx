import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.gg/vPNPDAPgG5", icon: <FaDiscord />, label: "Discord" },
  { href: "https://x.com/hack4brahma?t=jhqT75ofTIqomxNi-RwD5w&s=09", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://www.linkedin.com/company/hack4brahma/", icon: <FaLinkedin />, label: "Medium" },
  { href: "https://www.instagram.com/hack4brahma?igsh=MWd3bnR0MTRmNGZrYw==", icon: <FaInstagram />, label: "Medium" },
];

const Footer = () => {
  return (
    <footer className="bg-black  text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pl-20">
        {/* Left: Branding */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-[#198f51]">Hack4Brahma</h4>
          <p className="text-sm text-gray-400">
            A hackathon dedicated to honoring and supporting our brave soldiers
            through innovative technological solutions.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#198f51]">Connect With Us</h4>
          <div className="flex space-x-5">
            {socialLinks.map(({ href, icon, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:text-yellow-500 text-2xl transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#198f51]">Contact Us</h4>
          <div className="text-sm text-gray-400">
            <p>Email: <a href="mailto:contact@hack4brahma.com" className="hover:text-[#198f51]">contact@hack4brahma.com</a></p>
            <p>Support: <a href="tel:+9112345678" className="hover:text-[#198f51]">+91 1234 5678</a></p>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Hack4Brahma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;