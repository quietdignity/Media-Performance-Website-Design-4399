import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiArrowLeft } = FiIcons;

function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-charcoal-900 to-primary-900"
    >
      <div className="text-center text-white px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-9xl font-bold text-gold-400 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-charcoal-200 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist. But don't worry, 
            your media performance can still be found and optimized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
              >
                <SafeIcon icon={FiHome} className="w-5 h-5" />
                <span>Go Home</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-charcoal-900 transition-all duration-300"
              >
                <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default NotFoundPage;