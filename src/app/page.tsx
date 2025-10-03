"use client";

import HeroSection from "@/components/HeroSection"; // adjust path if needed
import LeadersSection from "@/components/LeadersSection";
import Vasundhara from "@/components/vasundhara"; // changed to match casing

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* other content if any */}
      <LeadersSection />
      <Vasundhara />
    </>
  );
}
