import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCalendar}=FiIcons;

function Footer() {
  const currentYear=new Date().getFullYear();

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
              Transform missed opportunities into commanding presence with strategic analysis that reveals what separates forgettable experts from voices people remember.
            </p>
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
                <Link to="/services" className="text-charcoal-300 hover:text-primary-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/frameworks" className="text-charcoal-300 hover:text-primary-400 transition-colors text-sm">
                  Our Frameworks
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-charcoal-300 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations" target="_blank" rel="noopener noreferrer" className="text-charcoal-300 hover:text-primary-400 transition-colors text-sm">
                  Schedule Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-charcoal-300">
              <li>
                <Link to="/services#analysis" className="text-charcoal-300 hover:text-primary-400 transition-colors">
                  Media Performance Analysis
                </Link>
              </li>
              <li>
                <Link to="/services#partnership" className="text-charcoal-300 hover:text-primary-400 transition-colors">
                  Media Performance Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get Started</h3>
            <div className="space-y-3">
              <p className="text-charcoal-300 text-sm">
                Ready to transform your media presence? Schedule your strategic consultation today.
              </p>
            </div>
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="inline-flex items-center space-x-2 bg-gold-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gold-600 transition-colors text-sm"
            >
              <SafeIcon icon={FiCalendar} className="w-4 h-4" />
              <span>Schedule Consultation</span>
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
              <a
                href="https://www.linkedin.com/in/anotherjamesbrown"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-400 hover:text-primary-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;