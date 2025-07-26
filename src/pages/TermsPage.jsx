import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCalendar} = FiIcons;

function TermsPage() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      className="pt-20"
    >
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-8">
              Terms of Service
            </h1>
            <p className="text-lg text-charcoal-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Acceptance of Terms</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                By accessing and using the services provided by MediaPerformanceInsights.com, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Services Description</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                MediaPerformanceInsights.com provides strategic media performance analysis, consulting services, and communication training for professionals and organizations.
              </p>

              <h3 className="text-xl font-bold text-charcoal-900 mt-8 mb-4">Our Services Include:</h3>
              <ul className="list-disc pl-6 text-charcoal-600 space-y-2 mb-6">
                <li>Media performance analysis and video breakdown</li>
                <li>Strategic communication consulting</li>
                <li>Framework development and implementation</li>
                <li>Custom materials and talking points creation</li>
                <li>One-on-one strategy sessions</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Client Responsibilities</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Clients agree to:
              </p>
              <ul className="list-disc pl-6 text-charcoal-600 space-y-2 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Participate actively in the consultation process</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain confidentiality of proprietary methods and frameworks</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Payment Terms</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-charcoal-600 space-y-2 mb-6">
                <li>Payment is required before service delivery</li>
                <li>Refunds are handled on a case-by-case basis</li>
                <li>Additional services may incur additional fees</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Intellectual Property</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                All frameworks, methodologies, and materials developed by MediaPerformanceInsights.com remain our intellectual property. Clients receive a license to use provided materials for their personal or organizational communication purposes.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Confidentiality</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                We maintain strict confidentiality regarding all client information, media content, and strategic discussions. This confidentiality extends indefinitely beyond the completion of services.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Limitation of Liability</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                MediaPerformanceInsights.com provides strategic analysis and recommendations. The implementation and results of these recommendations remain the responsibility of the client. We cannot guarantee specific outcomes from media appearances or communication strategies.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Termination</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Either party may terminate services with appropriate notice as specified in individual service agreements. Confidentiality obligations survive termination.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Changes to Terms</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                We reserve the right to modify these terms at any time. Changes will be communicated to active clients and posted on our website.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-12 mb-6">Contact Information</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                For questions regarding these terms, please schedule a consultation:
              </p>
              <div className="bg-charcoal-50 p-6 rounded-lg">
                <p className="text-charcoal-700 mb-4">
                  <strong>MediaPerformanceInsights.com</strong>
                </p>
                <motion.a
                  href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="inline-flex items-center space-x-2 bg-gold-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gold-600 transition-colors text-sm"
                >
                  <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                  <span>Schedule a Consultation</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default TermsPage;