import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import WhatWeDoSection from "../Components/WhatWeDoSection";
import WhoWeAreSection from "../Components/WhoWeAreSection";
import OurApproachSection from "../Components/OurApproachSection";
import OurServicesSection from "../Components/OurServicesSection";
import OurVerticlesSection from "../Components/OurVerticlesSection";
import GetInTouchSection from "../Components/GetInTouchSection";
import GetInTouchFooterSection from "../Components/GetInTouchFooterSection";
import Footer from "../Components/Footer";
import ScalingSection from "../Components/ScalingSection";
import BusinessesSection from "../Components/BusinessesSection";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-white">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <WhoWeAreSection />
      <OurApproachSection />
      <GetInTouchSection/>
      <ScalingSection/>
      <BusinessesSection/>
      <OurServicesSection />
      <OurVerticlesSection />
      <GetInTouchFooterSection/>
      <Footer />
    </main>
  );
}
