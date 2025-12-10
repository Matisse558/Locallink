'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function Login() {
  const [accountType, setAccountType] = useState<'hotel' | 'leverancier'>('hotel')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: { email?: string; password?: string } = {}
    
    if (!email.trim()) {
      newErrors.email = 'E-mailadres is verplicht'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Ongeldig e-mailadres'
    }
    
    if (!password.trim()) {
      newErrors.password = 'Wachtwoord is verplicht'
    }
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Login attempt:', { accountType, email, password })
      alert(`Inloggen als ${accountType === 'hotel' ? 'hotel' : 'leverancier'} - Functionaliteit volgt binnenkort`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-body via-surface to-elevated flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(244,162,89,0.1)_0%,transparent_70%)] rounded-full blur-3xl opacity-40 animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(249,115,98,0.08)_0%,transparent_70%)] rounded-full blur-3xl opacity-30 animate-blob2" />
      
      <div className="w-full max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg p-8" hover={false}>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-accent mb-2">
                LocalLinkNL
              </h1>
              <p className="text-sm text-text-secondary">
                B2B portaal voor hotels en leveranciers
              </p>
            </div>

            {/* Account Type Tabs */}
            <div className="flex mb-6 bg-elevated border border-border-subtle rounded-xl p-1">
              <button
                type="button"
                onClick={() => {
                  setAccountType('hotel')
                  setErrors({})
                }}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  accountType === 'hotel'
                    ? 'bg-surface text-accent border border-border-subtle shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Hotel
              </button>
              <button
                type="button"
                onClick={() => {
                  setAccountType('leverancier')
                  setErrors({})
                }}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  accountType === 'leverancier'
                    ? 'bg-surface text-accent border border-border-subtle shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Leverancier
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) {
                      setErrors({ ...errors, email: undefined })
                    }
                  }}
                  className={`w-full px-4 py-3 bg-body border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-text-primary placeholder:text-text-muted ${
                    errors.email ? 'border-accent' : 'border-border-subtle'
                  }`}
                  placeholder="jouw@email.nl"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-accent">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">
                  Wachtwoord
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) {
                      setErrors({ ...errors, password: undefined })
                    }
                  }}
                  className={`w-full px-4 py-3 bg-body border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-text-primary placeholder:text-text-muted ${
                    errors.password ? 'border-accent' : 'border-border-subtle'
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-accent">{errors.password}</p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm text-accent hover:text-accent/90 hover:underline transition-colors duration-200"
                >
                  Wachtwoord vergeten?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
              >
                Inloggen als {accountType === 'hotel' ? 'hotel' : 'leverancier'}
              </Button>
            </form>

            {/* Footer Text */}
            <div className="mt-8 pt-6 border-t border-border-subtle text-center">
              <p className="text-sm text-text-secondary">
                Nog geen account?{' '}
                <Link
                  href="/contact"
                  className="text-accent hover:text-accent/90 hover:underline font-medium transition-colors duration-200"
                >
                  Neem contact met ons op
                </Link>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
