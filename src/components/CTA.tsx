'use client'

import { motion } from 'framer-motion'
import AnimatedButton from './AnimatedButton'

export default function CTA() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-purple-800 to-purple-600 opacity-10 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-violet-800 to-indigo-600 opacity-10 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 rounded-2xl p-8 md:p-12 lg:p-16 backdrop-blur-sm border border-purple-900/20 shadow-2xl overflow-hidden relative">
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-purple-500/20 to-transparent rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-radial from-indigo-500/20 to-transparent rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Transform</span> Your Credit Score?
            </motion.h2>
            
            <motion.p 
              className="text-slate-300 text-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Start your journey today with Project Cobra and experience the power of AI-driven credit repair.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AnimatedButton href="#pricing" variant="primary" size="lg">
                Get Started Now
              </AnimatedButton>
              
              <AnimatedButton href="#how-it-works" variant="secondary" size="lg">
                See How It Works
              </AnimatedButton>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex flex-wrap justify-center gap-6 items-center text-slate-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>7-Day Money-Back Guarantee</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>CROA Compliant</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Cancel Anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 