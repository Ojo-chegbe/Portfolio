'use client';
import { motion } from 'framer-motion';

const reliabilityFeatures = [
  { feature: 'Loading skeletons', desc: 'Prevents layout shift, signals active work' },
  { feature: 'Descriptive progress', desc: 'Specific stage descriptions, not generic spinners' },
  { feature: 'Retry co-location', desc: 'Retry buttons at the failure state, not in a separate menu' },
  { feature: 'Offline indicator', desc: 'Clear offline state — students know it\'s connection, not a crash' },
  { feature: 'Error messaging', desc: 'Every error says what happened, why, and what to do next' },
  { feature: 'Confirmation barriers', desc: 'Proportionate to action severity' },
];

const ReliabilitySection = () => (
  <section id="reliability" className="py-20">
    <div className="container">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-zinc-100">Designing for Imperfect Conditions</h2>
        <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-3xl">
          PansGPT operates where internet connectivity is genuinely variable — not hypothetically, but in practice, for students studying in Nigerian cities and campuses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {reliabilityFeatures.map((r, i) => (
            <motion.div
              key={i}
              className="fill-secondary border border-zinc-800 p-4 flex gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="w-1.5 bg-zinc-700 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-zinc-100 mb-1">{r.feature}</h4>
                <p className="text-xs text-zinc-400">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReliabilitySection;
