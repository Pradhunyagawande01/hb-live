import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Image as GalleryIcon,
  Users,
  Trophy,
  Calendar,
  HelpCircle,
  Phone,
  MapPin,
  LayoutGrid,
  Menu
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // NEW: controls fade-in
  const location = useLocation();

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

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: GalleryIcon, label: 'Gallery', path: '/gallery' },
    { icon: Users, label: 'Partners', path: '/partners' },
    { icon: Users, label: 'Humans', path: '/humans' },
    { icon: Trophy, label: 'Prize', path: '/prize' },
    { icon: HelpCircle, label: 'FAQs', path: '/faqs' },
     // { icon: Phone, label: 'Contact', path: '/contact' },
    // { icon: MapPin, label: 'Venue', path: '/venue' },
      // { icon: Trophy, label: 'Prize', path: '/prize' },
    // { icon: Calendar, label: 'Schedule', path: '/schedule' },
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
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-4 text-sm p-2 w-12 group-hover:w-44 rounded-full h-12 transition-all duration-300 ease-in-out
                  ${isActive 
                    ? 'text-white bg-green-700 shadow-lg backdrop-blur-lg pl-3 scale-105' 
                    : 'hover:bg-white/10 hover:font-medium hover:pl-3 hover:scale-105'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <item.icon className="w-6 h-6" />
                <span className="hidden group-hover:inline whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;












