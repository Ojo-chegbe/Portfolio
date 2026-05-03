'use client';

import { useState, useEffect } from 'react';

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
      const scrollPosition = window.scrollY + 220;
      let nextActive = navItems[0]?.id ?? '';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          nextActive = navItems[i].id;
          break;
        }
      }

      setActiveSection(nextActive);
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
      <div className="flex justify-center gap-1 max-w-7xl overflow-x-auto scrollbar-hide bg-zinc-950/95 backdrop-blur-md px-3 py-2 shadow-lg border border-zinc-800">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-3 py-2 text-xs font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              activeSection === item.id
                ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80'
            }`}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
