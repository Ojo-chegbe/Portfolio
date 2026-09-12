'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';



const LearningLoopSection = () => {
  return (
    <section id="learning-loop" className="py-24 md:py-32 bg-[#0f0f0f]">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Learning Loop
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-8 leading-[1.1] tracking-tight">
            The Learning Loop
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mb-16">
            Everything in PansGPT maps to a six-stage loop. It is not just a feature list but a cycle students repeat throughout the semester to deepen their understanding.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-[1.1] max-w-2xl mx-auto mb-20 overflow-hidden flex items-center justify-center p-4 md:p-8"
          >
            <Image
              src="/images/pansgpt/the-loop.png"
              alt="PansGPT Learning Loop"
              fill
              className="object-contain"
              priority
            />
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default LearningLoopSection;
