'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Sign Up & Connect Reports',
  },
  {
    number: '2',
    title: 'AI Analysis & Recommendations',
  },
  {
    number: '4',
    title: 'Track Progress & Results',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#03293d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal line connecting circles */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-teal-500/30 z-0 hidden md:block"></div>
          
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 text-white font-bold text-xl mb-4 z-10">
                  {step.number}
                </div>
                <h3 className="text-white text-base whitespace-normal max-w-[200px]">{step.title}</h3>
              </motion.div>
            ))}
          </div>
          
          {/* Pricing cards preview - simplified version */}
          <div className="mt-20 grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <h3 className="text-white text-xl mb-4">Shield</h3>
              <div className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-white">$35</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">Per pan</p>
              <ul className="text-left mb-6 space-y-2">
                <li className="flex items-center text-sm text-slate-300">
                  <span className="mr-2 text-teal-500">•</span>
                  No Transfers
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="mr-2 text-teal-500">•</span>
                  Free dames
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="mr-2 text-teal-500">•</span>
                  Fase tansing
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-teal-600 text-white rounded-md">Confliec</button>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <h3 className="text-white text-xl mb-4">Elite</h3>
              <div className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-white">79</span>
                <span className="text-sm self-end mb-1 text-slate-400">/mo</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">Per month</p>
              <ul className="text-left mb-6 space-y-2">
                <li className="flex items-center text-sm text-slate-300">
                  <span className="mr-2 text-teal-500">•</span>
                  Unlimited casde
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="mr-2 text-teal-500">•</span>
                  Full details
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="mr-2 text-teal-500">•</span>
                  Full pricing
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-teal-600 text-white rounded-md">Confirm</button>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <h3 className="text-white text-xl mb-4">Infinity</h3>
              <div className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-white">—</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">Contact Sales</p>
              <div className="h-[88px] flex items-center justify-center mb-6">
                <p className="text-slate-300 text-sm">Contact Sales</p>
              </div>
              <button className="w-full py-2 px-4 bg-teal-600 text-white rounded-md">Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 