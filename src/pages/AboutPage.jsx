import React from 'react';
import { motion } from 'framer-motion';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiAward, FiBriefcase, FiBook, FiTarget, FiTrendingUp, FiLink, FiLinkedin } = FiIcons;

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

  const mediaOrganizations = [
    "WHEC (News 10 NBC)",
    "WZNE",
    "WXXI",
    "NPR",
    "USA Today",
    "PBS",
    "BBC"
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
      <SeoHelmet 
        title="About James A. Brown | Media Performance Insights"
        description="Meet James A. Brown, veteran journalist with experience at NPR, USA Today, PBS, BBC and more. Strategic communication expert helping executives transform their media presence."
        keywords="James A. Brown, media expert, NPR journalist, USA Today, strategic communication, media consultant, PBS, BBC"
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
              Meet <span className="text-gold-400">James A. Brown</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-3xl mx-auto leading-relaxed">
              Veteran journalist and strategic communication expert who transforms how leaders connect with their audiences.
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
                Media Performance Insights applies proven communication frameworks integrating ancient wisdom from Aristotle to modern insights from neuroscience, psychology, and communication research.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                Founded by James A. Brown, a veteran journalist with extensive experience in national and local media, having worked with NPR, USA Today, WHEC (News 10 NBC), WZNE, WXXI, PBS, BBC, nonprofit, corporate and government communications, combined with deep study of communication frameworks used by history's most influential leaders.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                James brings unique dual perspective as both media professional and communication strategist, understanding what journalists need while helping executives deliver it effectively.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                Based in Rochester, NY, James is a rabid Buffalo Bills fan and proud member of Bills Mafia.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <motion.a 
                  href="https://muckrack.com/jamesbrowntv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-charcoal-800 text-white px-4 py-2 rounded-lg hover:bg-charcoal-700 transition-colors"
                >
                  <SafeIcon icon={FiLink} className="w-5 h-5" />
                  <span>MuckRack</span>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/anotherjamesbrown" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto" style={{ maxWidth: "400px" }}>
                <img
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753472217521-blob"
                  alt="James A. Brown - Media Performance Insights Founder"
                  className="w-full object-contain"
                  style={{ maxHeight: "400px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Organizations Section */}
      <section className="py-12 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Media Experience
            </h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {mediaOrganizations.map((org, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg"
              >
                <span className="text-white text-lg font-medium">{org}</span>
              </motion.div>
            ))}
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
              A diverse background that provides comprehensive understanding of media dynamics across all sectors.
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
              Our approach combines timeless principles with cutting-edge insights to create a comprehensive framework for communication excellence.
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
              By combining Aristotelian rhetoric with modern neuroscience and psychology, we create communication strategies that don't just inform—they persuade, engage, and inspire action.
            </p>
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
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