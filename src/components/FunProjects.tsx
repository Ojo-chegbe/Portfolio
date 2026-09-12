'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface FunProject {
  id: string;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  image: string;
  icon: string;
}

const funProjects: FunProject[] = [
  {
    id: 'nudge',
    title: 'Nudge',
    description: 'Turn your screen into a daily reminder of your goals, habits, and standards to build discipline every time you unlock your phone.',
    liveUrl: 'https://nudge-lilac.vercel.app/',
    caseStudyUrl: '/case-study/nudge',
    image: '/images/nudge/cover.jpg', 
    icon: '/images/nudge/icon.jpg',
  },
  {
    id: 'focus',
    title: 'Focus',
    description: 'A desktop focus tool built around one idea: sometimes you need more than a timer to protect your attention from digital distraction.',
    caseStudyUrl: '/case-study/focus',
    image: '/images/focus/focus-bg.jpg',
    icon: '/images/focus/icon.png',
  },
];

// Cloned buffer for infinite looping
const carouselProjects = [
  ...funProjects.map(p => ({ ...p, uniqueKey: `set0-${p.id}` })),
  ...funProjects.map(p => ({ ...p, uniqueKey: `set1-${p.id}` })),
  ...funProjects.map(p => ({ ...p, uniqueKey: `set2-${p.id}` })),
  ...funProjects.map(p => ({ ...p, uniqueKey: `set3-${p.id}` })),
  ...funProjects.map(p => ({ ...p, uniqueKey: `set4-${p.id}` })),
];

