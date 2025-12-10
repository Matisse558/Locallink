'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'

interface FAQItem {
  question: string
  answer: string
}

const faqData = {
  travelers: [
    {
      question: 'What exactly is LocalLinkNL?',
      answer: "LocalLinkNL connects travelers, local hotels and B&Bs, and Dutch suppliers. We enable direct bookings without hefty commissions so more money stays in the Dutch economy.",
    },
    {
      question: 'Do I book via LocalLinkNL or directly with the hotel?',
      answer: 'You book directly with the hotel through LocalLinkNL. We facilitate the connection with full transparency; the booking is between you and the accommodation, so you avoid extra fees.',
    },
    {
      question: 'Why does booking via LocalLinkNL help the Dutch economy?',
      answer: 'Direct bookings and hotels that source from Dutch suppliers keep more spend inside the Netherlands. You can see how much of your money stays local and which suppliers you support.',
    },
    {
      question: 'Do I pay extra when booking via LocalLinkNL?',
      answer: "No. LocalLinkNL doesn’t charge travelers commission. Hotels can offer fair pricing without passing on high platform fees.",
    },
    {
      question: 'Can I see the impact of my booking?',
      answer: 'Yes. After booking you see how much of your spend stays in the Netherlands and which local suppliers you support. Hotels can also show their local sourcing score.',
    },
  ] as FAQItem[],
  hotels: [
    {
      question: 'What does it cost for a hotel to participate?',
      answer: "LocalLinkNL doesn’t charge the heavy commissions of traditional platforms. We use a transparent pricing model focused on increasing your direct bookings—contact us for details.",
    },
    {
      question: 'How do I get more direct bookings with LocalLinkNL?',
      answer: 'Through our dashboard you get booking links and widgets for your own site. We help you drive direct reservations and improve profitability without middlemen.',
    },
    {
      question: 'What is the Supplier Marketplace?',
      answer: 'It’s where you discover Dutch suppliers for everything: breakfast items, housekeeping, interiors, circular furniture, and more. Send RFQs easily and connect directly.',
    },
    {
      question: 'How does the local sourcing score work?',
      answer: 'Your score shows how much of your procurement is with Dutch suppliers. A higher score means more money stays in the Netherlands. Use it to show impact and earn badges like “Locally Owned”.',
    },
    {
      question: 'Can I connect my existing PMS/booking system?',
      answer: 'We are working on integrations with various PMS systems. Contact us to discuss options for your stack.',
    },
  ] as FAQItem[],
  suppliers: [
    {
      question: 'Which suppliers can join?',
      answer: 'Any Dutch suppliers serving hotels and B&Bs: breakfast providers, housekeeping, furniture makers, textiles, and more. If you operate locally and strengthen the Dutch economy, you’re welcome.',
    },
    {
      question: 'How do I connect with hotels through LocalLinkNL?',
      answer: 'Create a business profile with your products and services. Hotels can find you in the Supplier Marketplace, and you receive relevant RFQs from hotels seeking your offering.',
    },
    {
      question: 'What are RFQs and how do they work?',
      answer: 'RFQ stands for Request for Quotation. Hotels send targeted requests via LocalLinkNL; you receive them in your dashboard and can respond immediately with a quote to build long-term partnerships.',
    },
    {
      question: 'How do badges like “Circular Partner” work?',
      answer: 'Earn badges such as “Circular Partner”, “Regional Champion”, and “Organic” based on sustainability and local engagement. They boost your visibility with hotels and signal your contribution to a circular, local economy.',
    },
    {
      question: 'Are there costs to participate?',
      answer: 'We use a transparent pricing model for suppliers. Contact us for exact costs and what you receive in return.',
    },
  ] as FAQItem[],
}

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Hero / Intro Section */}
      <section className="relative bg-gradient-to-br from-body via-surface to-elevated py-12 md:py-20 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(244,162,89,0.15)_0%,transparent_70%)] rounded-full blur-3xl opacity-40 z-[2] animate-blob" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(249,115,98,0.12)_0%,transparent_70%)] rounded-full blur-3xl opacity-30 z-[2] animate-blob-delay" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-6 leading-tight">Frequently Asked Questions</h1>
            <p className="body-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about LocalLinkNL. If you don’t see yours, feel free to contact us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <Section
        className="bg-surface relative"
      >
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Travelers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-md mb-8 pb-4 border-b-2 border-accent">
              For travelers
            </h2>
            <Accordion items={faqData.travelers} />
          </motion.div>

          {/* Hotels & B&Bs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="heading-md mb-8 pb-4 border-b-2 border-accent">
              For hotels & B&Bs
            </h2>
            <Accordion items={faqData.hotels} />
          </motion.div>

          {/* Suppliers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="heading-md mb-8 pb-4 border-b-2 border-accent">
              For suppliers
            </h2>
            <Accordion items={faqData.suppliers} />
          </motion.div>
        </div>
      </Section>

      {/* Contact Block */}
      <Section
        title="Still have questions?"
        subtitle="Reach out and we’ll help you quickly."
        className="bg-body"
      >
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact us
            </Button>
            <Button href="mailto:info@locallinknl.nl" variant="secondary" size="lg">
              Send an email
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
