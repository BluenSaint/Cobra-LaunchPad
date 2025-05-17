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
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.left.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.right.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Summaries */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal Summaries</h3>
            <div className="space-y-4 text-xs text-slate-500">
              <p><span className="text-teal-400">Privacy:</span> {legalContent.privacy}</p>
              <p><span className="text-teal-400">Terms:</span> {legalContent.terms}</p>
              <p><span className="text-teal-400">Disclaimer:</span> {legalContent.disclaimer}</p>
              <p><span className="text-teal-400">Cookies:</span> {legalContent.cookies}</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-6 mb-8">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <FontAwesomeIcon icon={social.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
            
            {/* Copyright and Disclaimer */}
            <div className="space-y-4">
              <p className="text-sm text-slate-400">{footerLinks.copyright}</p>
              <p className="text-sm text-slate-500">{footerLinks.disclaimer}</p>
              
              {/* Compliance badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">CROA Compliant</span>
                <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">FCRA Guidelines</span>
                <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">SOC2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 