import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiEye, FiZoomIn, FiZoomOut, FiSun, FiMoon, FiType, FiX} = FiIcons;

function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100); // 100%
  const [contrast, setContrast] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Apply stored accessibility preferences on mount
    const storedFontSize = localStorage.getItem('a11y-font-size');
    const storedContrast = localStorage.getItem('a11y-contrast');
    const storedReducedMotion = localStorage.getItem('a11y-reduced-motion');

    if (storedFontSize) setFontSize(parseInt(storedFontSize));
    if (storedContrast) setContrast(storedContrast);
    if (storedReducedMotion) setReducedMotion(storedReducedMotion === 'true');

    applyAccessibilitySettings(
      storedFontSize ? parseInt(storedFontSize) : 100,
      storedContrast || 'normal',
      storedReducedMotion === 'true'
    );
  }, []);

  const applyAccessibilitySettings = (newFontSize, newContrast, newReducedMotion) => {
    // Apply font size
    document.documentElement.style.fontSize = `${newFontSize}%`;
    localStorage.setItem('a11y-font-size', newFontSize);

    // Apply contrast mode
    document.body.classList.remove('high-contrast', 'inverted');
    if (newContrast !== 'normal') {
      document.body.classList.add(newContrast);
    }
    localStorage.setItem('a11y-contrast', newContrast);

    // Apply reduced motion
    if (newReducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
    localStorage.setItem('a11y-reduced-motion', newReducedMotion);
  };

  const increaseFontSize = () => {
    const newFontSize = Math.min(fontSize + 10, 150); // Maximum 150%
    setFontSize(newFontSize);
    applyAccessibilitySettings(newFontSize, contrast, reducedMotion);
  };

  const decreaseFontSize = () => {
    const newFontSize = Math.max(fontSize - 10, 70); // Minimum 70%
    setFontSize(newFontSize);
    applyAccessibilitySettings(newFontSize, contrast, reducedMotion);
  };

  const toggleContrast = () => {
    const modes = ['normal', 'high-contrast', 'inverted'];
    const currentIndex = modes.indexOf(contrast);
    const newContrast = modes[(currentIndex + 1) % modes.length];
    setContrast(newContrast);
    applyAccessibilitySettings(fontSize, newContrast, reducedMotion);
  };

  const toggleReducedMotion = () => {
    const newReducedMotion = !reducedMotion;
    setReducedMotion(newReducedMotion);
    applyAccessibilitySettings(fontSize, contrast, newReducedMotion);
  };

  const resetSettings = () => {
    setFontSize(100);
    setContrast('normal');
    setReducedMotion(false);
    applyAccessibilitySettings(100, 'normal', false);
  };

  return (
    <>
      {/* Accessibility button */}
      <motion.button
        aria-label="Accessibility Controls"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg"
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
      >
        <SafeIcon icon={FiEye} className="w-6 h-6" />
      </motion.button>

      {/* Accessibility panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.9}}
            className="bg-white dark:bg-charcoal-800 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-charcoal-900 dark:text-white">Accessibility Options</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-charcoal-100 dark:hover:bg-charcoal-700"
                aria-label="Close accessibility panel"
              >
                <SafeIcon icon={FiX} className="w-5 h-5 text-charcoal-600 dark:text-charcoal-300" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Font size controls */}
              <div>
                <h3 className="text-lg font-medium text-charcoal-800 dark:text-charcoal-200 mb-3 flex items-center">
                  <SafeIcon icon={FiType} className="w-5 h-5 mr-2" />
                  Text Size
                </h3>
                <div className="flex items-center justify-between">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 rounded-lg bg-charcoal-100 hover:bg-charcoal-200 dark:bg-charcoal-700 dark:hover:bg-charcoal-600 text-charcoal-700 dark:text-charcoal-200"
                    aria-label="Decrease font size"
                  >
                    <SafeIcon icon={FiZoomOut} className="w-5 h-5" />
                  </button>
                  <span className="font-medium text-charcoal-700 dark:text-charcoal-300">{fontSize}%</span>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 rounded-lg bg-charcoal-100 hover:bg-charcoal-200 dark:bg-charcoal-700 dark:hover:bg-charcoal-600 text-charcoal-700 dark:text-charcoal-200"
                    aria-label="Increase font size"
                  >
                    <SafeIcon icon={FiZoomIn} className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Contrast controls */}
              <div>
                <h3 className="text-lg font-medium text-charcoal-800 dark:text-charcoal-200 mb-3 flex items-center">
                  <SafeIcon icon={contrast === 'normal' ? FiSun : FiMoon} className="w-5 h-5 mr-2" />
                  Contrast
                </h3>
                <button
                  onClick={toggleContrast}
                  className="w-full p-3 rounded-lg bg-charcoal-100 hover:bg-charcoal-200 dark:bg-charcoal-700 dark:hover:bg-charcoal-600 text-charcoal-700 dark:text-charcoal-200"
                >
                  {contrast === 'normal' ? 'Standard Contrast' : contrast === 'high-contrast' ? 'High Contrast' : 'Inverted Colors'}
                </button>
              </div>

              {/* Motion controls */}
              <div>
                <h3 className="text-lg font-medium text-charcoal-800 dark:text-charcoal-200 mb-3">Motion</h3>
                <button
                  onClick={toggleReducedMotion}
                  className={`w-full p-3 rounded-lg ${
                    reducedMotion
                      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200'
                      : 'bg-charcoal-100 hover:bg-charcoal-200 dark:bg-charcoal-700 dark:hover:bg-charcoal-600 text-charcoal-700 dark:text-charcoal-200'
                  }`}
                >
                  {reducedMotion ? 'Reduced Motion: On' : 'Reduced Motion: Off'}
                </button>
              </div>

              {/* Reset button */}
              <div className="pt-2">
                <button
                  onClick={resetSettings}
                  className="w-full p-3 rounded-lg bg-charcoal-200 hover:bg-charcoal-300 dark:bg-charcoal-700 dark:hover:bg-charcoal-600 text-charcoal-800 dark:text-white"
                >
                  Reset to Defaults
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Global styles for accessibility options */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(1.5);
        }
        .inverted {
          filter: invert(1) hue-rotate(180deg);
        }
        .reduced-motion * {
          animation-duration: 0.001ms !important;
          transition-duration: 0.001ms !important;
        }
      `}</style>
    </>
  );
}

export default AccessibilityControls;