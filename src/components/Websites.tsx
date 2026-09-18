'use client';

import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Lock } from 'lucide-react';

export interface WebsiteProject {
  id: string;
  title: string;
  category: string;
  filterCategory: 'app' | 'platform' | 'client';
  domain: string;
  description: string;
  role: string;
  year: string;
  techStack: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  githubUrl?: string;
  image: string;
  status: 'Live' | 'Production' | 'Beta';
}

const websiteProjects: WebsiteProject[] = [
  {
    id: 'sleekrealm',
    title: 'Sleekrealm Interiors',
    category: 'Interior Design',
    filterCategory: 'client',
    domain: 'sleekrealminterior.com',
    description: 'Building a digital presence that makes a growing interior design business easier to trust.',
    role: 'UX/UI Design & Web Development',
    year: '2026',
    techStack: ['UX/UI Design', 'Web Design', 'Web Development'],
    liveUrl: 'https://www.sleekrealminterior.com/',
    caseStudyUrl: '/case-study/sleekrealm',
    image: '/images/sleekrealm/cover.png',
    status: 'Live',
  },
  {
    id: 'oncetra',
    title: 'Oncetra',
    category: 'Healthcare & Research',
    filterCategory: 'client',
    domain: 'oncetra.org',
    description: 'Giving a new cancer research and awareness organisation a clear identity and a place to grow.',
    role: 'Product Strategy & Web Engineering',
    year: '2026',
    techStack: ['Product Strategy', 'UX/UI Design', 'Web Design', 'Web Development'],
    liveUrl: 'https://oncetra.org/',
    caseStudyUrl: '/case-study/oncetra',
    image: '/images/oncetra/cover.png',
    status: 'Live',
  },
];

const Websites = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="websites" className="py-16 md:py-28 bg-[#080808] border-t border-zinc-900">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Websites I&apos;ve Built
          </h2>
        </motion.div>

        {/* Header Subtitle */}
        <div className="mb-12">
          <p className="text-zinc-400 text-sm md:text-base max-w-xl font-light leading-relaxed">
            A selection of live websites and digital platforms built by pairing UX design and product thinking with artificial intelligence—taking ideas from concept to production-ready web experiences.
          </p>
        </div>

        {/* Websites Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 w-full"
        >
          <AnimatePresence>
            {websiteProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col gap-5"
              >
                {/* Image Area - Sharp edges */}
                <Link 
                  href={project.caseStudyUrl || project.liveUrl || '#'} 
                  className="relative w-full aspect-[16/10] bg-[#161616] overflow-hidden block"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </Link>

                {/* Text Layout */}
                <div className="grid grid-cols-[1fr_2fr] gap-4 items-start pt-1">
                  <div className="text-[11px] md:text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {project.title.split(' — ')[0]}
                  </div>
                  <Link href={project.caseStudyUrl || project.liveUrl || '#'}>
                    <h3 className="text-sm md:text-base font-medium text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                      {project.description.split('.')[0] + (project.description.includes('.') ? '.' : '')}
                    </h3>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Websites;
