'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Automated Dispute Filing',
    description: 'Finds Auromaticalum',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Score Monitoring',
    description: 'Adirfeecodupdatates',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M4 14L8 10L12 14L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6H20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Attorney-Reviewed Letturs',
    description: 'Steke a Sampre doros',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2L4 10V22H20V10L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 22V16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Business Credit Solutions',
    description: 'Eficiont Ocations',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M4 5V19H20V5H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#03293d] mb-4">
            Features
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 text-[#03293d] mb-4 flex items-center justify-center">
                <feature.icon />
              </div>
              <h3 className="text-lg font-semibold text-[#03293d] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 