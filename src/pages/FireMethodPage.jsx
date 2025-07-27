import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiSearch, FiEye, FiRefreshCw, FiPlay, FiThermometer, FiTarget, FiShield, FiTrendingUp } = FiIcons;

function FireMethodPage() {
  const steps = [
    {
      icon: FiSearch,
      letter: "F",
      title: "FIND: Emotional Temperature",
      description: "Quickly assess the climate—analytical, conversational, urgent, skeptical, or supportive—through tone, body language, and energy cues.",
      color: "from-red-500 to-red-700",
      techniques: [
        "Read vocal tone and pace",
        "Observe body language cues",
        "Assess energy levels",
        "Identify emotional undercurrents"
      ]
    },
    {
      icon: FiEye,
      letter: "I",
      title: "IDENTIFY: Perfect Entry Points",
      description: "Spot opportunities to add value based on the temperature you've detected.",
      color: "from-orange-500 to-orange-700",
      techniques: [
        "Find natural conversation openings",
        "Recognize unmet needs",
        "Spot value-add opportunities",
        "Identify decision-making moments"
      ]
    },
    {
      icon: FiRefreshCw,
      letter: "R",
      title: "REHEARSE: Real-Time Adaptation",
      description: "Mentally prepare your response approach before speaking, ensuring smooth delivery.",
      color: "from-yellow-500 to-orange-600",
      techniques: [
        "Quick mental preparation",
        "Adjust tone and approach",
        "Plan key message points",
        "Prepare for potential responses"
      ]
    },
    {
      icon: FiPlay,
      letter: "E",
      title: "EXECUTE: Confident Delivery",
      description: "Trust your assessment and deliver with full commitment, matching energy while serving goals.",
      color: "from-green-500 to-green-700",
      techniques: [
        "Deliver with confidence",
        "Match appropriate energy",
        "Stay true to your message",
        "Monitor and adjust as needed"
      ]
    }
  ];

  const influences = [
    {
      name: "Emotional Intelligence",
      contribution: "Research on reading and managing emotions",
      icon: FiThermometer
    },
    {
      name: "Improvisational Theater",
      contribution: "Real-time adaptation techniques",
      icon: FiZap
    },
    {
      name: "Sales Psychology",
      contribution: "Understanding buyer behavior and timing",
      icon: FiTarget
    },
    {
      name: "Crisis Communication",
      contribution: "High-stakes communication tactics",
      icon: FiShield
    }
  ];

  const benefits = [
    "Dissolve resistance by addressing underlying concerns before they surface",
    "Create conditions that make positive outcomes more likely",
    "Transform from reactive communication to proactive influence",
    "Maintain authenticity while adapting to any situation",
    "Build trust through situational awareness and appropriate response"
  ];

  // Schema for FIRE Method Page
  const fireSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The FIRE Method | Media Performance Insights",
    "description": "Master real-time adaptation with the FIRE Method. Learn to read any situation in 90 seconds and adapt your approach for maximum effectiveness.",
    "publisher": {
      "@type": "Organization",
      "name": "Media Performance Insights"
    },
    "mainEntity": {
      "@type": "EducationalOccupationalProgram",
      "name": "The FIRE Method",
      "description": "A framework for real-time adaptation using FIND, IDENTIFY, REHEARSE, EXECUTE"
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
        title="The FIRE Method | Media Performance Insights"
        description="Master real-time adaptation with the FIRE Method. Learn to read any situation in 90 seconds and adapt your approach for maximum effectiveness."
        keywords="FIRE method, real-time adaptation, situational awareness, executive communication, emotional intelligence, communication flexibility, leadership presence"
        schema={fireSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiZap} className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                The <span className="text-orange-400">FIRE</span> Method
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Real-Time Adaptation Mastery
            </p>
            <p className="text-lg text-charcoal-300 max-w-3xl mx-auto leading-relaxed">
              The FIRE Method—FIND, IDENTIFY, REHEARSE, EXECUTE—gives you the power to read any situation within 90 seconds and adapt your approach for maximum effectiveness. This isn't about changing who you are; it's about being the right version of yourself for each moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The FIRE Acronym */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8">The FIRE Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-2xl">{step.letter}</span>
                    </div>
                    <h3 className="font-bold text-charcoal-900 text-lg">{step.title.split(':')[0]}</h3>
                    <p className="text-sm text-charcoal-600">{step.title.split(':')[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Steps Detail */}
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
              The Four Steps of Dynamic Response
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Each step builds on the previous one to create seamless, effective adaptation in any communication situation.
            </p>
          </motion.div>

          <div className="space-y-16">
            {steps.map((step, index) => (
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
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                      <SafeIcon icon={step.icon} className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${step.color} text-white rounded-full font-bold text-sm mb-2`}>
                        STEP {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-charcoal-600 leading-relaxed mb-6">{step.description}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-charcoal-50 rounded-xl p-8">
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-4">Key Techniques:</h4>
                    <ul className="space-y-3">
                      {step.techniques.map((technique, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-br ${step.color} rounded-full`}></div>
                          <span className="text-charcoal-700">{technique}</span>
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

      {/* The Thermostat Principle */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
              <SafeIcon icon={FiThermometer} className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-8">
                The Thermostat Principle
              </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                Most people are thermometers—they measure emotional temperature and react. FIRE teaches you to be a thermostat—to influence and set the climate rather than just respond to it.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                This transforms communication from reactive to proactive, giving you the power to create the conditions for success rather than simply adapting to whatever you encounter.
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
                  className="bg-orange-50 rounded-lg p-6"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-orange-600 mt-1">✓</div>
                    <p className="text-charcoal-800">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diverse Influences */}
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
              Diverse <span className="text-orange-400">Influences</span>
            </h2>
            <p className="text-xl text-charcoal-200 max-w-3xl mx-auto">
              FIRE integrates insights from multiple disciplines to create a robust system for any communication challenge.
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
                <SafeIcon icon={influence.icon} className="w-12 h-12 text-orange-400 mx-auto mb-4" />
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
            className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Beyond Traditional Training</h3>
            <p className="text-lg text-charcoal-200 max-w-3xl mx-auto">
              Most communication training teaches polish and confidence. FIRE makes you effective by first making you perceptive. You learn to dissolve resistance by addressing underlying concerns and create conditions that make positive outcomes more likely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation and CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Master Real-Time Adaptation?
            </h2>
            <p className="text-xl text-orange-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Learn how the FIRE Method integrates with our other frameworks to create complete communication intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
              >
                Schedule Your FIRE Training
              </motion.a>
              <Link
                to="/frameworks"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Explore All Frameworks
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/storytelling-triangle" className="text-orange-200 hover:text-white transition-colors">
                ← Previous: Storytelling Triangle
              </Link>
              <Link to="/persuasion-compass" className="text-orange-200 hover:text-white transition-colors">
                Next: Persuasion Compass →
              </Link>
              <Link to="/sam" className="text-orange-200 hover:text-white transition-colors">
                SAM Framework →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default FireMethodPage;