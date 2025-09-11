"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

export interface ImageCarouselProps {
  /** Array of image URLs to display in the carousel */
  images: string[];
  /** Container width in pixels */
  width?: number;
  /** Container height in pixels */
  height?: number;
  /** Auto-play interval in milliseconds (0 to disable) */
  autoPlay?: number;
  /** Show navigation dots */
  showDots?: boolean;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Custom container className */
  containerClassName?: string;
  /** Custom image className */
  imageClassName?: string;
  /** Custom dot className */
  dotClassName?: string;
  /** Custom arrow className */
  arrowClassName?: string;
  /** Animation duration */
  animationDuration?: number;
  /** Enable/disable touch/swipe functionality */
  touchable?: boolean;
}

export function ImageCarousel({
  images,
  width = 400,
  height = 600,
  autoPlay = 0,
  showDots = true,
  showArrows = true,
  containerClassName,
  imageClassName,
  dotClassName,
  arrowClassName,
  animationDuration = 0.5,
  touchable = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay > 0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && autoPlay > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoPlay);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, autoPlay, images.length]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!touchable) return;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchable) return;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchable) return;
    
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next image
        nextImage();
      } else {
        // Swipe right - previous image
        prevImage();
      }
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    if (autoPlay > 0) {
      setIsAutoPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay > 0) {
      setIsAutoPlaying(true);
    }
  };

  if (images.length === 0) {
    return (
      <div 
        className={cn("flex items-center justify-center bg-gray-100 rounded-lg", containerClassName)}
        style={{ width, height }}
      >
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div 
      className={cn("relative overflow-hidden rounded-lg shadow-lg", containerClassName)}
      style={{ width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: animationDuration, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Carousel image ${currentIndex + 1}`}
              className={cn("w-full h-full object-cover", imageClassName)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className={cn(
              "absolute left-4 top-1/2 transform -translate-y-1/2 z-10",
              "w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full",
              "flex items-center justify-center transition-all duration-200",
              "hover:scale-110 active:scale-95",
              arrowClassName
            )}
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className={cn(
              "absolute right-4 top-1/2 transform -translate-y-1/2 z-10",
              "w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full",
              "flex items-center justify-center transition-all duration-200",
              "hover:scale-110 active:scale-95",
              arrowClassName
            )}
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                index === currentIndex 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/75",
                dotClassName
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
