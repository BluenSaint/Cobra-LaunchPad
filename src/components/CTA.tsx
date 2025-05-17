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
            Let AI do the Work so <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">you can Scale Faster</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have improved their financial future with our AI-powered solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#pricing" 
              className="bg-primary hover:bg-primary-hover px-8 py-4 text-lg font-medium text-white rounded-lg inline-block transition-colors"
            >
              Get Started for Free
            </a>
            
            <a 
              href="#faq" 
              className="px-8 py-4 text-lg font-medium text-white border border-white/20 hover:bg-white/5 rounded-lg inline-block transition-colors"
            >
              Learn More
            </a>
          </div>
          
          {/* FAQ Collapse */}
          <div className="mt-20">
            <div className="bg-slate-900/50 border border-purple-900/30 rounded-lg p-6 text-left">
              <h3 className="text-xl font-semibold text-white mb-4">We've Got the Answers You're Looking For</h3>
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-white font-medium">How quickly will I see results?</span>
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="mt-2 text-slate-400 text-sm">
                    Most customers see initial results within 30-45 days. Our AI automation system works around the clock to process disputes and monitor progress.
                  </div>
                </div>
                
                <div className="border-b border-white/10 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-white font-medium">Is your service legally compliant?</span>
                    <svg className="w-5 h-5 text-primary transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="border-b border-white/10 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-white font-medium">How is my data protected?</span>
                    <svg className="w-5 h-5 text-primary transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 