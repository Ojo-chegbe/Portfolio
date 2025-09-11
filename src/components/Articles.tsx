'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const Articles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const articles = [
    {
      title: 'The Power of Notifications: Helpful or Just Annoying?',
      excerpt: 'Exploring the double-edged nature of digital interruptions in our daily lives',
      link: '/articles/notifications-power'
    },
    {
      title: 'The bridge between Empathy and Code',
      excerpt: 'A reflection on the human-centered nature of User Experience Design',
      link: '/articles/empathy-and-code'
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="articles" className="py-24 bg-gray-50">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Articles
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {articles.map((article, index) => (
            <Link key={index} href={article.link} className="block h-full">
              <motion.article
                className="bg-white rounded-xl overflow-hidden transition-all duration-50 hover:-translate-y-2 hover:shadow-lg group cursor-pointer h-full flex flex-col"
                style={{
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
                }}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.05, ease: "easeOut" }
                }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0"></div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  <span className="text-gray-900 no-underline font-semibold transition-all duration-300 hover:text-gray-700 hover:translate-x-1 inline-flex items-center gap-2 mt-auto">
                    Read more →
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
