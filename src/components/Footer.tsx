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
    { name: "Cookie Policy", href: "/legal/cookies" },
  ],
  social: [
    { name: "Facebook", icon: faFacebook, href: "#" },
    { name: "X", icon: faXTwitter, href: "#" },
    { name: "Instagram", icon: faInstagram, href: "#" },
  ],
  copyright: "© 2024 XTRACT AI. All Rights Reserved.",
}

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-white">XTRACT<span className="text-primary">.</span></div>
            </div>
            <p className="text-slate-400 mb-6">
              AI-powered automation platform focused on helping businesses scale through intelligent process optimization.
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
        
        <div className="mt-12 pt-8 border-t border-white/10">
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