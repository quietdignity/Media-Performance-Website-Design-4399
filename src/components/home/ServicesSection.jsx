import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiVideo, FiUsers, FiCheckCircle, FiCalendar, FiArrowRight, FiMic} = FiIcons;

function ServicesSection() {
  const services = [
    {
      icon: FiVideo,
      title: "Media Performance Analysis",
      subtitle: "Your last interview could have gone better. Your next one will.",
      description: "We study a recent appearance and mark the exact moments you kept attention and the moments you lost it. You get clear reasons and a plan you can run before every interview.",
      features: [
        "Timestamped breakdown",
        "Written report on what worked, what did not, and why",
        "One hour review session with next steps"
      ],
      improvements: [
        "Message clarity",
        "Short answers with lift",
        "Control under interruption",
        "Audience recall of your three core points"
      ],
      bestFor: "Good for: Leaders preparing for more media. Major announcements. Anyone asking what went wrong and how to fix it.",
      cta: "Get started today",
      id: "analysis"
    },
    {
      icon: FiMic,
      title: "Mock Media Interviews",
      subtitle: "Practice with working journalists. Real questions. Real time. Real stakes.",
      description: "You face tough follow ups and time limits that match your next appearance. We coach in the moment. Then we run it again.",
      features: [
        "Live sessions with experienced journalists",
        "Realistic formats and timing",
        "Immediate notes on delivery, content, and control",
        "Clips you can review between sessions"
      ],
      improvements: [
        "Composure",
        "Pivots",
        "Bridge lines",
        "The balance of credibility, feeling, and logic"
      ],
      bestFor: "Good for: Earnings calls. Launches. Sensitive topics. Crisis preparation.",
      cta: "Book Your Practice Session",
      id: "mock-interviews"
    },
    {
      icon: FiUsers,
      title: "Media Performance Partnership",
      subtitle: "Ongoing support for leaders with regular exposure.",
      description: "We plan the moments ahead, pressure test the messages, and stay on call when news moves. We help you build durable relationships with the right reporters.",
      features: [
        "Monthly planning for upcoming moments",
        "Fast help when timing is tight",
        "Mock sessions on a schedule",
        "Guidance on outreach and follow through"
      ],
      improvements: [
        "Consistency across hits",
        "Faster prep",
        "Fewer unforced errors",
        "Better coverage tone over time"
      ],
      bestFor: "Good for: C‑suite leaders. Regulated industries. Executives managing significant change.",
      cta: "Let's Map Your Next Quarter",
      id: "partnership"
    }
  ];

  return (
    <section className="py-20 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
            The Ladder
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Start with Analysis. See what actually happened on air. Get clear fixes.<br />
            Rehearse with Mock Interviews. Run the play under pressure. Lock the habits.<br />
            Sustain with Partnership. Plan the calendar. Respond fast. Build press relationships.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: index * 0.1}}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-2" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-lg font-medium text-primary-600 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-charcoal-600 mb-6 leading-relaxed" itemProp="description">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-3">You receive:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3" itemProp="hasOfferCatalog">
                          <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-3">What improves:</h4>
                    <p className="text-charcoal-600">
                      {service.improvements.join(". ")}
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="text-charcoal-600">{service.bestFor}</p>
                  </div>
                  <motion.a
                    href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors w-full justify-center"
                  >
                    <span>{service.cta}</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </motion.a>
                  <meta itemProp="provider" content="Media Performance Insights" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8, delay: 0.4}}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              How we evaluate performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Storytelling Triangle</h4>
                <p className="text-primary-100">Do your messages align with what the audience cares about and fit the broader context?</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Persuasion Compass</h4>
                <p className="text-primary-100">Are credibility, emotion, and logic present in the right balance?</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">FIRE Method</h4>
                <p className="text-primary-100">Do you remain flexible when plans fall through?</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Self-Awareness Matrix</h4>
                <p className="text-primary-100">Are you showing the strongest, truest version of yourself?</p>
              </div>
            </div>
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
            >
              Get started today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;