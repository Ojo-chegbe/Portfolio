'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

interface SideNavProps {
  navItems: NavItem[];
}

const SideNav = ({ navItems }: SideNavProps) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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

      // Show/hide nav based on scroll position
      setIsVisible(window.scrollY > 200);
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
    <>
      {/* Desktop Side Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 50
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-50 ${
          isVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-3 w-44">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="text-sm font-medium leading-relaxed">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 50
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`md:hidden fixed bottom-4 left-4 right-4 z-50 ${
          isVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-3">
          <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideNav;
