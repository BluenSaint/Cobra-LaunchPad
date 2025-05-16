'use client'

import { FC, useState, useRef, useEffect } from 'react'

const PriceItem: FC<{
  name: string
  children: React.ReactNode
}> = ({ name, children }) => (
  <li className="flex items-start">
    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-slate-300">{children}</span>
  </li>
)

export default function Pricing() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-inter">
            Choose the plan that best fits your needs. All plans include our AI-powered credit repair technology.
          </p>
        </div>

        <div className="relative overflow-hidden pb-2">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto touch-pan-x pb-8 -mb-6 scrollbar-hide snap-x snap-mandatory gap-6"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Cobra Shield Plan */}
            <div className="glassmorphism p-8 relative min-w-[300px] md:min-w-0 flex-[0_0_90%] md:flex-[0_0_46%] lg:flex-[0_0_30%] snap-start">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 font-playfair">Cobra Shield</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-sm">$</span>
                  <span className="text-4xl font-bold">85</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-slate-400 text-sm">Perfect for individuals just starting their credit repair journey.</p>
              </div>
              <ul className="space-y-4 mb-8">
                <PriceItem name="bureaus">Covers up to 3 bureaus</PriceItem>
                <PriceItem name="disputes">2 disputes/month (unless escalated)</PriceItem>
                <PriceItem name="analyze">Credit report analysis</PriceItem>
                <PriceItem name="secure">Secure document uploads</PriceItem>
                <PriceItem name="monitoring">No tradelines included</PriceItem>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/20 text-white transform hover:scale-105 active:scale-95">
                Get Started
              </button>
            </div>

            {/* Cobra Elite Plan */}
            <div className="glassmorphism p-8 relative min-w-[300px] md:min-w-0 flex-[0_0_90%] md:flex-[0_0_46%] lg:flex-[0_0_30%] snap-start border-blue-500 ring-2 ring-blue-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 font-playfair">Cobra Elite</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-sm">$</span>
                  <span className="text-4xl font-bold">150</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-slate-400 text-sm">Ideal for those who need comprehensive credit repair solutions.</p>
              </div>
              <ul className="space-y-4 mb-8">
                <PriceItem name="unlimited">Unlimited disputes</PriceItem>
                <PriceItem name="priority">Priority processing (48hr turnaround)</PriceItem>
                <PriceItem name="tradeline">Monthly tradeline placement</PriceItem>
                <PriceItem name="roadmap">Personal funding roadmap</PriceItem>
                <PriceItem name="coaching">Business credit coaching</PriceItem>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20 text-white transform hover:scale-105 active:scale-95">
                Start Elite Plan
              </button>
            </div>

            {/* Cobra Infinity Plan */}
            <div className="glassmorphism p-8 relative min-w-[300px] md:min-w-0 flex-[0_0_90%] md:flex-[0_0_46%] lg:flex-[0_0_30%] snap-start">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 font-playfair">Cobra Infinity</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-sm">$</span>
                  <span className="text-4xl font-bold">399</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-slate-400 text-sm">For businesses and individuals who need the ultimate credit solution.</p>
              </div>
              <ul className="space-y-4 mb-8">
                <PriceItem name="elite">All Elite perks</PriceItem>
                <PriceItem name="tradelines">2 tradelines/month</PriceItem>
                <PriceItem name="business">Business formation (LLC, EIN, DUNS)</PriceItem>
                <PriceItem name="funding">Access to private funding network</PriceItem>
                <PriceItem name="audits">Quarterly credit audits</PriceItem>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/20 text-white transform hover:scale-105 active:scale-95">
                Contact Sales
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-6 flex justify-center gap-2 mt-4">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="h-2 w-2 rounded-full bg-slate-600"></span>
            <span className="h-2 w-2 rounded-full bg-slate-600"></span>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-blue-400 font-semibold mb-3">Our Promise</p>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Legally guided dispute automation using AI-generated letters and escalation protocols.
          </p>
        </div>
      </div>
    </section>
  )
} 