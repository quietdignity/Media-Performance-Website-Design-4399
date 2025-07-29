import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import {HelmetProvider} from 'react-helmet-async';
import {AuthProvider} from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import AccessibilityControls from './components/common/AccessibilityControls';
import FeedbackWidget from './components/common/FeedbackWidget';

// Page imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ChecklistPage from './pages/ChecklistPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import FAQPage from './pages/FAQPage';
import FrameworksPage from './pages/FrameworksPage';

// Service pages
import ServicesPage from './pages/ServicesPage';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  const location = useLocation();
  
  const showTopBar = location.pathname !== '/5minutes' && 
                     location.pathname !== '/login' && 
                     location.pathname !== '/onboarding' && 
                     location.pathname !== '/dashboard';
  
  const showHeaderFooter = location.pathname !== '/login' && 
                           location.pathname !== '/onboarding' && 
                           location.pathname !== '/dashboard';
  
  const showAccessibilityTools = location.pathname !== '/login' && 
                                 location.pathname !== '/onboarding';
  
  return (
    <div className="min-h-screen bg-white">
      {showTopBar && <TopBar />}
      {showHeaderFooter && <Header />}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/5minutes" element={<ChecklistPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/frameworks" element={<FrameworksPage />} />
          
          {/* Service pages */}
          <Route path="/services" element={<ServicesPage />} />
          
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/onboarding" element={
            <ProtectedRoute>
              <OnboardingPage />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      
      {showHeaderFooter && <Footer />}
      {showAccessibilityTools && (
        <>
          <ScrollToTopButton />
          <AccessibilityControls />
          <FeedbackWidget />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;