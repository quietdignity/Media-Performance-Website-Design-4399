import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiCalendar, FiMail } = FiIcons;

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-900 via-primary-900 to-charcoal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your{' '}
            <span className="text-gold-400">Media Presence?</span>
          </h2>
          <p className="text-xl md:text-2xl text-charcoal-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Stop leaving your media success to chance. Get the strategic analysis 
            that reveals exactly how to command attention and create lasting impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <SafeIcon icon={FiMail} className="w-12 h-12 text-gold-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4">Get Insights Today</h3>
              <p className="text-charcoal-200 mb-6">
                Start with a comprehensive media performance analysis of your existing content.
              </p>
              <motion.a
                href="mailto:insights@mediaperformanceinsights.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
              >
                <span>Email Us Now</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <SafeIcon icon={FiCalendar} className="w-12 h-12 text-primary-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4">Schedule Consultation</h3>
              <p className="text-charcoal-200 mb-6">
                Book a strategic session to discuss your specific media goals and challenges.
              </p>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <span>Call Today</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-charcoal-300 text-lg mb-4">
              Your next media opportunity is coming. Will you be ready?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-charcoal-400">Contact:</span>
              <a 
                href="mailto:insights@mediaperformanceinsights.com"
                className="text-gold-400 hover:text-gold-300 transition-colors font-medium"
              >
                insights@mediaperformanceinsights.com
              </a>
              <span className="text-charcoal-400">|</span>
              <a 
                href="tel:+1234567890"
                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
              >
                (123) 456-7890
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;