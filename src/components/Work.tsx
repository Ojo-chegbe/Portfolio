'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import PansGptHeroArt from '@/components/pansgpt/PansGptHeroArt';

interface Project {
  id: string;
  title: string;
  role?: string;
  description: string;
  link: string;
  isExternal?: boolean;
  image?: string;
}

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects: Project[] = [
    {
      id: 'soloa',
      title: 'Soloa AI',
      role: 'End-to-End Product Design · Cartolinks',
      description: 'All-in-one AI platform unifying 50+ generative models into a single workspace for text, image, audio, and video creation.',
      link: 'https://soloa.ai',
      isExternal: true,
      image: '/images/soloa/cover.png',
    },
    {
      id: 'pansgpt',
      title: 'PansGPT',
      description: 'AI-powered academic platform for pharmacy students. Closed-loop RAG system with Reader, Chat, Quiz, and Notes.',
      link: '/case-study/pansgpt',
    },
    {
      id: 'arexpal',
      title: 'Arexpal',
      description: 'Cancer-prevention lifestyle app. Personalized daily habit tracking for Nigerians.',
      link: '/case-study/arexpal',
    },
    {
      id: 'inventory',
      title: 'Assedra: School Inventory Management',
      description: 'Transforming how schools handle their assets with a seamless, intelligent, and accessible inventory management system.',
      link: '/case-study/assedra',
    },
    {
      id: 'gistbox',
      title: 'Gistbox',
      role: 'End-to-End Product Design · Cartolinks',
      description: 'Pan-African vertical microdrama streaming platform delivering bite-sized, 1–3 minute episodic African stories directly to mobile screens.',
      link: 'https://gistbox.tv',
      isExternal: true,
      image: '/images/gistbox/cover.png',
    },
    /* Vaenine turned off per user request
    {
      id: 'vaenine',
      title: 'Vaenine',
      description: 'Event platform for Nigeria with culturally intuitive design for discovery, attendance, and hosting.',
      link: '/case-study/Vaenine',
    },
    */
  ];

  return (
    <section id="work" className="py-12 md:py-24 bg-[#080808]">
      <div className="container">
        <motion.div
          className="section-header mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-semibold tracking-tight">Selected Work</h2>
        </motion.div>

        <motion.div ref={ref} className="flex flex-col gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const cardBody = (
              <motion.div
                className="bg-[#161616] overflow-hidden transition-all duration-500 group cursor-pointer flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 26 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="order-2 md:order-1 w-full md:w-[34%] p-12 flex flex-col justify-center bg-transparent">
                  {project.role && (
                    <span className="text-xs font-mono tracking-wider uppercase text-zinc-400 mb-3 block">
                      {project.role}
                    </span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 mb-10 leading-relaxed text-sm md:text-base max-w-xs">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 w-fit bg-white text-black text-sm font-bold rounded-none px-8 py-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span>{project.isExternal ? 'Visit live site' : 'See case study'}</span>
                    {project.isExternal && <ArrowUpRight className="w-4 h-4" />}
                  </span>
                </div>

                <div className="order-1 md:order-2 w-full md:w-[66%] h-[320px] md:h-[480px] overflow-hidden bg-[#121215] flex items-center justify-center flex-shrink-0">
                  {project.id === 'pansgpt' ? (
                    <PansGptHeroArt compact />
                  ) : project.id === 'inventory' ? (
                    <Image
                      src="/images/Assedra/Cover-art.png"
                      alt="Assedra School Inventory Management"
                      width={980}
                      height={620}
                      className="w-full h-full object-cover"
                    />
                  ) : project.id === 'arexpal' ? (
                    <Image
                      src="/images/Arexpal/cover-art.png"
                      alt="Arexpal Cancer Prevention App"
                      width={980}
                      height={620}
                      className="w-full h-full object-cover"
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={980}
                      height={620}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#121215] flex flex-col items-center justify-center p-8 text-center select-none group-hover:bg-[#15151a] transition-colors border-l border-zinc-800/30">
                      <div className="w-16 h-16 bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center mb-3">
                        <span className="text-xl font-bold text-zinc-300 font-mono">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-zinc-400">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );

            return project.isExternal ? (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                {cardBody}
              </a>
            ) : (
              <Link key={project.id} href={project.link} className="block group">
                {cardBody}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
