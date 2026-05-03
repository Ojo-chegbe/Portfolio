'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const Highlights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const element = scrollRef.current.children[0] as HTMLElement;
    const cardWidth = element?.offsetWidth || 320;
    const index = Math.round(scrollPosition / (cardWidth + 24));
    if (index >= 0 && index < highlights.length) {
      setActiveIndex(index);
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const element = scrollRef.current.children[0] as HTMLElement;
    const cardWidth = element?.offsetWidth || 320;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + 24),
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const highlights = [
    {
      title: 'Multidisciplinary Foundation',
      description: 'Combining design, vibe development, and business strategy for holistic product solutions',
      tags: ['Strategy', 'Design']
    },
    {
      title: 'Cross-Team Communication',
      description: 'Bridging gaps between design, engineering, and stakeholders for seamless collaboration',
      tags: ['Leadership', 'Collab']
    },
    {
      title: 'Technical Feasibility',
      description: 'Making informed design decisions grounded in technical constraints and possibilities',
      tags: ['Eng', 'Analysis']
    },
    {
      title: 'AI Acceleration',
      description: 'Utilizing artificial intelligence tools and methodologies to enhance design efficiency',
      tags: ['AI', 'Efficiency']
    },
    {
      title: 'Hands-on Development',
      description: 'Ensuring scalable UX decisions through practical coding and implementation knowledge',
      tags: ['Dev', 'UX']
    }
  ];

  return (
    <section id="highlights" className="py-12 md:py-24 bg-[#0b0b0b]">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div 
          className="section-header mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold tracking-tight">Professional Highlights</h2>
        </motion.div>
        
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
          className={`flex overflow-x-auto gap-6 pb-10 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="flex-shrink-0 w-[320px] md:w-[400px] aspect-square bg-[#161616] p-10 flex flex-col justify-between border border-zinc-900 relative group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                  {highlight.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-800/50 text-[9px] uppercase tracking-widest text-zinc-500 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-7xl font-bold text-zinc-800/20 leading-none tracking-tighter">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                  {highlight.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[280px]">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {highlights.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-zinc-100 w-6 h-2"
                  : "bg-zinc-600 w-2 h-2 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
