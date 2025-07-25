import React from 'react';
import { motion } from 'framer-motion';
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