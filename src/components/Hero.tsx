'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const floatingCards = [
    { text: 'Usability', delay: 2 },
    { text: 'Simplicity', delay: 3 },
    { text: 'Accessibility', delay: 5 },
    { text: 'Innovation', delay: 7 },
  ];

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -6,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="pt-32 pb-16 min-h-screen flex items-center bg-white" style={{ paddingTop: '7rem' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              <span className="block" style={{ color: '#1a1a1a' }}>Ogwu Ojochegbe</span>
              <span className="block font-normal" style={{ color: '#666' }}>UX & Product Designer</span>
            </h1>
            
            <p className="text-xl mb-8 leading-relaxed" style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem', lineHeight: '1.5' }}>
              Your product already has potential. I make sure people feel it instantly. Bringing clarity in a complex and noisy digital world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#work" className="btn btn-primary" style={{ 
                display: 'inline-block', 
                padding: '1rem 2rem', 
                borderRadius: '8px', 
                fontWeight: '600', 
                transition: 'all 0.3s ease', 
                border: 'none', 
                cursor: 'pointer', 
                fontSize: '1rem',
                background: '#1a1a1a',
                color: 'white',
                textDecoration: 'none'
              }}>
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ 
                display: 'inline-block', 
                padding: '1rem 2rem', 
                borderRadius: '8px', 
                fontWeight: '600', 
                transition: 'all 0.3s ease', 
                border: '2px solid #1a1a1a', 
                cursor: 'pointer', 
                fontSize: '1rem',
                background: 'transparent',
                color: '#1a1a1a',
                textDecoration: 'none'
              }}>
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            className="relative h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Image */}
              <motion.div 
                className="relative w-80 h-[420px] rounded-3xl overflow-hidden bg-white"
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                style={{
                  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 8px 24px rgba(0, 0, 0, 0.06)'
                }}
              >
                <Image
                  src="/images/Me.png"
                  alt="Ogwu Ojochegbe"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/2 via-transparent to-black/3 opacity-100 transition-all duration-400 group-hover:opacity-100" />
              </motion.div>

              {/* Floating Cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.text}
                  className={`absolute rounded-2xl px-6 py-4 shadow-lg border flex items-center justify-center font-semibold text-sm tracking-wide
                    ${index === 0 ? 'top-20 -right-6' : ''}
                    ${index === 1 ? 'top-1/2 -left-8' : ''}
                    ${index === 2 ? 'bottom-24 -left-8' : ''}
                    ${index === 3 ? 'top-1/2 -right-10' : ''}
                  `}
                  style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    color: '#1a1a1a',
                    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06), 0 16px 48px rgba(0, 0, 0, 0.03)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: card.delay * 0.1,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    transition: {
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                >
                  <span className="whitespace-nowrap">{card.text}</span>
                </motion.div>
              ))}

              {/* Background Shapes */}
              <div className="absolute inset-0 pointer-events-none -z-10">
                <motion.div 
                  className="absolute w-30 h-30 rounded-full bg-gradient-to-br from-gray-100/80 to-gray-200/60 opacity-40 blur-sm top-5 left-5"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                />
                <motion.div 
                  className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-gray-100/80 to-gray-200/60 opacity-40 blur-sm top-3/4 right-10"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: 'easeInOut',
                    delay: 4
                  }}
                />
                <motion.div 
                  className="absolute w-25 h-25 rounded-full bg-gradient-to-br from-gray-100/80 to-gray-200/60 opacity-40 blur-sm bottom-4 left-0"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: 'easeInOut',
                    delay: 8
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
