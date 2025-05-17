'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Sign Up & Connect Reports',
    description: 'Create your account and securely upload your credit reports from all three major bureaus.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: '2',
    title: 'AI Analysis & Recommendations',
    description: 'Our AI scans your reports to identify errors, inconsistencies, and disputable items.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5V19H20V5H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 5H20V9H4V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 13H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 17H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: '3',
    title: 'Automated Dispute Processing',
    description: 'We file legally compliant disputes with credit bureaus and creditors on your behalf.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H17M7 12H11M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: '4',
    title: 'Track Progress & Results',
    description: 'Monitor real-time updates on disputes and view your improving credit score.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V16M12 16L16 12M12 16L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Project Cobra's <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Credit Repair Process</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our intelligent system automates the credit repair process with minimal effort required from you.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop process flow */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary opacity-20 blur-lg rounded-full transform scale-150"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border border-purple-500/30 text-primary mb-6 z-10">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-slate-400 max-w-xs">{step.description}</p>
                
                {/* Arrow connector (only between steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-6 top-16 transform rotate-[-30deg]">
                    <svg className="w-12 h-12 text-purple-500/60" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Credit repair benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-24 bg-gradient-to-br from-slate-900/90 to-slate-800/50 p-8 rounded-xl border border-purple-900/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-purple-900/30 rounded-full p-3 mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Higher Credit Limits</h3>
                <p className="text-slate-400">Improved credit scores can help you qualify for higher credit limits.</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-purple-900/30 rounded-full p-3 mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lower Interest Rates</h3>
                <p className="text-slate-400">Better credit profiles qualify you for lower interest rates on loans and credit cards.</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-purple-900/30 rounded-full p-3 mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M9 10H9.01M15 10H15.01M9 16H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Peace of Mind</h3>
                <p className="text-slate-400">Automated monitoring keeps you informed of all changes to your credit reports.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Code example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-24"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-900/80 p-5 rounded-lg backdrop-blur-sm border border-purple-900/50 max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-500">credit-repair.js</span>
                </div>
                <pre className="text-xs md:text-sm text-slate-300 overflow-x-auto">
                  <code>
{`// Credit repair dispute workflow engine
import { analyzeReports, generateDisputes } from './cobra-core';

// Define the credit repair workflow
const creditRepairWorkflow = [
  {
    name: 'dataCollection',
    function: collectCreditData,
    nextStep: 'analysis'
  },
  {
    name: 'analysis',
    function: analyzeReportItems,
    nextStep: 'disputeGeneration'
  }, 
  {
    name: 'disputeGeneration',
    function: createDisputeLetters,
    nextStep: 'filing'
  },
  {
    name: 'filing',
    function: submitDisputesToBureaus,
    nextStep: 'monitoring'
  }
];

// Execute workflow engine
export function runCreditRepair(userData) {
  console.log("Starting credit repair process for: " + userData.name);
  return new CreditRepairEngine(creditRepairWorkflow)
    .start(userData)
    .then(results => notifyUser(userData, results));
}`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 