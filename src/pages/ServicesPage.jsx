import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiVideo, FiUsers, FiCheckCircle, FiCalendar, FiArrowRight, FiMic} = FiIcons;

function ServicesPage() {
  const services = [
    {
      icon: FiVideo,
      title: "Media Performance Analysis",
      subtitle: "Your last interview could have gone better. Your next one will.",
      description: "We study a recent appearance and mark the exact moments you kept attention and the moments you lost it. You get clear reasons and a plan you can run before every interview.",
      deliverables: [
        "Timestamped breakdown of wins, misses, and likely causes",
        "Written report on what worked, what did not, and why",
        "One hour review session with next steps"
      ],
      improvements: [
        "Message clarity and recall of core points",
        "Short answers with lift and clean closes",
        "Control under interruption and follow‑ups"
      ],
      timeline: "Delivery within 10 business days after we receive your materials. Rush available.",
      format: "Strategic consultation with a comprehensive written analysis. We can coordinate with communications, investor relations, and legal teams.",
      bestFor: "Leaders preparing for more media, major announcements, or asking what went wrong and how to fix it.",
      cta: "Schedule a consultation",
      id: "analysis"
    },
    {
      icon: FiMic,
      title: "Mock Media Interviews",
      subtitle: "Practice with working journalists. Real questions. Real time. Real stakes.",
      description: "You face tough follow‑ups and tight clocks that match your next appearance. We coach in the moment, then run it again.",
      deliverables: [
        "Live sessions with experienced journalists",
        "Realistic formats and timing that mirror your event",
        "Immediate notes on delivery, content, and control",
        "Clips to review between sessions"
      ],
      improvements: [
        "Composure under pressure",
        "Pivots, bridges, and reset lines",
        "Balance of credibility, feeling, and logic"
      ],
      timeline: "Typically three sessions completed inside 30 days. Intensive one to two day options available.",
      format: "Virtual or in person. Single or two‑journalist panels on request.",
      bestFor: "Earnings calls, launches, sensitive topics, and crisis preparation.",
      cta: "Book your practice session",
      id: "mock-interviews"
    },
    {
      icon: FiUsers,
      title: "Media Performance Partnership",
      subtitle: "Ongoing support for leaders with regular exposure.",
      description: "We plan the moments ahead, pressure test messages, and respond quickly when news moves. We also help you build durable relationships with the right reporters.",
      deliverables: [
        "Monthly planning for upcoming moments",
        "Quick turnaround when timing is tight",
        "Scheduled mock sessions",
        "Outreach and relationship guidance with follow‑through"
      ],
      improvements: [
        "Consistency across appearances",
        "Faster prep with fewer unforced errors",
        "Coverage tone and opportunity over time"
      ],
      timeline: "Six‑month minimum. Clear response times set at the start.",
      format: "Monthly strategic sessions plus ongoing advisory access. We partner with internal teams and outside agencies.",
      bestFor: "C‑suite leaders, regulated industries, and executives managing significant change.",
      cta: "Let's map your next quarter",
      id: "partnership"
    }
  ];

  const whyChooseUs = [
    {
      icon: FiIcons.FiEye,
      title: "Unique Dual Perspective",
      subtitle: "Journalist + Crisis Communicator Experience",
      description: "Award-winning reporter who understands editorial priorities and journalist psychology, plus government crisis communicator with real-world experience managing high-stakes situations.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: FiIcons.FiTarget,
      title: "Strategic vs. Tactical Focus",
      subtitle: "Beyond Basic Media Training",
      description: "Performance optimization rather than defensive damage control. Long-term relationship building with key industry journalists and strategic opportunity creation.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: FiIcons.FiShield,
      title: "Proven Methodologies",
      subtitle: "Ancient Wisdom + Modern Psychology",
      description: "Influence frameworks tested over 2,300 years of human persuasion combined with contemporary understanding of journalist behavior and audience decision-making.",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const processSteps = [
    {
      service: "analysis",
      steps: [
        { step: 1, title: "Strategic Consultation", description: "Assess your analysis needs and objectives through comprehensive consultation." },
        { step: 2, title: "Performance Audit", description: "Intelligence gathering and systematic analysis of your media performance patterns." },
        { step: 3, title: "Strategic Analysis", description: "Development of strategic recommendations and implementation planning." },
        { step: 4, title: "Results Presentation", description: "Comprehensive presentation of findings and strategic implementation guidance." }
      ]
    },
    {
      service: "mock-interviews",
      steps: [
        { step: 1, title: "Preparation Assessment", description: "Identify specific interview scenarios and challenges to focus on." },
        { step: 2, title: "Journalist Matching", description: "Pair with journalists experienced in your industry and likely questions." },
        { step: 3, title: "Practice Sessions", description: "Multiple interview simulations with increasing difficulty levels." },
        { step: 4, title: "Performance Review", description: "Detailed feedback and practical improvement techniques." }
      ]
    },
    {
      service: "partnership",
      steps: [
        { step: 1, title: "Partnership Consultation", description: "Determine strategic advisory needs and partnership objectives." },
        { step: 2, title: "Strategic Planning", description: "Initial strategic planning session and relationship architecture development." },
        { step: 3, title: "Monthly Advisory", description: "Ongoing monthly advisory partnership with strategic support." },
        { step: 4, title: "Continuous Optimization", description: "Performance enhancement and strategic refinement based on real-world results." }
      ]
    }
  ];

  // Schema for Services Page
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Strategic Media Services | Media Performance Insights",
    "description": "Transform your media performance from reactive responses to strategic advantage with our Media Performance Analysis, Mock Media Interviews, and Media Performance Partnership services.",
    "publisher": {
      "@type": "Organization",
      "name": "Media Performance Insights"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "Service",
        "position": index + 1,
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Media Performance Insights"
        }
      }))
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <SeoHelmet
        title="Strategic Media Services | Media Performance Insights"
        description="Transform your media performance from reactive responses to strategic advantage with our Media Performance Analysis, Mock Media Interviews, and Media Performance Partnership services."
        keywords="media performance analysis, mock media interviews, strategic media advisory, media performance partnership, media coaching, crisis communications, media strategy"
        schema={servicesSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Media <span className="text-gold-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your media performance from reactive responses to strategic advantage.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-lg text-white leading-relaxed">
                At Media Performance Insights, we help leaders and high-profile individuals master the psychology of media interactions by teaching them what journalists actually want and how audiences really decide who to trust.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Ladder Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              The Ladder
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal-50 p-8 rounded-xl mb-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start space-x-4">
                    <span className="font-bold text-primary-600">1.</span>
                    <p className="text-charcoal-700"><span className="font-semibold">Start with Analysis.</span> See what actually happened on air. Get clear fixes.</p>
                  </li>
                  <li className="flex items-start space-x-4">
                    <span className="font-bold text-primary-600">2.</span>
                    <p className="text-charcoal-700"><span className="font-semibold">Rehearse with Mock Interviews.</span> Run the play under pressure. Lock the habits.</p>
                  </li>
                  <li className="flex items-start space-x-4">
                    <span className="font-bold text-primary-600">3.</span>
                    <p className="text-charcoal-700"><span className="font-semibold">Sustain with Partnership.</span> Plan the calendar. Respond fast. Build press relationships.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Three Ways We Can Help
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Three focused services designed to transform your media performance through analysis, practice, and ongoing partnership.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                id={service.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl border border-charcoal-100 overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={service.icon} className="w-10 h-10 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-charcoal-900 mb-2">{service.title}</h3>
                      <p className="text-xl text-primary-600 font-medium mb-4">{service.subtitle}</p>
                      <p className="text-lg text-charcoal-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-bold text-charcoal-900 mb-4">Deliverables</h4>
                        <ul className="space-y-3">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-charcoal-700">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-charcoal-900 mb-4">What improves</h4>
                        <ul className="space-y-3">
                          {service.improvements.map((improvement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-charcoal-700">{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-charcoal-50 p-6 rounded-lg">
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-charcoal-800 mb-2">Timeline:</h5>
                            <p className="text-charcoal-600">{service.timeline}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-charcoal-800 mb-2">Format:</h5>
                            <p className="text-charcoal-600">{service.format}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-charcoal-800 mb-2">Best for:</h5>
                            <p className="text-charcoal-600">{service.bestFor}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <h5 className="font-semibold text-charcoal-800 mb-3">Next step:</h5>
                        <motion.a
                          href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors w-full justify-center"
                        >
                          <span>{service.cta}</span>
                          <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Framework Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              How We Evaluate Performance
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              We use four lenses to thoroughly analyze and improve your media performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-charcoal-900 mb-4">Storytelling Triangle</h3>
              <p className="text-charcoal-600 leading-relaxed">Do your messages align with what the audience cares about and fit the broader context?</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-charcoal-900 mb-4">Persuasion Compass</h3>
              <p className="text-charcoal-600 leading-relaxed">Are credibility, emotion, and logic present in the right balance?</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-charcoal-900 mb-4">FIRE Method</h3>
              <p className="text-charcoal-600 leading-relaxed">Do you remain flexible when plans fall through?</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-charcoal-900 mb-4">Self-Awareness Matrix</h3>
              <p className="text-charcoal-600 leading-relaxed">Are you showing the strongest, truest version of yourself?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Why Media Performance Insights?
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Drawing from both award-winning journalism and crisis communications experience, we provide strategic analysis and ongoing partnership to elevate your media performance when stakes are highest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-charcoal-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={reason.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-2">{reason.title}</h3>
                  <p className="text-lg font-medium text-primary-600 mb-4">{reason.subtitle}</p>
                  <p className="text-charcoal-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Getting Started
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Clear process steps for all our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processSteps.map((processGroup, groupIndex) => (
              <div key={groupIndex} className="bg-charcoal-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-8 text-center">
                  {processGroup.service === 'analysis' ? 'Media Performance Analysis' : 
                   processGroup.service === 'mock-interviews' ? 'Mock Media Interviews' : 
                   'Media Performance Partnership'}
                </h3>
                <div className="space-y-6">
                  {processGroup.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                      className="flex items-start space-x-4 bg-white p-6 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-charcoal-900 mb-2">{step.title}</h4>
                        <p className="text-charcoal-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 via-primary-900 to-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%)`}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-gold-400">Media Performance?</span>
            </h2>
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              Schedule your strategic consultation to discuss your media performance objectives and determine the best approach for your situation.
            </p>
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(245,158,11,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-all duration-300 flex items-center space-x-2 mx-auto inline-flex shadow-lg"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>Get started today</span>
            </motion.a>
            <p className="text-charcoal-300 mt-6">
              Have questions? <Link to="/contact" className="text-gold-400 hover:text-gold-300 transition-colors">Contact us</Link> for more information.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default ServicesPage;