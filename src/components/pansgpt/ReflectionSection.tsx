'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ReflectionSection = () => (
  <section id="reflection" className="py-20">
    <div className="container">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-zinc-100">Reflection</h2>

        <div className="space-y-6">
          <div className="fill-secondary border border-zinc-800 p-6">
            <h3 className="text-lg font-bold text-zinc-100 mb-3">What Worked</h3>
            <div className="space-y-3">
              <p className="text-sm text-zinc-300 leading-relaxed">
                <strong className="text-zinc-100">Loop-first architecture</strong> — Designing each surface around a specific moment in a six-stage learning cycle produced a product where cross-surface transitions feel natural.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                <strong className="text-zinc-100">Notes integration</strong> — The ability to capture curriculum-anchored AI explanations into a persistent knowledge base without leaving the study context is the product&apos;s most distinctive experience advantage.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                <strong className="text-zinc-100">Admin governance</strong> — The processing status system reduced the failure mode where admins discovered ingestion problems only after students reported AI gaps.
              </p>
            </div>
          </div>

          <div className="fill-secondary border border-zinc-800 p-6">
            <h3 className="text-lg font-bold text-zinc-100 mb-3">What I&apos;d Do Differently</h3>
            <div className="space-y-3">
              <p className="text-sm text-zinc-300 leading-relaxed">
                <strong className="text-zinc-100">Mobile gesture interaction</strong> — Gesture-based snippet capture is the interaction I&apos;d prototype much earlier and push harder for before the first release.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                <strong className="text-zinc-100">Personalisation architecture</strong> — The data exists from day one. The design to surface it as proactive guidance only partially exists. That gap is the most important UX frontier remaining.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                <strong className="text-zinc-100">KPI framework timing</strong> — I&apos;d define the KPI framework before designing, not alongside it. Pre-defining success produces sharper decisions.
              </p>
            </div>
          </div>

          <div className="fill-secondary border border-zinc-800 p-6 border-l-4 border-l-zinc-500">
            <h3 className="text-lg font-bold text-zinc-100 mb-3">The Bigger Lesson</h3>
            <p className="text-sm text-zinc-300 leading-relaxed italic">
              &ldquo;The technology is only as valuable as the trust it earns. PansGPT&apos;s most important design decision was the commitment to curriculum-anchored, hallucination-resistant responses as a non-negotiable product requirement. Designing for a domain where credibility has real consequences for patient safety makes every decision feel weightier. I think that weight made the work better.&rdquo;
            </p>
          </div>
        </div>

        {/* End Navigation */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link
              href="/#work"
              className="text-zinc-300 no-underline font-semibold px-8 py-4 transition-all duration-300 hover:text-zinc-100"
            >
              ← Back to Work
            </Link>
            <Link
              href="/#contact"
              className="text-zinc-100 no-underline font-semibold px-8 py-4 transition-all duration-300 fill-secondary shadow-sm hover:-translate-y-1 hover:shadow-md border border-zinc-800"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReflectionSection;
