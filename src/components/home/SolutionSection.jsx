import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiTriangle,FiCompass,FiZap,FiEye,FiUsers,FiBookOpen,FiMic,FiTarget,FiTrendingUp}=FiIcons;

function SolutionSection() {
  const frameworks=[ 
    {
      icon: FiTriangle,
      name: "The Storytelling Triangle",
      description: "Do your messages meet what the audience cares about and fit the larger moment?",
      color: "from-blue-500 to-blue-700",
      link: "/storytelling-triangle"
    },
    {
      icon: FiCompass,
      name: "The Persuasion Compass",
      description: "Are you building credibility, feeling, and logic at the right time?",
      color: "from-green-500 to-green-700",
      link: "/persuasion-compass"
    },
    {
      icon: FiZap,
      name: "The FIRE Method",
      description: "Do you stay flexible when the plan breaks and conditions change?",
      color: "from-orange-500 to-red-600",
      link: "/fire-method"
    },
    {
      icon: FiEye,
      name: "Self Awareness Matrix (S.A.M)",
      description: "Are you showing the strongest, truest version of yourself and the full scope of your expertise?",
      color: "from-purple-500 to-purple-700",
      link: "/sam"
    } 
  ];

  return ( 
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{y: 50,opacity: 0}} 
          whileInView={{y: 0,opacity: 1}} 
          viewport={{once: true}} 
          transition={{duration: 0.8}} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            We Show You Exactly What Failed and How to Fix It
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We study your past interviews. We mark the moments you won the room and the moments you lost it. No guesswork. No jargon. Clear reasons. Clear fixes.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">
            How We Break Down Performance
          </h3>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto text-center mb-12">
            We use four proven lenses to see what really happened:
          </p>
          <div id="framework" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {frameworks.map((framework,index)=> (
              <motion.div 
                key={index} 
                initial={{y: 50,opacity: 0}} 
                whileInView={{y: 0,opacity: 1}} 
                viewport={{once: true}} 
                transition={{duration: 0.6,delay: index * 0.1}} 
                className="group relative bg-white border border-charcoal-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <Link to={framework.link} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={framework.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-charcoal-900 mb-4">{framework.name}</h4>
                  <p className="text-charcoal-600 leading-relaxed text-lg">{framework.description}</p>
                  <div className={`absolute inset-0 bg-gradient-to-br ${framework.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">
            Our Approach
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-charcoal-600 leading-relaxed">
              We start with real tape. You choose recent interviews. We map what worked and why. We show where attention drifted and how to hold it next time.
            </p>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              This is not about blame. It is about clarity. Once you see the pattern, you can repeat wins and retire the habits that cost you.
            </p>
          </div>
        </div>

        <motion.div 
          initial={{y: 50,opacity: 0}} 
          whileInView={{y: 0,opacity: 1}} 
          viewport={{once: true}} 
          transition={{duration: 0.8,delay: 0.4}} 
          className="bg-charcoal-900 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Our Philosophy
          </h3>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto mb-8">
            We believe the best way to improve is by accepting and building on what happened before. Our team will work with you to choose, obtain and analyze previous media appearances, identifying both strengths to amplify and missed opportunities to capture in future interactions.
          </p>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto mb-8">
            This systematic approach reveals exactly why some messages create lasting influence while others disappear into background noise, giving you a strategic roadmap for commanding attention in every future appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a 
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{scale: 1.05}} 
              whileTap={{scale: 0.95}} 
              className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-colors"
            >
              See How It Works
            </motion.a>
            <Link 
              to="/frameworks" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-charcoal-900 transition-all duration-300"
            >
              Learn About Our Frameworks
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SolutionSection;