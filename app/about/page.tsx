'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero / Intro Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-body via-surface to-elevated pt-24 pb-16 md:pt-28">
        <div className="absolute top-16 right-0 z-[2] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(244,162,89,0.15)_0%,transparent_70%)] blur-3xl opacity-35 animate-blob" />
        <div className="absolute bottom-12 left-0 z-[2] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(249,115,98,0.12)_0%,transparent_70%)] blur-3xl opacity-30 animate-blob-delay" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#fdf3e7] mb-4">About</h1>
            <p className="body-base md:text-lg text-text-secondary mx-auto max-w-2xl leading-relaxed mt-4">
              LocalLinkNL (formerly StayLocalNL) was founded to keep tourism spending inside the Dutch economy. We connect travelers, hotels, B&Bs, and Dutch suppliers so everyone benefits from a fair, local value chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <Section title="Our mission & vision" className="bg-surface relative" align="left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp}>
            <Card className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h2 className="text-3xl font-bold text-text-primary">Our mission</h2>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                We strive for more direct bookings without expensive intermediaries so hotels and B&Bs keep more revenue. By linking local suppliers to accommodations, we strengthen the Dutch economy and ensure value stays close to home.
              </p>
            </Card>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp}>
            <Card className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h2 className="text-3xl font-bold text-text-primary">Our vision</h2>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                We envision travel where guests see exactly where their money goes and the local impact it creates. Hotels make conscious choices for Dutch suppliers and instantly see their local sourcing score improve. Suppliers get the visibility and recognition they deserve.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* How We Do It Section */}
      <Section title="How we make it happen" className="bg-body relative" align="left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: 'For travelers',
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              text: 'Transparent, impact-first bookings at local hotels and B&Bs. See how much of your spend stays in the Netherlands and which local suppliers you support.',
            },
            {
              title: 'For hotels & B&Bs',
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              ),
              text: 'Tools for direct bookings without high commissions, access to a supplier marketplace, and insight into local sourcing and economic impact.',
            },
            {
              title: 'For Dutch suppliers',
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              text: 'Visibility with hotels that want to source locally, relevant RFQs, and badges like “Circular Partner” and “Regional Champion” to spotlight sustainability.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
            >
              <Card title={item.title} icon={item.icon} className="p-6">
                <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section title="Our story" className="bg-surface relative" align="left">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'The spark',
                text: 'LocalLinkNL was born from frustration with heavy commissions draining revenue from Dutch hotels and B&Bs. Travelers lacked transparency, and local value leaked away.',
              },
              {
                number: '2',
                title: 'From StayLocalNL to LocalLinkNL',
                text: 'We began with direct bookings. Quickly we realized we could also connect hotels with Dutch suppliers. The new name reflects the broader mission: linking travelers, accommodations, and local suppliers.',
              },
              {
                number: '3',
                title: 'Looking ahead',
                text: 'We are expanding across the Netherlands, deepening data insights for hotels and suppliers, and partnering with those who believe in strong local economies.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start gap-6 md:flex-row"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-body text-lg font-bold shadow-glow">
                    {item.number}
                  </div>
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="mb-3 text-2xl font-bold text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        title="Ready to build a stronger local economy?"
        subtitle="Hotels and suppliers can join LocalLinkNL today."
        className="bg-body"
      >
        <div className="text-center">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/hotels" variant="primary" size="lg">
              For hotels & B&Bs
            </Button>
            <Button href="/suppliers" variant="secondary" size="lg">
              For suppliers
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
