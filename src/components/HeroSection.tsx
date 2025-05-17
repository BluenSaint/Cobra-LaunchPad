'use client'

import { motion } from 'framer-motion'
import CreditCardAnimation from './CreditCardAnimation'
import AnimatedButton from './AnimatedButton'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-800 to-purple-600 opacity-20 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-violet-800 to-indigo-600 opacity-15 blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-purple-900/30 text-primary text-sm mb-6">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI-Powered Credit Repair
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 drop-shadow-[0_5px_15px_rgba(139,92,246,0.5)] transform transition-all duration-500">
                PROJECT COBRA
              </span>
              <br />
              <span className="text-white">by BlueCrest Financial</span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-6">
              Intelligent Automation for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Credit Repair.</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              Our AI-powered platform identifies and disputes inaccuracies on your credit report to help improve your score faster than traditional methods.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <AnimatedButton href="#pricing" variant="primary">
                Get Started
              </AnimatedButton>
              
              <AnimatedButton href="#how-it-works" variant="secondary">
                See How it Works
              </AnimatedButton>
            </div>
            
            <div className="mt-12">
              <div className="flex flex-wrap gap-4 items-center">
                <motion.div 
                  className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(30, 41, 59, 0.9)",
                    boxShadow: "0 0 10px 0 rgba(139, 92, 246, 0.3)" 
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-primary">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  CROA Compliant
                </motion.div>
                <motion.div 
                  className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(30, 41, 59, 0.9)",
                    boxShadow: "0 0 10px 0 rgba(139, 92, 246, 0.3)" 
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-primary">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  7-Day Refund Policy
                </motion.div>
                <motion.div 
                  className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(30, 41, 59, 0.9)",
                    boxShadow: "0 0 10px 0 rgba(139, 92, 246, 0.3)" 
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  SOC2 Secured
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - interactive elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Interactive credit card */}
            <CreditCardAnimation />
            
            {/* Dashboard visualization below the card */}
            <div className="bg-slate-800/40 p-6 rounded-lg border border-purple-900/30 backdrop-blur-sm shadow-xl mt-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                  <span className="text-sm text-white font-medium">Credit Analytics Dashboard</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              {/* Additional dashboard elements */}
              <div className="grid gap-3">
                <motion.div 
                  className="bg-slate-900/80 p-4 rounded-lg border border-slate-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.2)",
                    borderColor: "rgba(99, 102, 241, 0.3)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm text-white">Automated Disputes</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-purple-900/50 rounded text-purple-400">3 in progress</span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-1">
                    <motion.div 
                      className="h-1.5 bg-primary rounded"
                      animate={{ 
                        width: ["0%", "100%"],
                        opacity: [0.5, 1]
                      }}
                      transition={{
                        duration: 1,
                        delay: 2,
                        ease: "easeOut"
                      }}
                    />
                    <div className="h-1.5 bg-slate-700 rounded"></div>
                    <div className="h-1.5 bg-slate-700 rounded"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-slate-900/80 p-4 rounded-lg border border-slate-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)",
                    borderColor: "rgba(99, 102, 241, 0.3)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      <span className="text-sm text-white">Success Rate</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-indigo-900/50 rounded text-indigo-400">78%</span>
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-1">
                    <motion.div 
                      className="h-1.5 bg-indigo-500 rounded"
                      animate={{ 
                        width: ["0%", "100%"],
                        opacity: [0.5, 1]
                      }}
                      transition={{
                        duration: 1,
                        delay: 2.1,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div 
                      className="h-1.5 bg-indigo-500 rounded"
                      animate={{ 
                        width: ["0%", "100%"],
                        opacity: [0.5, 1]
                      }}
                      transition={{
                        duration: 1,
                        delay: 2.3,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div 
                      className="h-1.5 bg-indigo-500 rounded"
                      animate={{ 
                        width: ["0%", "100%"],
                        opacity: [0.5, 1]
                      }}
                      transition={{
                        duration: 1,
                        delay: 2.5,
                        ease: "easeOut"
                      }}
                    />
                    <div className="h-1.5 bg-slate-700 rounded"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-slate-900/80 p-4 rounded-lg border border-slate-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.2)",
                    borderColor: "rgba(168, 85, 247, 0.3)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm text-white">Estimated Score Increase</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-purple-900/50 rounded text-purple-400">+45 pts</span>
                  </div>
                  <div className="mt-2 grid grid-cols-5 gap-1">
                    <motion.div 
                      className="h-1.5 bg-purple-500 rounded"
                      animate={{ 
                        width: ["0%", "100%"],
                        opacity: [0.5, 1]
                      }}
                      transition={{
                        duration: 1,
                        delay: 2.2,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div 
                      className="h-1.5 bg-purple-500 rounded"
                      animate={{ 
                        width: ["0%", "100%"],
                        opacity: [0.5, 1]
                      }}
                      transition={{
                        duration: 1,
                        delay: 2.4,
                        ease: "easeOut"
                      }}
                    />
                    <div className="h-1.5 bg-slate-700 rounded"></div>
                    <div className="h-1.5 bg-slate-700 rounded"></div>
                    <div className="h-1.5 bg-slate-700 rounded"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 