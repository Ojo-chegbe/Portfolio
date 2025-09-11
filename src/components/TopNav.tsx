'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface TopNavProps {
  navItems: NavItem[];
}

const TopNav = ({ navItems }: TopNavProps) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hidden md:flex fixed top-28 left-2 right-2 z-40 justify-center">
      <div className="flex justify-center gap-1 max-w-7xl overflow-x-auto scrollbar-hide bg-white rounded-full px-3 py-2 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              activeSection === item.id
                ? 'bg-gray-200 text-gray-900 font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
