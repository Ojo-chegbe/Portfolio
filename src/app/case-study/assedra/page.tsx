'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';
import DesignCarousel from '@/components/DesignCarousel';

const AssedraCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const navItems = [
    { id: 'challenge', label: 'The Challenge', href: 'challenge' },
    { id: 'pain-points', label: 'Pain Points', href: 'pain-points' },
    { id: 'process', label: 'Design Process', href: 'process' },
    { id: 'personas', label: 'Personas', href: 'personas' },
    { id: 'information-architecture', label: 'Information Architecture', href: 'information-architecture' },
    { id: 'user-flows', label: 'User Flows', href: 'user-flows' },
    { id: 'solution', label: 'The Solution', href: 'solution' },
    { id: 'designs', label: 'Final Designs', href: 'designs' },
    { id: 'outcome', label: 'The Outcome', href: 'outcome' },
    { id: 'prototype', label: 'Prototype', href: 'prototype' },
    { id: 'reflection', label: 'Reflection', href: 'reflection' }
  ];

  const painPoints = [
    {
      icon: '👁️',
      title: 'Lack of real-time visibility',
      description: 'Administrators never truly knew where assets were at any given time.'
    },
    {
      icon: '📝',
      title: 'Manual and tedious workflows',
      description: 'Excel logs took too much time and were prone to errors.'
    },
    {
      icon: '🔍',
      title: 'No accountability trail',
      description: 'When items went missing, there was no way to know who last used them.'
    },
    {
      icon: '💬',
      title: 'Inefficient communication',
      description: 'No reminder system existed for overdue or damaged items.'
    },
    {
      icon: '😤',
      title: 'Poor usability in existing tools',
      description: 'Interfaces felt designed for accountants, not educators.'
    }
  ];

  const personas = [
    {
      name: 'Abigail Eze, 47',
      title: 'School Administrator / Vice Principal',
      location: 'Enugu, Nigeria',
      experience: '16 years in school administration',
      bio: 'Abigail oversees the school\'s physical resources and maintains accurate records for audits. She values simple, reliable systems that reduce asset loss and improve departmental communication.',
      goals: [
        'Ensure physical resources are well managed and accounted for',
        'Maintain accurate records for school board audits and PTA meetings',
        'Reduce asset loss and eliminate disputes over responsibility',
        'Improve communication between departments handling assets'
      ],
      frustrations: [
        'Paper-based tracking gets misplaced or duplicated',
        'Delays in reporting faulty or missing items from departments',
        'No centralized view of who is using what and for how long',
        'Teachers borrow items without proper documentation'
      ]
    },
    {
      name: 'Idris Olanrewaju, 35',
      title: 'Storekeeper / Inventory Manager',
      location: 'Ibadan, Nigeria',
      experience: '8 years in inventory/logistics roles',
      bio: 'Idris manages the school\'s physical inventory and ensures proper documentation for all asset movements. He prefers digital systems with real-time updates and mobile accessibility.',
      goals: [
        'Maintain up-to-date records of all physical assets in school',
        'Ensure proper documentation for check-in/check-out processes',
        'Easily trace asset assignments and due dates',
        'Generate usage and status reports for audits quickly'
      ],
      frustrations: [
        'Manual logs lead to errors and duplicate entries',
        'Staff forget to return items on time with no tracking system',
        'Lack of real-time updates outside office hours',
        'Teachers sometimes borrow items unofficially'
      ]
    },
    {
      name: 'Lara Yusuf, 29',
      title: 'School Librarian',
      location: 'Lagos, Nigeria',
      experience: '5 years in library management',
      bio: 'Lara manages the school library\'s books, tablets, and media equipment. She values quick search capabilities and automated reminder systems for overdue items.',
      goals: [
        'Keep accurate records of all borrowed books and media',
        'Minimize loss or damage of school learning materials',
        'Find any book or item quickly using title or serial number',
        'Generate library usage reports for reading programs'
      ],
      frustrations: [
        'Difficulty managing records during power or internet outages',
        'Students forget return dates leading to clutter and loss',
        'Uncertainty whether items are missing or just unreturned',
        'Duplication errors from multiple check-out systems'
      ]
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'User Research & Empathy',
      description: 'Conducted interviews with school administrators, librarians, and inventory managers to understand pain points and current workflows. Created empathy maps and detailed personas.'
    },
    {
      number: 2,
      title: 'Journey Mapping',
      description: 'Mapped user journeys for common scenarios like assigning equipment or tracking overdue items. Identified inefficiencies and opportunities for innovation.'
    },
    {
      number: 3,
      title: 'Information Architecture',
      description: 'I built the navigation system that makes the software feel simple, even when it\'s complex behind the scenes.'
    },
    {
      number: 4,
      title: 'Wireframing & Prototyping',
      description: 'Created low-fidelity wireframes focusing on layout and hierarchy, then advanced to high-fidelity interactive prototypes in Figma for user testing.'
    },
    {
      number: 5,
      title: 'Visual Design & Testing',
      description: 'Developed visual identity with teal-blue primary color and Montserrat typography. We met a few people and worked through the prototype together.'
    }
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Quick Assign Wizard',
      description: 'A guided flow for assigning assets in seconds, eliminating complex forms and reducing errors.'
    },
    {
      icon: '🔍',
      title: 'Global Search with Filters',
      description: 'Instantly locate items by name, category, or status with powerful filtering capabilities.'
    },
    {
      icon: '🔔',
      title: 'Smart Reminders',
      description: 'Automated notifications for due dates, overdue returns, and maintenance schedules.'
    },
    {
      icon: '📊',
      title: 'Visual Reports Dashboard',
      description: 'Graphs and charts that turn raw data into actionable insights for better decision making.'
    },
    {
      icon: '📋',
      title: 'Audit Trails',
      description: 'Full accountability with complete histories of who used what and when.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Full functionality on mobile, enabling teachers and managers to update records on the move.'
    }
  ];

  const outcomes = [
    'Track inventory in real-time',
    'Reduce asset loss and delays',
    'Eliminate manual Excel-based workflows',
    'Hold staff accountable with clear audit trails',
    'Gain visibility through automated reports and reminders'
  ];

  const designItems = [
    { id: 0, imageUrl: '/images/Assedra/Final-0.png' },
    { id: 1, imageUrl: '/images/Assedra/Final-1.png' },
    { id: 2, imageUrl: '/images/Assedra/Final-2.png' },
    { id: 3, imageUrl: '/images/Assedra/Final-4.png' },
    { id: 4, imageUrl: '/images/Assedra/Final-5.png' },
    { id: 5, imageUrl: '/images/Assedra/Final-6.png' },
    { id: 6, imageUrl: '/images/Assedra/Final-7.png' },
    { id: 7, imageUrl: '/images/Assedra/Final-8.png' },
    { id: 8, imageUrl: '/images/Assedra/Final-9.png' },
    { id: 9, imageUrl: '/images/Assedra/Final-10.png' },
    { id: 10, imageUrl: '/images/Assedra/Final-11.png' }
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
                src="/images/Assedra/Cover-art.png"
                alt="Assedra School Inventory Management"
                width={500}
                height={375}
                className="w-full h-auto"
                priority
              />
            </motion.div>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-zinc-100">
                Assedra: School Inventory Management
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Transforming how schools handle their assets with a seamless, intelligent, and accessible inventory management system
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
                  <span className="text-lg font-semibold text-zinc-100">Figma, Google Forms, Miro</span>
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
                When I was assigned to lead the design of Assedra, a school inventory management system, the goal was clear: transform the way schools handle their assets. From books and laboratory equipment to laptops and classroom furniture, schools rely on a vast number of resources to function smoothly.
              </p>
              <p>
                Yet, in many institutions, these assets are tracked with spreadsheets, paper logs, or outdated software. Methods that are error-prone, frustrating, and unsuited to the unique workflows of education.
              </p>
              
              <div className="my-12 p-8 bg-zinc-900 rounded-2xl text-white text-center">
                <blockquote className="text-xl font-semibold italic leading-relaxed">
                  "How might we design a seamless, intelligent, and accessible inventory management system specifically tailored for schools and educational staff?"
                </blockquote>
              </div>
              
              <p>
                The project set out to solve this straightforward but challenging question through human-centered design principles.
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
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Understanding the Challenge</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12">
              <p className="mb-6">
                The first step was diving deep into user research. I spoke with school administrators, librarians, and even students to understand how they or their school currently manage assets and what frustrates them the most.
              </p>
              <p className="mb-8">
                The findings revealed a consistent pattern of pain points:
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
            
            <div className="mt-12 text-center p-8 bg-zinc-800 rounded-2xl border-l-4 border-zinc-700">
              <blockquote className="text-2xl font-semibold italic mb-4 text-zinc-100">
                "I spend more time looking for the school's properties than actually managing the school."
              </blockquote>
              <cite className="text-lg text-zinc-300">— School Administrator</cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Design Process</h2>
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-900"></div>
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12 pl-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-6 top-0 w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                    {step.number}
                  </div>
                  <div className="bg-zinc-900 p-8 rounded-xl shadow-sm border-l-4 border-blue-600">
                    <h3 className="text-2xl font-semibold mb-4 text-zinc-100">{step.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personas Section */}
      <section id="personas" className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Empathy & Personas</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12">
              <p className="mb-6">
                To capture the reality of the users, I created an empathy map for key roles such as inventory managers and administrators. This allowed me to step into their shoes and fully understand their needs, emotions, and frustrations.
              </p>
              
              {/* Empathy Map Image */}
              <motion.div 
                className="mb-8 flex justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-800 max-w-4xl w-full">
                  <Image
                    src="/images/Assedra/Empathy-map.png"
                    alt="Empathy Map for School Inventory Management Users"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </motion.div>
              
              <p>
                For example, inventory managers constantly thought: "Why can't this just be easier?" and felt stressed by avoidable losses. They needed a tool that was fast, visual, and accessible, one that didn't feel like financial software but like an educational assistant built just for them.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {personas.map((persona, index) => {
                // Direct image assignment based on index
                const personaImages = [
                  '/images/Assedra/Abigail.png',  // Abigail (index 0)
                  '/images/Assedra/Idris.jpg',    // Idris (index 1)
                  '/images/Assedra/Lara.jpg'      // Lara (index 2)
                ];

                return (
                <motion.div
                  key={index}
                  className="bg-zinc-900 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={personaImages[index]}
                      alt={persona.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-zinc-100">{persona.name}</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-1">{persona.title}</p>
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
                            <span className="text-blue-600 font-bold mt-1">✓</span>
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
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Architecture Section */}
      <section id="information-architecture" className="py-24 bg-zinc-950">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Information Architecture</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12">
              <p className="mb-6">
                The application's information architecture is designed around a clear, hierarchical navigation system and interconnected core workflows, ensuring intuitive access to all functionalities for inventory, assignment, and staff management.
              </p>
              <p>
                This structure provides a clear overview of how information is organized and how users will navigate through the application, with seamless data flow between modules for complete asset lifecycle management.
              </p>
            </div>

            {/* Information Architecture Image */}
            <motion.div 
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-800 max-w-5xl w-full">
                <Image
                  src="/images/Assedra/IA.png"
                  alt="Information Architecture for Assedra School Inventory Management"
                  width={1000}
                  height={750}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* User Flows Section */}
      <section id="user-flows" className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">User Flows</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12 text-center">
              <p className="mb-6">
                To ensure a seamless and intuitive experience, I meticulously mapped out key user journeys within the Assedra system. These user flows illustrate how different roles interact with the platform to achieve their goals, from adding new inventory to generating reports and managing maintenance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* User Flow Card 1: Add a New Inventory Item */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </span>
                  Add a New Inventory Item
                </h3>
                <p className="text-sm text-zinc-300 mb-2">Inventory Manager/Admin</p>
                <p className="text-zinc-200 mb-4">Goal: Register a new item into the system</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Log in to dashboard</li>
                  <li>Click "Add Item" button</li>
                  <li>Fill in item details (Name, Category, Serial No, Quantity, etc.)</li>
                  <li>Upload item photo</li>
                  <li>Assign location (e.g. Library, ICT Lab)</li>
                  <li>Set maintenance schedule (optional)</li>
                  <li>Click "Save"</li>
                  <li>Success confirmation + Quick Add next item prompt</li>
                </ol>
              </motion.div>

              {/* User Flow Card 2: Assign an Item to a Staff Member */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </span>
                  Assign an Item to a Staff Member
                </h3>
                <p className="text-sm text-zinc-300 mb-2">Inventory Manager/Admin</p>
                <p className="text-zinc-200 mb-4">Goal: Record and manage item handover</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Log in to dashboard</li>
                  <li>Search or filter for item</li>
                  <li>Click "Assign" button</li>
                  <li>Select staff from directory</li>
                  <li>Set return date and notes (if needed)</li>
                  <li>Confirm assignment</li>
                  <li>Success screen with preview of due date</li>
                  <li>Reminder scheduled automatically</li>
                </ol>
              </motion.div>

              {/* User Flow Card 3: Return an Assigned Item */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-purple-100 text-purple-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                  </span>
                  Return an Assigned Item
                </h3>
                <p className="text-sm text-zinc-300 mb-2">Staff/Inventory Manager</p>
                <p className="text-zinc-200 mb-4">Goal: Mark an item as returned and update status</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Staff or manager logs in</li>
                  <li>Navigate to "My Assigned Items" or "Assignments" tab</li>
                  <li>Locate item marked as "Assigned"</li>
                  <li>Click "Return Item"</li>
                  <li>(Optional) Add condition or remarks</li>
                  <li>Confirm return</li>
                  <li>Item status updated to "Available"</li>
                </ol>
              </motion.div>

              {/* User Flow Card 4: Track Item Status or Location */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-yellow-100 text-yellow-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </span>
                  Track Item Status or Location
                </h3>
                <p className="text-sm text-zinc-300 mb-2">Admin/Inventory Manager/Librarian</p>
                <p className="text-zinc-200 mb-4">Goal: Know where items are and who has them</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Log in</li>
                  <li>Use global search or apply filters (location, category, status)</li>
                  <li>View item status: Available, Assigned, Under Maintenance</li>
                  <li>Open "Quick View" panel for item</li>
                  <li>Review borrower, history, condition, and due date</li>
                </ol>
              </motion.div>

              {/* User Flow Card 5: Send Return Reminder */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                  </span>
                  Send Return Reminder
                </h3>
                <p className="text-sm text-zinc-300 mb-2">Admin/Inventory Manager</p>
                <p className="text-zinc-200 mb-4">Goal: Notify a staff member about a due or overdue item</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Go to "Reminders" tab</li>
                  <li>View list of due and overdue items</li>
                  <li>Select item(s)</li>
                  <li>Click "Send Reminder"</li>
                  <li>Choose reminder type (email, system notification)</li>
                  <li>Send</li>
                  <li>Confirmation shown</li>
                </ol>
              </motion.div>

              {/* User Flow Card 6: Generate a Report */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </span>
                  Generate a Report
                </h3>
                <p className="text-sm text-zinc-300 mb-2">Admin</p>
                <p className="text-zinc-200 mb-4">Goal: View analytics or export reports for school management</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Open "Reports" tab</li>
                  <li>Choose report type: Asset Usage, Assignment History, Lost Items, Maintenance Logs</li>
                  <li>Apply date range or filters</li>
                  <li>View visual charts and summaries</li>
                  <li>Click "Export as PDF/CSV"</li>
                  <li>Download or share</li>
                </ol>
              </motion.div>

              {/* User Flow Card 7: Set Maintenance Schedule */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-orange-100 text-orange-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  </span>
                  Set Maintenance Schedule
                </h3>
                <p className="text-sm text-zinc-300 mb-2">Admin/Inventory Manager</p>
                <p className="text-zinc-200 mb-4">Goal: Schedule routine checks or servicing</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Open item's Quick View</li>
                  <li>Click "Maintenance" tab</li>
                  <li>Add next check date and type of maintenance</li>
                  <li>Save</li>
                  <li>System adds maintenance reminder to calendar</li>
                </ol>
              </motion.div>

              {/* User Flow Card 8: Receive Maintenance Notification */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-teal-100 text-teal-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                  </span>
                  Receive Maintenance Notification
                </h3>
                <p className="text-sm text-zinc-300 mb-2">Inventory Manager</p>
                <p className="text-zinc-200 mb-4">Goal: Stay aware of scheduled maintenance</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Log in</li>
                  <li>Navigate to "Reminders" tab</li>
                  <li>View "Upcoming Maintenance" list</li>
                  <li>Click item to view details or update status</li>
                </ol>
              </motion.div>

              {/* User Flow Card 9: Search for Any Item, Person, or Tag */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-indigo-100 text-indigo-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </span>
                  Search for Any Item, Person, or Tag
                </h3>
                <p className="text-sm text-zinc-300 mb-2">All users</p>
                <p className="text-zinc-200 mb-4">Goal: Find anything quickly from the main interface</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Click on global search bar</li>
                  <li>Type keyword (e.g., "projector", "Mrs. Rita")</li>
                  <li>Filter by type (Item, Staff, Tag, Category)</li>
                  <li>Click result</li>
                  <li>Navigate directly to item or person's profile</li>
                </ol>
              </motion.div>

              {/* User Flow Card 10: Switch View Modes (Table, Card, Timeline) */}
              <motion.div
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-zinc-100 flex items-center">
                  <span className="bg-pink-100 text-pink-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </span>
                  Switch View Modes (Table, Card, Timeline)
                </h3>
                <p className="text-sm text-zinc-300 mb-2">All users</p>
                <p className="text-zinc-200 mb-4">Goal: Choose how inventory is visually displayed</p>
                <ol className="list-decimal list-inside text-zinc-200 space-y-1">
                  <li>Go to Inventory tab</li>
                  <li>Click view switcher (icon group at top right)</li>
                  <li>Choose between Table, Card, or Timeline</li>
                  <li>Interface updates view style</li>
                  <li>Preference saved for future sessions</li>
                </ol>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">The Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 p-8 rounded-xl text-center shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-600"
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

      {/* Gallery Section */}
      <section id="designs" className="py-24 bg-zinc-950">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Final Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-zinc-800 rounded-xl p-4 mb-4 transition-all duration-300 hover:shadow-sm overflow-hidden">
                  <Image
                    src="/images/Assedra/1920w-light.png"
                    alt="Assedra Dashboard"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="text-sm text-zinc-300 italic">Main dashboard with real-time asset overview and quick actions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zinc-800 rounded-xl p-4 mb-4 transition-all duration-300 hover:shadow-sm overflow-hidden">
                  <Image
                    src="/images/Assedra/Inventory.png"
                    alt="Inventory Management"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="text-sm text-zinc-300 italic">Inventory management with global search and filtering</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zinc-800 rounded-xl p-4 mb-4 transition-all duration-300 hover:shadow-sm overflow-hidden">
                  <Image
                    src="/images/Assedra/Assignments.png"
                    alt="Assignment Flow"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="text-sm text-zinc-300 italic">Quick assign wizard for streamlined asset assignment</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zinc-800 rounded-xl p-4 mb-4 transition-all duration-300 hover:shadow-sm overflow-hidden">
                  <Image
                    src="/images/Assedra/Reports.png"
                    alt="Reports Dashboard"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="text-sm text-zinc-300 italic">Visual reports dashboard with actionable insights</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Carousel Section */}
      <DesignCarousel items={designItems} />

      {/* Outcome Section */}
      <section id="outcome" className="py-24">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-zinc-100">The Outcome</h2>
            <p className="text-lg leading-relaxed text-zinc-200 mb-12">
              The result of this design process was Assedra, a responsive web application that reimagines school asset management. With its clean architecture, intuitive flows, and user-centered features, Assedra empowers schools to:
            </p>
            
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
                  <div className="text-2xl text-blue-600">✅</div>
                  <span className="font-medium text-zinc-100">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prototype Video Section */}
      <section id="prototype" className="py-24 bg-zinc-950">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-100">Prototype in Action</h2>
            <div className="text-lg leading-relaxed text-zinc-200 mb-12 text-center">
              <p className="mb-6">
                Here's a walkthrough of the Assedra prototype, showcasing the key features and user flows we designed. This demonstrates how the system works in practice, from inventory management to assignment tracking and reporting.
              </p>
            </div>

            <motion.div 
              className="bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=djqcs2ngt&public_id=Recording_2025-09-07_170435_rem4vr&profile=cld-default"
                width="640"
                height="360" 
                style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                title="Assedra Prototype Demo"
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reflection Section */}
      <section id="reflection" className="py-24 bg-zinc-950">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-zinc-100">Reflection</h2>
            <div className="text-lg leading-relaxed text-zinc-200 space-y-6">
              <p>
                This project challenged me to balance simplicity and power. Schools don't have the time for steep learning curves or overly technical tools. By focusing on the real needs of administrators, librarians, and staff, I designed a system that is as easy to use as it is powerful.
              </p>
              <p>
                Most importantly, Assedra demonstrates the power of human-centered design: when you listen deeply to users, every feature becomes purposeful, every interaction becomes smoother, and the final product feels less like a tool and more like a trusted assistant.
              </p>
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

export default AssedraCaseStudy;


