'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  viewportAmount?: number
}

export default function MotionSection({
  children,
  delay = 0,
  className = '',
  viewportAmount = 0.4,
}: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

