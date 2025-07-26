import React from 'react';
import { motion } from 'framer-motion';
import SeoHelmet from '../components/SeoHelmet';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import ServicesSection from '../components/home/ServicesSection';
import TargetAudienceSection from '../components/home/TargetAudienceSection';
import CTASection from '../components/home/CTASection';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SeoHelmet 
        title="Media Performance Insights | Strategic Media Analysis for Executives & Leaders"
        description="Transform missed opportunities into commanding presence with strategic analysis that reveals exactly what separates forgettable experts from voices people remember and trust."
        keywords="media training, executive communication, media performance, strategic communication, media analysis, public speaking, interview coaching"
      />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <TargetAudienceSection />
      <CTASection />
    </motion.div>
  );
}

export default HomePage;