'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description: 'Create your account and connect your credit reports securely.',
  },
  {
    number: '02',
    title: 'AI Analysis',
    description: 'Our AI system analyzes your reports to identify disputable items.',
  },
  {
    number: '03',
    title: 'Automated Disputes',
    description: 'We generate and file customized dispute letters to credit bureaus.',
  },
  {
    number: '04',
    title: 'Track Progress',
    description: 'Monitor your progress and credit score improvements in real-time.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300">
            Four simple steps to better credit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 