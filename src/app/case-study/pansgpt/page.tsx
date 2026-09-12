'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';
import HeroSection from '@/components/pansgpt/HeroSection';
import OverviewSection from '@/components/pansgpt/OverviewSection';
import ProductDefinitionSection from '@/components/pansgpt/ProductDefinitionSection';
import PainPointsSection from '@/components/pansgpt/PainPointsSection';
import PersonaSection from '@/components/pansgpt/PersonaSection';
import LearningLoopSection from '@/components/pansgpt/LearningLoopSection';
import IASection from '@/components/pansgpt/IASection';
import JourneyMapsSection from '@/components/pansgpt/JourneyMapsSection';
import UserFlowsSection from '@/components/pansgpt/UserFlowsSection';
import FeatureDeepDiveSection from '@/components/pansgpt/FeatureDeepDiveSection';
import ReliabilitySection from '@/components/pansgpt/ReliabilitySection';
import KPISection from '@/components/pansgpt/KPISection';
import ReflectionSection from '@/components/pansgpt/ReflectionSection';
import DesignCarousel, { DesignItem } from '@/components/DesignCarousel';

const PansgptCaseStudy = () => {
  const navItems = [
    { id: 'overview', label: 'Overview', href: 'overview' },
    { id: 'definition', label: 'Product', href: 'definition' },
    { id: 'research', label: 'Research', href: 'research' },
    { id: 'personas', label: 'Personas', href: 'personas' },
    { id: 'learning-loop', label: 'Learning Loop', href: 'learning-loop' },
    { id: 'ia', label: 'IA', href: 'ia' },
    { id: 'journeys', label: 'Journeys', href: 'journeys' },
    { id: 'flows', label: 'User Flows', href: 'flows' },
    { id: 'features', label: 'Features', href: 'features' },
    { id: 'screens', label: 'Live Screens', href: 'screens' },
    { id: 'reliability', label: 'Reliability', href: 'reliability' },
    { id: 'kpis', label: 'KPIs', href: 'kpis' },
    { id: 'reflection', label: 'Reflection', href: 'reflection' },
  ];

  const designItems: DesignItem[] = [
    { id: 0, imageUrl: '/images/pansgpt/reader-copilot.png', title: 'Closed-Loop Reader & AI Synthesis' },
    { id: 1, imageUrl: '/images/pansgpt/reader-contextual.png', title: 'Contextual Snip & Explain Menu' },
    { id: 2, imageUrl: '/images/pansgpt/reader-clean.png', title: 'Full Lecture Presentation View' },
    { id: 3, imageUrl: '/images/pansgpt/library-view.png', title: 'Course Material Library & Metadata' },
    { id: 4, imageUrl: '/images/pansgpt/chat-interface.png', title: 'Cognitive Conversational Assistant' },
    { id: 5, imageUrl: '/images/pansgpt/quiz-hub.png', title: 'Quiz Performance & Metrics Dashboard' },
    { id: 6, imageUrl: '/images/pansgpt/quiz-generator.png', title: 'Multi-Step Exam Generator Modal' },
    { id: 7, imageUrl: '/images/pansgpt/quiz-active.png', title: 'Timed Practice Examination Interface' },
    { id: 8, imageUrl: '/images/pansgpt/quiz-results.png', title: 'Detailed Performance & Question Review' },
    { id: 9, imageUrl: '/images/pansgpt/share-modal.png', title: 'Social Scorecard for WhatsApp Study Groups' },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-zinc-100">
      <Header />
      <TopNav 
        navItems={navItems} 
        actionLink={{ label: 'Visit Site', href: 'https://pansgpt.site' }} 
      />
      <HeroSection />
      <OverviewSection />
      <ProductDefinitionSection />
      <PainPointsSection />
      <PersonaSection />
      <LearningLoopSection />
      <IASection />
      <JourneyMapsSection />
      <UserFlowsSection />
      <FeatureDeepDiveSection />
      <div id="screens">
        <DesignCarousel items={designItems} aspect="landscape" />
      </div>
      <ReliabilitySection />
      <KPISection />
      <ReflectionSection />
      <Footer />
    </main>
  );
};

export default PansgptCaseStudy;
