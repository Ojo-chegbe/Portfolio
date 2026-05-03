'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DesignItem {
  id: number;
  imageUrl: string;
}

interface DesignCarouselProps {
  items: DesignItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

const DesignCarousel = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
}: DesignCarouselProps) => {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoRotate && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isHovering, autoRotate, rotateInterval, items.length]);

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % items.length)
      return "translate-x-[20%] scale-95 opacity-60 z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-20%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };

  return (
    <section className="py-12 md:py-24 fill-secondary">
      <div className="container">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Other Pages</h2>
          
          <div
            className="relative overflow-hidden h-[500px] border border-zinc-800 fill-tertiary"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            ref={carouselRef}
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`absolute top-0 w-full max-w-2xl transform transition-all duration-500 ${getCardAnimationClass(
                    index
                  )}`}
                >
                  <div className="relative h-[400px] overflow-hidden border border-zinc-800 bg-zinc-900/60">
                    <Image
                      src={item.imageUrl}
                      alt={`Design variation ${item.id + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-950 flex items-center justify-center text-zinc-200 hover:bg-zinc-800 z-30 shadow-sm transition-all hover:scale-110 border border-zinc-700"
              onClick={() =>
                setActive((prev) => (prev - 1 + items.length) % items.length)
              }
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-950 flex items-center justify-center text-zinc-200 hover:bg-zinc-800 z-30 shadow-sm transition-all hover:scale-110 border border-zinc-700"
              onClick={() => setActive((prev) => (prev + 1) % items.length)}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
              {items.map((_, idx) => (
                <button
                  key={idx}
                className={`transition-all duration-300 ${
                  active === idx
                    ? "bg-zinc-100 w-6 h-2"
                    : "bg-zinc-600 w-2 h-2 hover:bg-zinc-400"
                }`}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to item ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignCarousel;
