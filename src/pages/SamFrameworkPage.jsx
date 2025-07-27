import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiEye, FiLayers, FiStar, FiZap, FiBrain, FiBook, FiUsers, FiTarget, FiArrowRight } = FiIcons;

function SamFrameworkPage() {
  const knowledgeBuckets = [
    {
      icon: FiLayers,
      title: "What Everyone Knows You Know",
      description: "Your established professional expertise—the credentials, experience, and industry knowledge people expect from your executive role. This bucket provides credibility and foundation for media interviews, but relying solely on obvious expertise makes you sound like every other executive in your field.",
      color: "from-blue-500 to-blue-700",
      examples: [
        "Industry certifications and credentials",
        "Published work and thought leadership",
        "Speaking engagements and conferences",
        "Leadership roles and board positions",
        "Awards and recognition"
      ]
    },
    {
      icon: FiStar,
      title: "What Only You Know",
      description: "Your unique insights, experiences, and perspectives that differentiate you from other industry leaders. These are the 'only I know this' moments that make journalists lean forward and audiences remember your interviews.",
      color: "from-green-500 to-green-700",
      examples: [
        "Personal leadership experiences",
        "Behind-the-scenes industry insights",
        "Unique market perspectives",
        "Exclusive knowledge from roles",
        "Proprietary research or findings"
      ]
    },
    {
      icon: FiZap,
      title: "What You Do Naturally",
      description: "The communication abilities you use without conscious thought—your natural leadership style, instinctive problem-solving approaches, and authentic personality traits. Most executives undervalue these natural abilities in media situations.",
      color: "from-orange-500 to-red-600",
      examples: [
        "Natural communication strengths",
        "Intuitive problem-solving responses",
        "Unconscious competence areas",
        "Innate leadership abilities",
        "Authentic personality traits"
      ]
    },
    {
      icon: FiBrain,
      title: "What You Haven't Discovered Yet",
      description: "The potential for breakthrough communication moments that emerge in challenging media situations. While you can't prepare Bucket Four discoveries in advance, staying open to new capabilities creates opportunities for your most impressive executive communication moments.",
      color: "from-purple-500 to-purple-700",
      examples: [
        "Hidden communication talents",
        "Untapped leadership potential",
        "Emergency response capabilities",
        "Growth opportunities in crisis",
        "Breakthrough insights under pressure"
      ]
    }
  ];

  const benefits = [
    "Access your complete expertise rather than just prepared talking points",
    "Maintain strategic messaging while sounding authentically like yourself",
    "Transform anxiety into confidence through comprehensive preparation",
    "Create deeper connections by drawing from your full knowledge base",
    "Respond to unexpected questions with authentic authority",
    "Differentiate yourself from other executives in your field",
    "Build lasting credibility through genuine expertise demonstration"
  ];

  const applications = [
    {
      title: "Media Interviews",
      description: "Use SAM to access your complete toolkit during challenging interviews, moving beyond prepared talking points to demonstrate authentic expertise."
    },
    {
      title: "Board Presentations",
      description: "Draw from all four knowledge buckets to present with confidence and handle unexpected questions from board members."
    },
    {
      title: "Crisis Communication",
      description: "Access hidden capabilities and natural responses during high-pressure communication situations."
    },
    {
      title: "Investor Relations",
      description: "Combine established credibility with unique insights to build investor confidence and trust."
    }
  ];

  // Schema for SAM Framework Page
  const samFrameworkSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Self-Awareness Matrix (SAM): Executive Communication Framework for Media Training",
    "description": "Master the Self-Awareness Matrix (SAM) - the executive communication framework that transforms media training by mapping your four knowledge buckets for confident, authentic leadership presence.",
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
      "@id": "https://mediaperformanceinsights.com/sam-framework"
    },
    "keywords": "executive communication framework, media training for executives, leadership communication skills, business communication training, executive media coaching, confident presentations"
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
        title="The Self-Awareness Matrix (SAM): Executive Communication Framework for Media Training"
        description="Master the Self-Awareness Matrix (SAM) - the executive communication framework that transforms media training by mapping your four knowledge buckets for confident, authentic leadership presence."
        keywords="executive communication framework, media training for executives, leadership communication skills, business communication training, executive media coaching, confident presentations"
        schema={samFrameworkSchema}
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
            <h2 className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Executive Communication Framework for Media Training
            </h2>
            <p className="text-lg text-charcoal-300 max-w-4xl mx-auto leading-relaxed">
              Master Your Complete Knowledge Toolkit for Confident Media Appearances
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
              The Self-Awareness Matrix—SAM—is a revolutionary executive communication framework that maps the four distinct buckets of knowledge every leader brings to media interviews and presentations. While traditional media training focuses on prepared talking points, SAM reveals your complete communication toolkit, transforming you from someone who delivers rehearsed messages into a confident executive who accesses authentic expertise in real-time.
            </p>
            
            <div className="bg-purple-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                The Foundation Framework for Executive Media Success
              </h3>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                SAM isn't just another communication technique—it's the foundational framework that makes every other media training skill more effective. When you understand your complete knowledge toolkit, executive storytelling becomes more authentic, situation reading becomes clearer, and persuasive communication becomes more natural.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Knowledge Buckets */}
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
              The Four Knowledge Buckets That Transform Executive Communication
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Each bucket represents a different type of knowledge and capability that contributes to your communication effectiveness in media interviews and stakeholder presentations.
            </p>
          </motion.div>

          <div className="space-y-16">
            {knowledgeBuckets.map((bucket, index) => (
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
                    <div className={`w-20 h-20 bg-gradient-to-br ${bucket.color} rounded-xl flex items-center justify-center`}>
                      <SafeIcon icon={bucket.icon} className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal-900">{bucket.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-charcoal-600 leading-relaxed">{bucket.description}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-4">Examples Include:</h4>
                    <ul className="space-y-3">
                      {bucket.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-br ${bucket.color} rounded-full mt-2`}></div>
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

      {/* Benefits */}
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
              Why SAM Transforms Executive Media Performance
            </h2>
            <div className="bg-charcoal-50 rounded-xl p-8 mb-12">
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                SAM solves the preparation paradox that plagues even successful business leaders: why you can feel unprepared for media interviews despite extensive preparation and deep expertise. The answer isn't lack of knowledge—it's lack of awareness about the different types of knowledge and communication abilities you possess.
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

      {/* Applications */}
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
              SAM Applications for Executive Success
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              The Self-Awareness Matrix enhances performance across all executive communication scenarios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{application.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Influenced by Research */}
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
              Influenced by Cognitive Psychology and <span className="text-purple-400">Executive Leadership Research</span>
            </h2>
            <p className="text-xl text-charcoal-200 leading-relaxed mb-8">
              SAM integrates cutting-edge insights from multiple disciplines: cognitive psychology's understanding of implicit versus explicit knowledge, educational theory about unconscious competence development, and business communication research on authentic executive presence.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <SafeIcon icon={FiBrain} className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Cognitive Psychology</h3>
                  <p className="text-sm text-charcoal-300">Understanding implicit vs explicit knowledge access</p>
                </div>
                <div className="text-center">
                  <SafeIcon icon={FiBook} className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Educational Theory</h3>
                  <p className="text-sm text-charcoal-300">Unconscious competence development frameworks</p>
                </div>
                <div className="text-center">
                  <SafeIcon icon={FiUsers} className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Executive Coaching</h3>
                  <p className="text-sm text-charcoal-300">Fortune 500 leadership development research</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-charcoal-200 max-w-3xl mx-auto">
              This approach transforms traditional executive media training from message discipline—though important—into authentic knowledge access for confident media appearances. You maintain strategic messaging while sounding like yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Map Your Complete Executive Knowledge?
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Discover how SAM works with our other three frameworks to create your complete communication intelligence system for executive success.
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
              <Link to="/storytelling-triangle-framework" className="text-purple-200 hover:text-white transition-colors flex items-center space-x-1">
                <span>Next: Storytelling Triangle</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default SamFrameworkPage;