import React from 'react';
import {motion} from 'framer-motion';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCalendar, FiMail, FiMessageSquare} = FiIcons;

function ContactPage() {
  const contactInfo = [
    {
      icon: FiCalendar,
      title: "Schedule Consultation",
      details: "Book your strategic media performance consultation",
      action: "https://tidycal.com/jamesbrowntv/media-performance-insights-consultations",
      linkText: "Schedule Now"
    },
    {
      icon: FiMail,
      title: "General Inquiries",
      details: "For general questions about services and partnerships",
      action: "mailto:support@thedailynote.net",
      linkText: "Send Message"
    },
    {
      icon: FiMessageSquare,
      title: "Press Contact",
      details: "Media inquiries, speaking engagements, and press requests",
      action: "mailto:press@thedailynote.net",
      linkText: "Contact Press Team"
    }
  ];

  // Schema for Contact Page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Media Performance Insights",
      "url": "https://mediaperformanceinsights.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "support@thedailynote.net",
          "availableLanguage": "English",
          "areaServed": "United States"
        }
      ],
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <SeoHelmet
        title="Contact Us | Media Performance Insights"
        description="Schedule your strategic media consultation with James A. Brown. Transform your media presence with expert analysis and coaching."
        keywords="contact James A. Brown, media consultation, schedule media coaching, media performance analysis, strategic media consultation"
        schema={contactSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">
                  Get In Touch
                </h2>
                <p className="text-lg text-charcoal-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  Ready to transform your media presence? Choose the best way to connect with us based on your needs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mb-4">
                      <SafeIcon icon={info.icon} className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal-900 mb-3">{info.title}</h3>
                      <p className="text-charcoal-600 mb-4">{info.details}</p>
                      <a
                        href={info.action}
                        target={info.action.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                      >
                        <SafeIcon icon={info.icon} className="w-4 h-4" />
                        <span>{info.linkText}</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default ContactPage;