import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiVideo, FiUsers, FiCheckCircle } = FiIcons;

function ServicesSection() {
  const services = [
    {
      icon: FiVideo,
      title: "Media Performance Analysis",
      description: "Transform past media experiences into future strategic advantage through systematic analysis of your communication patterns, audience impact, and missed opportunities.",
      features: [
        "Performance Audit: Comprehensive analysis of recent media interactions",
        "Strategic Assessment: Evaluation of your current media presence",
        "Audience Intelligence: Analysis of how your messages resonate",
        "Strategic Recommendations: Specific action plan for optimization"
      ],
      id: "analysis"
    },
    {
      icon: FiUsers,
      title: "Media Performance Partnership",
      description: "Continuous strategic support to help you navigate evolving media landscapes, build influential relationships, and turn every media opportunity into strategic advantage.",
      features: [
        "Monthly Strategic Planning: Media opportunity identification and preparation",
        "Real-Time Advisory: Access for urgent media situations",
        "Relationship Intelligence: Ongoing journalist relationship building",
        "Crisis Communications: Rapid response protocols and reputation management"
      ],
      id: "partnership"
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
            Our Service Offerings
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Two focused services designed to transform your media performance through strategic analysis and ongoing partnership.
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
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-600 mb-4 leading-relaxed" itemProp="description">
                    {service.description}
                  </p>
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
              Ready to Transform Your Media Performance?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Schedule your strategic consultation to discuss your media performance objectives and determine the best approach for your situation.
            </p>
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
            >
              Schedule Your Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;