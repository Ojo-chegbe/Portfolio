'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface GalleryItem {
  url: string;
  label: string;
}

interface FeatureItem {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  image: string;
  gallery?: GalleryItem[];
  blocks: { heading: string; text: string }[];
  table?: { action: string; when: string }[];
}

const features: FeatureItem[] = [
  {
    id: 'reader',
    label: 'Reader',
    title: 'The Reader — The Heart of the Product',
    subtitle: 'If the Chat is PansGPT\'s voice, the Reader is its soul.',
    image: '/images/pansgpt/reader-copilot.png',
    gallery: [
      { url: '/images/pansgpt/reader-copilot.png', label: 'AI Co-pilot Stream' },
      { url: '/images/pansgpt/reader-contextual.png', label: 'Snip & Explain Overlay' },
      { url: '/images/pansgpt/reader-clean.png', label: 'Full Presentation View' },
      { url: '/images/pansgpt/library-view.png', label: 'Course Document Library' },
    ],
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
        text: 'Student highlights a passage. Contextual options appear: Explain, Summarise, Send to Chat, Save to Notes. The AI response appears adjacent without displacing reading context. Reading position is preserved throughout.',
      },
    ],
    table: [
      { action: 'Explain', when: 'Don\'t understand — need it broken down simply' },
      { action: 'Summarise', when: 'Too dense — need key high-yield takeaways extracted' },
      { action: 'Send to Chat', when: 'Need a real conversation — one question won\'t be enough' },
      { action: 'Save to Notes', when: 'Understood it — want to keep for long-term revision' },
    ],
  },
  {
    id: 'chat',
    label: 'Chat',
    title: 'The Chat — Fast, Iterative, Connected',
    subtitle: 'An AI study tool\'s value is in the back-and-forth that builds understanding.',
    image: '/images/pansgpt/chat-interface.png',
    blocks: [
      {
        heading: 'Cognitive Scaffolding Prompts',
        text: 'Integrated shortcut pills (Break down, Weak spots, Mnemonics, Teach back) guide students from passive information consumers to active, reflective learners.',
      },
      {
        heading: 'Multimodal Input & Low Latency',
        text: 'Designed specifically for Nigerian university network conditions with graceful offline tolerance, crisp mobile responsive forms, and multi-attachment capabilities.',
      },
      {
        heading: 'Edit, Regenerate, Retry',
        text: 'Edit exists because students don\'t always know enough to ask the right question first. Regenerate serves when the answer is correct but needs reframing. Retry is resilient one-action error recovery.',
      },
    ],
  },
  {
    id: 'quiz',
    label: 'Quiz',
    title: 'Quiz — Assessment That Feeds Back Into Study',
    subtitle: 'Built as an iterative learning loop, not just a testing tool.',
    image: '/images/pansgpt/quiz-results.png',
    gallery: [
      { url: '/images/pansgpt/quiz-results.png', label: 'Detailed Results' },
      { url: '/images/pansgpt/quiz-active.png', label: 'Active Assessment' },
      { url: '/images/pansgpt/quiz-generator.png', label: 'Topic Generator' },
      { url: '/images/pansgpt/quiz-hub.png', label: 'Performance Hub' },
      { url: '/images/pansgpt/share-modal.png', label: 'WhatsApp Scorecard' },
    ],
    blocks: [
      {
        heading: 'Progressive Configuration',
        text: 'Course and question count are immediately actionable. Multi-step modal configuration allows students to select precise topics like Cardiac Arrhythmias or Spectroscopy with sensible defaults.',
      },
      {
        heading: 'Timed Assessment & Feedback',
        text: 'Real-time countdown timer, question status index, and instant score compilation showing correct, partial, and incorrect questions with comprehensive explanatory notes.',
      },
      {
        heading: 'Viral Social Study Loops',
        text: 'Automated 1-click generation of branded result cards for WhatsApp study groups, transforming solitary revision into collaborative cohort competition.',
      },
    ],
  },
  {
    id: 'library',
    label: 'Library & Notes',
    title: 'Library & Notes — Where Understanding Becomes Permanent',
    subtitle: 'Make capture and organization so frictionless that it happens as naturally as jotting on a notepad.',
    image: '/images/pansgpt/library-view.png',
    blocks: [
      {
        heading: 'Curriculum-Aligned Taxonomy',
        text: 'Course materials are indexed by level, semester, and course code (e.g. PCL 421, PCH 421) ensuring pharmacy students instantly locate verified lecture slides without wading through scattered chats.',
      },
      {
        heading: 'Lecturer Attribution & Metadata',
        text: 'Every document card preserves provenance: lecturer name, session year, file size, and reading progress indicators to maintain academic integrity.',
      },
      {
        heading: 'Bulk Organization & Export',
        text: 'Supports instant document switching, reading continuity, and notes export formatted for offline revision sheets and mobile viewing.',
      },
    ],
  },
];

