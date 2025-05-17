'use client'

import { motion } from 'framer-motion'

export default function CreditScore() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Watch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Credit Score</span> Rise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our AI-powered system helps identify and dispute inaccurate items on your credit report. See how your score can improve with Project Cobra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credit Score Gauge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/40 rounded-xl border border-purple-900/30 p-8 flex flex-col items-center"
          >
            <div className="text-slate-300 mb-4">Without Project Cobra</div>
            <div className="relative w-44 h-44 mb-6">
              {/* Credit score circle background */}
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="#1e293b" 
                  strokeWidth="12" 
                />
                {/* Score indicator */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="#334155" 
                  strokeWidth="12" 
                  strokeDasharray="340" 
                  strokeDashoffset="170" 
                  strokeLinecap="round" 
                  transform="rotate(-90 60 60)" 
                />
                <defs>
                  <linearGradient id="gradientScore1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">580</span>
                <span className="text-sm text-slate-400">Poor</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white text-lg font-medium mb-2">Traditional Credit Repair</h3>
              <p className="text-slate-400 text-sm">Manual processes with minimal updates and slow progress tracking</p>
            </div>
          </motion.div>

          {/* Middle Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="hidden lg:block">
              <svg className="w-32 h-32 text-primary opacity-70" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="block lg:hidden">
              <svg className="w-16 h-16 text-primary opacity-70" viewBox="0 0 24 24" fill="none">
                <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>

          {/* After Score */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-b from-slate-800/80 to-purple-900/30 rounded-xl border border-purple-500/30 p-8 flex flex-col items-center shadow-xl shadow-purple-900/10"
          >
            <div className="text-primary mb-4 font-medium">With Project Cobra</div>
            <div className="relative w-44 h-44 mb-6">
              {/* Credit score circle background */}
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="#1e293b" 
                  strokeWidth="12" 
                />
                {/* Score indicator */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="url(#gradientScore2)" 
                  strokeWidth="12" 
                  strokeDasharray="340" 
                  strokeDashoffset="85" 
                  strokeLinecap="round" 
                  transform="rotate(-90 60 60)" 
                />
                <defs>
                  <linearGradient id="gradientScore2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8a5cf5" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">720</span>
                <span className="text-sm text-primary">Good</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white text-lg font-medium mb-2">AI-Powered Credit Repair</h3>
              <p className="text-slate-400 text-sm">Advanced algorithms identify and dispute errors faster with real-time tracking</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/50 border border-purple-900/30 text-primary text-sm">
            <span className="mr-2">⚡</span>
            On average, our clients see a 72-point increase in just 90 days
          </div>
        </motion.div>
      </div>
    </section>
  )
} 