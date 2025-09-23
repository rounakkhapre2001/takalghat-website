'use client';

import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection'; // adjust path if needed
import LeadersSection from "@/components/LeadersSection";

export default function HomePage() {
  const { t } = useContext(LanguageContext);

  return (
    <>
    <HeroSection />
    {/* other content if any */}
    <LeadersSection />
  </>
  );
}
