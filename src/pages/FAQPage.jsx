import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCalendar, FiPlus, FiMinus} = FiIcons;

function FAQPage() {
  const [openFaqs, setOpenFaqs] = React.useState({});

  const toggleFaq = (id) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqs = [
    {
      id: 'consultation',
      question: "What happens in the consultation?",
      answer: "We review your goals, audiences, and upcoming moments. You share one recent interview. We spot the key wins, the misses, and the likely causes. You leave with a clear next step."
    },
    {
      id: 'past-interview',
      question: "Do I need a past interview?",
      answer: "It helps. A two to five minute clip is enough. If you do not have tape, record a short phone video answering three questions you expect to face. We can work from that."
    },
    {
      id: 'difference',
      question: "How is this different from standard media training?",
      answer: "Traditional training teaches generic rules. We diagnose your actual performance, using named frameworks, and show you why specific moments worked or failed. Then we build a simple plan you can repeat."
    },
    {
      id: 'frameworks',
      question: "What frameworks do you use?",
      answer: "We apply the Storytelling Triangle, the Persuasion Compass, the FIRE Method, and the Self Awareness Matrix. Together they test message clarity, timing, audience fit, credibility, composure, and presence."
    },
    {
      id: 'analysis-results',
      question: "What will I get after an analysis?",
      answer: "A timestamped breakdown, a written report on what worked and what did not, and a live review session with fixes you can run before every interview."
    },
    {
      id: 'turnaround',
      question: "How fast can you turn this around?",
      answer: "Standard delivery is within ten business days after we receive your materials. Rush delivery is available when timing is tight."
    },
    {
      id: 'who-works',
      question: "Who will I work with?",
      answer: "You work directly with James A. Brown, an award‑winning journalist and crisis communicator. For mock interviews, we bring in experienced journalists who ask real questions and press for clarity."
    },
    {
      id: 'pr-team',
      question: "Do you work with our PR or IR team?",
      answer: "Yes. We partner with internal communications, public relations, and investor relations teams. We align on goals, messages, and guardrails so everyone pulls in the same direction."
    },
    {
      id: 'earnings-calls',
      question: "Can you prepare us for earnings calls and regulated topics?",
      answer: "Yes. We help public company leaders handle earnings, guidance, M&A, and regulatory scrutiny. We respect Reg FD and all disclosure rules."
    },
    {
      id: 'crisis-work',
      question: "Do you handle crisis work?",
      answer: "Yes. We offer surge support with clear response windows. If you think a story may break, contact us before it does."
    },
    {
      id: 'nda',
      question: "Will you sign an NDA?",
      answer: "Yes. We routinely sign NDAs. We protect your materials, strategy, and drafts."
    },
    {
      id: 'marketing-clips',
      question: "Will you use our clips in marketing?",
      answer: "Only with written permission. If you agree, we can anonymize names and sensitive details."
    },
    {
      id: 'improvement-measure',
      question: "How do you measure improvement?",
      answer: "We track recall of three core messages, clarity scores from neutral listeners, pace and brevity, interrupt recovery, and audience actions such as inbound interest, coverage tone, and social lift."
    },
    {
      id: 'in-person',
      question: "Do you offer in‑person sessions?",
      answer: "Yes. Most work is virtual for speed. We also provide on‑site analysis, mock interviews, and workshops on request."
    },
    {
      id: 'no-time',
      question: "What if I have no time?",
      answer: "Start with the consultation. We will tailor the plan to the time you have and prioritize the two or three changes that move results."
    },
    {
      id: 'team-training',
      question: "Do you train teams?",
      answer: "Yes. We run small executive cohorts and private workshops. Team work pairs shared drills with brief one‑on‑one coaching."
    },
    {
      id: 'industries',
      question: "What industries do you serve?",
      answer: "We work with leaders in technology, finance, healthcare, energy, higher education, government, and mission‑driven organizations."
    },
    {
      id: 'pricing',
      question: "How is pricing set?",
      answer: "Pricing depends on scope, urgency, and risk. After the consultation you receive a clear proposal with deliverables, timeline, and investment."
    },
    {
      id: 'payment',
      question: "What are your payment terms?",
      answer: "We invoice with electronic payment options. Retainers bill in advance. Project work typically requires a deposit to start."
    },
    {
      id: 'reschedule',
      question: "What is your reschedule and cancellation policy?",
      answer: "You can reschedule through the booking link. For paid sessions we honor changes with notice. We share full terms with each proposal."
    },
    {
      id: 'international',
      question: "Do you work internationally and across time zones?",
      answer: "Yes. We serve clients in multiple time zones and schedule to fit executive calendars."
    },
    {
      id: 'accessibility',
      question: "Is accessibility supported?",
      answer: "Yes. We can provide live captions, transcripts, and accessible materials on request."
    }
  ];

  // Schema for FAQ Page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      className="pt-20"
    >
      <SeoHelmet
        title="Frequently Asked Questions | Media Performance Insights"
        description="Get answers to common questions about our media training, analysis services, and coaching approach. Learn how we help leaders and high-profile individuals improve their media performance."
        keywords="media training FAQ, coaching questions, media analysis services, mock interview questions, crisis communication preparation"
        schema={faqSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-gold-400">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed">
              Get answers to common questions about our services, process, and approach
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-lg text-charcoal-600">
              Find answers to the most common questions about our services. If you don't see what you're looking for, feel free to{' '}
              <Link to="/contact" className="text-primary-600 font-medium hover:text-primary-700">
                contact us
              </Link>{' '}
              directly.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="border border-charcoal-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  aria-expanded={openFaqs[faq.id]}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <h3 className="text-lg font-semibold text-charcoal-900">{faq.question}</h3>
                  <span className="ml-4 flex-shrink-0">
                    <SafeIcon
                      icon={openFaqs[faq.id] ? FiMinus : FiPlus}
                      className={`h-5 w-5 transition-colors duration-200 ${
                        openFaqs[faq.id] ? 'text-primary-600' : 'text-charcoal-500'
                      }`}
                    />
                  </span>
                </button>
                
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaqs[faq.id] ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-charcoal-200">
                    <p className="text-charcoal-600">{faq.answer}</p>
                    {faq.id === 'consultation' && (
                      <div className="mt-4">
                        <motion.a
                          href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{scale: 1.05}}
                          whileTap={{scale: 0.95}}
                          className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm"
                        >
                          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                          <span>Schedule a consultation</span>
                        </motion.a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-charcoal-600 mb-8 max-w-2xl mx-auto">
              Every situation is unique. Schedule a consultation to discuss your specific needs and how we can help you transform your media performance.
            </p>
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="inline-flex items-center space-x-2 bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>Schedule Your Consultation</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default FAQPage;