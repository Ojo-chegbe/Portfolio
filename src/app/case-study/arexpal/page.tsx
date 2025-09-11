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
    { id: 'discover-define', label: 'Discover & Define', href: 'discover-define' },
    { id: 'develop-deliver', label: 'Develop & Deliver', href: 'develop-deliver' },
    { id: 'personas', label: 'Personas', href: 'personas' },
    { id: 'information-architecture', label: 'Information Architecture', href: 'information-architecture' },
    { id: 'user-flows', label: 'User Flows', href: 'user-flows' },
    { id: 'design-principles', label: 'Design Principles', href: 'design-principles' },
    { id: 'final-designs', label: 'Final Designs', href: 'final-designs' },
    { id: 'prototype', label: 'Prototype', href: 'prototype' },
    { id: 'outcome', label: 'The Outcome', href: 'outcome' },
    { id: 'reflection', label: 'Reflection', href: 'reflection' }
  ];

  // Images for specific sections
  const homeImage = '/images/Arexpal/Home.png';
  const tipsImage = '/images/Arexpal/Tips.png';
  const challengesImage = '/images/Arexpal/Challenges.png';
  const diaryImage = '/images/Arexpal/Diary.png';

  // Images for carousel (excluding the main section images)
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
    { id: 10, imageUrl: '/images/Arexpal/Badges-2.png' }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <TopNav navItems={navItems} />
      
      <section className="pt-48 pb-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white" style={{ paddingTop: '12rem' }}>
        <div className="container">
          <motion.div 
            className="flex flex-col items-center text-center gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div 
              className="relative max-w-lg w-full rounded-3xl overflow-hidden shadow-sm border-2 border-blue-500"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Image
                src="/images/Arexpal/cover-art.png"
                alt="Arexpal Cancer Prevention App"
                width={500}
                height={375}
                className="w-full h-auto"
                priority
              />
            </motion.div>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Arexpal UX Case Study
              </h1>
              <p className="text-2xl text-gray-600 mb-4 leading-relaxed font-medium">
                Designing a Lifeline for Preventive Health. A UX journey into behavior change.  
              </p>
             
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Role</span>
                <span className="text-lg font-semibold text-gray-900">UX Designer</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Timeline</span>
                <span className="text-lg font-semibold text-gray-900">2 months</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Tools</span>
                <span className="text-lg font-semibold text-gray-900">Figma, Notion, Miro</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Framework</span>
                <span className="text-lg font-semibold text-gray-900">Double Diamond</span>
              </div>
            </div>

              <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This case study documents the end-to-end design process for Arexpal, a mobile application designed to make cancer prevention accessible, engaging, and life-changing. We&apos;ll explore how we moved from a broad societal challenge to a refined, user-centric solution, all guided by the principles of the Double Diamond design framework.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our goal was not merely to build an app, but to design a companion—a tool that uses the addictive mechanics of modern technology for a profoundly positive purpose.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Part 1: Discover & Define */}
      <section id="discover-define" className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Part 1: Discover & Define – Understanding the Problem
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The first half of the Double Diamond process is about divergence and convergence. We start by exploring the problem as widely as possible (Discover) and then synthesize those findings into a clear, actionable problem statement (Define). This phase is about falling in love with the problem, not the solution.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">The Challenge: Health Education Is A Privilege, Not A Right</h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our project began with a stark and sobering reality: cancer is not a single disease, and prevention is our most powerful weapon against it. Up to 40% of cancers can be prevented through lifestyle modifications in areas like diet, exercise, stress management, and substance use. The knowledge to make these changes exists, but it&apos;s locked away, unevenly distributed, and often fails to inspire action.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The core challenge was twofold:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-red-600">The Access Gap</h4>
                  <p className="text-gray-700 leading-relaxed">
                    How can we deliver life-saving preventive health knowledge to everyone, regardless of their proximity to clinics, the quality of their formal education, or their socioeconomic status? Building more hospitals is a slow, expensive solution. Traditional health campaigns have limited reach and sustainability.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-orange-600">The Action Gap</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Even when people have access to information, why does it so rarely translate into lasting behavior change? We all know that smoking is harmful and a balanced diet is good, yet the gap between knowledge and action persists.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We saw a single, ubiquitous tool that could bridge both gaps: <strong>the smartphone</strong>. Our challenge, therefore, crystallized into a focused question: <em>How might we leverage the smartphone to transform preventive health education from a passive, forgettable chore into an active, addictive, and deeply personal daily habit?</em>
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Pain Points: The Four Barriers to a Healthier Life</h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To truly understand the "why" behind the access and action gaps, our team initiated the Discover phase. We conducted a mixed-methods research campaign, including 20 in-depth user interviews across our target demographics, a market analysis of over 30 existing health and wellness apps, and a survey of 250 individuals. This divergent exploration allowed us to immerse ourselves in the user's world, and from this, we synthesized our findings into four critical pain points during the Define phase.
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">1. Barrier to Access & Trust</h4>
                  <blockquote className="bg-white p-4 rounded-lg mb-4 italic text-gray-700 border-l-4 border-red-500">
                    "I want to be healthier, but my local clinic is two hours away, and I can't afford to take the day off work. I look online, but one site says coffee is a superfood, and the next says it causes cancer. Who do I even trust?"
                  </blockquote>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>The Pain:</strong> Reliable health information is physically and financially inaccessible for many. The digital alternative is a chaotic wasteland of contradictory, jargon-filled, and often untrustworthy content. Users feel overwhelmed and paralyzed by the noise.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">2. Information Overwhelm & Cognitive Load</h4>
                  <blockquote className="bg-white p-4 rounded-lg mb-4 italic text-gray-700 border-l-4 border-orange-500">
                    "I downloaded a health app once. It gave me a 20-page article on antioxidants. I have two kids and a full-time job. I read the first paragraph and never opened it again."
                  </blockquote>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>The Pain:</strong> The human brain is not wired to process dense, clinical information, especially when already stressed. Health education is often presented in a way that is academically sound but behaviorally ineffective. It demands too much cognitive effort for too little immediate reward.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">3. The Behavioral Gap & Lack of Motivation</h4>
                  <blockquote className="bg-white p-4 rounded-lg mb-4 italic text-gray-700 border-l-4 border-yellow-500">
                    "I know I should stop smoking. I've tried. But after a stressful day, it's just... easy. The 'reward' of quitting feels so far away, but the reward of a cigarette is instant."
                  </blockquote>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>The Pain:</strong> Humans are driven by short-term feedback loops. The long-term benefits of preventive health are abstract and delayed, while unhealthy habits often provide immediate gratification. Without compelling, immediate reinforcement, good intentions fizzle out.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">4. The Retention Challenge & "Chore" Factor</h4>
                  <blockquote className="bg-white p-4 rounded-lg mb-4 italic text-gray-700 border-l-4 border-green-500">
                    "Most health apps feel like a doctor nagging me. They're sterile, boring, and make me feel guilty when I miss a day. It feels like work, not something I want to do."
                  </blockquote>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>The Pain:</strong> Existing health apps frequently fail because they are designed like medical tools, not human experiences. They lack emotional connection, rewarding feedback, and a sense of play, leading to high churn rates as users quickly lose interest.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  These four pain points became the foundation of our design strategy. We weren't just building an information delivery system; we were designing a solution to overcome deep-seated psychological and accessibility barriers.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Design Process: The Double Diamond in Action</h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To tackle this multifaceted challenge, we committed to the Double Diamond framework. This approach ensured we didn't jump to solutions prematurely and that our final product was rigorously validated against real user needs.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Discover</h4>
                  <p className="text-sm text-gray-600">Broad research—user interviews, competitor analysis, and literature reviews on behavioral psychology</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Define</h4>
                  <p className="text-sm text-gray-600">Synthesized research into four core pain points and developed three detailed user personas</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-600 font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Develop</h4>
                  <p className="text-sm text-gray-600">Creative exploration with brainstorming sessions, wireframes, user flows, and information architecture</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-lg">4</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">Deliver</h4>
                  <p className="text-sm text-gray-600">Refined ideas into high-fidelity mockups, interactive prototype, and usability testing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Part 2: Develop & Deliver */}
      <section id="develop-deliver" className="py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Part 2: Develop & Deliver – Crafting the Solution
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              With a clearly defined problem and a deep understanding of our users, we entered the second half of the Double Diamond. This is where we explored potential solutions (Develop) and refined them into a final, polished product (Deliver).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personas Section */}
      <section id="personas" className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Personas: Giving Our Users a Face and a Voice
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              From our research in the Define phase, we developed three core personas. These weren't just demographic checklists; they were narrative tools that guided every design decision, from the tone of voice to the feature prioritization. They kept us grounded in human-centered design.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Zainab */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👩‍🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Zainab, The Youth</h3>
                  <p className="text-gray-600">18 years old, University Student</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Zainab is a bright, social university student living in a bustling city. Her life revolves around her studies, friends, and social media. She's experimenting with her independence, which includes late-night fast food, social drinking, and occasional smoking. The concept of long-term health feels abstract and distant.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Goals</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Fit in with her social circle</li>
                      <li>• Manage the stress of her studies</li>
                      <li>• Discover fun, new experiences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frustrations</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Health advice feels preachy and irrelevant</li>
                      <li>• Traditional health apps are boring</li>
                      <li>• Limited disposable income for health</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-600 mb-2">UX Goal for Zainab</h4>
                    <p className="text-gray-700 text-sm">
                      Make health education feel like a fun, social game. It needs to be shareable, competitive, and use language that resonates with her generation.
                    </p>
                  </div>
                </div>
              </div>

              {/* David */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">David, The Health-Conscious Adult</h3>
                  <p className="text-gray-600">35 years old, Software Developer</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      David works a demanding, sedentary job. He's married with one child and is starting to notice the effects of a high-stress lifestyle. He tries to eat well and exercises sporadically but struggles with consistency. He is a proactive information-seeker but feels overwhelmed by conflicting advice online.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Goals</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Have more energy for his family</li>
                      <li>• Manage work-related stress effectively</li>
                      <li>• Find a sustainable, practical routine</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frustrations</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Lack of time for complex health articles</li>
                      <li>• "All-or-nothing" fitness plans</li>
                      <li>• Difficulty tracking daily habits</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">UX Goal for David</h4>
                    <p className="text-gray-700 text-sm">
                      Provide actionable, personalized, and data-driven insights that fit seamlessly into his busy life. The experience must feel efficient, credible, and empowering.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aisha */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👩‍🏫</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Aisha, The Survivor</h3>
                  <p className="text-gray-600">52 years old, Retired Teacher, Post-Treatment</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Aisha is a breast cancer survivor. Her treatment was successful, but she lives with the constant fear of recurrence. Her doctor has advised her to manage her diet, stress, and sleep, but she feels anxious and unsupported in her daily journey.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Goals</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Feel in control of her health</li>
                      <li>• Find supportive community</li>
                      <li>• Build healthy habits to minimize risk</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frustrations</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Clinical, impersonal tracking tools</li>
                      <li>• The emotional toll of health management</li>
                      <li>• Feeling alone in her journey</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">UX Goal for Aisha</h4>
                    <p className="text-gray-700 text-sm">
                      Create a gentle, empathetic, and structured experience. The focus is on reassurance, emotional well-being, and celebrating consistent progress over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Architecture Section */}
      <section id="information-architecture" className="py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Information Architecture (IA): Building a Clear and Scalable Foundation
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              During the Develop phase, a key step was designing the app's structure. Our IA was guided by the principle of Cognitive Ease. We wanted users to navigate the app intuitively, without ever feeling lost or having to think too hard about where to find something. The structure is flat and centered around four key user activities.
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Sitemap</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">1.0 Home (The Dashboard)</h4>
                  <p className="text-gray-600">The user's daily starting point. Provides a quick, personalized overview of their day.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">2.0 Feed (The Library)</h4>
                  <p className="text-gray-600 mb-3">The knowledge hub. Where users discover and consume educational content.</p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-600">• 2.1 For You (AI-Personalized)</p>
                    <p className="text-gray-600">• 2.2 General (Public Health Awareness)</p>
                    <p className="text-gray-600">• 2.3 Saved (Personal Collection)</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">3.0 Diary (The Log)</h4>
                  <p className="text-gray-600 mb-3">The central interaction point. The tool for self-reflection and data input.</p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-600">• 3.1 New Daily Entry</p>
                    <p className="text-gray-600">• 3.2 View Past Entries & Patterns</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">4.0 Challenges (The Gym)</h4>
                  <p className="text-gray-600 mb-3">The action and engagement hub. Where knowledge turns into practice through gamified tasks.</p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-600">• 4.1 My Active Challenges</p>
                    <p className="text-gray-600">• 4.2 Explore New Challenges</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">5.0 Profile (The Trophy Room)</h4>
                  <p className="text-gray-600 mb-3">The user's identity and progress center.</p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-600">• 5.1 My Badges & Streaks</p>
                    <p className="text-gray-600">• 5.2 Data & Progress Visualization</p>
                    <p className="text-gray-600">• 5.3 Settings & Notifications</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  The bottom navigation bar prominently features Home, Feed, Challenges, and Profile, with the most important action, Diary, placed in the center as a visually distinct Floating Action Button (FAB). This hierarchy constantly reinforces the core loop: <strong>learn (Feed), act (Challenges), and reflect (Diary)</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Flows Section */}
      <section id="user-flows" className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              User Flows: Charting the Path to Engagement
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              To ensure a frictionless experience, we mapped out critical user flows. These flows demonstrate how users navigate through the core features of Arexpal, from daily logging to challenge participation.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Daily Diary Logging Flow */}
              <motion.div
                className="bg-white border border-gray-200 p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Daily Diary Logging Flow</h3>
                  <p className="text-gray-600 font-medium">Goal: Make habit logging effortless and rewarding</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">1</span>
                    </div>
                    <p className="text-gray-700 text-sm">User opens app → Diary icon at center bottom nav</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">2</span>
                    </div>
                    <p className="text-gray-700 text-sm">Sees today's date and input box</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">3</span>
                    </div>
                    <p className="text-gray-700 text-sm">Smart prompts carousel suggests logs (e.g., "Did you eat fruits today?" "Sleep hours?")</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">4</span>
                    </div>
                    <p className="text-gray-700 text-sm">User types or taps quick options</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">5</span>
                    </div>
                    <p className="text-gray-700 text-sm">Entry saved → earns Vital Points + micro-reward animation</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">6</span>
                    </div>
                    <p className="text-gray-700 text-sm">User sees log appear in today's summary</p>
                  </div>
                </div>
              </motion.div>

              {/* Tips & Feed Flow */}
              <motion.div
                className="bg-white border border-gray-200 p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Tips & Feed Flow</h3>
                  <p className="text-gray-600 font-medium">Goal: Educate through snackable content while keeping it fun</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">1</span>
                    </div>
                    <p className="text-gray-700 text-sm">User taps Feed tab</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">2</span>
                    </div>
                    <p className="text-gray-700 text-sm">Default view = "For You" (personalized AI tips)</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">3</span>
                    </div>
                    <p className="text-gray-700 text-sm">User scrolls → each card shows a health tip or fun fact</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">4</span>
                    </div>
                    <p className="text-gray-700 text-sm">User can like, share, save, or bookmark</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">5</span>
                    </div>
                    <p className="text-gray-700 text-sm">User switches to General Tips or Bookmarked Tips via toggle</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">6</span>
                    </div>
                    <p className="text-gray-700 text-sm">User exits → receives gentle nudge notification later ("Want your next cancer-fighting tip?")</p>
                  </div>
                </div>
              </motion.div>

              {/* Challenge Participation Flow */}
              <motion.div
                className="bg-white border border-gray-200 p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Challenge Participation Flow</h3>
                  <p className="text-gray-600 font-medium">Goal: Motivate users with community-driven challenges</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">1</span>
                    </div>
                    <p className="text-gray-700 text-sm">User taps Challenges tab</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">2</span>
                    </div>
                    <p className="text-gray-700 text-sm">Browses "Suggested Challenges" or uses search</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">3</span>
                    </div>
                    <p className="text-gray-700 text-sm">Selects a challenge card (e.g., "7-Day No Sugar Challenge")</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">4</span>
                    </div>
                    <p className="text-gray-700 text-sm">Reads details: focus, duration, reward, participants</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">5</span>
                    </div>
                    <p className="text-gray-700 text-sm">Taps Join Challenge → confirmation screen</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">6</span>
                    </div>
                    <p className="text-gray-700 text-sm">Challenge now appears in Active Challenges with progress bar</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-xs">7</span>
                    </div>
                    <p className="text-gray-700 text-sm">User earns Vital Points and badges as milestones are reached</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Principles & Solution Section */}
      <section id="design-principles" className="py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              The Solution: Health Education That Feels Human
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              Our solution, Arexpal, is a mobile app grounded in three core design principles that directly address the user pain points:
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Cognitive Ease</h3>
                <p className="text-gray-700 leading-relaxed">
                  Information is delivered in bite-sized, jargon-free snippets ("Tip Cards"). Navigation is simple and predictable. The UI is clean and uncluttered, reducing cognitive load and making engagement effortless.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Emotional Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  We moved away from a sterile, clinical aesthetic. Arexpal uses a warm color palette, playful icons, and an encouraging, conversational tone of voice. Micro-interactions like celebratory animations and haptic feedback make users feel seen, supported, and successful.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Behavioral Stickiness</h3>
                <p className="text-gray-700 leading-relaxed">
                  We ethically borrowed powerful mechanics from social media and gaming to drive retention and motivation. This includes gamification (points, badges, streaks), social accountability (challenges), and psychological principles like the Zeigarnik Effect.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">The AI Engine: Personalization at Scale</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                At its heart, the solution is powered by a sophisticated but invisible AI engine that personalizes the entire experience, from the tips in the feed to the prompts in the diary, ensuring the content is always relevant, timely, and culturally resonant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Designs Section */}
      <section id="final-designs" className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Final Designs: A Walkthrough of the Core Experience
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              This is the Deliver stage, where our concepts, flows, and principles manifest as tangible screens.
            </p>

            <div className="space-y-16">
              {/* Home Page */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">1. The Home Page: Your Daily Dose of Encouragement</h3>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Home page is the user's dashboard. It's designed to be scanned in seconds while providing value and a gentle nudge toward engagement.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Personalized Welcome</h4>
                        <p className="text-gray-600 text-sm">A simple "Good morning, David!" immediately establishes an emotional connection.</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Quick Daily Log</h4>
                        <p className="text-gray-600 text-sm">A prominent, one-tap entry point to the Diary, reducing the friction of logging.</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Today's Tip (AI-Powered)</h4>
                        <p className="text-gray-600 text-sm">The hero component. This isn't a random fact; it's a micro-learning card generated by our AI, tailored to the user's persona and recent logs.</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Gamification At-a-Glance</h4>
                        <p className="text-gray-600 text-sm">Progress bars for active challenges, current streak counts, and recently earned badges are visible, providing instant positive reinforcement.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-[600px] overflow-hidden">
                    <Image
                      src={homeImage}
                      alt="Arexpal Home Screen"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">UX Rationale</h4>
                  <p className="text-gray-700">
                    The Home page fights information overwhelm and the "chore" factor. It's not a list of tasks but a calm, encouraging space that respects the user's time and motivates them for the day ahead.
                  </p>
                </div>
              </div>

              {/* Diary Page */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">2. The Diary Page: A Conversation, Not a Clinical Record</h3>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We deliberately reframed journaling. The central navigation icon is the Arexpal logo, reinforcing this as the app's core interaction.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Conversational Input</h4>
                        <p className="text-gray-600 text-sm">Instead of empty text fields, the page opens with a friendly prompt like, "What's on your mind today, Aisha?"</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Smart Prompts Carousel</h4>
                        <p className="text-gray-600 text-sm">The key innovation. The AI suggests relevant things to log based on the user's goals and past entries. This turns logging from a recall exercise into a simple choice-based interaction.</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Locked Badge Teasers</h4>
                        <p className="text-gray-600 text-sm">To motivate consistent logging, a locked badge might be shown with the text "Log for 7 days in a row to unlock." This creates curiosity and a clear goal.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-[600px] overflow-hidden">
                    <Image
                      src={diaryImage}
                      alt="Arexpal Diary Screen"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-white rounded-lg">
                  <h4 className="font-semibold text-purple-600 mb-2">UX Rationale</h4>
                  <p className="text-gray-700">
                    This design systematically dismantles the intimidation of journaling. By making it guided, conversational, and rewarding, we lower the barrier to self-reflection, which is critical for behavior change.
                  </p>
                </div>
              </div>

              {/* Feed Page */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">3. The Feed Page: Your Personalized Health Magazine</h3>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Feed makes learning feel as effortless and engaging as scrolling through social media.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Intuitive Sorting</h4>
                        <p className="text-gray-600 text-sm">Users can easily toggle between a "For You" feed (personalized by AI), a "General" feed (for broad public health topics), and their "Saved" tips.</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">The Tip Card Component</h4>
                        <p className="text-gray-600 text-sm">Each piece of content is a compact, visually appealing card. It contains a headline, a short summary, an optional image, and the source (e.g., "Source: W.H.O."). Quick actions for "Like," "Save," and "Share" are always visible.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-[600px] overflow-hidden">
                    <Image
                      src={tipsImage}
                      alt="Arexpal Tips/Feed Screen"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-white rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">UX Rationale</h4>
                  <p className="text-gray-700">
                    This directly tackles the pain point of information overload and distrust. It replaces a chaotic Google search with a curated, credible, and highly personalized stream of knowledge, consumed in a familiar and enjoyable format.
                  </p>
                </div>
              </div>

              {/* Challenges Page */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">4. The Challenges Page: Where Knowledge Becomes Action</h3>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      This is the gamification engine of the app.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Clear Progress Visualization</h4>
                        <p className="text-gray-600 text-sm">Active challenges are displayed at the top with prominent progress bars, providing immediate visual feedback.</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Social Proof</h4>
                        <p className="text-gray-600 text-sm">Challenge cards show how many other users are participating, leveraging social accountability as a powerful motivator.</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Action-Oriented Design</h4>
                        <p className="text-gray-600 text-sm">Each card is a clear call to action (CTA), containing all the necessary information to make a decision: title, focus area, duration, and reward.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-[600px] overflow-hidden">
                    <Image
                      src={challengesImage}
                      alt="Arexpal Challenges Screen"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-white rounded-lg">
                  <h4 className="font-semibold text-orange-600 mb-2">UX Rationale</h4>
                  <p className="text-gray-700">
                    The Challenges page directly addresses the behavioral gap. It translates abstract health goals (e.g., "manage stress") into concrete, short-term, and rewarding missions (e.g., "Complete the 5-Day Meditation Challenge").
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Carousel Section */}
      <DesignCarousel items={designItems} />

      {/* Prototype & Outcome Section */}
      <section id="prototype" className="py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              The Prototype: Bringing the Experience to Life
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              To validate our designs, we built a high-fidelity, interactive prototype in Figma. This prototype was not just a collection of screens; it was a simulation of the core user journeys, including:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Onboarding</h4>
                <p className="text-sm text-gray-600">Personalization setup and first-time user experience</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl">📝</span>
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Daily Logging</h4>
                <p className="text-sm text-gray-600">Smart prompts and diary interaction flow</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-xl">🏆</span>
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Challenge Flow</h4>
                <p className="text-sm text-gray-600">Discovering and joining new challenges</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-xl">💾</span>
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Content Discovery</h4>
                <p className="text-sm text-gray-600">Browsing and saving tips from the feed</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Usability Testing Results</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We used this prototype to conduct five moderated usability testing sessions with users representing each of our personas. The goal was to test for clarity, ease of use, and emotional response. The feedback was invaluable, leading to several key iterations, such as simplifying the language on the challenge cards and adding more celebratory feedback after a user completed a task.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <p className="text-gray-700">Task Completion Rate</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.2/5</div>
                  <p className="text-gray-700">Average Usability Score</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
                  <p className="text-gray-700">User Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcome Section */}
      <section id="outcome" className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              The Outcome: Measuring What Matters
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              The success of Arexpal cannot be measured by downloads alone. Our UX success metrics are directly tied to our initial goals of bridging the access and action gaps. We measure success through a combination of quantitative and qualitative data:
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Engagement & Retention Metrics</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Daily Active Users (DAU)</h4>
                    <p className="text-gray-600 text-sm">Are people building a daily habit?</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Streak Retention</h4>
                    <p className="text-gray-600 text-sm">What percentage of users maintain a streak for more than 7, 14, and 30 days? This is a direct measure of behavioral stickiness.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Core Action Rate</h4>
                    <p className="text-gray-600 text-sm">The percentage of DAU who perform a core action (log, complete a challenge, or save a tip).</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Education & Behavior Change</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">In-App Knowledge Quizzes</h4>
                    <p className="text-gray-600 text-sm">Optional quizzes to measure self-reported improvements in health literacy.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Qualitative Logging Data</h4>
                    <p className="text-gray-600 text-sm">Analysis of anonymized log data to identify trends, such as users reporting increased sleep hours or decreased instances of smoking.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Emotional Feedback</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">In-App Surveys</h4>
                    <p className="text-gray-600 text-sm">Periodically asking users to rate their motivation levels and the app's ease of use on a 1-5 scale.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">User Reviews & Feedback</h4>
                    <p className="text-gray-600 text-sm">Monitoring qualitative feedback for words like "easy," "fun," "motivating," or "reassuring."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Target Results</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Hypothetical results after a 6-month launch would aim for a 30-day streak retention rate of over 15% (well above industry average for health apps) and a statistically significant self-reported reduction in at least one negative health behavior among active users.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection Section */}
      <section id="reflection" className="py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Reflection: Learning, Iterating, and Looking Ahead
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              Designing Arexpal was a profound lesson in the responsibility of UX. We were not just arranging pixels; we were building a system designed to influence deeply personal human behaviors.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-green-600">What Went Well</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Persona-Driven Design</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Keeping Zainab, David, and Aisha at the forefront of every conversation ensured we built a human-centric product, not just a feature-rich one.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ethical Gamification</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We successfully walked the fine line between "engaging" and "addictive." By tying rewards directly to positive health actions and giving users control over notifications, we used behavioral mechanics as a force for good.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Cross-Functional Collaboration</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Close collaboration between designers, developers, and public health consultants was critical. The human-vetting loop for our AI content is a testament to this, ensuring our product is both smart and safe.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-orange-600">Challenges & Future Improvements</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Balancing Simplicity and Power</h4>
                    <p className="text-gray-700 leading-relaxed">
                      A constant challenge was keeping the interface simple while housing a powerful AI and data-tracking backend. In the future, we could explore more advanced data visualizations for power users like David without cluttering the experience for Zainab.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Scaling Cultural Nuance</h4>
                    <p className="text-gray-700 leading-relaxed">
                      While we started with Nigerian languages and cultural examples, truly globalizing the app will require a robust localization framework that goes beyond simple translation to adapt content, imagery, and even color symbolism for different cultures.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Next Steps</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Future iterations could include integration with wearable technology (e.g., Apple Health, Google Fit) for automated data logging, and building out more robust community features where users like Aisha can find peer-to-peer support in a safe, moderated environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Final Thoughts</h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Cancer prevention starts with behavior change. Behavior change starts with a compelling experience. And a compelling experience is the ultimate goal of UX design. Arexpal is more than an app; it is a hypothesis that thoughtful, empathetic, and behaviorally-aware design can be a lifeline, empowering millions to take control of their health one tap at a time. It is a testament to the idea that the most impactful UX is not just designed for use, but designed for life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link 
              href="/#work" 
              className="text-gray-600 no-underline font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-white"
            >
              ← Back to Work
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-900 no-underline font-semibold px-8 py-4 rounded-lg transition-all duration-300 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ArexpalCaseStudy;
