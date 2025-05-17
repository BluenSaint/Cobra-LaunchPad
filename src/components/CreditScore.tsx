'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function CreditScore() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.3
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const scoreIncreaseVariants = {
    initial: { 
      strokeDashoffset: "170", 
      filter: "drop-shadow(0px 0px 0px rgba(139, 92, 246, 0))"
    },
    hover: { 
      strokeDashoffset: "85", 
      filter: "drop-shadow(0px 0px 8px rgba(139, 92, 246, 0.5))",
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  }

  const numberCountVariants = {
    initial: { opacity: 1 },
    hover: { 
      opacity: [1, 0, 1],
      transition: { 
        duration: 1.2, 
        times: [0, 0.5, 1],
        ease: "easeInOut",
        delay: 0.3
      }
    }
  }

  const scoreTextVariants = {
    initial: { color: "#64748b" },
    hover: { 
      color: "#8b5cf6",
      transition: { duration: 1.2, delay: 0.5 }
    }
  }

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            Watch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Credit Score</span> Rise
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400 max-w-2xl mx-auto">
            Our AI-powered system helps identify and dispute inaccurate items on your credit report. See how your score can improve with Project Cobra.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Before Score */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/40 rounded-xl border border-purple-900/30 p-8 flex flex-col items-center relative z-10"
          >
            <div className="text-slate-300 mb-4">Without Project Cobra</div>
            <div className="relative w-44 h-44 mb-6">
              {/* Credit score circle background */}
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="#1e293b" 
                  strokeWidth="12" 
                />
                {/* Score indicator */}
                <motion.circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="#334155" 
                  strokeWidth="12" 
                  strokeDasharray="340" 
                  strokeDashoffset="170" 
                  strokeLinecap="round" 
                  transform="rotate(-90 60 60)" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                  variants={numberCountVariants}
                  animate={isHovering ? "hover" : "initial"}
                  className="text-4xl font-bold text-white"
                >
                  580
                </motion.span>
                <motion.span 
                  variants={scoreTextVariants}
                  animate={isHovering ? "hover" : "initial"}
                  className="text-sm text-slate-400"
                >
                  Poor
                </motion.span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white text-lg font-medium mb-2">Traditional Credit Repair</h3>
              <p className="text-slate-400 text-sm">Manual processes with minimal updates and slow progress tracking</p>
            </div>
          </motion.div>

          {/* Middle Arrow */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <div className="hidden lg:block">
              <motion.svg 
                className="w-32 h-32 text-primary opacity-70" 
                viewBox="0 0 24 24" 
                fill="none"
                animate={isHovering ? { x: [0, 10, 0], transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" } } : {}}
              >
                <motion.path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  animate={isHovering ? 
                    { pathLength: [0, 1], opacity: [0.3, 1], transition: { duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 } } 
                    : {}
                  }
                />
              </motion.svg>
            </div>
            <div className="block lg:hidden">
              <motion.svg 
                className="w-16 h-16 text-primary opacity-70" 
                viewBox="0 0 24 24" 
                fill="none"
                animate={isHovering ? { y: [0, 10, 0], transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" } } : {}}
              >
                <motion.path 
                  d="M12 5L12 19M12 19L19 12M12 19L5 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  animate={isHovering ? 
                    { pathLength: [0, 1], opacity: [0.3, 1], transition: { duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 } } 
                    : {}
                  }
                />
              </motion.svg>
            </div>
          </motion.div>

          {/* After Score */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-slate-800/80 to-purple-900/30 rounded-xl border border-purple-500/30 p-8 flex flex-col items-center shadow-xl shadow-purple-900/10 relative z-10"
          >
            <div className="text-primary mb-4 font-medium">With Project Cobra</div>
            <div className="relative w-44 h-44 mb-6">
              {/* Credit score circle background */}
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="#1e293b" 
                  strokeWidth="12" 
                />
                {/* Score indicator */}
                <motion.circle 
                  cx="60" 
                  cy="60" 
                  r="54" 
                  fill="none" 
                  stroke="url(#gradientScore2)" 
                  strokeWidth="12" 
                  strokeDasharray="340" 
                  variants={scoreIncreaseVariants}
                  animate={isHovering ? "hover" : "initial"}
                  strokeLinecap="round" 
                  transform="rotate(-90 60 60)" 
                />
                <defs>
                  <linearGradient id="gradientScore2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8a5cf5" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                  className="text-4xl font-bold text-white"
                  variants={numberCountVariants}
                  animate={isHovering ? "hover" : "initial"}
                  custom={580}
                >
                  {isHovering ? "720" : "580"}
                </motion.span>
                <motion.span 
                  className="text-sm text-primary"
                  variants={scoreTextVariants}
                  animate={isHovering ? "hover" : "initial"}
                >
                  {isHovering ? "Good" : "Poor"}
                </motion.span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white text-lg font-medium mb-2">AI-Powered Credit Repair</h3>
              <p className="text-slate-400 text-sm">Advanced algorithms identify and dispute errors faster with real-time tracking</p>
            </div>
            
            {/* Pulse effect when hovering */}
            {isHovering && (
              <motion.div
                className="absolute inset-0 rounded-xl z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 0.2, 0], 
                  scale: [0.8, 1.05, 0.8],
                  borderColor: ["rgba(139, 92, 246, 0.3)", "rgba(139, 92, 246, 0.6)", "rgba(139, 92, 246, 0.3)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                style={{
                  border: "2px solid rgba(139, 92, 246, 0.3)",
                }}
              />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/50 border border-purple-900/30 text-primary text-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px 5px rgba(139, 92, 246, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="mr-2"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >⚡</motion.span>
            On average, our clients see a 72-point increase in just 90 days
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 