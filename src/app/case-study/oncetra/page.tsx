'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OncetraCaseStudy = () => {
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
              href="/#websites"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Websites</span>
            </Link>

            <a
              href="https://oncetra.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>Visit Website</span>
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
              Oncetra
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-8">
              Giving a new cancer research and awareness organisation a clear identity and a place to grow.
            </p>

            {/* Visit Website CTA */}
            <div className="mb-10">
              <a
                href="https://oncetra.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-medium transition-all shadow-lg hover:shadow-white/10"
              >
                <span>Visit the website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-zinc-800/80 text-sm">
              <div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider block font-mono mb-1.5">Services</span>
                <span className="text-zinc-200 font-medium">Product Strategy, UX/UI Design, Web Design, Web Development</span>
              </div>
              <div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider block font-mono mb-1.5">Industry</span>
                <span className="text-zinc-200 font-medium">Cancer Research, Healthcare, Public Health</span>
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
            className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-zinc-950 overflow-hidden mb-16 md:mb-24 border border-zinc-800/70"
          >
            <Image
              src="/images/oncetra/cover.png"
              alt="Oncetra Website"
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
                Turning a big mission into something people could understand.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Oncetra was being built around a simple but ambitious idea: improve how cancer is understood, prevented, detected and treated, particularly within underserved communities. But communicating that mission was not quite as simple. Research, awareness, prevention, early diagnosis and treatment are all important parts of the organisation, and putting them together without making the brand feel scattered was one of the biggest challenges.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I designed the website to give Oncetra a clear public identity while leaving enough room for the organisation to grow. Instead of presenting it as another generic healthcare organisation, the experience focuses on the people and problems behind the mission. The website introduces what Oncetra is trying to change, why the work matters and the kind of impact the organisation hopes to create.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Building trust before asking people to care.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                For an organisation working in cancer, credibility is especially important. Someone visiting the website could be a patient, healthcare professional, researcher, potential partner, donor or someone simply trying to understand the organisation. Each person needs a different reason to stay, but they all need to feel that Oncetra is serious about its work.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                The website therefore gives the mission enough context before moving into the different areas of work. Research and innovation sit alongside cancer awareness, prevention and access to better care, creating a clearer picture of Oncetra as an organisation working across the wider cancer ecosystem rather than focusing on one isolated problem.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                The visual direction was intentionally clean and confident. Healthcare websites can easily become clinical or overly institutional, so the goal was to create something that felt credible without losing the human side of the mission.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Designed to grow with the organisation.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Oncetra is still at the beginning of its journey, which meant the website could not be designed only around what exists today. It needed to provide a foundation for future research, initiatives, partnerships, educational resources and programmes without requiring the entire experience to be rebuilt every time something new is introduced.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                That influenced the way information is structured across the site. The website creates clear spaces for Oncetra to communicate its work while keeping the overall experience simple enough for someone encountering the organisation for the first time.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                The result is a digital foundation that does more than introduce Oncetra. It gives the organisation somewhere to build its credibility, communicate its progress and bring more people into the mission as the work develops.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                For me, the project was ultimately about taking something much bigger than a website and giving it a form people could understand. Oncetra has a long term vision for changing how cancer is approached, and the website needed to be the first expression of that vision.
              </p>
              <p className="text-xl md:text-2xl text-white font-normal leading-relaxed pt-4 border-l-2 border-zinc-700 pl-6 my-8">
                The goal was not just to build a website for Oncetra. It was to give the mission somewhere to begin.
              </p>
            </section>

            {/* Bottom Navigation */}
            <div className="pt-16 border-t border-zinc-800 flex justify-between items-center text-sm">
              <Link
                href="/#websites"
                className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                &larr; Back to Websites
              </Link>
              <Link
                href="/case-study/sleekrealm"
                className="text-white hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5 font-medium"
              >
                <span>Next Website: Sleekrealm Interiors</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default OncetraCaseStudy;
