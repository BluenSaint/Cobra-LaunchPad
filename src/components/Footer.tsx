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
    { name: "Blog", href: "https://www.instagram.com/bluecrestfinancial" },
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
    { name: "Instagram", icon: faInstagram, href: "https://instagram.com/bluecrestfinancial" },
  ],
  copyright: "© 2025 Blue Crest Financial Consultant. All Rights Reserved.",
  disclaimer: "This site is for informational purposes only. We are not financial advisors."
}

const legalContent = {
  privacy: "We collect only the data necessary to provide services. All data is encrypted and never sold. Learn more by reviewing our full privacy commitment.",
  terms: "By using Project Cobra, you agree to our terms which govern usage, billing, dispute logic, and limitations of liability. This platform is not a law firm and does not offer legal advice.",
  disclaimer: "Results are not guaranteed. Every credit profile is different. This site is for informational and educational purposes only. Project Cobra does not promise score increases or deletions.",
  cookies: "We use essential cookies to improve functionality and analytics. By using the site, you consent to the use of cookies in accordance with our privacy practices."
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Links */}
          <div>
            <h3 className="text-lg font-bold font-playfair text-white mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-bold font-playfair text-white mb-4">Legal</h3>
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
            <h3 className="text-lg font-bold font-playfair text-white mb-4">Legal Summaries</h3>
            <div className="space-y-4 text-xs text-slate-500">
              <p><span className="text-blue-400">Privacy:</span> {legalContent.privacy}</p>
              <p><span className="text-blue-400">Terms:</span> {legalContent.terms}</p>
              <p><span className="text-blue-400">Disclaimer:</span> {legalContent.disclaimer}</p>
              <p><span className="text-blue-400">Cookies:</span> {legalContent.cookies}</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold font-playfair text-white mb-4">Connect With Us</h3>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 