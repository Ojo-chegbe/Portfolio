'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const personas = [
  {
    id: 'amara',
    name: 'Amara Okafor',
    age: 21,
    role: '300 Level (Third Year)',
    course: 'Pharm.D Pharmaceutical Sciences',
    university: 'University of Jos',
    image: '/images/amara_okafor.png',
    quote: "I don't have time to not understand something the first time. I need whatever I'm reading to actually make sense before I move on.",
    about: "A disciplined first generation health science student carrying the pressure to succeed. While previously excelling through handwritten notes and perfect attendance, third year's immense volume has overwhelmed her. For the first time, she is reading without understanding, spending longer hours but retaining less.",
    dailyReality: "Her week is consumed by back to back lectures, labs, and deadlines. With no laptop, she relies entirely on her Android phone for the brief two hour study windows she has before exhaustion sets in each evening.",
    goals: [
      "Understand pharmacology deeply enough for application, not just exam recall",
      "Maximize efficiency of her limited two hour evening study window",
      "Ensure study materials align perfectly with her assessment criteria",
      "Find trustworthy, curriculum accurate answers without second guessing"
    ],
    frustrations: [
      "Reading dense notes without real time avenues for clarification",
      "Generic AI tools providing confident but unverifiable answers",
      "Losing context and position when switching between study resources",
      "Putting in long hours that do not translate into exam success"
    ],
    usage: "Relies primarily on the Reader. When confused, she highlights text and uses 'Explain' to break down complex mechanisms. If questions persist, she escalates to 'Chat'. She obsessively saves these simplified explanations to Notes by concept, effectively building a personalized, curriculum aligned study guide for exam season."
  },
  {
    id: 'tunde',
    name: 'Tunde Adeyemi',
    age: 23,
    role: '600 Level (Final Year)',
    course: 'Pharm.D Pharmaceutical Sciences',
    university: 'University of Jos',
    image: '/images/tunde_adeyemi.png',
    quote: "I don't need it to teach me everything. I need it to show me exactly where my understanding breaks down and then help me fix that specific thing.",
    about: "A pragmatic final year student focused on post graduation clinical practice. Known among peers for his ability to explain complex problems clearly. With shrinking free time, he feels the pressure of translating academic knowledge into reliable clinical action where careers are made.",
    dailyReality: "Studies strictly in short, focused bursts around clinical postings using only his phone. After a generic AI tool provided dangerous dosage contradictions, he is highly skeptical of tools that hallucinate. He is quietly competitive, tracking personal progress through analytics.",
    goals: [
      "Consolidate six years of study into exam ready, clinical knowledge",
      "Practice with advanced questions reflecting final year difficulty",
      "Clarify clinical questions instantly during off site hospital postings",
      "Rely entirely on AI answers anchored to the Nigerian curriculum"
    ],
    frustrations: [
      "Basic quiz tools that fail to challenge his final year understanding",
      "Generic AI models providing confident but factually incorrect dosages",
      "Study platforms requiring long, uninterrupted time blocks he lacks",
      "Scattered knowledge across chats, PDFs, and tabs without central organization"
    ],
    usage: "Primary entry point is 'Quiz', generating daily, high difficulty assessments to pinpoint knowledge gaps. He then uses 'Reader' targetedly, employing 'Summarise' for quick knowledge reactivation. He uses 'Chat' exclusively for clinical scenario walkthroughs, valuing it because it strictly adheres to his curriculum rather than general medical literature."
  }
];

const PersonaSection = () => {
  return (
    <section id="personas" className="py-24 md:py-32 bg-[#0f0f0f] border-t border-zinc-900">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-16"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            User Personas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6 leading-[1.1] tracking-tight">
            Understanding Our Users
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
            To ensure PansGPT solves real problems, we developed primary personas based on actual pharmacy students, mapping out their behaviors, goals, and frustrations.
          </p>
        </motion.div>

        <div className="space-y-24">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border border-zinc-800 bg-[#121212] flex flex-col lg:flex-row group"
            >
              {/* Image Column */}
              <div className="w-full lg:w-2/5 relative min-h-[400px] lg:min-h-auto bg-zinc-900 border-b lg:border-b-0 lg:border-r border-zinc-800 overflow-hidden">
                <Image 
                  src={persona.image} 
                  alt={persona.name}
                  fill 
                  className="object-cover opacity-70 group-hover:opacity-100 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <h3 className="text-3xl font-bold text-zinc-100 mb-3">{persona.name}</h3>
                  <div className="space-y-1">
                    <p className="text-zinc-300 font-medium">{persona.age}, {persona.role}</p>
                    <p className="text-zinc-400 text-sm">{persona.course}</p>
                    <p className="text-zinc-500 text-sm flex items-center gap-2 mt-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {persona.university}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                
                {/* Quote */}
                <div className="mb-12 relative">
                  <div className="absolute -top-4 -left-6 text-6xl text-zinc-800 font-serif leading-none opacity-50">&ldquo;</div>
                  <p className="text-xl md:text-2xl text-zinc-300 italic font-medium leading-relaxed relative z-10 pl-2">
                    {persona.quote}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                  {/* Left inner column */}
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5 block border-b border-zinc-800 pb-3">About</h4>
                      <div className="space-y-4">
                        {persona.about.split('\n\n').map((para, i) => (
                          <p key={i} className="text-sm text-zinc-400 leading-relaxed">{para}</p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5 block border-b border-zinc-800 pb-3">Daily Reality</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{persona.dailyReality}</p>
                    </div>
                  </div>

                  {/* Right inner column */}
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5 block border-b border-zinc-800 pb-3">Goals</h4>
                      <ul className="space-y-3">
                        {persona.goals.map((goal, i) => (
                          <li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-3">
                            <span className="text-zinc-700 mt-1 flex-shrink-0">✦</span>
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5 block border-b border-zinc-800 pb-3">Frustrations</h4>
                      <ul className="space-y-3">
                        {persona.frustrations.map((frustration, i) => (
                          <li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-3">
                            <span className="text-zinc-700 mt-1 flex-shrink-0">✕</span>
                            <span>{frustration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Full width bottom row for Usage */}
                <div className="mt-12 pt-12 border-t border-zinc-900">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5 block">Platform Usage</h4>
                  <div className="space-y-4">
                    {persona.usage.split('\n\n').map((para, i) => (
                      <p key={i} className="text-sm text-zinc-400 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
