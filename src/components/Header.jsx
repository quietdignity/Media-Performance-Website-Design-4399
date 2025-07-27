import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiMenu, FiX, FiChevronDown} = FiIcons;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
    setServicesDropdownOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navigation = [
    {name: 'About', href: '/about'},
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        {name: 'Media Performance Analysis', href: '/services#analysis'},
        {name: 'Media Performance Partnership', href: '/services#partnership'},
      ],
    },
    {name: 'Frameworks', href: '/frameworks'},
    {name: 'Contact', href: '/contact'},
  ];

  // Adjust top position based on whether we're on a page that shows the top bar
  const showTopBar = location.pathname !== '/5minutes';
  // Only adjust position on medium and larger screens since TopBar is hidden on mobile
  const headerTopClass = showTopBar && !isScrolled ? 'md:top-16 md:sm:top-20 top-0' : 'top-0';

  // Dropdown animation variants with slower transition
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      transition: {duration: 0.75, ease: "easeInOut"}
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.75, ease: "easeOut"}
    }
  };

  return (
    <>
      <motion.header
        initial={{y: -100}}
        animate={{y: 0}}
        className={`fixed w-full z-40 transition-all duration-300 ${headerTopClass} ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Added padding-top to slide logo down a bit */}
            <Link to="/" className="flex items-center space-x-2 pt-1" aria-label="Media Performance Insights Home">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MPI</span>
              </div>
              <div className="hidden sm:block">
                <h1
                  className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-charcoal-900' : 'text-white'
                  }`}
                >
                  MediaPerformance{' '}
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
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                      className={`text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                        isScrolled
                          ? 'text-charcoal-700 hover:text-primary-600'
                          : 'text-white hover:text-white/80'
                      }`}
                    >
                      <span>{item.name}</span>
                      <SafeIcon
                        icon={FiChevronDown}
                        className={`w-4 h-4 transition-transform duration-300 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>
                    <motion.div
                      initial="hidden"
                      animate={servicesDropdownOpen ? "visible" : "hidden"}
                      variants={dropdownVariants}
                      className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white z-20 ${
                        servicesDropdownOpen ? 'block' : 'hidden'
                      }`}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-charcoal-700 hover:bg-charcoal-50 hover:text-primary-600"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
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
                )
              ))}
              <div className="flex items-center space-x-4 ml-8">
                <motion.a
                  href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
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
                isMenuOpen
                  ? 'text-charcoal-700'
                  : isScrolled
                  ? 'text-charcoal-700 hover:bg-charcoal-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu - Fixed Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />

          {/* Menu Content */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
            <div className="px-6 py-8 space-y-6 h-full">
              {/* Close button */}
              <div className="flex justify-between items-center pb-6 border-b border-charcoal-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MPI</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-charcoal-900">
                      MediaPerformance{' '}
                      <span className="text-primary-600">Insights</span>
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-charcoal-500 hover:text-charcoal-700"
                  aria-label="Close menu"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  item.dropdown ? (
                    <div key={item.name} className="space-y-2">
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                          location.pathname === item.href
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-charcoal-700 hover:text-primary-600 hover:bg-charcoal-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2 text-base rounded-lg transition-colors ${
                              location.pathname === dropdownItem.href
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-charcoal-600 hover:text-primary-600 hover:bg-charcoal-50'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-charcoal-700 hover:text-primary-600 hover:bg-charcoal-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </nav>

              {/* CTA Button */}
              <div className="pt-6 border-t border-charcoal-200 mt-auto">
                <a
                  href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-gold-500 text-white px-6 py-4 rounded-lg font-medium text-center hover:bg-gold-600 transition-colors"
                >
                  Get Insights Today
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;