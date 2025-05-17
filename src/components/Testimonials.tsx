'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "My credit score was holding me back from getting a mortgage. Project Cobra's AI-powered disputes helped me remove 4 inaccurate collections, and my score jumped 87 points in just 2 months!",
    author: "James Reynolds",
    title: "Homeowner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    text: "I was skeptical at first, but the results speak for themselves. Project Cobra identified errors I never would have found myself, and their disputes got them removed. My score is up 65 points!",
    author: "Sophia Martinez",
    title: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    text: "After being denied for an auto loan, I tried Project Cobra. Their system found reporting errors from 3 years ago and got them removed. I've now been approved and saved thousands on interest!",
    author: "David Chen",
    title: "Software Engineer",
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
            What Our Clients <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Are Saying</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real results from real people who have improved their credit scores with Project Cobra.
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
          <div className="inline-block p-8 bg-gradient-to-br from-slate-900 to-purple-900/30 rounded-xl border border-purple-500/20 max-w-xl">
            <div className="flex flex-col items-center mb-4">
              <svg className="w-12 h-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">Average Score Improvement</h3>
              <p className="text-slate-300 mt-2">Our clients see an average credit score increase of</p>
              <div className="text-5xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">+72 points</div>
            </div>
            <div className="flex justify-center mt-6">
              <a 
                href="#pricing" 
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-purple-900/30"
              >
                Start Your Credit Repair Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 