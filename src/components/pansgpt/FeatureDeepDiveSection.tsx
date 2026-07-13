'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

const features = [
  {
    id: 'reader',
    label: 'Reader',
    title: 'The Reader — The Heart of the Product',
    subtitle: 'If the Chat is PansGPT\'s voice, the Reader is its soul.',
    blocks: [
      {
        heading: 'Library & Discovery',
        text: 'Documents grouped by course, then by topic — mirroring students\' mental models. Reading progress indicators reduce reorientation time and create a quiet completeness signal. Last-opened document continuity means zero friction on return.',
      },
      {
        heading: 'The PDF Study Environment',
        text: 'The in-app reader exists because leaving the app breaks the learning loop entirely. Page navigation, zoom, and progress tracking are persistent. Desktop provides side-by-side reading-and-AI. Mobile uses focused single-column with contextual controls.',
      },
      {
        heading: 'Snip & Ask — Highest-Value Interaction',
        text: 'Student highlights a passage. Four options appear: Explain, Summarise, Send to Chat, Save to Notes. The AI response appears adjacent without displacing reading context. Reading position is preserved throughout.',
      },
    ],
    table: [
      { action: 'Explain', when: 'Don\'t understand — need it broken down' },
      { action: 'Summarise', when: 'Too dense — need key points extracted' },
      { action: 'Send to Chat', when: 'Need a real conversation — one question won\'t be enough' },
      { action: 'Save to Notes', when: 'Understood it — want to keep for revision' },
    ],
  },
  {
    id: 'chat',
    label: 'Chat',
    title: 'The Chat — Fast, Iterative, Connected',
    subtitle: 'An AI study tool\'s value is in the back-and-forth that builds understanding.',
    blocks: [
      {
        heading: 'Session Architecture',
        text: 'Sessions are named, persistent, and searchable. Students can maintain separate conversations for different topics. Session renaming turns untitled chat into a retrievable study resource.',
      },
      {
        heading: 'Multimodal Input',
        text: 'Voice follows a complete start-stop-transcribe flow — not streaming — a deliberate choice for Nigerian mobile networks. Image input supports direct attach, clipboard paste, and multi-image messages.',
      },
      {
        heading: 'Edit, Regenerate, Retry',
        text: 'Edit exists because students don\'t always know enough to ask the right question first. Regenerate serves when the answer is correct but badly framed. Retry is pure reliability — one-action recovery from any failure.',
      },
    ],
  },
  {
    id: 'notes',
    label: 'Notes',
    title: 'Notes — Where Understanding Becomes Permanent',
    subtitle: 'Make capture so frictionless that it happens as naturally as jotting on a notepad.',
    blocks: [
      {
        heading: 'Autosave & Provenance',
        text: 'Autosave is non-negotiable. Document-linked metadata preserves provenance — students returning weeks later can trace insights back to their origin and re-engage with full context.',
      },
      {
        heading: 'Bulk Operations & Export',
        text: 'Bulk deletion addresses end-of-semester cleanup. Export all notes for WhatsApp study groups, printed revision sheets, or external study apps.',
      },
    ],
  },
  {
    id: 'quiz',
    label: 'Quiz',
    title: 'Quiz — Assessment That Feeds Back Into Study',
    subtitle: 'Built as a learning cycle, not just a test tool.',
    blocks: [
      {
        heading: 'Progressive Configuration',
        text: 'Course and question count are immediately actionable. Advanced controls collapse behind a toggle with sensible defaults. Most students configure two fields and generate.',
      },
      {
        heading: 'Results That Drive Action',
        text: 'Score and topic breakdown surface targeted next-step actions based on weak topics. The shareable result card serves organic awareness when shared in WhatsApp study groups.',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Admin',
    title: 'Admin — Governance That Keeps AI Trustworthy',
    subtitle: 'The AI is only as reliable as the content feeding it.',
    blocks: [
      {
        heading: 'Dashboard & Pipeline',
        text: '30-second health checks. Every document has visible status: pending, processing, complete, failed. Cancel, retry, repair inline per document. Admins catch failures before students report them.',
      },
      {
        heading: 'Lecturer Moderation',
        text: 'No lecturer-submitted content enters the AI layer without explicit admin approval. The review queue is deliberate and logged. This gate is the primary quality control mechanism.',
      },
    ],
  },
];

const FeatureDeepDiveSection = () => {
  const [activeFeature, setActiveFeature] = useState('reader');
  const current = features.find(f => f.id === activeFeature)!;

  return (
    <section id="features" className="py-24 relative">
      <div className="container relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100 tracking-tight">Feature Deep-Dive</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Every surface in PansGPT is engineered for a specific moment in the learning loop. We stripped away the noise to leave only what accelerates understanding.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            
            {/* Sidebar Navigation (Sticky on Desktop) */}
            <div className="w-full lg:w-fit shrink-0 lg:sticky top-48 z-20">
              <div className="flex flex-row lg:flex-col lg:items-stretch gap-1 overflow-x-auto lg:overflow-visible hide-scrollbar pb-4 lg:pb-0 border border-zinc-800/80 bg-zinc-950/50 p-1">
                {features.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFeature(f.id)}
                    className={`px-6 py-2.5 text-sm font-medium transition-all duration-200 text-left whitespace-nowrap ${
                      activeFeature === f.id
                        ? 'bg-zinc-100 text-zinc-950 shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Context Header */}
                  <div className="mb-8 max-w-4xl">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 block">
                      {current.label} Experience
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4 leading-tight">{current.title}</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed">{current.subtitle}</p>
                  </div>

                  {/* Feature Image Placeholder (Top) */}
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-zinc-900/50 border border-zinc-800 flex flex-col items-center justify-center gap-3 mb-12">
                    <div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-zinc-500" />
                    </div>
                    <p className="text-sm font-mono text-zinc-600">[{current.id}-feature.png]</p>
                  </div>

                  {/* Text Blocks Grid (Bottom) */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 ${current.blocks.length >= 3 ? 'xl:grid-cols-3' : ''} gap-6 md:gap-8`}>
                    {current.blocks.map((block, i) => (
                      <div key={i} className="bg-zinc-900/30 border border-zinc-800/50 p-6 md:p-8 flex flex-col">
                        <h4 className="text-lg font-semibold text-zinc-200 mb-4">{block.heading}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">{block.text}</p>
                      </div>
                    ))}

                    {/* Table (if any) spans full width */}
                    {current.table && (
                      <div className="col-span-1 md:col-span-2 xl:col-span-full mt-4">
                        <div className="border border-zinc-800/60 overflow-hidden bg-zinc-900/20">
                          {current.table.map((row, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-b border-zinc-800/50 last:border-0 p-5 hover:bg-zinc-900/40 transition-colors">
                              <span className="text-sm font-semibold text-zinc-200 sm:w-48 flex-shrink-0 pt-0.5">{row.action}</span>
                              <span className="text-sm text-zinc-400 leading-relaxed">{row.when}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureDeepDiveSection;
