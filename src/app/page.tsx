'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Pricing />
      <section className="py-16 md:py-24 animated-gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Credit Score?</h2>
          <p className="text-slate-200 max-w-xl mx-auto mb-10">
            Join thousands of satisfied customers who have transformed their financial future with our AI-powered credit repair solution.
          </p>
          <a href="#pricing" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </main>
  )
}
