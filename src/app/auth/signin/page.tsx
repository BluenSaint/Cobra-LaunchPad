import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-playfair text-white mb-4">Sign In</h1>
      <p className="text-gray-300 text-lg mb-8">Authentication coming soon...</p>
      <Link 
        href="/" 
        className="text-primary hover:text-primary-hover transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  )
} 