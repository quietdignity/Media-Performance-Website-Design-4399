import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiLock, FiLogIn, FiUserPlus } = FiIcons;

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simulate login - in a real app, this would be an API call
      setTimeout(() => {
        // Create mock user data
        const userData = {
          userId: 'user-' + Math.random().toString(36).substr(2, 9),
          token: 'token-' + Math.random().toString(36).substr(2, 16),
          email: email,
          name: email.split('@')[0]
        };
        
        // Store authentication data
        login(userData);
        
        // Navigate based on user status
        if (isSignUp) {
          navigate('/onboarding');
        } else {
          navigate('/dashboard');
        }
        
        setLoading(false);
      }, 1500);
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
      setLoading(false);
    }
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
        title="Login | Media Performance Insights"
        description="Access your Media Performance Insights account to continue your strategic media training journey."
        keywords="login, media training access, executive communication portal"
      />

      <div className="min-h-screen flex">
        {/* Left Section - Branding */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753477059899-blob")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/90 via-primary-900/80 to-charcoal-900/90"></div>
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
                Welcome Back to Your{' '}
                <span className="text-gold-400">Media Mastery</span> Journey
              </h2>
              
              <p className="text-xl text-charcoal-200 mb-8 leading-relaxed">
                Continue developing your strategic communication skills with our proven frameworks and expert guidance.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-charcoal-200">Access your personalized training dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-charcoal-200">Continue with our four core frameworks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-charcoal-200">Track your communication progress</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Login Form */}
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

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                  {isSignUp ? 'Create Your Account' : 'Sign In to Your Account'}
                </h3>
                <p className="text-charcoal-600">
                  {isSignUp ? 'Join our community of media professionals' : 'Access your strategic media training dashboard'}
                </p>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SafeIcon icon={FiMail} className="h-5 w-5 text-charcoal-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full pl-10 pr-3 py-2 border border-charcoal-300 rounded-md shadow-sm placeholder-charcoal-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-charcoal-700 mb-1">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SafeIcon icon={FiLock} className="h-5 w-5 text-charcoal-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete={isSignUp ? 'new-password' : 'current-password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full pl-10 pr-3 py-2 border border-charcoal-300 rounded-md shadow-sm placeholder-charcoal-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <SafeIcon icon={isSignUp ? FiUserPlus : FiLogIn} className="w-5 h-5 mr-2" />
                    )}
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <button 
                  onClick={() => setIsSignUp(!isSignUp)} 
                  className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                >
                  {isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-charcoal-300 text-sm">
                By signing in, you agree to our{' '}
                <a href="/terms" className="text-gold-400 hover:text-gold-300">Terms of Service</a>
                {' '}and{' '}
                <a href="/privacy" className="text-gold-400 hover:text-gold-300">Privacy Policy</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginPage;