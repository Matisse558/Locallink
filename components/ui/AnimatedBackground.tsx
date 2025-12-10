'use client'

import { motion } from 'framer-motion'

type AnimatedBackgroundProps = {
  variant?: 'home' | 'hotels' | 'suppliers'
}

export default function AnimatedBackground({ variant = 'home' }: AnimatedBackgroundProps) {
  if (variant === 'home') {
    return (
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {/* Subtle noise/grain overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        
        {/* Soft atmospheric blobs - Linear/Notion style */}
        <motion.div
          animate={{
            x: [0, -30, 20, -15, 0],
            y: [0, 20, -25, 15, 0],
            scale: [1, 1.05, 0.98, 1.03, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#2b160f] via-[#f4a25915] to-transparent blur-3xl opacity-25"
        />
        
        <motion.div
          animate={{
            x: [0, 25, -20, 30, 0],
            y: [0, -30, 25, -20, 0],
            scale: [1, 0.98, 1.04, 0.99, 1],
          }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -right-32 top-[-160px] h-[380px] w-[380px] rounded-full bg-gradient-to-br from-[#f4a25912] via-[#2b160f] to-transparent blur-3xl opacity-20"
        />
        
        {/* Subtle radial gradient - ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(244,162,89,0.06),transparent_60%)]" />
      </div>
    )
  }

  // Hotels variant
  if (variant === 'hotels') {
    return (
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 20, -15, 0],
            scale: [1, 1.03, 0.98, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-150px] right-[-100px] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(244,162,89,0.1)_0%,transparent_60%)] blur-3xl opacity-25"
        />
        <motion.div
          animate={{
            x: [0, 20, -25, 0],
            y: [0, -20, 15, 0],
            scale: [1, 0.99, 1.02, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-[-100px] left-[-100px] h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(244,162,89,0.08)_0%,transparent_60%)] blur-3xl opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(244,162,89,0.06),transparent_50%)]" />
      </div>
    )
  }

  // Suppliers variant
  if (variant === 'suppliers') {
    return (
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.02, 0.99, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-150px] left-[-100px] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(244,162,89,0.1)_0%,transparent_60%)] blur-3xl opacity-25"
        />
        <motion.div
          animate={{
            x: [0, -20, 25, 0],
            y: [0, 20, -25, 0],
            scale: [1, 0.98, 1.03, 1],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute top-[-120px] right-[-120px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_20%_80%,rgba(244,162,89,0.08)_0%,transparent_60%)] blur-3xl opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(244,162,89,0.06),transparent_50%)]" />
      </div>
    )
  }

  return null
}
