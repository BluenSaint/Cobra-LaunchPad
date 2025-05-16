import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import CTA from '@/components/CTA'

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
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  )
}
