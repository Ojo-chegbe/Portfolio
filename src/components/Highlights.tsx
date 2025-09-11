'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const highlights = [
    {
      title: 'Multidisciplinary Foundation',
      description: 'Combining design, vibe development, and business strategy for holistic product solutions'
    },
    {
      title: 'Effective Cross-Team Communication',
      description: 'Bridging gaps between design, engineering, and stakeholders for seamless collaboration'
    },
    {
      title: 'Deep Understanding of Technical Feasibility',
      description: 'Making informed design decisions grounded in technical constraints and possibilities'
    },
    {
      title: 'Leverage AI to Accelerate Product Building',
      description: 'Utilizing artificial intelligence tools and methodologies to enhance design efficiency'
    },
    {
      title: 'Hands-on Development Experience',
      description: 'Ensuring scalable UX decisions through practical coding and implementation knowledge'
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section id="highlights" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key strengths and expertise areas that drive exceptional product design outcomes
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="text-left"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-3 text-black">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
