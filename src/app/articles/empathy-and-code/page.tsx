'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EmpathyAndCodeArticle = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                The bridge between Empathy and Code
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                A reflection on the human-centered nature of User Experience Design
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>Published on September 10, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.article 
            className="max-w-4xl mx-auto prose prose-lg prose-gray"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 text-lg leading-relaxed text-gray-700">
              <p>
                Every technology begins with a promise. A website promises knowledge. An app promises efficiency. A medical record system promises care. Yet promises are fragile. They can break if the pathway between a human being and the tool meant to serve them is jagged, confusing, or unwelcoming. The delicate bridge that carries us from intent to fulfillment is what we call User Experience Design, or UX design.
              </p>

              <p>
                UX design is the art of making interactions feel natural, so that technology becomes less a machine and more an extension of thought. It is not simply the arrangement of buttons or the choice of colors on a screen. At its heart, UX design is empathy written into code and translated into pixels. When a mother books a ticket without hesitation, when a patient discovers a test result with ease, when a student learns without distraction, these are the quiet successes of UX design. They rarely call attention to themselves, yet they shape lives more deeply than most of us notice.
              </p>

              <p>
                The importance of UX is revealed most clearly in its absence. Imagine a health app that buries vital data beneath layers of confusing menus, or a banking platform where something as ordinary as transferring money feels like solving a riddle. In such cases, the technology works perfectly at the level of code. The servers are humming, the algorithms are accurate, the functions are intact. Yet the promise collapses because the user cannot find a way through. Failure here is not technical but human. Trust erodes not when systems crash, but when they exhaust the patience of the people they were meant to serve.
              </p>

              <p>
                This is why UX design matters. It is less about machines and more about minds. It borrows from psychology, guiding memory and attention. It borrows from physiology, recognizing that eyes grow tired and hands grow unsteady. It borrows from art, crafting symbols that feel familiar and reassuring. UX is, in the end, a form of translation. It takes the silent logic of machines and renders it into a language people can understand without struggle.
              </p>

              <p>
                History offers countless reminders that no technology survives without such translation. The typewriter was not only a mechanical invention but also an interface, with its layout of keys shaped by the rhythms of human fingers. The telephone was not only wires and switches, but a dial designed for the natural grasp of a hand. Our digital interfaces are their descendants, and they carry the same lesson. However powerful a system may be, without thoughtful design it resists adoption. The machine may function, but the human being turns away.
              </p>

              <p>
                The stakes are higher than convenience. UX design is also an ethical act. In hospitals, a clear interface can prevent medication errors and save lives. In democracies, a well-designed portal can determine whether citizens gain access to vital information or are excluded by complexity. In everyday life, design grants dignity to the elderly, accessibility to the disabled, and confidence to those who feel hesitant with technology. Design is not cosmetic; it is moral. It decides who is included in the future we are building.
              </p>

              <p>
                The meaning of UX design, then, is not decoration but connection. It is the deliberate practice of listening to human needs and weaving them into the fabric of our tools. Its importance does not lie in the sparkle of pixels, but in the fulfillment of promises. Technology succeeds not when it dazzles with novelty, but when it fades quietly into the background, when the bridge it builds is steady enough that we can simply walk across.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Navigation */}
      <div className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link 
              href="/" 
              className="text-gray-600 no-underline font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-white"
            >
              ← Back to Home
            </Link>
            <Link 
              href="/#articles" 
              className="text-gray-900 no-underline font-semibold px-8 py-4 rounded-lg transition-all duration-300 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md"
            >
              More Articles →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default EmpathyAndCodeArticle;
