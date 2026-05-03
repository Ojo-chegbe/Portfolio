'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Articles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const articles = [
    {
      title: 'The Power of Notifications: Helpful or Just Annoying?',
      excerpt: 'Exploring the double-edged nature of digital interruptions in our daily lives',
      link: '/articles/notifications-power',
      image: '/images/Articles/apple-push-notifications-best-practices.webp',
      alt: 'Apple Push Notifications Best Practices'
    },
    {
      title: 'The bridge between Empathy and Code',
      excerpt: 'A reflection on the human-centered nature of User Experience Design',
      link: '/articles/empathy-and-code',
      image: '/images/Articles/bridge.png',
      alt: 'Bridge between Empathy and Code'
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
    <section id="articles" className="py-12 md:py-24 bg-[#080808]">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>Articles</h2>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {articles.map((article, index) => (
            <Link key={index} href={article.link} className="block h-full">
              <motion.article
                className="bg-zinc-900 overflow-hidden transition-all duration-100 hover:-translate-y-1 group cursor-pointer h-full flex flex-col border border-zinc-800"
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                }}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                    transition: { duration: 0.1, ease: "easeOut" }
                }}
              >
                <div className="h-48 flex-shrink-0 relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-100 group-hover:text-zinc-200 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  <span className="text-zinc-100 no-underline font-semibold transition-all duration-300 hover:text-zinc-200 hover:translate-x-1 inline-flex items-center gap-2 mt-auto">
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
