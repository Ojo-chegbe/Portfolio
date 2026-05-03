'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';
import DesignCarousel from '@/components/DesignCarousel';

const VaenineCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFlowStep, setActiveFlowStep] = useState(0);

  const navItems = [
    { id: 'challenge', label: 'The Challenge', href: 'challenge' },
    { id: 'research', label: 'Research Phase', href: 'research' },
    { id: 'personas', label: 'User Personas', href: 'personas' },
    { id: 'competitor-analysis', label: 'Competitor Analysis', href: 'competitor-analysis' },
    { id: 'solution', label: 'The Solution', href: 'solution' },
    { id: 'designs', label: 'Final Designs', href: 'designs' },
    { id: 'impact', label: 'Impact & Reflection', href: 'impact' }
  ];

  const painPoints = [
    {
      icon: '💳',
      title: 'Payment & Accessibility Issues',
      description: 'Global platforms lack local payment systems like Paystack, Flutterwave, and USSD transfers that Nigerians rely on.'
    },
    {
      icon: '🔍',
      title: 'Poor Event Discovery',
      description: 'People learn about events through word of mouth, WhatsApp groups, or Instagram posts rather than dedicated platforms.'
    },
    {
      icon: '⚙️',
      title: 'Complex Organizer Experience',
      description: 'Setting up events is overwhelming with too many steps and insufficient guidance for organizers.'
    },
    {
      icon: '🏦',
      title: 'Payout System Problems',
      description: 'Payout systems aren\'t streamlined for Nigerian banks or fintech wallets, causing cashflow issues.'
    },
    {
      icon: '🛡️',
      title: 'Trust & Reliability Concerns',
      description: 'Users fear scams or fake events with weak trust signals and unclear refund policies.'
    }
  ];

  const personas = [
    {
      name: 'Chioma Adeyemi, 28',
      title: 'Event Planner',
      location: 'Lekki, Lagos',
      experience: 'High tech comfort - uses both laptop and phone',
      bio: 'Chioma manages multiple projects at once. She works mainly on her laptop for designs and client proposals but finds ticketing and attendee management stressful. She doesn\'t want to manually confirm transfers or juggle spreadsheets anymore.',
      goals: [
        'Quickly create and publish professional event pages',
        'Monitor ticket sales in real time',
        'Access attendee lists and check-in details easily',
        'Impress her clients with a credible, modern platform'
      ],
      frustrations: [
        'Time-consuming manual processes',
        'Cluttered websites that confuse attendees',
        'Lack of real-time reporting'
      ]
    },
    {
      name: 'Tunde Akintola, 24',
      title: 'Junior Software Developer',
      location: 'Abuja',
      experience: 'Very high tech comfort - comfortable on both laptop and phone',
      bio: 'Tunde is new in Abuja and wants to build his social and professional network by attending concerts, conferences, and workshops. He browses events during work breaks and buys tickets later in the evening.',
      goals: [
        'Discover events easily by interest and location',
        'See clear information on pricing, venue, and timing',
        'Complete fast, simple checkout with instant confirmation',
        'Store tickets digitally for check-in'
      ],
      frustrations: [
        'Slow-loading websites',
        'Hidden fees at checkout',
        'Lack of confirmation after payment'
      ]
    },
    {
      name: 'Bisi Alabi, 46',
      title: 'Community Organizer & Fellowship Coordinator',
      location: 'Ibadan',
      experience: 'Moderate tech comfort - prefers straightforward, easy-to-read websites',
      bio: 'Bisi organizes charity drives, church programs, and community events. She values simplicity over advanced features. She needs an online system that makes registration smooth and gives her printable lists for offline use.',
      goals: [
        'Create event pages without technical knowledge',
        'Provide stress-free attendee registration',
        'Download and print attendee lists'
      ],
      frustrations: [
        'Complicated websites with too many steps',
        'Small, unreadable fonts',
        'Systems that require too much setup'
      ]
    },
    {
      name: 'David Okon, 21',
      title: 'Undergraduate Student & Campus Event Promoter',
      location: 'Nsukka',
      experience: 'Very high tech comfort - almost everything done through phone browser',
      bio: 'David promotes student parties, concerts, and fashion shows. His biggest challenge is ticket verification and preventing gate-crashers. He needs a platform that makes selling and verifying tickets smooth.',
      goals: [
        'Quickly create attractive event pages',
        'Track sales in real time',
        'Verify tickets at the gate using digital codes or printed lists'
      ],
      frustrations: [
        'Manual gate control and fake entries',
        'Platforms that feel too formal and not youth-friendly',
        'Attendees abandoning checkout due to slow websites'
      ]
    },
    {
      name: 'Kemi Lawal, 35',
      title: 'HR Manager at Tech Company',
      location: 'Victoria Island, Lagos',
      experience: 'High tech comfort - experienced with corporate platforms',
      bio: 'Kemi organizes team-building activities, retreats, and workshops for her company. She requires a reliable platform with professional presentation, bulk registration, and detailed reporting features.',
      goals: [
        'Handle bulk registrations efficiently',
        'Generate and export attendance reports',
        'Share event details in a professional way'
      ],
      frustrations: [
        'Casual-looking platforms that don\'t fit corporate needs',
        'Poor analytics and reporting options',
        'Difficulty exporting data into Excel or PDF'
      ]
    }
  ];

  const researchInsights = [
    {
      icon: '📱',
      title: 'Mobile-First Discovery',
      description: '78% of users rely on Instagram and WhatsApp to discover events, indicating a need for social-first discovery features.'
    },
    {
      icon: '💸',
      title: 'Payment Abandonment',
      description: '65% of users have abandoned event purchases due to payment issues, highlighting the critical need for local payment integration.'
    },
    {
      icon: '🤝',
      title: 'Trust Through Social Proof',
      description: 'Users prefer when friends send event details on WhatsApp, showing trust is built through social connections rather than platform features.'
    },
    {
      icon: '⚡',
      title: 'Speed Over Features',
      description: 'Organizers want to upload details fast and share links quickly, prioritizing simplicity over advanced customization.'
    }
  ];

  const competitorAnalysis = [
    {
      name: 'Eventbrite',
      strengths: [
        'Clean, familiar information architecture',
        'Conversion-focused checkout flow',
        'Strong ecosystem and integrations'
      ],
      weaknesses: [
        'Limited local payment optimization for Nigeria',
        'Trust friction in support & refunds',
        'Cultural distance from Nigerian event types'
      ],
      learnings: 'Keep simple, proven flow patterns but localize every microdecision'
    },
    {
      name: 'Tix Africa',
      strengths: [
        'Local-first stance with cultural relevance',
        'Fast onboarding for organizers',
        'Transparent pricing structure'
      ],
      weaknesses: [
        'Crowded interface and inconsistent hierarchy',
        'Limited engagement hooks',
        'Poor analytics & growth tooling'
      ],
      learnings: 'Adopt localized taxonomy and pricing transparency with cleaner visual hierarchy'
    },
    {
      name: 'Ticket Fairy',
      strengths: [
        'Referral & reward mechanics baked into UX',
        'Marketing-forward dashboards',
        'Enterprise & white-label availability'
      ],
      weaknesses: [
        'Reputation/fulfillment noise in certain markets',
        'Not always culturally contextualized',
        'Aggressive marketing claims without operational safeguards'
      ],
      learnings: 'Build referral and rewards as first-class UX elements with visible financial guarantees'
    }
  ];

  const keyFeatures = [
    {
      icon: '🎯',
      title: 'Smart Event Discovery',
      description: 'Location-aware suggestions, curated feeds like "Campus Gigs" and "Startup Sha!", and trending badges for better event visibility.'
    },
    {
      icon: '💳',
      title: 'Local Payment Integration',
      description: 'Multiple local payment options (Paystack, Flutterwave, Opay, USSD) with option to split payments with friends.'
    },
    {
      icon: '📱',
      title: 'WhatsApp & SMS Delivery',
      description: 'Tickets delivered instantly via WhatsApp, SMS, and email, optimized for Nigerian communication preferences.'
    },
    {
      icon: '⚡',
      title: 'Guided Event Creation',
      description: 'Easy event setup with live previews, streamlined payout setup for Nigerian banks and fintech wallets.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Real-time ticket sales graphs, attendee demographics, and top traffic sources for data-driven decisions.'
    },
    {
      icon: '🎮',
      title: 'Gamified Retention',
      description: 'Points for attending and organizing, loyalty tiers (Bronze, Silver, Gold), and community features like WhatsApp groups.'
    }
  ];

  const outcomes = [
    'Centralized event discovery beyond scattered sources',
    'Streamlined ticketing and attendee management',
    'Professional platform for Nigerian organizers',
    'Cultural relevance and local payment integration',
    'Improved discoverability and efficiency across the ecosystem'
  ];

  const userFlowItems = [
    { id: 0, imageUrl: '/images/Vaenine/Create new event.png', title: 'Event Creation Start' },
    { id: 1, imageUrl: '/images/Vaenine/Create new event-1.png', title: 'Event Details' },
    { id: 2, imageUrl: '/images/Vaenine/Create new event-2.png', title: 'Date & Time Setup' },
    { id: 3, imageUrl: '/images/Vaenine/Create new event-3.png', title: 'Location & Venue' },
    { id: 4, imageUrl: '/images/Vaenine/Create new event-4.png', title: 'Ticket Configuration' },
    { id: 5, imageUrl: '/images/Vaenine/Create new event-5.png', title: 'Payment Setup' },
    { id: 6, imageUrl: '/images/Vaenine/Create new event-6.png', title: 'Event Preview & Publish' }
  ];

  const adminPages = [
    { id: 0, imageUrl: '/images/Vaenine/Admin-dashboard.png', title: 'Admin Dashboard' },
    { id: 1, imageUrl: '/images/Vaenine/Admin-event.png', title: 'Admin Event Management' },
    { id: 2, imageUrl: '/images/Vaenine/Admin-payouts.png', title: 'Admin Payouts' },
    { id: 3, imageUrl: '/images/Vaenine/Admin-users.png', title: 'User Management' }
  ];

  const organizerPages = [
    { id: 0, imageUrl: '/images/Vaenine/organiser-dashboard.png', title: 'Organizer Dashboard' },
    { id: 1, imageUrl: '/images/Vaenine/organiser-Analytics.png', title: 'Analytics & Reports' },
    { id: 2, imageUrl: '/images/Vaenine/Organiser-event.png', title: 'Event Management' },
    { id: 3, imageUrl: '/images/Vaenine/organiser-feedback.png', title: 'Feedback & Reviews' },
    { id: 4, imageUrl: '/images/Vaenine/Organiser-payouts.png', title: 'Payouts & Earnings' }
  ];

  const generalPages = [
    { id: 0, imageUrl: '/images/Vaenine/Login.png', title: 'Login Page' },
    { id: 1, imageUrl: '/images/Vaenine/Signup.png', title: 'Signup Page' },
    { id: 2, imageUrl: '/images/Vaenine/Home.png', title: 'Home Page' },
    { id: 3, imageUrl: '/images/Vaenine/Explore events.png', title: 'Explore Events' },
    { id: 4, imageUrl: '/images/Vaenine/Event.png', title: 'Event Details' },
    { id: 5, imageUrl: '/images/Vaenine/Dashboard.png', title: 'User Dashboard' },
    { id: 6, imageUrl: '/images/Vaenine/Profile.png', title: 'User Profile' },
    { id: 7, imageUrl: '/images/Vaenine/Saved events.png', title: 'Saved Events' },
    { id: 8, imageUrl: '/images/Vaenine/TIckets.png', title: 'Tickets & Bookings' },
    { id: 9, imageUrl: '/images/Vaenine/Blog.png', title: 'Blog & News' },
    { id: 10, imageUrl: '/images/Vaenine/Aboutt.png', title: 'About Page' },
    { id: 11, imageUrl: '/images/Vaenine/Help.png', title: 'Help & Support' }
  ];

  const [activeAdminStep, setActiveAdminStep] = useState(0);
  const [activeOrganizerStep, setActiveOrganizerStep] = useState(0);
  const [activeGeneralStep, setActiveGeneralStep] = useState(0);

  return (
    <main className="min-h-screen">
      <Header />
      <TopNav navItems={navItems} />
      
      {/* Hero Section */}
      <section className="pt-48 pb-16 min-h-screen flex items-center bg-zinc-900" style={{ paddingTop: '12rem' }}>
        <div className="container">
          <motion.div 
            className="flex flex-col items-center text-center gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div 
              className="relative max-w-lg w-full rounded-3xl overflow-hidden shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Image
                src="/images/Vaenine/cover.jpg"
                alt="Vaenine Event Platform"
                width={600}
                height={320}
                className="w-full h-80 object-cover"
                priority
              />
            </motion.div>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-zinc-100">
                Vaenine: Event Platform for Nigeria
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Rethinking how Nigerians discover, attend, and host events with a culturally intuitive and reliable platform
              </p>
              
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-zinc-400 font-medium uppercase tracking-wide">Role</span>
                  <span className="text-lg font-semibold text-zinc-100">Lead UX Designer</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-zinc-400 font-medium uppercase tracking-wide">Timeline</span>
                  <span className="text-lg font-semibold text-zinc-100">1 month</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-zinc-400 font-medium uppercase tracking-wide">Tools</span>
                  <span className="text-lg font-semibold text-zinc-100">Figma,  Miro, Jitter</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">The Challenge</h2>
            <div className="text-lg leading-relaxed text-zinc-200 space-y-6">
              <p>
                When I was assigned Vaenine as a product design project, I knew right away that it was more than just an academic exercise. It was an opportunity to rethink how Nigerians discover, attend, and host events. Nigeria is a country that thrives on social connection. From weddings and owambes, to music concerts, startup meetups, and faith-based gatherings, events are woven deeply into our culture.
              </p>
              <p>
                Yet, the digital infrastructure supporting these experiences is fragmented, unintuitive, and often disconnected from the realities of Nigerian users.
              </p>
              
              <div className="my-12 p-8 bg-zinc-900 rounded-2xl text-white text-center">
                <blockquote className="text-xl font-semibold italic leading-relaxed">
                  "How might we create a clean, culturally intuitive, and reliable event platform designed from the ground up for Nigerians?"
                </blockquote>
              </div>
              
              <p>
                My goal with Vaenine was not just to create a platform for ticketing, but to design a holistic, user-centered ecosystem that makes events seamless, delightful, and culturally resonant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="py-24 bg-zinc-950">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Understanding the Problem</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12">
              <p className="mb-6">
                Events are central to Nigerian culture, but existing platforms don't fully solve the challenges faced by both organizers and attendees. Through initial research, interviews, and secondary data, I uncovered some key issues:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-8 bg-zinc-900 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl flex-shrink-0">{point.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-zinc-100">{point.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center p-8 bg-zinc-800 rounded-2xl border-l-4 border-purple-600">
              <blockquote className="text-2xl font-semibold italic mb-4 text-zinc-100">
                "Sometimes I buy a ticket but I'm scared if it's real or not. I prefer when my friend just sends me details on WhatsApp."
              </blockquote>
              <cite className="text-lg text-zinc-300">— Event Attendee</cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Research Phase</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12">
              <p className="mb-6">
                To ground Vaenine in real needs, I used a comprehensive research approach that included user interviews, surveys, and secondary research to understand the Nigerian event ecosystem.
              </p>
              <p className="mb-8">
                I interviewed 12 potential users—six regular event attendees (students, professionals, and nightlife enthusiasts), and six small-to-mid scale organizers (church groups, campus leaders, promoters). Additionally, I conducted a survey of 50 people using Google Forms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-8 bg-zinc-900 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl flex-shrink-0">{insight.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-zinc-100">{insight.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{insight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personas Section */}
      <section id="personas" className="py-24 bg-zinc-950">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">User Personas</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12">
              <p className="mb-6">
                Based on my research, I created detailed personas representing the diverse range of users in the Nigerian event ecosystem. These personas helped guide design decisions and ensure the platform would serve real user needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {personas.map((persona, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 bg-zinc-900 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">👤</div>
                      <h3 className="text-xl font-bold">{persona.name}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-lg font-semibold text-purple-600 mb-1">{persona.title}</p>
                    <p className="text-sm text-zinc-300 mb-1">{persona.location}</p>
                    <p className="text-sm text-zinc-300 mb-6">{persona.experience}</p>
                    
                    <div className="mb-6 p-4 bg-zinc-950 rounded-lg italic text-zinc-200">
                      "{persona.bio}"
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-zinc-100">Goals:</h4>
                      <ul className="space-y-2">
                        {persona.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start gap-2 text-sm text-zinc-300">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-zinc-100">Frustrations:</h4>
                      <ul className="space-y-2">
                        {persona.frustrations.map((frustration, frustIndex) => (
                          <li key={frustIndex} className="flex items-start gap-2 text-sm text-zinc-300">
                            <span className="text-red-500 font-bold mt-1">✗</span>
                            {frustration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitor Analysis Section */}
      <section id="competitor-analysis" className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Competitor Analysis</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12">
              <p className="mb-6">
                Before designing anything, I treated the landscape like a user would: I explored where people currently discover and buy tickets, what tools organizers rely on, and — most importantly — where existing platforms fail Nigerian users.
              </p>
              <p>
                I analyzed three key players: Eventbrite, Tix Africa, and Ticket Fairy, focusing on their UX choices, trust-building mechanisms, and where Vaenine could create differentiated value.
              </p>
            </div>
            
            <div className="space-y-8">
              {competitorAnalysis.map((competitor, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-zinc-100">{competitor.name}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Strengths</h4>
                      <ul className="space-y-2">
                        {competitor.strengths.map((strength, strengthIndex) => (
                          <li key={strengthIndex} className="flex items-start gap-2 text-zinc-300">
                            <span className="text-green-600 font-bold mt-1">✓</span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-red-600">Weaknesses</h4>
                      <ul className="space-y-2">
                        {competitor.weaknesses.map((weakness, weaknessIndex) => (
                          <li key={weaknessIndex} className="flex items-start gap-2 text-zinc-300">
                            <span className="text-red-600 font-bold mt-1">✗</span>
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-zinc-800 rounded-lg border-l-4 border-purple-600 border border-zinc-700">
                    <h4 className="text-lg font-semibold mb-2 text-purple-600">Key Learning</h4>
                    <p className="text-zinc-200">{competitor.learnings}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-zinc-950">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">The Solution</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12 text-center">
              <p className="mb-6">
                Based on my research and competitor analysis, I designed Vaenine as a holistic event platform that addresses the unique needs of the Nigerian market through culturally relevant features and local optimizations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 p-8 rounded-xl text-center shadow-sm border border-purple-100 transition-all duration-300 hover:shadow-md hover:border-purple-600"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-zinc-100">{feature.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Admin Pages Section */}
      <section id="designs" className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Final Designs</h2>
            
            {/* General Pages */}
            <div className="mb-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-zinc-100 mb-4">General Pages</h3>
                <p className="text-zinc-300 max-w-2xl mx-auto">
                  Public-facing pages and user interface components that provide the core user experience.
                </p>
                    </div>
              
              <div className="bg-zinc-900 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-8 border-b border-zinc-800">
                  <h4 className="text-xl font-bold text-zinc-100 mb-2">User Interface & Public Pages</h4>
                  <p className="text-zinc-300">
                    Complete set of pages covering authentication, navigation, content, and user account management.
                  </p>
                  </div>
                
                <div className="relative overflow-hidden h-[800px] sm:h-[700px] md:h-[600px] lg:h-[700px] bg-zinc-800">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    {generalPages.map((item, index) => {
                      const isActive = index === activeGeneralStep;
                      const isNext = index === (activeGeneralStep + 1) % generalPages.length;
                      const isPrev = index === (activeGeneralStep - 1 + generalPages.length) % generalPages.length;
                      
                      let transformClass = "translate-x-full opacity-0";
                      if (isActive) {
                        transformClass = "translate-x-0 opacity-100 z-20";
                      } else if (isNext) {
                        transformClass = "translate-x-full opacity-60 z-10";
                      } else if (isPrev) {
                        transformClass = "-translate-x-full opacity-60 z-10";
                      }
                      
                      return (
                      <motion.div
                        key={item.id}
                        className={`absolute top-0 w-full max-w-4xl sm:max-w-5xl transform transition-all duration-500 ease-in-out ${transformClass}`}
                      >
                        <div className="bg-zinc-900 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                          <div className="relative h-[500px] sm:h-[600px] md:h-[500px] lg:h-[600px] overflow-hidden">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                </div>
                          <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                            <h4 className="font-semibold text-zinc-100">{item.title}</h4>
                            <p className="text-sm text-zinc-300">Page {index + 1} of {generalPages.length}</p>
                          </div>
                        </div>
                      </motion.div>
                      );
                    })}
              </div>
              
                  <button
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-zinc-900/90 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-900 z-30 shadow-sm transition-all hover:scale-110"
                    onClick={() => setActiveGeneralStep((prev) => (prev - 1 + generalPages.length) % generalPages.length)}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-zinc-900/90 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-900 z-30 shadow-sm transition-all hover:scale-110"
                    onClick={() => setActiveGeneralStep((prev) => (prev + 1) % generalPages.length)}
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center items-center space-x-2 sm:space-x-3 z-30">
                    {generalPages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`rounded-full transition-all duration-300 ${
                          idx === activeGeneralStep
                            ? "bg-green-600 w-6 h-2 sm:w-8 sm:h-2"
                            : "bg-zinc-600 w-1.5 h-1.5 sm:w-2 sm:h-2 hover:bg-green-600"
                        }`}
                        onClick={() => setActiveGeneralStep(idx)}
                        aria-label={`Go to page ${idx + 1}`}
                      />
                    ))}
                    </div>
                  </div>
                </div>
              </div>
              
            {/* Create New Event Flow */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-zinc-100 mb-4">Create New Event Flow</h3>
                <p className="text-zinc-300 max-w-2xl mx-auto">
                  A guided, step-by-step process that helps organizers create professional events without overwhelming them with options.
                </p>
                    </div>
              
              <div className="bg-zinc-900 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-8 border-b border-zinc-800">
                  <h4 className="text-xl font-bold text-zinc-100 mb-2">Event Creation Process</h4>
                  <p className="text-zinc-300">
                    The flow takes organizers through 7 clear steps, from initial event setup to final publishing, with live previews and validation at each stage.
                  </p>
                  </div>
                
                <div className="relative overflow-hidden h-[600px] bg-zinc-800">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    {userFlowItems.map((item, index) => {
                      const isActive = index === activeFlowStep;
                      const isNext = index === (activeFlowStep + 1) % userFlowItems.length;
                      const isPrev = index === (activeFlowStep - 1 + userFlowItems.length) % userFlowItems.length;
                      
                      let transformClass = "translate-x-full opacity-0";
                      if (isActive) {
                        transformClass = "translate-x-0 opacity-100 z-20";
                      } else if (isNext) {
                        transformClass = "translate-x-full opacity-60 z-10";
                      } else if (isPrev) {
                        transformClass = "-translate-x-full opacity-60 z-10";
                      }
                      
                      return (
                      <motion.div
                        key={item.id}
                        className={`absolute top-0 w-full max-w-4xl transform transition-all duration-500 ease-in-out ${transformClass}`}
                      >
                        <div className="bg-zinc-900 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                          <div className="relative h-[500px] overflow-hidden">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                </div>
                          <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                            <h4 className="font-semibold text-zinc-100">{item.title}</h4>
                            <p className="text-sm text-zinc-300">Step {index + 1} of {userFlowItems.length}</p>
                          </div>
                        </div>
                      </motion.div>
                      );
                    })}
              </div>
              
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900/90 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-900 z-30 shadow-sm transition-all hover:scale-110"
                    onClick={() => setActiveFlowStep((prev) => (prev - 1 + userFlowItems.length) % userFlowItems.length)}
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900/90 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-900 z-30 shadow-sm transition-all hover:scale-110"
                    onClick={() => setActiveFlowStep((prev) => (prev + 1) % userFlowItems.length)}
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
                    {userFlowItems.map((_, idx) => (
                      <button
                        key={idx}
                        className={`rounded-full transition-all duration-300 ${
                          idx === activeFlowStep
                            ? "bg-purple-600 w-8 h-2"
                            : "bg-zinc-600 w-2 h-2 hover:bg-purple-600"
                        }`}
                        onClick={() => setActiveFlowStep(idx)}
                        aria-label={`Go to step ${idx + 1}`}
                      />
                    ))}
                    </div>
                  </div>
                </div>

            </div>
            
            {/* Admin Pages */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-zinc-100 mb-4">Admin Dashboard</h3>
                <p className="text-zinc-300 max-w-2xl mx-auto">
                  Comprehensive admin interface for platform management, user oversight, and system analytics.
                </p>
                    </div>
              
              <div className="bg-zinc-900 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-8 border-b border-zinc-800">
                  <h4 className="text-xl font-bold text-zinc-100 mb-2">Admin Management Interface</h4>
                  <p className="text-zinc-300">
                    Complete administrative control with user management, event oversight, and financial tracking.
                  </p>
                  </div>
                
                <div className="relative overflow-hidden h-[700px] bg-zinc-800">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    {adminPages.map((item, index) => {
                      const isActive = index === activeAdminStep;
                      const isNext = index === (activeAdminStep + 1) % adminPages.length;
                      const isPrev = index === (activeAdminStep - 1 + adminPages.length) % adminPages.length;
                      
                      let transformClass = "translate-x-full opacity-0";
                      if (isActive) {
                        transformClass = "translate-x-0 opacity-100 z-20";
                      } else if (isNext) {
                        transformClass = "translate-x-full opacity-60 z-10";
                      } else if (isPrev) {
                        transformClass = "-translate-x-full opacity-60 z-10";
                      }
                      
                      return (
                      <motion.div
                        key={item.id}
                        className={`absolute top-0 w-full max-w-5xl transform transition-all duration-500 ease-in-out ${transformClass}`}
                      >
                        <div className="bg-zinc-900 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                          <div className="relative h-[600px] overflow-hidden">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                </div>
                          <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                            <h4 className="font-semibold text-zinc-100">{item.title}</h4>
                            <p className="text-sm text-zinc-300">Admin Page {index + 1} of {adminPages.length}</p>
              </div>
            </div>
                      </motion.div>
                      );
                    })}
              </div>
              
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900/90 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-900 z-30 shadow-sm transition-all hover:scale-110"
                    onClick={() => setActiveAdminStep((prev) => (prev - 1 + adminPages.length) % adminPages.length)}
                    aria-label="Previous admin page"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900/90 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-900 z-30 shadow-sm transition-all hover:scale-110"
                    onClick={() => setActiveAdminStep((prev) => (prev + 1) % adminPages.length)}
                    aria-label="Next admin page"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
                    {adminPages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`rounded-full transition-all duration-300 ${
                          idx === activeAdminStep
                            ? "bg-blue-600 w-8 h-2"
                            : "bg-zinc-600 w-2 h-2 hover:bg-blue-600"
                        }`}
                        onClick={() => setActiveAdminStep(idx)}
                        aria-label={`Go to admin page ${idx + 1}`}
                      />
                    ))}
                    </div>
                  </div>
                </div>
              </div>
              
            {/* Organizer Pages */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-zinc-100 mb-4">Organizer Dashboard</h3>
                <p className="text-zinc-300 max-w-2xl mx-auto">
                  Intuitive organizer interface for event creation, management, and performance tracking.
                </p>
                    </div>
              
              <div className="bg-zinc-900 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-8 border-b border-zinc-800">
                  <h4 className="text-xl font-bold text-zinc-100 mb-2">Organizer Management Interface</h4>
                  <p className="text-zinc-300">
                    User-friendly tools for event organizers to create, manage, and analyze their events effectively.
                  </p>
                  </div>
                
                <div className="relative overflow-hidden h-[700px] bg-zinc-800">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    {organizerPages.map((item, index) => {
                      const isActive = index === activeOrganizerStep;
                      const isNext = index === (activeOrganizerStep + 1) % organizerPages.length;
                      const isPrev = index === (activeOrganizerStep - 1 + organizerPages.length) % organizerPages.length;
                      
                      let transformClass = "translate-x-full opacity-0";
                      if (isActive) {
                        transformClass = "translate-x-0 opacity-100 z-20";
                      } else if (isNext) {
                        transformClass = "translate-x-full opacity-60 z-10";
                      } else if (isPrev) {
                        transformClass = "-translate-x-full opacity-60 z-10";
                      }
                      
                      return (
                      <motion.div
                        key={item.id}
                        className={`absolute top-0 w-full max-w-5xl transform transition-all duration-500 ease-in-out ${transformClass}`}
                      >
                        <div className="bg-zinc-900 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                          <div className="relative h-[600px] overflow-hidden">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                </div>
                          <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                            <h4 className="font-semibold text-zinc-100">{item.title}</h4>
                            <p className="text-sm text-zinc-300">Organizer Page {index + 1} of {organizerPages.length}</p>
              </div>
                    </div>
                      </motion.div>
                      );
                    })}
                  </div>

                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900/90 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-900 z-30 shadow-sm transition-all hover:scale-110"
                    onClick={() => setActiveOrganizerStep((prev) => (prev - 1 + organizerPages.length) % organizerPages.length)}
                    aria-label="Previous organizer page"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900/90 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-900 z-30 shadow-sm transition-all hover:scale-110"
                    onClick={() => setActiveOrganizerStep((prev) => (prev + 1) % organizerPages.length)}
                    aria-label="Next organizer page"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
                    {organizerPages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`rounded-full transition-all duration-300 ${
                          idx === activeOrganizerStep
                            ? "bg-purple-600 w-8 h-2"
                            : "bg-zinc-600 w-2 h-2 hover:bg-purple-600"
                        }`}
                        onClick={() => setActiveOrganizerStep(idx)}
                        aria-label={`Go to organizer page ${idx + 1}`}
                      />
                    ))}
                 </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>


      {/* Impact Section */}
      <section id="impact" className="py-24 bg-zinc-950">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-zinc-100">Impact & Reflection</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12">
              <p className="mb-6">
                Vaenine was built with the potential to reshape event culture in Nigeria. By centralizing event discovery, it helps attendees easily find reliable events beyond scattered sources, while also giving organizers a professional platform that streamlines ticketing, attendee management, and reporting.
              </p>
              <p className="mb-8">
                The emphasis on simplicity, trust, and cultural relevance makes it more than just a design exercise — it is a scalable foundation that could improve discoverability, boost efficiency, and raise professionalism across the Nigerian event ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-zinc-900 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl text-purple-600">✅</div>
                  <span className="font-medium text-zinc-100">{outcome}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-zinc-900 rounded-2xl shadow-sm border-l-4 border-purple-600">
              <blockquote className="text-xl font-semibold italic leading-relaxed text-zinc-100">
                "The battle for event market share in Nigeria won't be won by copying features — it will be won by designing trust and flow that match local life."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <div className="py-8 bg-zinc-950 border-t border-zinc-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link 
              href="/#work" 
              className="text-zinc-300 no-underline font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:text-zinc-100 hover:bg-zinc-900"
            >
              ← Back to Work
            </Link>
            <Link 
              href="/#contact" 
              className="text-zinc-100 no-underline font-semibold px-8 py-4 rounded-lg transition-all duration-300 bg-zinc-900 shadow-sm hover:shadow-md"
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

export default VaenineCaseStudy;
