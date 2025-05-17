'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle link clicking on mobile to close menu and scroll to section
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    
    // Add a slight delay to allow the menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled || mobileMenuOpen ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-[#03293d]'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Project Cobra by BlueCrest Financial</span>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image 
                src="/bluecrest-logo.png" 
                alt="BlueCrest Financial Logo"
                fill
                style={{ objectFit: 'contain' }}
                className="drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
                priority
              />
            </div>
            <span className="ml-2 text-lg font-bold uppercase tracking-wide text-white">PROJECT COBRA</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 justify-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-white/80 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#pricing"
            className="text-sm font-semibold leading-6 text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div 
          className="absolute inset-0 bg-black/20" 
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm overflow-y-auto bg-[#03293d] px-6 py-6 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="-m-1.5 p-1.5 flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image 
                  src="/bluecrest-logo.png" 
                  alt="BlueCrest Financial Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
                  priority
                />
              </div>
              <span className="ml-2 text-base font-bold uppercase tracking-wide text-white">PROJECT COBRA</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#pricing"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-teal-600 hover:bg-teal-700 transition-colors text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#pricing');
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 