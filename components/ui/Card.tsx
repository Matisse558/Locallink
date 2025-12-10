import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title?: string
  icon?: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  title,
  icon,
  className = '',
  hover = true,
}: CardProps) {
  const baseStyles = 'rounded-xl bg-[#15100d] border border-[#2b1a13] shadow-sm transition-all duration-200 ease-out'
  
  const hoverStyles = hover
    ? 'hover:-translate-y-[2px] hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:scale-[1.01]'
    : ''
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-accent">{icon}</div>}
          {title && <h3 className="text-xl font-semibold text-text-primary">{title}</h3>}
        </div>
      )}
      <div>{children}</div>
    </div>
  )
}
