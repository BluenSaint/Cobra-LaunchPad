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
    <section id="pricing" className="py-16 md:py-24 bg-[#03293d]">
      <div className="container mx-auto px-6">
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pricing
          </h2>
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

        <div 
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Shield Plan */}
          <div className="bg-slate-800 p-6 rounded-lg flex-[0_0_90%] md:flex-[0_0_30%] snap-start">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2 text-white">Shield</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-white">$35</span>
              </div>
              <p className="text-slate-400 text-sm">Per pan</p>
            </div>
            <ul className="space-y-3 mb-6">
              <PriceItem>No Transfers</PriceItem>
              <PriceItem>Free dames</PriceItem>
              <PriceItem>Fase tansing</PriceItem>
            </ul>
            <button className="w-full py-3 px-6 rounded-md font-medium bg-teal-600 hover:bg-teal-700 text-white">
              Confliec
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-slate-800 p-6 rounded-lg flex-[0_0_90%] md:flex-[0_0_30%] snap-start">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2 text-white">Elite</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-white">79</span>
                <span className="text-sm text-slate-400 self-end mb-1">/mo</span>
              </div>
              <p className="text-slate-400 text-sm">Per month</p>
            </div>
            <ul className="space-y-3 mb-6">
              <PriceItem>Unlimited casde</PriceItem>
              <PriceItem>Full details</PriceItem>
              <PriceItem>Full pricing</PriceItem>
            </ul>
            <button className="w-full py-3 px-6 rounded-md font-medium bg-teal-600 hover:bg-teal-700 text-white">
              Confirm
            </button>
          </div>

          {/* Infinity Plan */}
          <div className="bg-slate-800 p-6 rounded-lg flex-[0_0_90%] md:flex-[0_0_30%] snap-start">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2 text-white">Infinity</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-white">—</span>
              </div>
              <p className="text-slate-400 text-sm">Contact Sales</p>
            </div>
            <div className="h-[105px] flex items-center justify-center mb-6">
              <p className="text-slate-300 text-sm">Contact Sales</p>
            </div>
            <button className="w-full py-3 px-6 rounded-md font-medium bg-teal-600 hover:bg-teal-700 text-white">
              Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 