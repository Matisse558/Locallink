import { ReactNode } from 'react'

interface StatProps {
  value: string | ReactNode
  label: string
  className?: string
}

export default function Stat({ value, label, className = '' }: StatProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-accent mb-3 tracking-tight">
        {value}
      </div>
      <p className="text-text-secondary font-medium text-sm">
        {label}
      </p>
    </div>
  )
}
