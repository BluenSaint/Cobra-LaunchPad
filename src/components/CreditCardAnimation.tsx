'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function CreditCardAnimation() {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Motion values for tracking mouse position and card rotation
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth out the rotation with springs
  const springConfig = { damping: 25, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [0, 500], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, 500], [-15, 15]), springConfig)
  
  // Glare effect position based on mouse
  const glareX = useSpring(useTransform(mouseX, [0, 500], ['0%', '100%']), springConfig)
  const glareY = useSpring(useTransform(mouseY, [0, 500], ['0%', '100%']), springConfig)
  
  // Create pulse animation for the chip
  const pulseVariants = {
    pulse: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  }
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      
      // Calculate mouse position relative to the card
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      mouseX.set(x)
      mouseY.set(y)
    }
    
    const handleMouseLeave = () => {
      // Reset rotation when mouse leaves
      mouseX.set(250) // Middle position
      mouseY.set(250) // Middle position
    }
    
    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [mouseX, mouseY])
  
  return (
    <div className="relative w-full max-w-md mx-auto mt-8 cursor-pointer perspective-1000">
      <motion.div
        ref={cardRef}
        className="relative w-full aspect-[1.6/1] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900"
        style={{
          rotateX, 
          rotateY,
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.3)'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Glare effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent w-full h-full z-10"
          style={{
            backgroundPosition: `${glareX} ${glareY}`,
            backgroundSize: '150% 150%',
            mixBlendMode: 'soft-light'
          }}
        />
        
        {/* Card content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <motion.div 
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Image 
                src="/bluecrest-logo.png" 
                alt="BlueCrest Financial" 
                width={32} 
                height={32} 
                className="w-8 h-8 object-contain"
              />
            </motion.div>
            
            <motion.div 
              variants={pulseVariants}
              animate="pulse"
              className="w-8 h-6 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-md opacity-80"
            />
          </div>
          
          <div className="mt-8">
            <div className="text-white font-mono text-xl mb-1 tracking-wider">**** **** **** 7890</div>
            <div className="flex justify-between">
              <div>
                <div className="text-white/60 text-xs mb-1">CARD HOLDER</div>
                <div className="text-white font-medium text-sm">JOHN W SMITH</div>
              </div>
              <div>
                <div className="text-white/60 text-xs mb-1">EXPIRES</div>
                <div className="text-white font-medium text-sm">05/28</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3D elements */}
        <div 
          className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-md z-0"
          style={{ transform: 'translateZ(20px)' }}
        />
        
        <div 
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-md z-0"
          style={{ transform: 'translateZ(10px)' }}
        />
      </motion.div>
    </div>
  )
} 