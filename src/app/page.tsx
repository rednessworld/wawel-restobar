import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import QuoteSection from '@/components/sections/QuoteSection';
import AboutSection from '@/components/sections/AboutSection';
import MenuSection from '@/components/sections/MenuSection';
import GallerySection from '@/components/sections/GallerySection';
import ReservationsSection from '@/components/sections/ReservationsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import LocationSection from '@/components/sections/LocationSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <MenuSection />
      <GallerySection />
      <ReservationsSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
