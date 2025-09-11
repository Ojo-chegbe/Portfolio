'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#highlights', label: 'Highlights' },
    { href: '#work', label: 'Work' },
    { href: '#articles', label: 'Articles' },
    { href: '#contact', label: 'Get in touch' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
      style={{ minHeight: '64px' }}
    >
      <nav className="flex justify-between items-center py-4 container" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div className="flex items-center">
          <Link href="/" className="logo flex items-center transition-all duration-300 hover:scale-105" style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
              src="/images/logo.svg" 
              alt="Ogwu Ojochegbe" 
              width={128} 
              height={128}
              className="h-8 w-auto transition-all duration-300 hover:scale-105"
              priority
            />
          </Link>
        </div>
        
        <ul className="hidden md:flex list-none gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button 
                onClick={() => scrollToSection(link.href)}
                className="text-gray-900 no-underline font-medium transition-all duration-300 relative hover:text-gray-700
                  after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 
                  after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        
        <div 
          className="md:hidden flex flex-col cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-900 mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button 
                  onClick={() => {
                    scrollToSection(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-gray-900 no-underline font-medium transition-colors duration-300 hover:bg-gray-50 bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
