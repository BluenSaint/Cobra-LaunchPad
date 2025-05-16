'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Basic',
    price: '49',
    description: 'Perfect for individuals just starting their credit repair journey.',
    features: [
      'AI-powered credit analysis',
      'Up to 5 disputes per month',
      'Basic credit monitoring',
      'Email support',
      'Monthly credit score updates'
    ],
    cta: 'Get Started',
    featured: false
  },
  {
    name: 'Pro',
    price: '99',
    description: 'Ideal for those who need comprehensive credit repair solutions.',
    features: [
      'Everything in Basic, plus:',
      'Unlimited disputes per month',
      'Advanced credit monitoring',
      'Priority email & chat support',
      'Weekly credit score updates',
      'Identity theft protection',
      'Custom dispute letters'
    ],
    cta: 'Start Pro Plan',
    featured: true
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For businesses and individuals who need the ultimate credit solution.',
    features: [
      'Everything in Pro, plus:',
      'Dedicated account manager',
      '24/7 priority support',
      'Daily credit score updates',
      'Business credit building',
      'Legal consultation',
      'Custom financial planning'
    ],
    cta: 'Contact Sales',
    featured: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our AI-powered credit repair technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glassmorphism p-8 relative ${
                tier.featured ? 'border-blue-500 ring-2 ring-blue-500' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-sm">$</span>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-blue-500 flex-shrink-0 mr-2" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  tier.featured
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 