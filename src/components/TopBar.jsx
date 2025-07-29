import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiX,FiDownload,FiClock}=FiIcons;

function TopBar() {
  const [isVisible,setIsVisible]=useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{height: 0,opacity: 0}}
        animate={{height: 'auto',opacity: 1}}
        exit={{height: 0,opacity: 0}}
        transition={{duration: 0.3}}
        className="bg-gradient-to-r from-gold-500 to-gold-600 text-white relative overflow-hidden z-50 hidden md:block"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%,white 1px,transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-5">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex items-center space-x-3 md:space-x-4 flex-1">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="font-bold text-sm md:text-base">Free 5-Minute Media Checklist</span>
              </div>
              <div className="hidden lg:block text-sm">
                <span>Master your next media interview in minutes</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <motion.a
                href="https://sendfox.com/lp/1j4pj6"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-white text-gold-600 px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-gold-50 transition-colors flex items-center space-x-1 md:space-x-2 shadow-lg"
              >
                <SafeIcon icon={FiDownload} className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Get Free Checklist</span>
                <span className="sm:hidden">Get It</span>
              </motion.a>
              
              {/* Close button */}
              <button
                onClick={()=> setIsVisible(false)}
                className="text-white hover:text-gold-100 transition-colors p-1"
                aria-label="Close banner"
              >
                <SafeIcon icon={FiX} className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TopBar;