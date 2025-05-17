'use client'

import { motion } from 'framer-motion'

export default function TrustedBy() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="text-sm uppercase tracking-wider text-slate-400 mb-2">Trusted By Professionals</div>
        </motion.div>
        
        {/* Compliance badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center"
        >
          {/* CROA Compliant Badge */}
          <div className="bg-slate-800/70 border border-purple-900/30 rounded-lg p-4 flex flex-col items-center">
            <div className="text-primary text-xs uppercase tracking-wider mb-2">CROA</div>
            <div className="text-slate-300 text-sm font-medium">Compliant</div>
          </div>
          
          {/* FCRA Guidelines Badge */}
          <div className="bg-slate-800/70 border border-purple-900/30 rounded-lg p-4 flex flex-col items-center">
            <div className="text-primary text-xs uppercase tracking-wider mb-2">FCRA</div>
            <div className="text-slate-300 text-sm font-medium">Guidelines</div>
          </div>
          
          {/* SOC2 Badge */}
          <div className="bg-slate-800/70 border border-purple-900/30 rounded-lg p-4 flex flex-col items-center">
            <div className="text-primary text-xs uppercase tracking-wider mb-2">SOC2</div>
            <div className="text-slate-300 text-sm font-medium">Certified</div>
          </div>
          
          {/* 7-Day Refund Badge */}
          <div className="bg-slate-800/70 border border-purple-900/30 rounded-lg p-4 flex flex-col items-center">
            <div className="text-primary text-xs uppercase tracking-wider mb-2">7-Day</div>
            <div className="text-slate-300 text-sm font-medium">Refund Policy</div>
          </div>
          
          {/* 24/7 Support Badge */}
          <div className="bg-slate-800/70 border border-purple-900/30 rounded-lg p-4 flex flex-col items-center col-span-2 md:col-span-4 lg:col-span-1">
            <div className="text-primary text-xs uppercase tracking-wider mb-2">24/7</div>
            <div className="text-slate-300 text-sm font-medium">Support</div>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">10,000+</span>
            </div>
            <div className="text-slate-400">Satisfied Customers</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">250,000+</span>
            </div>
            <div className="text-slate-400">Items Disputed</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">91%</span>
            </div>
            <div className="text-slate-400">Success Rate</div>
          </div>
        </motion.div>
        
        {/* Partners/Media mentions */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center text-sm uppercase tracking-wider text-slate-500 mb-6">Mentioned In</div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            <div className="text-slate-300 font-medium text-xl">Forbes</div>
            <div className="text-slate-300 font-medium text-xl">Entrepreneur</div>
            <div className="text-slate-300 font-medium text-xl">Business Insider</div>
            <div className="text-slate-300 font-medium text-xl">Credit.com</div>
            <div className="text-slate-300 font-medium text-xl">Bloomberg</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 