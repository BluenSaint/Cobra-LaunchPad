'use client'

import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-teal-500 hover:text-teal-400 mb-2 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Terms of Service</h1>
          <p className="text-slate-400">Last Updated: May 15, 2024</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            Welcome to Project Cobra by BlueCrest Financial. By accessing or using our service, you agree to be bound by these Terms of Service.
          </p>
          
          <h2>1. Service Description</h2>
          <p>
            Project Cobra provides AI-powered credit repair services that help identify potential errors on your credit report and assist with the dispute process. Our services are educational and administrative in nature.
          </p>
          
          <h2>2. No Guarantee of Outcomes</h2>
          <p>
            <strong>We do not guarantee any specific credit outcome.</strong> Results vary based on the accuracy of your credit report, the nature of the items being disputed, and the responsiveness of creditors and credit bureaus.
          </p>
          
          <h2>3. User Responsibilities</h2>
          <p>
            You are responsible for:
          </p>
          <ul>
            <li>Providing accurate and complete information</li>
            <li>Reviewing and verifying all disputes before submission</li>
            <li>Maintaining the confidentiality of your account</li>
            <li>Complying with all applicable laws and regulations</li>
          </ul>
          
          <h2>4. Cancellation Rights</h2>
          <p>
            You have the right to cancel your service at any time. In accordance with the Credit Repair Organizations Act (CROA), you may cancel within 3 business days of signing up for a full refund.
          </p>
          
          <h2>5. Service Commencement</h2>
          <p>
            Services begin only after you have signed our service agreement and completed the necessary onboarding steps, including providing your credit reports.
          </p>
          
          <h2>6. Legal Status</h2>
          <p>
            BlueCrest Financial is not:
          </p>
          <ul>
            <li>A credit bureau or credit reporting agency</li>
            <li>A government agency</li>
            <li>A law firm or legal service provider</li>
          </ul>
          <p>
            Our platform is designed for educational and strategic dispute assistance based on consumer protection laws.
          </p>
          
          <h2>7. Payment and Billing</h2>
          <p>
            Payment for our services is due according to the plan you select. We offer subscription-based services that automatically renew until cancelled. You may cancel at any time.
          </p>
          
          <h2>8. Data Security and Privacy</h2>
          <p>
            We take data security seriously. Please review our <Link href="/legal/privacy-policy" className="text-teal-500 hover:text-teal-400">Privacy Policy</Link> for details on how we collect, use, and protect your information.
          </p>
          
          <h2>9. Limitations of Liability</h2>
          <p>
            To the maximum extent permitted by law, BlueCrest Financial shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
          
          <h2>10. Dispute Resolution</h2>
          <p>
            Any disputes arising from the use of our services will first be attempted to be resolved through good-faith negotiation. If unsuccessful, disputes shall be resolved through arbitration in accordance with the rules of the American Arbitration Association.
          </p>
          
          <h2>11. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes via email and/or through our website.
          </p>
          
          <h2>12. Contact Information</h2>
          <p>
            If you have any questions about these terms, please contact us at:
            <br />
            <a href="mailto:support@bluecrestfinancial.com" className="text-teal-500 hover:text-teal-400">support@bluecrestfinancial.com</a>
          </p>
        </div>
      </div>
    </div>
  )
} 