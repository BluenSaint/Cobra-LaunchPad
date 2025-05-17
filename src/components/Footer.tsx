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
    { name: "Blog", href: "#" },
  ],
  right: [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Disclaimer", href: "/legal/disclaimer" },
    { name: "CROA Disclosure", href: "/legal/croa" },
  ],
  social: [
    { name: "Facebook", icon: faFacebook, href: "#" },
    { name: "X", icon: faXTwitter, href: "#" },
    { name: "Instagram", icon: faInstagram, href: "#" },
  ],
  copyright: "© 2024 BlueCrest Financial. All Rights Reserved.",
}

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center mb-6">
              <div className="bg-slate-800/80 rounded-full p-1.5 flex items-center justify-center w-8 h-8 border border-purple-900/30 mr-2">
                <span className="text-sm font-bold text-white">BC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold uppercase text-white leading-none">PROJECT COBRA</span>
                <span className="text-xs text-primary">by BlueCrest Financial</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              AI-powered credit repair platform focused on identifying and disputing inaccuracies to improve your credit score.
            </p>
            <div className="flex space-x-4 mb-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.left.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
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
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* CROA Disclaimer */}
        <div className="mt-12 p-6 border border-purple-900/30 rounded-lg bg-slate-900/50">
          <h3 className="text-sm font-bold text-white mb-2">Credit Repair Organizations Act Disclosure:</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            According to the Credit Repair Organizations Act, 15 U.S.C. §1679 et seq., You have the right to dispute inaccurate information in your credit report by contacting the credit bureau directly. However, neither you nor any 'credit repair' company or credit repair organization has the right to have accurate, current, and verifiable information removed from your credit report. The credit bureau must remove accurate, negative information from your report only if it is over 7 years old. Bankruptcy information can be reported for 10 years.
          </p>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            You have the right to a free credit report from each of the nationwide consumer reporting agencies once every 12 months. To obtain your free credit report, visit <a href="https://www.annualcreditreport.com" className="text-primary hover:underline">www.annualcreditreport.com</a> or call 1-877-322-8228.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-sm text-slate-500">{footerLinks.copyright}</p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-slate-500 hover:text-primary">Support</a>
              <a href="#" className="text-sm text-slate-500 hover:text-primary">Contact</a>
              <a href="#" className="text-sm text-slate-500 hover:text-primary">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 