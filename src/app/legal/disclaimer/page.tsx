'use client'

import Link from 'next/link'

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-teal-500 hover:text-teal-400 mb-2 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Legal Disclaimer</h1>
          <p className="text-slate-400">Last Updated: May 15, 2024</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <h2>Important Notice</h2>
          <p>
            Please read this disclaimer carefully before using Project Cobra by BlueCrest Financial.
          </p>
          
          <h2>Not a Law Firm</h2>
          <p>
            <strong>BlueCrest Financial is not a law firm.</strong> We do not provide legal advice, representation, or services. Our platform offers AI-powered credit repair assistance based on consumer protection rights available to all consumers.
          </p>
          
          <h2>No Guarantee of Results</h2>
          <p>
            We cannot and do not guarantee any specific results from using our services. Credit reporting agencies are not obligated to remove accurate negative information from your credit report, even when properly disputed.
          </p>
          
          <p>
            The success of our service depends on various factors including, but not limited to:
          </p>
          <ul>
            <li>The accuracy and completeness of the information in your credit report</li>
            <li>The nature of the items being disputed</li>
            <li>The responsiveness of creditors and credit bureaus</li>
            <li>The specific circumstances of your credit history</li>
          </ul>
          
          <h2>Educational and Administrative Services</h2>
          <p>
            Our services are primarily educational and administrative in nature. We help you understand your credit rights and provide tools to exercise those rights. We do not have any special relationships with credit bureaus or creditors that would allow us to remove accurate information or achieve results that you could not achieve on your own.
          </p>
          
          <h2>Consumer Credit Protection Laws</h2>
          <p>
            All services provided by Project Cobra are based on publicly available consumer protection laws, including:
          </p>
          <ul>
            <li>The Fair Credit Reporting Act (FCRA)</li>
            <li>The Credit Repair Organizations Act (CROA)</li>
            <li>The Fair Debt Collection Practices Act (FDCPA)</li>
            <li>Other applicable federal and state consumer protection laws</li>
          </ul>
          
          <h2>Do-It-Yourself Alternative</h2>
          <p>
            You have the right to dispute inaccurate information on your credit report directly with the credit bureaus and creditors without using our service. Information on how to do this is available for free from the Federal Trade Commission (FTC) and the Consumer Financial Protection Bureau (CFPB).
          </p>
          
          <h2>Financial Advice Disclaimer</h2>
          <p>
            Our service does not provide financial or investment advice. We recommend consulting with a qualified financial advisor for guidance on financial decisions.
          </p>
          
          <h2>Third-Party Content</h2>
          <p>
            Our website may include links to third-party websites, articles, or other content. We are not responsible for the accuracy, legality, or content of these external sources.
          </p>
          
          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, BlueCrest Financial shall not be liable for any damages resulting from your use of our services, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            If you have any questions about this disclaimer, please contact us at:
            <br />
            <a href="mailto:legal@bluecrestfinancial.com" className="text-teal-500 hover:text-teal-400">legal@bluecrestfinancial.com</a>
          </p>
        </div>
      </div>
    </div>
  )
} 