import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBriefcase, FiAward, FiTrendingUp, FiMic, FiAlertCircle } = FiIcons;

function TargetAudienceSection() {
  const audiences = [
    {
      icon: FiBriefcase,
      title: "C-Suite Executives",
      description: "CEOs, CTOs, and senior leaders who represent their companies in high-stakes media situations.",
      background: "from-blue-500 to-blue-700"
    },
    {
      icon: FiAward,
      title: "Industry Experts",
      description: "Thought leaders and specialists who need to communicate complex ideas clearly and compellingly.",
      background: "from-green-500 to-green-700"
    },
    {
      icon: FiTrendingUp,
      title: "Public Company Leaders",
      description: "Executives who face investor calls, earnings announcements, and regulatory scrutiny.",
      background: "from-purple-500 to-purple-700"
    },
    {
      icon: FiMic,
      title: "Authors & Speakers",
      description: "Published experts and keynote speakers who want to maximize their media opportunities.",
      background: "from-orange-500 to-red-600"
    },
    {
      icon: FiAlertCircle,
      title: "Crisis Situations",
      description: "Leaders facing challenging media situations who need strategic communication guidance.",
      background: "from-red-500 to-red-700"
    }
  ];

  const testimonials = [
    {
      quote: "He's able to craft easy-to-understand messaging from complicated content",
      author: "Brand Manager, Corporate Sector"
    },
    {
      quote: "We saw significant growth in online engagement under his guidance",
      author: "Chief Marketing Officer, Corporate Communications"
    },
    {
      quote: "James has an excellent sense of what is newsworthy and is reliable and resourceful",
      author: "Senior Producer, Media & Broadcasting"
    },
    {
      quote: "He aided the growth of our organization's brand by leaps and bounds",
      author: "Program Director, Nonprofit Sector"
    },
    {
      quote: "Bright, adaptive, calming influence on any room he walks into",
      author: "Deputy Director, Government Sector"
    },
    {
      quote: "He not only excelled at his core responsibilities, but contributed above and beyond them",
      author: "VP of Communications, Enterprise Technology"
    },
    {
      quote: "Created training materials that became essential resources for the entire team",
      author: "News Director, Broadcasting & Media"
    },
    {
      quote: "Always quick to master new skills when given fresh challenges",
      author: "Digital Strategy Lead, Marketing Industry"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Who This Is For
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Strategic media analysis for professionals who understand that communication 
            is a competitive advantage, not just a necessary skill.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {audiences.slice(0, 3).map((audience, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white border border-charcoal-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.background} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${audience.background} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={audience.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{audience.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.slice(3).map((audience, index) => (
            <motion.div
              key={index + 3}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white border border-charcoal-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.background} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${audience.background} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={audience.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{audience.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal-50 p-6 rounded-lg border border-charcoal-200"
              >
                <p className="text-charcoal-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-charcoal-500 font-medium">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Difference Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 bg-charcoal-900 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            The Difference
          </h3>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto mb-6">
            Most media training teaches generic presentation skills. We analyze your actual performance 
            using systematic frameworks that reveal why some messages create lasting influence while 
            others are instantly forgotten.
          </p>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto mb-8">
            You'll understand not just what to change, but why changes work and how to apply these 
            insights to every future media opportunity.
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
        </motion.div>
      </div>
    </section>
  );
}

export default TargetAudienceSection;