import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CourseSection from '../components/CourseSection';
import CertificationsSection from '../components/CertificationsSection';
import ProgrammingSection from '../components/ProgrammingSection';
import CollaboratorsBanner from '../components/CollaboratorsBanner';
import AEDIABanner from '../components/AEDIABanner';
import StatsSection from '../components/StatsSection';
import ContactSection from '../components/ContactSection';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Ebal Formacion - Formación en Inteligencia Artificial';
  }, []);

  return (
    <main>
      <Hero />
      <AboutSection />
      <CourseSection />
      <CertificationsSection />
      <ProgrammingSection />
      <AEDIABanner />
      <CollaboratorsBanner />
      <StatsSection />
      <ContactSection />
    </main>
  );
};

export default Home;