'use client'

import React from 'react'
import Link from 'next/link'
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
            <Link href="/auth/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto"
              >
                Get Started
              </motion.button>
            </Link>
            <Link href="#how-it-works">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost w-full sm:w-auto"
              >
                How It Works
              </motion.button>
            </Link>
          </div>
          
          <div className="mt-8">
            <Link href="#features">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                See Features
                <svg
                  className="w-5 h-5 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 