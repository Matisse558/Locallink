import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4a259] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050302]'
  
  const variants = {
    primary: 'bg-accent text-body hover:bg-accent/90 hover:-translate-y-[1px] hover:shadow-md active:translate-y-0',
    secondary: 'border border-accent text-accent bg-transparent hover:bg-white/5 hover:border-[#f4a259] active:translate-y-0',
    ghost: 'text-text-secondary hover:text-[#fdf3e7] hover:bg-white/5',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href && !href.startsWith('mailto:')) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  if (href && href.startsWith('mailto:')) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
