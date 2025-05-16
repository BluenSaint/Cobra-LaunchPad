'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const footerLinks = {
  left: [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ],
  right: [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Disclaimer", href: "/legal/disclaimer" },
    { name: "Cookie Policy", href: "/legal/cookies" },
  ],
  social: [
    { name: "Facebook", icon: faFacebook, href: "https://facebook.com" },
    { name: "X", icon: faXTwitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: faLinkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: faInstagram, href: "https://instagram.com" },
  ],
  copyright: "© 2025 Blue Crest Financial Consultant LLC. All Rights Reserved.",
  disclaimer: "This site is for informational purposes only. We are not financial advisors and do not provide legal advice."
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
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

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-6 mb-8">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 