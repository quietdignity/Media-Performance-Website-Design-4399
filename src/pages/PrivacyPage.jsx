import React from 'react';
import { motion } from 'framer-motion';

function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-8">
              Privacy Policy
            </h1>
            <p className="text-lg text-charcoal-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Information We Collect</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                We collect information you provide directly to us, such as when you contact us 
                for consultation services, subscribe to our newsletter, or communicate with us 
                via email or phone.
              </p>

              <h3 className="text-xl font-bold text-charcoal-900 mt-8 mb-4">Personal Information</h3>
              <ul className="list-disc pl-6 text-charcoal-600 space-y-2 mb-6">
                <li>Name and contact information</li>
                <li>Company or organization details</li>
                <li>Professional background and media experience</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">How We Use Your Information</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-charcoal-600 space-y-2 mb-6">
                <li>Provide media performance analysis and consulting services</li>
                <li>Communicate with you about our services</li>
                <li>Send you relevant industry insights and updates (with your consent)</li>
                <li>Improve our services and develop new offerings</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Information Sharing</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third 
                parties without your consent, except as described in this policy. We may share 
                information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-charcoal-600 space-y-2 mb-6">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Data Security</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Your Rights</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-charcoal-600 space-y-2 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Contact Us</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-charcoal-50 p-6 rounded-lg">
                <p className="text-charcoal-700">
                  <strong>MediaPerformanceInsights.com</strong><br />
                  Email: insights@mediaperformanceinsights.com<br />
                  Phone: (123) 456-7890
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default PrivacyPage;