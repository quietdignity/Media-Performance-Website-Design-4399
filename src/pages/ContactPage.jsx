import React from 'react';
import {motion} from 'framer-motion';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCalendar,FiMail,FiTarget}=FiIcons;

function ContactPage() {
  const contactInfo=[ 
    {
      icon: FiCalendar,
      title: "Schedule Consultation",
      details: "Book your strategic media performance consultation",
      action: "https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
    },
    {
      icon: FiMail,
      title: "Email Us",
      details: "support@thedailynote.net",
      description: "For speaking engagements at your conference or organization",
      action: "mailto:support@thedailynote.net"
    },
    {
      icon: FiTarget,
      title: "Strategic Focus",
      details: "Comprehensive media performance analysis and coaching",
      action: null
    } 
  ];

  // Schema for Contact Page
  const contactSchema={
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Media Performance Insights",
      "url": "https://mediaperformanceinsights.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "support@thedailynote.net",
        "availableLanguage": "English",
        "areaServed": "United States"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [ 
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday" 
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      className="pt-20"
    >
      <SeoHelmet
        title="Contact Us | Media Performance Insights"
        description="Schedule your strategic media consultation with James A. Brown. Transform your media presence with expert analysis and coaching."
        keywords="contact James A. Brown,media consultation,schedule media coaching,media performance analysis,strategic media consultation"
        schema={contactSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{y: 50,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{duration: 0.8,delay: 0.2}}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Transform Your{' '}
              <span className="text-gold-400">Media Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-3xl mx-auto leading-relaxed">
              Ready to turn your expertise into commanding media presence? Schedule your strategic consultation today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{y: 50,opacity: 0}}
              whileInView={{y: 0,opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 0.8,delay: 0.2}}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">
                  Schedule Your Strategic Consultation
                </h2>
                <p className="text-lg text-charcoal-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  Ready to transform your media presence? Book your comprehensive consultation to discuss your specific communication goals and discover how our strategic analysis can help you create lasting impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((info,index)=> (
                  <motion.div
                    key={index}
                    initial={{y: 30,opacity: 0}}
                    whileInView={{y: 0,opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6,delay: index * 0.1}}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mb-4">
                      <SafeIcon icon={info.icon} className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal-900 mb-3">{info.title}</h3>
                      {info.action ? (
                        <a
                          href={info.action}
                          target={info.action.startsWith('mailto') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="text-charcoal-600 hover:text-primary-600 transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-charcoal-600">{info.details}</p>
                      )}
                      {info.description && (
                        <p className="text-sm text-charcoal-500 mt-2">{info.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{y: 30,opacity: 0}}
                whileInView={{y: 0,opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.6,delay: 0.4}}
                className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center max-w-3xl mx-auto"
              >
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-primary-100 leading-relaxed mb-6">
                  Schedule your consultation now to begin transforming your media presence. We'll analyze your current performance and develop a strategic roadmap for creating lasting impact.
                </p>
                <motion.a
                  href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="inline-flex items-center space-x-2 bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
                >
                  <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                  <span>Book Your Consultation</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{y: 50,opacity: 0}}
            whileInView={{y: 0,opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Your Next Media Opportunity Awaits
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-8">
              Don't let another interview, presentation, or media appearance go by without maximizing its impact. Get the strategic insights you need to command attention.
            </p>
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="inline-flex items-center space-x-2 bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>Schedule Your Consultation</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default ContactPage;