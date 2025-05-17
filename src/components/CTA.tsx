'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-700 rounded-full filter blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Improve Your Credit Score with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Project Cobra</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have improved their financial future with our AI-powered credit repair solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#pricing" 
              className="bg-primary hover:bg-primary-hover px-8 py-4 text-lg font-medium text-white rounded-lg inline-block transition-colors"
            >
              Get Started Today
            </a>
            
            <a 
              href="#faq" 
              className="px-8 py-4 text-lg font-medium text-white border border-white/20 hover:bg-white/5 rounded-lg inline-block transition-colors"
            >
              Learn More
            </a>
          </div>
          
          {/* Credit Score Impact */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-purple-900/30 rounded-lg p-6">
              <div className="text-2xl text-indigo-500 font-bold mb-4 flex justify-center">
                <span className="relative">
                  <span className="absolute -top-1 -right-2 text-sm">+</span>
                  45
                </span>
              </div>
              <h3 className="text-white font-medium mb-2">Average Point Increase</h3>
              <p className="text-slate-400 text-sm">Most customers see improvements within the first 45 days</p>
            </div>
            
            <div className="bg-slate-900/50 border border-purple-900/30 rounded-lg p-6">
              <div className="text-2xl text-indigo-500 font-bold mb-4 flex justify-center">
                78%
              </div>
              <h3 className="text-white font-medium mb-2">Success Rate</h3>
              <p className="text-slate-400 text-sm">Our AI algorithms achieve better than industry average results</p>
            </div>
            
            <div className="bg-slate-900/50 border border-purple-900/30 rounded-lg p-6">
              <div className="text-2xl text-indigo-500 font-bold mb-4 flex justify-center">
                <span>$0</span>
              </div>
              <h3 className="text-white font-medium mb-2">Upfront Costs</h3>
              <p className="text-slate-400 text-sm">Get started with no initial payment and a 7-day money-back guarantee</p>
            </div>
          </div>
          
          {/* Trust elements */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center bg-slate-900/30 px-4 py-2 rounded-full border border-purple-900/20">
              <svg className="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white text-sm">CROA Compliant</span>
            </div>
            
            <div className="flex items-center bg-slate-900/30 px-4 py-2 rounded-full border border-purple-900/20">
              <svg className="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white text-sm">SOC2 Secured</span>
            </div>
            
            <div className="flex items-center bg-slate-900/30 px-4 py-2 rounded-full border border-purple-900/20">
              <svg className="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white text-sm">7-Day Refund</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 