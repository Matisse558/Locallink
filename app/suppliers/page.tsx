'use client'

import { motion } from 'framer-motion'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const container = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Suppliers() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050302] via-[#0b0705] to-[#120b07]">
        <AnimatedBackground variant="suppliers" />
        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={container}
            className="max-w-2xl"
          >
            <motion.h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#fdf3e7] mb-4" variants={item}>
              Suppliers
            </motion.h1>
            <motion.p className="body-base text-text-secondary max-w-2xl leading-relaxed mt-4" variants={item}>
              Connect your business with hotels that buy local. LocalLinkNL links Dutch suppliers with hotels and B&Bs. Reach hospitality teams that choose regional products and build long-term partnerships.
            </motion.p>
            <motion.div className="flex flex-col gap-3 md:flex-row md:items-center mt-8" variants={item}>
              <Button href="/login" variant="primary" size="lg">
                Join as a supplier
              </Button>
              <a href="/suppliers#features" className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary">
                Learn more about collaborating →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <Section
        id="features"
        title="Benefits for suppliers"
        subtitle="Everything you need to reach hotels that intentionally source locally."
        className="bg-surface"
        align="left"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Business profile & catalog',
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              text: "Showcase your business and full catalog to hotels and B&Bs that are actively searching for your products or services.",
            },
            {
              title: 'Receive RFQs from hotels',
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              text: "Hotels send targeted RFQs for breakfast, housekeeping, interiors, circular furniture, and more. Reply quickly and grow long-term partnerships.",
            },
            {
              title: 'Badges & visibility',
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              text: 'Earn badges like “Circular Partner”, “Regional Champion”, and “Organic” to highlight sustainability and local impact—boosting your visibility.',
            },
            {
              title: 'Usage insights',
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              text: 'See which hotels are using your products, track your impact, and spot new opportunities inside the LocalLinkNL network.',
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={item}
              transition={{ delay: index * 0.05 }}
            >
              <Card title={benefit.title} icon={benefit.icon} className="p-6">
                <p className="text-text-secondary text-sm leading-relaxed">{benefit.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Example Profile */}
      <Section
        title="Sample supplier profile"
        subtitle="How a supplier profile looks inside LocalLinkNL."
        className="bg-body"
        align="left"
      >
        <div className="max-w-4xl mx-auto">
          <Card className="p-8" hover={false}>
            <div className="mb-6 flex flex-col gap-4 border-b border-border-subtle pb-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-3xl font-bold text-text-primary mb-2">The Green Baker</h3>
                <p className="text-lg text-text-secondary mb-4">Utrecht region</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="accent" size="md">Breakfast</Badge>
                  <Badge variant="accent" size="md">Bakery</Badge>
                  <Badge variant="accent" size="md">Organic</Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 md:mt-0">
                <Badge variant="accent" size="md">Bio</Badge>
                <Badge variant="accent" size="md">Circular Partner</Badge>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border-subtle bg-elevated p-4">
                <div className="text-sm text-text-secondary mb-1">Active hotels</div>
                <div className="text-2xl font-bold text-text-primary">12</div>
              </div>
              <div className="rounded-lg border border-border-subtle bg-elevated p-4">
                <div className="text-sm text-text-secondary mb-1">RFQs received</div>
                <div className="text-2xl font-bold text-text-primary">28</div>
              </div>
              <div className="rounded-lg border border-border-subtle bg-elevated p-4">
                <div className="text-sm text-text-secondary mb-1">Since</div>
                <div className="text-2xl font-bold text-text-primary">2023</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">About this business</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                The Green Baker delivers fresh organic bread and pastries daily to hotels and B&Bs in the Utrecht region. With local ingredients and sustainable packaging, we help build a circular economy.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Become a supplier at LocalLinkNL"
        subtitle="Join a growing network of Dutch suppliers and hotels."
        className="bg-surface"
      >
        <div className="text-center">
          <Button href="/login" variant="primary" size="lg">
            Join as supplier
          </Button>
        </div>
      </Section>
    </div>
  )
}
