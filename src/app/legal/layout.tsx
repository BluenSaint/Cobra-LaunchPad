'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
} 