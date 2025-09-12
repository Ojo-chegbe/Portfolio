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
      mockup: 'phone'
    },
    {
      id: 'inventory',
      title: 'Assedra: School Inventory Management',
      description: 'Transforming how schools handle their assets with a seamless, intelligent, and accessible inventory management system.',
      link: '/case-study/assedra',
      mockup: 'desktop'
    },
    {
      id: 'vaenine',
      title: 'Vaenine',
      description: 'Event platform for Nigeria with culturally intuitive design for discovery, attendance, and hosting.',
      link: '/case-study/Vaenine',
      mockup: 'tablet'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const MockupComponent = ({ type }: { type: string }) => {
    const mockupClasses = {
      laptop: 'w-48 h-28 bg-gray-200 rounded-lg',
      phone: 'w-16 h-28 bg-gray-200 rounded-2xl',
      desktop: 'w-52 h-32 bg-gray-200 rounded-lg',
      tablet: 'w-40 h-28 bg-gray-200 rounded-lg'
    };

    return (
      <div className={`${mockupClasses[type as keyof typeof mockupClasses]} flex items-center justify-center`}>
        <div className="w-3/4 h-3/4 bg-white rounded shadow-inner"></div>
      </div>
    );
  };

  return (
    <section id="work" className="py-24">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Featured Work
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="flex flex-col gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <Link key={project.id} href={project.link} className="block h-full">
              <motion.div
                className="bg-white rounded-xl overflow-hidden transition-all duration-50 hover:-translate-y-3 hover:shadow-lg group cursor-pointer flex flex-col md:flex-row"
                style={{
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
                }}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.05 }
                }}
              >
                <div className="w-full md:w-1/3 h-48 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                  {project.id === 'inventory' ? (
                    <Image
                      src="/images/Assedra/Cover-art.png"
                      alt="Assedra School Inventory Management"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : project.id === 'arexpal' ? (
                    <Image
                      src="/images/Arexpal/cover-art.png"
                      alt="Arexpal Cancer Prevention App"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : project.id === 'vaenine' ? (
                    <Image
                      src="/images/Vaenine/cover.jpg"
                      alt="Vaenine Event Platform"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <MockupComponent type={project.mockup} />
                  )}
                </div>
                
                <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <span className="case-study-link">
                    See case study →
                  </span>
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
