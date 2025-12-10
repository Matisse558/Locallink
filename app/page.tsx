'use client'

import { motion } from 'framer-motion'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import FloatingMap from '@/components/ui/FloatingMap'

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050302] text-[#fdf3e7]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#070504] via-[#0d0806] to-[#120b07]">
        <AnimatedBackground variant="home" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[80px] md:text-[140px] lg:text-[180px] font-extrabold tracking-[0.25em] text-white/5">
          <span className="hidden md:inline">LOCAL IMPACT</span>
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-20 md:flex-row md:items-center md:pb-24 md:pt-28">
          {/* Left column */}
          <motion.div
            className="max-w-xl space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={container}
          >
            <motion.h1 className="heading-xl" variants={item}>
              Book a stay that keeps your money in the Netherlands.
            </motion.h1>
            <motion.p className="body-base text-[#d7c6b8]" variants={item}>
              LocalLinkNL connects travelers, local hotels, and Dutch suppliers. No heavy commission fees—just transparent, local impact with every booking.
            </motion.p>

            {/* Search card */}
            <motion.div
              className="mt-2 rounded-2xl border border-[#2b1a13] bg-[#15100d] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.85)] transition-transform transition-shadow duration-200 ease-[var(--ease-smooth)] hover:-translate-y-[2px] hover:shadow-[0_22px_70px_rgba(0,0,0,0.9)]"
              variants={item}
            >
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <label className="mb-1 block text-xs font-medium text-[#b6a192]">
                    Where do you want to stay?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Amsterdam, Veluwe, coastline..."
                    className="w-full rounded-xl bg-[#050302] px-3 py-3 text-sm text-[#fdf3e7] placeholder:text-[#6b5b4e] outline-none focus:ring-2 focus:ring-[#f4a259]"
                  />
                </div>
                <div className="w-full md:w-48">
                  <label className="mb-1 block text-xs font-medium text-[#b6a192]">
                    Dates
                  </label>
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full rounded-xl bg-[#050302] px-3 py-3 text-sm text-[#fdf3e7] placeholder:text-[#6b5b4e] outline-none focus:ring-2 focus:ring-[#f4a259]"
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 12px 24px rgba(0,0,0,0.3)' }}
                whileTap={{ y: 0 }}
                className="mt-4 w-full rounded-xl bg-[#f4a259] px-4 py-3 text-sm font-semibold text-[#1b130f] shadow-sm transition duration-200 ease-[var(--ease-smooth)] hover:bg-[#f6b36f] hover:shadow-md"
              >
                Search stays
              </motion.button>

              {/* Filters */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Locally owned only',
                  'Top local sourcing',
                  'Pet friendly',
                ].map((label) => (
                  <motion.button
                    key={label}
                    whileHover={{ y: -1 }}
                    className="rounded-full border border-[#2b1a13] bg-[#050302] px-3 py-1 text-xs text-[#d7c6b8] transition duration-200 ease-[var(--ease-smooth)] hover:border-[#f4a259] hover:text-[#fdf3e7]"
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column – impact card */}
          <motion.div
            className="w-full max-w-sm md:ml-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={container}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="rounded-2xl border border-[#2b1a13] bg-[#15100d] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.85)] transition-transform duration-200 ease-[var(--ease-smooth)] hover:-translate-y-[2px] hover:shadow-[0_22px_70px_rgba(0,0,0,0.9)]"
              variants={item}
            >
              <h2 className="heading-sm">Your impact at a glance</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#d7c6b8]">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f4a259]" />
                  <span>
                    <span className="font-semibold text-[#fdf3e7]">€2.3M+ </span>
                    kept inside the Dutch economy
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f4a259]" />
                  <span>
                    <span className="font-semibold text-[#fdf3e7]">180+ </span>
                    local suppliers connected
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f4a259]" />
                  <span>
                    Hotels across <span className="font-semibold">the Netherlands</span>
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-[11px] text-[#8f7c6d]">* Example figures for illustration.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Local impact map */}
      <section className="bg-[#050302] py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
          <div className="mx-auto max-w-3xl">
            <FloatingMap />
            <p className="mt-6 text-center text-sm text-[#d7c6b8] max-w-xl mx-auto">
              This map shows how hotels spread their purchasing across local suppliers and how every euro stays within the Dutch economy.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
