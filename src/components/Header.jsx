import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX } = FiIcons;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Media Performance Insights Home">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MPI</span>
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal-900' : 'text-white'
                }`}
              >
                MediaPerformance
                <span
                  className={`transition-colors duration-300 ${
                    isScrolled ? 'text-primary-600' : 'text-white'
                  }`}
                >
                  Insights
                </span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? isScrolled
                      ? 'text-primary-600'
                      : 'text-white'
                    : isScrolled
                    ? 'text-charcoal-700 hover:text-primary-600'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center space-x-4 ml-8">
              <motion.a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gold-600 transition-colors"
              >
                Get Insights Today
              </motion.a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-charcoal-700 hover:bg-charcoal-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm"
        >
          <div className="py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-charcoal-700 hover:text-primary-600 hover:bg-charcoal-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-4 pt-4 space-y-3 border-t border-charcoal-200">
              <a
                href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gold-500 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-gold-600 transition-colors"
              >
                Get Insights Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;