const FeatureDeepDiveSection = () => {
  const [activeFeature, setActiveFeature] = useState('reader');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  const current = features.find(f => f.id === activeFeature)!;
  const activeImage = selectedGalleryImage || current.image;

  const handleTabChange = (id: string) => {
    setActiveFeature(id);
    setSelectedGalleryImage(null);
  };

  return (
    <section id="features" className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-100 tracking-tight">Feature Deep-Dive</h2>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">
              Every surface in PansGPT is engineered for a specific moment in the learning loop: discovering verified curriculum slides, reading with contextual AI clarification, and reinforcing retention through automated assessment.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-fit shrink-0 lg:sticky top-48 z-20">
              <div className="flex flex-row lg:flex-col lg:items-stretch gap-1 overflow-x-auto lg:overflow-visible hide-scrollbar pb-4 lg:pb-0 border border-zinc-800/80 bg-zinc-950/50 p-1 rounded-none">
                {features.map(f => (
                  <button
                    key={f.id}
                    onClick={() => handleTabChange(f.id)}
                    className={`px-6 py-2.5 text-sm font-medium transition-all duration-200 text-left whitespace-nowrap rounded-none ${
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
                      {current.label} Surface
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-3 leading-tight">{current.title}</h3>
                    <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">{current.subtitle}</p>
                  </div>

                  {/* Multi-Screen Gallery Selector (if available) */}
                  {current.gallery && current.gallery.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar mb-4 pb-2">
                      <span className="text-xs text-zinc-500 mr-2 flex-shrink-0">Views:</span>
                      {current.gallery.map(item => (
                        <button
                          key={item.url}
                          onClick={() => setSelectedGalleryImage(item.url)}
                          className={`text-xs px-3.5 py-1.5 rounded-none transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                            activeImage === item.url
                              ? 'bg-white text-black font-semibold'
                              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/10'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Feature Window Frame Mockup */}
                  <div className="relative w-full aspect-[16/9] md:aspect-[19/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] mb-12">
                    {/* Window Controls Bar */}
                    <div className="h-8 md:h-9 bg-[#16161a] border-b border-white/10 px-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <span className="text-[11px] text-zinc-400 font-normal truncate max-w-[260px] md:max-w-md">
                        {current.label} &bull; Live Platform Screen
                      </span>
                      <div className="w-8" />
                    </div>

                    {/* Screenshot Image Container */}
                    <div className="relative w-full h-[calc(100%-2rem)] md:h-[calc(100%-2.25rem)] p-1">
                      <Image
                        key={activeImage}
                        src={activeImage}
                        alt={current.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* Text Blocks Grid */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 ${current.blocks.length >= 3 ? 'xl:grid-cols-3' : ''} gap-6 md:gap-8`}>
                    {current.blocks.map((block, i) => (
                      <div key={i} className="fill-secondary p-6 md:p-8 rounded-xl flex flex-col">
                        <h4 className="text-base font-semibold text-zinc-100 mb-3">{block.heading}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed font-light">{block.text}</p>
                      </div>
                    ))}

                    {/* Table (if any) spans full width */}
                    {current.table && (
                      <div className="col-span-1 md:col-span-2 xl:col-span-full mt-2">
                        <div className="fill-secondary rounded-xl overflow-hidden p-6">
                          <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-4 block">
                            Snip &amp; Ask Action Mapping
                          </span>
                          <div className="divide-y divide-white/5">
                            {current.table.map((row, i) => (
                              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-3.5 first:pt-0 last:pb-0">
                                <span className="text-sm font-semibold text-zinc-200 sm:w-48 flex-shrink-0">{row.action}</span>
                                <span className="text-sm text-zinc-400 leading-relaxed font-light">{row.when}</span>
                              </div>
                            ))}
                          </div>
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
