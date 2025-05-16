'use client'

import { motion } from 'framer-motion'
import { DocumentTextIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Automated Dispute Filing',
    description: 'Our AI-powered system automatically generates and files dispute letters based on your credit report analysis.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Real-time Score Monitoring',
    description: 'Track your credit score changes in real-time with instant notifications and detailed analytics.',
    icon: ChartBarIcon,
  },
  {
    title: 'Attorney-Reviewed Letters',
    description: 'Every dispute letter is reviewed and approved by our team of experienced credit attorneys.',
    icon: ShieldCheckIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to repair and maintain your credit score
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 