import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiArrowRight}=FiIcons;

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-primary-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753477059899-blob")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{y: 50,opacity: 0}}
          animate={{y: 0,opacity: 1}}
          transition={{duration: 0.8,delay: 0.2}}
          className="space-y-6 md:space-y-8"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            initial={{y: 30,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{duration: 0.8,delay: 0.4}}
          >
            Your Last Media Interview Could Have{' '}
            <span className="text-gold-400">Gone Better.</span>
            <br />
            <span className="text-primary-400">Your Next One Will.</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{y: 30,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{duration: 0.8,delay: 0.6}}
          >
            Stop wondering why your expertise doesn't translate on camera. Get clear answers about what works, what doesn't, and exactly how to fix it.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{y: 30,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{duration: 0.8,delay: 0.8}}
          >
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{scale: 1.05,boxShadow: '0 20px 40px rgba(245,158,11,0.3)'}}
              whileTap={{scale: 0.95}}
              className="bg-gold-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gold-600 transition-all duration-300 flex items-center space-x-2 shadow-lg w-full sm:w-auto justify-center"
            >
              <span>Get Performance Insights Today</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Structured Data for this section */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Media Performance Analysis",
            "description": "Transform missed opportunities into commanding presence with strategic analysis for C-Suite leaders and high-profile professionals",
            "provider": {
              "@type": "Organization",
              "name": "Media Performance Insights",
              "sameAs": "https://mediaperformanceinsights.com"
            },
            "serviceType": "Media Training",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })
        }} 
      />

      {/* Scroll Indicator - Enhanced with subtle animation */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0,10,0],
          opacity: [0.5,1,0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 md:h-3 bg-white rounded-full mt-2"
            animate={{y: [0,4,0]}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;