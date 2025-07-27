import React from 'react';
import { motion } from 'framer-motion';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiClock, FiDownload, FiShield, FiTarget, FiMessageSquare, FiArrowRight, FiMail } = FiIcons;

function ChecklistPage() {
  const checklistItems = [
    {
      icon: FiTarget,
      title: "The 3 Key Messages Framework",
      description: "Keep you on point every single time",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: FiMessageSquare,
      title: "Bulletproof Answers to the 7 Questions",
      description: "Every reporter asks these - now you're ready",
      color: "from-green-500 to-green-700"
    },
    {
      icon: FiArrowRight,
      title: "The Redirect Technique",
      description: "Turn hostile questions into opportunities",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: FiShield,
      title: "Crisis Response Protocols",
      description: "Protect your reputation when it matters most",
      color: "from-red-500 to-red-700"
    },
    {
      icon: FiCheckCircle,
      title: "Post-Interview Follow-up Strategies",
      description: "Control the narrative even after cameras stop",
      color: "from-purple-500 to-purple-700"
    }
  ];

  // Schema for Checklist Page
  const checklistSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Executive's 5-Minute Media Checklist",
    "description": "Free media checklist with 3 key messages framework, crisis response protocols, and hostile question redirect techniques for executives.",
    "publisher": {
      "@type": "Organization",
      "name": "Media Performance Insights"
    },
    "mainEntity": {
      "@type": "DigitalDocument",
      "@id": "https://mediaperformanceinsights.com/5minutes",
      "name": "The Executive's 5-Minute Media Checklist",
      "description": "Comprehensive media preparation checklist for executives and leaders",
      "author": {
        "@type": "Person",
        "name": "James A. Brown"
      }
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
        title="The Executive's 5-Minute Media Checklist | Media Performance Insights"
        description="Get the free 5-minute media checklist with 3 key messages framework, crisis response protocols, and hostile question redirect techniques for executives."
        keywords="media checklist, executive media training, crisis communication, media interview preparation, key messages framework, hostile questions"
        schema={checklistSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 via-primary-900 to-charcoal-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <SafeIcon icon={FiClock} className="w-12 h-12 text-gold-400" />
              <h1 className="text-4xl md:text-6xl font-bold">
                The Executive's{' '}
                <span className="text-gold-400">5-Minute</span>{' '}
                Media Checklist
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Master media interviews with the same frameworks used by Fortune 500 executives. 
              Takes 30 seconds to get, 5 minutes to master.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <p className="text-lg text-white font-medium">
                ✓ The 3 key messages framework that keeps you on point<br />
                ✓ Bulletproof answers to the 7 questions every reporter asks<br />
                ✓ The redirect technique that turns hostile questions into opportunities<br />
                ✓ Crisis response protocols that protect your reputation<br />
                ✓ Post-interview follow-up strategies that control the narrative
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checklist Items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              What You Get in This Checklist
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Five battle-tested frameworks that transform nervous executives into confident, compelling communicators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {checklistItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-charcoal-200 hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={item.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{item.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download CTA */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto"
          >
            <SafeIcon icon={FiMail} className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Master Media Interviews?
            </h3>
            <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
              Enter your email to get instant access to the free checklist and transform how you handle every media opportunity.
            </p>
            
            <motion.a
              href="https://sendfox.com/lp/1j4pj6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gold-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-50 transition-colors flex items-center space-x-2 mx-auto shadow-lg"
            >
              <SafeIcon icon={FiDownload} className="w-5 h-5" />
              <span>Get Your Free Checklist</span>
            </motion.a>
            
            <p className="text-sm text-gold-200 mt-4">
              Instant access • Expert frameworks • Delivered to your inbox
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-8">
              Used by Leaders at Organizations Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <p className="font-bold text-charcoal-700">Fortune 500</p>
                <p className="text-sm text-charcoal-500">Companies</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-charcoal-700">Government</p>
                <p className="text-sm text-charcoal-500">Agencies</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-charcoal-700">Nonprofit</p>
                <p className="text-sm text-charcoal-500">Organizations</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-charcoal-700">Tech</p>
                <p className="text-sm text-charcoal-500">Startups</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Next Interview Could Be Your Best
            </h2>
            <p className="text-xl text-charcoal-300 max-w-3xl mx-auto mb-8">
              Don't go into another media opportunity unprepared. Get the checklist that's helped hundreds of executives master their message.
            </p>
            
            <div className="space-y-4">
              <motion.a
                href="https://sendfox.com/lp/1j4pj6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors flex items-center space-x-2 mx-auto"
              >
                <SafeIcon icon={FiDownload} className="w-5 h-5" />
                <span>Get Your Free Checklist Now</span>
              </motion.a>
              
              <p className="text-sm text-charcoal-400">
                Want more? <a href="/contact" className="text-gold-400 hover:text-gold-300 transition-colors">Schedule a strategic consultation</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default ChecklistPage;