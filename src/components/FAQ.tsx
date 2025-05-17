'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: "How long does credit repair typically take?",
    answer: "Most clients see initial results within 45 days. The complete credit repair process typically takes 3-6 months depending on the complexity and number of items that need to be disputed."
  },
  {
    question: "Is your service compliant with credit repair laws?",
    answer: "Yes, Project Cobra by BlueCrest Financial is fully compliant with all relevant laws including the Credit Repair Organizations Act (CROA) and the Fair Credit Reporting Act (FCRA)."
  },
  {
    question: "Can you guarantee a specific credit score increase?",
    answer: "While we cannot legally guarantee specific score increases, our clients typically experience improvements of 40-100 points over a 6-month period, depending on their unique credit situation."
  },
  {
    question: "How does your AI identify items to dispute?",
    answer: "Our proprietary AI algorithms analyze your credit reports to identify inaccurate, incomplete, unverifiable, or outdated information that can be legally disputed under consumer protection laws."
  },
  {
    question: "Do I need to cancel my credit cards during the process?",
    answer: "No, we don't recommend closing credit accounts as this can actually harm your credit score. Our system works with your existing accounts while disputing inaccurate information."
  },
  {
    question: "What happens if a dispute is rejected?",
    answer: "If a dispute is rejected, our system automatically analyzes the response and prepares follow-up strategies which may include additional documentation requests or alternative dispute approaches."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }
  
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Find answers to common questions about our credit repair process and technology.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-purple-900/30 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-6 text-left bg-slate-900/50 hover:bg-slate-900/80 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 text-primary transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`bg-slate-800/50 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 p-6' : 'max-h-0'
                }`}
              >
                <p className="text-slate-300">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-6">
            Still have questions about how Project Cobra can help?
          </p>
          <a
            href="#pricing"
            className="bg-primary hover:bg-primary-hover px-6 py-3 text-white rounded-md font-medium inline-block transition-colors"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
} 