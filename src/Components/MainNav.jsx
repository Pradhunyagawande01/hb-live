import React, { useState, useEffect } from 'react';
import { HandCoins } from 'lucide-react';
import {
  Home,
  Image as GalleryIcon,
  Users,
  Trophy,
  Calendar,
  HelpCircle,
  Phone,
  Camera,
  MapPin,
  LayoutGrid,
  Menu
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // NEW: controls fade-in
  const [activeSection, setActiveSection] = useState('home');

  // Delay the appearance of sidebar
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.getElementById('hamburger-button');
      
      if (isOpen && sidebar && hamburger && 
          !sidebar.contains(event.target) && 
          !hamburger.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'gallery', 'digital-swag', 'partners', 'humans', 'tracks', 'venue', 'faqs'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close mobile menu after navigation
  };

  const menuItems = [
    { icon: Home, label: 'Home', section: 'home' },
    { icon: GalleryIcon, label: 'Gallery', section: 'gallery' },
    { icon: Camera, label: 'Digital Swag', section: 'digital-swag' },
    { icon: HandCoins, label: 'Sponsors', section: 'partners' },
    { icon: Users, label: 'Humans', section: 'humans' },
    { icon: Calendar, label: 'Tracks', section: 'tracks' },
    { icon: MapPin, label: 'Venue', section: 'venue' },
    { icon: HelpCircle, label: 'FAQs', section: 'faqs' },
    // { icon: Phone, label: 'Contact', section: 'contact' },
    // { icon: Trophy, label: 'Prize', section: 'prize' },
    // { icon: Calendar, label: 'Schedule', section: 'schedule' },
  ];

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          id="hamburger-button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-black/50 p-2 rounded-full backdrop-blur-md shadow-md hover:bg-black/70 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed top-1/2 -translate-y-1/2 z-40 group flex flex-col py-4 transition-all ease-in-out duration-300
          ${isOpen ? 'left-2' : '-left-64'} md:left-2 lg:left-4 hover:w-52 w-16
          rounded-3xl bg-black/50 shadow-xl backdrop-blur-xl
          ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
      >
        <div className="flex flex-col gap-4 my-2 hover:items-start pl-2 text-white">
          {menuItems.map((item) => {
            const isActive = activeSection === item.section;
            return (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`flex items-center space-x-4 text-sm p-2 w-12 group-hover:w-44 rounded-full h-12 transition-all duration-300 ease-in-out
                  ${isActive 
                    ? 'text-white bg-green-700 shadow-lg backdrop-blur-lg pl-3 scale-105' 
                    : 'hover:bg-white/10 hover:font-medium hover:pl-3 hover:scale-105'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <item.icon className="w-6 h-6" />
                <span className="hidden group-hover:inline whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;












