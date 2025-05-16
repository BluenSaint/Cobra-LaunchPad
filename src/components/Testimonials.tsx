'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "My score jumped 80 points in just 3 months! This service is incredible. The AI found errors I never would have caught.",
    author: "Jane S.",
    image: "https://placehold.co/60x60/60a5fa/FFFFFF?text=JS",
    borderColor: "border-blue-400"
  },
  {
    text: "I was skeptical at first, but the automated process made everything so easy. Finally got approved for my dream car loan!",
    author: "Mark D.",
    image: "https://placehold.co/60x60/34d399/FFFFFF?text=MD",
    borderColor: "border-green-400"
  },
  {
    text: "The support team was fantastic in explaining everything. It's more than just software; it's a full support system.",
    author: "Lisa A.",
    image: "https://placehold.co/60x60/fbbf24/FFFFFF?text=LA",
    borderColor: "border-yellow-400"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hear what our satisfied customers have to say about their credit transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="testimonial-card"
            >
              <p className="text-slate-300 mb-6 italic text-lg">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className={`w-14 h-14 rounded-full mr-4 border-2 ${testimonial.borderColor}`}
                />
                <div>
                  <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                  <p className="text-sm text-blue-400">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 