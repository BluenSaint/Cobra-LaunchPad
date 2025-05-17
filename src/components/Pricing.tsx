'use client'

import { FC, useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const PriceItem: FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <li className="flex items-start mb-3">
    <svg className="w-5 h-5 mt-0.5 mr-2 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-slate-300">{children}</span>
  </li>
)

export default function Pricing() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('monthly');

  // Update mobile status based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle scrolling to specific card on mobile
  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Update active index based on scroll position
  const handleScroll = () => {
    if (!sliderRef.current || !isMobile) return;
    
    const scrollPosition = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.scrollWidth / 3;
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeIndex, isMobile]);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900 to-[#03293d]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-800/30 border border-teal-700/50 text-teal-400 text-sm mb-4">
            <span className="mr-1">💰</span>
            Simple & Transparent Pricing
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-white">
            Choose Your Plan
          </h2>
          
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Select the perfect plan for your credit repair needs with our simple, transparent pricing.
          </p>
          
          {/* Plan switcher */}
          <div className="inline-flex p-1 rounded-lg bg-slate-800/50 mb-8">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedPlan === 'monthly' 
                  ? 'bg-teal-600 text-white' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan('annually')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedPlan === 'annually' 
                  ? 'bg-teal-600 text-white' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Annually <span className="text-xs opacity-90">Save 20%</span>
            </button>
          </div>
        </motion.div>
        
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 text-sm">
            <svg className="w-4 h-4 mr-1.5 text-teal-500" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M12 3L4 7V13C4 17.0599 7.33 20.41 12 22C16.67 20.41 20 17.0599 20 13V7L12 3Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CROA Compliant
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 text-sm">
            <svg className="w-4 h-4 mr-1.5 text-teal-500" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M12 3L4 7V13C4 17.0599 7.33 20.41 12 22C16.67 20.41 20 17.0599 20 13V7L12 3Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            FCRA Guidelines
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 text-sm">
            <svg className="w-4 h-4 mr-1.5 text-teal-500" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M12 3L4 7V13C4 17.0599 7.33 20.41 12 22C16.67 20.41 20 17.0599 20 13V7L12 3Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            SOC2
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 text-sm">
            <svg className="w-4 h-4 mr-1.5 text-teal-500" viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            7-Day Refund Policy
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center mb-4 md:hidden">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${index === activeIndex ? 'bg-teal-500' : 'bg-slate-600'}`}
              onClick={() => scrollToCard(index)}
              aria-label={`View pricing plan ${index + 1}`}
            />
          ))}
        </div>

        <div 
          ref={sliderRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Shield Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 backdrop-blur-sm"
          >
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-teal-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-teal-500" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Shield</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-white">$35</span>
              </div>
              <p className="text-slate-400 text-sm">Per plan</p>
            </div>
            <ul className="space-y-1 mb-8">
              <PriceItem>Covers all 3 bureaus</PriceItem>
              <PriceItem>Basic dispute templates</PriceItem>
              <PriceItem>Credit report analysis</PriceItem>
              <PriceItem>Email support</PriceItem>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg font-medium bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white transition-all duration-300 shadow-lg shadow-teal-900/30">
              Get Started
            </button>
          </motion.div>

          {/* Elite Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800/50 p-8 rounded-xl border-2 border-teal-500 backdrop-blur-sm relative transform md:scale-105 md:-translate-y-2 shadow-xl shadow-teal-900/10"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-1 rounded-full text-white text-sm font-medium">
              Most Popular
            </div>
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-teal-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-teal-500" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L15 10M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Elite</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-white">${selectedPlan === 'annually' ? '63' : '79'}</span>
                <span className="text-sm text-teal-400 self-end mb-1 ml-1">/mo</span>
              </div>
              <p className="text-slate-400 text-sm">{selectedPlan === 'annually' ? 'Billed annually' : 'Per month'}</p>
            </div>
            <ul className="space-y-1 mb-8">
              <PriceItem>Unlimited disputes</PriceItem>
              <PriceItem>AI-powered letter generation</PriceItem>
              <PriceItem>Priority processing</PriceItem>
              <PriceItem>Phone and email support</PriceItem>
              <PriceItem>Credit score tracking</PriceItem>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg font-medium bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white transition-all duration-300 shadow-lg shadow-teal-900/30">
              Choose Elite
            </button>
          </motion.div>

          {/* Infinity Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 backdrop-blur-sm"
          >
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-teal-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-teal-500" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8V5L19 8M19 5L16 2M5 8C5 6.93913 5.42143 5.92172 6.17157 5.17157C6.92172 4.42143 7.93913 4 9 4M5 16C5 17.0609 5.42143 18.0783 6.17157 18.8284C6.92172 19.5786 7.93913 20 9 20M19 16C19 17.0609 18.5786 18.0783 17.8284 18.8284C17.0783 19.5786 16.0609 20 15 20M19 12C19 13.0609 18.5786 14.0783 17.8284 14.8284C17.0783 15.5786 16.0609 16 15 16H9C7.93913 16 6.92172 15.5786 6.17157 14.8284C5.42143 14.0783 5 13.0609 5 12M19 8C19 9.06087 18.5786 10.0783 17.8284 10.8284C17.0783 11.5786 16.0609 12 15 12H9C7.93913 12 6.92172 11.5786 6.17157 10.8284C5.42143 10.0783 5 9.06087 5 8" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Infinity</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-white">Custom</span>
              </div>
              <p className="text-slate-400 text-sm">Contact Sales</p>
            </div>
            <ul className="space-y-1 mb-8">
              <PriceItem>All Elite features</PriceItem>
              <PriceItem>Business credit building</PriceItem>
              <PriceItem>Custom dispute strategies</PriceItem>
              <PriceItem>Dedicated account manager</PriceItem>
              <PriceItem>API access available</PriceItem>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg font-medium bg-slate-700 hover:bg-slate-600 text-white transition-all duration-300">
              Contact Sales
            </button>
          </motion.div>
        </div>
        
        {/* 100% Satisfaction Guarantee */}
        <div className="mt-16 max-w-3xl mx-auto p-6 bg-slate-800/30 rounded-xl border border-teal-900/30">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-teal-900/30 rounded-full p-3 text-teal-400">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">100% Satisfaction Guarantee</h3>
              <p className="text-slate-300">We offer a 7-day money-back guarantee if you're not completely satisfied with our service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 