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
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transform transition-all duration-500 hover:scale-105">
              PROJECT COBRA
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 tracking-wide font-inter">
              by Blue Crest Financial
            </p>
          </div>
          <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-playfair">
            Your AI-Powered Credit Repair Partner
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-inter">
            A powerful credit repair solution to improve your credit report and boost your score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#pricing"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white rounded-lg font-semibold shadow-md hover:shadow-blue-500/20 transform hover:scale-105 active:scale-95 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="border-2 border-white/20 px-6 py-3 text-white rounded-lg font-semibold hover:bg-white/5 transform hover:scale-105 active:scale-95 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 