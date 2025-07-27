import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './SafeIcon';

const { FiMessageSquare, FiX, FiSmile, FiMeh, FiThumbsUp, FiSend } = FiIcons;

function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', { feedbackType, feedbackText });
    
    // Show thank you message
    setSubmitted(true);
    
    // Reset after 3 seconds and close
    setTimeout(() => {
      setFeedbackType(null);
      setFeedbackText('');
      setSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <>
      {/* Feedback button */}
      <motion.button
        aria-label="Provide Feedback"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 z-50 bg-gold-500 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SafeIcon icon={FiMessageSquare} className="w-6 h-6" />
      </motion.button>

      {/* Feedback panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-charcoal-900">
                  {submitted ? 'Thank You!' : 'Share Your Feedback'}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-charcoal-100"
                  aria-label="Close feedback panel"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5 text-charcoal-600" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SafeIcon icon={FiThumbsUp} className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-lg text-charcoal-800">Your feedback has been submitted!</p>
                    <p className="text-charcoal-600 mt-2">We appreciate your input.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">How was your experience?</label>
                      <div className="flex justify-around">
                        <button
                          type="button"
                          onClick={() => setFeedbackType('positive')}
                          className={`p-4 rounded-lg flex flex-col items-center ${
                            feedbackType === 'positive'
                              ? 'bg-green-100 text-green-700 border-2 border-green-300'
                              : 'bg-charcoal-50 text-charcoal-600 hover:bg-charcoal-100'
                          }`}
                          aria-label="Positive feedback"
                        >
                          <SafeIcon icon={FiSmile} className="w-8 h-8 mb-2" />
                          <span>Positive</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFeedbackType('suggestion')}
                          className={`p-4 rounded-lg flex flex-col items-center ${
                            feedbackType === 'suggestion'
                              ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                              : 'bg-charcoal-50 text-charcoal-600 hover:bg-charcoal-100'
                          }`}
                          aria-label="Suggestion feedback"
                        >
                          <SafeIcon icon={FiMeh} className="w-8 h-8 mb-2" />
                          <span>Suggestion</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="feedbackText" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Your feedback
                      </label>
                      <textarea
                        id="feedbackText"
                        rows="4"
                        className="w-full px-3 py-2 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us what you think..."
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={!feedbackType || !feedbackText.trim()}
                        className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium ${
                          !feedbackType || !feedbackText.trim()
                            ? 'bg-charcoal-300 text-white cursor-not-allowed'
                            : 'bg-primary-600 hover:bg-primary-700 text-white'
                        }`}
                      >
                        <SafeIcon icon={FiSend} className="w-5 h-5" />
                        <span>Submit Feedback</span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FeedbackWidget;