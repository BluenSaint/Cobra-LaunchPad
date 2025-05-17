'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-800 to-purple-600 opacity-20 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-violet-800 to-indigo-600 opacity-15 blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Intelligent Automation for<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
                Modern Businesses.
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Our AI-powered platform identifies and disputes inaccuracies on your credit report to help improve your score faster than traditional methods.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#pricing"
                className="bg-primary hover:bg-primary-hover px-6 py-3 text-white rounded-md font-medium transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started for Free
              </motion.a>
              
              <motion.a
                href="#how-it-works"
                className="border border-white/20 px-6 py-3 text-white rounded-md font-medium hover:bg-white/5 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4 items-center justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-purple-500">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                CROA Compliant
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-purple-500">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                7-Day Refund Policy
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-purple-500">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                SOC2 Secured
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 