import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTriangle, FiCompass, FiZap, FiEye, FiArrowRight } = FiIcons;

function FrameworksPage() {
  const frameworks = [
    {
      icon: FiEye,
      name: "The Self-Awareness Matrix (SAM)",
      subtitle: "Your Foundation",
      description: "Maps your four buckets of knowledge—from obvious expertise to hidden capabilities",
      why: "Most leaders only access 25% of their communication toolkit",
      result: "Authentic confidence that comes from knowing exactly what you bring to every conversation",
      color: "from-purple-500 to-purple-700",
      id: "sam",
      link: "/sam",
      deepLink: "/sam-framework"
    },
    {
      icon: FiTriangle,
      name: "The Storytelling Triangle",
      subtitle: "Your Connection",
      description: "Transforms personal experience into compelling narratives using YOU + THEM + NOW",
      why: "Stories create lasting influence when they serve others' genuine needs",
      result: "Authentic leadership presence that people remember and trust",
      color: "from-blue-500 to-blue-700",
      id: "triangle",
      link: "/storytelling-triangle",
      deepLink: "/storytelling-triangle-framework"
    },
    {
      icon: FiZap,
      name: "The FIRE Method",
      subtitle: "Your Adaptation",
      description: "Read any room in 90 seconds and adapt your approach through FIND, IDENTIFY, REHEARSE, EXECUTE",
      why: "The same message can succeed or fail based on real-time situational awareness",
      result: "Dynamic communication that works with any audience, in any situation",
      color: "from-orange-500 to-red-600",
      id: "fire",
      link: "/fire-method",
      deepLink: "/fire-method-framework"
    },
    {
      icon: FiCompass,
      name: "The Persuasion Compass",
      subtitle: "Your Influence",
      description: "Orchestrates ETHOS, PATHOS, LOGOS, and KAIROS for ethical influence",
      why: "Sustainable persuasion serves others' interests while achieving your goals",
      result: "Influential leadership that people welcome rather than resist",
      color: "from-green-500 to-green-700",
      id: "compass",
      link: "/persuasion-compass",
      deepLink: "/persuasion-compass-framework"
    }
  ];

  const integration = [
    "SAM provides your knowledge foundation",
    "The Triangle helps you share that knowledge compellingly",
    "FIRE helps you adapt your sharing to each situation",
    "The Compass ensures your communication builds lasting influence"
  ];

  const advantages = [
    "Access your complete expertise rather than just prepared talking points",
    "Connect authentically with any stakeholder group",
    "Adapt dynamically to unexpected questions or hostile situations",
    "Influence ethically in ways that serve everyone's genuine interests",
    "Handle any media challenge with genuine confidence"
  ];

  // Schema for Frameworks Page
  const frameworksSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Four Core Frameworks | Media Performance Insights",
    "description": "Discover our integrated system for executive communication mastery - four powerful frameworks that create authentic, effective communication in any situation.",
    "publisher": {
      "@type": "Organization",
      "name": "Media Performance Insights"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": frameworks.map((framework, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": framework.name,
        "description": framework.description
      }))
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
        title="Our Four Core Frameworks | Media Performance Insights"
        description="Discover our integrated system for executive communication mastery - four powerful frameworks that create authentic, effective communication in any situation."
        keywords="communication frameworks, executive communication, leadership communication, storytelling triangle, persuasion compass, FIRE method, self-awareness matrix, media training"
        schema={frameworksSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gold-400">Four Core</span> Frameworks
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed">
              The Integrated System for Executive Communication Mastery
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
              Every great building needs a solid foundation. Every master craftsperson relies on essential tools. Every field of expertise has core principles that separate beginners from professionals.
            </p>
            <p className="text-xl text-charcoal-700 leading-relaxed mb-12">
              The Modern Fire's four frameworks create the integrated foundation for authentic, effective communication in any situation you'll encounter as a leader.
            </p>

            <div className="bg-charcoal-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-6">
                Why Four Frameworks?
              </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                Most communication training focuses on isolated skills—better presentations, clearer writing, more confident speaking. But real communication mastery requires integrated capabilities that work together seamlessly, like the cornerstones of a building that create strength through their combination.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                The four frameworks address the complete landscape of communication effectiveness, giving you everything you need to connect authentically, influence ethically, and create outcomes that serve everyone involved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Complete System */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              The Complete System
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                id={framework.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-charcoal-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${framework.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-8 h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <SafeIcon icon={framework.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal-900">{framework.name}</h3>
                      <p className="text-lg font-medium text-primary-600">{framework.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-charcoal-500">WHAT IT DOES</p>
                      <p className="text-lg text-charcoal-800">{framework.description}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-charcoal-500">WHY IT MATTERS</p>
                      <p className="text-lg text-charcoal-800">{framework.why}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-charcoal-500">THE RESULT</p>
                      <p className="text-lg text-charcoal-800">{framework.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <Link
                      to={framework.link}
                      className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      <span>Quick Overview</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      to={framework.deepLink}
                      className="flex items-center text-charcoal-700 font-semibold hover:text-primary-600 transition-colors"
                    >
                      <span>Complete Framework Guide</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-8 text-center">
              How They Work Together
            </h2>
            <p className="text-xl text-charcoal-700 leading-relaxed mb-12">
              These aren't four separate tools—they're one integrated communication intelligence system.
            </p>

            <div className="bg-primary-50 rounded-xl p-8 mb-16">
              <ul className="space-y-6">
                {integration.map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary-700">{index + 1}</span>
                    </div>
                    <p className="text-lg text-charcoal-800">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xl text-charcoal-700 leading-relaxed mb-6">
              Each framework informs the others. Each decision impacts all the others. Each skill reinforces all the others.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Integration Advantage */}
      <section className="py-16 bg-charcoal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Integration <span className="text-gold-400">Advantage</span>
            </h2>
            <p className="text-xl text-charcoal-200 leading-relaxed mb-12">
              When you master all four frameworks working together, you develop what we call communication intelligence—the ability to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-green-400 mt-1">✓</div>
                    <p className="text-lg text-charcoal-100">{advantage}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-gold-500 to-gold-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Your Next Step
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Ready to master the complete system? Schedule a consultation to learn how these frameworks can transform your communication effectiveness.
            </p>

            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-gold-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-50 transition-colors shadow-lg"
            >
              <span>Schedule Your Consultation</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default FrameworksPage;