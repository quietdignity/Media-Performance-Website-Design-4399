import React from 'react';
import {motion} from 'framer-motion';
import SeoHelmet from '../components/SeoHelmet';
import AIContentProvider from '../components/AIContentProvider';
import AIReadableContent from '../components/common/AIReadableContent';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {useAIOptimization} from '../hooks/useAIOptimization';

const {FiBriefcase,FiBook,FiTarget,FiAward,FiCalendar,FiArrowRight}=FiIcons;

function AboutPage() {
  // AI optimization data
  const pageData={
    title: "About James A. Brown - Media Performance Insights",
    description: "Meet James A. Brown,veteran journalist and strategic communication expert with extensive experience at NPR,USA Today,PBS,and BBC.",
    topics: [
      "James A. Brown biography",
      "veteran journalist experience",
      "strategic communication expert",
      "media training background",
      "crisis communication experience",
      "executive coaching credentials"
    ],
    contentType: "biography"
  };

  useAIOptimization(pageData);

  const credentials=[
    {
      icon: FiBriefcase,
      title: "Journalism Experience",
      description: "Extensive experience in public and commercial digital and broadcast journalism"
    },
    {
      icon: FiBook,
      title: "USA Today",
      description: "Professional journalism experience with major national publication"
    },
    {
      icon: FiTarget,
      title: "Political Speechwriter and Internal Communications Manager",
      description: "Political,change communication and internal messaging expertise"
    },
    {
      icon: FiAward,
      title: "Corporate and Nonprofit Communications",
      description: "Extensive experience in the corporate and non-profit public relations and marketing and communication"
    }
  ];

  const experience=[
    {
      category: "Media Organizations",
      items: ["NPR (National Public Radio)","USA Today","PBS","BBC"]
    },
    {
      category: "Government Experience",
      items: ["Political speechwriting","Internal communications management","Crisis communication protocols"]
    },
    {
      category: "Corporate & Nonprofit",
      items: ["Public relations strategy","Marketing communications","Organizational messaging"]
    },
    {
      category: "Strategic Expertise",
      items: ["Media performance analysis","Executive communication coaching","Crisis management"]
    }
  ];

  const philosophy=[
    {
      principle: "Authentic Authority",
      description: "Help leaders communicate with genuine expertise while maintaining strategic messaging discipline."
    },
    {
      principle: "Strategic Service",
      description: "Transform communication from self-serving corporate messaging into stakeholder-focused value creation."
    },
    {
      principle: "Sustainable Influence",
      description: "Build lasting relationships with journalists and stakeholders through consistent,trustworthy communication."
    }
  ];
  
  const personalQuotes=[
    {
      quote: "Your moment is nothing if it is not shared.",
      context: "On the importance of authentic connection in leadership communication"
    },
    {
      quote: "Without losing something,you gain nothing.",
      context: "On the necessity of sacrifice and risk in achieving meaningful growth"
    },
    {
      quote: "There is nothing new under the sun.",
      context: "On the timeless principles that govern effective communication across generations"
    },
    {
      quote: "Media is not going back to the way it was. Read the structure,then choose your lane.",
      context: "On adapting to the evolving media landscape with strategic awareness"
    }
  ];

  // Schema for About Page
  const aboutSchema={
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "James A. Brown",
    "jobTitle": "Veteran Journalist and Strategic Communication Expert",
    "description": "Award-winning journalist with extensive experience in public and commercial digital and broadcast journalism,specializing in executive media training and strategic communication.",
    "url": "https://mediaperformanceinsights.com/about",
    "sameAs": [
      "https://www.linkedin.com/in/anotherjamesbrown",
      "https://muckrack.com/jamesbrowntv"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Media Performance Insights"
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "NPR"
      },
      {
        "@type": "Organization",
        "name": "USA Today"
      },
      {
        "@type": "Organization",
        "name": "PBS"
      },
      {
        "@type": "Organization",
        "name": "BBC"
      }
    ]
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
        title="About James A. Brown | Media Performance Insights"
        description="Meet James A. Brown,veteran journalist and strategic communication expert with extensive experience in public and commercial digital and broadcast journalism at NPR,USA Today,PBS,and BBC."
        keywords="James A. Brown,veteran journalist,media training expert,strategic communication,NPR,USA Today,PBS,BBC,crisis communication,executive coaching"
        schema={aboutSchema}
      />

      <div className="hidden">
        <AIContentProvider
          title={pageData.title}
          description={pageData.description}
          keyTopics={pageData.topics}
          mainContent="James A. Brown is a veteran journalist and strategic communication expert with extensive experience in public and commercial digital and broadcast journalism,having worked with major organizations including NPR,USA Today,PBS,and BBC."
          actionableInsights={[
            "Schedule strategic consultation with experienced media professional",
            "Learn from dual perspective of journalist and crisis communicator",
            "Access proven frameworks for executive communication",
            "Benefit from real-world media and government experience"
          ]}
          relatedPages={[
            {name: "Services",url: "https://mediaperformanceinsights.com/services"},
            {name: "Frameworks",url: "https://mediaperformanceinsights.com/frameworks"},
            {name: "Contact",url: "https://mediaperformanceinsights.com/contact"}
          ]}
        />

        <AIReadableContent contentType="biography" topics={pageData.topics}>
          <div className="bg-charcoal-50 p-6 rounded-xl mb-8" data-ai-summary="true">
            <h3 className="text-lg font-bold text-charcoal-900 mb-4">
              📋 Content Summary for AI Assistants
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Overview:</h4>
                <p className="text-charcoal-700">Veteran journalist and strategic communication expert with extensive experience in public and commercial digital and broadcast journalism. Founder of Media Performance Insights,specializing in executive media training and crisis communication.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Key Points:</h4>
                <ul className="list-disc pl-5 text-charcoal-700 space-y-1">
                  <li>Extensive experience in public and commercial digital and broadcast journalism</li>
                  <li>Professional experience with NPR,USA Today,PBS,and BBC</li>
                  <li>Political speechwriter and internal communications manager</li>
                  <li>Corporate and nonprofit communications expertise</li>
                  <li>Founder of Media Performance Insights</li>
                  <li>Developer of four proprietary communication frameworks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Action Items:</h4>
                <ul className="list-disc pl-5 text-charcoal-700 space-y-1">
                  <li>Schedule strategic consultation</li>
                  <li>Explore the four communication frameworks</li>
                  <li>Learn about media performance analysis services</li>
                  <li>Connect on LinkedIn for industry insights</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Related Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {pageData.topics.map((topic,index)=> (
                    <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <p className="text-sm text-charcoal-600">
                  <strong>Provider:</strong> Media Performance Insights |{' '}
                  <strong>Expert:</strong> James A. Brown (NPR,USA Today,PBS,BBC) |{' '}
                  <strong>Specialization:</strong> Executive media training and strategic communication
                </p>
              </div>
            </div>
          </div>
        </AIReadableContent>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{y: 50,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{duration: 0.8,delay: 0.2}}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{scale: 0.8,opacity: 0}}
                animate={{scale: 1,opacity: 1}}
                transition={{duration: 0.6,delay: 0.4}}
                className="relative"
              >
                <div className="w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-lg border-4 border-gold-400 shadow-2xl">
                  <img
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753472217521-blob"
                    alt="James A. Brown - Founder of Media Performance Insights"
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-600/20 to-gold-500/20"></div>
              </motion.div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet <span className="text-gold-400">James A. Brown</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Veteran Journalist & Strategic Communication Expert
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-lg text-white leading-relaxed">
                With extensive experience in public and commercial digital and broadcast journalism,
                James brings a unique dual perspective as both journalist and crisis communicator to help
                executives master media performance when stakes are highest.
              </p>
              <p className="text-lg text-white leading-relaxed mt-4 italic">
                "Don't just tell a story, start a fire."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{y: 30,opacity: 0}}
            whileInView={{y: 0,opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Professional Background
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              A unique combination of journalism excellence and strategic communication expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {credentials.map((credential,index)=> (
              <motion.div
                key={index}
                initial={{y: 50,opacity: 0}}
                whileInView={{y: 0,opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.6,delay: index * 0.1}}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-charcoal-100"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={credential.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{credential.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{credential.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Details Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{y: 30,opacity: 0}}
            whileInView={{y: 0,opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Career Highlights
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Decades of experience across major media organizations,government communications,and strategic advisory roles.
            </p>
            <p className="text-lg text-primary-600 italic mt-4">
              "Some people are meant to play the piano. Others are meant to carry the piano. Know which role you are in."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experience.map((category,index)=> (
              <motion.div
                key={index}
                initial={{y: 30,opacity: 0}}
                whileInView={{y: 0,opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5,delay: index * 0.1}}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item,itemIndex)=> (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Quotes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{y: 30,opacity: 0}}
            whileInView={{y: 0,opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Communication Philosophy
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Guiding principles that shape my approach to media training and strategic communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {personalQuotes.map((item,index)=> (
              <motion.div
                key={index}
                initial={{y: 30,opacity: 0}}
                whileInView={{y: 0,opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5,delay: index * 0.1}}
                className="bg-charcoal-50 rounded-xl p-8"
              >
                <p className="text-2xl text-primary-600 font-bold italic mb-4">
                  "{item.quote}"
                </p>
                <p className="text-charcoal-600 text-sm">
                  {item.context}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{y: 30,opacity: 0}}
            whileInView={{y: 0,opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-charcoal-50 rounded-xl p-8 mb-12">
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                "The best media training doesn't change who you are—it reveals who you are at your strongest.
                My job is to help leaders access their complete expertise and share it in ways that serve
                stakeholders' genuine needs while achieving legitimate business goals."
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                This philosophy drives everything we do at Media Performance Insights,from our analytical
                approach to our framework development to our ongoing partnership model.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophy.map((item,index)=> (
                <motion.div
                  key={index}
                  initial={{y: 20,opacity: 0}}
                  whileInView={{y: 0,opacity: 1}}
                  viewport={{once: true}}
                  transition={{duration: 0.4,delay: index * 0.1}}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{item.principle}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 via-primary-900 to-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 25% 25%,#3b82f6 0%,transparent 50%),radial-gradient(circle at 75% 75%,#f59e0b 0%,transparent 50%)`}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{y: 50,opacity: 0}}
            whileInView={{y: 0,opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-gold-400">Media Performance?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-charcoal-200 max-w-3xl mx-auto mb-6 leading-relaxed">
              Let's discuss your media performance goals and develop a strategic approach
              that transforms your expertise into compelling,authentic communication.
            </p>
            
            <p className="text-xl text-gold-400 italic mb-12">
              "Without losing something,you gain nothing."
            </p>
            
            <motion.a
              href="https://tidycal.com/jamesbrowntv/media-performance-insights-consultations"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{scale: 1.05,boxShadow: '0 20px 40px rgba(245,158,11,0.3)'}}
              whileTap={{scale: 0.95}}
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-all duration-300 flex items-center space-x-2 mx-auto inline-flex shadow-lg"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>Schedule Your Strategic Consultation</span>
            </motion.a>
            
            <p className="text-charcoal-300 mt-6">
              Connect with James directly to discuss your media performance objectives.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutPage;