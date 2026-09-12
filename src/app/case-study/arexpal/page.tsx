'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';
import DesignCarousel from '@/components/DesignCarousel';

const ArexpalCaseStudy = () => {
  const navItems = [
    { id: 'overview', label: 'Overview', href: 'overview' },
    { id: 'problem', label: 'The Problem', href: 'problem' },
    { id: 'research', label: 'Research', href: 'research' },
    { id: 'personas', label: 'Personas', href: 'personas' },
    { id: 'architecture', label: 'Architecture', href: 'architecture' },
    { id: 'solution', label: 'The Solution', href: 'solution' },
    { id: 'screens', label: 'Core Screens', href: 'screens' },
    { id: 'prototype', label: 'Prototype', href: 'prototype' },
    { id: 'reflection', label: 'Reflection', href: 'reflection' },
  ];

  const homeImage = '/images/Arexpal/Home.png';
  const tipsImage = '/images/Arexpal/Tips.png';
  const challengesImage = '/images/Arexpal/Challenges.png';
  const diaryImage = '/images/Arexpal/Diary.png';

  const designItems = [
    { id: 0, imageUrl: '/images/Arexpal/Onboarding-1.png' },
    { id: 1, imageUrl: '/images/Arexpal/Onboarding-2.png' },
    { id: 2, imageUrl: '/images/Arexpal/Onboarding-3.png' },
    { id: 3, imageUrl: '/images/Arexpal/Signup.png' },
    { id: 4, imageUrl: '/images/Arexpal/Login.png' },
    { id: 5, imageUrl: '/images/Arexpal/Verification.png' },
    { id: 6, imageUrl: '/images/Arexpal/Profile.png' },
    { id: 7, imageUrl: '/images/Arexpal/Settings.png' },
    { id: 8, imageUrl: '/images/Arexpal/All-categories.png' },
    { id: 9, imageUrl: '/images/Arexpal/Badges.png' },
    { id: 10, imageUrl: '/images/Arexpal/Badges-2.png' },
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
              Case Study &bull; Preventive Healthcare &bull; 2024
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.08]">
              Arexpal: Designing a Lifeline for Preventive Health
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-12">
              Transforming clinical cancer-prevention guidelines into intuitive, sustainable daily habits through empathetic UX and ethical behavioral design.
            </p>

            {/* Metadata Line */}
            <div className="flex flex-wrap gap-x-12 gap-y-4 py-6 border-y border-white/10 text-sm mb-16">
              <div>
                <span className="text-zinc-500 block">Role</span>
                <span className="text-zinc-200 font-medium">Lead Product Designer</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Duration</span>
                <span className="text-zinc-200 font-medium">8 Weeks (End-to-End)</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Focus</span>
                <span className="text-zinc-200 font-medium">Behavioral UX &bull; Mobile App</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Methods</span>
                <span className="text-zinc-200 font-medium">Interviews, IA, Rapid Prototyping</span>
              </div>
            </div>

            {/* Hero Cover Mockup */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900/40 mb-16">
              <Image
                src="/images/Arexpal/cover-art.png"
                alt="Arexpal Mobile App Overview"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>

            {/* Editorial Lead */}
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-light mb-6">
                Up to 40% of cancers are preventable through manageable lifestyle modifications across diet, physical movement, sun exposure, and substance moderation. Yet public health advice remains largely locked behind clinical jargon, sporadic clinic campaigns, and guilt-driven warnings.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed">
                The objective with Arexpal was not to build another sterile medical tracker, but an everyday companion that respects human psychology—using micro-learning, conversational reflection, and positive reinforcement to make self-care feel effortless and dignifying.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem: Access vs Action */}
      <section id="problem" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              The Fundamental Challenge: Access vs. Action
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              Early research revealed that the barrier to preventive health is twofold: people either cannot access trustworthy guidance, or when they can, that knowledge fails to translate into lasting habit change.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-14">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  01. The Access Gap
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  Geographic distance to healthcare facilities and the cost of private consultations make preventive advice a privilege. The digital alternative—searching the open web—often yields contradictory, frightening, or unverified claims that induce anxiety rather than clarity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  02. The Action Gap
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  Human cognition heavily discounts long-term rewards. Knowing that tobacco is harmful or that sleep is vital rarely offsets the immediate stress relief of an unhealthy habit. Without immediate, encouraging feedback loops, good intentions consistently deteriorate.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-zinc-600 pl-6 max-w-3xl">
              <p className="text-lg md:text-xl text-zinc-200 italic font-light leading-relaxed">
                &ldquo;How might we turn preventive health from a scary, forgettable chore into an active, positive daily routine on the one device people carry everywhere?&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research & Psychological Friction */}
      <section id="research" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Research &amp; Four Behavioral Friction Points
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-16 font-light">
              We interviewed 20 individuals across Nigeria and audited 30 existing health apps to pinpoint why wellness tools suffer steep 30-day drop-offs. Four recurring psychological blockers emerged:
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Barrier 01</span>
                <h3 className="text-lg font-semibold text-white mb-2">Distrust &amp; Information Chaos</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Without a trusted source, users cycle through contradictory claims online, ultimately discarding all recommendations out of frustration.
                </p>
                <p className="text-xs text-zinc-300 italic border-l border-zinc-700 pl-3">
                  &ldquo;One site says coffee prevents cancer, another says it causes it. Who do I even trust?&rdquo;
                </p>
              </div>

              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Barrier 02</span>
                <h3 className="text-lg font-semibold text-white mb-2">Cognitive Overload</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Clinical whitepapers and dense medical articles demand too much mental energy from users who are already fatigued by daily work and life.
                </p>
                <p className="text-xs text-zinc-300 italic border-l border-zinc-700 pl-3">
                  &ldquo;A health app gave me a 20-page article on antioxidants. I read one paragraph and deleted it.&rdquo;
                </p>
              </div>

              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Barrier 03</span>
                <h3 className="text-lg font-semibold text-white mb-2">Delayed Reward Discounting</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Preventive benefits materialize over decades, whereas poor habits provide instant gratification. Abstract future benefits fail to sustain motivation today.
                </p>
                <p className="text-xs text-zinc-300 italic border-l border-zinc-700 pl-3">
                  &ldquo;The reward of quitting smoking feels years away, but a cigarette is instant relief right now.&rdquo;
                </p>
              </div>

              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Barrier 04</span>
                <h3 className="text-lg font-semibold text-white mb-2">The Guilt-Driven Experience</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Traditional trackers function like stern doctor appointments—shaming users when they miss a day, which accelerates uninstalls.
                </p>
                <p className="text-xs text-zinc-300 italic border-l border-zinc-700 pl-3">
                  &ldquo;It felt like a doctor nagging me. When I missed a day, I just felt guilty and stopped opening it.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personas: Human Models */}
      <section id="personas" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Three Behavioral Archetypes
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              Rather than generic demographic descriptions, each persona represents a distinct emotional stance toward health guidance:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Zainab, 18</h3>
                  <p className="text-xs text-zinc-400">Student &bull; Lagos</p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Navigating new independence with late-night food and social drinking. Thinks cancer is an issue solely for older adults.
                </p>
                <div className="text-xs text-zinc-400 pt-3 border-t border-white/10 space-y-1">
                  <p><strong className="text-zinc-200">UX Priority:</strong> Snackable micro-tips, peer challenges, and lighthearted gamification.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">David, 35</h3>
                  <p className="text-xs text-zinc-400">Software Developer &bull; Abuja</p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Sedentary desk worker managing work stress and family time. Wants actionable routines without complex lifestyle overhauls.
                </p>
                <div className="text-xs text-zinc-400 pt-3 border-t border-white/10 space-y-1">
                  <p><strong className="text-zinc-200">UX Priority:</strong> One-tap rapid logging, verified medical sources, and zero cognitive drag.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Aisha, 52</h3>
                  <p className="text-xs text-zinc-400">Retired Teacher &bull; Ibadan</p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  In remission from breast cancer. Experiencing recurrence anxiety and seeking gentle, emotionally supportive habit guidance.
                </p>
                <div className="text-xs text-zinc-400 pt-3 border-t border-white/10 space-y-1">
                  <p><strong className="text-zinc-200">UX Priority:</strong> Warm, destigmatized language, conversational reflection, and reassurance.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Architecture & System Loop */}
      <section id="architecture" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Information Architecture: The Core Habit Loop
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              We organized the entire product around a continuous psychological loop: <strong>Learn &bull; Reflect &bull; Act</strong>. A flat structure ensures any core feature is accessible in a single tap.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-14">
              <div>
                <span className="text-xs text-zinc-500 block mb-1">01 &bull; Orientation</span>
                <h3 className="text-base font-semibold text-white mb-2">Home Dashboard</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Personalized daily greeting, streak status, quick reflection shortcut, and AI hero tip of the day.
                </p>
              </div>

              <div>
                <span className="text-xs text-zinc-500 block mb-1">02 &bull; Learn</span>
                <h3 className="text-base font-semibold text-white mb-2">Feed (The Library)</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Modular Tip Cards personalized by AI, category filters (Nutrition, Sleep, Sun Safety), and source citations.
                </p>
              </div>

              <div>
                <span className="text-xs text-zinc-500 block mb-1">03 &bull; Reflect</span>
                <h3 className="text-base font-semibold text-white mb-2">Diary (The Core)</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Anchored as the central Floating Action Button. Guided conversational prompts replace blank text boxes.
                </p>
              </div>

              <div>
                <span className="text-xs text-zinc-500 block mb-1">04 &bull; Act</span>
                <h3 className="text-base font-semibold text-white mb-2">Challenges</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Bite-sized 5-day to 14-day community missions that convert knowledge into tangible social habits.
                </p>
              </div>
            </div>

            <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400">
              <span>Navigation Hierarchy: 4-tab bar with central prominent Diary action.</span>
              <span className="text-zinc-200">Zero submenus deeper than 2 levels.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution & Three Design Principles */}
      <section id="solution" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              The Solution: Health Education That Feels Human
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              Arexpal solves the behavioral gap through three foundational design pillars, powered by an ambient intelligence layer that works quietly in the background.
            </p>

            {/* Three Pillars in fill-secondary */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="fill-secondary p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-3">
                    Pillar 01
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">Cognitive Ease</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    Information is delivered in snackable, jargon-free &ldquo;Tip Cards&rdquo;. Navigation is flat and predictable, dramatically reducing cognitive fatigue.
                  </p>
                </div>
                <p className="text-xs text-zinc-400 pt-4 border-t border-white/5">
                  Sub-5-second scanning &bull; 1 concept per card
                </p>
              </div>

              <div className="fill-secondary p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-3">
                    Pillar 02
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">Emotional Design</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    Warm visual language, supportive conversational prompts, and celebratory milestones replace the sterile, scolding aesthetic of traditional medical apps.
                  </p>
                </div>
                <p className="text-xs text-zinc-400 pt-4 border-t border-white/5">
                  Empathetic feedback &bull; Reassuring tone
                </p>
              </div>

              <div className="fill-secondary p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-3">
                    Pillar 03
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">Behavioral Stickiness</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    Ethical gamification—streaks, community challenges, and the Zeigarnik effect—bridges the gap between delayed benefits and immediate motivation.
                  </p>
                </div>
                <p className="text-xs text-zinc-400 pt-4 border-t border-white/5">
                  Positive reinforcement &bull; Habit loops
                </p>
              </div>
            </div>

            {/* Ambient AI Layer */}
            <div className="fill-secondary p-8 md:p-10 rounded-xl">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">
                Under the Hood
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                The Ambient Intelligence Engine
              </h3>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl mb-8">
                The AI does not show off algorithmic complexity; it acts as an invisible editor. It analyzes persona goals, local Nigerian culinary habits, and past diary logs to dynamically surface relevant tips, prompts, and reminders.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5 text-xs text-zinc-400">
                <div>
                  <strong className="text-zinc-200 block mb-1">Contextual Curation</strong>
                  Matches prevention tips to active user habits and seasonal routines.
                </div>
                <div>
                  <strong className="text-zinc-200 block mb-1">Cultural Grounding</strong>
                  Frames questions around local dietary patterns, ingredients, and lifestyle factors.
                </div>
                <div>
                  <strong className="text-zinc-200 block mb-1">Adaptive Cadence</strong>
                  Calibrates notification timing to prevent alert fatigue.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Screens Walkthrough */}
      <section id="screens" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Core Screens Walkthrough
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-16 font-light">
              How the architectural principles translate into actual production surfaces designed for clarity and emotional safety.
            </p>

            <div className="space-y-24">
              {/* Home */}
              <div className="grid md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-6 space-y-4">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">01 &bull; Dashboard</span>
                  <h3 className="text-2xl font-bold text-white">Home: Daily Encouragement</h3>
                  <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                    Designed for a sub-5-second glance. Features a personalized morning greeting, active streak counters, and a single hero micro-learning card. It provides a gentle nudge toward daily reflection without feeling like a task manager.
                  </p>
                  <p className="text-xs text-zinc-400 italic pt-2">
                    UX Rationale: Prevents cognitive overload by prioritizing one clear daily takeaway over medical metrics.
                  </p>
                </div>
                <div className="md:col-span-6 flex justify-center">
                  <div className="relative w-[260px] sm:w-[300px] h-[500px] sm:h-[560px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
                    <Image
                      src={homeImage}
                      alt="Arexpal Home Dashboard"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 260px, 300px"
                    />
                  </div>
                </div>
              </div>

              {/* Diary */}
              <div className="grid md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-6 md:order-2 space-y-4">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">02 &bull; Reflection</span>
                  <h3 className="text-2xl font-bold text-white">Diary: Guided Conversation</h3>
                  <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                    Traditional journaling presents an intimidating blank field. Here, smart prompt carousels (e.g. &ldquo;Did you eat fresh fruit today?&rdquo;) allow quick chip selections, turning recall into easy choice-based interactions.
                  </p>
                  <p className="text-xs text-zinc-400 italic pt-2">
                    UX Rationale: Lowers the cognitive threshold of reflection, keeping daily logging under 15 seconds.
                  </p>
                </div>
                <div className="md:col-span-6 md:order-1 flex justify-center">
                  <div className="relative w-[260px] sm:w-[300px] h-[500px] sm:h-[560px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
                    <Image
                      src={diaryImage}
                      alt="Arexpal Diary"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 260px, 300px"
                    />
                  </div>
                </div>
              </div>

              {/* Feed */}
              <div className="grid md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-6 space-y-4">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">03 &bull; Knowledge</span>
                  <h3 className="text-2xl font-bold text-white">Feed: The Snackable Magazine</h3>
                  <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                    Modular Tip Cards replace intimidating articles. Each card features a bold takeaway, an accessible explanation, and verified medical source attribution (e.g., WHO, NCI) with 1-tap save and WhatsApp sharing.
                  </p>
                  <p className="text-xs text-zinc-400 italic pt-2">
                    UX Rationale: Solves misinformation by combining social-media ease with verified scientific authority.
                  </p>
                </div>
                <div className="md:col-span-6 flex justify-center">
                  <div className="relative w-[260px] sm:w-[300px] h-[500px] sm:h-[560px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
                    <Image
                      src={tipsImage}
                      alt="Arexpal Feed"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 260px, 300px"
                    />
                  </div>
                </div>
              </div>

              {/* Challenges */}
              <div className="grid md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-6 md:order-2 space-y-4">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">04 &bull; Action</span>
                  <h3 className="text-2xl font-bold text-white">Challenges: Habit Gamification</h3>
                  <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                    Translates long-term goals into 5-day and 7-day micro-missions. Clear progress indicators and social participant counters leverage community accountability to maintain momentum.
                  </p>
                  <p className="text-xs text-zinc-400 italic pt-2">
                    UX Rationale: Closes the delayed-reward gap by providing immediate daily completion feedback.
                  </p>
                </div>
                <div className="md:col-span-6 md:order-1 flex justify-center">
                  <div className="relative w-[260px] sm:w-[300px] h-[500px] sm:h-[560px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
                    <Image
                      src={challengesImage}
                      alt="Arexpal Challenges"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 260px, 300px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Auxiliary Screens Showcase Carousel */}
      <DesignCarousel items={designItems} />

      {/* Prototype Validation */}
      <section id="prototype" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Prototype &amp; Usability Validation
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-14 font-light">
              We validated interactive flows via moderated testing sessions with 5 representative users, testing for clarity, emotional comfort, and interaction friction.
            </p>

            <div className="grid md:grid-cols-12 gap-10 items-center mb-14">
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Key Usability Takeaways</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    Testing validated that the conversational Diary lowered barrier to entry, but revealed that initial Challenge descriptions were too wordy. We trimmed copy by 40% to reduce decision fatigue.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10 text-left">
                  <div>
                    <span className="text-2xl md:text-3xl font-bold text-white block">95%</span>
                    <span className="text-xs text-zinc-400">Task Completion</span>
                  </div>
                  <div>
                    <span className="text-2xl md:text-3xl font-bold text-white block">4.2/5</span>
                    <span className="text-xs text-zinc-400">Usability Rating</span>
                  </div>
                  <div>
                    <span className="text-2xl md:text-3xl font-bold text-white block">87%</span>
                    <span className="text-xs text-zinc-400">Positive Sentiment</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] rounded-2xl overflow-hidden bg-black shadow-2xl aspect-[9/18]">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src="https://res.cloudinary.com/djqcs2ngt/video/upload/v1757595741/0910_njiitw.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection & Retrospective */}
      <section id="reflection" className="py-20 md:py-28 border-t border-white/5">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Reflection: Lessons in Preventive Healthcare UX
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-12 font-light">
              Designing Arexpal reinforced that health UX is an exercise in emotional trust. Technology should not lecture users; it must accompany them.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">What Worked</h3>
                <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed">
                  <li>
                    <strong className="text-zinc-200">Ethical gamification:</strong> Tying streaks to genuine self-reflection rather than arbitrary clicks kept engagement authentic.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Conversational framing:</strong> Guided prompt chips eliminated the intimidation of blank text inputs.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Medical collaboration:</strong> Partnering with public health advisors ensured all guidance was credible and safe.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Future Roadmap</h3>
                <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed">
                  <li>
                    <strong className="text-zinc-200">Passive telemetry:</strong> Connecting with Apple Health and Google Fit to automate sleep and exercise logging.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Regional dietary models:</strong> Broadening AI suggestions to encompass diverse culinary and cultural realities across Africa.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Safe peer circles:</strong> Moderated support spaces for cancer survivors like Aisha to share milestones securely.
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-lg md:text-xl text-zinc-200 italic font-light leading-relaxed max-w-3xl">
                &ldquo;Cancer prevention starts with behavior change. Behavior change starts with a compelling, empathetic experience. Arexpal is proof that thoughtful design can serve as a genuine lifeline.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Bottom Navigation */}
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

export default ArexpalCaseStudy;
