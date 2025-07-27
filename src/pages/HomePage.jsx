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
  // Schema for Home Page
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Media Performance Insights - Strategic Media Analysis for Executives",
    "description": "Transform missed opportunities into commanding presence with strategic analysis that reveals exactly what separates forgettable experts from voices people remember and trust.",
    "publisher": {
      "@type": "Organization",
      "name": "Media Performance Insights",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mediaperformanceinsights.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Media Performance Analysis",
      "description": "Strategic analysis of media appearances to transform executives' communication effectiveness",
      "provider": {
        "@type": "Organization",
        "name": "Media Performance Insights",
        "founder": {
          "@type": "Person",
          "name": "James A. Brown"
        }
      },
      "serviceType": "Media Training",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Media Performance Analysis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Media Performance Analysis is a comprehensive framework that examines your media appearances using four proprietary frameworks to identify strengths and opportunities for improvement. The analysis reveals exactly what separates forgettable experts from voices people remember and trust."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Media Performance Insights for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Media Performance Insights serves C-Suite Executives, Industry Experts, Public Company Leaders, Authors & Speakers, and those facing Crisis Situations who understand that communication is a competitive advantage, not just a necessary skill."
        }
      },
      {
        "@type": "Question",
        "name": "What services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide Comprehensive Media Performance Analysis, Strategic Reports, Strategy Sessions for Implementation, and Custom Materials and Talking Points designed specifically for your communication style and goals."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can schedule a strategic consultation with James A. Brown to discuss your specific media goals, analyze your current performance, and develop a strategic roadmap for commanding media presence."
        }
      }
    ]
  };

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
        keywords="media training, executive communication, media performance, strategic communication, media analysis, public speaking, interview coaching, media consultant, James A. Brown"
        schema={homeSchema}
      />

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <TargetAudienceSection />
      <CTASection />

      {/* FAQ Schema (hidden) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </motion.div>
  );
}

export default HomePage;