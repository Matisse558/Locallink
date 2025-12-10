'use client'

import { useState, ReactNode } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="bg-surface border border-border-subtle rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface-light transition-colors duration-200"
            >
              <span className="font-semibold text-text-primary pr-4 text-sm md:text-base">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-accent-primary flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4 text-text-secondary leading-relaxed text-sm md:text-base">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

