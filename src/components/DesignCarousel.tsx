'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface DesignItem {
  id: number;
  imageUrl: string;
  title?: string;
  description?: string;
}

interface DesignCarouselProps {
  items: DesignItem[];
  aspect?: 'portrait' | 'landscape';
  autoRotate?: boolean;
  rotateInterval?: number;
}

const getScreenTitle = (item: DesignItem) => {
  if (item.title) return item.title;
  const filename = item.imageUrl.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
  return filename
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const DesignCarousel = ({
  items,
  aspect = 'portrait',
  autoRotate = false,
  rotateInterval = 5000,
}: DesignCarouselProps) => {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const isLandscape = aspect === 'landscape';

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoRotate || isHovering || lightboxOpen) return;
    const interval = setInterval(handleNext, rotateInterval);
    return () => clearInterval(interval);
  }, [autoRotate, isHovering, lightboxOpen, handleNext, rotateInterval]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Calculate relative cyclic offset from active index
  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > items.length / 2) diff -= items.length;
    if (diff < -items.length / 2) diff += items.length;
    return diff;
  };

  const currentItem = items[active];

  return (
    <section className="py-20 md:py-28 fill-secondary overflow-hidden border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2 block">
            Interface Exploration
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3">
            Other Pages
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-light">
            Additional screens, onboarding flows, and auxiliary interactions designed for the platform.
          </p>
        </div>

        {/* Carousel Visual Stage */}
        <div
          className={`relative mx-auto flex items-center justify-center select-none ${
            isLandscape
              ? 'h-[360px] sm:h-[480px] md:h-[620px] lg:h-[720px] max-w-7xl'
              : 'h-[500px] sm:h-[580px] md:h-[640px] max-w-4xl'
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {items.map((item, index) => {
            const offset = getOffset(index);
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            const isCurrent = offset === 0;
            
            // Positioning variables tailored to portrait vs landscape
            const xPercent = isLandscape ? offset * 62 : offset * 68;
            const scale = isCurrent ? 1 : isLandscape ? (Math.abs(offset) === 1 ? 0.84 : 0.7) : (Math.abs(offset) === 1 ? 0.86 : 0.72);
            const opacity = isCurrent ? 1 : isLandscape ? (Math.abs(offset) === 1 ? 0.35 : 0.1) : (Math.abs(offset) === 1 ? 0.45 : 0.15);
            const zIndex = 30 - Math.abs(offset) * 10;

            return (
              <motion.div
                key={item.id}
                className={`absolute top-0 bottom-0 flex items-center justify-center cursor-pointer ${
                  isLandscape
                    ? 'w-[94vw] max-w-[780px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1220px]'
                    : 'w-[260px] sm:w-[300px] md:w-[340px]'
                }`}
                animate={{
                  x: `${xPercent}%`,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 26,
                }}
                onClick={() => {
                  if (!isCurrent) {
                    setActive(index);
                  }
                }}
              >
                <div
                  className={`relative w-full rounded-2xl overflow-hidden transition-all duration-300 ${
                    isLandscape
                      ? 'aspect-[16/9] bg-[#0c0c0e] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)]'
                      : 'h-[460px] sm:h-[540px] md:h-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]'
                  }`}
                >
                  {/* Subtle Window Bar for Desktop Landscape Screens */}
                  {isLandscape && (
                    <div className="h-8 md:h-9 bg-[#16161a] border-b border-white/10 px-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <span className="text-[11px] text-zinc-400 font-normal truncate max-w-[240px] md:max-w-md">
                        {getScreenTitle(item)}
                      </span>
                      {isCurrent ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxOpen(true);
                          }}
                          className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                          title="Expand screen to full view"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="15 3 21 3 21 9" />
                            <polyline points="9 21 3 21 3 15" />
                            <line x1="21" y1="3" x2="14" y2="10" />
                            <line x1="3" y1="21" x2="10" y2="14" />
                          </svg>
                          <span className="hidden sm:inline">Zoom</span>
                        </button>
                      ) : (
                        <div className="w-8" />
                      )}
                    </div>
                  )}

                  {/* Image Container */}
                  <div className={`relative w-full ${isLandscape ? 'h-[calc(100%-2rem)] md:h-[calc(100%-2.25rem)] p-1' : 'h-full'}`}>
                    <Image
                      src={item.imageUrl}
                      alt={getScreenTitle(item)}
                      fill
                      sizes={isLandscape ? '(max-width: 1024px) 95vw, 1200px' : '(max-width: 768px) 280px, 340px'}
                      className="object-contain"
                      priority={isCurrent}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous screen"
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 rounded-none bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next screen"
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 rounded-none bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Caption & Indicator Controls */}
        <div className="text-center mt-8 md:mt-10">
          <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-4">
            Screen {active + 1} of {items.length} &bull; {getScreenTitle(currentItem || items[0])}
          </div>

          {/* Progress Indicator Pills */}
          <div className="flex items-center justify-center gap-1.5 max-w-md mx-auto flex-wrap">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Go to screen ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === idx
                    ? 'w-7 bg-white'
                    : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Top Bar in Lightbox */}
            <div className="flex items-center justify-between text-white pb-4 border-b border-white/10" onClick={(e) => e.stopPropagation()}>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-white">
                  {getScreenTitle(currentItem)}
                </h4>
                <p className="text-xs text-zinc-400">
                  Screen {active + 1} of {items.length} &bull; Full Scale Inspection
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-none bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Previous"
                >
                  &larr;
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-none bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Next"
                >
                  &rarr;
                </button>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="px-3 py-1.5 rounded-none bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors ml-2"
                >
                  Close (ESC)
                </button>
              </div>
            </div>

            {/* Lightbox Center Image */}
            <div
              className="relative w-full max-w-6xl mx-auto h-[78vh] flex items-center justify-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentItem.imageUrl}
                alt={getScreenTitle(currentItem)}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Footer */}
            <div className="text-center text-xs text-zinc-500 pt-2" onClick={(e) => e.stopPropagation()}>
              Press Arrow Keys to navigate &bull; Click anywhere outside to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DesignCarousel;
