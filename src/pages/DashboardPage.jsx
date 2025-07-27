import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiBookOpen, FiTrendingUp, FiTarget, FiCalendar, FiLogOut, FiEye, FiTriangle, FiZap, FiCompass } = FiIcons;

function DashboardPage() {
  const { user, logout } = useAuth();

  const frameworks = [
    {
      icon: FiEye,
      name: "Self-Awareness Matrix (SAM)",
      description: "Your foundation - mapping your four knowledge buckets",
      color: "from-purple-500 to-purple-700",
      link: "/sam-framework",
      status: "Available"
    },
    {
      icon: FiTriangle,
      name: "The Storytelling Triangle",
      description: "Your connection - authentic narratives that resonate",
      color: "from-blue-500 to-blue-700",
      link: "/storytelling-triangle-framework",
      status: "Available"
    },
    {
      icon: FiZap,
      name: "The FIRE Method",
      description: "Your adaptation - real-time situational mastery",
      color: "from-orange-500 to-red-600",
      link: "/fire-method-framework",
      status: "Available"
    },
    {
      icon: FiCompass,
      name: "The Persuasion Compass",
      description: "Your influence - ethical persuasion that serves",
      color: "from-green-500 to-green-700",
      link: "/persuasion-compass-framework",
      status: "Available"
    }
  ];

  const quickActions = [
    {
      icon: FiCalendar,
      title: "Schedule Consultation",
      description: "Book your next strategic session",
      action: "https://tidycal.com/jamesbrowntv/media-performance-insights-consultations",
      color: "bg-primary-600 hover:bg-primary-700"
    },
    {
      icon: FiBookOpen,
      title: "Explore Frameworks",
      description: "Deep dive into our methodologies",
      action: "/frameworks",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: FiTrendingUp,
      title: "View Services",
      description: "Learn about our offerings",
      action: "/services",
      color: "bg-gold-600 hover:bg-gold-700"
    }
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-primary-900"
    >
      <SeoHelmet
        title="Dashboard | Media Performance Insights"
        description="Access your personalized media training dashboard with strategic frameworks and resources."
        keywords="media training dashboard, executive communication portal, strategic frameworks"
      />

      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MPI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  MediaPerformance<span className="text-primary-400">Insights</span>
                </h1>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <SafeIcon icon={FiLogOut} className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Welcome to Your Media Mastery Journey
                </h2>
                <p className="text-lg text-charcoal-200 mb-6">
                  Continue developing your strategic communication skills with our proven frameworks and expert guidance.
                </p>
                <div className="flex flex-wrap gap-4">
                  {quickActions.map((action, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {action.action.startsWith('http') ? (
                        <a
                          href={action.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center space-x-2 ${action.color} text-white px-6 py-3 rounded-lg font-medium transition-colors`}
                        >
                          <SafeIcon icon={action.icon} className="w-5 h-5" />
                          <span>{action.title}</span>
                        </a>
                      ) : (
                        <Link
                          to={action.action}
                          className={`inline-flex items-center space-x-2 ${action.color} text-white px-6 py-3 rounded-lg font-medium transition-colors`}
                        >
                          <SafeIcon icon={action.icon} className="w-5 h-5" />
                          <span>{action.title}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Frameworks Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Your Strategic Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <Link to={framework.link} className="block">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${framework.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <SafeIcon icon={framework.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{framework.name}</h4>
                        <span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full">
                          {framework.status}
                        </span>
                      </div>
                      <p className="text-charcoal-300 text-sm leading-relaxed">
                        {framework.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Your Progress</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiBookOpen} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Frameworks Explored</h4>
                <p className="text-3xl font-bold text-blue-400">4</p>
                <p className="text-charcoal-300 text-sm">Available for study</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiTarget} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Skills Development</h4>
                <p className="text-3xl font-bold text-green-400">Ready</p>
                <p className="text-charcoal-300 text-sm">To begin mastery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Next Session</h4>
                <p className="text-3xl font-bold text-gold-400">Book</p>
                <p className="text-charcoal-300 text-sm">Schedule consultation</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-primary-600/20 to-gold-500/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Take Your Next Step?</h3>
              <p className="text-lg text-charcoal-200 mb-6 max-w-2xl mx-auto">
                Schedule your strategic consultation to dive deeper into the frameworks and develop your personalized media mastery plan.
              </p>
              <motion.a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors shadow-lg"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Schedule Your Strategic Session</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default DashboardPage;