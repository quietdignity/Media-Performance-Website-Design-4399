import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiArrowRight, FiCalendar, FiHelpCircle} = FiIcons;

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-900 via-primary-900 to-charcoal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%)`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to See What Went Wrong and Fix It
          </h2>
          <p className="text-xl md:text-2xl text-charcoal-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Every situation is different. Scope, timing, and urgency shape pricing.
          </p>
          <p className="text-xl md:text-2xl text-charcoal-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            In a consultation we will map your goals, surface the risks, and lay out the plan and cost.
          </p>

          <motion.div
            initial={{x: 0, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2}}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto mb-12"
          >
            <SafeIcon icon={FiCalendar} className="w-12 h-12 text-primary-400 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-white mb-4">Schedule Your Consultation</h3>
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="inline-flex items-center space-x-2 bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors text-lg"
            >
              <span>Get started today</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.a>
            <div className="mt-4">
              <Link to="/faq" className="inline-flex items-center space-x-1 text-gold-400 hover:text-gold-300 transition-colors">
                <SafeIcon icon={FiHelpCircle} className="w-5 h-5" />
                <span>Have questions? View our FAQ</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.6}}
            className="text-center"
          >
            <p className="text-charcoal-300 text-lg mb-4">
              Your next media moment is coming. Be ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="text-gold-400 hover:text-gold-300 transition-colors font-medium"
              >
                Get started today
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;