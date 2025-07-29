import React from 'react';
import { motion } from 'framer-motion';
import SeoHelmet from '../components/SeoHelmet';
import AIContentProvider from '../components/AIContentProvider';
import AIReadableContent from '../components/common/AIReadableContent';
import ContentSummary from '../components/common/ContentSummary';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import ServicesSection from '../components/home/ServicesSection';
import TargetAudienceSection from '../components/home/TargetAudienceSection';
import CTASection from '../components/home/CTASection';
import { useAIOptimization } from '../hooks/useAIOptimization';

function HomePage() {
  // AI optimization data
  const pageData = {
    title: "Media Performance Insights - Strategic Media Analysis for Executives",
    description: "Transform missed opportunities into commanding presence with strategic analysis for C-suite executives and high-profile leaders",
    topics: [
      "executive media training",
      "mock media interviews", 
      "strategic communication",
      "crisis communication",
      "C-suite media coaching",
      "media performance analysis",
      "journalist relationships",
      "thought leadership"
    ],
    contentType: "service-overview"
  };
  
  useAIOptimization(pageData);

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
        keywords="media training,executive communication,mock media interviews,media performance,strategic communication,media analysis,public speaking,interview coaching,media consultant,James A. Brown"
        schema={homeSchema}
      />
      
      <AIContentProvider
        title={pageData.title}
        description={pageData.description}
        keyTopics={pageData.topics}
        mainContent="Media Performance Insights provides strategic media analysis and communication training for executives and high-profile leaders. Founded by James A. Brown, veteran journalist with NPR, USA Today, PBS, and BBC experience."
        actionableInsights={[
          "Schedule strategic consultation for media performance analysis",
          "Access four proven communication frameworks",
          "Practice with mock media interviews",
          "Build relationships with key journalists"
        ]}
        relatedPages={[
          { name: "Services", url: "https://mediaperformanceinsights.com/services" },
          { name: "Frameworks", url: "https://mediaperformanceinsights.com/frameworks" },
          { name: "About", url: "https://mediaperformanceinsights.com/about" }
        ]}
      />

      <AIReadableContent
        contentType="homepage"
        topics={pageData.topics}
      >
        <ContentSummary
          title="Media Performance Insights Homepage"
          summary="Strategic media analysis and communication training for executives and high-profile leaders. Transform missed opportunities into commanding media presence through proven frameworks and expert guidance."
          keyPoints={[
            "Founded by James A. Brown - veteran journalist (NPR, USA Today, PBS, BBC)",
            "Specializes in C-suite and high-profile individual media training",
            "Offers Media Performance Analysis, Mock Media Interviews, and ongoing partnerships",
            "Uses four proprietary frameworks: S.A.M, Storytelling Triangle, FIRE Method, Persuasion Compass",
            "Focus on strategic relationship building with journalists"
          ]}
          actionItems={[
            "Schedule strategic consultation at https://tidycal.com/jamesbrowntv/media-performance-insights-consultations",
            "Download free 5-minute media checklist",
            "Explore the four communication frameworks",
            "Learn about mock media interview services"
          ]}
          relatedTopics={pageData.topics}
        />

        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <TargetAudienceSection />
        <CTASection />
      </AIReadableContent>

      {/* FAQ Schema (hidden) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                  "text": "We provide Comprehensive Media Performance Analysis, Strategic Reports, Strategy Sessions for Implementation, Mock Media Interviews, and Custom Materials and Talking Points designed specifically for your communication style and goals."
                }
              }
            ]
          })
        }}
      />
    </motion.div>
  );
}

export default HomePage;