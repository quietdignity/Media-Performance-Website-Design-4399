import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTriangle, FiCompass, FiZap, FiEye } = FiIcons;

function SolutionSection() {
  const frameworks = [
    {
      icon: FiTriangle,
      name: "The Storytelling Triangle",
      description: "Structure your message with three powerful points that audiences remember and repeat.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: FiCompass,
      name: "The Persuasion Compass",
      description: "Navigate complex topics by finding your true north in every conversation.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: FiZap,
      name: "The F.I.R.E. Method",
      description: "Focus, Impact, Relevance, and Engagement—the four pillars of commanding presence.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: FiEye,
      name: "Self Awareness Matrix (S.A.M.)",
      description: "Understand your communication patterns and optimize them for maximum impact.",
      color: "from-purple-500 to-purple-700"
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
            Strategic Media Analysis That Creates{' '}
            <span className="text-gold-500">Lasting Impact</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Our proven frameworks transform how you communicate, giving you the strategic advantage 
            that separates industry leaders from industry participants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white border border-charcoal-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <SafeIcon icon={framework.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">{framework.name}</h3>
              <p className="text-charcoal-600 leading-relaxed text-lg">{framework.description}</p>
              
              <div className={`absolute inset-0 bg-gradient-to-br ${framework.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-charcoal-900 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Building on What You've Already Done
          </h3>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto mb-8">
            We don't start from scratch. We analyze your existing media appearances, identify what's working, 
            and strategically enhance your natural strengths with proven frameworks that amplify your impact.
          </p>
          <motion.a
            href="mailto:insights@mediaperformanceinsights.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
          >
            See How It Works
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default SolutionSection;