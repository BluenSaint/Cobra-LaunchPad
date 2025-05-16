'use client'

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our AI-powered credit repair technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="glassmorphism p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-sm">$</span>
                <span className="text-4xl font-bold">49</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-400 text-sm">Perfect for individuals just starting their credit repair journey.</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-slate-300">AI-powered credit analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Up to 5 disputes per month</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Basic credit monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Email support</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Monthly credit score updates</span>
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 bg-slate-700 hover:bg-slate-600 text-white">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="glassmorphism p-8 relative border-blue-500 ring-2 ring-blue-500">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-sm">$</span>
                <span className="text-4xl font-bold">99</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-400 text-sm">Ideal for those who need comprehensive credit repair solutions.</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-slate-300">Everything in Basic, plus:</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Unlimited disputes per month</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Advanced credit monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Priority email & chat support</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Weekly credit score updates</span>
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 bg-blue-500 hover:bg-blue-600 text-white">
              Start Pro Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="glassmorphism p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-sm">$</span>
                <span className="text-4xl font-bold">199</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-400 text-sm">For businesses and individuals who need the ultimate credit solution.</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-slate-300">Everything in Pro, plus:</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">24/7 priority support</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Daily credit score updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Business credit building</span>
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 bg-slate-700 hover:bg-slate-600 text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 