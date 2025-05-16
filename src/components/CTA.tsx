'use client'

export default function CTA() {
  return (
    <section className="py-16 md:py-24 animated-gradient-bg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Boost Your Credit Score?</h2>
        <p className="text-slate-200 max-w-xl mx-auto mb-10 font-inter">
          Join thousands of satisfied customers who have transformed their financial future with our AI-powered credit repair solution.
        </p>
        <a 
          href="#pricing" 
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white rounded-lg font-semibold shadow-md hover:shadow-blue-500/20 transform hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Get Started Today
        </a>
      </div>
    </section>
  )
} 