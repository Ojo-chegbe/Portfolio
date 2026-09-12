'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';
import DesignCarousel from '@/components/DesignCarousel';

const AssedraCaseStudy = () => {
  const navItems = [
    { id: 'overview', label: 'Overview', href: 'overview' },
    { id: 'challenge', label: 'The Challenge', href: 'challenge' },
    { id: 'research', label: 'Research', href: 'research' },
    { id: 'process', label: 'Process', href: 'process' },
    { id: 'personas', label: 'Personas', href: 'personas' },
    { id: 'architecture', label: 'Architecture', href: 'architecture' },
    { id: 'user-flows', label: 'User Flows', href: 'user-flows' },
    { id: 'solution', label: 'The Solution', href: 'solution' },
    { id: 'designs', label: 'Final Designs', href: 'designs' },
    { id: 'outcome', label: 'The Outcome', href: 'outcome' },
    { id: 'prototype', label: 'Prototype', href: 'prototype' },
    { id: 'reflection', label: 'Reflection', href: 'reflection' },
  ];

  const designItems = [
    { id: 0, imageUrl: '/images/Assedra/Final-0.png', title: 'Executive Dashboard & Status Overview' },
    { id: 1, imageUrl: '/images/Assedra/Final-1.png', title: 'Asset Register & Custody Directory' },
    { id: 2, imageUrl: '/images/Assedra/Final-2.png', title: 'Item Check-in & Return Log' },
    { id: 3, imageUrl: '/images/Assedra/Final-4.png', title: 'Due Date Reminders & Overdue Alerts' },
    { id: 4, imageUrl: '/images/Assedra/Final-5.png', title: 'Departmental Category Filtering' },
    { id: 5, imageUrl: '/images/Assedra/Final-6.png', title: 'Active Equipment Loans Table' },
    { id: 6, imageUrl: '/images/Assedra/Final-7.png', title: 'Rapid Asset Assignment Modal' },
    { id: 7, imageUrl: '/images/Assedra/Final-8.png', title: 'Audit Trail & Custody Verification' },
    { id: 8, imageUrl: '/images/Assedra/Final-9.png', title: 'Condition & Maintenance Logs' },
    { id: 9, imageUrl: '/images/Assedra/Final-10.png', title: 'PTA & Board Report Generation' },
    { id: 10, imageUrl: '/images/Assedra/Final-11.png', title: 'Campus & Role Permissions' },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-zinc-100">
      <Header />
      <TopNav navItems={navItems} />

      {/* Hero Section */}
      <section id="overview" className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-sm font-medium text-zinc-400 mb-4 tracking-wide">
              Case Study &bull; Enterprise &amp; EdTech &bull; 2024
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.08]">
              Assedra: School Inventory Management
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-12">
              Transforming chaotic spreadsheets and lost paper logs into an intuitive, real-time asset ecosystem designed specifically for educational staff.
            </p>

            {/* Metadata Line */}
            <div className="flex flex-wrap gap-x-12 gap-y-4 py-6 border-y border-white/10 text-sm mb-16">
              <div>
                <span className="text-zinc-500 block">Role</span>
                <span className="text-zinc-200 font-medium">Lead UX Designer</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Duration</span>
                <span className="text-zinc-200 font-medium">4 Weeks</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Focus</span>
                <span className="text-zinc-200 font-medium">Web Application &bull; Workflow Optimization</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Toolkit</span>
                <span className="text-zinc-200 font-medium">Figma, Miro, Google Forms</span>
              </div>
            </div>

            {/* Hero Cover Mockup */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900/40 mb-16">
              <Image
                src="/images/Assedra/Cover-art.png"
                alt="Assedra School Inventory Platform"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>

            {/* Editorial Overview */}
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-light mb-6">
                From biology lab microscopes and library books to classroom projectors and administrative laptops, schools oversee thousands of shared assets. Yet most institutions rely on fragmented paper logbooks or unwieldy Excel sheets.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed">
                Assedra bridges the operational gap between teachers, storekeepers, and school boards—introducing simple check-in wizards, clear audit trails, and automated reminders without the cognitive friction of enterprise accounting software.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section id="challenge" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              The Challenge: The Hidden Cost of Lost Equipment
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              Schools operate on tight budgets where misplaced lab kits or unreturned laptops directly disrupt classroom learning. Existing enterprise asset software is designed for corporate procurement officers, creating an immediate mismatch with the daily reality of busy educators.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-14">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  01. The Administrative Void
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  When equipment goes missing, paper sign-out sheets offer zero accountability. Records are lost, handwriting is illegible, and administrators spend hours hunting for assets instead of managing school operations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  02. The Software Usability Mismatch
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  Commercial inventory platforms are cluttered with financial depreciations, tax ledgers, and complex forms. Teachers and storekeepers reject them because basic item checkout takes five minutes of administrative overhead.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-zinc-600 pl-6 max-w-3xl">
              <p className="text-lg md:text-xl text-zinc-200 italic font-light leading-relaxed">
                &ldquo;How might we design a seamless, intelligent inventory system that feels like a trusted educational assistant rather than cumbersome corporate accounting software?&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research & Pain Points */}
      <section id="research" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Research &amp; Operational Friction
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-16 font-light">
              Through in-depth interviews with secondary school principals, librarians, and facility managers across Nigeria, five structural pain points emerged:
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 mb-14">
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Friction 01</span>
                <h3 className="text-lg font-semibold text-white mb-2">Zero Real-Time Visibility</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Administrators have no centralized dashboard showing who currently holds specific projectors, tablets, or sports kits. Equipment status is discovered only after someone asks for it.
                </p>
              </div>

              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Friction 02</span>
                <h3 className="text-lg font-semibold text-white mb-2">Manual &amp; Error-Prone Logs</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Excel sheets and paper ledgers duplicate entries, get overwritten, or disappear during faculty handovers, creating friction during annual school board audits.
                </p>
              </div>

              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Friction 03</span>
                <h3 className="text-lg font-semibold text-white mb-2">Absent Accountability Trails</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Teachers borrow items informally between classes without documentation. When items return damaged or go missing, there is no verifiable custody trail.
                </p>
              </div>

              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Friction 04</span>
                <h3 className="text-lg font-semibold text-white mb-2">No Overdue Notification System</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Librarians and storekeepers rely on memory or hallway encounters to remind staff to return overdue items, creating awkward inter-departmental tension.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-zinc-600 pl-6 max-w-3xl">
              <blockquote className="text-lg md:text-xl text-zinc-200 italic font-light leading-relaxed mb-2">
                &ldquo;I spend more time looking for the school&apos;s properties than actually managing the school.&rdquo;
              </blockquote>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">
                — School Administrator, Enugu State
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section id="process" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Design Process
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-16 font-light">
              A phased human-centered approach focused on reducing cognitive load at every stage of the inventory lifecycle:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { step: '01', title: 'Research', desc: 'Contextual inquiry with administrators, librarians, and storekeepers.' },
                { step: '02', title: 'Journey Maps', desc: 'Mapping loan checkout, return verification, and damaged item escalations.' },
                { step: '03', title: 'Architecture', desc: 'Structuring a shallow 3-tier hierarchy for sub-2-second search.' },
                { step: '04', title: 'Prototyping', desc: 'Iterating wireframes into interactive Figma flows with staff testing.' },
                { step: '05', title: 'Validation', desc: 'Moderated testing sessions validating check-out speeds and error rates.' },
              ].map((p) => (
                <div key={p.step} className="space-y-2">
                  <span className="text-xs text-zinc-500 font-semibold block">{p.step}</span>
                  <h3 className="text-base font-semibold text-white">{p.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personas */}
      <section id="personas" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Stakeholder Personas
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              We mapped the emotional and operational realities of three core institutional roles responsible for school assets:
            </p>

            {/* Persona Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Abigail */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Abigail Eze, 47</h3>
                  <p className="text-xs text-zinc-400">Vice Principal &bull; Enugu</p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Oversees school physical assets for board audits. Stressed by missing receipts and disputes over lost laptops.
                </p>
                <div className="text-xs text-zinc-400 pt-3 border-t border-white/10 space-y-1">
                  <p><strong className="text-zinc-200">UX Priority:</strong> One-click audit reports and instant real-time custody overview.</p>
                </div>
              </div>

              {/* Idris */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Idris Olanrewaju, 35</h3>
                  <p className="text-xs text-zinc-400">Storekeeper &bull; Ibadan</p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Manages equipment check-out daily. Struggles with manual logs during power outages and busy morning rushes.
                </p>
                <div className="text-xs text-zinc-400 pt-3 border-t border-white/10 space-y-1">
                  <p><strong className="text-zinc-200">UX Priority:</strong> Fast 3-step item assign wizard and mobile-responsive check-in.</p>
                </div>
              </div>

              {/* Lara */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Lara Yusuf, 29</h3>
                  <p className="text-xs text-zinc-400">School Librarian &bull; Lagos</p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Tracks library books and tablets. Constantly deals with overdue returns and unorganized physical inventory.
                </p>
                <div className="text-xs text-zinc-400 pt-3 border-t border-white/10 space-y-1">
                  <p><strong className="text-zinc-200">UX Priority:</strong> Automated email/SMS return reminders and instant ISBN/serial lookup.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Architecture */}
      <section id="architecture" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Information Architecture: Shallow &amp; Fast
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-12 font-light">
              To accommodate staff with varying levels of technical comfort, the IA is organized around four core operations: Inventory Catalog, Quick Assign, Audit Reports, and Return Reminders.
            </p>

            {/* IA Diagram Image */}
            <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-zinc-900/40 mb-8">
              <Image
                src="/images/Assedra/IA.png"
                alt="Information Architecture Diagram"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>

            <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
              Global navigation anchors the top bar with universal search, allowing any asset, serial number, or faculty member to be located in less than two seconds from any screen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* User Flows: Four Core Workflows */}
      <section id="user-flows" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              User Flows: Streamlining Core Interactions
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              Rather than forcing staff through endless form fields, we mapped out four streamlined pathways that turn complex database entries into rapid, guided interactions.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Workflow 01</span>
                <h3 className="text-xl font-bold text-white">Item Registration &amp; Cataloging</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Storekeeper clicks &ldquo;Add Item&rdquo; &rarr; selects pre-filled category template &rarr; inputs serial or scans barcode &rarr; assigns physical room location &rarr; receives instant QR tag confirmation for physical asset labeling.
                </p>
                <p className="text-xs text-zinc-400 italic">Reduces item intake time from 8 minutes to 45 seconds.</p>
              </div>

              <div className="space-y-4">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Workflow 02</span>
                <h3 className="text-xl font-bold text-white">Quick Assign &amp; Custody Handover</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Global search retrieves item &rarr; taps &ldquo;Assign&rdquo; &rarr; selects staff from auto-complete directory &rarr; sets expected return date &rarr; system logs custody handover with automated calendar sync.
                </p>
                <p className="text-xs text-zinc-400 italic">Eliminates disputed paper checkout signatures permanently.</p>
              </div>

              <div className="space-y-4">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Workflow 03</span>
                <h3 className="text-xl font-bold text-white">Return Verification &amp; Condition Check</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Item located via Active Loans view &rarr; one-click &ldquo;Mark Returned&rdquo; &rarr; optional condition rating (Good, Damaged, Needs Repair) &rarr; asset status returns to Available immediately.
                </p>
                <p className="text-xs text-zinc-400 italic">Flags equipment issues before re-issuing to other classrooms.</p>
              </div>

              <div className="space-y-4">
                <span className="text-xs text-zinc-500 uppercase tracking-wider block">Workflow 04</span>
                <h3 className="text-xl font-bold text-white">Automated Return Reminders &amp; Audit</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  System tracks approaching due dates &rarr; sends polite automated reminders 48h prior &rarr; compiles monthly loss rate and utilization trends for PTA and board review with 1-click PDF export.
                </p>
                <p className="text-xs text-zinc-400 italic">Removes awkward interpersonal friction between colleagues.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution: Key System Capabilities */}
      <section id="solution" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              The Solution: Intelligent Simplicity
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              Assedra provides the robust accountability of an enterprise system with the effortless clarity of modern consumer software.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="fill-secondary p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-3">
                    Feature 01
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">Quick Assign Wizard</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    A lightweight 3-step checkout flow that enables equipment handovers in seconds, eliminating manual ledger errors.
                  </p>
                </div>
                <p className="text-xs text-zinc-400 pt-4 border-t border-white/5">
                  Sub-30-second checkout flow
                </p>
              </div>

              <div className="fill-secondary p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-3">
                    Feature 02
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">Smart Reminders</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Automated email and in-app notifications for overdue returns and upcoming maintenance, removing awkward manual follow-ups.
                  </p>
                </div>
                <p className="text-xs text-zinc-400 pt-4 border-t border-white/5">
                  Zero manual chasing
                </p>
              </div>

              <div className="fill-secondary p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-3">
                    Feature 03
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">Audit Trails</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Tamper-proof chronological histories for every single asset: who borrowed it, what condition it was in, and when it was returned.
                  </p>
                </div>
                <p className="text-xs text-zinc-400 pt-4 border-t border-white/5">
                  100% verifiable custody history
                </p>
              </div>
            </div>

            <div className="fill-secondary p-8 md:p-10 rounded-xl">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">
                Executive Visibility
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Visual Analytics &amp; Board-Ready Reporting
              </h3>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl mb-8">
                Turning thousands of equipment logs into clear, actionable visual summaries. Administrators instantly spot high-loss categories, underutilized hardware, and upcoming maintenance costs.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5 text-xs text-zinc-400">
                <div>
                  <strong className="text-zinc-200 block mb-1">Utilization Metrics</strong>
                  Tracks how frequently expensive lab and media equipment is actually deployed.
                </div>
                <div>
                  <strong className="text-zinc-200 block mb-1">Loss Prevention</strong>
                  Flags overdue trends by department to prevent permanent asset disappearance.
                </div>
                <div>
                  <strong className="text-zinc-200 block mb-1">1-Click Export</strong>
                  Pre-formatted PDF and CSV reports ready for school board audits and PTA reviews.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Designs Walkthrough */}
      <section id="designs" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Final Designs: Core Screens Walkthrough
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-16 font-light">
              High-fidelity web application screens designed for high-contrast clarity and responsive operation across laptops, tablets, and desktop workstations.
            </p>

            <div className="space-y-20">
              {/* Screen 1: Dashboard */}
              <div className="space-y-4">
                <div className="max-w-2xl">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">01 &bull; Executive Command</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">Main Dashboard Overview</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    High-level visibility into total school assets, active loans, overdue alerts, and quick action shortcuts for new check-outs.
                  </p>
                </div>
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900/60 shadow-xl">
                  <Image
                    src="/images/Assedra/1920w-light.png"
                    alt="Assedra Main Dashboard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1000px"
                  />
                </div>
              </div>

              {/* Screen 2: Inventory Catalog */}
              <div className="space-y-4">
                <div className="max-w-2xl">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">02 &bull; Catalog Management</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">Inventory with Global Search &amp; Multi-Filtering</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Enables staff to filter by department, condition, location, or availability status with real-time query responses.
                  </p>
                </div>
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900/60 shadow-xl">
                  <Image
                    src="/images/Assedra/Inventory.png"
                    alt="Assedra Inventory Catalog"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1000px"
                  />
                </div>
              </div>

              {/* Screen 3: Assignments Flow */}
              <div className="space-y-4">
                <div className="max-w-2xl">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">03 &bull; Checkout Wizard</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">Streamlined Assignment Flow</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Guided modal flow for staff handover: selects item, borrower, loan timeframe, and generates digital confirmation.
                  </p>
                </div>
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900/60 shadow-xl">
                  <Image
                    src="/images/Assedra/Assignments.png"
                    alt="Assedra Assignment Modal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1000px"
                  />
                </div>
              </div>

              {/* Screen 4: Visual Reports */}
              <div className="space-y-4">
                <div className="max-w-2xl">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">04 &bull; Analytics</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">Visual Reports Dashboard</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Interactive charts breaking down asset distribution, maintenance logs, and return compliance rates across terms.
                  </p>
                </div>
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900/60 shadow-xl">
                  <Image
                    src="/images/Assedra/Reports.png"
                    alt="Assedra Reports Analytics"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1000px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Auxiliary Screens Showcase Carousel */}
      <DesignCarousel items={designItems} aspect="landscape" />

      {/* Outcome Section */}
      <section id="outcome" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              The Outcome: Institutional Impact
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              Assedra successfully transformed school asset operations by replacing administrative chaos with predictable, verified workflows:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
              <div className="space-y-2">
                <span className="text-2xl font-bold text-white block">Real-Time</span>
                <h3 className="text-base font-semibold text-zinc-200">Continuous Inventory Tracking</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Institutions maintain accurate visibility across all campus assets without physical stocktaking delays.</p>
              </div>

              <div className="space-y-2">
                <span className="text-2xl font-bold text-white block">&minus;75%</span>
                <h3 className="text-base font-semibold text-zinc-200">Reduction in Asset Loss</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Automated return reminders and staff accountability significantly curb misplaced equipment.</p>
              </div>

              <div className="space-y-2">
                <span className="text-2xl font-bold text-white block">Zero</span>
                <h3 className="text-base font-semibold text-zinc-200">Spreadsheet Dependence</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Eliminates duplicate Excel entries, missing sign-out binders, and handwritten ledger errors.</p>
              </div>

              <div className="space-y-2">
                <span className="text-2xl font-bold text-white block">100%</span>
                <h3 className="text-base font-semibold text-zinc-200">Audit-Ready Accountability</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Generates board-ready audit reports and complete item custody histories in a single click.</p>
              </div>

              <div className="space-y-2">
                <span className="text-2xl font-bold text-white block">Sub-30s</span>
                <h3 className="text-base font-semibold text-zinc-200">Checkout Speed</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Streamlined assignment wizards ensure teachers can borrow classroom tools between periods with zero hassle.</p>
              </div>

              <div className="space-y-2">
                <span className="text-2xl font-bold text-white block">Responsive</span>
                <h3 className="text-base font-semibold text-zinc-200">Cross-Device Mobility</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Staff can verify equipment on tablets and smartphones directly from storerooms or labs.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prototype Video Section */}
      <section id="prototype" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Interactive Prototype Walkthrough
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-12 font-light">
              Demonstrating the live web application flow: from asset search and 3-step checkout to reminder management and analytics generation.
            </p>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=djqcs2ngt&public_id=Recording_2025-09-07_170435_rem4vr&profile=cld-default"
                width="640"
                height="360"
                style={{ height: '100%', width: '100%' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                title="Assedra Prototype Demo"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section id="reflection" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Reflection: Designing for Operational Realities
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-12 font-light">
              Designing Assedra reinforced that institutional software does not have to be painful. When you design around the true workflows of educators, efficiency becomes effortless.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Design Takeaways</h3>
                <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed">
                  <li>
                    <strong className="text-zinc-200">Respecting Educator Time:</strong> Teachers have 5 minutes between periods. Check-out flows must be sub-30-second interactions or they will be circumvented.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Accountability Without Guilt:</strong> Automated reminders remove interpersonal conflict between colleagues, shifting reminders into systemic protocol.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Resilient Workflows:</strong> Supporting quick barcode lookups and offline-tolerant caching is essential for infrastructure in emerging markets.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Future Enhancements</h3>
                <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed">
                  <li>
                    <strong className="text-zinc-200">RFID Smart Tags:</strong> Automated walk-through detection for library books and high-value laboratory equipment.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Predictive Maintenance AI:</strong> Forecasting servicing intervals based on historical usage intensity and equipment age.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Multi-Campus Centralization:</strong> Federated inventory pools for school districts sharing resources across multiple branches.
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-lg md:text-xl text-zinc-200 italic font-light leading-relaxed max-w-3xl">
                &ldquo;When software respects the people who use it, tools stop feeling like administrative burdens and become trusted partners in delivering quality education.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="py-12 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/#work"
              className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-2"
            >
              <span>&larr;</span>
              <span>Back to All Work</span>
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded-none hover:bg-zinc-200 transition-all duration-200"
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default AssedraCaseStudy;
