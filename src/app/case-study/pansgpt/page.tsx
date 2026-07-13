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
    { id: 'reliability', label: 'Reliability', href: 'reliability' },
    { id: 'kpis', label: 'KPIs', href: 'kpis' },
    { id: 'reflection', label: 'Reflection', href: 'reflection' },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <TopNav navItems={navItems} />
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
      <ReliabilitySection />
      <KPISection />
      <ReflectionSection />
      <Footer />
    </main>
  );
};

export default PansgptCaseStudy;
