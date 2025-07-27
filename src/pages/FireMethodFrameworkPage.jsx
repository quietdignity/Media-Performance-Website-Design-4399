import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiSearch, FiEye, FiRefreshCw, FiPlay, FiThermometer, FiTarget, FiShield, FiTrendingUp, FiArrowRight } = FiIcons;

function FireMethodFrameworkPage() {
  const fireSteps = [
    {
      icon: FiSearch,
      letter: "F",
      title: "FIND: Emotional Temperature Assessment",
      description: "Every business communication situation has an emotional climate—analytical boardroom discussions, conversational team meetings, urgent crisis communications, skeptical media interviews, supportive investor presentations. Your job as an executive is to quickly assess this temperature through tone, body language, energy level, and behavioral cues.",
      color: "from-red-500 to-red-700",
      techniques: [
        "Read vocal tone, pace, and inflection patterns",
        "Observe body language and positioning cues",
        "Assess overall energy levels and engagement",
        "Identify emotional undercurrents and tensions",
        "Recognize decision-making readiness signals"
      ],
      businessContext: "The temperature isn't good or bad; it's strategic information that guides your entire leadership communication approach."
    },
    {
      icon: FiEye,
      letter: "I",
      title: "IDENTIFY: Perfect Entry Points for Executive Influence",
      description: "Once you understand the emotional temperature, identify opportunities to add executive value and demonstrate leadership. In analytical business situations, look for moments to share unique strategic insights. In conversational settings, find opportunities for authentic leadership connection.",
      color: "from-orange-500 to-orange-700",
      techniques: [
        "Find natural conversation openings for value-add",
        "Recognize unmet stakeholder needs and concerns",
        "Spot decision-making moments and influence opportunities",
        "Identify moments to elevate business conversation",
        "Recognize when to lead vs. when to support"
      ],
      businessContext: "Entry points are moments when you can elevate the business conversation rather than just participate in standard corporate dialogue."
    },
    {
      icon: FiRefreshCw,
      letter: "R",
      title: "REHEARSE: Real-Time Leadership Adaptation",
      description: "This isn't stopping to practice—it's mentally preparing your executive response approach before you speak. If the temperature is analytical, prepare to lead with credibility and add strategic insights. If it's conversational, prepare for appropriate personal leadership sharing.",
      color: "from-yellow-500 to-orange-600",
      techniques: [
        "Quick mental preparation of key message points",
        "Adjust tone and approach to match context",
        "Plan strategic message delivery sequence",
        "Prepare for potential stakeholder responses",
        "Align body language with intended message"
      ],
      businessContext: "Quick mental rehearsal prevents awkward transitions and ensures smooth executive presence delivery."
    },
    {
      icon: FiPlay,
      letter: "E",
      title: "EXECUTE: Confident Executive Delivery",
      description: "Once you've assessed the temperature, identified entry points, and rehearsed your approach, execute with full executive confidence. Don't second-guess yourself mid-response during critical business moments. Trust your assessment and deliver accordingly.",
      color: "from-green-500 to-green-700",
      techniques: [
        "Deliver with authentic executive confidence",
        "Match stakeholder energy while maintaining leadership",
        "Stay true to core message and business objectives",
        "Monitor and adjust based on real-time feedback",
        "Maintain composure under pressure"
      ],
      businessContext: "Match stakeholder energy while serving both your leadership goals and their business needs."
    }
  ];

  const disciplineInfluences = [
    {
      name: "Emotional Intelligence Research",
      contribution: "Understanding how emotions drive business decision-making",
      description: "Research showing how emotional states affect stakeholder receptivity and decision-making in business contexts",
      icon: FiThermometer
    },
    {
      name: "Improvisational Theater",
      contribution: "Real-time adaptation techniques for dynamic communication",
      description: "Techniques for reading and responding to audience energy while maintaining authentic presence",
      icon: FiZap
    },
    {
      name: "Sales Psychology",
      contribution: "Understanding buyer states and decision-making timing",
      description: "Insights into reading and responding to stakeholder readiness for influence and persuasion",
      icon: FiTarget
    },
    {
      name: "Crisis Communication",
      contribution: "High-stakes communication tactics and de-escalation",
      description: "Strategies for maintaining effectiveness and building trust during challenging business situations",
      icon: FiShield
    }
  ];

  const businessApplications = [
    {
      title: "Media Interviews",
      description: "Read journalist and audience temperature to adapt your message delivery for maximum impact and positive coverage, transforming potentially hostile situations into opportunities."
    },
    {
      title: "Board Presentations",
      description: "Assess board member engagement and concerns to adjust your strategic presentation in real-time, ensuring key messages resonate with decision-makers."
    },
    {
      title: "Investor Relations",
      description: "Gauge investor sentiment and readiness to adapt your financial messaging and strategic vision for optimal stakeholder confidence and support."
    },
    {
      title: "Crisis Management",
      description: "Quickly assess stakeholder emotional state during crisis situations to deliver appropriate leadership communication that builds confidence and trust."
    },
    {
      title: "Team Leadership",
      description: "Read team dynamics and morale to adapt your leadership communication style for maximum engagement and organizational effectiveness."
    },
    {
      title: "Customer Presentations",
      description: "Assess customer readiness and concerns to adapt your value proposition and business case for optimal sales and relationship outcomes."
    }
  ];

  const executiveBenefits = [
    "Dissolve resistance by addressing underlying business concerns before they surface",
    "Create conditions that make positive business outcomes more likely",
    "Transform from reactive corporate messaging to proactive leadership influence",
    "Maintain authentic executive presence while adapting to any business situation",
    "Build stakeholder trust through situational awareness and appropriate response",
    "Elevate business conversations rather than just participating in them",
    "Demonstrate executive presence through perceptive leadership adaptation"
  ];

  // Schema for FIRE Method Framework Page
  const fireFrameworkSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The FIRE Method: Real-Time Executive Communication Adaptation for Any Business Situation",
    "description": "Master the FIRE Method for executive communication - read any business situation in 90 seconds and adapt your leadership approach for maximum impact in media interviews and stakeholder meetings.",
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
      "@id": "https://mediaperformanceinsights.com/fire-method-framework"
    },
    "keywords": "executive communication adaptation, business communication training, leadership communication skills, media training for executives, real-time communication, executive presence training"
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
        title="The FIRE Method: Real-Time Executive Communication Adaptation for Any Business Situation"
        description="Master the FIRE Method for executive communication - read any business situation in 90 seconds and adapt your leadership approach for maximum impact in media interviews and stakeholder meetings."
        keywords="executive communication adaptation, business communication training, leadership communication skills, media training for executives, real-time communication, executive presence training"
        schema={fireFrameworkSchema}
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
            <h2 className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Real-Time Executive Communication Adaptation for Any Business Situation
            </h2>
            <p className="text-lg text-charcoal-300 max-w-4xl mx-auto leading-relaxed">
              Read Any Room in 90 Seconds and Adapt Your Leadership Communication for Maximum Impact
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
              The FIRE Method—FIND, IDENTIFY, REHEARSE, EXECUTE—gives business executives the power to read any communication situation within 90 seconds and adapt their leadership approach for maximum effectiveness. This isn't about changing your authentic executive presence; it's about being the most effective version of yourself for each critical business moment, whether in media interviews, board presentations, or stakeholder meetings.
            </p>
            
            <div className="bg-orange-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                The Executive Thermostat Principle
              </h3>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-4">
                Most business leaders are thermometers—they measure the emotional temperature and react to it. FIRE teaches executives to be thermostats—to influence and set the emotional climate rather than just respond to it.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                This shift from reactive to proactive executive communication creates dramatically different business outcomes and leadership positioning.
              </p>
            </div>
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8">The FIRE Method for Executive Communication</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {fireSteps.map((step, index) => (
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
              The Four Steps of Dynamic Executive Communication
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Each step builds on the previous one to create seamless, effective adaptation in any business communication situation.
            </p>
          </motion.div>

          <div className="space-y-20">
            {fireSteps.map((step, index) => (
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
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
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
                  <div className="bg-charcoal-100 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-charcoal-700 italic">{step.businessContext}</p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-charcoal-50 rounded-xl p-8">
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-4">Executive Techniques:</h4>
                    <ul className="space-y-3">
                      {step.techniques.map((technique, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-br ${step.color} rounded-full mt-2 flex-shrink-0`}></div>
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
              The FIRE Method enhances executive effectiveness across all critical business communication scenarios.
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

      {/* Executive Benefits */}
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
              Beyond Traditional Executive Communication Training
            </h2>
            <div className="bg-orange-50 rounded-xl p-8 mb-12">
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                Most business communication training teaches executives to be more polished, confident, and persuasive. FIRE makes leaders more effective by first making them more perceptive to stakeholder needs and business contexts.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                This transforms executive communication from combative corporate messaging to collaborative business dialogue, from broadcasting company talking points to genuine stakeholder engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {executiveBenefits.map((benefit, index) => (
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
              Influenced by Multiple <span className="text-orange-400">Executive Communication Disciplines</span>
            </h2>
            <p className="text-xl text-charcoal-200 max-w-3xl mx-auto">
              FIRE integrates insights from multiple disciplines to create a robust system for any executive communication challenge, from hostile media interviews to complex board presentations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {disciplineInfluences.map((influence, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <SafeIcon icon={influence.icon} className="w-12 h-12 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold">{influence.name}</h3>
                    <p className="text-orange-300 text-sm">{influence.contribution}</p>
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
            <h3 className="text-2xl font-bold mb-4">Creating Conditions for Communication Success</h3>
            <p className="text-lg text-charcoal-200 max-w-3xl mx-auto">
              You learn to dissolve resistance by addressing underlying business concerns, adjust your approach until stakeholders can receive your message easily, and create conditions that make positive business outcomes more likely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Master Real-Time Executive Adaptation?
            </h2>
            <p className="text-xl text-orange-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Learn how the FIRE Method integrates with our other frameworks to create complete executive communication intelligence for any business situation.
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
              <Link to="/storytelling-triangle-framework" className="text-orange-200 hover:text-white transition-colors flex items-center space-x-1">
                <span>← Previous: Storytelling Triangle</span>
              </Link>
              <Link to="/persuasion-compass-framework" className="text-orange-200 hover:text-white transition-colors flex items-center space-x-1">
                <span>Next: Persuasion Compass</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default FireMethodFrameworkPage;