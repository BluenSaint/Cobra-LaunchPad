'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

const features = [
  {
    title: 'Automated Dispute Filing',
    description: 'AI-powered system generates and files dispute letters based on your credit report analysis',
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18H17V16H7V18Z" fill="currentColor"/>
        <path d="M17 14H7V12H17V14Z" fill="currentColor"/>
        <path d="M7 10H11V8H7V10Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Real-Time Score Monitoring',
    description: 'Track your credit score changes with detailed analytics and instant notifications',
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13H5V11H3V13Z" fill="currentColor"/>
        <path d="M3 17H5V15H3V17Z" fill="currentColor"/>
        <path d="M3 9H5V7H3V9Z" fill="currentColor"/>
        <path d="M13 17H15V15H13V17Z" fill="currentColor"/>
        <path d="M9 17H11V15H9V17Z" fill="currentColor"/>
        <path d="M13 13H15V11H13V13Z" fill="currentColor"/>
        <path d="M9 13H11V11H9V13Z" fill="currentColor"/>
        <path d="M13 9H15V7H13V9Z" fill="currentColor"/>
        <path d="M9 9H11V7H9V9Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M17 3H21V7H17V3ZM19 5H19.001V5.001H19V5Z" fill="currentColor"/>
        <path d="M3 21H21V19H3V21Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M19 17H17V9.83L19 7.83V17ZM21 19H21.0015V5.82843L17.8284 2.65685C17.4379 2.26633 16.7042 2 16 2H3C1.89543 2 1 2.89543 1 4V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19ZM19 17V5.82843L17.8284 4.65685C17.4379 4.26633 16.7042 4 16 4H3V19H19Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Legally Guided Dispute Automation',
    description: 'AI-powered dispute strategies based on consumer protection laws and regulations',
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Business Credit Solutions',
    description: 'Specialized strategies to build and improve business credit profiles',
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8H19V16H5V8Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5Z" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  }

  const featureCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5
      }
    }),
    hover: { 
      y: -10, 
      boxShadow: "0 15px 30px -8px rgba(139, 92, 246, 0.3)",
      border: "1px solid rgba(139, 92, 246, 0.5)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3 } 
    },
    hover: { 
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: { 
        duration: 0.5,
        type: "spring"
      } 
    }
  }

  const highlightCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.15 + 0.5,
        duration: 0.6,
        type: "spring",
        damping: 15
      }
    }),
    hover: { 
      y: -10,
      scale: 1.02,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }
    }
  }

  const codeContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 1.2 }
    }
  }

  const typingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 1.5
      }
    }
  }

  const typingCharVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const codeText = `// Credit repair AI engine
import { analyzeCredit } from './credit-core';

// Generate optimal dispute letters
async function generateDisputes(report) {
  const analysis = await analyzeCredit(report);
  
  return analysis.items
    .filter(item => item.accuracy < 0.8)
    .map(item => ({
      account: item.accountName,
      reason: item.reasonCodes,
      strategy: item.recommendedAction,
      probability: item.successProb
    }));
}

// Execute the dispute pipeline
export default function runDisputes(userData) {
  console.log("Starting disputes for: " + userData.name);
  const disputes = generateDisputes(userData.report);
  return disputes;
}`

  return (
    <section id="features" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            Our AI Credit Repair <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Features</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400 max-w-2xl mx-auto">
            Project Cobra combines AI technology with credit expertise to help improve your credit score.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={featureCardVariants}
              whileHover="hover"
              className="flex flex-col p-6 rounded-lg border border-purple-900/30 bg-slate-900/30 backdrop-blur-sm overflow-hidden"
            >
              <motion.div 
                className="h-12 w-12 text-primary mb-4 flex items-center justify-center bg-purple-900/20 p-2 rounded-md"
                variants={iconVariants}
                whileHover="hover"
              >
                <feature.icon />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
              
              {/* Floating decoration */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-purple-600/5 to-indigo-600/5 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 45, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 1.5
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Feature highlights */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div
            custom={0}
            variants={highlightCardVariants}
            whileHover="hover"
            className="bg-gradient-to-br from-purple-600/80 to-purple-800/80 p-8 rounded-xl text-white shadow-xl border border-purple-500/20 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-bold">Fast Results</h3>
            </div>
            <p>Our AI-powered system works around the clock to process disputes, often delivering results in 30-45 days.</p>
            
            {/* Animated particles */}
            <motion.div
              className="absolute top-0 right-0 w-3 h-3 rounded-full bg-white/30"
              animate={{
                y: [0, 100],
                x: [0, -50],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-white/30"
              animate={{
                y: [-20, 20],
                x: [10, -10],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.div
            custom={1}
            variants={highlightCardVariants}
            whileHover="hover"
            className="bg-gradient-to-br from-indigo-600/80 to-indigo-800/80 p-8 rounded-xl text-white shadow-xl border border-indigo-500/20 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.2428 7.75738L10.0003 13.9999L7.75781 11.7574" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-bold">Secure & Compliant</h3>
            </div>
            <p>FCRA, CROA compliant algorithms ensure all disputes follow legal consumer protection guidelines.</p>
            
            {/* Animated shield pulse */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-400/10"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.div
            custom={2}
            variants={highlightCardVariants}
            whileHover="hover"
            className="bg-gradient-to-br from-purple-500/80 to-violet-800/80 p-8 rounded-xl text-white shadow-xl border border-violet-500/20 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C8.8299 15 6.01077 16.5306 4.21597 18.906C3.83897 19.4172 3.65047 19.6728 3.60496 20.0195C3.55945 20.3662 3.67213 20.6604 3.89748 21.2487C4.12284 21.837 4.23552 22.1312 4.55258 22.3156C4.86964 22.5 5.24743 22.5 6.00303 22.5H17.997C18.7526 22.5 19.1304 22.5 19.4474 22.3156C19.7645 22.1312 19.8772 21.837 20.1025 21.2487C20.3279 20.6604 20.4405 20.3662 20.395 20.0195C20.3495 19.6728 20.161 19.4172 19.784 18.906C17.9892 16.5306 15.1701 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-bold">Easy to Use</h3>
            </div>
            <p>Upload your credit reports once, and our system handles everything else with minimal intervention required.</p>
            
            {/* Animated sparkles */}
            <motion.div
              className="absolute top-5 right-5 w-1 h-1 rounded-full bg-yellow-300"
              animate={{
                scale: [1, 3, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, -10, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-1 h-1 rounded-full bg-yellow-300"
              animate={{
                scale: [1, 3, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, 10, 0],
                x: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Code example */}
        <motion.div
          variants={codeContainerVariants}
          initial="hidden"
          animate={controls}
          whileHover={{ 
            boxShadow: "0 0 30px 5px rgba(139, 92, 246, 0.15)",
            transition: { duration: 0.5 }
          }}
          className="mt-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg blur-xl"></div>
            <div className="relative bg-slate-900/80 p-5 rounded-lg backdrop-blur-sm border border-purple-900/50 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <motion.div 
                    className="h-3 w-3 rounded-full bg-red-500 mr-2"
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                  <motion.div 
                    className="h-3 w-3 rounded-full bg-yellow-500 mr-2"
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                  <motion.div 
                    className="h-3 w-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                </div>
                <span className="text-xs text-slate-500">dispute-engine.js</span>
              </div>
              <pre className="text-xs md:text-sm text-slate-300 overflow-x-auto">
                <motion.code
                  variants={typingContainerVariants}
                >
                  {codeText.split('').map((char, index) => (
                    <motion.span key={index} variants={typingCharVariants}>
                      {char}
                    </motion.span>
                  ))}
                </motion.code>
              </pre>
              
              {/* Cursor blinking effect */}
              <motion.div
                className="absolute bottom-5 right-10 h-4 w-1 bg-slate-300"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 