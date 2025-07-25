import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiLinkedin, FiTwitter, FiMapPin } = FiIcons;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MPI</span>
              </div>
              <h3 className="text-lg font-bold">
                MediaPerformance<span className="text-primary-400">Insights</span>
              </h3>
            </div>
            <p className="text-charcoal-300 text-sm leading-relaxed">
              Transform missed opportunities into commanding presence with strategic analysis 
              that reveals what separates forgettable experts from voices people remember.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://linkedin.com"
                whileHover={{ scale: 1.1 }}
                className="text-charcoal-400 hover:text-primary-400 transition-colors"
              >
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                whileHover={{ scale: 1.1 }}
                className="text-charcoal-400 hover:text-primary-400 transition-colors"
              >
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-charcoal-300 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-charcoal-300 hover:text-primary-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-charcoal-300 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-charcoal-300">
              <li>Media Performance Analysis</li>
              <li>Video Breakdown & Framework Analysis</li>
              <li>Strategic Reports</li>
              <li>Strategy Sessions</li>
              <li>Custom Materials</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:insights@mediaperformanceinsights.com"
                className="flex items-center space-x-2 text-charcoal-300 hover:text-primary-400 transition-colors text-sm"
              >
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                <span>insights@mediaperformanceinsights.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-charcoal-300 hover:text-primary-400 transition-colors text-sm"
              >
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
            </div>
            <motion.a
              href="mailto:insights@mediaperformanceinsights.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gold-600 transition-colors text-sm"
            >
              Schedule Consultation
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-charcoal-400 text-sm">
              © {currentYear} MediaPerformanceInsights.com. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-charcoal-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-charcoal-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;