'use client'

import { ReactNode } from 'react'

interface SceneSectionProps {
  id?: string
  backgroundVariant?: 'hero' | 'pinned' | 'impact' | 'horizontal' | 'cta' | 'default'
  children: ReactNode
  className?: string
}

export default function SceneSection({
  id,
  backgroundVariant = 'default',
  children,
  className = '',
}: SceneSectionProps) {
  const baseStyles = 'relative py-section md:py-section-lg overflow-hidden'
  
  const backgroundVariants = {
    hero: 'bg-gradient-to-br from-body via-surface to-surface-light',
    pinned: 'bg-surface-lighter',
    impact: 'bg-body',
    horizontal: 'bg-surface',
    cta: 'bg-gradient-to-br from-body to-surface',
    default: 'bg-body',
  }
  
  return (
    <section id={id} className={`${baseStyles} ${backgroundVariants[backgroundVariant]} ${className}`}>
      {/* Background layers */}
      {backgroundVariant === 'hero' && (
        <>
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(244,162,89,0.15)_0%,transparent_70%)] rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(249,115,98,0.12)_0%,transparent_70%)] rounded-full blur-3xl opacity-30" />
        </>
      )}
      
      {backgroundVariant === 'pinned' && (
        <div className="absolute inset-0 grid-pattern opacity-5" />
      )}
      
      {backgroundVariant === 'impact' && (
        <>
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,162,89,0.08)_0%,transparent_60%)]" />
        </>
      )}
      
      {backgroundVariant === 'horizontal' && (
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface-light to-surface opacity-50" />
      )}
      
      {backgroundVariant === 'cta' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(244,162,89,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 grid-pattern opacity-5" />
        </>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

