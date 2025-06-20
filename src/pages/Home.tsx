import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { TechnologiesSection } from '../components/home/TechnologiesSection';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { ContactSection } from '../components/home/ContactSection';

export function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TechnologiesSection />
      <CaseStudiesSection />
      <ContactSection />
    </div>
  );
}