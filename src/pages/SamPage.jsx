import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiEye, FiLayers, FiTarget, FiStar, FiArrowRight, FiBook, FiUsers, FiZap, FiBrain } = FiIcons;

function SamPage() {
  const buckets = [
    {
      icon: FiLayers,
      title: "What Everyone Knows You Know",
      description: "Your established professional expertise and credentials that provide credibility and foundation.",
      color: "from-blue-500 to-blue-700",
      examples: ["Industry certifications", "Published work", "Speaking engagements", "Leadership roles"]
    },
    {
      icon: FiStar,
      title: "What Only You Know",
      description: "Unique insights and experiences that differentiate you from other leaders in your field.",
      color: "from-green-500 to-green-700",
      examples: ["Personal experiences", "Behind-the-scenes insights", "Unique perspectives", "Exclusive knowledge"]
    },
    {
      icon: FiZap,
      title: "What You Do Naturally",
      description: "Communication abilities you use instinctively—often your most powerful connection tools.",
      color: "from-orange-500 to-red-600",
      examples: ["Natural strengths", "Intuitive responses", "Unconscious competence", "Innate abilities"]
    },
    {
      icon: FiBrain,
      title: "What You Haven't Discovered Yet",
      description: "Potential for breakthrough moments that emerge in challenging situations.",
      color: "from-purple-500 to-purple-700",
      examples: ["Hidden talents", "Untapped potential", "Emergency capabilities", "Growth opportunities"]
    }
  ];

  const benefits = [
    "Access your complete expertise rather than just prepared talking points",
    "Maintain strategic messaging while sounding authentically like yourself",
    "Transform anxiety into confidence through comprehensive preparation",
    "Create deeper connections by drawing from your full knowledge base",
    "Respond to unexpected questions with authentic authority"
  ];

  // Schema for SAM Page
  const samSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Self-Awareness Matrix (SAM) | Media Performance Insights",
    "description": "Discover your complete knowledge toolkit with the Self-Awareness Matrix. Map your four buckets of knowledge for authentic, confident executive communication.",
    "publisher": {
      "@type": "Organization",
      "name": "Media Performance Insights"
    },
    "mainEntity": {
      "@type": "EducationalOccupationalProgram",
      "name": "The Self-Awareness Matrix (SAM)",
      "description": "A framework for mapping executive knowledge across four distinct categories for enhanced communication effectiveness"
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
        title="The Self-Awareness Matrix (SAM) | Media Performance Insights"
        description="Discover your complete knowledge toolkit with the Self-Awareness Matrix. Map your four buckets of knowledge for authentic, confident executive communication."
        keywords="self-awareness matrix, executive communication, knowledge mapping, authentic leadership, media training, communication confidence, SAM framework"
        schema={samSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiEye} className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                The <span className="text-purple-400">Self-Awareness</span> Matrix
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Your Complete Knowledge Toolkit
            </p>
            <p className="text-lg text-charcoal-300 max-w-3xl mx-auto leading-relaxed">
              The Self-Awareness Matrix maps the four distinct buckets of knowledge you bring to every executive communication situation. While most leaders prepare using only their obvious expertise, SAM reveals your complete toolkit for authentic, confident communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Knowledge Buckets */}
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
              Your Four Knowledge Buckets
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Each bucket represents a different type of knowledge and capability that contributes to your communication effectiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {buckets.map((bucket, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-charcoal-200 hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${bucket.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${bucket.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={bucket.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{bucket.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed mb-6">{bucket.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-charcoal-500">EXAMPLES:</p>
                    <ul className="text-sm text-charcoal-600 space-y-1">
                      {bucket.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-charcoal-400 rounded-full"></div>
                          <span>{example}</span>
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

      {/* Why SAM Changes Everything */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-8 text-center">
              Why SAM Changes Everything
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                SAM solves the preparation paradox: why successful executives feel unprepared despite extensive knowledge. The answer isn't lack of expertise—it's lack of awareness about the different types of knowledge you possess.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                When you understand your complete toolkit, communication becomes more authentic, situation reading becomes clearer, and influence becomes more natural. You maintain strategic messaging while sounding like yourself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-purple-50 rounded-lg p-6"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-purple-600 mt-1">✓</div>
                    <p className="text-charcoal-800">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Foundation Framework */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Foundation <span className="text-purple-400">Framework</span>
            </h2>
            <p className="text-xl text-charcoal-200 leading-relaxed mb-8">
              SAM integrates insights from cognitive psychology, educational theory, and executive coaching research. It transforms traditional media training from message discipline into authentic knowledge access, creating the foundation that makes every other communication skill more effective.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <SafeIcon icon={FiBrain} className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Cognitive Psychology</h3>
                  <p className="text-sm text-charcoal-300">Understanding how knowledge is stored and accessed</p>
                </div>
                <div className="text-center">
                  <SafeIcon icon={FiBook} className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Educational Theory</h3>
                  <p className="text-sm text-charcoal-300">Learning frameworks for knowledge organization</p>
                </div>
                <div className="text-center">
                  <SafeIcon icon={FiUsers} className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Executive Coaching</h3>
                  <p className="text-sm text-charcoal-300">Leadership development research and practice</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation and CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Map Your Complete Knowledge?
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Discover how SAM works with the other three frameworks to create your complete communication intelligence system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
              >
                Schedule Your SAM Analysis
              </motion.a>
              <Link
                to="/frameworks"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Explore All Frameworks
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/storytelling-triangle" className="text-purple-200 hover:text-white transition-colors">
                Next: Storytelling Triangle →
              </Link>
              <Link to="/fire-method" className="text-purple-200 hover:text-white transition-colors">
                FIRE Method →
              </Link>
              <Link to="/persuasion-compass" className="text-purple-200 hover:text-white transition-colors">
                Persuasion Compass →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default SamPage;