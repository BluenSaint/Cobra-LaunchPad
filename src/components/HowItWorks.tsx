'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Sign Up & Connect Reports',
    description: 'Create your account and securely upload your credit reports from all three major bureaus.',
    icon: (
      <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V16M12 16L16 12M12 16L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#03293d] to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-800/30 border border-teal-700/50 text-teal-400 text-sm mb-4">
            <span className="mr-1">✨</span>
            Simple Process
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            How Project Cobra Works
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our intelligent system automates the credit repair process with minimal effort required from you.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop process flow */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600/0 via-teal-600 to-teal-600/0 z-0"></div>
          
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
                  <div className="absolute inset-0 bg-teal-500 blur-lg opacity-20 rounded-full transform scale-150"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-teal-400 to-teal-600 text-white font-bold text-xl mb-6 z-10 shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-slate-300 max-w-xs">{step.description}</p>
                
                {/* Arrow connector (only between steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-6 top-16 transform rotate-[-30deg]">
                    <svg className="w-12 h-12 text-teal-500/60" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Get Started CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <a href="#pricing" className="relative bg-slate-900 hover:bg-slate-800 px-8 py-4 rounded-lg text-white text-lg font-semibold block transition-colors">
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Preview of pricing plans */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Choose Your Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/50 shadow-xl backdrop-blur-sm"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold mb-2 text-white">Shield Plan</h4>
                  <div className="flex justify-center mb-1">
                    <span className="text-3xl font-bold text-white">$35</span>
                  </div>
                  <p className="text-slate-400 text-sm">Per plan</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-slate-300">
                    <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Covers all 3 bureaus
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Basic dispute templates
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Credit report analysis
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-800/80 p-6 rounded-xl border-2 border-teal-500 shadow-xl backdrop-blur-sm relative"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-500 px-3 py-1 rounded-full text-white text-xs font-medium">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold mb-2 text-white">Elite Plan</h4>
                  <div className="flex justify-center items-baseline mb-1">
                    <span className="text-3xl font-bold text-white">$79</span>
                    <span className="text-sm text-slate-400 ml-1">/mo</span>
                  </div>
                  <p className="text-slate-400 text-sm">Monthly subscription</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-slate-300">
                    <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Unlimited disputes
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    AI-powered letter generation
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Priority dispute processing
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/50 shadow-xl backdrop-blur-sm"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold mb-2 text-white">Infinity Plan</h4>
                  <div className="flex justify-center mb-1">
                    <span className="text-3xl font-bold text-white">Custom</span>
                  </div>
                  <p className="text-slate-400 text-sm">Contact Sales</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-slate-300">
                    <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    All Elite features
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Business credit building
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Dedicated dispute specialist
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 