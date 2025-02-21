import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const EbookSalePage = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToAction />
      <FAQSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default EbookSalePage;
