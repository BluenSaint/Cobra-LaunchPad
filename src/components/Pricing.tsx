'use client'

import { FC, useState, useRef, useEffect } from 'react'

const PriceItem: FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <li className="flex items-start">
    <span className="text-teal-500 mr-2">•</span>
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
    <section id="pricing" className="py-16 md:py-24 bg-[#03293d]">
      <div className="container mx-auto px-6">
        <div className="text-left mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pricing
          </h2>
          
          {/* 7-Day Refund Policy Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-600/20 text-teal-400 text-sm">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12L9 16L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            7-Day Refund Policy
          </div>
        </div>
        
        {/* All plans accordion button */}
        <div className="mb-8">
          <button className="w-full flex items-center justify-between bg-slate-800 p-4 rounded-lg text-white">
            <span className="text-lg">All plans at se</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
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
          className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Shield Plan */}
          <div className="bg-slate-800 p-6 rounded-lg min-w-[280px] w-full md:w-auto flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_32%] snap-center">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2 text-white">Cobra Shield</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-white">$35</span>
              </div>
              <p className="text-slate-400 text-sm">Per plan</p>
            </div>
            <ul className="space-y-3 mb-6">
              <PriceItem>Covers all 3 bureaus</PriceItem>
              <PriceItem>Basic dispute templates</PriceItem>
              <PriceItem>Credit report analysis</PriceItem>
            </ul>
            <button className="w-full py-3 px-6 rounded-md font-medium bg-teal-600 hover:bg-teal-700 text-white">
              Get Started
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-slate-800 p-6 rounded-lg border-2 border-teal-500 min-w-[280px] w-full md:w-auto flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_32%] snap-center">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-500 px-3 py-1 rounded-full text-white text-xs font-semibold">
              Most Popular
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2 text-white">Cobra Elite</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-white">79</span>
                <span className="text-sm text-slate-400 self-end mb-1">/mo</span>
              </div>
              <p className="text-slate-400 text-sm">Per month</p>
            </div>
            <ul className="space-y-3 mb-6">
              <PriceItem>Unlimited disputes</PriceItem>
              <PriceItem>AI-powered letter generation</PriceItem>
              <PriceItem>Priority processing</PriceItem>
            </ul>
            <button className="w-full py-3 px-6 rounded-md font-medium bg-teal-600 hover:bg-teal-700 text-white">
              Choose Elite
            </button>
          </div>

          {/* Infinity Plan */}
          <div className="bg-slate-800 p-6 rounded-lg min-w-[280px] w-full md:w-auto flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_32%] snap-center">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2 text-white">Cobra Infinity</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-white">—</span>
              </div>
              <p className="text-slate-400 text-sm">Contact Sales</p>
            </div>
            <ul className="space-y-3 mb-6">
              <PriceItem>All Elite features</PriceItem>
              <PriceItem>Business credit building</PriceItem>
              <PriceItem>Custom solutions</PriceItem>
            </ul>
            <button className="w-full py-3 px-6 rounded-md font-medium bg-teal-600 hover:bg-teal-700 text-white">
              Contact Sales
            </button>
          </div>
        </div>
        
        {/* Compliance badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="bg-slate-800/50 px-3 py-2 rounded-md flex items-center">
            <span className="text-xs text-slate-300">CROA Compliant</span>
          </div>
          <div className="bg-slate-800/50 px-3 py-2 rounded-md flex items-center">
            <span className="text-xs text-slate-300">FCRA Guidelines</span>
          </div>
          <div className="bg-slate-800/50 px-3 py-2 rounded-md flex items-center">
            <span className="text-xs text-slate-300">SOC2</span>
          </div>
        </div>
      </div>
    </section>
  )
} 