import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiBriefcase, FiAward, FiTrendingUp, FiMic, FiAlertCircle} = FiIcons;

function TargetAudienceSection() {
  const audiences = [
    {
      icon: FiBriefcase,
      title: "C-Suite Executives",
      description: "Leaders who carry the brand in public.",
      background: "from-blue-500 to-blue-700"
    },
    {
      icon: FiAward,
      title: "Industry Experts",
      description: "Specialists who must make complex ideas simple.",
      background: "from-green-500 to-green-700"
    },
    {
      icon: FiTrendingUp,
      title: "Public Company Leaders",
      description: "Executives on earnings calls, investor questions, and regulatory scrutiny.",
      background: "from-purple-500 to-purple-700"
    },
    {
      icon: FiMic,
      title: "Authors and Speakers",
      description: "Experts who want to turn attention into opportunity.",
      background: "from-orange-500 to-red-600"
    },
    {
      icon: FiAlertCircle,
      title: "Crisis Leaders",
      description: "Teams facing hard questions who need strategy and calm.",
      background: "from-red-500 to-red-700"
    }
  ];

  const testimonials = [
    {
      quote: "He crafts clear, audience‑ready messages from complicated material that resonates with our target demographics.",
      author: "Brand manager, corporate sector"
    },
    {
      quote: "Under his guidance our online engagement grew in a meaningful way that translated to measurable business outcomes.",
      author: "Chief marketing officer, corporate communications"
    },
    {
      quote: "He moved our brand forward by leaps and bounds through strategic positioning and clear messaging frameworks.",
      author: "Program director, nonprofit sector"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Who Benefits
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {audiences.slice(0, 3).map((audience, index) => (
            <motion.div
              key={index}
              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: index * 0.1}}
              className="group relative overflow-hidden rounded-xl bg-white border border-charcoal-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.background} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${audience.background} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={audience.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{audience.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {audiences.slice(3).map((audience, index) => (
            <motion.div
              key={index + 3}
              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: (index + 3) * 0.1}}
              className="group relative overflow-hidden rounded-xl bg-white border border-charcoal-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.background} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${audience.background} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={audience.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{audience.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8, delay: 0.4}}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className="bg-charcoal-50 p-6 rounded-lg border border-charcoal-200"
              >
                <p className="text-charcoal-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-charcoal-500 font-medium">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Difference Section */}
        <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8, delay: 0.5}}
          className="bg-charcoal-900 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Why This Is Different
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-charcoal-300 leading-relaxed">
              Most training files off your edges. We sharpen them. You stay yourself. Clearer. More strategic. More trusted.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h4 className="text-lg font-bold text-gold-400 mb-3">Real Experience</h4>
                <p className="text-charcoal-300">
                  Award‑winning journalist and crisis communicator who knows what reporters need and how leaders should answer.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gold-400 mb-3">Strategy First</h4>
                <p className="text-charcoal-300">
                  We help you create chances, not just avoid mistakes. Relationships. Timing. Follow‑through.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gold-400 mb-3">Proven Methods</h4>
                <p className="text-charcoal-300">
                  Time‑tested influence principles paired with how modern media actually works.
                </p>
              </div>
            </div>
          </div>
          <motion.a
            href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors mt-8"
          >
            Schedule Your Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default TargetAudienceSection;