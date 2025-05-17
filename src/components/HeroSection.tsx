'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#03293d] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_5px_15px_rgba(59,130,246,0.8)] transform transition-all duration-500 mb-2">
                  PROJECT COBRA
                </span>
                <br />
                <span className="text-white">by BlueCrest Financial</span>
              </h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              AI-Powered<br />
              Credit Repair.<br />
              <span className="text-3xl md:text-4xl">Fast. Secure.<br />Proven.</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              A powerful AI credit repair solution to improve your credit report and boost your score.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#pricing"
                className="bg-teal-600 hover:bg-teal-700 px-6 py-3 text-white rounded-md font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="border border-white/30 px-6 py-3 text-white rounded-md font-medium hover:bg-white/5 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See How it Works
              </motion.a>
            </div>
            
            <div className="mt-12">
              <p className="text-slate-400 mb-2">Trusted by 10,000+ users</p>
              <div className="flex space-x-6 items-center">
                <span className="text-slate-300 opacity-70">Forbes</span>
                <span className="text-slate-300 opacity-70">CNBC</span>
                <span className="text-slate-300 opacity-70">NBC</span>
                <span className="text-slate-300 opacity-70">FDC</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - dashboard visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 backdrop-blur-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
                <span className="text-sm text-slate-300">Outast Sigrams</span>
              </div>
              <span className="text-xs text-slate-400">All Recommendations</span>
            </div>
            
            {/* Credit Score Display */}
            <div className="relative bg-slate-900/80 p-6 rounded-lg mb-4">
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
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="50%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#eab308" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Score text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-white">720</span>
                    <span className="text-sm text-teal-500">Good</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional dashboard elements */}
            <div className="grid gap-3">
              <div className="bg-slate-900/80 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-xs text-slate-300">Automated Disputes</span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
              
              <div className="bg-slate-900/80 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                  <span className="text-xs text-slate-300">Business Credit Solutions</span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
              
              <div className="bg-slate-900/80 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-xs text-slate-300">Track Progress & Results</span>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 