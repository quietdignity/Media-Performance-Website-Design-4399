import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiAward, FiBriefcase, FiBook, FiTarget, FiTrendingUp } = FiIcons;

function AboutPage() {
  const credentials = [
    {
      icon: FiBriefcase,
      title: "NPR Experience",
      description: "Veteran journalist with extensive experience in public radio broadcasting"
    },
    {
      icon: FiBook,
      title: "USA Today",
      description: "Professional journalism experience with major national publication"
    },
    {
      icon: FiTarget,
      title: "Corporate Communications",
      description: "Strategic communication consulting for Fortune 500 companies"
    },
    {
      icon: FiAward,
      title: "Government & Nonprofit",
      description: "Media training and crisis communication for public sector organizations"
    }
  ];

  const methodology = [
    {
      title: "Ancient Wisdom",
      description: "Aristotelian principles of rhetoric and persuasion",
      icon: FiBook
    },
    {
      title: "Modern Neuroscience",
      description: "Brain science insights on attention and memory",
      icon: FiTrendingUp
    },
    {
      title: "Psychology",
      description: "Behavioral psychology for effective communication",
      icon: FiUser
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
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
              Meet <span className="text-gold-400">James A. Brown</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-3xl mx-auto leading-relaxed">
              Veteran journalist and strategic communication expert who transforms 
              how leaders connect with their audiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900">
                From Newsroom to Boardroom
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                James A. Brown brings a unique perspective to media performance analysis, 
                combining decades of journalism experience with deep expertise in strategic 
                communication across multiple sectors.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                His career spans NPR and USA Today, where he developed an acute understanding 
                of what makes messages memorable and compelling. This foundation, combined with 
                extensive work in nonprofit, corporate, and government communications, gives him 
                unparalleled insight into the challenges leaders face when communicating with 
                diverse audiences.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                What sets James apart is his systematic approach to communication excellence. 
                Rather than relying on intuition alone, he has developed proven frameworks 
                that combine ancient rhetorical principles with modern psychological insights 
                to create lasting impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="James A. Brown"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              A diverse background that provides comprehensive understanding of 
              media dynamics across all sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={credential.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{credential.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{credential.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
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
              The Methodology
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Our approach combines timeless principles with cutting-edge insights 
              to create a comprehensive framework for communication excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {methodology.map((method, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={method.icon} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{method.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Strategic Communication That Works
            </h3>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              By combining Aristotelian rhetoric with modern neuroscience and psychology, 
              we create communication strategies that don't just inform—they persuade, 
              engage, and inspire action.
            </p>
            <motion.a
              href="mailto:insights@mediaperformanceinsights.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
            >
              Work With James
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutPage;