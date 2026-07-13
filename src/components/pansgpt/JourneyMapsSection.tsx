'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const journeys = [
  {
    id: 'activation',
    label: 'New Student',
    title: 'Journey A — New Student Activation',
    goal: 'Land on the platform, understand its value quickly, and complete a first meaningful learning action — without confusion or dead ends.',
    steps: [
      { stage: '1. Discovery', touch: 'Public landing page', note: 'Student reads the value prop. The "closed-loop curriculum AI" claim must be immediate — this audience has been burned by generic AI before.', risk: 'Vague AI positioning loses skeptical students on the first scroll.' },
      { stage: '2. Evaluation', touch: 'FAQ, About, How It Works', note: "Student looks for specificity: 'Is this for my university? My course?' University of Jos must be prominent and early.", risk: "Generic EdTech copy that doesn't signal curriculum-specificity loses this audience." },
      { stage: '3. Sign Up', touch: 'Auth form — signup flow', note: 'Low-friction signup. Password rules shown before submission, not after failure. Error messages are specific and instructive.', risk: 'Any auth friction here is disproportionately costly — motivation is high but not unlimited.' },
      { stage: '4. First Session', touch: 'Auth callback → workspace', note: 'Student lands in the app for the first time. Guided first-run loop orients them through one complete cycle without blocking their first action.', risk: 'High feature density without a guiding hand creates paralysis. Student closes the tab.' },
      { stage: '5. First Action', touch: 'Reader or Chat', note: 'Student opens their first document or asks their first question. AI responds with a curriculum-anchored answer. This is the moment trust is formed — or broken.', risk: 'A generic or off-curriculum first response destroys credibility permanently.' },
      { stage: '6. Loop Entry', touch: 'Notes save / Quiz prompt', note: 'After first success, student is gently prompted toward the next step — save to notes, or take a short quiz. The loop concept is introduced through action, not instruction.', risk: 'No next-step prompt = one-time use. The student never returns.' },
    ]
  },
  {
    id: 'reader',
    label: 'Reader Study',
    title: 'Journey B — Document Study in the Reader (Primary Study Surface)',
    goal: 'Open a course document, read actively with AI support, extract insights, and capture them — without breaking the study flow.',
    steps: [
      { stage: '1. Library Browse', touch: 'Reader — course list', note: 'Student sees course-grouped documents. Reading progress indicators show where they left off. Last-opened document surfaces instantly.', risk: 'Without progress indicators, returning students waste precious minutes reorienting.' },
      { stage: '2. Document Selection', touch: 'Reader — topic listing', note: 'Metadata visible: lecturer, date, file size. Search works across course, topic, title, and lecturer. Enough to find a document from a half-remembered attribute.', risk: 'Poor metadata makes browsing feel like guesswork — students lose confidence in coverage.' },
      { stage: '3. PDF Reading', touch: 'In-app PDF reader', note: 'Page navigation, zoom, and progress tracking work smoothly. Mobile layout strips chrome for focus. Full-screen mode for deep sessions. Page position is restored on every return.', risk: 'Any friction in the reader itself sends students to a native PDF app — and out of the ecosystem entirely.' },
      { stage: '4. Snip & Ask', touch: 'Selection action menu', note: 'Student highlights a confusing passage. Menu appears: Explain, Summarise, Send to Chat, Save to Notes. This is the product\'s highest-value moment — AI meets curriculum at the exact point of confusion.', risk: 'If text selection on mobile misfires, the entire active reading system fails at its most important touchpoint.' },
      { stage: '5. Inline AI Response', touch: 'Explanation panel in reader', note: 'AI explains the selected content using curriculum context. Student doesn\'t leave the page. Reading position is preserved. They can dismiss the panel and continue reading immediately.', risk: 'If the response displaces the reading context, students lose their place and abandon the interaction.' },
      { stage: '6. Knowledge Capture', touch: 'Notes save from reader', note: 'Student saves the explanation to a named note — new or existing. The document source is preserved as linked metadata. They\'ll know where this came from when revising in three weeks.', risk: 'Without document-linked notes, insights lose their provenance. Revision becomes context-free.' },
    ]
  },
  {
    id: 'chat',
    label: 'Chat',
    title: 'Journey C — Chat-First Clarification',
    goal: 'Get a direct, curriculum-accurate answer to a specific question, iterate on it, and save the most useful parts — without breaking flow.',
    steps: [
      { stage: '1. Session Start', touch: 'Main — new or existing chat', note: 'History sidebar shows past sessions by name. Continuity is instant — a session from two days ago picks up exactly where it left off.', risk: 'Unnamed session history is a list of random questions, not a navigable study library.' },
      { stage: '2. Question Input', touch: 'Chat input — text/voice/image', note: 'Text, voice (start/stop/transcribe), or image (attach, paste, multi-image). Critical for mobile students who photograph textbook diagrams or dictate questions while commuting.', risk: 'Voice and image bugs on mobile reduce a power feature to a frustration.' },
      { stage: '3. Response & Iteration', touch: 'Chat message actions', note: 'Student can copy, regenerate, or edit their original question and resend. Each path serves a distinct need — regenerate for better framing, edit for better question quality.', risk: 'Without edit/regenerate, students are locked into their first poorly-worded question and its answer.' },
      { stage: '4. Web Search Control', touch: 'Per-session toggle', note: 'Web search is off by default — preserving the closed-loop guarantee. Students can deliberately open a session for supplementary research. Daily usage count is always visible.', risk: 'A global web search setting removes intentionality. Per-session control keeps it deliberate.' },
      { stage: '5. Knowledge Capture', touch: 'Save to notes modal', note: 'Notes save opens inline — student names or searches existing notes to append. The conversation doesn\'t stop. Capture happens in-flow or it doesn\'t happen.', risk: 'Any exit required for capture kills the behaviour. Students intend to do it later. Later never comes.' },
      { stage: '6. Session Management', touch: 'History sidebar', note: 'Rename, delete, or search sessions. A well-named session becomes a searchable topic reference for the rest of the semester.', risk: 'An unlabelled session list is digital clutter. Students stop using history and restart conversations every time.' },
    ]
  },
  {
    id: 'quiz',
    label: 'Quiz Loop',
    title: 'Journey D — Practice, Assessment, and the Loop Back to Study',
    goal: 'Configure a targeted quiz, generate it, take it, review performance, and return to the exact weak areas it exposed.',
    steps: [
      { stage: '1. Quiz Setup', touch: 'Quiz configuration form', note: 'Progressive disclosure: only course and question count are required up front. Difficulty, question type, topic filter, and time limit collapse behind \'Advanced Options\' with sensible defaults.', risk: 'Eight simultaneous inputs cause decision paralysis. Students abandon setup before generating anything.' },
      { stage: '2. Generation', touch: 'Loading modal', note: 'Descriptive loading states replace a blank spinner — stages that signal active, purposeful work. Cancel is available throughout. Transition into quiz-taking is smooth and expected.', risk: 'A featureless loading screen on a slow connection reads as broken. Students close the app.' },
      { stage: '3. Quiz Taking', touch: 'Quiz interface', note: 'Questions are clearly presented. Timer visible if set. Submission is a deliberate two-step action — accidental early submissions would damage trust in the platform\'s professionalism.', risk: 'Accidental submission is unrecoverable. Confirmation is not optional here.' },
      { stage: '4. Results Screen', touch: 'Results + next-step prompt', note: 'Score, topic breakdown, and performance metadata — followed immediately by explicit next steps derived from weak topic data. \'Review enzyme inhibition in the Reader\' not \'Keep studying!\'', risk: 'A results screen that just shows a score wastes the student\'s peak motivation moment. They close the app and watch YouTube.' },
      { stage: '5. Analytics Review', touch: 'Quiz history and analytics', note: 'Average score trend, total quizzes, points, course-level performance breakdown. Students see not just what happened — but what it means for where to focus next.', risk: 'Analytics without actionable framing are just historical records. Data needs to imply direction.' },
      { stage: '6. Targeted Return', touch: 'Analytics → Reader / Chat', note: 'The loop closes here. Student re-enters the Reader or Chat with a specific topic in mind — closing the identify-weakness → study-it cycle deliberately.', risk: 'Without loop closure, quiz is a test tool, not a learning system. The UX difference is one bridge.' },
    ]
  },
  {
    id: 'admin',
    label: 'Admin',
    title: 'Journey E — Admin Content Governance',
    goal: 'Upload, manage, and maintain curriculum content — ensuring the AI always has accurate, level-appropriate material to draw from.',
    steps: [
      { stage: '1. Dashboard Check', touch: 'Admin dashboard', note: 'User count, document count, storage, AI status, API usage, recent activity — all visible without navigation. System health in under 30 seconds.', risk: 'A dashboard that requires drilling down to check status slows response time when something is actually wrong.' },
      { stage: '2. Document Upload', touch: 'Library — upload flow', note: 'Metadata entered at upload: course, topic, academic level targeting. Processing status appears immediately. Admin knows the document entered the pipeline.', risk: 'No immediate confirmation = duplicate uploads as admins re-upload documents already processing.' },
      { stage: '3. Processing Monitor', touch: 'Library status badges', note: 'Per-document status: pending, processing, complete, failed. Cancel, retry, and repair inline for each document. Admin catches failures before students report them.', risk: 'Invisible processing failures surface only when students complain that the AI can\'t answer questions on a topic.' },
      { stage: '4. Access Control', touch: 'Library — level targeting', note: 'Documents are assigned to academic levels. First-year students don\'t receive fifth-year clinical pharmacology. The curriculum-accuracy proposition depends on this being correct.', risk: 'Wrong level targeting exposes students to out-of-scope content — directly undermining the product\'s core promise.' },
      { stage: '5. Lecturer Moderation', touch: 'Pending submission queue', note: 'Lecturer-submitted content is reviewed before it enters the AI content layer. Approve or reject with reason. No unverified content reaches students without explicit admin sign-off.', risk: 'An unreviewed queue means untrusted content can influence AI responses — the most serious possible failure mode.' },
      { stage: '6. Ongoing Governance', touch: 'Library, feedback, chat viewer', note: 'Ongoing maintenance: metadata editing, bulk deletions, feedback review, session inspection. All destructive actions have confirmation barriers proportionate to their severity.', risk: 'Bulk deletion without strong confirmation can remove curriculum content at scale. This is an irreversible action.' },
    ]
  },
];

