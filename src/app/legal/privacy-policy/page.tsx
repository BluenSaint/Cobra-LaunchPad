'use client'

import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-teal-500 hover:text-teal-400 mb-2 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-slate-400">Last Updated: May 15, 2024</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            At BlueCrest Financial, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Project Cobra credit repair service.
          </p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We collect the following types of information:
          </p>
          <ul>
            <li><strong>Personal Information:</strong> Name, address, email, phone number, and payment information</li>
            <li><strong>Credit Information:</strong> Credit reports, scores, and history that you provide to us</li>
            <li><strong>Account Information:</strong> Login credentials and preferences</li>
            <li><strong>Usage Data:</strong> How you interact with our service, including pages visited and features used</li>
          </ul>
          
          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul>
            <li>Provide our credit repair services</li>
            <li>Analyze your credit reports for potential disputes</li>
            <li>Generate dispute letters and communication with credit bureaus</li>
            <li>Process payments and manage your account</li>
            <li>Improve our services and user experience</li>
            <li>Communicate with you about your account and our services</li>
          </ul>
          
          <h2>3. Data Storage and Security</h2>
          <p>
            All user data is stored with encrypted security measures. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2>4. Data Sharing Practices</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in delivering our services (with strict confidentiality agreements)</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>Credit bureaus and creditors, but only as necessary to perform dispute services you request</li>
          </ul>
          
          <h2>5. Your Privacy Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
          
          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your experience and collect information about how you use our service. For more details, please see our <Link href="/legal/cookies" className="text-teal-500 hover:text-teal-400">Cookie Policy</Link>.
          </p>
          
          <h2>7. Third-Party Links</h2>
          <p>
            Our service may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any third-party sites you visit.
          </p>
          
          <h2>8. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and as required by law. When we no longer need your information, we will securely delete or anonymize it.
          </p>
          
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on our website.
          </p>
          
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@bluecrestfinancial.com" className="text-teal-500 hover:text-teal-400">privacy@bluecrestfinancial.com</a>
          </p>
        </div>
      </div>
    </div>
  )
} 