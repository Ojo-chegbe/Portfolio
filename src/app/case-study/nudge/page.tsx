'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NudgeCaseStudy = () => {
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

            <a
              href="https://nudge-lilac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>Visit App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Header & Title */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.06]">
              Nudge
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-8">
              A tiny wallpaper app built to help me remember something I kept forgetting: sit straight.
            </p>

            {/* Visit Website CTA */}
            <div className="mb-10">
              <a
                href="https://nudge-lilac.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-medium transition-all shadow-lg hover:shadow-white/10"
              >
                <span>Get the app</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-y border-zinc-800/80 text-sm">
              <div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider block font-mono mb-1.5">Services</span>
                <span className="text-zinc-200 font-medium">UX/UI Design, Product Design, AI-assisted Development</span>
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
              src="/images/nudge/cover.jpg"
              alt="Nudge App"
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
                The problem was simple. I just kept forgetting it.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I spend a lot of time working on my laptop and phone, and over time I noticed myself developing a pretty bad sitting posture. I would notice that I was hunched over, sit up straight, and then somehow find myself in the exact same position twenty minutes later.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I needed a reminder that didn't depend on me remembering to check an app or respond to another notification. Since my phone is something I naturally look at dozens of times a day, I thought the simplest solution was to put the reminder somewhere I couldn't really miss it: my wallpaper.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                From a wallpaper idea to an actual product.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                My first thought was to simply design a wallpaper in Figma or CorelDRAW with a message like “Sit straight.”
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                But then I realised how inconvenient that would be. If I wanted to change the message, try another font, adjust the colours, or make a different version, I'd have to redesign it, export it, move it to my phone, and set it as my wallpaper all over again.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                That felt like too much work for something that was supposed to make my life easier. So I decided to build a small tool that could do it for me.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Making the reminder personal.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                The core idea behind Nudge is straightforward: type a reminder, make it look the way you want, and set it as your wallpaper.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Instead of forcing everyone into the same reminder, Nudge lets you decide what you need to be reminded about. It could be “Sit straight,” “Drink water,” “Stop scrolling,” “Focus,” or literally anything else.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                The customisation is deliberately simple. You can change the text, font and colours without having to design anything yourself. The goal wasn't to create another productivity app. It was to make the reminder itself impossible to overlook.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Keeping the experience as small as the problem.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Because the problem was so specific, I didn't want Nudge to become bloated with features.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                There are no complicated productivity systems, dashboards or things to configure before you can use it. The entire experience revolves around one simple action: create a reminder and put it where you'll see it.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                That simplicity became an important part of the design. Every screen exists to get the user closer to that one outcome.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Designed first. Built with AI.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I designed the screens and interaction myself, then used AI and vibe coding to turn the concept into a working Android application.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I also built a small landing page where people can learn what Nudge does and download the app.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                This project was interesting to me because it sits somewhere between product design and experimentation. I wasn't starting with a business requirement or a client brief. I had a small frustration in my own life, designed a solution for it, and then used the tools available to me to actually build it.
              </p>
            </section>

            {/* Section 6: Result */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                The result
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Nudge started as a very small idea: I wanted my phone to remind me to stop slouching.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                It became a lightweight tool for turning any reminder into something I naturally see throughout the day.
              </p>
              <p className="text-xl md:text-2xl text-white font-normal leading-relaxed pt-4 border-l-2 border-zinc-700 pl-6 my-8">
                It's also a good example of how I like to approach personal projects: notice a problem, simplify it as much as possible, design a solution, and build it instead of leaving the idea sitting in Figma.
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

export default NudgeCaseStudy;
