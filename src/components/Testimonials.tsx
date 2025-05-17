'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "The automation platform saved us hundreds of hours of manual work. Our team can now focus on strategy while AI handles the routine tasks.",
    author: "James Carter",
    title: "Marketing Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    text: "I was skeptical at first, but the results speak for themselves. Within 45 days, we've seen a 30% increase in efficiency across departments.",
    author: "Sophia Martinez",
    title: "Operations Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    text: "The customer support team was fantastic in explaining everything. This solution has completely transformed how we approach automation.",
    author: "David Reynolds",
    title: "Tech Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Why Businesses Love <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Our AI Solutions</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hear from real customers who have transformed their operations with our intelligent automation platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-900/50 border border-purple-900/30 p-6 rounded-lg backdrop-blur-sm"
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full mr-4 object-cover border border-purple-500/30"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-xs text-slate-400">{testimonial.title}</p>
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
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-teal-50 rounded-xl border border-teal-100">
            <div className="flex items-center mb-4">
              <svg className="w-12 h-12 text-teal-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
              <div className="text-left">
                <h3 className="text-xl font-bold text-[#03293d]">Join 10,000+ Satisfied Customers</h3>
                <p className="text-slate-600">Average credit score improvement: 75+ points</p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <a 
                href="#pricing" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-teal-200/50"
              >
                Start Your Journey Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 