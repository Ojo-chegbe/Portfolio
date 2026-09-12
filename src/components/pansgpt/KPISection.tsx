'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface KPIItem {
  name: string;
  measures: string;
}

interface KPICategory {
  id: string;
  label: string;
  description: string;
  kpis: KPIItem[];
}

const kpiCategories: KPICategory[] = [
  {
    id: 'activation',
    label: 'Activation',
    description: 'First-session adoption and onboarding completion',
    kpis: [
      {
        name: 'Time to first meaningful action',
        measures: 'How quickly new students complete a first AI interaction — chat, snip, or quiz',
      },
      {
        name: 'First-day loop completion rate',
        measures: '% of new users who engage with 3+ surfaces in their first session',
      },
      {
        name: 'First-week quiz generation rate',
        measures: '% of new users who generate a quiz within 7 days',
      },
      {
        name: 'Guided tour completion rate',
        measures: '% of first-run users who complete the full guided loop',
      },
    ]
  },
  {
    id: 'engagement',
    label: 'Engagement',
    description: 'Habitual study routines and cross-feature workflows',
    kpis: [
      {
        name: 'Weekly active users per surface',
        measures: 'Which surfaces are used weekly — flags surfaces with weak engagement',
      },
      {
        name: 'Cross-surface transition rate',
        measures: 'How often students move between surfaces in one session',
      },
      {
        name: 'Sessions per learner per week',
        measures: 'Depth of engagement — multiple sessions per week signals habitual return',
      },
      {
        name: 'Notes creation per session',
        measures: 'Active processing rate — synthesising, not passively reading',
      },
      {
        name: 'Reader AI action rate',
        measures: 'How often Snip & Ask is triggered per reading session',
      },
    ]
  },
  {
    id: 'learning',
    label: 'Learning Outcomes',
    description: 'Measurable knowledge retention and targeted revision',
    kpis: [
      {
        name: 'Quiz score improvement over time',
        measures: 'Whether repeated quiz use produces measurable knowledge gains',
      },
      {
        name: 'Weak-topic revisit rate',
        measures: 'Whether next-step prompts generate actual return study on identified gaps',
      },
      {
        name: 'Quiz retry rate on failed topics',
        measures: '% of students who generate a second quiz on a sub-threshold topic',
      },
      {
        name: 'Reader time per document',
        measures: 'Whether students are reading substantively or skimming — proxy for study depth',
      },
    ]
  },
  {
    id: 'reliability',
    label: 'Reliability',
    description: 'Error recovery, connection resilience and AI uptime',
    kpis: [
      {
        name: 'Retry success conversion rate',
        measures: '% of retry actions that complete successfully — are recovery paths effective?',
      },
      {
        name: 'Offline interruption recovery rate',
        measures: '% of connectivity-interrupted sessions that successfully resume',
      },
      {
        name: 'Quiz generation failure rate',
        measures: '% of quiz requests that fail — direct indicator of AI pipeline reliability',
      },
      {
        name: 'Document processing success rate',
        measures: '% of uploads that complete ingestion on first attempt',
      },
    ]
  },
  {
    id: 'admin',
    label: 'Admin Operations',
    description: 'Course material moderation and faculty review velocity',
    kpis: [
      {
        name: 'Content ingestion success rate',
        measures: '% of documents that process successfully without retry',
      },
      {
        name: 'Upload to AI-accessible latency',
        measures: 'End-to-end time from document upload to active retrieval by the AI',
      },
      {
        name: 'Lecturer moderation turnaround',
        measures: 'How quickly submitted materials receive an approval or rejection decision',
      },
      {
        name: 'Feedback resolution cycle time',
        measures: 'Time from student report submission to admin resolution',
      },
    ]
  },
];

const KPISection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const totalKPIs = useMemo(() => {
    return kpiCategories.reduce((acc, cat) => acc + cat.kpis.length, 0);
  }, []);

  const filteredCategories = useMemo(() => {
    return kpiCategories
      .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
      .map((cat) => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return cat;

        const filteredKpis = cat.kpis.filter(
          (kpi) =>
            kpi.name.toLowerCase().includes(query) ||
            kpi.measures.toLowerCase().includes(query) ||
            cat.label.toLowerCase().includes(query)
        );

        return {
          ...cat,
          kpis: filteredKpis,
        };
      })
      .filter((cat) => cat.kpis.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <section id="kpis" className="py-24 md:py-32 bg-[#09090b] text-zinc-100 border-t border-zinc-900">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Measurement Framework
          </h2>

          <div className="border-l-2 border-zinc-700 pl-5 my-6">
            <p className="text-lg md:text-xl text-zinc-300 italic font-medium leading-relaxed">
              &ldquo;A design decision without a measurement framework is a hypothesis.&rdquo;
            </p>
          </div>

          <p className="text-base text-zinc-400 leading-relaxed">
            These KPIs track the health of the learning loop and the impact of every UX improvement across the product.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pb-6 mb-10 border-b border-zinc-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs transition-all duration-200 border ${
                activeCategory === 'all'
                  ? 'bg-white text-black border-white font-medium'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              All ({totalKPIs})
            </button>

            {kpiCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs transition-all duration-200 border ${
                    isActive
                      ? 'bg-white text-black border-white font-medium'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  {cat.label} ({cat.kpis.length})
                </button>
              );
            })}
          </div>

          {/* Clean Search Input */}
          <div className="relative sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search metrics..."
              className="w-full bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories and Metrics */}
        {filteredCategories.length === 0 ? (
          <div className="py-16 text-center text-zinc-500 text-sm">
            No metrics found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border border-zinc-800/80 bg-zinc-950/50"
              >
                {/* Category Header */}
                <div className="px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base font-semibold text-white">
                    {category.label}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {category.description}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:gap-px bg-zinc-850">
                  {category.kpis.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-zinc-950/70 hover:bg-zinc-900/40 transition-colors duration-200 flex gap-4"
                    >
                      <span className="text-xs font-medium text-zinc-500 select-none pt-0.5">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-100 mb-1.5 leading-snug">
                          {kpi.name}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {kpi.measures}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default KPISection;
