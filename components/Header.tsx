"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/hotels', label: 'Hotels' },
  { href: '/suppliers', label: 'Suppliers' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0705]/70 backdrop-blur-lg shadow-[0_12px_50px_rgba(0,0,0,0.4)] supports-[backdrop-filter]:bg-[#0a0705]/55"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-base md:text-lg font-semibold tracking-tight text-[#f4a259] transition-opacity duration-200 hover:opacity-85"
        >
          LocalLinkNL
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-7 text-sm text-[#d7c6b8] md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname?.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative inline-flex items-center pb-1 transition-colors duration-200 ease-[var(--ease-smooth)] ${
                  isActive ? 'text-[#fdf3e7]' : 'hover:text-[#fdf3e7]'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`pointer-events-none absolute -bottom-[2px] left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#f4a259] to-[#f7c189] transition-transform duration-250 ease-[var(--ease-smooth)] group-hover:scale-x-100 ${
                    isActive ? 'scale-x-100' : ''
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Login button */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full bg-[#f4a259] px-4 py-2 text-sm font-semibold text-[#1b130f] shadow-sm transition-all duration-200 ease-[var(--ease-smooth)] hover:bg-[#f6b36f] hover:shadow-md hover:-translate-y-[1px] active:translate-y-0"
          >
            Log in
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
