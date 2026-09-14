'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FocusCaseStudy = () => {
  return (
    <main className="min-h-screen bg-[#080808] text-zinc-100 selection:bg-zinc-800 selection:text-white">
      <Header />

      <article className="pt-32 pb-24 md:pt-44 md:pb-36">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          
          {/* Top Bar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 flex items-center justify-between"
          >
            <Link
              href="/#fun-projects"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          {/* Header & Title */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.06]">
              Focus
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-8">
              A desktop focus tool built around one idea: sometimes you need more than a timer to stay focused.
            </p>

            <div className="mb-12">
              <a 
                href="https://github.com/Ojo-chegbe/focus/releases/download/v0.1.0/Focus-Setup-0.1.0.exe"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium text-sm rounded-full hover:bg-zinc-200 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download App (Windows)
              </a>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-y border-zinc-800/80 text-sm">
              <div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider block font-mono mb-1.5">Services</span>
                <span className="text-zinc-200 font-medium">Product Design, UX/UI Design, AI-assisted Development</span>
              </div>
              <div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider block font-mono mb-1.5">Type</span>
                <span className="text-zinc-200 font-medium">Personal Project</span>
              </div>
              <div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider block font-mono mb-1.5">Year</span>
                <span className="text-zinc-200 font-medium">2026</span>
              </div>
            </div>
          </motion.header>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-zinc-950 overflow-hidden mb-16 md:mb-24"
          >
            <Image
              src="/images/focus/focus-bg.jpg"
              alt="Focus Desktop Application"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </motion.div>

          {/* Editorial Case Study Content */}
          <div className="max-w-3xl mx-auto space-y-16 md:space-y-20">

            {/* Section 1 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                I didn't need another timer. I needed something that would stop me from getting distracted.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                When I'm working or studying, I usually know exactly what I should be doing. The problem is everything else that is one click away.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I could sit down intending to study for two hours, open my laptop, and tell myself I'll quickly check something. Then another tab opens, then another app, and before I know it, a significant part of the time I set aside for work is gone.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I've tried the usual solutions: timers, productivity apps, website blockers and telling myself to simply exercise more self control. The problem with most of them is that they still leave the final decision to me.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                When I'm already distracted, giving myself a button that says &ldquo;Disable&rdquo; isn't particularly helpful.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                So I decided to build something for myself.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Designing around the moment discipline usually fails.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                The idea behind Focus was not to help me remember that I should focus. I already know that.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                It was to create an environment where focusing becomes easier and distraction becomes harder.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I wanted to be able to decide beforehand what I was going to work on, what I didn't need during that time, and how long I wanted to stay focused. Once a session started, the app would enforce those decisions instead of constantly asking me to make them again.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                That became the foundation of the product.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Focus is about protecting a block of time.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                A focus session lets me set a period of time specifically for studying or working. During that period, distracting websites and applications can be blocked while the things I actually need remain available.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I can also create different focus profiles for different situations. A study session might need access to my notes, browser and certain academic tools, while a design session might need Figma and my browser but nothing else.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                The idea is simple: decide what deserves my attention before the session starts, then let Focus protect that decision.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Making distraction require a little more effort.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                One of the things I found interesting while designing Focus was that completely removing every escape route wasn't necessarily the right approach.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Instead, I wanted to introduce just enough friction between the impulse and the action.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                If I try to disable a restriction, there is a temporary limit. If I start a strict focus session, I can't simply change the rules halfway through. Even uninstalling the app requires an extra step.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                These decisions are not there to punish the user. They exist because the user who created the focus session and the user who wants to escape it five minutes later are often making very different decisions.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Focus is designed to help the first version of me win.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                The interface stays out of the way.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Because the product is meant to help me concentrate, the interface itself shouldn't become another source of distraction.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I kept the dashboard structured around the things that actually matter: what is being blocked, what is currently active, how much time I've spent focusing, and what my current session looks like.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                There is also a more immersive Focus Mode that strips the experience down further while a session is running. The intention is to make the transition from &ldquo;setting up my work&rdquo; to &ldquo;actually doing the work&rdquo; as short as possible.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Built because I wanted to see if I could solve the problem differently.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Focus started as a personal productivity problem, but it became an interesting product design exercise.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Instead of asking, &ldquo;How can I motivate someone to focus?&rdquo;, I started asking, &ldquo;What would happen if the environment itself helped them stay focused?&rdquo;
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                That shift shaped almost every decision in the product.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I designed the experience around my own habits and frustrations, then used AI and vibe coding to turn the concept into a working desktop application.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                It is still a personal experiment, but it represents something I find increasingly interesting about product design: sometimes the best way to understand a problem is to build the thing you wish existed.
              </p>
              <p className="text-xl md:text-2xl text-white font-normal leading-relaxed pt-4 border-l-2 border-zinc-700 pl-6 my-8">
                Focus is my attempt to make the right decision once, before the distractions start.
              </p>
            </section>

            {/* Bottom Navigation */}
            <div className="pt-16 border-t border-zinc-800 flex justify-between items-center text-sm">
              <Link
                href="/#fun-projects"
                className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                &larr; Back to Projects
              </Link>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default FocusCaseStudy;
