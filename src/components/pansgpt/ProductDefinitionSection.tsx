'use client';
import { motion } from 'framer-motion';

const ProductDefinitionSection = () => {
  return (
    <section id="definition" className="py-24 md:py-32 bg-[#0f0f0f]">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Definition
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-12 leading-[1.1] tracking-tight">
            What is PansGPT?
          </h2>
          
          <div className="space-y-10 max-w-3xl">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              PansGPT is a closed-loop AI study platform built for pharmacy students at the University of Jos, Nigeria. It combines a document Reader, AI Chat, Notes, Quiz engine, and analytics — all anchored to verified curriculum content through Retrieval-Augmented Generation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDefinitionSection;
