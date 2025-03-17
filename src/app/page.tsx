import HeroSection from "./components/sections/HeroSection";
import WhySection from "./components/sections/WhySection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import TestimonialSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhySection />
      <div className="h-16 bg-gradient-to-t from-[#d4b897]/5 to-white"></div>
      <ServicesSection />
      <div className="h-16 bg-gradient-to-t from-white to-[#d4b897]/5"></div>
      <AboutSection />
      <div className="h-16 bg-gradient-to-t from-[#d4b897]/5 to-white"></div>
      <TestimonialSection />
      <div className="h-16 bg-gradient-to-t from-white to-[#d4b897]/5"></div>
      <ContactSection />
      <div className="h-16 bg-gradient-to-t from-white to-[#d4b897]/5"></div>
    </main>
  );
}
