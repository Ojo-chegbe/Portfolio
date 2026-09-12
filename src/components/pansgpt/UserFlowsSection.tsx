'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Mermaid from './Mermaid';

const flows = [
  {
    id: 'auth',
    label: 'Auth',
    title: 'Authentication & Route Resolution',
    chart: `flowchart TD
  Start([User accesses URL]) --> AuthCheck{Session Resolved?}
  AuthCheck -- Authenticated --> Workspace[Route to Workspace]
  AuthCheck -- Unauthenticated --> Login[Route to Login/Signup]
  Login --> Action[User completes auth]
  Action --> Callback[Auth callback confirms]
  Callback --> Store[(Token stored)]
  Store --> Workspace
  Workspace --> Expiry{Token Expiry?}
  Expiry -- Expired --> Sync[Route synchronises automatically]`
  },
  {
    id: 'reader',
    label: 'Reader Study',
    title: 'Reader Active Study Interaction',
    chart: `flowchart TD
  Open([Open Reader]) --> Browse[Browse/Search library]
  Browse --> OpenDoc[Open document]
  OpenDoc --> Read[Read & Navigate]
  Read --> Highlight[Highlight passage]
  Highlight --> Menu{Action Menu}
  Menu -- Explain / Summarise --> AI[AI response appears inline]
  Menu -- Send to Chat --> Chat[Transfer to Chat]
  AI --> Save[Save to Notes]
  Save --> Continue([Dismiss & Continue])
  Chat --> Continue`
  },
  {
    id: 'chat',
    label: 'Chat',
    title: 'Chat Session Lifecycle',
    chart: `flowchart TD
  Open([Open Main]) --> Session{Session Type}
  Session -- New --> Input[Input text/voice/image]
  Session -- Load --> Input
  Input --> Send[Message sent]
  Send --> AI[AI returns curriculum-anchored response]
  AI --> State{User Satisfaction}
  State -- Satisfied --> FollowUp[Follow-up question]
  State -- Unsatisfied --> Edit[Regenerate or Edit]
  State -- Error --> Retry[Retry]
  FollowUp --> Actions{Manage Response}
  Actions -- Extract --> Notes[Copy / Save to notes]
  Actions -- Search --> WebSearch[Toggle web search]
  Actions -- Manage --> RenameDel[Rename / Delete session]`
  },
  {
    id: 'notes',
    label: 'Notes',
    title: 'Notes Lifecycle',
    chart: `flowchart TD
  Open([Open Notes]) --> Action{Action}
  Action -- Create/Open --> Edit[Edit content]
  Edit -.-> Autosave[(Autosave activates)]
  Action -- Organize --> Organize{Sort/Filter}
  Organize -- Search --> Keyword[Search by keyword]
  Organize -- Sort --> Date[Sort by date]
  Action -- Manage --> Manage{Manage}
  Manage -- Delete --> Del[Single/Bulk delete]
  Manage -- Export --> Exp[Export all to text file]`
  },
  {
    id: 'quiz',
    label: 'Quiz',
    title: 'Quiz Lifecycle',
    chart: `flowchart TD
  Open([Open Quiz]) --> Config[Select course & question count]
  Config --> Options{Advanced Options?}
  Options -- Yes --> Adv[Set filters & time limit]
  Options -- No --> Gen[Start generation]
  Adv --> Gen
  Gen --> Load{Loading State}
  Load -- Cancel --> Config
  Load -- Complete --> Take[Quiz-taking screen with timer]
  Take --> Action{User Action}
  Action -- Quit Early --> Abandon[Abandon Quiz]
  Action -- Finish --> Submit[Submit attempt]
  Submit --> Confirm{2-Step Confirm}
  Confirm -- Cancel --> Take
  Confirm -- Confirm --> Results[View Results & Topic breakdown]
  Results --> History([View Quiz History & analytics])
  Abandon --> History`
  },
  {
    id: 'admin-doc',
    label: 'Admin Docs',
    title: 'Admin Document Governance',
    chart: `flowchart TD
  Open([Open Library]) --> Upload[Upload material & targeting]
  Upload --> Status[Processing status appears]
  Status --> Monitor[Monitor in real time]
  Monitor --> Outcome{Outcome}
  Outcome -- Complete --> Live[Live & AI-accessible]
  Outcome -- Failed --> Retry[Retry inline]
  Live --> Manage{Manage Doc}
  Manage -- Edit --> EditMeta[Edit metadata or access]
  Manage -- Delete --> Del[Delete with severity warning]`
  },
];

const UserFlowsSection = () => {
  const [activeFlow, setActiveFlow] = useState('reader');
  const current = flows.find(f => f.id === activeFlow)!;

  return (
    <section id="flows" className="py-20">
      <div className="container">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-zinc-100">User Flows</h2>
          <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-3xl">
            Nine core flows define how users move through the product. Each was designed to eliminate dead ends and keep context intact.
          </p>

          <div className="flex flex-wrap gap-1 mb-6 bg-zinc-950 border border-zinc-800 p-1 w-fit">
            {flows.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFlow(f.id)}
                className={`px-3 py-2 text-xs font-medium transition-all duration-200 ${
                  activeFlow === f.id
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFlow}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fill-secondary border border-zinc-800 p-6"
            >
              <h3 className="text-lg font-bold text-zinc-100 mb-4">{current.title}</h3>
              <div className="bg-zinc-900/50 overflow-hidden border border-zinc-800/50">
                <Mermaid chart={current.chart} />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default UserFlowsSection;
