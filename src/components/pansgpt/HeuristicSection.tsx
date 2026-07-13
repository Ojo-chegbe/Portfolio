'use client';
import { motion } from 'framer-motion';

const heuristics = [
  { name: 'Visibility of system status', score: 4.5, note: 'Loading states, progress badges consistently implemented' },
  { name: 'Match to user\'s language', score: 4.2, note: 'Labels map directly to student mental models' },
  { name: 'User control and freedom', score: 4.4, note: 'Edit, regenerate, retry, cancel barriers available' },
  { name: 'Consistency and standards', score: 4.0, note: 'Largely consistent, minor mobile/desktop variation' },
  { name: 'Error prevention', score: 4.1, note: 'Pre-submission rules, confirmation dialogs' },
  { name: 'Recognition over recall', score: 4.0, note: 'Persistent navigation; some advanced discoverability gaps' },
  { name: 'Flexibility and efficiency', score: 4.3, note: 'Multi-select, bulk ops, progressive disclosure' },
  { name: 'Aesthetic and minimalist design', score: 3.8, note: 'Core clean; quiz config density slightly high' },
  { name: 'Error recovery quality', score: 4.2, note: 'Retry paths, specific messages, session preservation' },
  { name: 'Help and documentation', score: 3.6, note: 'Tutorial exists; contextual help inconsistent' },
];

const overallScore = 4.11;

const HeuristicSection = () => (
  <section id="heuristics" className="py-20">
    <div className="container">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-zinc-100">Heuristic Evaluation</h2>
        <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-3xl">
          Structured evaluation against Nielsen&apos;s ten usability heuristics, scored 1–5 across all three role surfaces.
        </p>

        {/* Overall Score */}
        <div className="flex items-center gap-6 mb-8 fill-secondary border border-zinc-800 p-6">
          <div className="text-center">
            <span className="text-5xl font-bold text-zinc-100">{overallScore}</span>
            <span className="text-lg text-zinc-500 ml-1">/ 5</span>
            <p className="text-xs text-zinc-500 mt-1">Overall Score</p>
          </div>
          <div className="flex-1 h-3 bg-zinc-800 overflow-hidden">
            <motion.div
              className="h-full bg-zinc-100"
              initial={{ width: 0 }}
              whileInView={{ width: `${(overallScore / 5) * 100}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Individual Scores */}
        <div className="space-y-2">
          {heuristics.map((h, i) => (
            <motion.div
              key={i}
              className="fill-secondary border border-zinc-800/50 p-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 md:w-72 flex-shrink-0">
                <span className="text-xs font-mono text-zinc-600 w-5">{i + 1}</span>
                <span className="text-sm font-medium text-zinc-200">{h.name}</span>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <div className="flex-1 h-2 bg-zinc-800 overflow-hidden">
                  <motion.div
                    className={`h-full ${h.score >= 4.0 ? 'bg-zinc-300' : 'bg-zinc-500'}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(h.score / 5) * 100}%` }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-sm font-bold text-zinc-100 w-10 text-right">{h.score}</span>
              </div>
              <span className="text-xs text-zinc-500 md:w-56 flex-shrink-0 hidden lg:block">{h.note}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeuristicSection;
