'use client';
import { motion } from 'framer-motion';

const painPoints = [
  {
    num: '01',
    title: 'Drowning in Volume',
    desc: 'With pharmacology modules spanning hundreds of pages, students often struggle to process information at the pace required by such a dense curriculum.',
    insight: 'The challenge lies in comprehension rather than access. Students need to transform complex data into lasting and practical knowledge.'
  },
  {
    num: '02',
    title: 'Nowhere to Go When Stuck',
    desc: 'Being stuck is a critical learning moment, yet it is when pharmacy students feel most isolated. Infrequent office hours and peer limitations leave many clinical questions unanswered.',
    insight: 'Instead of generic search results, students require a dedicated expert capable of providing context-specific explanations based on their actual coursework.'
  },
  {
    num: '03',
    title: 'A Schedule That Leaves No Room to Wander',
    desc: 'Pharmacy students do not just have lectures. They have lab practicals, assignments, clinical rotations, coursework submissions, and study group commitments stacked on top of each other week after week. The idea of moving between multiple apps, websites, or resources to understand a single concept is inefficient. When time is this scarce, context switching is a tax students cannot afford to pay.',
    insight: 'Every extra step between confusion and understanding is a place the study session ends. The platform needed to contain the entire resolution loop in one place.'
  }
];

const PainPointsSection = () => {
  return (
    <section id="research" className="py-24 md:py-32 bg-[#0f0f0f]">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Research
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-12 leading-[1.1] tracking-tight">
            Research & Problem Framing
          </h2>
          
          <div className="space-y-12 max-w-3xl">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Before any wireframe existed, I needed to understand how pharmacy students actually studied. Conversations with students surfaced three consistent pain points that became the product&apos;s entire design foundation.
            </p>

            <div className="space-y-16 mt-16">
              {painPoints.map((p, i) => (
                <div key={p.num} className="group">
                  <div className="flex items-start gap-6">
                    <span className="text-xs font-mono text-zinc-600 mt-2">{p.num}</span>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-2xl font-bold text-zinc-100">{p.title}</h3>
                      <p className="text-lg text-zinc-400 leading-relaxed">
                        {p.desc}
                      </p>
                      <div className="mt-2 pl-4 border-l border-zinc-800">
                        <p className="text-sm md:text-base text-zinc-500 italic leading-relaxed">
                          <span className="text-zinc-600 font-bold uppercase text-[10px] tracking-widest not-italic mr-3">Insight:</span>
                          {p.insight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-16 mt-16 border-t border-zinc-900">
              <h3 className="text-xl font-bold text-zinc-200 mb-4 tracking-tight">The Design Mandate</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                The goal was to create a unified ecosystem where students can access their curriculum, receive AI-powered explanations, and track their academic progress in one seamless experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
