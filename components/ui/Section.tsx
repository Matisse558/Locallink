import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  eyebrow?: string
  subtitle?: string
  children: ReactNode
  align?: 'center' | 'left'
  className?: string
}

export default function Section({
  id,
  title,
  eyebrow,
  subtitle,
  children,
  align = 'center',
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {(eyebrow || title || subtitle) && (
          <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            {eyebrow && (
              <p className="uppercase tracking-wide text-xs text-text-muted mb-2 font-medium">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="heading-lg mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="body-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
