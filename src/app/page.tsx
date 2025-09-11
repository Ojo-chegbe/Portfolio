import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Work from '@/components/Work';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Highlights />
      <Work />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}