'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const badCreditItems = [
  'Late Payments',
  'Collections',
  'High Utilization',
  'Defaults',
  'Bankruptcies',
  'Charge-offs',
  'Negative Items'
]

export default function DroneAnimation() {
  const [activeItems, setActiveItems] = useState<string[]>([])

  useEffect(() => {
    const spawnItems = () => {
      const items = [...badCreditItems]
      let currentIndex = 0

      const interval = setInterval(() => {
        if (currentIndex < items.length) {
          setActiveItems(prev => [...prev, items[currentIndex]])
          currentIndex++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setActiveItems([])
            spawnItems()
          }, 2000)
        }
      }, 500)

      return () => clearInterval(interval)
    }

    spawnItems()
  }, [])

  return (
    <div className="drone-container mt-12">
      <motion.div
        className="drone flex items-center justify-center bg-blue-500 rounded-lg p-4"
        initial={{ x: '-100%' }}
        animate={{ 
          x: ['-100%', '0%', '0%', '0%', '100%'],
          y: [0, 0, -20, 0, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      >
        <span className="text-white font-bold text-sm">Project Cobra</span>
      </motion.div>
      
      {activeItems.map((item, index) => (
        <motion.div
          key={`${item}-${index}`}
          className="bad-credit-item"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          style={{
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 60 + 20}%`,
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  )
} 