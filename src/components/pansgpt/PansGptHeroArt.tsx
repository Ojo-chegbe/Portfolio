'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export const PANSGPT_TAGLINES = [
  'Your AI-powered pharmacy study assistant',
  'Turn lecture slides into verified notes, quizzes & instant explanations',
  'Closed-loop RAG tailored for pharmacy students',
];

interface PansGptHeroArtProps {
  className?: string;
  compact?: boolean;
}

export default function PansGptHeroArt({ className = '', compact = false }: PansGptHeroArtProps) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [taglineFading, setTaglineFading] = useState(false);

  // Auto-cycle taglines every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineFading(true);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % PANSGPT_TAGLINES.length);
        setTaglineFading(false);
      }, 300);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleSelectTagline = (index: number) => {
    if (index === taglineIndex) return;
    setTaglineFading(true);
    setTimeout(() => {
      setTaglineIndex(index);
      setTaglineFading(false);
    }, 200);
  };

  return (
    <div
      className={`relative w-full h-full bg-[#141418] overflow-hidden flex flex-col justify-between select-none ${className}`}
    >
      {/* Top Branding Bar */}
      <div className={`flex items-center gap-2.5 z-20 w-fit ${compact ? 'p-6' : 'p-8 md:p-12'}`}>
        <Image
          src="/icon.svg"
          alt="PansGPT icon"
          width={compact ? 24 : 32}
          height={compact ? 24 : 32}
          className={`${compact ? 'h-6 w-6' : 'h-8 w-8'} object-contain`}
          priority
        />
        <span className="text-white text-lg md:text-xl font-bold tracking-tight">
          PansGPT
        </span>
      </div>

      {/* Center Animated Glowing Vector Artwork */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${
          compact
            ? 'scale-[0.6] sm:scale-[0.7] md:scale-[0.75] -translate-y-4'
            : 'scale-[0.65] sm:scale-[0.8] md:scale-[0.9] lg:scale-100'
        } origin-center`}
      >
        <svg
          viewBox="0 0 827.58 887.58"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[820px] h-[820px] max-w-none"
        >
          <defs>
            <filter id="pans-green-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <style>{`
              .pans-base-stroke {
                fill: none;
                stroke: rgba(255, 255, 255, 0.12);
                stroke-miterlimit: 10;
                stroke-width: 2;
              }
              .pans-glow-stroke {
                fill: none;
                stroke: #10b981;
                stroke-miterlimit: 10;
                stroke-width: 3.5;
                filter: url(#pans-green-glow);
                stroke-dasharray: 380 1840;
                stroke-dashoffset: 0;
                opacity: 0.95;
              }
              .pans-glow-1 { stroke-dashoffset: 0; animation: pans-dash-move 6s linear infinite; }
              .pans-glow-2 { stroke-dashoffset: -730; animation: pans-dash-move 6s linear infinite; }
              .pans-glow-3 { stroke-dashoffset: -1460; animation: pans-dash-move 6s linear infinite; }
              @keyframes pans-dash-move {
                from { stroke-dashoffset: 0; }
                to { stroke-dashoffset: -2220; }
              }
            `}</style>
          </defs>

          {/* Base Vector Track Lines */}
          <g opacity="0.35">
            <path
              className="pans-base-stroke"
              d="M563.4,563.72c-7.48,7.11-50.33-54.02-112.23-56.76-67.35-2.98-119.86,64.82-127.71,56.76-7.83-8.04,61.02-58.42,59.41-124.68-1.53-63-65.96-108.54-59.41-115.25,6.56-6.73,54.04,56.68,118.25,57.19,65.48.52,114.29-64.66,121.69-57.19,7.07,7.15-53.19,51.06-55.47,113.52-2.45,67.12,63.4,118.88,55.47,126.42Z"
            />
            <path
              className="pans-base-stroke"
              d="M826.58,97.2v653.07c0,6.26-7.57,9.4-12,4.97l-92.53-92.53c-9.05-9.05-14.13-21.32-14.13-34.11v-33.29c0-11.31,13.67-16.97,21.67-8.98l30.23,30.23c2.74,2.74,7.43.8,7.43-3.08V96.87c0-20.17-16.35-36.51-36.51-36.51H224.56c-7.74,0-11.62,9.36-6.14,14.83l69.64,69.64c5.38,5.38,12.68,8.4,20.29,8.4h378.47c11.65,0,21.09,9.44,21.09,21.09v17.15c0,11.65-9.44,21.09-21.09,21.09h-409.46c-3.51,0-6.88-1.39-9.36-3.88L86.11,26.78c-9.51-9.51-2.77-25.78,10.68-25.78h633.59c53.13,0,96.2,43.07,96.2,96.2Z"
            />
            <path
              className="pans-base-stroke"
              d="M809.64,886.58H249.42c-53.13,0-96.2-43.07-96.2-96.2v-484.95c0-5.73-2.28-11.22-6.33-15.28l-71-71c-5.74-5.74-15.56-1.67-15.56,6.44v487.66c0,11.65-9.44,21.09-21.09,21.09h-17.15c-11.65,0-21.09-9.44-21.09-21.09V88.79c0-10.5,12.69-15.75,20.11-8.33l185.11,185.11c4.05,4.05,6.33,9.55,6.33,15.28v509.87c0,20.17,16.35,36.51,36.51,36.51h434.92l-86.55-86.55c-4.05-4.05-9.55-6.33-15.28-6.33h-289.16c-11.65,0-21.09-9.44-21.09-21.09v-16.64c0-11.93,9.67-21.6,21.6-21.6h313.2c5.74,0,11.25,2.29,15.3,6.35l192.62,193.22c4.42,4.43,1.28,12-4.98,12Z"
            />
          </g>

          {/* Glowing Green Animated Pulse Strokes */}
          <path
            className="pans-glow-stroke pans-glow-1"
            d="M563.4,563.72c-7.48,7.11-50.33-54.02-112.23-56.76-67.35-2.98-119.86,64.82-127.71,56.76-7.83-8.04,61.02-58.42,59.41-124.68-1.53-63-65.96-108.54-59.41-115.25,6.56-6.73,54.04,56.68,118.25,57.19,65.48.52,114.29-64.66,121.69-57.19,7.07,7.15-53.19,51.06-55.47,113.52-2.45,67.12,63.4,118.88,55.47,126.42Z"
          />
          <path
            className="pans-glow-stroke pans-glow-2"
            d="M826.58,97.2v653.07c0,6.26-7.57,9.4-12,4.97l-92.53-92.53c-9.05-9.05-14.13-21.32-14.13-34.11v-33.29c0-11.31,13.67-16.97,21.67-8.98l30.23,30.23c2.74,2.74,7.43.8,7.43-3.08V96.87c0-20.17-16.35-36.51-36.51-36.51H224.56c-7.74,0-11.62,9.36-6.14,14.83l69.64,69.64c5.38,5.38,12.68,8.4,20.29,8.4h378.47c11.65,0,21.09,9.44,21.09,21.09v17.15c0,11.65-9.44,21.09-21.09,21.09h-409.46c-3.51,0-6.88-1.39-9.36-3.88L86.11,26.78c-9.51-9.51-2.77-25.78,10.68-25.78h633.59c53.13,0,96.2,43.07,96.2,96.2Z"
          />
          <path
            className="pans-glow-stroke pans-glow-3"
            d="M809.64,886.58H249.42c-53.13,0-96.2-43.07-96.2-96.2v-484.95c0-5.73-2.28-11.22-6.33-15.28l-71-71c-5.74-5.74-15.56-1.67-15.56,6.44v487.66c0,11.65-9.44,21.09-21.09,21.09h-17.15c-11.65,0-21.09-9.44-21.09-21.09V88.79c0-10.5,12.69-15.75,20.11-8.33l185.11,185.11c4.05,4.05,6.33,9.55,6.33,15.28v509.87c0,20.17,16.35,36.51,36.51,36.51h434.92l-86.55-86.55c-4.05-4.05-9.55-6.33-15.28-6.33h-289.16c-11.65,0-21.09-9.44-21.09-21.09v-16.64c0-11.93,9.67-21.6,21.6-21.6h313.2c5.74,0,11.25,2.29,15.3,6.35l192.62,193.22c4.42,4.43,1.28,12-4.98,12Z"
          />
        </svg>
      </div>

      {/* Bottom Subtle Gradient Shade */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(7,7,9,0.7) 70%, #070709 100%)',
        }}
      />

      {/* Bottom Tagline & Pharmacy Badge */}
      <div className={`z-20 relative max-w-xl ${compact ? 'p-6 pt-0' : 'p-8 md:p-12'}`}>
        <div className="inline-flex items-center rounded-none border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
          Built for Pharmacy School
        </div>
        <p
          className={`mt-3 md:mt-4 font-medium leading-relaxed text-zinc-200 transition-opacity duration-300 ${
            compact ? 'text-xs md:text-sm max-w-sm' : 'text-base md:text-lg max-w-md'
          }`}
          style={{ opacity: taglineFading ? 0 : 1 }}
        >
          {PANSGPT_TAGLINES[taglineIndex]}
        </p>

        {/* Step indicator bars */}
        <div className="flex gap-2 mt-4">
          {PANSGPT_TAGLINES.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handleSelectTagline(index);
              }}
              aria-label={`Select tagline ${index + 1}`}
              className={`h-1 transition-all duration-300 rounded-none cursor-pointer ${
                index === taglineIndex
                  ? 'w-8 bg-emerald-500 opacity-100'
                  : 'w-6 bg-zinc-800 opacity-60 hover:opacity-100'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