const JourneyMapsSection = () => {
  const [activeJourney, setActiveJourney] = useState('activation');
  const current = journeys.find(j => j.id === activeJourney)!;

  return (
    <section id="journeys" className="py-20">
      <div className="container">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-zinc-100">User Journey Maps</h2>
          <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-3xl">
            Five journey maps define the core behavioural paths through the product.
          </p>

          <div className="flex flex-wrap gap-1 mb-6 bg-zinc-950 border border-zinc-800 p-1 w-fit">
            {journeys.map(j => (
              <button
                key={j.id}
                onClick={() => setActiveJourney(j.id)}
                className={`px-3 py-2 text-xs font-medium transition-all duration-200 ${
                  activeJourney === j.id
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80'
                }`}
              >
                {j.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeJourney}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fill-secondary border border-zinc-800 p-6"
            >
              <h3 className="text-lg font-bold text-zinc-100 mb-1">{current.title}</h3>
              <p className="text-sm text-zinc-400 mb-5">Goal: {current.goal}</p>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b border-zinc-800 text-xs text-zinc-500 uppercase tracking-wider bg-zinc-900/40">
                      <th className="py-4 px-4 font-medium w-48">Stage</th>
                      <th className="py-4 px-4 font-medium w-48">Touchpoint</th>
                      <th className="py-4 px-4 font-medium min-w-[200px]">UX Notes</th>
                      <th className="py-4 px-4 font-medium min-w-[200px]">Risk / Opportunity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/50">
                    {current.steps.map((step, i) => (
                      <tr key={i} className="hover:bg-zinc-800/30 transition-colors group">
                        <td className="py-5 px-4 text-sm font-semibold text-zinc-200 align-top leading-relaxed">{step.stage}</td>
                        <td className="py-5 px-4 text-sm text-zinc-400 align-top leading-relaxed">{step.touch}</td>
                        <td className="py-5 px-4 text-sm text-zinc-300 align-top leading-relaxed">{step.note}</td>
                        <td className="py-5 px-4 text-sm text-zinc-300 group-hover:text-white align-top leading-relaxed transition-colors">{step.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyMapsSection;
