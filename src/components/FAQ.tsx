'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "How long does credit repair take?",
    answer: "Typically 30–90 days depending on report volume and dispute success. We utilize AI to help identify the most effective disputes and improve response times. Each credit bureau has different processing timeframes, and the complexity of your credit situation will affect the overall timeline."
  },
  {
    question: "What items can you dispute?",
    answer: "Inaccuracies, outdated info, unverifiable accounts, duplicate entries, and any information that violates your consumer rights can be disputed. This includes late payments, collections, charge-offs, incorrect personal information, and accounts that don't belong to you."
  },
  {
    question: "Do I need to upload my credit report?",
    answer: "Yes, we support uploads or login-based access for Experian, TransUnion, and Equifax. Our secure platform ensures your sensitive information remains protected while allowing our AI to analyze your reports for potential disputes."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, per CROA guidelines, you may cancel anytime with no penalties. We believe in transparency and don't lock you into long-term contracts. You maintain full control over your subscription status at all times."
  },
  {
    question: "Is credit repair legal?",
    answer: "Yes, credit repair is legal. The Fair Credit Reporting Act (FCRA) gives you the right to dispute any information on your credit report that you believe is inaccurate, incomplete, or unverifiable. Our service helps you exercise these rights through legal, compliant methods."
  },
  {
    question: "How does your AI actually work?",
    answer: "Our AI scans your credit reports to identify potential errors and discrepancies. It then generates legally compliant dispute letters tailored to your specific situation. The AI continuously learns from successful disputes to improve effectiveness, all while following strict consumer protection guidelines."
  },
  {
    question: "Will this work for business credit too?",
    answer: "Yes, our Elite and Infinity plans include business credit solutions. We help establish business credit profiles, resolve incorrect business credit data, and implement strategies to build stronger business credit scores separate from your personal credit."
  },
  {
    question: "How much will my score increase?",
    answer: "While we cannot legally guarantee specific score increases, our clients typically see improvements proportional to the number of successfully disputed items. Results vary depending on your unique credit situation and the accuracy of your current credit reports."
  },
  {
    question: "What information do you need from me?",
    answer: "We need your credit reports, basic identity verification, and details about which items you believe are inaccurate. Our secure platform makes it easy to upload and manage this information, and we follow strict data protection protocols."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Got questions about our credit repair process? We've got answers.
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
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                aria-hidden={openIndex !== index}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400">Still have questions?</p>
          <motion.a
            href="mailto:support@bluecrestfinancial.com"
            className="mt-4 inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.a>
        </div>
      </div>
    </section>
  )
} 