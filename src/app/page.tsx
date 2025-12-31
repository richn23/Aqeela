import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SupportSection } from "@/components/SupportSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FallingLeaves } from "@/components/FallingLeaves";

export default function Home() {
  return (
    <>
      <FallingLeaves />
      <Navigation />
      <HeroSection />
      <SupportSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
