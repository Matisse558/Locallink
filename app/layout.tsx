import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LocalLinkNL — Local stays, local impact',
  description:
    'Book directly with Dutch hotels and B&Bs without commission fees. Support the local economy and source from Dutch suppliers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#050302] text-[#fdf3e7] antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="relative z-10 flex-1 bg-[#050302] min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
