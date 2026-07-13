'use client';
import { motion } from 'framer-motion';

const kpiCategories = [
  {
    id: 'activation',
    label: 'Activation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    kpis: [
      { name: 'Time to first meaningful action', measures: 'How quickly new students complete a first AI interaction — chat, snip, or quiz' },
      { name: 'First-day loop completion rate', measures: '% of new users who engage with 3+ surfaces in their first session' },
      { name: 'First-week quiz generation rate', measures: '% of new users who generate a quiz within 7 days' },
      { name: 'Guided tour completion rate', measures: '% of first-run users who complete the full guided loop' },
    ]
  },
  {
    id: 'engagement',
    label: 'Engagement',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
    kpis: [
      { name: 'Weekly active users per surface', measures: 'Which surfaces are used weekly — flags surfaces with weak engagement' },
      { name: 'Cross-surface transition rate', measures: 'How often students move between surfaces in one session' },
      { name: 'Sessions per learner per week', measures: 'Depth of engagement — multiple sessions per week signals habitual return' },
      { name: 'Notes creation per session', measures: 'Active processing rate — synthesising, not passively reading' },
      { name: 'Reader AI action rate', measures: 'How often Snip & Ask is triggered per reading session' },
    ]
  },
  {
    id: 'learning',
    label: 'Learning Outcomes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    kpis: [
      { name: 'Quiz score improvement over time', measures: 'Whether repeated quiz use produces measurable knowledge gains' },
      { name: 'Weak-topic revisit rate', measures: 'Whether next-step prompts generate actual return study on identified gaps' },
      { name: 'Quiz retry rate on failed topics', measures: '% of students who generate a second quiz on a sub-threshold topic' },
      { name: 'Reader time per document', measures: 'Whether students are reading substantively or skimming — proxy for study depth' },
    ]
  },
  {
    id: 'reliability',
    label: 'Reliability',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
      </svg>
    ),
    kpis: [
      { name: 'Retry success conversion rate', measures: '% of retry actions that complete successfully — are recovery paths effective?' },
      { name: 'Offline interruption recovery rate', measures: '% of connectivity-interrupted sessions that successfully resume' },
      { name: 'Quiz generation failure rate', measures: '% of quiz requests that fail — direct indicator of AI pipeline reliability' },
      { name: 'Document processing success rate', measures: '% of uploads that complete ingestion on first attempt' },
    ]
  },
  {
    id: 'admin',
    label: 'Admin Operations',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
    kpis: [
      { name: 'Content ingestion success rate', measures: '% of documents that process successfully without retry' },
      { name: 'Upload to AI-accessible latency', measures: 'End-to-end time from document upload to active retrieval by the AI' },
      { name: 'Lecturer moderation turnaround', measures: 'How quickly submitted materials receive an approval or rejection decision' },
      { name: 'Feedback resolution cycle time', measures: 'Time from student report submission to admin resolution' },
    ]
  },
];

const KPISection = () => {
  return (
    <section id="kpis" className="py-24 md:py-32 bg-[#0f0f0f] border-t border-zinc-900">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-px bg-zinc-900 border border-zinc-900 overflow-hidden">
          
          {/* Header Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#121212] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
          >
            
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 leading-[1.1] tracking-tight relative z-10">
              Measurement <br/> Framework
            </h2>
            <div className="border-l-2 border-zinc-700 pl-5 mb-8 relative z-10">
              <p className="text-base md:text-lg text-zinc-300 italic font-medium leading-relaxed">
                &ldquo;A design decision without a measurement framework is a hypothesis.&rdquo;
              </p>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed relative z-10">
              These KPIs track the health of the learning loop and the impact of every UX improvement across the product.
            </p>
          </motion.div>

          {/* KPI Blocks */}
          {kpiCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              className="bg-[#121212] p-8 md:p-10 flex flex-col group hover:bg-[#151515] transition-colors duration-500"
            >
              <div className="flex justify-between items-center border-b border-zinc-800/50 pb-5 mb-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-100">{cat.label}</h3>
                <div className="text-zinc-700 group-hover:text-zinc-400 transition-colors duration-500">
                  {cat.icon}
                </div>
              </div>
              
              <div className="space-y-6 flex-grow">
                {cat.kpis.map((kpi, kpiIdx) => (
                  <div key={kpiIdx} className="group/item relative flex gap-4">
                    <div className="text-[10px] font-mono text-zinc-700 group-hover/item:text-zinc-400 mt-1 transition-colors duration-300 select-none">
                      0{kpiIdx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200 mb-1.5">{kpi.name}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed group-hover/item:text-zinc-400 transition-colors duration-300">
                        {kpi.measures}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default KPISection;
