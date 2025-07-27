import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTriangle, FiCompass, FiZap, FiEye } = FiIcons;

function SolutionSection() {
  const frameworks = [
    {
      icon: FiTriangle,
      name: "The Storytelling Triangle",
      description: "How your personal experience connects with audience needs at the right moment.",
      color: "from-blue-500 to-blue-700",
      link: "/storytelling-triangle"
    },
    {
      icon: FiCompass,
      name: "The Persuasion Compass", 
      description: "Whether you're building credibility, emotional connection, logical reasoning, and perfect timing.",
      color: "from-green-500 to-green-700",
      link: "/persuasion-compass"
    },
    {
      icon: FiZap,
      name: "The F.I.R.E. Method",
      description: "Your ability to read the room and adapt in real-time.",
      color: "from-orange-500 to-red-600",
      link: "/fire-method"
    },
    {
      icon: FiEye,
      name: "Self Awareness Matrix (S.A.M.)",
      description: "How you present your complete expertise, not just obvious qualifications.",
      color: "from-purple-500 to-purple-700",
      link: "/sam"
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
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We apply a proprietary suite of analysis tools developed from decades of media study and centuries of communication philosophy to identify precisely where your message succeeded and where it failed to create influence.
          </p>
          <h3 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">
            Our Proprietary Analysis Framework
          </h3>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Unlike generic media training that focuses on surface-level presentation skills, our analysis reveals the deep structural elements that separate memorable leaders from forgettable experts. We examine your performance through four proven diagnostic tools that have helped executives increase stakeholder confidence, improve crisis response effectiveness, and build authentic authority that drives business results.
          </p>
        </motion.div>

        <div id="framework" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white border border-charcoal-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Link to={framework.link} className="block">
                <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={framework.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">{framework.name}</h3>
                <p className="text-charcoal-600 leading-relaxed text-lg">{framework.description}</p>
                <div className={`absolute inset-0 bg-gradient-to-br ${framework.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              </Link>
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
            Our Philosophy
          </h3>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto mb-8">
            We believe the best way to improve is by accepting and building on what happened before. Our team will work with you to choose, obtain and analyze previous media appearances, identifying both strengths to amplify and missed opportunities to capture in future interactions.
          </p>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto mb-8">
            This systematic approach reveals exactly why some messages create lasting influence while others disappear into background noise, giving you a strategic roadmap for commanding attention in every future appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
            >
              See How It Works
            </motion.a>
            <Link
              to="/frameworks"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-charcoal-900 transition-all duration-300"
            >
              Learn About Our Frameworks
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SolutionSection;