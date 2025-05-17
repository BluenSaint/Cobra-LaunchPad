'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#03293d] to-slate-900"></div>
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-600 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-700 rounded-full filter blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-800/30 border border-teal-700/50 text-teal-400 text-sm mb-6">
            <span className="mr-1">🚀</span>
            Get Started Today
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Credit Score?
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have improved their financial future with our AI-powered credit repair solution.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <a 
                href="#pricing" 
                className="relative bg-slate-900 hover:bg-slate-800 px-8 py-4 text-lg font-medium text-white rounded-lg inline-block transition-colors"
              >
                Get Started Now
              </a>
            </div>
            
            <a 
              href="#faq" 
              className="px-8 py-4 text-lg font-medium text-white border border-white/20 hover:bg-white/5 rounded-lg inline-block transition-colors"
            >
              Learn More
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 text-sm">
              <svg className="w-4 h-4 mr-1.5 text-teal-500" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              CROA Compliant
            </div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 text-sm">
              <svg className="w-4 h-4 mr-1.5 text-teal-500" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              7-Day Refund Policy
            </div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 text-sm">
              <svg className="w-4 h-4 mr-1.5 text-teal-500" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              SOC2 Secured
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 