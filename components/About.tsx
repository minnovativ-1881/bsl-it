'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Heart } from 'lucide-react'
import CloudDivider from './CloudDivider'
import { useOptIn } from '@/context/OptInContext'
import Image from 'next/image'

const credentials = [
  { icon: Award, text: 'Consulente certificata del sonno infantile — Institute of Sensitive Sleep Consulting, Australia' },
  { icon: BookOpen, text: 'Master of Education, autrice di diversi e-book sul sonno del bambino' },
  { icon: Users, text: 'Oltre 50.000 partecipanti ai corsi online' },
  { icon: Heart, text: 'Mamma di 7 bambini — so esattamente cosa stai attraversando' },
]

export default function About() {
  const { openModal } = useOptIn()
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#EBF4FA' }}
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-[-8%] w-80 h-80 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-72 h-72 rounded-full bg-blush-100/30 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-16px] rounded-full border-2 border-dashed border-sky-300/60"
              />

              {/* Second ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-32px] rounded-full border border-blush-300/30"
              />

              {/* Main circle with photo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-strong">
                <Image
                  src="/images/sarah.webp"
                  alt="Sarah Mann — Consulente certificata del sonno infantile"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-white rounded-3xl px-5 py-3 shadow-medium border border-sky-100"
              >
                <p className="text-warm-700 font-semibold text-sm">50.000+ famiglie</p>
                <p className="text-warm-400 text-xs">si fidano de Il Regno della Nanna</p>
              </motion.div>

              {/* Floating stars badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -left-4 bg-white rounded-3xl px-4 py-2.5 shadow-medium border border-blush-100"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-warm-500 text-xs mt-0.5">4.8 / 5</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-4">
              Chi è Sarah
            </p>
            <h2
              className="font-serif font-light text-warm-800 leading-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
            >
              Ciao, sono <em className="text-sky-400 not-italic">Sarah</em>
            </h2>

            <div className="space-y-4 text-warm-600 leading-relaxed mb-8">
              <p>
                Sono consulente certificata del sonno infantile, Master of Education e mamma di sette bambini.
                Conosco bene le notti insonni — quella stanchezza profonda che senti in questo momento.
                So esattamente cosa stai attraversando.
              </p>
              <p>
                Per questo esiste <strong className="text-warm-800">Il Regno della Nanna</strong>.
                È il frutto di anni di ricerca, della mia formazione come consulente del sonno delicato
                e delle mie esperienze personali con i miei sette adorati bambini.
              </p>
              <p>
                Sei nel posto giusto se sei una mamma (o un papà) alla ricerca di soluzioni
                amorevoli ed efficaci per il sonno del tuo bambino o del tuo bimbo piccolo.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {credentials.map((cred, i) => {
                const Icon = cred.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-sky-500" />
                    </div>
                    <p className="text-warm-600 text-sm">{cred.text}</p>
                  </motion.div>
                )
              })}
            </div>

            <button onClick={openModal} className="btn-primary">
              Inizia il corso gratuito
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom cloud divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <CloudDivider fill="#FDF8F3" height={90} />
      </div>
    </section>
  )
}
