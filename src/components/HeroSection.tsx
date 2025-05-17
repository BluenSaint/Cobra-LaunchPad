'use client'

import { motion } from 'framer-motion'

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
              <motion.a
                href="#pricing"
                className="relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative bg-slate-900 px-6 py-3 text-white rounded-md font-medium transition-all duration-300">
                  Get Started
                </button>
              </motion.a>
              
              <motion.a
                href="#how-it-works"
                className="border border-white/20 px-6 py-3 text-white rounded-md font-medium hover:bg-white/5 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See How it Works
              </motion.a>
            </div>
            
            <div className="mt-12">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-primary">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  CROA Compliant
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-primary">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  7-Day Refund Policy
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  SOC2 Secured
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - dashboard visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/40 p-6 rounded-lg border border-purple-900/30 backdrop-blur-sm shadow-xl"
          >
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
            
            {/* Credit Score Display */}
            <div className="relative bg-slate-900/80 p-6 rounded-lg mb-6 border border-slate-800">
              <div className="flex justify-center">
                <div className="relative w-40 h-40">
                  {/* Score circle background */}
                  <svg className="w-full h-full" viewBox="0 0 120 120">
                    <circle 
                      cx="60" 
                      cy="60" 
                      r="54" 
                      fill="none" 
                      stroke="#1e293b" 
                      strokeWidth="12" 
                    />
                    {/* Score indicator - approximately 75% filled */}
                    <circle 
                      cx="60" 
                      cy="60" 
                      r="54" 
                      fill="none" 
                      stroke="url(#gradientScore)" 
                      strokeWidth="12" 
                      strokeDasharray="340" 
                      strokeDashoffset="85" 
                      strokeLinecap="round" 
                      transform="rotate(-90 60 60)" 
                    />
                    <defs>
                      <linearGradient id="gradientScore" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8a5cf5" />
                        <stop offset="50%" stopColor="#8a5cf5" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Score text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-white">720</span>
                    <span className="text-sm text-primary">Good</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-xs text-slate-400">
                <span>Poor</span>
                <span>Fair</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>
            </div>
            
            {/* Additional dashboard elements */}
            <div className="grid gap-3">
              <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm text-white">Automated Disputes</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-purple-900/50 rounded text-purple-400">3 in progress</span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-1">
                  <div className="h-1.5 bg-primary rounded"></div>
                  <div className="h-1.5 bg-slate-700 rounded"></div>
                  <div className="h-1.5 bg-slate-700 rounded"></div>
                </div>
              </div>
              
              <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                    <span className="text-sm text-white">Success Rate</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-indigo-900/50 rounded text-indigo-400">78%</span>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-1">
                  <div className="h-1.5 bg-indigo-500 rounded"></div>
                  <div className="h-1.5 bg-indigo-500 rounded"></div>
                  <div className="h-1.5 bg-indigo-500 rounded"></div>
                  <div className="h-1.5 bg-slate-700 rounded"></div>
                </div>
              </div>
              
              <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm text-white">Estimated Score Increase</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-purple-900/50 rounded text-purple-400">+45 pts</span>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-1">
                  <div className="h-1.5 bg-purple-500 rounded"></div>
                  <div className="h-1.5 bg-purple-500 rounded"></div>
                  <div className="h-1.5 bg-slate-700 rounded"></div>
                  <div className="h-1.5 bg-slate-700 rounded"></div>
                  <div className="h-1.5 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 