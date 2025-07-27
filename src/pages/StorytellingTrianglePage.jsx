import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTriangle, FiUser, FiUsers, FiClock, FiStar, FiHeart, FiTarget, FiBookOpen } = FiIcons;

function StorytellingTrianglePage() {
  const elements = [
    {
      icon: FiUser,
      title: "YOU: Personal Experience",
      description: "Genuine leadership moments from your authentic journey—not corporate messaging, but your real experience.",
      color: "from-blue-500 to-blue-700",
      details: [
        "Authentic personal moments",
        "Real leadership challenges",
        "Genuine learning experiences",
        "Personal transformation stories"
      ]
    },
    {
      icon: FiUsers,
      title: "THEM: Audience Needs",
      description: "Understanding what stakeholders truly need to hear, adjusting your story emphasis accordingly.",
      color: "from-green-500 to-green-700",
      details: [
        "Stakeholder challenges",
        "Audience pain points",
        "What they need to hear",
        "Their success metrics"
      ]
    },
    {
      icon: FiClock,
      title: "NOW: Current Context",
      description: "Making your experience relevant to today's challenges and opportunities.",
      color: "from-orange-500 to-red-600",
      details: [
        "Current market conditions",
        "Immediate challenges",
        "Timely opportunities",
        "Present moment relevance"
      ]
    }
  ];

  const influences = [
    {
      name: "Simon Sinek",
      contribution: "Start with Why methodology",
      icon: FiTarget
    },
    {
      name: "Pixar",
      contribution: "Storytelling principles",
      icon: FiStar
    },
    {
      name: "Joseph Campbell",
      contribution: "Hero's Journey framework",
      icon: FiBookOpen
    },
    {
      name: "Jordan Peterson",
      contribution: "Psychological insights",
      icon: FiHeart
    }
  ];

  const benefits = [
    "Connect genuine experience with stakeholder needs in perfect timing",
    "Create leadership presence based on serving others through authentic sharing",
    "Transform communication from delivering prepared messages to creating meaningful moments",
    "Build trust through vulnerability while maintaining professional credibility",
    "Make complex leadership lessons accessible through personal narrative"
  ];

  // Schema for Storytelling Triangle Page
  const triangleSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Storytelling Triangle | Media Performance Insights",
    "description": "Master authentic connection through personal truth with the Storytelling Triangle. Transform experience into compelling narratives that serve stakeholder needs.",
    "publisher": {
      "@type": "Organization",
      "name": "Media Performance Insights"
    },
    "mainEntity": {
      "@type": "EducationalOccupationalProgram",
      "name": "The Storytelling Triangle",
      "description": "A framework for authentic connection through strategic storytelling using YOU + THEM + NOW"
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
        title="The Storytelling Triangle | Media Performance Insights"
        description="Master authentic connection through personal truth with the Storytelling Triangle. Transform experience into compelling narratives that serve stakeholder needs."
        keywords="storytelling triangle, authentic storytelling, executive communication, narrative leadership, personal branding, story strategy, leadership stories"
        schema={triangleSchema}
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
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Authentic Connection Through Personal Truth
            </p>
            <p className="text-lg text-charcoal-300 max-w-3xl mx-auto leading-relaxed">
              The Storytelling Triangle—YOU plus THEM plus NOW equals YOUR MOMENT—transforms personal experience into compelling narratives that serve stakeholder needs at exactly the right time.
            </p>
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8">The Triangle Formula</h2>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-2xl font-bold text-charcoal-800">
                <div className="bg-blue-100 px-6 py-3 rounded-lg">YOU</div>
                <div className="text-charcoal-400">+</div>
                <div className="bg-green-100 px-6 py-3 rounded-lg">THEM</div>
                <div className="text-charcoal-400">+</div>
                <div className="bg-orange-100 px-6 py-3 rounded-lg">NOW</div>
                <div className="text-charcoal-400">=</div>
                <div className="bg-gold-100 px-6 py-3 rounded-lg text-gold-700">YOUR MOMENT</div>
              </div>
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
              The Three Essential Elements
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Each element of the triangle serves a specific purpose in creating authentic, impactful communication.
            </p>
          </motion.div>

          <div className="space-y-12">
            {elements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className={`w-20 h-20 bg-gradient-to-br ${element.color} rounded-xl flex items-center justify-center mb-6`}>
                    <SafeIcon icon={element.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4">{element.title}</h3>
                  <p className="text-lg text-charcoal-600 leading-relaxed mb-6">{element.description}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-charcoal-50 rounded-xl p-8">
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-4">Key Components:</h4>
                    <ul className="space-y-3">
                      {element.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-br ${element.color} rounded-full`}></div>
                          <span className="text-charcoal-700">{detail}</span>
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

      {/* Beyond Generic Storytelling */}
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
              Beyond Generic Storytelling
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                Most storytelling training focuses on narrative structure. The Triangle teaches strategic story selection—identifying which personal experiences serve others' needs at the perfect moment.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                It solves the authenticity challenge: how to be genuine without oversharing, personal without losing credibility.
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
                  className="bg-blue-50 rounded-lg p-6"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600 mt-1">✓</div>
                    <p className="text-charcoal-800">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Master Storyteller <span className="text-blue-400">Influences</span>
            </h2>
            <p className="text-xl text-charcoal-200 max-w-3xl mx-auto">
              The Triangle integrates wisdom from the world's most effective communicators and storytellers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {influences.map((influence, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <SafeIcon icon={influence.icon} className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{influence.name}</h3>
                <p className="text-sm text-charcoal-300">{influence.contribution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation and CTA */}
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
              Ready to Master Authentic Storytelling?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Learn how the Storytelling Triangle works with our other frameworks to create compelling, authentic communication.
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
              <Link to="/sam" className="text-blue-200 hover:text-white transition-colors">
                ← Previous: SAM Framework
              </Link>
              <Link to="/fire-method" className="text-blue-200 hover:text-white transition-colors">
                Next: FIRE Method →
              </Link>
              <Link to="/persuasion-compass" className="text-blue-200 hover:text-white transition-colors">
                Persuasion Compass →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default StorytellingTrianglePage;