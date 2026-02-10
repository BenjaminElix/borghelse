import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { HistorySection } from '../components/HistorySection';
import { ServicesSection } from '../components/ServicesSection';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <HistorySection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
