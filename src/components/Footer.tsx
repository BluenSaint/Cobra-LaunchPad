'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const footerLinks = {
  left: [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
    { name: "Blog", href: "https://www.instagram.com/bluecrestfinancial?igsh=MWY5NDBnaGVxZjUz&utm_source=qr" },
  ],
  right: [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Disclaimer", href: "/legal/disclaimer" },
    { name: "Cookie Policy", href: "/legal/cookies" },
  ],
  social: [
    { name: "Facebook", icon: faFacebook, href: "https://facebook.com/bluecrestfinancial" },
    { name: "X", icon: faXTwitter, href: "https://twitter.com/bluecrestfin" },
    { name: "Instagram", icon: faInstagram, href: "https://www.instagram.com/bluecrestfinancial?igsh=MWY5NDBnaGVxZjUz&utm_source=qr" },
  ],
  copyright: "© 2024 Blue Crest Financial. All Rights Reserved.",
  disclaimer: "BlueCrest Financial is not a law firm or a credit bureau. Results vary based on accuracy of your credit report."
}

const legalContent = {
  privacy: "We maintain encrypted storage of your data and never sell or share your information with third parties without your explicit consent.",
  terms: "No guarantee of credit outcome. User is responsible for data accuracy. Full cancellation rights. Services begin after signed agreement.",
  disclaimer: "BlueCrest is not a law firm. No guarantee of deletion or score increase. All services are based on public consumer protection rights.",
  cookies: "We use cookies only for session/auth tracking, and you can opt out at any time in your browser settings."
}

export default function Footer() {
  return (
    <footer className="bg-[#03293d] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start gap-12">
          <div className="max-w-sm">
            <div className="flex items-center mb-6">
              <div className="bg-teal-900/50 rounded-lg p-2 w-12 h-12 flex items-center justify-center mr-3 shadow-inner shadow-teal-700/10">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">PROJECT COBRA</h2>
                <p className="text-teal-400 text-sm">by BlueCrest Financial</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8">
              AI-powered credit repair platform focused on helping you improve your credit score through legally guided dispute automation.
            </p>
            <div className="flex space-x-4 mb-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <FontAwesomeIcon icon={social.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.left.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-teal-400 transition-colors flex items-center"
                    >
                      <svg className="w-3 h-3 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.right.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-teal-400 transition-colors flex items-center"
                    >
                      <svg className="w-3 h-3 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:support@bluecrestfinancial.com" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    support@bluecrestfinancial.com
                  </a>
                </li>
                <li>
                  <a href="tel:+18005551234" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2 text-teal-500" viewBox="0 0 24 24" fill="none">
                      <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0359 20.9297 20.3999 20.7522 20.6636 20.4602C20.9273 20.1682 21.0704 19.784 21.0641 19.3903L21.0092 16.5C21.0031 16.1223 20.8529 15.7609 20.5894 15.4929C20.3259 15.2249 19.97 15.0679 19.5936 15.0612L17.5468 15.0111C17.1814 15.0047 16.8242 15.1097 16.5343 15.3111C16.2445 15.5124 16.0401 15.7986 15.9538 16.1262L15.5741 17.606C13.3871 16.7593 11.5043 15.1744 10.2258 13.0762L9.73648 11.6013C9.66905 11.3368 9.66947 11.0589 9.73772 10.7944C9.80598 10.5299 9.93968 10.2881 10.1259 10.0909L11.7256 8.60404C12.0135 8.33384 12.1986 7.96947 12.2497 7.57487C12.3008 7.18026 12.2147 6.78114 12.0072 6.44576L10.5344 4.09847C10.3126 3.72687 9.97242 3.44966 9.57524 3.31572C9.17805 3.18177 8.74678 3.20057 8.36387 3.36932L6.15208 4.3988C5.76039 4.57289 5.43408 4.87234 5.22587 5.25202C5.01765 5.6317 4.93637 6.0687 4.99579 6.49939C5.24935 8.63767 5.99478 12.2831 8.70868 15.576C11.9551 19.4832 16.3506 20.1226 18.6574 20.1226" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    (800) 555-1234
                  </a>
                </li>
                <li className="pt-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-1 bg-teal-900/50 rounded-md text-xs text-teal-400 border border-teal-800/50">CROA Compliant</span>
                    <span className="px-2 py-1 bg-teal-900/50 rounded-md text-xs text-teal-400 border border-teal-800/50">FCRA Guidelines</span>
                    <span className="px-2 py-1 bg-teal-900/50 rounded-md text-xs text-teal-400 border border-teal-800/50">SOC2</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-sm text-slate-400">{footerLinks.copyright}</p>
            
            <div className="bg-slate-800/50 p-4 rounded-lg max-w-xl">
              <p className="text-sm text-slate-400 font-medium mb-2">CROA Disclosure:</p>
              <p className="text-xs text-slate-500">
                You have the right to cancel your subscription at any time. Under the Credit Repair Organizations Act (CROA), credit repair companies cannot charge you until their services have been fully performed. No company can legally remove accurate and timely negative information from a credit report. For a free copy of your credit report, visit annualcreditreport.com.
              </p>
            </div>
          </div>
          
          <p className="text-xs text-slate-500 mt-6">{footerLinks.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
} 