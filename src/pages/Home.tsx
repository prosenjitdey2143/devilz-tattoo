import { HeroSection } from '../sections/HeroSection';
import { MarqueeSection } from '../sections/MarqueeSection';
import { ServicesSection } from '../sections/ServicesSection';
import { StylesExplorer } from '../sections/StylesExplorer';
import { ArtistsShowcase } from '../sections/ArtistsShowcase';
import { StudioExperience } from '../sections/StudioExperience';
import { Testimonials } from '../sections/Testimonials';
import { BookingCTA } from '../sections/BookingCTA';
import { Footer } from '../sections/Footer';
import { RecognizedBy } from '../sections/RecognizedBy';
import { LegacyTrust } from '../sections/LegacyTrust';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <RecognizedBy />
      <MarqueeSection />
      <LegacyTrust />
      <ServicesSection />
      <StylesExplorer />
      <ArtistsShowcase />
      <StudioExperience />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </>
  );
};
