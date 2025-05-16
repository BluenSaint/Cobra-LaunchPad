'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 sm:py-40 lg:py-48 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-5xl md:text-6xl font-semibold text-white mb-8">
            AI Automated Credit Repair Agent
          </h1>
          <p className="font-inter text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            A powerful credit repair solution to improve your credit report and boost your score.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost"
            >
              How It Works
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 