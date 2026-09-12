'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SleekrealmCaseStudy = () => {
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
              href="https://www.sleekrealminterior.com/"
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
              Sleekrealm Interiors
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-8">
              Building a digital presence that makes a growing interior design business easier to trust.
            </p>

            {/* Visit Website CTA */}
            <div className="mb-10">
              <a
                href="https://www.sleekrealminterior.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-medium transition-all shadow-lg hover:shadow-white/10"
              >
                <span>Visit the website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-y border-zinc-800/80 text-sm">
              <div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider block font-mono mb-1.5">Services</span>
                <span className="text-zinc-200 font-medium">UX/UI Design, Web Design, Web Development</span>
              </div>
              <div>
                <span className="text-zinc-500 text-xs uppercase tracking-wider block font-mono mb-1.5">Industry</span>
                <span className="text-zinc-200 font-medium">Interior Design</span>
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
              src="/images/sleekrealm/cover.png"
              alt="Sleekrealm Interiors Website"
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
                The website needed to do more than showcase beautiful spaces.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Sleekrealm Interiors already had the most important part of an interior design business: good work. The challenge was creating a digital experience that could communicate that quality to someone discovering the business for the first time. The website needed to make the brand feel credible, give potential clients a clear understanding of what Sleekrealm does, and ultimately make it easier for the right people to start a conversation.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                I approached it less like a portfolio and more like a digital storefront. Every part of the experience had to answer a question a potential client might have. What does Sleekrealm do? What kind of spaces do they work on? What makes their approach different? Can I trust them with my space? And most importantly, how do I get started?
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Turning the portfolio into a business tool.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Because interior design is so visual, the projects needed to do most of the talking. Rather than overwhelming visitors with every project or service, the website uses selected work to communicate the range and quality of Sleekrealm&apos;s capabilities. Residential spaces, salons, lounges and other commercial environments give different types of clients an immediate sense of what the studio can deliver.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                But the website could not rely on beautiful images alone. Sleekrealm has a distinct design philosophy built around intentional, functional and peaceful spaces, so the experience also needed to communicate the thinking behind the work. This gives the brand something more meaningful to compete on than aesthetics alone. Visitors are not just seeing what Sleekrealm creates. They are beginning to understand how the studio approaches design.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Designed around the decision to work with Sleekrealm.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Hiring an interior designer is a significant decision. A potential client is trusting someone with their money, their environment and often something deeply personal to them. That makes trust one of the most important jobs of the website.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                The experience therefore moves naturally from introduction to proof to action. The brand establishes what Sleekrealm stands for, the projects demonstrate what it can do, testimonials provide reassurance from previous clients, and the consultation journey gives interested visitors a clear next step. The result is a website that does not simply make Sleekrealm look established. It gives potential clients enough context and confidence to consider actually working with them.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                A digital home for the next stage of the business.
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                The final website gives Sleekrealm a stronger digital presence that can work alongside the business instead of simply existing as an online brochure. It presents the studio professionally, communicates its design philosophy, showcases its work in a way that supports conversion, and creates a clearer path from discovering the brand to making an enquiry.
              </p>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                For me, the project was ultimately about translating something that is difficult to communicate digitally: the feeling of being in a beautifully designed space. The website needed to create that same sense of quality and confidence before a potential client ever speaks to the team.
              </p>
              <p className="text-xl md:text-2xl text-white font-normal leading-relaxed pt-4 border-l-2 border-zinc-700 pl-6 my-8">
                The goal was not just to make Sleekrealm look good online. It was to make the website work for the business.
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
                href="/case-study/pansgpt"
                className="text-white hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5 font-medium"
              >
                <span>Selected Work: PansGPT</span>
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

export default SleekrealmCaseStudy;
