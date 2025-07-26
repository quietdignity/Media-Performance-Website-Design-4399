import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiVideo, FiFileText, FiMessageSquare, FiBookOpen, FiCheckCircle } = FiIcons;

function ServicesSection() {
  const services = [
    {
      icon: FiVideo,
      title: "Comprehensive Media Performance Analysis",
      description: "Video Breakdown: Frame-by-frame analysis using our core four frameworks",
      features: ["Video breakdown with timestamps", "Framework application analysis", "Strengths and opportunities identified"],
      id: "analysis"
    },
    {
      icon: FiFileText,
      title: "Strategic Report",
      description: "Detailed written analysis that you can reference and implement immediately.",
      features: [
        "What worked and why audiences responded",
        "Missed opportunities that cost influence",
        "Specific tactical improvements for immediate implementation",
        "Long-term strategy for building media authority"
      ],
      id: "reports"
    },
    {
      icon: FiMessageSquare,
      title: "Strategy Session for Implementation",
      description: "Personal debrief and tactical implementation guidance.",
      features: ["60-minute strategic session", "Personalized coaching", "Q&A and clarification"],
      id: "sessions"
    },
    {
      icon: FiBookOpen,
      title: "Custom Materials and Talking Points",
      description: "Tailored resources designed specifically for your communication style and goals.",
      features: ["Key message frameworks", "Industry-specific talking points", "Crisis communication templates"],
      id: "materials"
    }
  ];

  return (
    <section className="py-20 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            What You Get
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive analysis system designed to transform your media presence from forgettable to unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3" itemProp="name">{service.title}</h3>
                  <p className="text-charcoal-600 mb-4 leading-relaxed" itemProp="description">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2" itemProp="hasOfferCatalog">
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-charcoal-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <meta itemProp="provider" content="Media Performance Insights" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Media Presence?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get started with a comprehensive analysis that reveals exactly what's working, what isn't, and how to optimize your communication for maximum impact.
            </p>
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
            >
              Get Your Analysis Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;