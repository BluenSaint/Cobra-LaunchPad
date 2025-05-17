'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: "Basic",
    price: { monthly: 79, annual: 59 },
    description: "Perfect for individuals just starting their credit repair journey",
    features: [
      "AI-powered credit analysis",
      "Automated dispute letters",
      "Single bureau monitoring",
      "Monthly progress reports",
      "Email support",
      "CROA compliant process",
      "7-day money-back guarantee"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Premium",
    price: { monthly: 129, annual: 99 },
    description: "Most popular plan for comprehensive credit repair",
    features: [
      "Everything in Basic, plus:",
      "Three-bureau monitoring",
      "Priority dispute processing",
      "Identity theft protection",
      "Credit score simulator",
      "Phone & email support",
      "Credit improvement education",
      "Advanced AI recommendations"
    ],
    cta: "Get Premium",
    highlighted: true
  },
  {
    name: "Ultimate",
    price: { monthly: 199, annual: 149 },
    description: "For those who need maximum credit repair power",
    features: [
      "Everything in Premium, plus:",
      "Business credit building",
      "Legal consultation access",
      "Custom dispute strategies",
      "Dedicated account manager",
      "Credit coaching sessions",
      "Financial planning tools",
      "Unlimited document reviews"
    ],
    cta: "Get Ultimate",
    highlighted: false
  }
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Choose the plan that fits your credit repair needs. All plans include our AI-powered dispute technology.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 text-sm ${!annual ? 'text-white font-semibold' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-16 h-8 bg-slate-900 rounded-full p-1 flex items-center"
            >
              <span
                className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-primary transition-transform duration-300 ${
                  annual ? 'translate-x-8' : ''
                }`}
              ></span>
            </button>
            <span className={`ml-3 text-sm ${annual ? 'text-white font-semibold' : 'text-slate-400'}`}>Annual</span>
            <span className="ml-2 text-xs px-2 py-1 bg-purple-900/70 text-purple-300 rounded-full">Save 25%</span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col h-full rounded-xl overflow-hidden backdrop-blur-sm ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-slate-800/90 to-purple-900/40 border-2 border-purple-500/40 shadow-xl shadow-purple-900/20'
                  : 'bg-slate-900/50 border border-purple-900/30'
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-6 text-sm h-10">{plan.description}</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-white">${annual ? plan.price.annual : plan.price.monthly}</span>
                  <span className="text-slate-400 ml-2 pb-1">/mo</span>
                </div>
                
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-colors mb-8 ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary-hover text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 border border-purple-900/30 rounded-lg bg-slate-900/50 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-400 mb-6">
            We offer tailored credit repair solutions for more complex situations. Contact our team for a personalized plan.
          </p>
          <a 
            href="mailto:sales@bluecrestfinancial.com" 
            className="inline-block px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
} 