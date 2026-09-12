'use client';
import { motion } from 'framer-motion';
import Mermaid from './Mermaid';

const iaChart = `
flowchart LR
  Root[PansGPT Platform] --> Public[Public-Facing]
  Root --> Student[Student Workspace]
  Root --> Admin[Admin Workspace]

  %% Public
  Public --> P1[Home]
  Public --> P2[How It Works]
  Public --> P3[Features]
  Public --> P4[FAQ]
  Public --> P5[Download]
  Public --> P6[About / Contact]

  %% Student
  Student --> S1[Reader]
  Student --> S2[Main / Chat]
  Student --> S3[Notes]
  Student --> S4[Quiz]
  Student --> S5[Quiz History]
  Student --> S6[Timetable]
  Student --> S7[Profile / Settings]

  %% Admin
  Admin --> A1[Dashboard]
  Admin --> A2[Library]
  Admin --> A3[Users / Students]
  Admin --> A4[Timetable]
  Admin --> A5[Chat Viewer]
`;

const IASection = () => {
  return (
    <section id="ia" className="py-20">
      <div className="container">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-zinc-100">Information Architecture</h2>
          <p className="text-lg text-zinc-300 mb-12 leading-relaxed max-w-3xl">
            A clean, hierarchical view of the platform's role-based navigation structure. We maintain three distinct user roles with their own navigational logic to ensure focus.
          </p>

          <div className="bg-zinc-950 border border-zinc-800 p-4 md:p-8">
            <Mermaid chart={iaChart} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IASection;
