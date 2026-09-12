'use client';
import { motion } from 'framer-motion';

const OverviewSection = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-[#0f0f0f]">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Project Overview
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-12 leading-[1.1] tracking-tight">
            Where This Story Begins
          </h2>
          
          <div className="space-y-10 max-w-3xl">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Pharmacy school in Nigeria is brutal, not because the students aren't capable, but because the gap between what they need to master and what's realistically achievable in the time available is enormous.
            </p>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              And here's the thing nobody says out loud: when a student is stuck at 11pm trying to understand a mechanism of action, there is genuinely nobody to call. Lecturers aren't available. Peers are equally lost. And the internet will always tell you something. It just might not be right.
            </p>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Another dangerous reality is that ChatGPT and its cousins are trained on the open internet, a vast dataset that confidently produces fluent, plausible, and sometimes wrong answers. Students tried it. Several described the same specific anxiety: they could never be sure if what the model told them was curriculum-aligned, or just... convincing. For most subjects, that's an inconvenience. For pharmaceutical sciences, that's a liability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
