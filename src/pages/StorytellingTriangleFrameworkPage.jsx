import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTriangle, FiUser, FiUsers, FiClock, FiStar, FiHeart, FiTarget, FiBookOpen, FiArrowRight } = FiIcons;

function StorytellingTriangleFrameworkPage() {
  const triangleElements = [
    {
      icon: FiUser,
      title: "YOU: Personal Leadership Experience",
      description: "Every compelling executive story starts with genuine personal experience—not your company's generic messaging, not industry platitudes, but your authentic leadership journey. The YOU element must be genuinely personal, whether it's professional challenges overcome, leadership lessons learned, or moments of business insight discovery.",
      color: "from-blue-500 to-blue-700",
      examples: [
        "Professional challenges overcome",
        "Leadership lessons learned through experience",
        "Moments of business insight discovery",
        "Career-defining decisions and outcomes",
        "Personal transformation through leadership roles"
      ]
    },
    {
      icon: FiUsers,
      title: "THEM: Stakeholder Needs Analysis",
      description: "Every executive story must serve your specific audience's business needs. The same personal leadership experience can serve different stakeholder groups by adjusting which details you emphasize and which business conclusions you draw.",
      color: "from-green-500 to-green-700",
      examples: [
        "Investor ROI evidence and market validation",
        "Employee cultural connection and inspiration",
        "Customer value demonstration and trust-building",
        "Media newsworthy insights and thought leadership",
        "Board strategic vision and execution capability"
      ]
    },
    {
      icon: FiClock,
      title: "NOW: Current Business Context",
      description: "This is what makes your executive story relevant to today's business challenges. Why are you sharing this leadership experience now? How does it connect to current market conditions, industry trends, or organizational challenges?",
      color: "from-orange-500 to-red-600",
      examples: [
        "Current market conditions and trends",
        "Industry disruption and transformation",
        "Organizational challenges and opportunities",
        "Economic climate and business implications",
        "Competitive landscape and positioning"
      ]
    }
  ];

  const masterInfluences = [
    {
      name: "Simon Sinek",
      contribution: "Start with Why methodology for authentic leadership",
      description: "Emphasizes how personal purpose connects with audience needs for authentic leadership communication",
      icon: FiTarget
    },
    {
      name: "Pixar Storytelling",
      contribution: "Narrative principles for business contexts",
      description: "Demonstrates how the best narratives serve both character development and audience engagement",
      icon: FiStar
    },
    {
      name: "Joseph Campbell",
      contribution: "Hero's Journey framework for universal resonance",
      description: "Reveals narrative patterns that make executive stories resonate across cultures and stakeholder groups",
      icon: FiBookOpen
    },
    {
      name: "Jordan Peterson",
      contribution: "Psychological insights for authentic authority",
      description: "Shows how personal truth creates authentic executive authority and credible leadership presence",
      icon: FiHeart
    }
  ];

  const businessApplications = [
    {
      title: "Media Interviews",
      description: "Transform challenging questions into opportunities to share relevant leadership experience that serves journalist and audience needs while advancing your business objectives."
    },
    {
      title: "Investor Presentations",
      description: "Connect your personal leadership journey with investor interests, demonstrating both authentic character and business acumen through strategic storytelling."
    },
    {
      title: "Employee Communications",
      description: "Build organizational culture and inspire teams by sharing personal leadership experiences that connect with employee values and current business challenges."
    },
    {
      title: "Customer Engagement",
      description: "Create trust and demonstrate value by sharing leadership stories that resonate with customer challenges and show your commitment to their success."
    },
    {
      title: "Crisis Communication",
      description: "Maintain credibility and build confidence during difficult times by sharing relevant personal experiences that demonstrate resilience and leadership capability."
    },
    {
      title: "Board Presentations",
      description: "Combine personal leadership credibility with strategic business insights to build board confidence in your vision and execution capability."
    }
  ];

  // Schema for Storytelling Triangle Framework Page
  const triangleFrameworkSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Storytelling Triangle: Executive Storytelling Framework for Authentic Leadership Communication",
    "description": "Master the Storytelling Triangle framework for executive storytelling that transforms personal leadership experience into compelling business narratives that drive stakeholder engagement and results.",
    "author": {
      "@type": "Person",
      "name": "James A. Brown"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Media Performance Insights"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://mediaperformanceinsights.com/storytelling-triangle-framework"
    },
    "keywords": "executive storytelling framework, business storytelling for leaders, leadership communication training, authentic executive presence, executive media training, business narrative skills"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <SeoHelmet
        title="The Storytelling Triangle: Executive Storytelling Framework for Authentic Leadership Communication"
        description="Master the Storytelling Triangle framework for executive storytelling that transforms personal leadership experience into compelling business narratives that drive stakeholder engagement and results."
        keywords="executive storytelling framework, business storytelling for leaders, leadership communication training, authentic executive presence, executive media training, business narrative skills"
        schema={triangleFrameworkSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiTriangle} className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                The <span className="text-blue-400">Storytelling</span> Triangle
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Executive Storytelling Framework for Authentic Leadership Communication
            </h2>
            <p className="text-lg text-charcoal-300 max-w-4xl mx-auto leading-relaxed">
              Transform Personal Experience into Powerful Business Narratives That Drive Results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-charcoal-700 leading-relaxed mb-8">
              The Storytelling Triangle—YOU plus THEM plus NOW equals YOUR MOMENT—is the executive storytelling framework that transforms your personal leadership experience into compelling business narratives that serve stakeholder needs at exactly the right time. This isn't generic storytelling advice; it's a strategic communication system that creates authentic connection while advancing important business conversations and leadership positioning.
            </p>
            
            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Beyond Generic Business Storytelling Training
              </h3>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-4">
                Most executive communication training focuses on narrative structure, presentation skills, and message delivery. The Storytelling Triangle goes deeper, teaching business leaders how to identify which personal experiences can serve stakeholder needs at exactly the right moment.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                It's strategic executive storytelling that creates authentic connection while advancing important business objectives and leadership positioning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Formula */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8">The Executive Storytelling Formula</h2>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-2xl font-bold text-charcoal-800">
                <div className="bg-blue-100 px-6 py-3 rounded-lg">YOU</div>
                <div className="text-charcoal-400">+</div>
                <div className="bg-green-100 px-6 py-3 rounded-lg">THEM</div>
                <div className="text-charcoal-400">+</div>
                <div className="bg-orange-100 px-6 py-3 rounded-lg">NOW</div>
                <div className="text-charcoal-400">=</div>
                <div className="bg-gold-100 px-6 py-3 rounded-lg text-gold-700">YOUR MOMENT</div>
              </div>
              <p className="text-lg text-charcoal-600 mt-6">
                Strategic intersection of authentic experience, stakeholder needs, and business context
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Essential Elements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              The Three Essential Elements of Executive Business Storytelling
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Each element of the triangle serves a specific purpose in creating authentic, impactful executive communication that drives business results.
            </p>
          </motion.div>

          <div className="space-y-16">
            {triangleElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${element.color} rounded-xl flex items-center justify-center`}>
                      <SafeIcon icon={element.icon} className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal-900">{element.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-charcoal-600 leading-relaxed">{element.description}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-charcoal-50 rounded-xl p-8">
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-4">Key Applications:</h4>
                    <ul className="space-y-3">
                      {element.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-br ${element.color} rounded-full mt-2`}></div>
                          <span className="text-charcoal-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Applications */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Strategic Business Applications
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              The Storytelling Triangle enhances executive effectiveness across all critical business communication scenarios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{application.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Storyteller Influences */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Influenced by Master Storytellers and <span className="text-blue-400">Leadership Communication Experts</span>
            </h2>
            <p className="text-xl text-charcoal-200 max-w-3xl mx-auto">
              The Triangle integrates insights from multiple storytelling and leadership traditions, creating a comprehensive framework for executive influence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {masterInfluences.map((influence, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <SafeIcon icon={influence.icon} className="w-12 h-12 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-bold">{influence.name}</h3>
                    <p className="text-blue-300 text-sm">{influence.contribution}</p>
                  </div>
                </div>
                <p className="text-charcoal-300">{influence.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">The Foundation of Authentic Executive Leadership Communication</h3>
            <p className="text-lg text-charcoal-200 max-w-3xl mx-auto">
              When you master the Storytelling Triangle, you never again wonder whether your message will resonate with stakeholders. You know how to connect your genuine leadership experience with what others truly need to understand about your business, industry, or organizational direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Master Authentic Executive Storytelling?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Learn how the Storytelling Triangle works with our other frameworks to create compelling, authentic business communication that drives results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Schedule Your Story Strategy Session
              </motion.a>
              <Link
                to="/frameworks"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore All Frameworks
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/sam-framework" className="text-blue-200 hover:text-white transition-colors flex items-center space-x-1">
                <span>← Previous: SAM Framework</span>
              </Link>
              <Link to="/fire-method-framework" className="text-blue-200 hover:text-white transition-colors flex items-center space-x-1">
                <span>Next: FIRE Method</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default StorytellingTriangleFrameworkPage;