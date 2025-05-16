import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cobra LaunchPad - AI Automated Credit Repair Agent',
  description: 'A powerful credit repair solution to improve your credit report and boost your score.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
