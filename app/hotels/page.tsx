'use client'

import { motion } from 'framer-motion'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hotels() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050302] via-[#0b0705] to-[#120b07]">
        <AnimatedBackground variant="hotels" />
        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={container}
            className="max-w-2xl"
          >
            <motion.h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#fdf3e7] mb-4" variants={item}>
              Hotels
            </motion.h1>
            <motion.p className="body-base text-text-secondary max-w-2xl leading-relaxed mt-4" variants={item}>
              More direct bookings, more local impact. LocalLinkNL helps hotels and B&Bs drive direct bookings, source locally, and understand their impact on the Dutch economy.
            </motion.p>
            <motion.div className="flex flex-col gap-3 md:flex-row md:items-center mt-8" variants={item}>
              <Button href="/login" variant="primary" size="lg">
                Join as a hotel
              </Button>
              <a href="/hotels#features" className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary">
                See the dashboard →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <Section
        id="features"
        title="What does the hotel dashboard offer?"
        subtitle="Everything you need to win more direct bookings and buy locally."
        className="bg-surface"
        align="left"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: 'Direct booking toolkit',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              bullets: [
                'Your own booking link & widgets',
                'Drive direct reservations',
                'No heavy commissions',
              ],
            },
            {
              title: 'Supplier marketplace',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              bullets: [
                'Find Dutch suppliers',
                'For breakfast, housekeeping, interiors',
                'Send RFQs in seconds',
              ],
            },
            {
              title: 'Analytics & local score',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              bullets: [
                'Track local sourcing',
                'Impact score: how much stays in NL?',
                'Earn badges like “Locally Owned”',
              ],
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={item}
              transition={{ delay: index * 0.08 }}
            >
              <Card
                title={feature.title}
                icon={feature.icon}
                className="p-6"
              >
              <ul className="space-y-3">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Dashboard Preview */}
      <Section
        title="Hotel dashboard preview"
        subtitle="A quick glimpse of your dashboard inside LocalLinkNL."
        className="bg-body"
        align="left"
      >
        <div className="max-w-4xl mx-auto">
          <Card className="p-8" hover={false}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-elevated border border-border-subtle rounded-lg p-6">
                <div className="text-sm text-text-secondary mb-2">Local sourcing score</div>
                <div className="text-4xl font-bold text-accent mb-2">82%</div>
                <div className="w-full bg-body rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full w-[82%]"></div>
                </div>
              </div>
              
              <div className="bg-elevated border border-border-subtle rounded-lg p-6">
                <div className="text-sm text-text-secondary mb-2">Direct bookings this month</div>
                <div className="text-4xl font-bold text-accent">47</div>
                <div className="text-sm text-text-muted mt-2">+12% vs. last month</div>
              </div>
              
              <div className="bg-elevated border border-border-subtle rounded-lg p-6">
                <div className="text-sm text-text-secondary mb-2">Dutch suppliers active</div>
                <div className="text-4xl font-bold text-accent">23</div>
                <div className="text-sm text-text-muted mt-2">Across 8 categories</div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border-subtle">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text-primary">Recent activity</h3>
                <span className="text-sm text-text-muted">Last 7 days</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-border-subtle">
                  <span className="text-text-secondary text-sm">New direct booking received</span>
                  <span className="text-sm text-text-muted">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border-subtle">
                  <span className="text-text-secondary text-sm">RFQ sent to supplier</span>
                  <span className="text-sm text-text-muted">1 day ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-text-secondary text-sm">Earned badge “Locally Owned”</span>
                  <span className="text-sm text-text-muted">3 days ago</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Ready to start with LocalLinkNL?"
        subtitle="Sign up today and help strengthen the local economy."
        className="bg-surface"
      >
        <div className="text-center">
          <Button href="/login" variant="primary" size="lg">
            Join as a hotel
          </Button>
        </div>
      </Section>
    </div>
  )
}
