import React from 'react';
import {motion} from 'framer-motion';
import SeoHelmet from '../components/SeoHelmet';
import AIContentProvider from '../components/AIContentProvider';
import AIReadableContent from '../components/common/AIReadableContent';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import ServicesSection from '../components/home/ServicesSection';
import TargetAudienceSection from '../components/home/TargetAudienceSection';
import CTASection from '../components/home/CTASection';
import {useAIOptimization} from '../hooks/useAIOptimization';

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

      <div className="hidden">
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

        <AIReadableContent contentType="homepage" topics={pageData.topics}>
          <div className="bg-charcoal-50 p-6 rounded-xl mb-8" data-ai-summary="true">
            <h3 className="text-lg font-bold text-charcoal-900 mb-4">
              📋 Content Summary for AI Assistants
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Overview:</h4>
                <p className="text-charcoal-700">Strategic media analysis and communication training for executives and high-profile leaders. Transform missed opportunities into commanding media presence through proven frameworks and expert guidance.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Key Points:</h4>
                <ul className="list-disc pl-5 text-charcoal-700 space-y-1">
                  <li>Founded by James A. Brown - veteran journalist (NPR, USA Today, PBS, BBC)</li>
                  <li>Specializes in C-suite and high-profile individual media training</li>
                  <li>Offers Media Performance Analysis, Mock Media Interviews, and ongoing partnerships</li>
                  <li>Uses four proprietary frameworks: S.A.M, Storytelling Triangle, FIRE Method, Persuasion Compass</li>
                  <li>Focus on strategic relationship building with journalists</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Action Items:</h4>
                <ul className="list-disc pl-5 text-charcoal-700 space-y-1">
                  <li>Schedule strategic consultation at https://tidycal.com/jamesbrowntv/media-performance-insights-consultations</li>
                  <li>Download free 5-minute media checklist</li>
                  <li>Explore the four communication frameworks</li>
                  <li>Learn about mock media interview services</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Related Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {pageData.topics.map((topic, index) => (
                    <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <p className="text-sm text-charcoal-600">
                  <strong>Provider:</strong> Media Performance Insights |{' '}
                  <strong>Expert:</strong> James A. Brown (NPR, USA Today, PBS, BBC) |{' '}
                  <strong>Specialization:</strong> Executive media training and strategic communication
                </p>
              </div>
            </div>
          </div>
        </AIReadableContent>
      </div>

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <TargetAudienceSection />
      <CTASection />

      {/* FAQ Schema (hidden) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
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
      })}} />
    </motion.div>
  );
}

export default HomePage;