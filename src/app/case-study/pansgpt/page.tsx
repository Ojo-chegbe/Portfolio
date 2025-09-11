'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PansgptCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const problemStats = [
    { number: '73%', label: 'of students report study stress' },
    { number: '2.5hrs', label: 'average time spent searching for resources' },
    { number: '40%', label: 'drop in retention without proper guidance' }
  ];

  const painPoints = [
    'Fragmented study materials across multiple platforms',
    'Lack of personalized learning paths',
    'Difficulty in understanding complex pharmaceutical concepts',
    'Limited access to instant clarification and explanations'
  ];

  const outcomes = [
    { number: '500+', label: 'students onboarded during beta' },
    { number: '40%', label: 'reduction in time spent searching resources' },
    { number: '85%', label: 'improvement in study session efficiency' },
    { number: '4.8/5', label: 'average user satisfaction rating' }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Research',
      description: 'Conducted 15+ student interviews to understand pain points, study habits, and technology usage patterns. Discovered that students prefer mobile-first solutions and need instant access to explanations.'
    },
    {
      number: 2,
      title: 'Ideation',
      description: 'Sketched multiple concepts for AI-powered study assistant, focusing on conversational interface and personalized learning paths. Explored different interaction patterns for mobile and web.'
    },
    {
      number: 3,
      title: 'Prototyping',
      description: 'Created low-fidelity wireframes to test core user flows, then developed high-fidelity prototypes with realistic AI interactions and study content.'
    },
    {
      number: 4,
      title: 'Testing',
      description: 'Conducted 3 rounds of user testing with pharmacy students, iterating on navigation clarity, AI response quality, and overall user experience based on feedback.'
    }
  ];

  const decisions = [
    {
      title: 'AI over Static Resources',
      description: 'Chose conversational AI interface over traditional study materials to provide personalized, instant explanations and adapt to individual learning styles.'
    },
    {
      title: 'Mobile-First Design',
      description: 'Prioritized mobile experience based on Nigerian students\' device habits and need for on-the-go study support, with desktop as secondary platform.'
    },
    {
      title: 'Simplified Onboarding',
      description: 'Reduced initial setup complexity to encourage quick adoption, focusing on core AI chat functionality rather than extensive profile creation.'
    }
  ];

  const learnings = [
    {
      title: 'Simplicity beats feature overload',
      description: 'Students preferred a focused, simple interface over complex dashboards with multiple features. The AI chat became the primary interaction point.'
    },
    {
      title: 'Cultural context improves adoption',
      description: 'Incorporating Nigerian pharmacy curriculum specifics and local examples significantly increased user engagement and trust in the AI responses.'
    },
    {
      title: 'Progressive disclosure is key',
      description: 'Revealing advanced features gradually as users became comfortable with the basic AI chat helped maintain simplicity while providing depth.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white" style={{ paddingTop: '7rem' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                PANSGPT — AI Academic Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Helping pharmacy students study smarter through AI
              </p>
              
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Role</span>
                  <span className="text-lg font-semibold text-gray-900">UX Designer</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Timeline</span>
                  <span className="text-lg font-semibold text-gray-900">2025</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Tools</span>
                  <span className="text-lg font-semibold text-gray-900">Figma, Notion</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Mockups */}
            <motion.div 
              className="relative h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="relative w-full h-full">
                {/* Laptop Mockup */}
                <motion.div 
                  className="absolute w-96 h-60 bg-gray-200 rounded-xl top-12 left-12 shadow-2xl"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                >
                  <div className="w-full h-full bg-white rounded-lg m-2 overflow-hidden">
                    <div className="p-4 h-full flex flex-col">
                      <div className="h-8 bg-gray-100 rounded mb-4 flex items-center px-4">
                        <div className="w-full h-4 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <div className="bg-gray-900 text-white p-2 rounded text-sm self-end max-w-[80%]">
                          What's the mechanism of action for aspirin?
                        </div>
                        <div className="bg-gray-100 text-gray-900 p-2 rounded text-sm self-start max-w-[80%]">
                          Aspirin works by irreversibly inhibiting cyclooxygenase (COX) enzymes...
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Mockup */}
                <motion.div 
                  className="absolute w-36 h-60 bg-gray-200 rounded-3xl top-24 right-16 shadow-2xl"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: 'easeInOut',
                    delay: 2
                  }}
                >
                  <div className="w-full h-full bg-white rounded-2xl m-2 overflow-hidden">
                    <div className="p-3 h-full flex flex-col">
                      <div className="h-6 bg-gray-100 rounded mb-3"></div>
                      <div className="flex-1 flex flex-col gap-2">
                        <div className="h-8 bg-gray-100 rounded"></div>
                        <div className="h-8 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Context & Problem</h2>
            <div className="text-lg leading-relaxed text-gray-700 space-y-6">
              <p>
                Pharmacy students in Nigeria face significant challenges in their academic journey. With an overwhelming amount of coursework, complex pharmaceutical concepts, and limited access to personalized study resources, students often struggle to maintain consistent learning progress.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                {problemStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-8 bg-white rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 leading-relaxed">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <p className="mb-6">The main pain points identified through user research included:</p>
              <ul className="space-y-3">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold text-gray-900 mb-2">{outcome.number}</div>
                  <div className="text-gray-600 leading-relaxed">{outcome.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Design Process</h2>
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12 pl-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-6 top-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Decisions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Key Decisions & Tradeoffs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {decisions.map((decision, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{decision.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{decision.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Key Learnings</h2>
            <div className="space-y-8">
              {learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gray-900"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{learning.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{learning.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Final Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 rounded-xl p-4 mb-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                  <div className="bg-white rounded-lg h-48 flex flex-col">
                    <div className="h-8 bg-gray-900 text-white flex items-center justify-center rounded-t-lg text-sm font-semibold">
                      PANSGPT Assistant
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-2">
                      <div className="bg-gray-900 text-white p-2 rounded text-sm self-end max-w-[80%]">
                        Explain drug interactions
                      </div>
                      <div className="bg-gray-100 text-gray-900 p-2 rounded text-sm self-start max-w-[80%]">
                        Drug interactions occur when two or more medications...
                      </div>
                    </div>
                    <div className="h-8 bg-gray-100 rounded-b-lg flex items-center px-4 text-sm text-gray-500">
                      Type your question...
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">Main AI chat interface with conversational learning</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-xl p-4 mb-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                  <div className="bg-white rounded-lg h-48 flex flex-col">
                    <div className="h-8 bg-gray-900 text-white flex items-center justify-center rounded-t-lg text-sm font-semibold">
                      Study Progress
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-2">
                      <div className="h-8 bg-gray-100 rounded"></div>
                      <div className="h-8 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">Study progress tracking dashboard</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-xl p-4 mb-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                  <div className="bg-white rounded-lg h-48 flex flex-col">
                    <div className="h-8 bg-gray-900 text-white flex items-center justify-center rounded-t-lg text-sm font-semibold">
                      PANSGPT
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-2">
                      <div className="bg-gray-900 text-white p-2 rounded text-sm self-end max-w-[80%]">
                        What's the side effect of paracetamol?
                      </div>
                      <div className="bg-gray-100 text-gray-900 p-2 rounded text-sm self-start max-w-[80%]">
                        Common side effects include...
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">Mobile-optimized chat experience</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-xl p-4 mb-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                  <div className="bg-white rounded-lg h-48 flex flex-col">
                    <div className="h-8 bg-gray-900 text-white flex items-center justify-center rounded-t-lg text-sm font-semibold">
                      Study Modes
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-2">
                      <div className="h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium">Quick Review</div>
                      <div className="h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium">Deep Dive</div>
                      <div className="h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium">Exam Prep</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">Personalized study mode selection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
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

export default PansgptCaseStudy;
