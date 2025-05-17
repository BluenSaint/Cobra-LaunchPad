'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function AnimatedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  size = 'md',
}: AnimatedButtonProps) {
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  }
  
  const baseClasses = `relative font-medium rounded-md inline-flex items-center justify-center overflow-hidden group ${sizeClasses[size]} ${className}`
  
  const variantClasses = {
    primary: 'text-white',
    secondary: 'text-primary',
  }
  
  const buttonContent = (
    <motion.span
      className={`${baseClasses} ${variantClasses[variant]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      {/* Glow effect for primary */}
      {variant === 'primary' && (
        <>
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
            animate={{ 
              background: [
                'linear-gradient(90deg, rgba(124, 58, 237, 1) 0%, rgba(99, 102, 241, 1) 100%)',
                'linear-gradient(90deg, rgba(139, 92, 246, 1) 0%, rgba(79, 70, 229, 1) 100%)',
                'linear-gradient(90deg, rgba(124, 58, 237, 1) 0%, rgba(99, 102, 241, 1) 100%)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <motion.span 
            className="absolute -inset-px bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md blur opacity-60 group-hover:opacity-100 transition duration-300"
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </>
      )}
      
      {/* Border effect for secondary */}
      {variant === 'secondary' && (
        <>
          <motion.span 
            className="absolute inset-0 bg-slate-900/50 border border-purple-500/50 rounded-md"
            whileHover={{ borderColor: 'rgba(139, 92, 246, 0.8)' }}
          />
          <motion.span 
            className="absolute -inset-px bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300"
          />
        </>
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children}
        
        {/* Arrow for primary */}
        {variant === 'primary' && (
          <motion.svg 
            className="w-5 h-5 ml-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        )}
      </span>
    </motion.span>
  )
  
  if (href) {
    return <a href={href}>{buttonContent}</a>
  }
  
  return <button onClick={onClick}>{buttonContent}</button>
} 