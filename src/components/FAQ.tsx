'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "How long does credit repair take?",
    answer: "The time it takes to repair credit can vary significantly depending on individual circumstances, the number of negative items, and bureau response times. Many clients see initial results within 30-90 days, with more complex cases taking longer. Our AI helps expedite this by efficiently identifying and disputing errors."
  },
  {
    question: "Is credit repair legal?",
    answer: "Yes, credit repair is legal. The Fair Credit Reporting Act (FCRA) gives you the right to dispute any information on your credit report that you believe is inaccurate, incomplete, or unverifiable. Our service helps you exercise these rights."
  },
  {
    question: "What kind of items can be removed?",
    answer: "We can help dispute various types of negative items, including late payments, collections, charge-offs, bankruptcies, foreclosures, repossessions, and incorrect personal information. The success of removal depends on whether the item is indeed inaccurate, outdated, or unverifiable."
  },
  {
    question: "Do you guarantee score increases?",
    answer: "While we cannot legally guarantee a specific score increase (as no one can), our AI-powered system is designed to maximize your chances of improving your credit profile by identifying and disputing all legitimate errors. Many of our clients see significant improvements."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply choose a plan that fits your needs, sign up on our secure platform, and connect your credit reports. Our AI will then begin its analysis, and we'll guide you through the rest of the process."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left font-semibold text-lg text-white flex justify-between items-center hover:bg-slate-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 py-4 text-slate-300 leading-relaxed transition-all duration-200 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 