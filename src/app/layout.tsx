import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project Cobra by BlueCrest Financial | AI-Powered Credit Repair',
  description: 'Experience the power of AI-driven credit repair technology. We help you identify errors, dispute inaccuracies, and improve your credit score faster than ever before.',
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
