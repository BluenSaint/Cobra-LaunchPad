'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900/80" />
        <div className="absolute inset-0 gradient-bg" />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            BlueCrest Financial
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-8">
            Your AI-Powered Credit Repair Partner
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Experience the power of AI-driven credit repair technology. We help you identify errors, 
            dispute inaccuracies, and improve your credit score faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn-primary">
              Get Started
            </a>
            <a href="#how-it-works" className="btn-ghost">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 