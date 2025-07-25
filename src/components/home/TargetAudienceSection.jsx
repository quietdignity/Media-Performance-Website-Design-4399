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

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-charcoal-900 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Your Expertise Deserves Strategic Communication
          </h3>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto mb-8">
            You've invested years building your expertise. Now invest in the strategic frameworks 
            that ensure your knowledge creates the impact it deserves.
          </p>
          <motion.a
            href="mailto:insights@mediaperformanceinsights.com"
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