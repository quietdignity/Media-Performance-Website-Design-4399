import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCompass, FiAward, FiHeart, FiBrain, FiClock, FiUsers, FiTrendingUp, FiBookOpen, FiMic } = FiIcons;

function PersuasionCompassPage() {
  const directions = [
    {
      icon: FiAward,
      title: "ETHOS: Credibility and Character",
      description: "Your expertise, competence, and authentic character create the foundation for all influence.",
      color: "from-blue-500 to-blue-700",
      elements: [
        "Professional expertise and credentials",
        "Demonstrated competence and results",
        "Authentic character and integrity",
        "Trustworthy reputation and track record"
      ]
    },
    {
      icon: FiHeart,
      title: "PATHOS: Emotional Connection",
      description: "Shared values and compelling stories that help people connect hearts with minds for better decisions.",
      color: "from-red-500 to-red-700",
      elements: [
        "Shared values and common ground",
        "Compelling personal narratives",
        "Emotional resonance and empathy",
        "Inspirational vision and purpose"
      ]
    },
    {
      icon: FiBrain,
      title: "LOGOS: Logic and Evidence",
      description: "Clear reasoning and solid evidence that provide the framework people need to feel confident in choices.",
      color: "from-green-500 to-green-700",
      elements: [
        "Clear logical reasoning",
        "Solid evidence and data",
        "Structured arguments",
        "Factual support and proof points"
      ]
    },
    {
      icon: FiClock,
      title: "KAIROS: Perfect Timing",
      description: "Understanding when people are ready to hear your message and when context supports your goals.",
      color: "from-purple-500 to-purple-700",
      elements: [
        "Optimal timing for message delivery",
        "Context-appropriate communication",
        "Audience readiness assessment",
        "Strategic moment identification"
      ]
    }
  ];

  const influences = [
    {
      name: "Aristotle",
      contribution: "Classical rhetorical principles",
      icon: FiBookOpen
    },
    {
      name: "Robert Cialdini",
      contribution: "Modern influence psychology",
      icon: FiBrain
    },
    {
      name: "Dale Carnegie",
      contribution: "Relationship-building insights",
      icon: FiUsers
    },
    {
      name: "Steve Jobs",
      contribution: "Presentation mastery principles",
      icon: FiMic
    }
  ];

  const benefits = [
    "Create irresistible influence that serves everyone involved",
    "Build lasting relationships through ethical persuasion",
    "Achieve sustainable results that benefit all stakeholders",
    "Maintain integrity while influencing effectively",
    "Transform persuasion from sales into service"
  ];

  // Schema for Persuasion Compass Page
  const compassSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Persuasion Compass | Media Performance Insights",
    "description": "Master ethical influence with the Persuasion Compass. Learn to orchestrate ETHOS, PATHOS, LOGOS, and KAIROS for persuasion people welcome.",
    "publisher": {
      "@type": "Organization",
      "name": "Media Performance Insights"
    },
    "mainEntity": {
      "@type": "EducationalOccupationalProgram",
      "name": "The Persuasion Compass",
      "description": "A framework for ethical influence using ETHOS, PATHOS, LOGOS, and KAIROS"
    }
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
        title="The Persuasion Compass | Media Performance Insights"
        description="Master ethical influence with the Persuasion Compass. Learn to orchestrate ETHOS, PATHOS, LOGOS, and KAIROS for persuasion people welcome."
        keywords="persuasion compass, ethical influence, ethos pathos logos kairos, executive persuasion, influence psychology, leadership communication, aristotelian rhetoric"
        schema={compassSchema}
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
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Ethical Influence That People Welcome
            </p>
            <p className="text-lg text-charcoal-300 max-w-3xl mx-auto leading-relaxed">
              The Persuasion Compass—ETHOS, PATHOS, LOGOS, and KAIROS working together—provides the framework for ethical influence that serves both your goals and others' genuine interests. This ancient wisdom, refined for modern leadership, creates persuasion people welcome rather than resist.
            </p>
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8">The Four Directions of Influence</h2>
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
              The Four Directions of Influence
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Each direction represents a fundamental aspect of persuasion that, when combined, creates irresistible influence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {directions.map((direction, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-charcoal-200 hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${direction.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${direction.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={direction.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{direction.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed mb-6">{direction.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-charcoal-500">KEY ELEMENTS:</p>
                    <ul className="text-sm text-charcoal-600 space-y-2">
                      {direction.elements.map((element, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${direction.color} rounded-full`}></div>
                          <span>{element}</span>
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

      {/* Integration Creates Mastery */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-8">
              Integration Creates Mastery
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                The Compass works through integration, not isolation. Master communicators orchestrate all four elements to create irresistible influence that serves everyone involved.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                When aligned, persuasion feels like service rather than sales. People welcome your influence because it genuinely serves their interests while achieving your legitimate goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
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
              Classical and Modern <span className="text-green-400">Influences</span>
            </h2>
            <p className="text-xl text-charcoal-200 max-w-3xl mx-auto">
              Built on timeless principles and enhanced with modern insights for today's leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {influences.map((influence, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <SafeIcon icon={influence.icon} className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{influence.name}</h3>
                <p className="text-sm text-charcoal-300">{influence.contribution}</p>
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
            <h3 className="text-2xl font-bold mb-4">Ethical Influence for Modern Leaders</h3>
            <p className="text-lg text-charcoal-200 max-w-3xl mx-auto">
              The Compass solves the persuasion dilemma ethical leaders face: how to influence effectively without compromising integrity. The most powerful persuasion serves others' genuine interests while achieving legitimate goals, building lasting relationships and sustainable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation and CTA */}
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
              Ready to Master Ethical Influence?
            </h2>
            <p className="text-xl text-green-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Learn how the Persuasion Compass completes your communication intelligence system alongside our other three frameworks.
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
              <Link to="/fire-method" className="text-green-200 hover:text-white transition-colors">
                ← Previous: FIRE Method
              </Link>
              <Link to="/sam" className="text-green-200 hover:text-white transition-colors">
                SAM Framework →
              </Link>
              <Link to="/storytelling-triangle" className="text-green-200 hover:text-white transition-colors">
                Storytelling Triangle →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default PersuasionCompassPage;