const FunProjects = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Start at index 4 (first item of set 2)
  const [currentIndex, setCurrentIndex] = useState(4);
  const [isSnapping, setIsSnapping] = useState(false);
  const [cardStep, setCardStep] = useState(524);

  const activeProjectIndex = ((currentIndex % funProjects.length) + funProjects.length) % funProjects.length;

  // Dynamically compute card step (width + 24px gap)
  useEffect(() => {
    const updateStep = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        if (rect.width > 0) {
          setCardStep(rect.width + 24);
        }
      }
    };

    updateStep();
    const timer = setTimeout(updateStep, 100);
    window.addEventListener('resize', updateStep);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateStep);
    };
  }, []);

  // When snapping (seamless reset to middle set), re-enable transitions in next frame
  useEffect(() => {
    if (isSnapping) {
      const frame = requestAnimationFrame(() => {
        setIsSnapping(false);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isSnapping]);

  const handleNext = () => {
    if (isSnapping) return;
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isSnapping) return;
    setCurrentIndex(prev => prev - 1);
  };

  const handleAnimationComplete = () => {
    // If we've scrolled outside the middle set (set 2: indices 4 and 5),
    // silently snap to the matching card in the middle set
    if (currentIndex >= 6 || currentIndex <= 3) {
      setIsSnapping(true);
      const normalized = 4 + (((currentIndex - 4) % 2 + 2) % 2);
      setCurrentIndex(normalized);
    }
  };

  return (
    <section id="fun-projects" className="py-20 md:py-32 bg-[#050505] border-t border-zinc-900 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div 
            className="lg:col-span-4 flex flex-col justify-center relative z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              Apps I built to solve my problems.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-10 leading-relaxed max-w-md">
              A collection of experimental apps and tools I built to solve my own day-to-day problems using artificial intelligence.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <button 
                  onClick={handlePrev} 
                  className="w-12 h-12 bg-[#121212] flex items-center justify-center hover:bg-[#1a1a1a] transition-colors rounded-none cursor-pointer"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5 text-zinc-400" />
                </button>
                <button 
                  onClick={handleNext} 
                  className="w-12 h-12 bg-white flex items-center justify-center hover:bg-zinc-200 transition-colors rounded-none cursor-pointer"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* Carousel Count Indicator */}
              <div className="font-mono text-xs md:text-sm tracking-widest flex items-center select-none pl-1">
                <span className="text-white font-semibold tabular-nums">
                  {String(activeProjectIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-zinc-600 mx-2 font-light">/</span>
                <span className="text-zinc-500 tabular-nums">
                  {String(funProjects.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column / Slider */}
          <motion.div 
            className="lg:col-span-8 relative w-full lg:ml-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Gradient mask for smooth edge fading */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none hidden md:block" />
            
            {/* Carousel Overflow Viewport */}
            <div className="overflow-hidden pb-8 pt-4 px-4 -mx-4 md:px-0 md:mx-0">
              <motion.div
                drag="x"
                dragConstraints={{ left: -10000, right: 10000 }}
                dragElastic={0.12}
                onDragStart={() => {
                  isDraggingRef.current = true;
                }}
                onDragEnd={(_e, info) => {
                  setTimeout(() => {
                    isDraggingRef.current = false;
                  }, 60);

                  const offset = info.offset.x;
                  const velocity = info.velocity.x;
                  const threshold = Math.min(cardStep * 0.15, 80);
                  const cardsMoved = Math.round(-offset / cardStep);

                  if (Math.abs(cardsMoved) >= 1) {
                    setCurrentIndex(prev => prev + cardsMoved);
                  } else if (offset < -threshold || velocity < -250) {
                    handleNext();
                  } else if (offset > threshold || velocity > 250) {
                    handlePrev();
                  }
                }}
                animate={{ x: -currentIndex * cardStep }}
                transition={
                  isSnapping
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 220, damping: 28, mass: 0.8 }
                }
                onAnimationComplete={handleAnimationComplete}
                className="flex gap-6 cursor-grab active:cursor-grabbing select-none"
              >
                {carouselProjects.map((project, index) => (
                  <div 
                    ref={index === 0 ? cardRef : undefined}
                    key={project.uniqueKey} 
                    onClick={() => {
                      if (isDraggingRef.current) return;
                      if (project.caseStudyUrl) {
                        router.push(project.caseStudyUrl);
                      }
                    }}
                    className={`w-[85vw] md:w-[450px] lg:w-[500px] flex-shrink-0 bg-[#161616] p-5 flex flex-col transition-colors duration-300 relative z-0 group select-none ${
                      project.caseStudyUrl ? 'cursor-pointer hover:bg-[#1a1a1a]' : ''
                    }`}
                  >
                    {project.caseStudyUrl && (
                      <Link 
                        href={project.caseStudyUrl} 
                        onClick={(e) => {
                          if (isDraggingRef.current) {
                            e.preventDefault();
                            e.stopPropagation();
                          }
                        }}
                        className="absolute inset-0 z-20 cursor-pointer" 
                        aria-label={`View ${project.title} case study`}
                      />
                    )}

                    {/* Image Container */}
                    <div className="w-full aspect-[4/3] md:aspect-[16/11] max-h-[300px] bg-[#1c1c1c] mb-6 relative overflow-hidden flex items-center justify-center">
                      {project.image ? (
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          sizes="(max-width: 768px) 85vw, 500px"
                          draggable={false}
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03] pointer-events-none select-none" 
                        />
                      ) : (
                        <div className="text-zinc-600 font-medium text-sm flex flex-col items-center gap-3">
                          <div className="w-12 h-12 bg-zinc-800/50 flex items-center justify-center">
                            <span className="text-xs text-zinc-400">AI</span>
                          </div>
                          Screenshot
                        </div>
                      )}
                    </div>
                    
                    {/* Details */}
                    <div className="flex gap-4 items-start px-1">
                      {/* App Icon */}
                      <div className="w-14 h-14 bg-[#1c1c1c] flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                        {project.icon ? (
                          <Image 
                            src={project.icon} 
                            alt={`${project.title} icon`} 
                            fill 
                            draggable={false}
                            className="object-cover pointer-events-none select-none" 
                          />
                        ) : (
                          <span className="text-zinc-500 font-bold text-xl">{project.title.charAt(0)}</span>
                        )}
                      </div>
                      
                      {/* Text */}
                      <div className="flex flex-col gap-1.5 pt-1 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                          {project.caseStudyUrl && (
                            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 group-hover:text-white transition-colors">
                              Case Study &rarr;
                            </span>
                          )}
                        </div>
                        <p className="text-zinc-400 text-[13px] md:text-sm leading-relaxed pr-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FunProjects;
