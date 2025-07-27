import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiArrowRight } = FiIcons;

function OnboardingPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    goals: [],
    challenges: []
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Redirect if not authenticated
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const steps = [
    {
      title: "Your Professional Role",
      description: "Select the option that best describes your current position",
      field: "role",
      options: [
        "C-Suite Executive",
        "Senior Leader",
        "Communications Professional",
        "Industry Expert",
        "Entrepreneur",
        "Other"
      ]
    },
    {
      title: "Media Experience",
      description: "What is your level of experience with media appearances?",
      field: "experience",
      options: [
        "Extensive (10+ appearances)",
        "Moderate (3-9 appearances)",
        "Limited (1-2 appearances)",
        "No previous media experience"
      ]
    },
    {
      title: "Your Communication Goals",
      description: "Select all that apply to your current objectives",
      field: "goals",
      multiSelect: true,
      options: [
        "Improve media interview performance",
        "Build thought leadership presence",
        "Handle crisis communications effectively",
        "Develop executive presence",
        "Prepare for specific upcoming media opportunity",
        "Create more engaging presentations"
      ]
    },
    {
      title: "Your Communication Challenges",
      description: "Select the areas where you face the most difficulty",
      field: "challenges",
      multiSelect: true,
      options: [
        "Anxiety during interviews",
        "Staying on message",
        "Handling difficult questions",
        "Translating technical knowledge for general audiences",
        "Creating memorable soundbites",
        "Authentic storytelling"
      ]
    }
  ];

  const handleOptionSelect = (option) => {
    const currentField = steps[currentStep].field;
    
    if (steps[currentStep].multiSelect) {
      // For multi-select fields
      setFormData(prev => {
        const currentSelections = [...prev[currentField]];
        if (currentSelections.includes(option)) {
          return {
            ...prev,
            [currentField]: currentSelections.filter(item => item !== option)
          };
        } else {
          return {
            ...prev,
            [currentField]: [...currentSelections, option]
          };
        }
      });
    } else {
      // For single-select fields
      setFormData(prev => ({
        ...prev,
        [currentField]: option
      }));
      
      // Automatically move to next step for single-select fields after a short delay
      setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      }, 300);
    }
  };

  const isOptionSelected = (option) => {
    const currentField = steps[currentStep].field;
    if (steps[currentStep].multiSelect) {
      return formData[currentField].includes(option);
    }
    return formData[currentField] === option;
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    setLoading(true);
    
    // Simulate saving data
    setTimeout(() => {
      // In a real app, you would save this data to your backend
      console.log("Onboarding data:", formData);
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const isNextDisabled = () => {
    const currentField = steps[currentStep].field;
    if (steps[currentStep].multiSelect) {
      return formData[currentField].length === 0;
    }
    return !formData[currentField];
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-charcoal-900 to-primary-900">
        <div className="text-center text-white">
          <div className="w-12 h-12 border-4 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-primary-900"
    >
      <SeoHelmet
        title="Getting Started | Media Performance Insights"
        description="Complete your onboarding to personalize your media training experience with our strategic frameworks."
        keywords="onboarding, media training setup, executive communication preferences"
      />

      <div className="min-h-screen flex">
        {/* Left Section - Onboarding Visual */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Background with glass effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-gold-500/10 to-charcoal-900/80"></div>
            <div className="absolute inset-0 backdrop-blur-sm"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-12 text-white">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MPI</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    MediaPerformance<span className="text-primary-400">Insights</span>
                  </h1>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Personalize Your{' '}
                <span className="text-gold-400">Media Training</span> Experience
              </h2>
              
              <p className="text-xl text-charcoal-200 mb-8 leading-relaxed">
                We're setting up your personalized dashboard based on your communication goals and experience level.
              </p>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold mb-4 text-gold-400">What We're Setting Up:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-charcoal-200">Your communication profile and goals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-charcoal-200">Customized framework recommendations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-charcoal-200">Your strategic learning pathway</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-charcoal-200">Access to expert resources and tools</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-charcoal-300 text-sm">
                    This should only take a few minutes to complete.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Onboarding Component */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-md"
          >
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MPI</span>
              </div>
              <h1 className="text-xl font-bold text-white">
                MediaPerformance<span className="text-primary-400">Insights</span>
              </h1>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <h3 className="text-xl font-bold mb-2">Welcome to Your Journey</h3>
                <p className="text-primary-100 text-sm">
                  Let's customize your media training experience
                </p>
                
                {/* Progress indicator */}
                <div className="mt-4 flex space-x-2">
                  {steps.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-1 rounded-full flex-1 transition-colors duration-300 ${
                        index === currentStep ? 'bg-white' : 
                        index < currentStep ? 'bg-green-400' : 'bg-white/30'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="min-h-[400px] flex flex-col">
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-charcoal-900 mb-2">
                      {steps[currentStep].title}
                    </h4>
                    <p className="text-charcoal-600">
                      {steps[currentStep].description}
                    </p>
                  </div>

                  <div className="flex-grow">
                    <div className="space-y-3 mb-8">
                      {steps[currentStep].options.map((option, index) => (
                        <div 
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            isOptionSelected(option) 
                              ? 'border-primary-500 bg-primary-50 shadow-md' 
                              : 'border-charcoal-200 hover:border-primary-300 hover:bg-charcoal-50'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                              isOptionSelected(option) 
                                ? 'border-primary-500 bg-primary-500' 
                                : 'border-charcoal-300'
                            }`}>
                              {isOptionSelected(option) && (
                                <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <span className={`${isOptionSelected(option) ? 'font-medium text-primary-700' : 'text-charcoal-700'}`}>
                              {option}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className={`px-4 py-2 rounded-lg ${
                        currentStep === 0 
                          ? 'text-charcoal-400 cursor-not-allowed' 
                          : 'text-charcoal-700 hover:bg-charcoal-100'
                      }`}
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={isNextDisabled() || loading}
                      className={`px-6 py-2 rounded-lg flex items-center ${
                        isNextDisabled() 
                          ? 'bg-charcoal-300 text-white cursor-not-allowed' 
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      ) : null}
                      {currentStep < steps.length - 1 ? 'Next' : 'Complete'}
                      {!loading && currentStep < steps.length - 1 && (
                        <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-charcoal-300 text-sm">
                Step {currentStep + 1} of {steps.length}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default OnboardingPage;