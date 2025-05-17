'use client'

import { motion } from 'framer-motion'

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
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            AI Solutions That Take Your Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">to the Next Level</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our AI-powered platform combines advanced technology with credit expertise to automate and optimize your business processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-6 rounded-lg border border-purple-900/30 bg-slate-900/30 backdrop-blur-sm"
            >
              <div className="h-12 w-12 text-purple-500 mb-4 flex items-center justify-center bg-purple-900/20 p-2 rounded-md">
                <feature.icon />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Feature code snippet */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg blur-lg"></div>
            <div className="relative bg-slate-900/80 p-5 rounded-lg backdrop-blur-sm border border-purple-900/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-slate-500">automation.js</span>
              </div>
              <pre className="text-xs md:text-sm text-slate-300 overflow-x-auto">
                <code>
{`import { analyzeCredit } from './ai-core';

// Automated credit dispute function
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

// Execute the automation pipeline
export default function runAutomation(userData) {
  console.log("Starting automation for: " + userData.name);
  const disputes = generateDisputes(userData.report);
  return disputes;
}`}
                </code>
              </pre>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Advanced AI Engine for Scale</h3>
            <p className="text-slate-400 mb-6">
              Our core automation engine leverages machine learning algorithms to identify patterns in your credit data that humans might miss. This allows for faster, more accurate dispute filing.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">Processes thousands of data points in seconds</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">CROA and FCRA compliant dispute generation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">Enterprise-grade security with SOC2 certification</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 