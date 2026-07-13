'use client';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="pt-48 pb-16 min-h-[80vh] flex items-center" style={{ paddingTop: '12rem' }}>
    <div className="container">
      <motion.div
        className="flex flex-col items-center text-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          {['EdTech', 'AI · RAG', 'Live Product'].map(t => (
            <span key={t} className="text-xs font-medium uppercase tracking-widest text-zinc-400 px-3 py-1 border border-zinc-800">{t}</span>
          ))}
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-zinc-100 max-w-4xl">
          PansGPT
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl font-medium">
          Designing an AI-Powered Academic Platform for Pharmacy Students
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {[
            { label: 'Role', value: 'Sole UX Designer' },
            { label: 'Institution', value: 'University of Jos' },
            { label: 'Platforms', value: 'Web · Android · iOS' },
            { label: 'Status', value: 'Live' },
          ].map(m => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="text-xs text-zinc-500 font-medium uppercase tracking-wide">{m.label}</span>
              <span className="text-base font-semibold text-zinc-100">{m.value}</span>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  </section>
);

export default HeroSection;
