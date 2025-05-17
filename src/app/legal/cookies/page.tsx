'use client'

import Link from 'next/link'

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-teal-500 hover:text-teal-400 mb-2 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cookie Policy</h1>
          <p className="text-slate-400">Last Updated: May 15, 2024</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            This Cookie Policy explains how BlueCrest Financial uses cookies and similar technologies on the Project Cobra website and platform.
          </p>
          
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They allow the website to recognize your device and remember information about your visit, such as your preferences and settings.
          </p>
          
          <h2>How We Use Cookies</h2>
          <p>
            We use cookies primarily for session and authentication tracking. Specifically, we use cookies to:
          </p>
          <ul>
            <li>Maintain your session while you use our platform</li>
            <li>Remember your login information</li>
            <li>Ensure the security of your account</li>
            <li>Analyze how our website is used to improve our service</li>
          </ul>
          
          <h2>Types of Cookies We Use</h2>
          <p>
            We use the following types of cookies:
          </p>
          <ol>
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies allow us to remember choices you make and provide enhanced features. They may be set by us or by third-party providers whose services we have added to our pages.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve our website and services.
            </li>
          </ol>
          
          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies may be placed by third-party services that appear on our pages. We do not control these third-party cookies. You can check the privacy policies of these third parties to find out how they use cookies.
          </p>
          
          <h2>How to Control Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our site and some services and functionalities may not work.
          </p>
          
          <p>
            To opt out of cookies, you can:
          </p>
          <ul>
            <li>Adjust your browser settings to block or delete cookies</li>
            <li>Use private browsing mode</li>
            <li>Use browser extensions designed to block tracking</li>
          </ul>
          
          <h2>Changes to Our Cookie Policy</h2>
          <p>
            We may update our Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page, and if the changes are significant, we will provide a more prominent notice.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
            <br />
            <a href="mailto:privacy@bluecrestfinancial.com" className="text-teal-500 hover:text-teal-400">privacy@bluecrestfinancial.com</a>
          </p>
        </div>
      </div>
    </div>
  )
} 