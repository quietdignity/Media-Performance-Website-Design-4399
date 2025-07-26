import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiAlertTriangle, FiTrendingDown, FiUsers, FiTarget } = FiIcons;

function ProblemSection() {
  const problems = [
    {
      icon: FiAlertTriangle,
      title: "Expertise Doesn't Translate",
      description: "Being brilliant in your field doesn't automatically make you compelling on camera or in interviews."
    },
    {
      icon: FiTrendingDown,
      title: "Missed Opportunities",
      description: "Every unclear message or unconvincing delivery is a chance to build authority that slips away."
    },
    {
      icon: FiUsers,
      title: "Audience Disconnect",
      description: "Technical knowledge without strategic communication leaves audiences confused, not convinced."
    },
    {
      icon: FiTarget,
      title: "No Strategic Framework",
      description: "Most professionals rely on charisma alone, missing the systematic approach that creates lasting impact."
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
            Why Smart Leaders Still Struggle in Media
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed mb-8">
            You're brilliant at your job. You have insights worth sharing. But when the cameras roll or 
            the podcast starts recording, something goes wrong.
          </p>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Your expertise gets lost in generic talking points. Important messages fall flat. 
            Opportunities to build authentic authority slip away in three-minute segments that everyone forgets.
          </p>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            The hidden truth: Media success isn't about being smarter or more charismatic. It's about understanding 
            systematic frameworks that separate memorable communicators from forgettable experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <SafeIcon icon={problem.icon} className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-4">{problem.title}</h3>
              <p className="text-charcoal-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Gap Between Knowledge and Communication
          </h3>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            You've spent years mastering your expertise. Now it's time to master how you share it. 
            Strategic media performance isn't about natural talent—it's about proven frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProblemSection;