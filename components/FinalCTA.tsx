'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Lock, Gift, Zap } from 'lucide-react'
import CloudDivider from './CloudDivider'

const blobPath =
  'M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.1,41.8C64.8,54.7,53.8,65.9,40.6,73.6C27.4,81.3,13.7,85.5,-0.4,86.1C-14.5,86.7,-29,83.7,-42.3,77C-55.6,70.3,-67.7,59.9,-75.3,46.8C-82.9,33.7,-86,17.9,-85.6,2.1C-85.2,-13.6,-81.3,-27.2,-74,-38.8C-66.7,-50.4,-56,-60,-43.7,-67.9C-31.4,-75.8,-17.5,-82,-1.7,-79.4C14.1,-76.8,30.6,-83.6,44.7,-76.4Z'

const guideIncludes = [
  "I cicli del sonno del tuo bambino spiegati in modo semplice e chiaro",
  'Come creare una routine quotidiana che renda le notti piu facili',
  'Come introdurre una routine serale efficace e rilassante',
  'Le associazioni del sonno — e come modificarle con dolcezza',
  'Il percorso verso il sonno continuato tutta la notte',
]

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName: name }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="guide"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #D4907F 0%, #E8B4A8 50%, #C07060 100%)' }}
    >
      {/* Top cloud divider */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
        <CloudDivider fill="#FDF8F3" height={110} flip={true} />
      </div>

      {/* Decorative blobs */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] right-[-5%] w-72 h-72 opacity-20 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="white" d={blobPath} transform="translate(100 100)" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[-5%] left-[-5%] w-80 h-80 opacity-15 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="white" d={blobPath} transform="translate(100 100)" />
        </svg>
      </motion.div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold">Inizia oggi</span>
            </div>

            <h2
              className="font-serif font-light text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Pronta per le prime
              <br />
              <em className="not-italic opacity-80">notti tranquille?</em>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Iscriviti al corso gratuito sul sonno del bambino e ricevi cinque lezioni pratiche direttamente in casella di posta.
            </p>

            {/* What's included */}
            <div className="space-y-3">
              <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">
                Il corso include:
              </p>
              {guideIncludes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="bg-white rounded-5xl p-8 sm:p-10 shadow-strong">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-warm-800 mb-2">
                      Si, voglio partecipare!
                    </h3>
                    <p className="text-warm-500 text-sm mb-7">
                      Riceverai il corso gratuito via e-mail direttamente nella tua casella di posta.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-warm-700 mb-1.5">
                          Il tuo nome
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Il tuo nome"
                          required
                          className="w-full px-4 py-3.5 rounded-2xl border border-blush-200 focus:border-blush-400 focus:outline-none focus:ring-2 focus:ring-blush-200 transition-all text-warm-800 placeholder:text-warm-300 bg-cream"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-warm-700 mb-1.5">
                          Il tuo indirizzo email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Il tuo indirizzo email"
                          required
                          className="w-full px-4 py-3.5 rounded-2xl border border-blush-200 focus:border-blush-400 focus:outline-none focus:ring-2 focus:ring-blush-200 transition-all text-warm-800 placeholder:text-warm-300 bg-cream"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blush-400 hover:bg-blush-500 disabled:opacity-70 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-medium flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Invio in corso...
                          </>
                        ) : (
                          <>
                            Si, voglio partecipare!
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>

                    <div className="flex items-center justify-center gap-2 mt-5 text-warm-400 text-xs">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Completamente gratuito · Privacy garantita · Disiscriviti quando vuoi</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-sky-500" />
                    </motion.div>
                    <h3 className="font-serif text-2xl font-light text-warm-800 mb-3">
                      Perfetto, {name}!
                    </h3>
                    <p className="text-warm-500 text-base leading-relaxed mb-3">
                      La tua prima e-mail e in arrivo nella tua casella di posta.
                      Controlla la cartella spam se non la vedi entro qualche minuto.
                    </p>
                    <p className="text-warm-400 text-sm">
                      Alla prima di tante notti serene!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Below form trust signals */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                { icon: Gift, text: 'Gratuito' },
                { icon: Zap, text: 'Immediato' },
                { icon: Lock, text: 'Senza impegno' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-1.5 text-white/70 text-sm">
                    <Icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
