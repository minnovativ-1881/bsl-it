'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, CheckCircle, Loader2 } from 'lucide-react'
import { useOptIn } from '@/context/OptInContext'

const guideIncludes = [
  'I ritmi del sonno del tuo bambino spiegati chiaramente',
  'Come costruire una routine quotidiana che aiuti il sonno notturno',
  'Come introdurre un rituale serale rilassante',
  'Le associazioni del sonno — e come cambiarle con dolcezza',
  'Il percorso verso il sonno continuato',
]

export default function OptInModal() {
  const { isOpen, closeModal } = useOptIn()
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      // Reset form when closed
      setTimeout(() => {
        setFirstName('')
        setEmail('')
        setStatus('idle')
        setErrorMsg('')
      }, 300)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeModal])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      closeModal()
      router.push('/confirm')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-warm-900/50 backdrop-blur-sm z-50"
            onClick={closeModal}
            aria-hidden
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Get your free baby sleep email course"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden">

              {/* Header */}
              <div className="relative bg-gradient-to-br from-blush-50 to-sky-50 px-8 pt-8 pb-6 border-b border-warm-100">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-warm-100 hover:bg-warm-200 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-warm-500" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-4 h-4 text-blush-400 fill-blush-300" />
                  <span className="text-blush-500 text-sm font-semibold">Gratuito · Immediato · Senza impegno</span>
                </div>

                <h2 className="font-serif font-light text-warm-800 text-2xl leading-snug mb-1">
                  5 passi verso notti piu serene
                </h2>
                <p className="text-warm-500 text-sm">
                  Iscriviti gratuitamente al corso sul sonno del bambino
                </p>
              </div>

              {/* Body */}
              <div className="px-8 py-6">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-sky-500" />
                    </div>
                    <h3 className="font-semibold text-warm-800 text-lg mb-2">Sei iscritta!</h3>
                    <p className="text-warm-500 text-sm leading-relaxed">
                      Controlla la tua casella di posta — il tuo primo passo verso notti serene e in arrivo.
                    </p>
                    <button onClick={closeModal} className="mt-6 btn-primary">
                      Chiudi
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* What's inside */}
                    <ul className="space-y-2 mb-6">
                      {guideIncludes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-warm-600">
                          <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate className="space-y-3">
                      <input
                        ref={firstInputRef}
                        type="text"
                        placeholder="Il tuo nome (opzionale)"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-warm-200 focus:border-blush-300 focus:outline-none focus:ring-2 focus:ring-blush-100 text-warm-800 placeholder:text-warm-300 text-sm transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Il tuo indirizzo email *"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setErrorMsg('') }}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-warm-200 focus:border-blush-300 focus:outline-none focus:ring-2 focus:ring-blush-100 text-warm-800 placeholder:text-warm-300 text-sm transition-all"
                      />

                      {errorMsg && (
                        <p className="text-red-500 text-xs px-1">{errorMsg}</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-primary w-full justify-center disabled:opacity-70"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Invio in corso...
                          </>
                        ) : (
                          'Si, voglio partecipare!'
                        )}
                      </button>
                    </form>

                    <p className="text-warm-400 text-xs text-center mt-4">
                      Rispettiamo la tua privacy. Disiscriviti in qualsiasi momento.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
