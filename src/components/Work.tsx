'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
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
      id: 'vaenine',
      title: 'Vaenine',
      description: 'Event platform for Nigeria with culturally intuitive design for discovery, attendance, and hosting.',
      link: '/case-study/Vaenine',
    },
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
          {projects.map((project, index) => (
            <Link key={project.id} href={project.link} className="block group">
              <motion.div
                className="bg-[#161616] overflow-hidden transition-all duration-500 hover:border-zinc-700 group cursor-pointer flex flex-col md:flex-row border border-zinc-800"
                initial={{ opacity: 0, y: 26 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="order-2 md:order-1 w-full md:w-[34%] p-12 flex flex-col justify-center bg-[#0b0b0b] border-t md:border-t-0 md:border-r border-zinc-800">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 mb-10 leading-relaxed text-sm md:text-base max-w-xs">
                    {project.description}
                  </p>
                  <span className="inline-flex w-fit bg-white text-black text-sm font-bold rounded-none px-8 py-3 transition-transform duration-300 group-hover:translate-x-1">
                    See case study
                  </span>
                </div>

                <div className="order-1 md:order-2 w-full md:w-[66%] h-[320px] md:h-[480px] overflow-hidden bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  {project.id === 'inventory' ? (
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
                  ) : (
                    <Image
                      src="/images/Vaenine/cover.jpg"
                      alt="Vaenine Event Platform"
                      width={980}
                      height={620}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
