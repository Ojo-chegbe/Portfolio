'use client';

import { useState, useEffect } from 'react';

import { ArrowUpRight } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface TopNavProps {
  navItems: NavItem[];
  actionLink?: {
    label: string;
    href: string;
  };
}

const TopNav = ({ navItems, actionLink }: TopNavProps) => {
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
      <div className="flex items-center justify-center gap-1 max-w-7xl overflow-x-auto scrollbar-hide bg-zinc-950/95 backdrop-blur-md px-3 py-2 shadow-lg border border-zinc-800">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-3 py-2 text-xs font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 rounded-none ${
              activeSection === item.id
                ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80'
            }`}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}

        {actionLink && (
          <a
            href={actionLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 border border-emerald-500/30 whitespace-nowrap flex-shrink-0 transition-colors rounded-none"
          >
            <span>{actionLink.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TopNav;
