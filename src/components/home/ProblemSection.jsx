import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiAlertTriangle,FiTrendingDown,FiUsers,FiTarget}=FiIcons;

function ProblemSection() {
  const problems=[ 
    {
      icon: FiAlertTriangle,
      title: "Expertise that doesn't carry",
      description: "What wins in boardrooms falls flat on camera."
    },
    {
      icon: FiTrendingDown,
      title: "Missed chances to lead",
      description: "Every unclear message is authority left on the table."
    },
    {
      icon: FiUsers,
      title: "Low connection",
      description: "Technical depth without clear language loses people."
    },
    {
      icon: FiTarget,
      title: "Hoping instead of preparing",
      description: "Most leaders wing it. The best follow a method."
    } 
  ];

  return ( 
    <section className="py-20 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{y: 50,opacity: 0}} 
          whileInView={{y: 0,opacity: 1}} 
          viewport={{once: true}} 
          transition={{duration: 0.8}} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Why Smart Leaders Stall in Media
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-charcoal-600 leading-relaxed">
              You know your field. You earned the title. Then the mic goes live and something slips.
            </p>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              Sharp insights blur. Key points land soft. Minutes later the audience remembers the host, not you.
            </p>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              Intelligence is not the problem. Media is its own arena. The leaders who win understand what makes people listen, trust, and remember.
            </p>
          </div>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">
            What Is Getting In Your Way
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem,index)=> (
              <motion.div 
                key={index} 
                initial={{y: 50,opacity: 0}} 
                whileInView={{y: 0,opacity: 1}} 
                viewport={{once: true}} 
                transition={{duration: 0.6,delay: index * 0.1}} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={problem.icon} className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-charcoal-900 mb-4">{problem.title}</h4>
                <p className="text-charcoal-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{y: 50,opacity: 0}} 
          whileInView={{y: 0,opacity: 1}} 
          viewport={{once: true}} 
          transition={{duration: 0.8,delay: 0.4}} 
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Gap Between Knowledge and Communication
          </h3>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            You've spent years mastering your expertise. Now it's time to master how you share it. Strategic media performance isn't about natural talent—it's about proven frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProblemSection;