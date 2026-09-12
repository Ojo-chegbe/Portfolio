'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PansGptHeroArt from './PansGptHeroArt';

const HeroSection = () => (
  <section id="overview" className="pt-36 pb-20 md:pt-44 md:pb-28">
    <div className="container max-w-5xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Top Bar Navigation */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>

          <a
            href="https://pansgpt.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Visit Site</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-sm font-medium text-zinc-400 mb-4 tracking-wide">
          Case Study &bull; EdTech &amp; Applied AI &bull; 2024
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.08]">
          PansGPT: AI Academic Co-Pilot
        </h1>

        <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-8">
          Designing an AI-powered academic learning platform for pharmacy students at the University of Jos.
        </p>

        {/* Visit Live Site Button */}
        <div className="mb-12">
          <a
            href="https://pansgpt.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-semibold transition-all shadow-lg hover:shadow-white/10"
          >
            <span>Visit Live Site</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Metadata Line */}
        <div className="flex flex-wrap gap-x-12 gap-y-4 py-6 border-y border-white/10 text-sm mb-16">
          <div>
            <span className="text-zinc-500 block">Role</span>
            <span className="text-zinc-200 font-medium">Sole UX Designer</span>
          </div>
          <div>
            <span className="text-zinc-500 block">Institution</span>
            <span className="text-zinc-200 font-medium">University of Jos</span>
          </div>
          <div>
            <span className="text-zinc-500 block">Platforms</span>
            <span className="text-zinc-200 font-medium">Web &bull; Android &bull; iOS</span>
          </div>
          <div>
            <span className="text-zinc-500 block">Status</span>
            <a
              href="https://pansgpt.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <span>Live at pansgpt.site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Hero Cover Animated Glowing Artwork */}
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-none overflow-hidden border border-zinc-800/80 mb-16 shadow-2xl">
          <PansGptHeroArt />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
