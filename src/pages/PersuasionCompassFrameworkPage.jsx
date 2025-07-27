import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCompass, FiAward, FiHeart, FiBrain, FiClock, FiUsers, FiBookOpen, FiMic, FiTarget, FiTrendingUp } = FiIcons;

function PersuasionCompassFrameworkPage() {
  const compassDirections = [
    {
      icon: FiAward,
      title: "ETHOS: Executive Credibility and Character",
      description: "Your established business expertise, demonstrated leadership competence, and authentic executive character create the foundation for all other influence efforts. ETHOS answers 'Why should stakeholders listen to you?' through your track record, qualifications, and consistent character demonstration in business situations.",
      color: "from-blue-500 to-blue-700",
      elements: [
        "Professional expertise and industry credentials",
        "Demonstrated leadership competence and results",
        "Authentic executive character and integrity",
        "Trustworthy reputation and consistent track record",
        "Thought leadership and industry recognition"
      ],
      businessContext: "Without strong ETHOS, even brilliant logic and emotional connection fail to create lasting executive influence with investors, employees, or media."
    },
    {
      icon: FiHeart,
      title: "PATHOS: Emotional Connection and Shared Business Values",
      description: "Stakeholders make business decisions emotionally and justify them logically. PATHOS creates the emotional resonance that motivates action through shared values, compelling leadership stories, and authentic passion for your business mission.",
      color: "from-red-500 to-red-700",
      elements: [
        "Shared business values and common ground",
        "Compelling personal leadership narratives",
        "Emotional resonance and authentic empathy",
        "Inspirational vision and organizational purpose",
        "Cultural connection and stakeholder understanding"
      ],
      businessContext: "This isn't manipulation—it's helping stakeholders connect their hearts with their minds for better decision-making that serves mutual interests."
    },
    {
      icon: FiBrain,
      title: "LOGOS: Logic and Business Evidence",
      description: "Clear reasoning, solid business evidence, and rational structure give stakeholders the logical framework they need to support emotional decisions. LOGOS provides the 'why this makes business sense' that people need to feel confident in their choices.",
      color: "from-green-500 to-green-700",
      elements: [
        "Clear logical reasoning and structured arguments",
        "Solid business evidence and supporting data",
        "Financial metrics and performance indicators",
        "Market research and competitive analysis",
        "Strategic frameworks and business models"
      ],
      businessContext: "The best executive LOGOS feels inevitable rather than forced, creating natural agreement with your business direction."
    },
    {
      icon: FiClock,
      title: "KAIROS: Perfect Timing for Executive Communication",
      description: "Even the best credibility, emotional connection, and logical reasoning fail without proper timing. KAIROS means understanding when stakeholders are ready to hear your business message, when market context supports your goals, and when the moment is right for executive influence.",
      color: "from-purple-500 to-purple-700",
      elements: [
        "Optimal timing for strategic message delivery",
        "Market context and industry timing awareness",
        "Stakeholder readiness and decision-making cycles",
        "Crisis timing and opportunity identification",
        "Cultural and economic climate considerations"
      ],
      businessContext: "Great business leaders create the right timing rather than waiting for perfect conditions."
    }
  ];

  const classicalInfluences = [
    {
      name: "Aristotle",
      contribution: "Original rhetorical principles for timeless executive influence",
      description: "Classical foundations of persuasion that remain relevant for modern business leadership and stakeholder communication",
      icon: FiBookOpen
    },
    {
      name: "Robert Cialdini",
      contribution: "Modern influence psychology for contemporary business contexts",
      description: "Research-based insights into how persuasion operates in modern business relationships and decision-making",
      icon: FiBrain
    },
    {
      name: "Dale Carnegie",
      contribution: "Relationship insights for authentic business connection",
      description: "Principles for building lasting business relationships through genuine interest in stakeholder success",
      icon: FiUsers
    },
    {
      name: "Steve Jobs",
      contribution: "Presentation mastery and executive communication excellence",
      description: "Integration of all four compass elements for maximum business impact and stakeholder engagement",
      icon: FiMic
    }
  ];

  const businessApplications = [
    {
      title: "Investor Relations",
      description: "Use ETHOS to establish credibility, PATHOS to connect with investor values, LOGOS to present compelling business case, and KAIROS to time announcements for maximum impact."
    },
    {
      title: "Media Interviews",
      description: "Establish credibility quickly, connect emotionally with audience concerns, provide logical evidence for claims, and time responses for optimal message reception."
    },
    {
      title: "Board Presentations",
      description: "Leverage established credibility, connect with board values and concerns, present clear strategic logic, and time strategic initiatives for board readiness."
    },
    {
      title: "Crisis Communication",
      description: "Maintain credibility during challenges, address stakeholder emotions authentically, provide logical action plans, and time communications for maximum trust-building."
    },
    {
      title: "Employee Leadership",
      description: "Build on leadership credibility, connect with employee values, provide logical business rationale, and time communications for organizational readiness."
    },
    {
      title: "Customer Presentations",
      description: "Establish industry credibility, connect with customer challenges, present logical value propositions, and time offers for decision-making readiness."
    }
  ];

  const ethicalBenefits = [
    "Create irresistible influence that serves everyone involved in business relationships",
    "Build lasting stakeholder relationships through ethical persuasion and authentic communication",
    "Achieve sustainable business results that benefit all parties and create long-term value",
    "Maintain executive integrity while influencing effectively across all stakeholder groups",
    "Transform persuasion from sales tactics into genuine service and value creation",
    "Develop executive presence that stakeholders welcome rather than resist",
    "Create communication that helps stakeholders make better business decisions"
  ];

  // Schema for Persuasion Compass Framework Page
  const compassFrameworkSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Persuasion Compass: Ethical Executive Influence Framework for Business Leadership",
    "description": "Master the Persuasion Compass framework for ethical executive influence using ETHOS, PATHOS, LOGOS, and KAIROS to create authentic leadership persuasion that stakeholders welcome.",
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
      "@id": "https://mediaperformanceinsights.com/persuasion-compass-framework"
    },
    "keywords": "executive influence framework, ethical persuasion for leaders, business persuasion training, leadership influence skills, executive communication training, authentic business influence"
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
        title="The Persuasion Compass: Ethical Executive Influence Framework for Business Leadership"
        description="Master the Persuasion Compass framework for ethical executive influence using ETHOS, PATHOS, LOGOS, and KAIROS to create authentic leadership persuasion that stakeholders welcome."
        keywords="executive influence framework, ethical persuasion for leaders, business persuasion training, leadership influence skills, executive communication training, authentic business influence"
        schema={compassFrameworkSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiCompass} className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                The <span className="text-green-400">Persuasion</span> Compass
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Ethical Executive Influence Framework for Business Leadership
            </h2>
            <p className="text-lg text-charcoal-300 max-w-4xl mx-auto leading-relaxed">
              Master ETHOS, PATHOS, LOGOS, and KAIROS for Authentic Leadership Influence That Stakeholders Welcome
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
              The Persuasion Compass—ETHOS, PATHOS, LOGOS, and KAIROS working together—provides the foundational framework for ethical executive influence that serves both your business goals and stakeholders' genuine interests. This ancient wisdom, refined for modern business leadership, creates persuasive communication that stakeholders welcome rather than resist, essential for sustained executive success and organizational growth.
            </p>
            
            <div className="bg-green-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Ethical Influence for Modern Business Leadership
              </h3>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-4">
                The Persuasion Compass solves the influence dilemma that ethical business leaders face: how to persuade effectively without compromising integrity or stakeholder trust.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                The answer lies in understanding that the most powerful executive persuasion serves stakeholders' genuine business interests while achieving your legitimate organizational goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Compass Visualization */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8">The Four Directions of Effective Executive Influence</h2>
              <div className="relative">
                {/* Compass visualization */}
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 rounded-full border-4 border-green-200"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm">ETHOS</div>
                  </div>
                  <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm">PATHOS</div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm">LOGOS</div>
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2">
                    <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm">KAIROS</div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <SafeIcon icon={FiCompass} className="w-16 h-16 text-green-600" />
                  </div>
                </div>
              </div>
              <p className="text-lg text-charcoal-600 mt-6">
                Integration of all four elements creates irresistible executive influence
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Directions Detail */}
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
              The Four Directions of Effective Executive Influence
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Each direction represents a fundamental aspect of persuasion that, when combined, creates irresistible business influence that stakeholders welcome.
            </p>
          </motion.div>

          <div className="space-y-20">
            {compassDirections.map((direction, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${direction.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <SafeIcon icon={direction.icon} className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal-900">{direction.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-charcoal-600 leading-relaxed mb-6">{direction.description}</p>
                  <div className="bg-charcoal-100 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-charcoal-700 italic">{direction.businessContext}</p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-charcoal-50 rounded-xl p-8">
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-4">Key Business Elements:</h4>
                    <ul className="space-y-3">
                      {direction.elements.map((element, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${direction.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-charcoal-700">{element}</span>
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
              The Persuasion Compass enhances executive effectiveness across all critical business influence scenarios.
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

      {/* Integration Creates Mastery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-8 text-center">
              The Integration That Creates Executive Communication Mastery
            </h2>
            <div className="bg-green-50 rounded-xl p-8 mb-12">
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                The Persuasion Compass works through integration, not isolation. Master executive communicators don't choose between logic and emotion, between credibility and timing—they orchestrate all four elements to create irresistible influence that serves everyone involved in the business relationship.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                This integration creates what Aristotle called "the highest form of argument"—not winning through force or manipulation, but creating clarity that allows stakeholders to make their best business decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ethicalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-green-50 rounded-lg p-6"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-green-600 mt-1">✓</div>
                    <p className="text-charcoal-800">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Classical and Modern Influences */}
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
              Influenced by Classical Rhetoric and <span className="text-green-400">Modern Business Psychology</span>
            </h2>
            <p className="text-xl text-charcoal-200 max-w-3xl mx-auto">
              Built on timeless principles and enhanced with modern insights for today's business leaders and executive communication challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {classicalInfluences.map((influence, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <SafeIcon icon={influence.icon} className="w-12 h-12 text-green-400" />
                  <div>
                    <h3 className="text-xl font-bold">{influence.name}</h3>
                    <p className="text-green-300 text-sm">{influence.contribution}</p>
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
            <h3 className="text-2xl font-bold mb-4">Transforming Executive Influence</h3>
            <p className="text-lg text-charcoal-200 max-w-3xl mx-auto">
              When you master the Compass, you create executive influence that stakeholders welcome because it helps them make better business decisions, understand complex market situations more clearly, and take action that serves their authentic interests while achieving your legitimate organizational goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Master Ethical Executive Influence?
            </h2>
            <p className="text-xl text-green-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Learn how the Persuasion Compass completes your communication intelligence system alongside our other three frameworks for comprehensive executive effectiveness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
              >
                Schedule Your Influence Mastery Session
              </motion.a>
              <Link
                to="/frameworks"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Explore All Frameworks
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/fire-method-framework" className="text-green-200 hover:text-white transition-colors flex items-center space-x-1">
                <span>← Previous: FIRE Method</span>
              </Link>
              <Link to="/sam-framework" className="text-green-200 hover:text-white transition-colors flex items-center space-x-1">
                <span>Complete the Circle: SAM Framework</span>
                <SafeIcon icon={FiTarget} className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default PersuasionCompassFrameworkPage;